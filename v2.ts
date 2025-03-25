namespace cutebotProV2 {

    const cutebotProAddr = 0x10
    let fourWayStateValue = 0
    let timeDelay = 500

    /******************************************************************************************************
     * 工具函数
     ******************************************************************************************************/
    export function i2cCommandSend(command: number, params: number[]) {
        let buff = pins.createBuffer(params.length + 4);
        buff[0] = 0xFF; // 帧头
        buff[1] = 0xF9; // 帧头
        buff[2] = command; // 指令
        buff[3] = params.length; // 参数长度
        for (let i = 0; i < params.length; i++) {
            buff[i + 4] = params[i];
        }
        pins.i2cWriteBuffer(cutebotProAddr, buff);
        delay_ms(1);
    }

    /******************************************************************************************************
     * 工具函数
     ******************************************************************************************************/
    export function setbause(bause: number) {
        timeDelay = bause;
    }

    /******************************************************************************************************
     * 工具函数
     ******************************************************************************************************/
    export function pidPause(ms: number) {
        let time = control.millis() + ms
        while (1) {
            i2cCommandSend(0xA0, [0x05])
            if (pins.i2cReadNumber(cutebotProAddr, NumberFormat.UInt8LE, false) || control.millis() >= time) {
                basic.pause(500)
                break
            }
            basic.pause(10)
        }
    }

    function delay_ms(ms: number) {
        let endTime = input.runningTime() + ms;
        while (endTime > input.runningTime()) {

        }
    }

    /**
     * motorControl
     * wheel:0-liftwheel，1-rightwheel，2-allwheel
     * leftSpeed:[-100, 100]
     * rightSpeed:[-100, 100]
     */
    export function motorControl(wheel: number, leftSpeed: number, rightSpeed: number): void {

        let direction: number = 0;

        if (leftSpeed < 0) {
            direction |= 0x01;
        }

        if (rightSpeed < 0) {
            direction |= 0x2;
        }

        i2cCommandSend(0x10, [wheel, Math.abs(leftSpeed), Math.abs(rightSpeed), direction]);

    }

    /**
    * set LED headlights.
    * wheel:0-liftlight，1-rightlight，2-alllight
    */
    export function colorLight(light: number, color: number) {
        let r: number, g: number, b: number = 0
        r = color >> 16
        g = (color >> 8) & 0xFF
        b = color & 0xFF

        i2cCommandSend(0x20, [light, Math.abs(r), Math.abs(g), Math.abs(b)]);
    }

    /**
    * select a headlights and set the RGB color.
    * @param R R color value of RGB color, eg: 0
    * @param G G color value of RGB color, eg: 128
    * @param B B color value of RGB color, eg: 255
    */
    export function singleHeadlights(light: number, r: number, g: number, b: number): void {
        i2cCommandSend(0x20, [light, Math.abs(r), Math.abs(g), Math.abs(b)]);
    }

    /**
    * turn off all the LED lights
    */
    export function turnOffAllHeadlights(): void {
        i2cCommandSend(0x20, [2, 0, 0, 0]);
    }

    /**
     * motor control module
     */
    export function extendMotorControl(speed: number): void {
        let direction: number = 0;

        if (speed > 0) {
            direction |= 0x01;
        }
        i2cCommandSend(0x30, [Math.abs(speed), direction]);
    }

    /**
     * extend motor stop
     */
    export function extendMotorStop(): void {
        i2cCommandSend(0x30, [0, 0]);
    }

    /**
     * servo control module
     * servotype:0-servo180,1-servo270,2-servo360
     * index:0-M1,1-M2,2-M3,3-M4
     */
    export function extendServoControl(servotype: number, index: number, angle: number): void {
        let angleMap: number
        if (servotype == 1) {
            angleMap = Math.map(angle, 0, 180, 0, 180);
        }

        if (servotype == 2) {
            angleMap = Math.map(angle, 0, 270, 0, 180);
        }

        if (servotype == 3) {
            angleMap = Math.map(angle, 0, 360, 0, 180);
        }

        i2cCommandSend(0x40, [index, angleMap]);
    }

    /**
     * continuous servo control
     */
    export function continuousServoControl(index: number, speed: number): void {
        speed = Math.map(speed, -100, 100, 0, 180)
        extendServoControl(1, index, speed)
    }

    /**
     * read motor speed
     * motor:0-M1,1-M2
     * speedUnits:0-cms,1-inch
     */
    export function readSpeed(motor: number, speedUnits: number): number {
        i2cCommandSend(0xA0, [motor + 1])
        let speed = pins.i2cReadBuffer(cutebotProAddr, 1)

        if (speedUnits == 0)
            return speed[0];
        else
            return speed[0] / 0.3937;
    }

    /**
    * get the rotation degrees of wheel
    * motor:0-M1,1-M2
    */
    export function readDistance(motor: number): number {
        i2cCommandSend(0xA0, [motor + 3])
        return pins.i2cReadNumber(cutebotProAddr, NumberFormat.Int32LE, false)
    }

    /**
     * clear the rotation degrees of wheel
     * motor:0-M1,1-M2
     */
    export function clearWheelTurn(motor: number): void {
        i2cCommandSend(0x50, [motor]);
    }

    /**
    * get a status value of the 4-way line following sensor
    */
    export function trackbitStateValue(): void {
        i2cCommandSend(0x60, [0x00])
        let states = pins.i2cReadNumber(cutebotProAddr, NumberFormat.UInt8LE, false)
        fourWayStateValue = states;
    }

    /**
    * 4-way line following sensor offset
    */
    export function getOffset(): number {
        i2cCommandSend(0x60, [0x01])

        let value = pins.i2cReadBuffer(cutebotProAddr, 2)
        let offset = value[0] << 8 | value[1];
        offset = Math.map(offset, 0, 6000, -3000, 3000);
        return offset;
    }

    /**
    * get Grayscale Sensor State
    * state 0~15状态值
    */
    export function getGrayscaleSensorState(state: number): boolean {
        return fourWayStateValue == state
    }

    /**
    * check whether the channel is online
    * channel：0~4
    * state:0-hollow circle,1-solid circle
    */
    export function trackbitChannelState(channel: number, state: number): boolean {
        if (state == 1)
            if (fourWayStateValue & (1 << (channel))) {
                return true
            }
            else {
                return false
            }
        else {
            if (fourWayStateValue & (1 << (channel))) {
                return false
            }
            else {
                return true
            }
        }
    }

    /**
    * get gray value.The range is from 0 to 255.
    */
    export function trackbitgetGray(channel: number): number {
        i2cCommandSend(0x60, [0x02, channel])
        return pins.i2cReadNumber(cutebotProAddr, NumberFormat.UInt8LE, false)
    }

    /***********************************************************************************************
     * PID控制
     ***********************************************************************************************/
    //
    /**
     * control the car to travel at a specific speed (speed.min=20cm/s speed.max=50cm/s)
     * @lspeed set the lspeed
     * @rspeed set the rspeed
     * @unit 0-cms,1-inch
     */
    export function pidSpeedControl(lspeed: number, rspeed: number, unit: number): void {

        let direction: number = 0;
        if (lspeed < 0) {
            direction |= 0x01;
        }

        if (rspeed < 0) {
            direction |= 0x2;
        }

        switch (unit) {
            case 0:
                lspeed *= 10;
                rspeed *= 10;
                break;
            case 1:
                lspeed *= 25.4;
                rspeed *= 25.4;
                break;
        }

        if (lspeed != 0) {
            lspeed = Math.abs(lspeed);
            lspeed = Math.min(lspeed, 500);
            lspeed = Math.max(lspeed, 200);
        }

        if (rspeed != 0) {
            rspeed = Math.abs(rspeed);
            rspeed = Math.min(rspeed, 500);
            rspeed = Math.max(rspeed, 200);
        }

        let lspeed_h = lspeed >> 8;
        let lspeed_l = lspeed & 0xFF;
        let rspeed_h = rspeed >> 8;
        let rspeed_l = rspeed & 0xFF;

        i2cCommandSend(0x80, [lspeed_h, lspeed_l, rspeed_h, rspeed_l, direction]);

    }

    /**
     * set the car to travel a specific distance(distance.max=6000cm, distance.min=0cm)
     * @Direction 0-forward,1-backward
     * @distance set the distance eg: 0
     * @DistanceUnit 0-cms,1-inch
     */
    export function pidRunDistance(direction: number, distance: number, unit: number): void {
        distance *= (unit == 0 ? 10 : 25.4)
        let distance_h = distance >> 8;
        let distance_l = distance & 0xFF;
        let direction_flag = (direction == 0 ? 0 : 3);
        i2cCommandSend(0x81, [distance_h, distance_l, direction_flag]);
        pidPause(10000)
    }

    /**
     * set the car to travel a specific distance(distance.max=6000cm, distance.min=0cm)
     * @speed 20~50 cm/s 
     * @Direction 0-forward,1-backward
     * @distance set the distance eg: 0
     * @DistanceUnit 0-cms,1-inch
     */
    export function pidSpeedRunDistance(speed: number, unitspeed: number, direction: number, distance: number, unit: number): void {
        distance *= (unit == 0 ? 10 : 25.4)
        let distance_h = distance >> 8;
        let distance_l = distance & 0xFF;
        let direction_flag = (direction == 0 ? 0 : 3);
        if (unitspeed == 1) {
            speed *= 25.4;
        } else {
            speed *= 10;
        }
        if(speed <= 0){
            speed = 0;
        }else{
            speed = (speed > 500 ? 500 : speed) < 200 ? 200 : speed;
        }
        let speed_h = speed >> 8;
        let speed_l = speed & 0xFF;
        i2cCommandSend(0x84, [distance_h, distance_l, speed_h, speed_l, direction_flag]);
        pidPause(10000)
    }

    /**
     * Select the wheel and set the Angle or number of turns you want to turn
     * @Wheel 0-WheelLeft,1-WheelRight,2-WheelALL
     * @angle set the angle or number of turns eg: 0
     * @angleUnits 0-Angle,1-Circle
     */
    export function pidRunAngle(wheel: number, angle: number, angleUnits: number): void {
        let l_angle_h = 0;
        let l_angle_l = 0;
        let r_angle_h = 0;
        let r_angle_l = 0;
        let direction = 0;
        if (angleUnits == 1) angle *= 360;
        if (angle < 0) direction = 3;
        angle *= 10;
        if (wheel == 0 || wheel == 2) {
            l_angle_l = angle & 0xFF;
            l_angle_h = angle >> 8;
        }
        if (wheel == 1 || wheel == 2) {
            r_angle_l = angle & 0xFF;
            r_angle_h = angle >> 8;
        }

        i2cCommandSend(0x83, [l_angle_h, l_angle_l, r_angle_h, r_angle_l, direction]);
        pidPause(10000)
    }

    /**
     * Select the wheel and set the Angle or number of turns you want to turn
     * @speed 20~50 cm/s 
     * @Wheel 0-WheelLeft,1-WheelRight,2-WheelALL
     * @angle set the angle or number of turns eg: 0
     * @angleUnits 0-Angle,1-Circle
     */
    export function pidSpeedRunAngle(speed: number, wheel: number, angle: number, angleUnits: number): void {
        let l_angle_h = 0;
        let l_angle_l = 0;
        let r_angle_h = 0;
        let r_angle_l = 0;
        let direction = 0;
        if (speed == 0)
            return;
        if (speed >= 100)
            speed = 100;
        speed = Math.round(Math.map(speed, 1, 100, 100, 400))
        
        let speed_h = speed >> 8;
        let speed_l = speed & 0xFF;
        if (angleUnits == 1) angle *= 360;
        if (angle < 0) direction = 3;
        angle *= 10;
        if (wheel == 0 || wheel == 2) {
            l_angle_l = angle & 0xFF;
            l_angle_h = angle >> 8;
        }
        if (wheel == 1 || wheel == 2) {
            r_angle_l = angle & 0xFF;
            r_angle_h = angle >> 8;
        }

        i2cCommandSend(0x86, [l_angle_h, l_angle_l, r_angle_h, r_angle_l, speed_h, speed_l, direction]);
        pidPause(10000)
    }

    /**
     * set the trolley to rotate at a specific Angle
     * @TurnUnit 0-Leftsteering,1-Rightsteering,2-Stay_Leftsteering,3-Stay_Rightsteering
     * @TurnAngleUnit 0-Angle,1-Circle
     */
    export function pidRunSteering(turn: number, angle: number): void {
        let l_angle_h = 0;
        let l_angle_l = 0;
        let r_angle_h = 0;
        let r_angle_l = 0;
        let direction = 0;

        if (turn == 0) {
            angle *= 2;
            r_angle_h = angle >> 8;
            r_angle_l = angle & 0xFF;
        } else if (turn == 1) {
            angle *= 2;
            l_angle_h = angle >> 8;
            l_angle_l = angle & 0xFF;
        } else if (turn == 2) {
            r_angle_h = angle >> 8;
            r_angle_l = angle & 0xFF;
            l_angle_h = angle >> 8;
            l_angle_l = angle & 0xFF;
            direction = 1;
        } else if (turn == 3) {
            r_angle_h = angle >> 8;
            r_angle_l = angle & 0xFF;
            l_angle_h = angle >> 8;
            l_angle_l = angle & 0xFF;
            direction = 2;
        }
        i2cCommandSend(0x82, [l_angle_h, l_angle_l, r_angle_h, r_angle_l, direction]);
        pidPause(10000)
    }

    /**
     * set the trolley to rotate at a specific Angle
     * @speed 20~50 cm/s 
     * @TurnUnit 0-Leftsteering,1-Rightsteering,2-Stay_Leftsteering,3-Stay_Rightsteering
     * @TurnAngleUnit 0-Angle,1-Circle
     */
    export function pidSpeedRunSteering(speed: number, turn: number, angle: number): void {
        let l_angle_h = 0;
        let l_angle_l = 0;
        let r_angle_h = 0;
        let r_angle_l = 0;
        let direction = 0;

        if (speed == 0)
            return;
        if (speed >= 100)
            speed = 100;
        speed = Math.round(Math.map(speed, 1, 100, 100, 400))

        let speed_h = speed >> 8;
        let speed_l = speed & 0xFF;

        if (turn == 0) {
            angle *= 2;
            r_angle_h = angle >> 8;
            r_angle_l = angle & 0xFF;
        } else if (turn == 1) {
            angle *= 2;
            l_angle_h = angle >> 8;
            l_angle_l = angle & 0xFF;
        } else if (turn == 2) {
            r_angle_h = angle >> 8;
            r_angle_l = angle & 0xFF;
            l_angle_h = angle >> 8;
            l_angle_l = angle & 0xFF;
            direction = 1;
        } else if (turn == 3) {
            r_angle_h = angle >> 8;
            r_angle_l = angle & 0xFF;
            l_angle_h = angle >> 8;
            l_angle_l = angle & 0xFF;
            direction = 2;
        }
        i2cCommandSend(0x85, [l_angle_h, l_angle_l, r_angle_h, r_angle_l, speed_h, speed_l, direction]);
        pidPause(10000)
    }

    let blockLength: number = 0;
    let blockUnit = 0;//DistanceUnit.Cm

    /**
    * set block length
    * @length set the length of each block
    * @DistanceUnit 0-Cm,1-Inch
    */
    export function pidBlockSet(length: number, distanceUnit: number): void {
        blockLength = length
        blockUnit = distanceUnit
    }

    /**
    * run a specific number of block
    * @cnt set the number of block
    */
    export function pidRunBlock(cnt: number): void {
        pidRunDistance(0, blockLength * cnt, blockUnit)
    }

    /**
    * read version number
    */
    export function readVersions(): string {
        i2cCommandSend(0xA0, [0x00])
        let version = pins.i2cReadBuffer(cutebotProAddr, 3)
        return `V ${version[0]}.${version[1]}.${version[2]}`;
    }
}
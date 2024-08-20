namespace cutebotProV2 {

    const cutebotProAddr = 0x10

    /******************************************************************************************************
     * 工具函数
     ******************************************************************************************************/
    function i2cCommandSend(command: number, params: number[]) {
        let buff = pins.createBuffer(params.length + 4);
        buff[0] = 0xFF; // 帧头
        buff[1] = 0xF9; // 帧头
        buff[2] = command; // 指令
        buff[3] = params.length; // 参数长度
        for (let i = 0; i < params.length; i++) {
            buff[i + 4] = params[i];
        }
        pins.i2cWriteBuffer(cutebotProAddr, buff);
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

        if (speed < 0) {
            direction |= 0x01;
        }
        i2cCommandSend(0x30, [Math.abs(speed),direction]);
    }

    /**
     * extend motor stop
     */
    export function extendMotorStop(): void {
        i2cCommandSend(0x30, [0,0]);
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

        i2cCommandSend(0x40, [index,angleMap]);
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
        i2cCommandSend(0xA0, [motor+1])
        let speed = pins.i2cReadBuffer(cutebotProAddr, 1)

        if (speedUnits == 0)
            return speed;
        else
            return speed / 0.3937;
    }

    /**
    * get the rotation degrees of wheel
    * motor:0-M1,1-M2
    */
    export function readDistance(motor: number): number {
            i2cCommandSend(0xA0, [motor+3])
            let distance = pins.i2cReadBuffer(cutebotProAddr, 4)
            return distance <<24 || distance[1] << 16 || distance[2]<<8||distance[3];
    }

    /**
     * clear the rotation degrees of wheel
     * motor:0-M1,1-M2
     */
    export function clearWheelTurn(motor: number): void {
        pins.i2cWriteBuffer(0x50, [motor]);
    }

    /**
    * read version number
    */
    export function readVersions(): string {
        i2cCommandSend(0xA0, [0x00])
        let version = pins.i2cReadBuffer(cutebotProAddr, 2)
        return `V ${version[0]}.${version[1]}`;
    }

    /**
    * read version number
    */
    export function readVersion(): number {
        i2cCommandSend(0xA0, [0x00])
        let version = pins.i2cReadBuffer(cutebotProAddr, 2)
        return version[0];
    }

}
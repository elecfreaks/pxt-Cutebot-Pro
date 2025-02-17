

enum CutebotProPIN {
    P0 = 3,
    P1 = 2,
    P2 = 1,
    P8 = 18,
    //P9 = 10,
    P12 = 20,
    P13 = 23,
    P14 = 22,
    P15 = 21,
};



enum CutebotProWheel {
    //%block="left wheel"
    LeftWheel = 1,
    //%block="right wheel"
    RightWheel = 2,
    //%block="all wheel"
    AllWheel = 3
}


enum CutebotProMotors {
    //% block="left wheel"
    M1 = 1,
    //% block="right wheel"
    M2 = 2,
    //% block="all wheel"
    ALL = 3
}

enum CutebotProMotors1 {
    //% block="left wheel"
    M1 = 1,
    //% block="right wheel"
    M2 = 2,
}

enum CutebotProDir {
    //% block="rotate forward"
    CW = 1,
    //% block="backward"
    CCW = 2
}

enum CutebotProServoIndex {
    //% block="S1"
    S1 = 1,
    //% block="S2"
    S2 = 2,
    //% block="S3"
    S3 = 3,
    //% block="S4"
    S4 = 4
}

enum CutebotProRGBLight {
    //%block="left RGB"
    RGBL = 2,
    //%block="right RGB"
    RGBR = 1,
    //%block="all RGB lights"
    RGBA = 3
}

enum CutebotProPatrol {
    //% block="L1"
    L1 = 1,
    //%block="L2"
    L2 = 2,
    //%block="L3"
    L3 = 5,
    //%block="R1"
    R1 = 3,
    //%block="R2"
    R2 = 4,
    //%block="R3"
    R3 = 6
}


enum CutebotProPID {
    //%block="off"
    OFF = 0,
    //%block="on"
    ON = 1
}

enum CutebotProDistanceUnits {
    //%block="cm"
    Cm = 0,
    //%block="inch"
    Ft = 1,
}

enum CutebotProAngleUnits {
    //%block="angle"
    Angle = 0,
    //%block="circle"
    Circle = 1,
}

enum CutebotProOrientation {
    //%block="forward"
    Advance = 1,
    //%block="reverse"
    Retreat = 0
}


enum CutebotProSpeedUnits {
    //%block="cm/s"
    Cms = 0,
    //%block="inch/s"
    Ins = 1
}

enum CutebotProTurn {
    //%block="turn left"
    Left = 0,
    //%block="turn right"
    Right = 1,
    //%block="turn left at place"
    LeftInPlace = 2,
    //%block="turn right at place"
    RightInPlace = 3

}

enum CutebotProAngle {
    //%block="45°"
    Angle45 = 45,
    //%block="90°"
    Angle90 = 90,
    //%block="135°"
    Angle135 = 135,
    //%block="180°"
    Angle180 = 180
}


enum TrackbitStateType {
    //% block="◌ ◌ ◌ ◌" 
    Tracking_State_0 = 0,
    //% block="◌ ● ● ◌" 
    Tracking_State_1 = 6,
    //% block="◌ ◌ ● ◌" 
    Tracking_State_2 = 4,
    //% block="◌ ● ◌ ◌" 
    Tracking_State_3 = 2,


    //% block="● ◌ ◌ ●" 
    Tracking_State_4 = 9,
    //% block="● ● ● ●" 
    Tracking_State_5 = 15,
    //% block="● ◌ ● ●" 
    Tracking_State_6 = 13,
    //% block="● ● ◌ ●" 
    Tracking_State_7 = 11,

    //% block="● ◌ ◌ ◌" 
    Tracking_State_8 = 1,
    //% block="● ● ● ◌" 
    Tracking_State_9 = 7,
    //% block="● ◌ ● ◌" 
    Tracking_State_10 = 5,
    //% block="● ● ◌ ◌" 
    Tracking_State_11 = 3,

    //% block="◌ ◌ ◌ ●" 
    Tracking_State_12 = 8,
    //% block="◌ ● ● ●" 
    Tracking_State_13 = 14,
    //% block="◌ ◌ ● ●" 
    Tracking_State_14 = 12,
    //% block="◌ ● ◌ ●" 
    Tracking_State_15 = 10
}

enum TrackbitType {
    //% block="◌" 
    State_0 = 0,
    //% block="●" 
    State_1 = 1
}
enum TrackbitChannel {
    //% block="1"
    One = 1,
    //% block="2"
    Two = 2,
    //% block="3"
    Three = 3,
    //% block="4"
    Four = 4
}

enum ServoType {
    //% block="180°"
    Servo180 = 1,
    //% block="270°"
    Servo270 = 2,
    //% block="360°"
    Servo360 = 3
}

enum SonarUnit {
    //% block="cm"
    Centimeters,
    //% block="inches"
    Inches
}

enum CutbotProIRButtons {
    //% block="power"
    Power = 1,
    //% block="menu"
    Menu = 2,
    //% block="up"
    Up = 5,
    //% block="left"
    Left = 8,
    //% block="right"
    Right = 10,
    //% block="down"
    Down = 13,
    //% block="ok"
    OK = 9,
    //% block="plus"
    Plus = 4,
    //% block="minus"
    Minus = 12,
    //% block="back"
    Back = 6,
    //% block="0"
    Zero = 14,
    //% block="1"
    One = 16,
    //% block="2"
    Two = 17,
    //% block="3"
    Three = 18,
    //% block="4"
    Four = 20,
    //% block="5"
    Five = 21,
    //% block="6"
    Six = 22,
    //% block="7"
    Seven = 24,
    //% block="8"
    Eight = 25,
    //% block="9"
    Nine = 26
}

let IR_Val = 0
let _initEvents = true
let PidUseFlag = 0
let blocklength = 0
let distanceUnitsFlag = 0
let fourWayStateValue = 0
let pulseCntL = 0
let pulseCntR = 0
//% weight=100 color=#008C8C block="Cutebot Pro" blockId="Cutebot Pro" icon="\uf48b"
namespace CutebotPro {

    /**
    * PID ON or OFF
    */
    //% block="PID %PID"
    //% weight=201
    /*export function PIDSwitch(pid: PID): void {
        let buf = pins.createBuffer(7);
        buf[0] = 0x99;
        buf[1] = 0x00;
        buf[2] = pid;
        buf[3] = 0x00;
        buf[4] = 0x00;
        buf[5] = 0x00;
        buf[6] = 0x88;
        pins.i2cWriteBuffer(i2cAddr, buf);
    }*/

    /**
    * PWM control the car to travel at a specific speed
    */
    //% group="Basic control"
    //% block="set left wheel speed %speedL\\%, right wheel speed %speedR\\%"
    //% speed.min=-100 speed.max=100
    //% weight=340
    export function pwmCruiseControl(speedL: number, speedR: number): void {
        if (readHardVersion() == 2) {
            cutebotProV2.motorControl(2, speedL, speedR);
        } else {
            cutebotProV1.pwmCruiseControl(speedL, speedR);
        }
    }

    /**
     * full speed forward
     */
    //% group="Basic control"
    //% weight=360
    //%block="go forward at full speed"
    export function fullSpeedAhead(): void {
        if (readHardVersion() == 2) {
            cutebotProV2.motorControl(2, 100, 100)
        } else {
            cutebotProV1.fullSpeedAhead();
        }
    }

    /**
     * full speed reverse
     */
    //% group="Basic control"
    //% weight=350
    //%block="go reverse at full speed"
    export function fullAstern(): void {
        if (readHardVersion() == 2) {
            cutebotProV2.motorControl(2, -100, -100)
        } else {
            cutebotProV1.fullAstern();
        }
    }

    /**
     * stop immediately
     */
    //% group="Basic control"
    //% weight=330
    //%block="set %CutebotProMotors to stop immediately"
    export function stopImmediately(wheel: CutebotProMotors): void {
        if (readHardVersion() == 2) {
            cutebotProV2.motorControl(wheel - 1, 0, 0);
        } else {
            cutebotProV1.stopImmediately(wheel);
        }
    }




    /**
     * read motor speed
     */
    //% group="Basic control"
    //% weight=320
    //%block="get speed of %CutebotProMotors1 %CutebotProSpeedUnits"
    export function readSpeed(motor: CutebotProMotors1, speedUnits: CutebotProSpeedUnits): number {
        if (readHardVersion() == 2) {
            return cutebotProV2.readSpeed(motor - 1, speedUnits);
        } else {
            return cutebotProV1.readSpeed(motor, speedUnits);
        }
    }

    /**
    * 获取编码电机的脉冲数
    */
    export function pulseNumber(): void {
        cutebotProV1.pulseNumber();
    }

    /**    
     * obtain the number of pulses produced by the coded motor on both sides of the wheel
    */
    export function readPulsenumberTest(motor: CutebotProMotors1): number {
        return cutebotProV1.readPulsenumberTest(motor);
    }

    /**
    * get the rotation degrees of wheel
    */
    //% group="Basic control"
    //% weight=310
    //%block="get rotation degrees of %CutebotProMotors1"
    export function readDistance(motor: CutebotProMotors1): number {
        if (readHardVersion() == 2) {
            return cutebotProV2.readDistance(motor - 1);
        } else {
            return cutebotProV1.readDistance(motor);
        }
    }




    /**
     * clear the rotation degrees of wheel
     */
    //% group="Basic control"
    //% weight=300
    //%block="clear rotation degrees of %CutebotProMotors1"
    export function clearWheelTurn(motor: CutebotProMotors1): void {
        if (readHardVersion() == 2) {
            cutebotProV2.clearWheelTurn(motor - 1);
        } else {
            cutebotProV1.clearWheelTurn(motor);
        }
    }


    /**
    * select a headlights and set the RGB color.
    * @param R R color value of RGB color
    * @param G G color value of RGB color
    * @param B B color value of RGB color
    */
    //% group="LED headlights"
    //% inlineInputMode=inline
    //% blockId=RGB block="set LED headlights %CutebotProRGBLight color to R:%r G:%g B:%b"
    //% r.min=0 r.max=255
    //% g.min=0 g.max=255
    //% b.min=0 b.max=255
    //% weight=280
    export function singleHeadlights(light: CutebotProRGBLight, r: number, g: number, b: number): void {
        if (readHardVersion() == 2) {

            let arr = [1, 0, 2]
            cutebotProV2.singleHeadlights(arr[light - 1], r, g, b)
        } else {
            cutebotProV1.singleHeadlights(light, r, g, b);
        }
    }


    /**
    * set LED headlights.
    */
    //% group="LED headlights"
    //% block="set LED headlights %CutebotProRGBLight color to $color"
    //% color.shadow="colorNumberPicker"
    //% weight=290
    export function colorLight(light: CutebotProRGBLight, color: number) {
        if (readHardVersion() == 2) {
            let arr = [1, 0, 2]
            cutebotProV2.colorLight(arr[light - 1], color)
        } else {
            cutebotProV1.colorLight(light, color);
        }
    }

    /**
    * turn off all the LED lights
    */
    //% group="LED headlights"
    //% block="turn off all LED headlights"
    //% weight=270
    export function turnOffAllHeadlights(): void {
        if (readHardVersion() == 2) {
            cutebotProV2.turnOffAllHeadlights();
        } else {
            cutebotProV1.turnOffAllHeadlights();
        }
    }

    /**
    * get a status value of the 4-way line following sensor
    */
    //% group="Tracking sensor"
    //% weight=270
    //% block="get a tracking sensor state value"
    export function trackbitStateValue() {
        if (readHardVersion() == 2) {
            cutebotProV2.trackbitStateValue();
        } else {
            cutebotProV1.trackbitStateValue();
        }
    }

    /**
    * 4-way line following sensor offset
    */
    //% group="Tracking sensor"
    //% weight=250
    //%block="fused offset value"
    export function getOffset(): number {
        if (readHardVersion() == 2) {
            return cutebotProV2.getOffset();
        } else {
            return cutebotProV1.getOffset();
        }
    }

    /**
    * get Grayscale Sensor State
    */
    //% group="Tracking sensor"
    //% weight=260
    //%block="tracking sensor state is %TrackbitStateType"
    export function getGrayscaleSensorState(state: TrackbitStateType): boolean {
        if (readHardVersion() == 2) {
            return cutebotProV2.getGrayscaleSensorState(state);
        } else {
            return cutebotProV1.getGrayscaleSensorState(state);
        }
    }

    /**
    * check whether the channel is online
    */
    //% group="Tracking sensor"
    //% weight=240
    //% block="channel %TrackbitChannel tracking sensor %TrackbitType"
    export function trackbitChannelState(channel: TrackbitChannel, state: TrackbitType): boolean {
        if (readHardVersion() == 2) {
            return cutebotProV2.trackbitChannelState(channel-1, state);
        } else {
            return cutebotProV1.trackbitChannelState(channel, state);
        }
    }

    /**
    * get gray value.The range is from 0 to 255.
    */
    //% group="Tracking sensor"
    //% weight=230
    //% block="channel %TrackbitChannel tracking sensor gray value"
    export function trackbitgetGray(channel: TrackbitChannel): number {
        if (readHardVersion() == 2) {
            return cutebotProV2.trackbitgetGray(channel-1);
        } else {
            return cutebotProV1.trackbitgetGray(channel);
        }
    }

    /**
      * cars can extend the ultrasonic function to prevent collisions and other functions..
      * @param Sonarunit two states of ultrasonic module
      */
    //% group="Sonar sensor"
    //% blockId=ultrasonic block="sonar sensor unit %SonarUnit"
    //% weight=220
    export function ultrasonic(unit: SonarUnit, maxCmDistance = 500): number {
        return cutebotProV1.ultrasonic(unit, maxCmDistance);
    }

    /**
     * control the car to travel at a specific speed (speed.min=20cm/s speed.max=50cm/s)
     */
    //% group="PID Control"
    //% block="set left wheel speed %speedL, right wheel speed %speedR %CutebotProSpeedUnits"
    //% weight=210
    export function cruiseControl(speedL: number, speedR: number, speedUnits: CutebotProSpeedUnits): void {
        if (readHardVersion() == 2) {
            cutebotProV2.pidSpeedControl(speedL, speedR, speedUnits);
        } else {
            cutebotProV1.cruiseControl(speedL, speedR, speedUnits);
        }
    }

    /**
     * set the car to travel a specific distance(distance.max=255cm, distance.min=0cm)
     */
    //% group="PID Control"
    //% weight=200
    //% block="go %CutebotProOrientation %distance %CutebotProDistanceUnits"
    export function distanceRunning(orientation: CutebotProOrientation, distance: number, distanceUnits: CutebotProDistanceUnits): void {
        if (readHardVersion() == 2) {
            cutebotProV2.pidRunDistance(orientation ? 0 : 1, distance, distanceUnits)
        } else {
            cutebotProV1.distanceRunning(orientation, distance, distanceUnits);
        }
    }

    /**
     * 
     */
    //% group="PID Control"
    //% weight=200
    //% block="set %CutebotProWheel rotation %angle %CutebotProAngleUnits"
    export function angleRunning(orientation: CutebotProWheel, angle: number, angleUnits: CutebotProAngleUnits): void {
        if (readHardVersion() == 2) {
            cutebotProV2.pidRunAngle(orientation - 1, angle, angleUnits);
        } else {
            cutebotProV1.angleRunning(orientation, angle, angleUnits);
        }
    }

    /**
    * set block length
    */
    //% group="PID Control"
    //% weight=180
    //% block="set length of the squares as %length %CutebotProDistanceUnits"
    export function setBlockCnt(length: number, distanceUnits: CutebotProDistanceUnits): void {
        if (readHardVersion() == 2) {
            cutebotProV2.pidBlockSet(length, distanceUnits);
        } else {
            cutebotProV1.setBlockCnt(length, distanceUnits);
        }
    }

    /**
    * run a specific number of block
    */
    //% group="PID Control"
    //% weight=170
    //% block="go forward %cnt squares"
    export function runBlockCnt(cnt: number): void {
        if (readHardVersion() == 2) {
            cutebotProV2.pidRunBlock(cnt);
        } else {
            cutebotProV1.runBlockCnt(cnt);
        }
    }

    /**
     * set the trolley to rotate at a specific Angle
     * @param angle set the angle unit
     */
    //% group="PID Control"
    //% weight=190
    //% block="set car %CutebotProTurn for angle %angle"
    //% angle.min=0 angle.max=360
    export function trolleySteering(turn: CutebotProTurn, angle: number): void {
        if (readHardVersion() == 2) {
            cutebotProV2.pidRunSteering(turn, angle);
        } else {
            cutebotProV1.trolleySteering(turn, angle);
        }
    }

    //% shim=IRV2::irCode
    function irCode(): number {
        return 0;
    }

    //% group="Infrared sensor"
    //% weight=160
    //% block="on IR receiving"
    export function irCallback(handler: () => void) {
        cutebotProV1.irCallback(handler);
    }

    /**
     * get IR value
     */
    //% group="Infrared sensor"
    //% block="IR button %CutbotProIRButtons is pressed"
    //% weight=150
    export function irButton(Button: CutbotProIRButtons): boolean {
        return cutebotProV1.irButton(Button);
    }

    /**
     * servo control module
     */
    //% group="Expansion port"
    //% weight=120
    //% block="set %ServoType servo %CutebotProServoIndex angle to %angle°"
    export function extendServoControl(servotype: ServoType, index: CutebotProServoIndex, angle: number): void {
        if (readHardVersion() == 2) {
            cutebotProV2.extendServoControl(servotype, index, angle);
        } else {
            cutebotProV1.extendServoControl(servotype, index, angle);
        }
    }

    /**
     * continuous servo control
     */
    //% group="Expansion port"
    //% weight=110
    //% block="set continuous servo %CutebotProServoIndex speed to %speed\\%"
    export function continuousServoControl(index: CutebotProServoIndex, speed: number): void {
        if (readHardVersion() == 2) {
            cutebotProV2.continuousServoControl(index, speed);
        } else {
            cutebotProV1.continuousServoControl(index, speed);
        }
    }



    /**
     * motor control module
     */
    //% group="Expansion port"
    //% weight=140
    //% block="set motor speed to %speed\\%"
    //% speed.min=-100  speed.max=100
    export function extendMotorControl(speed: number): void {
        if (readHardVersion() == 2) {
            cutebotProV2.extendMotorControl(speed);
        } else {
            cutebotProV1.extendMotorControl(speed);
        }
    }


    /**
     * extend motor stop
     */
    //% group="Expansion port"
    //% weight=130
    //% block="stop motor"
    export function extendMotorStop(): void {
        if (readHardVersion() == 2) {
            cutebotProV2.extendMotorStop();
        } else {
            cutebotProV1.extendMotorStop();
        }
    }

    /** 
    * read version number
    */
    //% group="Others"
    //% weight=1
    //% block="version number"
    export function readVersions(): string {
        if (readHardVersion() == 2) {
            return cutebotProV2.readVersions();
        } else {
            return cutebotProV1.readVersions();
        }

    }

    let version = -1;
    export function readHardVersion(): number {
        if (version == -1) {
            
            let i2cBuffer = pins.createBuffer(7);
            i2cBuffer[0] = 0x99;
            i2cBuffer[1] = 0x15;
            i2cBuffer[2] = 0x01;
            i2cBuffer[3] = 0x00;
            i2cBuffer[4] = 0x00;
            i2cBuffer[5] = 0x00;
            i2cBuffer[6] = 0x88;
            pins.i2cWriteBuffer(0x10, i2cBuffer)
            //cutebotProV2.i2cCommandSend(0xA0, [0x00])
            version = pins.i2cReadNumber(0x10, NumberFormat.UInt8LE, false);
            if (version != 1) {
                version = 2;
            }
        }
        return version;
        // return 2;
    }

    /******************************************************************************************************
     * 可修改延时函数，默认为500毫秒
     * 增大可增加pid控制延时，可优化行动后停顿过长等
     * 减少（负数）可减少pid控制延时，可优化行动后停顿过短等
     * 单位为毫秒MS
     ******************************************************************************************************/
    export function setbause() {
        cutebotProV2.setbause(500);
    }
}

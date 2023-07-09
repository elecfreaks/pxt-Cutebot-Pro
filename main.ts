

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
    M1 = 0,
    //% block="right wheel"
    M2 = 1,
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

enum CutebotProAngleUnits{
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
    Angle45 = 0,
    //%block="90°"
    Angle90 = 1,
    //%block="135°"
    Angle135 = 2,
    //%block="180°"
    Angle180 = 3
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
//% weight=100  color=#008C8C   block="Cutebot Pro" icon="\uf48b"
namespace CutebotPro {
    let irstate: number;
    let state: number;
    let i2cAddr: number = 0x10;
    export class Packeta {
        public mye: string;
        public myparam: number;
    }


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
        let i2cBuffer = pins.createBuffer(7)
        
        if (speedL == 0)
            speedL = 200
        else if (speedL > 0)
            Math.map(speedL, 0, 100, 20, 100);
        else
            Math.map(speedL, -100, 0, -100, -20);
        
        if (speedR == 0)
            speedR = 200
        else if (speedR > 0)
            Math.map(speedR, 0, 100, 20, 100);
        else
            Math.map(speedR, -100, 0, -100, -20);
    
        if (speedL > 0) {
            i2cBuffer[0] = 0x99;
            i2cBuffer[1] = 0x01;
            i2cBuffer[2] = CutebotProWheel.LeftWheel;
            i2cBuffer[3] = 0x01;
            i2cBuffer[4] = speedL;
            i2cBuffer[5] = 0x00;
            i2cBuffer[6] = 0x88;
        }
        else {
            i2cBuffer[0] = 0x99;
            i2cBuffer[1] = 0x01;
            i2cBuffer[2] = CutebotProWheel.LeftWheel;
            i2cBuffer[3] = 0x00;
            i2cBuffer[4] = -speedL;
            i2cBuffer[5] = 0x00;
            i2cBuffer[6] = 0x88;
        }
        pins.i2cWriteBuffer(i2cAddr, i2cBuffer)
        //basic.pause
        if (speedR > 0) {
            i2cBuffer[0] = 0x99;
            i2cBuffer[1] = 0x01;
            i2cBuffer[2] = CutebotProWheel.RightWheel;
            i2cBuffer[3] = 0x01;
            i2cBuffer[4] = speedR;
            i2cBuffer[5] = 0x00;
            i2cBuffer[6] = 0x88;
        }
        else {
            i2cBuffer[0] = 0x99;
            i2cBuffer[1] = 0x01;
            i2cBuffer[2] = CutebotProWheel.RightWheel;
            i2cBuffer[3] = 0x00;
            i2cBuffer[4] = -speedR;
            i2cBuffer[5] = 0x00;
            i2cBuffer[6] = 0x88;
        }
        pins.i2cWriteBuffer(i2cAddr, i2cBuffer)
    }

    /**
     * full speed forward
     */
    //% group="Basic control"
    //% weight=360
    //%block="go forward at full speed"
    export function fullSpeedAhead(): void {
        let buf = pins.createBuffer(7);
        buf[0] = 0x99;
        buf[1] = 0x07;
        buf[2] = 0x00;
        buf[3] = 0x00;
        buf[4] = 0x00;
        buf[5] = 0x00;
        buf[6] = 0x88;
        pins.i2cWriteBuffer(i2cAddr, buf);
    }

    /**
     * full speed reverse
     */
    //% group="Basic control"
    //% weight=350
    //%block="go reverse at full speed"
    export function fullAstern(): void {
        let buf = pins.createBuffer(7);
        buf[0] = 0x99;
        buf[1] = 0x08;
        buf[2] = 0x00;
        buf[3] = 0x00;
        buf[4] = 0x00;
        buf[5] = 0x00;
        buf[6] = 0x88;
        pins.i2cWriteBuffer(i2cAddr, buf);
    }

    /**
     * stop immediately
     */
    //% group="Basic control"
    //% weight=330
    //%block="set %CutebotProMotors to stop immediately"
    export function stopImmediately(wheel: CutebotProMotors): void {
        let buf = pins.createBuffer(7);
        buf[0] = 0x99;
        buf[1] = 0x09;
        buf[2] = wheel;
        buf[3] = 0x00;
        buf[4] = 0x00;
        buf[5] = 0x00;
        buf[6] = 0x88;
        pins.i2cWriteBuffer(i2cAddr, buf);
    }




    /**
     * read motor speed
     */
    //% group="Basic control"
    //% weight=320
    //%block="get speed of %CutebotProMotors1 %CutebotProSpeedUnits"
    export function readSpeed(motor: CutebotProMotors1, speedUnits: CutebotProSpeedUnits): number {
        let speed: number
        let buf = pins.createBuffer(7)
        if (motor == 1) {
            buf[0] = 0x99;
            buf[1] = 0x05;
            buf[2] = motor;
            buf[3] = 0x00;
            buf[4] = 0x00;
            buf[5] = 0x00;
            buf[6] = 0x88;
            pins.i2cWriteBuffer(i2cAddr, buf);
            speed = pins.i2cReadNumber(i2cAddr, NumberFormat.UInt8LE, false)

            if (speedUnits == CutebotProSpeedUnits.Cms)
                return speed;
            else
                return speed * 0.3937;
        }
        else{
            buf[0] = 0x99;
            buf[1] = 0x05;
            buf[2] = motor;
            buf[3] = 0x00;
            buf[4] = 0x00;
            buf[5] = 0x00;
            buf[6] = 0x88;
            pins.i2cWriteBuffer(i2cAddr, buf);
            speed = pins.i2cReadNumber(i2cAddr, NumberFormat.UInt8LE, false)

            if (speedUnits == CutebotProSpeedUnits.Cms)
                return speed;
            else
                return speed * 0.3937;
        }
    }

    /**
    * 获取编码电机的脉冲数
    */
    export function pulseNumber(): void {
        let pulsenumberbuf = pins.createBuffer(10);
        let buf = pins.createBuffer(7)
        buf[0] = 0x99;
        buf[1] = 0x16;
        buf[2] = 0x00;
        buf[3] = 0x00;
        buf[4] = 0x00;
        buf[5] = 0x00;
        buf[6] = 0x88;
        pins.i2cWriteBuffer(i2cAddr, buf);
        pulsenumberbuf[0] = pins.i2cReadNumber(i2cAddr, NumberFormat.UInt8LE, false)
        pulsenumberbuf[1] = pins.i2cReadNumber(i2cAddr, NumberFormat.UInt8LE, false)
        pulsenumberbuf[2] = pins.i2cReadNumber(i2cAddr, NumberFormat.UInt8LE, false)
        pulsenumberbuf[3] = pins.i2cReadNumber(i2cAddr, NumberFormat.UInt8LE, false)
        pulseCntL = (pulsenumberbuf[0] << 24) | (pulsenumberbuf[1] << 16) | (pulsenumberbuf[2] << 8) | pulsenumberbuf[3]

        pulsenumberbuf[4] = pins.i2cReadNumber(i2cAddr, NumberFormat.UInt8LE, false)
        pulsenumberbuf[5] = pins.i2cReadNumber(i2cAddr, NumberFormat.UInt8LE, false)
        pulsenumberbuf[6] = pins.i2cReadNumber(i2cAddr, NumberFormat.UInt8LE, false)
        pulsenumberbuf[7] = pins.i2cReadNumber(i2cAddr, NumberFormat.UInt8LE, false)
        pulseCntR = (pulsenumberbuf[4] << 24) | (pulsenumberbuf[5] << 16) | (pulsenumberbuf[6] << 8) | pulsenumberbuf[7]

        pulsenumberbuf[8] = pins.i2cReadNumber(i2cAddr, NumberFormat.UInt8LE, false)
        if (pulsenumberbuf[8] == 1)
            pulseCntL = -pulseCntL
        pulsenumberbuf[9] = pins.i2cReadNumber(i2cAddr, NumberFormat.UInt8LE, false)
        if (pulsenumberbuf[9] == 1)
            pulseCntR = -pulseCntR
    }

    /**    
     * obtain the number of pulses produced by the coded motor on both sides of the wheel
    */
    export function readPulsenumberTest(motor: CutebotProMotors1): number {
        pulseNumber()
        if (motor == 1)
            return pulseCntL;
        else if (motor == 2)
            return pulseCntR;
        else
            return 0
    }

    /**
    * get the rotation degrees of wheel
    */
    //% group="Basic control"
    //% weight=310
    //%block="get rotation degrees of %CutebotProMotors1"
    export function readDistance(motor: CutebotProMotors1): number {
        let cylinderNumber: number;
        pulseNumber()
        if (motor == 1)
            return Math.floor( pulseCntL * 360 / 1400 );
        else
            return Math.floor(pulseCntR * 360 / 1400);
    }

    
    

    /**
     * clear the rotation degrees of wheel
     */
    //% group="Basic control"
    //% weight=300
    //%block="clear rotation degrees of %CutebotProMotors1"
    export function clearWheelTurn(motor: CutebotProMotors1): void {
        let buf = pins.createBuffer(7)
        buf[0] = 0x99;
        buf[1] = 0x0A;
        buf[2] = motor;
        buf[3] = 0x00;
        buf[4] = 0x00;
        buf[5] = 0x00;
        buf[6] = 0x88;
        pins.i2cWriteBuffer(i2cAddr, buf);
    }


    /**
    * select a headlights and set the RGB color.
    * @param R R color value of RGB color, eg: 0
    * @param G G color value of RGB color, eg: 128
    * @param B B color value of RGB color, eg: 255
    */
    //% group="LED headlights"
    //% inlineInputMode=inline
    //% blockId=RGB block="set LED headlights %CutebotProRGBLight color to R:%r G:%g B:%b"
    //% r.min=0 r.max=255
    //% g.min=0 g.max=255
    //% b.min=0 b.max=255
    //% weight=280
    export function singleHeadlights(light: CutebotProRGBLight, r: number, g: number, b: number): void {
        let buf = pins.createBuffer(7);
        if (light == 3) {
            buf[0] = 0x99;
            buf[1] = 0x0F;
            buf[2] = 0x03;
            buf[3] = r;
            buf[4] = g;
            buf[5] = b;
            buf[6] = 0x88;
            pins.i2cWriteBuffer(i2cAddr, buf);
        }
        else {
            if (light == 1) {
                buf[2] = 0x01;
            }
            if (light == 2) {
                buf[2] = 0x02;
            }
            buf[0] = 0x99;
            buf[1] = 0x0F;
            buf[3] = r;
            buf[4] = g;
            buf[5] = b;
            buf[6] = 0x88;
            pins.i2cWriteBuffer(i2cAddr, buf);
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
        let r: number, g: number, b: number = 0
        let buf = pins.createBuffer(7)
        r = color >> 16
        g = (color >> 8) & 0xFF
        b = color & 0xFF

        buf[0] = 0x99;
        buf[1] = 0x0F;
        buf[2] = light;
        buf[3] = r;
        buf[4] = g;
        buf[5] = b;
        buf[6] = 0x88;
        pins.i2cWriteBuffer(i2cAddr, buf)
    }

    /**
    * turn off all the LED lights
    */
    //% group="LED headlights"
    //% block="turn off all LED headlights"
    //% weight=270
    export function turnOffAllHeadlights(): void {
        let buf = pins.createBuffer(7);
        buf[0] = 0x99;
        buf[1] = 0x10;
        buf[2] = 0x03;
        buf[3] = 0x00;
        buf[4] = 0x00;
        buf[5] = 0x00;
        buf[6] = 0x88;
        pins.i2cWriteBuffer(i2cAddr, buf);
    }

    /**
    * get a status value of the 4-way line following sensor
    */
    //% group="Tracking sensor"
    //% weight=270
    //% block="get a tracking sensor state value"
    export function trackbitStateValue() {
        let i2cBuffer = pins.createBuffer(7);
        i2cBuffer[0] = 0x99;
        i2cBuffer[1] = 0x12;
        i2cBuffer[2] = 0x00;
        i2cBuffer[3] = 0x00;
        i2cBuffer[4] = 0x00;
        i2cBuffer[5] = 0x00;
        i2cBuffer[6] = 0x88;
        pins.i2cWriteBuffer(i2cAddr, i2cBuffer)
        fourWayStateValue = pins.i2cReadNumber(i2cAddr, NumberFormat.UInt8LE, false)
        //basic.pause(5);
    }

    /**
    * 4-way line following sensor offset
    */
    //% group="Tracking sensor"
    //% weight=250
    //%block="fused offset value"
    export function getOffset(): number {
        let offset: number;
        let i2cBuffer = pins.createBuffer(7);
        i2cBuffer[0] = 0x99;
        i2cBuffer[1] = 0x14;
        i2cBuffer[2] = 0x00;
        i2cBuffer[3] = 0x00;
        i2cBuffer[4] = 0x00;
        i2cBuffer[5] = 0x00;
        i2cBuffer[6] = 0x88;
        pins.i2cWriteBuffer(i2cAddr, i2cBuffer)
        const offsetLow = pins.i2cReadNumber(i2cAddr, NumberFormat.UInt8LE, false);

        i2cBuffer[0] = 0x99;
        i2cBuffer[1] = 0x14;
        i2cBuffer[2] = 0x01;
        i2cBuffer[3] = 0x00;
        i2cBuffer[4] = 0x00;
        i2cBuffer[5] = 0x00;
        i2cBuffer[6] = 0x88;
        pins.i2cWriteBuffer(i2cAddr, i2cBuffer)

        const offsetHigh = pins.i2cReadNumber(i2cAddr, NumberFormat.UInt8LE, false)
        offset = (offsetHigh << 8) | offsetLow
        offset = Math.map(offset, 0, 6000, -3000, 3000);
        return offset;
    }

    /**
    * get Grayscale Sensor State
    */
    //% group="Tracking sensor"
    //% weight=260
    //%block="tracking sensor state is %TrackbitStateType"
    export function getGrayscaleSensorState(state: TrackbitStateType): boolean {
        return fourWayStateValue == state
    }
    
    /**
    * check whether the channel is online
    */
    //% group="Tracking sensor"
    //% weight=240
    //% block="channel %TrackbitChannel tracking sensor %TrackbitType"
    export function trackbitChannelState(channel: TrackbitChannel, state: TrackbitType): boolean {
        if (state == TrackbitType.State_1)
            if (fourWayStateValue & (1 << (channel - 1))) {
                return true
            }
            else {
                return false
            }
        else {
            if (fourWayStateValue & (1 << (channel - 1))) {
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
    //% group="Tracking sensor"
    //% weight=230
    //% block="channel %TrackbitChannel tracking sensor gray value"
    export function trackbitgetGray(channel: TrackbitChannel): number {
        let i2cBuffer = pins.createBuffer(7);
        i2cBuffer[0] = 0x99;
        i2cBuffer[1] = 0x11;
        i2cBuffer[2] = channel;
        i2cBuffer[3] = 0x00;
        i2cBuffer[4] = 0x00;
        i2cBuffer[5] = 0x00;
        i2cBuffer[6] = 0x88;
        pins.i2cWriteBuffer(i2cAddr, i2cBuffer)
        return pins.i2cReadNumber(i2cAddr, NumberFormat.UInt8LE, false)
    }

    /**
      * cars can extend the ultrasonic function to prevent collisions and other functions..
      * @param Sonarunit two states of ultrasonic module, eg: Centimeters
      */
    //% group="Sonar sensor"
    //% blockId=ultrasonic block="sonar sensor unit %SonarUnit"
    //% weight=220
    export function ultrasonic(unit: SonarUnit, maxCmDistance = 500): number {
        // send pulse
        pins.setPull(DigitalPin.P8, PinPullMode.PullNone);
        pins.digitalWritePin(DigitalPin.P8, 0);
        control.waitMicros(2);
        pins.digitalWritePin(DigitalPin.P8, 1);
        control.waitMicros(10);
        pins.digitalWritePin(DigitalPin.P8, 0);
        // read pulse
        const d = pins.pulseIn(DigitalPin.P12, PulseValue.High, maxCmDistance * 50);
        switch (unit) {
            case SonarUnit.Centimeters:
                return Math.floor(d * 34 / 2 / 1000);
            case SonarUnit.Inches:
                return Math.floor(d * 34 / 2 / 1000 * 0.3937);
            default:
                return d;
        }
    }

    /**
     * control the car to travel at a specific speed (speed.min=20cm/s speed.max=50cm/s)
     */
    //% group="PID Control"
    //% block="set left wheel speed %speedL, right wheel speed %speedR %CutebotProSpeedUnits"
    //% weight=210
    export function cruiseControl(speedL: number, speedR: number, speedUnits: CutebotProSpeedUnits): void {
        let buf = pins.createBuffer(7)
        let orientationL = 0
        let orientationR = 0

        if (speedUnits == CutebotProSpeedUnits.Cms){
            speedL = speedL;
            speedR = speedR;
        }
        else{
            speedL = speedL * 0.3937;
            speedR = speedR * 0.3937;
        }
            
        if(speedL < 0){
            speedL = -speedL
            orientationL = CutebotProOrientation.Retreat
        }else{
            orientationL = CutebotProOrientation.Advance
        }

        if (speedR < 0) {
            speedR = -speedR
            orientationR = CutebotProOrientation.Retreat
        }else{
            orientationR = CutebotProOrientation.Advance
        }

        if (speedL > 50)
            speedL = 50;
        else if (speedL != 0 && speedL < 20)
            speedL = 20;

        if (speedR > 50)
            speedR = 50;
        else if (speedR != 0 && speedR < 20)
            speedR = 20;

        buf[0] = 0x99;
        buf[1] = 0x02;
        buf[2] = CutebotProWheel.LeftWheel;
        buf[3] = speedL;
        buf[4] = orientationL;
        buf[5] = 0x00;
        buf[6] = 0x88;
        pins.i2cWriteBuffer(i2cAddr, buf)
        buf[0] = 0x99;
        buf[1] = 0x02;
        buf[2] = CutebotProWheel.RightWheel;
        buf[3] = speedR;
        buf[4] = orientationR;
        buf[5] = 0x00;
        buf[6] = 0x88;
        pins.i2cWriteBuffer(i2cAddr, buf)
        basic.pause(110)
    }

    /**
     * set the car to travel a specific distance(distance.max=255cm, distance.min=0cm)
     */
    //% group="PID Control"
    //% weight=200
    //% block="go %CutebotProOrientation %distance %CutebotProDistanceUnits"
    export function distanceRunning(orientation: CutebotProOrientation, distance: number, distanceUnits: CutebotProDistanceUnits): void {
        let buf = pins.createBuffer(7)
        let curtime = 0
        let oldtime = 0
        let tempdistance = 0

        if (distanceUnits == CutebotProDistanceUnits.Cm)
            tempdistance = distance;
        else if (distanceUnits == CutebotProDistanceUnits.Ft)
            tempdistance = distance * 0.3937;

        buf[0] = 0x99;
        buf[1] = 0x03;
        buf[2] = orientation;
        buf[3] = tempdistance;
        buf[4] = 0x00;
        buf[5] = 0x00;
        buf[6] = 0x88;
        pins.i2cWriteBuffer(i2cAddr, buf)
        /*oldtime = control.millis()
        while(1)
        {
            curtime = control.millis()
            if ((curtime - oldtime) == (distance * 1000 / 20 + 600))
                break
        }*/

        basic.pause(tempdistance * 1000 / 20)
        basic.pause(800)

    }

    /**
     * 
     */
    //% group="PID Control"
    //% weight=200
    //% block="set %CutebotProWheel rotation %angle %CutebotProAngleUnits"
    export function angleRunning(orientation: CutebotProWheel, angle: number, angleUnits: CutebotProAngleUnits): void {
        let buf = pins.createBuffer(7)
        let curtime = 0
        let oldtime = 0
        let tempangle = 0
        pwmCruiseControl(0, 0)
        if (angleUnits == CutebotProAngleUnits.Angle)
            tempangle = angle * 17 / 360;
        else if (angleUnits == CutebotProAngleUnits.Circle)
            tempangle = angle * 17;

        while(1)
        {
            pulseNumber()
            if (orientation == CutebotProWheel.LeftWheel){
                pwmCruiseControl(30, 0)
                if (tempangle == pulseCntL * 360 / 1400)
                    break 
            }
            else if(orientation == CutebotProWheel.RightWheel){
                pwmCruiseControl(0, 30)
                if (tempangle == pulseCntR * 360 / 1400)
                    break
            }
            else{
                pwmCruiseControl(30, 30)
                if ((tempangle == pulseCntR * 360 / 1400) && (tempangle == pulseCntL * 360 / 1400))
                    break
            }

        }
        pwmCruiseControl(0, 0)
        return
    }

    /**
    * set block length
    */
    //% group="PID Control"
    //% weight=180
    //% block="set length of the squares as %length %CutebotProDistanceUnits"
    export function setBlockCnt(length: number, distanceUnits: CutebotProDistanceUnits): void {
        blocklength = length
        distanceUnitsFlag = distanceUnits
    }

    /**
    * run a specific number of blcok
    */
    //% group="PID Control"
    //% weight=170
    //% block="go forward %cnt squares"
    export function runBlockCnt(cnt: number): void {
        distanceRunning(CutebotProOrientation.Advance, blocklength * cnt, distanceUnitsFlag)
    }


    /**
     * set the trolley to rotate at a specific Angle
     */
    //% group="PID Control"
    //% weight=190
    //% block="set car %CutebotProTurn for angle %CutebotProAngle"
    export function trolleySteering(turn: CutebotProTurn, angle: CutebotProAngle): void {
        let curtime = 0
        let oldtime = 0
        let speed = 40
        let tempcntL = 0
        let tempcntR = 0
    
        pwmCruiseControl(0, 0)
        if (turn == 3){
            pulseNumber()
            tempcntL = pulseCntL
            tempcntR = pulseCntR
            pwmCruiseControl(speed, -speed)
            while (1){
                pulseNumber()
                if (Math.abs(pulseCntL - tempcntL) + Math.abs(pulseCntR - tempcntR) >= (angle + 1) * 600){
                    pwmCruiseControl(0, 0)
                    break
                }
                /*  if (pulseCntL - tempcntL >= (angle + 1) * 300 - 60)
                    Cutebot_Pro.StopImmediately(Wheel.LeftWheel)
                if (pulseCntR - tempcntR >= (angle + 1) * 300 - 60)
                    Cutebot_Pro.StopImmediately(Wheel.RightWheel)
                if ((pulseCntL - tempcntL >= (angle + 1) * 300 - 60) && (pulseCntR - tempcntR >= (angle + 1) * 300 - 60))
                    break*/
            }
        }
        else if(turn == 2){
            pulseNumber()
            tempcntL = pulseCntL
            tempcntR = pulseCntR
            pwmCruiseControl(-speed, speed)
            while (1) {
                pulseNumber()
                if (Math.abs(pulseCntL - tempcntL) + Math.abs(pulseCntR - tempcntR) >= (angle + 1) * 600) {
                    pwmCruiseControl(0, 0)
                    break
                }
            }
        }
        else if(turn == 1){
            pulseNumber()
            tempcntL = pulseCntL
            pwmCruiseControl(speed, 0)
            while (1) {
                pulseNumber()
                if (Math.abs(pulseCntL - tempcntL) >= (angle + 1) * 600) {
                    pwmCruiseControl(0, 0)
                    break
                }
            }
        }
        else if(turn == 0){
            pulseNumber()
            tempcntR = pulseCntR
            pwmCruiseControl(0, speed)
            while (1) {
                pulseNumber()
                if (Math.abs(pulseCntR - tempcntR) >= (angle + 1) * 600) {
                    pwmCruiseControl(0, 0)
                    break
                }
            }
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
        pins.setPull(DigitalPin.P16, PinPullMode.PullUp)
        control.onEvent(98, 3500, handler)
        control.inBackground(() => {
            while (true) {
                IR_Val = irCode()
                if (IR_Val != 0xff00) {
                    control.raiseEvent(98, 3500, EventCreationMode.CreateAndFire)
                }
                basic.pause(20)
            }
        })
    }

    /**
     * get IR value
     */
    //% group="Infrared sensor"
    //% block="IR button %Button is pressed"
    //% weight=150
    export function irButton(Button: CutbotProIRButtons): boolean {
        return (IR_Val & 0x00ff) == Button
    }

    /*function initEvents(): void {
        if (_initEvents) {
            pins.setEvents(DigitalPin.P13, PinEventType.Edge);
            pins.setEvents(DigitalPin.P14, PinEventType.Edge);
            _initEvents = false;
        }
    }*/


    /**
     * servo control module
     */
    //% group="Expansion port"
    //% weight=120
    //% block="set %ServoType servo %CutebotProServoIndex angel to %angle°"
    export function extendServoControl(servotype: ServoType, index: CutebotProServoIndex, angle: number): void {
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

        let buf = pins.createBuffer(7)
        buf[0] = 0x99;
        buf[1] = 0x0D;
        buf[2] = index;
        buf[3] = angleMap;
        buf[4] = 0x00;
        buf[5] = 0x00;
        buf[6] = 0x88;
        pins.i2cWriteBuffer(i2cAddr, buf);
    }

    /**
     * continuous servo control
     */
    //% group="Expansion port"
    //% weight=110
    //% block="set continuous servo %CutebotProServoIndex speed to %speed\\%"
    export function continuousServoControl(index: CutebotProServoIndex, speed: number): void {
        speed = Math.map(speed, -100, 100, 0, 180)
        extendServoControl(ServoType.Servo180, index, speed)
    }



    /**
     * motor control module
     */
    //% group="Expansion port"
    //% weight=140
    //% block="set motor speed to %speed\\%"
    //% speed.min=-100  speed.max=100
    export function extendMotorControl(speed: number): void {
        let buf = pins.createBuffer(7)
        buf[0] = 0x99;
        buf[1] = 0x0B;
        if (speed >= 0) {
            buf[2] = 0x01;
            buf[3] = speed;
        }

        if (speed < 0) {
            buf[2] = 0x00;
            buf[3] = -speed;
        }
        buf[4] = 0x00;
        buf[5] = 0x00;
        buf[6] = 0x88;
        pins.i2cWriteBuffer(i2cAddr, buf);
    }


    /**
     * extend motor stop
     */
    //% group="Expansion port"
    //% weight=130
    //% block="stop motor"
    export function extendMotorStop(): void {
        let buf = pins.createBuffer(7)
        buf[0] = 0x99;
        buf[1] = 0x0C;
        buf[2] = 0x02;
        buf[3] = 0xC8;
        buf[4] = 0x00;
        buf[5] = 0x00;
        buf[6] = 0x88;
        pins.i2cWriteBuffer(i2cAddr, buf);
    }

    /**
    * read version number
    */
    //% group="Others"
    //% weight=1
    //% block="version number"
    export function readVersions(): string {
        let cutebotProVersionsInteger: number = 0;
        let cutebotProVersionsDecimal: number = 0;

        let i2cBuffer = pins.createBuffer(7);
        i2cBuffer[0] = 0x99;
        i2cBuffer[1] = 0x15;
        i2cBuffer[2] = 0x00;
        i2cBuffer[3] = 0x00;
        i2cBuffer[4] = 0x00;
        i2cBuffer[5] = 0x00;
        i2cBuffer[6] = 0x88;
        pins.i2cWriteBuffer(i2cAddr, i2cBuffer)
        cutebotProVersionsDecimal = pins.i2cReadNumber(i2cAddr, NumberFormat.UInt8LE, false)

        i2cBuffer[0] = 0x99;
        i2cBuffer[1] = 0x15;
        i2cBuffer[2] = 0x01;
        i2cBuffer[3] = 0x00;
        i2cBuffer[4] = 0x00;
        i2cBuffer[5] = 0x00;
        i2cBuffer[6] = 0x88;
        pins.i2cWriteBuffer(i2cAddr, i2cBuffer)
        cutebotProVersionsInteger = pins.i2cReadNumber(i2cAddr, NumberFormat.UInt8LE, false)
        return ("V" + convertToText(cutebotProVersionsInteger) + "." + convertToText(cutebotProVersionsDecimal/10) + "." + convertToText(cutebotProVersionsDecimal%10))
        
    }
}
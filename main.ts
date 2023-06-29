

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
    leftwheel = 1,
    //%block="right wheel"
    rightwheel = 2,
    //%block="all wheels"
    allwheel = 3
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

enum RGBLight {
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
    cm = 0,
    //%block="inch"
    ft = 1,
    //%block="angle"
    ag = 2
}

enum CutebotProOrientation {
    //%block="forward"
    advance = 1,
    //%block="reverse"
    retreat = 0
}


enum CutebotProSpeedUnits {
    //%block="cm/s"
    cms = 0,
    //%block="inch/s"
    ins = 1
}

enum CutebotProTurn {
    //%block="turn left"
    turnLeft = 0,
    //%block="turn right"
    turnRight = 1,
    //%block="turn left at place"
    turnLeftInPlace = 2,
    //%block="turn right at place"
    turnRightInPlace = 3
    
}

enum CutebotProAngle {
    //%block="45°"
    angle45 = 0,
    //%block="90°"
    angle90 = 1,
    //%block="135°"
    angle135 = 2,
    //%block="180°"
    angle180 = 3
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
    Servo360 = 3,
}

enum SonarUnit {
    //% block="cm"
    Centimeters,
    //% block="inch"
    Inches
}

enum IRButtons {
    //% blcok="Menu"
    Menu = 2,
    //% blcok="Up"
    Up = 5,
    //% blcok="Left"
    Left = 8,
    //% blcok="Right"
    Right = 10,
    //% blcok="Down"
    Down = 13,
    //% blcok="OK"
    OK = 9,
    //% blcok="Plus"
    Plus = 4,
    //% blcok="Minus"
    Minus = 12,
    //% blcok="Back"
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
namespace Cutebot_Pro {
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
         * TODO: PWM control the car to travel at a specific speed
         */
    //% group="Basic control"
    //% block="Set the speed of left wheel at %speedL, set the speed of right wheel at %speedR"
    //% speed.min=-100 speed.max=100
    //% weight=340
    export function PWMCruiseControl(speedL: number, speedR: number): void {
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
            i2cBuffer[2] = CutebotProWheel.leftwheel;
            i2cBuffer[3] = 0x01;
            i2cBuffer[4] = speedL;
            i2cBuffer[5] = 0x00;
            i2cBuffer[6] = 0x88;
        }
        else {
            i2cBuffer[0] = 0x99;
            i2cBuffer[1] = 0x01;
            i2cBuffer[2] = CutebotProWheel.leftwheel;
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
            i2cBuffer[2] = CutebotProWheel.rightwheel;
            i2cBuffer[3] = 0x01;
            i2cBuffer[4] = speedR;
            i2cBuffer[5] = 0x00;
            i2cBuffer[6] = 0x88;
        }
        else {
            i2cBuffer[0] = 0x99;
            i2cBuffer[1] = 0x01;
            i2cBuffer[2] = CutebotProWheel.rightwheel;
            i2cBuffer[3] = 0x00;
            i2cBuffer[4] = -speedR;
            i2cBuffer[5] = 0x00;
            i2cBuffer[6] = 0x88;
        }
        pins.i2cWriteBuffer(i2cAddr, i2cBuffer)
    }

    /**
     * TODO: Full speed forward
     */
    //% group="Basic control"
    //% weight=360
    //%block="Full speed forward"
    export function FullSpeedAhead(): void {
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
     * TODO: Full speed reverse
     */
    //% group="Basic control"
    //% weight=350
    //%block="Full speed reverse"
    export function FullAstern(): void {
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
     * TODO: Stop immediately
     */
    //% group="Basic control"
    //% weight=330
    //%block="Set %CutebotProWheel to stop immediately"
    export function StopImmediately(wheel: CutebotProWheel): void {
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
     * TODO: Read motor speed
     */
    //% group="Basic control"
    //% weight=320
    //%block="Get the speed of %CutebotProMotors1"
    export function readSpeed(motor: CutebotProMotors1): number {
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
        }

        if (motor == 2)
            buf[0] = 0x99;
        buf[1] = 0x05;
        buf[2] = motor;
        buf[3] = 0x00;
        buf[4] = 0x00;
        buf[5] = 0x00;
        buf[6] = 0x88;
        pins.i2cWriteBuffer(i2cAddr, buf);
        speed = pins.i2cReadNumber(i2cAddr, NumberFormat.UInt8LE, false)
        return speed;
    }

    /**
    * 获取编码电机的脉冲数
    */
    export function getPulsenumber(): void {
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

    /**    测试--获取两边车轮的编码电机产生的脉冲的数量
     * TODO: Read pulse cnt
    */
    export function readPulsenumberTest(motor: CutebotProMotors1): number {
        getPulsenumber()
        if (motor == 1)
            return pulseCntL;
        else if (motor == 2)
            return pulseCntR;
        else
            return 0
    }

    /**
    * TODO: Get the rotation degrees of wheel
    */
    //% group="Basic control"
    //% weight=310
    //%block="Get the rotation degrees of %CutebotProMotors1"
    export function readdistance(motor: CutebotProMotors1): number {
        let cylinderNumber: number;
        getPulsenumber()
        if (motor == 1)
            return Math.floor( pulseCntL * 360 / 1400 );
        else
            return Math.floor(pulseCntR * 360 / 1400);
    }

    
    

    /**
     * TODO: Clear the rotation degrees of wheel
     */
    //% group="Basic control"
    //% weight=300
    //%block="Clear the rotation degrees of %CutebotProMotors1"
    export function ClearWheelTurn(motor: CutebotProMotors1): void {
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
    * TODO: Select a headlights and set the RGB color.
    * @param R R color value of RGB color, eg: 0
    * @param G G color value of RGB color, eg: 128
    * @param B B color value of RGB color, eg: 255
    */
    //% group="LED headlights"
    //% inlineInputMode=inline
    //% blockId=RGB block="Set the color of the headlights %RGBLight as R:%r G:%g B:%b"
    //% r.min=0 r.max=255
    //% g.min=0 g.max=255
    //% b.min=0 b.max=255
    //% weight=280
    export function singleheadlights(light: RGBLight, r: number, g: number, b: number): void {
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
    * TODO: Set LED headlights.
    */
    //% group="LED headlights"
    //% block="Set the color of %RGBLight as $color"
    //% color.shadow="colorNumberPicker"
    //% weight=290
    export function colorLight(light: RGBLight, color: number) {
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
    * TODO: Turn off all the LED lights
    */
    //% group="LED headlights"
    //% block="Turn off all the LED lights"
    //% weight=270
    export function TurnOffAllHeadlights(): void {
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
    * TODO: Get a status value of the 4-way line following sensor
    */
    //% group="4-way line following sensor "
    //% weight=270
    //% block="Get a status value of the 4-way line following sensor"
    export function Trackbit_get_state_value() {
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
    * TODO: The 4-way line following sensor offset
    */
    //% group="4-way line following sensor "
    //% weight=250
    //%block="The 4-way line following sensor offset"
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
    * TODO: Get Grayscale Sensor State
    */
    //% group="4-way line following sensor "
    //% weight=260
    //%block="The 4-way line following sensor recognizes %TrackbitStateType"
    export function getGrayscaleSensorState(state: TrackbitStateType): boolean {
        return fourWayStateValue == state
    }
    
    /**
    * TODO: Check whether the channel is online
    */
    //% group="4-way line following sensor "
    //% weight=240
    //% block="The 4-way line following sensor channel %TrackbitChannel recognizes %TrackbitType"
    export function TrackbitChannelState(channel: TrackbitChannel, state: TrackbitType): boolean {
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
    * TODO: Get gray value.The range is from 0 to 255.
    */
    //% group="4-way line following sensor "
    //% weight=230
    //% block="The 4-way line following sensor channel %TrackbitChannel gray value"
    export function TrackbitgetGray(channel: TrackbitChannel): number {
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
      * TODO: Cars can extend the ultrasonic function to prevent collisions and other functions..
      * @param Sonarunit two states of ultrasonic module, eg: Centimeters
      */
    //% group="Ultrasonic sensor"
    //% blockId=ultrasonic block="Return the distance value %unit from HC-SR04 ultrasonic sensor"
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
     * TODO: Control the car to travel at a specific speed (speed.min=20cm/s speed.max=50cm/s)
     */
    //% group="PID Control"
    //% block="Set the left wheel speed at %speedL, right wheel speed at %speedR %CutebotProSpeedUnits"
    //% weight=210
    export function CruiseControl(speedL: number, speedR: number, speedUnits: CutebotProSpeedUnits): void {
        let buf = pins.createBuffer(7)
        let orientationL = 0
        let orientationR = 0

        if (speedUnits == CutebotProSpeedUnits.cms){
            speedL = speedL;
            speedR = speedR;
        }
        else{
            speedL = speedL * 0.3937;
            speedR = speedR * 0.3937;
        }
            
        if(speedL < 0){
            speedL = -speedL
            orientationL = CutebotProOrientation.retreat
        }else{
            orientationL = CutebotProOrientation.advance
        }

        if (speedR < 0) {
            speedR = -speedR
            orientationR = CutebotProOrientation.retreat
        }else{
            orientationR = CutebotProOrientation.advance
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
        buf[2] = CutebotProWheel.leftwheel;
        buf[3] = speedL;
        buf[4] = orientationL;
        buf[5] = 0x00;
        buf[6] = 0x88;
        pins.i2cWriteBuffer(i2cAddr, buf)
        buf[0] = 0x99;
        buf[1] = 0x02;
        buf[2] = CutebotProWheel.rightwheel;
        buf[3] = speedR;
        buf[4] = orientationR;
        buf[5] = 0x00;
        buf[6] = 0x88;
        pins.i2cWriteBuffer(i2cAddr, buf)
    }

    /**
     * TODO: Set the car to travel a specific distance(distance.max=255cm, distance.min=0cm)
     */
    //% group="PID Control"
    //% weight=200
    //% block="Set the cart %CutebotProOrientation for %distance %CutebotProDistanceUnits"
    export function DistanceRunning(orientation: CutebotProOrientation, distance: number, distanceUnits: CutebotProDistanceUnits): void {
        let buf = pins.createBuffer(7)
        let curtime = 0
        let oldtime = 0
        let tempdistance = 0

        if (distanceUnits == CutebotProDistanceUnits.cm)
            tempdistance = distance;
        else if (distanceUnits == CutebotProDistanceUnits.ft)
            tempdistance = distance * 0.3937;
        else if (distanceUnits == CutebotProDistanceUnits.ag)
            tempdistance = distance * 17 / 360;

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
    * TODO: Set block length
    */
    //% group="PID Control"
    //% weight=180
    //% block="Set the length of the blocks as %length %CutebotProDistanceUnits"
    export function SetBlockCnt(length: number, distanceUnits: CutebotProDistanceUnits): void {
        blocklength = length
        distanceUnitsFlag = distanceUnits
    }

    /**
    * TODO: Run a specific number of blcok
    */
    //% group="PID Control"
    //% weight=170
    //% block="Set the cart forward %cnt blcoks"
    export function RunBlockCnt(cnt: number): void {
        DistanceRunning(CutebotProOrientation.advance, blocklength * cnt, distanceUnitsFlag)
    }


    /**
     * TODO: Set the trolley to rotate at a specific Angle
     */
    //% group="PID Control"
    //% weight=190
    //% block="Set the cart %CutebotProTurn for angle %CutebotProAngle"
    export function TrolleySteering(turn: CutebotProTurn, angle: CutebotProAngle): void {
        let curtime = 0
        let oldtime = 0
        let speed = 40
        let tempcntL = 0
        let tempcntR = 0
    
        Cutebot_Pro.PWMCruiseControl(0, 0)
        if (turn == 3){
            getPulsenumber()
            tempcntL = pulseCntL
            tempcntR = pulseCntR
            Cutebot_Pro.PWMCruiseControl(speed, -speed)
            while (1){
                getPulsenumber()
                if (Math.abs(pulseCntL - tempcntL) + Math.abs(pulseCntR - tempcntR) >= (angle + 1) * 600){
                    Cutebot_Pro.PWMCruiseControl(0, 0)
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
            getPulsenumber()
            tempcntL = pulseCntL
            tempcntR = pulseCntR
            Cutebot_Pro.PWMCruiseControl(-speed, speed)
            while (1) {
                getPulsenumber()
                if (Math.abs(pulseCntL - tempcntL) + Math.abs(pulseCntR - tempcntR) >= (angle + 1) * 600) {
                    Cutebot_Pro.PWMCruiseControl(0, 0)
                    break
                }
            }
        }
        else if(turn == 1){
            getPulsenumber()
            tempcntL = pulseCntL
            Cutebot_Pro.PWMCruiseControl(speed, 0)
            while (1) {
                getPulsenumber()
                if (Math.abs(pulseCntL - tempcntL) >= (angle + 1) * 600) {
                    Cutebot_Pro.PWMCruiseControl(0, 0)
                    break
                }
            }
        }
        else if(turn == 0){
            getPulsenumber()
            tempcntR = pulseCntR
            Cutebot_Pro.PWMCruiseControl(0, speed)
            while (1) {
                getPulsenumber()
                if (Math.abs(pulseCntR - tempcntR) >= (angle + 1) * 600) {
                    Cutebot_Pro.PWMCruiseControl(0, 0)
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
    //% block="When receiving infrared signals"
    export function IR_callback(handler: () => void) {
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
     * TODO: Get IR value
     */
    //% group="Infrared sensor"
    //% block="While pressing infrared button %Button"
    //% weight=150
    export function IR_Button(Button: IRButtons): boolean {
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
     * TODO: Servo control module
     */
    //% group="Expansion port"
    //% weight=120
    //% block="Set %ServoType servo Sequence %CutebotProServoIndex Angel %angle"
    export function ExtendServoControl(servotype: ServoType, index: CutebotProServoIndex, angle: number): void {
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
     * TODO: Continuous servo control
     */
    //% group="Expansion port"
    //% weight=110
    //% block="Set continuous servo %ServoIndex speed at %speed"
    export function ContinuousServoControl(index: CutebotProServoIndex, speed: number): void {
        speed = Math.map(speed, -100, 100, 0, 180)
        ExtendServoControl(ServoType.Servo180, index, speed)
    }



    /**
     * TODO: Motor control module
     */
    //% group="Expansion port"
    //% weight=140
    //% block="Set the speed of the expansion motor at %speed"
    //% speed.min=-100  speed.max=100
    export function ExtendMotorControl(speed: number): void {
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
     * TODO: Extend motor stop
     */
    //% group="Expansion port"
    //% weight=130
    //% block="Stop the expansion motor"
    export function ExtendMotorStop(): void {
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
    * TODO: Read version number
    */
    //% group="Others"
    //% weight=1
    //% block="Get the version number"
    export function ReadVersions(): string {
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
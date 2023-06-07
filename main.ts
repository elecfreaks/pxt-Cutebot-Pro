

enum PIN {
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


enum Wheel {
    //%block="LeftWheel"
    LeftWheel = 1,
    //%block="RightWheel"
    RightWheel = 2,
    //%block="AllWheel"
    AllWheel = 3
}


enum Motors {
    //% block="left"
    M1 = 0,
    //% block="right"
    M2 = 1,
    //% block="ALL"
    ALL = 3
}

enum Motors1 {
    //% block="left"
    M1 = 2,
    //% block="right"
    M2 = 1,
}

enum Dir {
    //% block="rotate forward"
    CW = 1,
    //% block="backward"
    CCW = 2
}

enum ServoIndex {
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
    //%block="RGB_L"
    RGBL = 2,
    //%block="RGB_R"
    RGBR = 1,
    //%block="ALL"
    RGBA = 3
}

enum Patrol {
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


enum PID {
    //%block="OFF"
    OFF = 0,
    //%block="ON"
    ON = 1
}

enum DistanceUnits {
    //%block="cm"
    cm = 0,
    //%block="in"
    ft = 1
}

enum Orientation {
    //%block="advance"
    advance = 1,
    //%block="retreat"
    retreat = 0
}


enum SpeedUnits {
    //%block="cm/s"
    cms = 0,
    //%block="in/s"
    ins = 1
}

enum Turn {
    //%block="TurnLeft"
    turnLeft = 0,
    //%block="TurnRight"
    turnRight = 1
}

enum Angle {
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
    //% block="inches"
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
         * PWM Control the car to travel at a specific speed
         */
    //% group="Basic"
    //% block="Set LeftWheel speed %speedL, Set RightWheel speed %speedR"
    //% speed.min=-100 speed.max=100
    //% weight=340
    export function PWMCruiseControl(speedL: number, speedR: number): void {
        let i2cBuffer = pins.createBuffer(7)
        
        if (speedL == 0)
            speedL = 200
        else
            Math.map(speedL, 0, 100, 20, 100);
        if (speedR == 0)
            speedR = 200
        else
            Math.map(speedR, 0, 100, 20, 100);
    
        if (speedL > 0) {
            i2cBuffer[0] = 0x99;
            i2cBuffer[1] = 0x01;
            i2cBuffer[2] = Wheel.LeftWheel;
            i2cBuffer[3] = 0x01;
            i2cBuffer[4] = speedL;
            i2cBuffer[5] = 0x00;
            i2cBuffer[6] = 0x88;
        }
        else {
            i2cBuffer[0] = 0x99;
            i2cBuffer[1] = 0x01;
            i2cBuffer[2] = Wheel.LeftWheel;
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
            i2cBuffer[2] = Wheel.RightWheel;
            i2cBuffer[3] = 0x01;
            i2cBuffer[4] = speedR;
            i2cBuffer[5] = 0x00;
            i2cBuffer[6] = 0x88;
        }
        else {
            i2cBuffer[0] = 0x99;
            i2cBuffer[1] = 0x01;
            i2cBuffer[2] = Wheel.RightWheel;
            i2cBuffer[3] = 0x00;
            i2cBuffer[4] = -speedR;
            i2cBuffer[5] = 0x00;
            i2cBuffer[6] = 0x88;
        }
        pins.i2cWriteBuffer(i2cAddr, i2cBuffer)
    }

    /**
     * Full speed ahead
     */
    //% group="Basic"
    //% weight=360
    //%block="FullSpeedAhead"
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
     * Full astern
     */
    //% group="Basic"
    //% weight=350
    //%block="FullAstern"
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
     * Stop immediately
     */
    //% group="Basic"
    //% weight=330
    //%block="set %Wheel StopImmediately"
    export function StopImmediately(wheel: Wheel): void {
        let buf = pins.createBuffer(7);
        buf[0] = 0x99;
        buf[1] = 0x09;
        buf[2] = wheel;
        buf[3] = 0x00;
        buf[4] = 0x00;
        buf[5] = 0x00;
        buf[6] = 0x88;
        pins.i2cWriteBuffer(i2cAddr, buf);
        basic.pause(20)
    }




    /**
     * Read motor speed
     */
    //% group="Basic"
    //% weight=320
    //%block="get wheel %Motors1 speed"
    export function readSpeed(motor: Motors1): number {
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
   * get the revolutions of wheel
   */
    //% group="Basic"
    //% weight=310
    //%block="get the number of turns of the wheel %motor"
    export function readeDistance(motor: Motors1): number {
        let cylinderNumber: number;
        let buf = pins.createBuffer(7)
        buf[0] = 0x99;
        buf[1] = 0x06;
        buf[2] = motor;
        buf[3] = 0x00;
        buf[4] = 0x00;
        buf[5] = 0x00;
        buf[6] = 0x88;
        pins.i2cWriteBuffer(i2cAddr, buf);
        basic.pause(10);
        cylinderNumber = pins.i2cReadNumber(i2cAddr, NumberFormat.UInt8LE, false)
        return cylinderNumber;
    }


    /**
     * Clear the number of wheel turns
     */
    //% group="Basic"
    //% weight=300
    //%block="Clear wheel %motor turn"
    export function ClearWheelTurn(motor: Motors1): void {
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
    //% group="Headlights"
    //% inlineInputMode=inline
    //% blockId=RGB block="Set LED headlights %light color R:%r G:%g B:%b"
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
    //% group="Headlights"
    //% block="Set LED headlights %RGBLight color $color"
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
    * Turn off all headlights
    */
    //% group="Headlights"
    //% block="Turn off all headlights"
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
    * Get Trackbit State Value
    */
    //% group="Four-Way"
    //% weight=270
    //% block="Get a Trackbit state value"
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
    * get Offset of the Four-way patrol line sensor
    */
    //% group="Four-Way"
    //% weight=250
    //%block="get Four-way patrol line the number Offset"
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
    * Get Grayscale Sensor State
    */
    //% group="Four-Way"
    //% weight=260
    //%block="Grayscale sensor state is %TrackbitStateType"
    export function getGrayscaleSensorState(state: TrackbitStateType): boolean {
        return fourWayStateValue == state
    }
    

    //% group="Four-Way"
    //% weight=240
    //% block="Trackbit channel %TrackbitChannel is %TrackbitType"
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
    * Get gray value.The range is from 0 to 255.
    */
    //% group="Four-Way"
    //% weight=230
    //% block="Trackbit channel %TrackbitChannel gray value"
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
      * Cars can extend the ultrasonic function to prevent collisions and other functions.. 
      * @param Sonarunit two states of ultrasonic module, eg: Centimeters
      */
    //% group="HC-SR04"
    //% blockId=ultrasonic block="HC-SR04 Sonar unit %unit"
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
     * Control the car to travel at a specific speed (speed.min=20cm/s speed.max=50cm/s)
     */
    //% group="PIDContrl"
    //% block="Set LeftWheel Speed %speed, Set RightWheel Speed %speed %SpeedUnits"
    //% weight=210
    export function CruiseControl(speedL: number, speedR: number, speedUnits: SpeedUnits): void {
        let buf = pins.createBuffer(7)
        let orientationL = 0
        let orientationR = 0

        if (speedUnits == SpeedUnits.cms){
            speedL = speedL;
            speedR = speedR;
        }
        else{
            speedL = speedL * 0.3937;
            speedR = speedR * 0.3937;
        }
            
        if(speedL < 0){
            speedL = -speedL
            orientationL = Orientation.retreat
        }else{
            orientationL = Orientation.advance
        }

        if (speedR < 0) {
            speedR = -speedR
            orientationR = Orientation.retreat
        }else{
            orientationR = Orientation.advance
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
        buf[2] = Wheel.LeftWheel;
        buf[3] = speedL;
        buf[4] = orientationL;
        buf[5] = 0x00;
        buf[6] = 0x88;
        pins.i2cWriteBuffer(i2cAddr, buf)
        buf[0] = 0x99;
        buf[1] = 0x02;
        buf[2] = Wheel.RightWheel;
        buf[3] = speedR;
        buf[4] = orientationR;
        buf[5] = 0x00;
        buf[6] = 0x88;
        pins.i2cWriteBuffer(i2cAddr, buf)
    }

    /**
     * Set the car to travel a specific distance
     */
    //% group="PIDContrl"
    //% weight=200
    //% block="Set up car %Orientation travel %distance %DistanceUnits"
    export function DistanceRunning(orientation: Orientation, distance: number, distanceUnits: DistanceUnits): void {
        let buf = pins.createBuffer(7)
        let curtime = 0
        let oldtime = 0
        let tempdistance = 0

        if (distanceUnits == DistanceUnits.cm)
            tempdistance = distance;
        else
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

        basic.pause(distance * 1000 / 20)
        basic.pause(800)

    }

    /**
    * Set block length
    */
    //% group="PIDContrl"
    //% weight=180
    //% block="Set blcok %length %DistanceUnits"
    export function SetBlockCnt(length: number, distanceUnits: DistanceUnits): void {
        blocklength = length
        distanceUnitsFlag = distanceUnits
    }

    /**
    * Run a specific number of blcok
    */
    //% group="PIDContrl"
    //% weight=170
    //% block="Set up car advance travel %cnt blcok"
    export function RunBlockCnt(cnt: number): void {
        DistanceRunning(Orientation.advance, blocklength * cnt, distanceUnitsFlag)
    }


    /**
     * Set the trolley to rotate at a specific Angle
     */
    //% group="PIDContrl"
    //% weight=190
    //% block="Set up car %Turn Angle %angle"
    export function TrolleySteering(turn: Turn, angle: Angle): void {
        let curtime = 0
        let oldtime = 0
        let buf = pins.createBuffer(7)
        buf[0] = 0x99;
        buf[1] = 0x04;
        buf[2] = turn;
        buf[3] = angle;
        buf[4] = 0x00;
        buf[5] = 0x00;
        buf[6] = 0x88;
        pins.i2cWriteBuffer(i2cAddr, buf)
        //oldtime = control.millis()
        if (angle == Angle.angle45) {
            /*while (1) {
                curtime = control.millis()
                if (curtime - oldtime == 1000)
                    break
            }*/
            basic.pause(1100)
        }
        else if (angle == Angle.angle90) {
            /*while (1) {
                curtime = control.millis()
                if (curtime - oldtime == 1400)
                    break
            }*/
            basic.pause(1500)
        }
        else if (angle == Angle.angle135) {
            /*while (1) {
                curtime = control.millis()
                if (curtime - oldtime == 1800)
                    break
            }*/
            basic.pause(1900)
        }
        else {
            /*while (1) {
                curtime = control.millis()
                if (curtime - oldtime == 2100)
                    break
            }*/
            basic.pause(2200)
        }
    }



    //% shim=IRV2::irCode
    function irCode(): number {
        return 0;
    }

    //% group="IRservo"
    //% weight=160
    //% block="On IR receiving"
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
    //% group="IRservo"
    //% block="IR Button %Button is pressed"
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
     * Servo control module
     */
    //% group="Extendinterface"
    //% weight=120
    //% block="set %ServoType index %ServoIndex angle %angle"
    export function ExtendServoControl(servotype: ServoType, index: ServoIndex, angle: number): void {
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
    //% group="Extendinterface"
    //% weight=110
    //% block="set continuous servo %ServoIndex speed %speed"
    export function ContinuousServoControl(index: ServoIndex, speed: number): void {
        speed = Math.map(speed, -100, 100, 0, 180)
        ExtendServoControl(ServoType.Servo180, index, speed)
    }



    /**
     * MOTOR control module
     */
    //% group="Extendinterface"
    //% weight=140
    //% block="set motor speed %speed"
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
     * extend motor stop
     */
    //% group="Extendinterface"
    //% weight=130
    //% block="extend motor stops"
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
    * Read version number
    */
    //% weight=1
    //% block="Read version number"
    export function ReadVersions(): number {
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
        return cutebotProVersionsInteger + (cutebotProVersionsDecimal * 0.01)


    }
}

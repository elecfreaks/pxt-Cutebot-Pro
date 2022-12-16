

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
    M1 = 0,
    //% block="right"
    M2 = 3,
}

enum Dir {
    //% block="rotate forward"
    CW = 1,
    //% block="backward"
    CCW = 2
}

enum Servos {
    //% block="S1"
    S1 = 0,
    //% block="S2"
    S2 = 1,
    //% block="S3"
    S3 = 2
}

enum RGBLight {
    //%block="RGB_L"
    RGBL = 1,
    //%block="RGB_R"
    RGBR = 2,
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


//% weight=100  color=#444444   block="Cutebot Pro" icon="\uf067"
namespace Cutebot_Pro {
    let irstate: number;
    let state: number;
    export class Packeta {
        public mye: string;
        public myparam: number;
    }

    /**
     *  Init I2C until success
     */
    //% weight=100
    //%block="initialize via I2C until success"
    export function I2CInit(): void {
        let Version_v = 0;
        pins.i2cWriteNumber(0x10, 0x32, NumberFormat.Int8LE);
        Version_v = pins.i2cReadNumber(0x10, NumberFormat.Int8LE);
        while (Version_v == 0) {
            basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
                `, 10)
            basic.pause(500)
            basic.clearScreen()
            pins.i2cWriteNumber(0x10, 0x32, NumberFormat.Int8LE);
            Version_v = pins.i2cReadNumber(0x10, NumberFormat.Int8LE);
        }
        basic.showLeds(`
                . . . . .
                . . . . #
                . . . # .
                # . # . .
                . # . . .
                `, 10)
        basic.pause(500)
        basic.clearScreen()
    }

    /**
     * PID control module
     */
    //% weight=90
    //%block="PID switch|%pid"
    export function PID(pid: PID): void {
        let buf = pins.createBuffer(2);
        buf[0] = 0x0A;
        buf[1] = pid;
        pins.i2cWriteBuffer(0x10, buf);
    }
    /**
     * Motor control module
     */
    //% weight=80
    //% block="lspeed|%lspeed|rspeed|%rspeed| "
    //% lspeed.min=-100 lspeed.max=100
    //% rspeed.min=-100 rspeed.max=100
    export function mototRun(lspeed: number, rspeed: number): void {
        let l_speed: number;
        if (lspeed >= 100) l_speed = 100;
        else l_speed = lspeed;
        let r_speed: number;
        if (rspeed >= 100) r_speed = 100;
        else r_speed = rspeed;

        let buf = pins.createBuffer(7)
        buf[0] = 0x00;
        buf[1] = 0x01;
        buf[2] = l_speed;
        buf[3] = r_speed;
        buf[4] = 0;
        buf[5] = 0;
        buf[6] = 0;
        pins.i2cWriteBuffer(0x08, buf)

    }
    /**
     * Motor stop module
     */
    //% weight=75
    //% block="Motor|%index stop"
    export function mototStop(index: Motors): void {

        if (index == 1) {
            let buf = pins.createBuffer(3)
            buf[0] = 0x00;
            buf[1] = 0;
            buf[2] = 0;
            pins.i2cWriteBuffer(0x10, buf)

        } if (index == 0) {
            let buf = pins.createBuffer(3)
            buf[0] = 0x02;
            buf[1] = 0;
            buf[2] = 0;
            pins.i2cWriteBuffer(0x10, buf)
        }
        if (index == 3) {
            let buf = pins.createBuffer(5)
            buf[0] = 0x00;
            buf[1] = 0x01;
            buf[2] = 0;
            buf[3] = 0;
            buf[4] = 0;
            pins.i2cWriteBuffer(0x10, buf)
        }
    }



    /**
     * Read motor speed
     */
    //% weight=65
    //%block="read motor|%index speed"
    export function readSpeed(index: Motors1): number {
        let _speed: number, ret = -1;
        pins.i2cWriteNumber(0x10, 0, NumberFormat.Int8LE)
        let speed_x = pins.i2cReadBuffer(0x10, 4)
        if (index == 1) {
            if ((Math.round(speed_x[1]) < 20) && (Math.round(speed_x[1]) != 0)) {
                ret = Math.round(speed_x[1]) + 255;
            } else {
                ret = Math.round(speed_x[1]);
            }
        } else if (index == 2) {
            if ((Math.round(speed_x[3]) < 20) && (Math.round(speed_x[3]) != 0)) {
                ret = Math.round(speed_x[3]) + 255;
            } else {
                ret = Math.round(speed_x[3]);
            }
        }
        return ret;
    }

    /**
     * Servo control module
     */
    //% weight=40
    //% block="servo|%index|angle|%angle"
    //% angle.min=0  angle.max=180
    export function servoRun(index: Servos, angle: number): void {
        let buf = pins.createBuffer(7)
        if (index == 0) {
            buf[0] = 0x00;
            buf[1] = 0x04;
            buf[2] = 0x01;
            buf[3] = angle;
            buf[4] = 0;
            buf[5] = 0;
            buf[6] = 0;
            pins.i2cWriteBuffer(0x8, buf);
        }
        if (index == 1) {
            buf[0] = 0x00;
            buf[1] = 0x04;
            buf[2] = 0x00;
            buf[3] = angle;
            buf[4] = 0;
            buf[5] = 0;
            buf[6] = 0;
            pins.i2cWriteBuffer(0x8, buf);
        }
        if (index == 2) {
            buf[0] = 0x00;
            buf[1] = 0x04;
            buf[2] = 0x02;
            buf[3] = angle;
            buf[4] = 0;
            buf[5] = 0;
            buf[6] = 0;
            pins.i2cWriteBuffer(0x8, buf);
        }
    }

    /**
 * MOTOR control module
 */
    //% weight=40
    //% block="motor speed|%speed_e"
    //% speed_e.min=-100  speed_e.max=100
    export function motorRun(speed_e: number): void {
        let buf = pins.createBuffer(7)
        buf[0] = 0x00;
        buf[1] = 0x03;
        buf[2] = -speed_e;
        buf[3] = 0;
        buf[4] = 0;
        buf[5] = 0;
        buf[6] = 0;
        pins.i2cWriteBuffer(0x8, buf);
    }


    /**
     * Control the color of RGB LED
     */
    //% weight=50
    //% block="set |%rgbshow color|%color"
    //% color.min=0  color.max=255
    export function setRGBLight(rgbshow: RGBLight, color: number): void {

        if (rgbshow == 1) {
            let buf = pins.createBuffer(2)
            buf[0] = 0x0B;
            buf[1] = color;
            pins.i2cWriteBuffer(0x10, buf);
        } if (rgbshow == 2) {
            let buf = pins.createBuffer(2)
            buf[0] = 0x0C;
            buf[1] = color;
            pins.i2cWriteBuffer(0x10, buf);
        } if (rgbshow == 3) {
            let buf = pins.createBuffer(3)
            buf[0] = 0x0B;
            buf[1] = color;
            buf[2] = color;
            pins.i2cWriteBuffer(0x10, buf);
        }

    }

    /**
     * Read line-tracking sensor status
     */
    //% weight=56
    //%block="read line-tracking sensor|%patrol"
    export function readPatrol(patrol: Patrol): number {
        pins.i2cWriteNumber(0x10, 0x1D, NumberFormat.Int8LE);
        let patrol_y = pins.i2cReadBuffer(0x10, 1);
        let mark: number;
        switch (patrol) {
            case 1: mark = (patrol_y[0] & 0x04) == 0x04 ? 1 : 0; break;
            case 2: mark = (patrol_y[0] & 0x02) == 0x02 ? 1 : 0; break;
            case 3: mark = (patrol_y[0] & 0x08) == 0x08 ? 1 : 0; break;
            case 4: mark = (patrol_y[0] & 0x10) == 0x10 ? 1 : 0; break;
            case 5: mark = (patrol_y[0] & 0x01) == 0x01 ? 1 : 0; break;
            case 6: mark = (patrol_y[0] & 0x20) == 0x20 ? 1 : 0; break;
        }

        return mark
    }


    /**
     * get the revolutions of wheel
     */
    //% weight=60
    //%block="get the revolutions of wheel %motor"
    export function readeDistance(motor: Motors1): string {
        let distance: number;
        pins.i2cWriteNumber(0x10, 4, NumberFormat.Int8LE)
        let speed_x = pins.i2cReadBuffer(0x10, 4)
        switch (motor) {
            case 1: distance = ((speed_x[0] << 8 | speed_x[1]) * 10) / 900; break;
            default: distance = ((speed_x[2] << 8 | speed_x[3]) * 10) / 900; break;
        }
        let index = distance.toString().indexOf(".");
        let x: string = distance.toString().substr(0, index + 3)
        return x;
        basic.pause(30)
    }
}

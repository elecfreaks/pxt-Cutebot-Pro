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

}
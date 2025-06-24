enum MotorSide {
    //% block="左"
    Left = AnalogPin.P13,
    //% block="右"
    Right = AnalogPin.P15
}

/**
 * タイヤ制御
 */
//% block="|%side|のタイヤを動かす 速さ %speed"
//% speed.min=0 speed.max=1023
export function moveMotor(side: MotorSide, speed: number): void {
    pins.analogWritePin(<AnalogPin>side, speed);
}

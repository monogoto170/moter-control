//% weight=100 color=#0fbc11 icon="\uf013" block="モーター制御"
namespace MotorControl {

    export enum Tire {
        //% block="左のタイヤ (P13)"
        Left = 13,
        //% block="右のタイヤ (P15)"
        Right = 15
    }

    /**
     * 指定したタイヤを指定した速さで回転させる
     * @param tire 左または右のタイヤ
     * @param speed 回転速度 (0~1023)
     */
    //% block="%tire のタイヤを回す 速さ %speed"
    //% speed.min=0 speed.max=1023
    //% inlineInputMode=inline
    export function turn(tire: Tire, speed: number): void {
        pins.analogWritePin(<AnalogPin>tire, speed)
    }
}

import EffectBase from '../EffectBase';
import LED from '../LED';
import Color from '../Color';
import EffectsUtils from "../EffectsUtils";
import StepTimeAbstract from "./utils/StepTimeAbstract";

/**
 * Theater Chase Effect
 */
export default class TheaterChaseEffect extends StepTimeAbstract {

  static _name = 'theater_chase';
  ledsCount: number;
  cursor: number;
  space: number = NaN;
  moveDirection;
  baseColor: Color;
  colorLinks: Array<Color> = [];
  rainbow: boolean;

  process(options: any, leds: Array<LED>, animationStartedTime: number,
          animationTime: number, currentTime: number): void {

    if (!this.initialized) {
      this.initialized = true;
      this.baseColor = new Color(options.baseColor[0], options.baseColor[1], options.baseColor[2]);
      this.ledsCount = leds.length;
      this.stepTime = options.stepTime;
      this.resetStep();
      this.space = options.space;
      this.moveDirection = options.direction !== 'normal' ? 1 : -1;
      this.cursor = 0;
      this.rainbow = options.rainbow;
      this.colorLinks = [];
      if (options.forceSmooth) {
        while (this.space + 1 > 0
        && Math.round(leds.length / (this.space)) !== leds.length / (this.space)) {
          this.space--;
        }
        if (leds.length / this.space !== Math.round(leds.length / this.space)) {
          this.space = 0;
        }
      }

      const colorsArraySize =
        options.forceSmooth ?
          leds.length : 2 * (this.space)* (1 + Math.ceil(this.ledsCount / (2 * (this.space))));


      for (let i = 0; i < colorsArraySize; i++) {
        if (i % this.space !== 0) {
          this.colorLinks[i] = Color.Off;
        } else if (!this.rainbow) {
          this.colorLinks[i] = this.baseColor;
        } else {
          this.colorLinks[i] = Color.fromHSL({
            H: (i / (colorsArraySize - 1)),
            S: 1,
            L: 0.6
          });
        }
      }
    }

    if (this.stepCheck()) {
      for (let i = 0; i < this.ledsCount; i++) {
        leds[i].color = this.colorLinks[(this.cursor + i) % (this.colorLinks.length)];
      }
    }
  }


  public onStepChange(currentStep: number, delta: number, firstChange: boolean): void {
    if (!firstChange) {
      this.cursor = (this.cursor + this.moveDirection * delta) % (this.colorLinks.length);
      if (this.cursor < 0) {
        this.cursor = this.colorLinks.length + this.cursor;
      }
    }
  }


}

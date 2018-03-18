import * as LIU_Engine from './LightItUpEngineCore';

/**
 * Entry point for 'NOT Typescript' environments usage
 */
export default class LightItUpEngine {
    static Color: any = LIU_Engine.Color;
    static EffectBase: any = LIU_Engine.EffectBase;
    static EffectConfig: any = LIU_Engine.EffectConfig;
    static EffectController: any = LIU_Engine.EffectController;
    static LED: any = LIU_Engine.LED;
    static LEDAnimator: any = LIU_Engine.LEDAnimator;
    static LEDController: any = LIU_Engine.LEDController;
    static EffectsAPI_JSON: any = LIU_Engine.EffectsAPI_JSON;
    static AudioEffect: any = LIU_Engine.AudioEffect;
    static Effects: any = {
        AudioEffect: LIU_Engine.AudioEffect,
        BouncingBallEffect: LIU_Engine.BouncingBallEffect,
        BreathEffect: LIU_Engine.BreathEffect,
        CandleEffect: LIU_Engine.CandleEffect,
        ColorWipeEffect: LIU_Engine.ColorWipeEffect,
        KnightRiderEffect: LIU_Engine.KnightRiderEffect,
        ExplodeEffect: LIU_Engine.ExplodeEffect,
        FireEffect: LIU_Engine.FireEffect,
        MovingWavesEffect: LIU_Engine.MovingWavesEffect,
        RainbowEffect: LIU_Engine.RainbowEffect,
        RandomColorEffect: LIU_Engine.RandomColorEffect,
        ShineEffect: LIU_Engine.ShineEffect,
        SimpleColorEffect: LIU_Engine.SimpleColorEffect,
        SparkleEffect: LIU_Engine.SparkleEffect,
        StackEffect: LIU_Engine.StackEffect,
        StepperEffect: LIU_Engine.StepperEffect,
        TheaterChaseEffect: LIU_Engine.TheaterChaseEffect,
        TrailsEffect: LIU_Engine.TrailsEffect,
        TwinkleEffect: LIU_Engine.TwinkleEffect,
    };
}

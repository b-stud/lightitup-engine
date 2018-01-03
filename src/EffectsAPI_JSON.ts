/**
 * Expose all existing options of available effects
 */
export const EffectsAPI_JSON = {
    "globalProperties": [
        {
            "id": "activated",
            "value": true,
            "title": "Activated",
            "description": "Enable/Disable",
            "type": "boolean",
            "global": true
        },
        {
            "id": "delay",
            "value": 0,
            "title": "Delay",
            "description": "Delay the beginning (ms)",
            "type": "integer",
            "min": 0,
            "step": 1,
            "global": true
        },
        {
            "id": "duration",
            "title": "Duration",
            "type": "integer",
            "description": "Useful when scheduling several effects (ms)",
            "value": 3000,
            "min": 1,
            "step": 1,
            "global": true
        },
        {
            "id": "waitAtEnd",
            "value": 0,
            "title": "Time to wait at end",
            "description": "Useful when scheduling several effects (ms)",
            "type": "integer",
            "min": 0,
            "step": 1,
            "global": true
        },
        {
            "id": "repeat",
            "value": null,
            "title": "Limit repetitions",
            "description": "How many times the effect should be processed, let empty for infinite",
            "type": "integer",
            "step": 1,
            "min": 1,
            "global": true
        }
    ],
    "list": [
        {
            "name": "simple-color",
            "title": "Simple Color Effect",
            "description": "An elementary effect that only sets a fixed color to all LEDs",
            "properties": [
                {
                    "id": "color",
                    "title": "Color basis",
                    "type": "color",
                    "description": "The color to set",
                    "value": [
                        0,
                        80,
                        250
                    ]
                }
            ]
        },
        {
            "name": "random-color",
            "title": "Random Color Effect",
            "description": "Set a random color at each step for all LEDs or one different color for each one",
            "properties": [
                {
                    "id": "bright",
                    "title": "Bright colors only",
                    "description": "Only choose random colors that are bright",
                    "type": "boolean",
                    "value": true
                },
                {
                    "id": "byled",
                    "title": "1 color for 1 led",
                    "description": "Set 1 different color for each LED",
                    "type": "boolean",
                    "value": false
                },
                {
                    "id": "stepTime",
                    "title": "Step time",
                    "description": "How much time a color is set (ms)",
                    "type": "integer",
                    "value": 500,
                    "min": 0,
                    "step": 1
                },
                {
                    "id": "smooth",
                    "title": "Smooth",
                    "description": "Fade from one step to another",
                    "type": "boolean",
                    "value": true
                },
                {
                    "id": "easing",
                    "title": "Easing",
                    "type": "easing",
                    "value": "linear"
                }
            ]
        },
        {
            "name": "trails",
            "title": "Running trails",
            "description": "Trailing particles bursts that follow one another",
            "properties": [
                {
                    "id": "baseColor",
                    "title": "Base color",
                    "description": "Color when the trail is elsewhere",
                    "type": "color",
                    "value": [
                        0,
                        60,
                        0
                    ]
                },
                {
                    "id": "trailsColor",
                    "title": "Trail color",
                    "description": "Color of trails",
                    "type": "color",
                    "value": [
                        0,
                        255,
                        0
                    ]
                },
                {
                    "id": "stepTime",
                    "title": "Cycle time",
                    "description": "Time to reach the end of the strip (ms)",
                    "type": "integer",
                    "value": 3000,
                    "min": 1,
                    "step": 1
                },
                {
                    "id": "frequency",
                    "title": "Trails space",
                    "description": "Space between 2 trails heads",
                    "type": "integer",
                    "value": 48,
                    "min": 0,
                    "step": 1
                },
                {
                    "id": "adjustFrequency",
                    "title": "Adjust frequency",
                    "description": "Force first and last LED continuity by finding a suitable frequency",
                    "type": "boolean",
                    "value": false
                },
                {
                    "id": "attenuation",
                    "title": "Attenuation %",
                    "description": "How much to darken next LEDs",
                    "type": "integer",
                    "value": 5,
                    "min": 1,
                    "step": 1
                },
                {
                    "id": "maxTrailLength",
                    "title": "Max trail length",
                    "description": "Where to cut the trail",
                    "type": "integer",
                    "value": 20,
                    "min": 0,
                    "step": 1
                },
                {
                    "id": "direction",
                    "title": "Direction",
                    "type": "direction",
                    "value": "normal"
                },
                {
                    "id": "easing",
                    "title": "Easing",
                    "type": "easing",
                    "value": "linear"
                }
            ]
        },
        {
            "name": "shine",
            "title": "Shining Effect",
            "description": "Shining particles by randomly and independently adjusting luminosity of each LED",
            "properties": [
                {
                    "id": "stepTime",
                    "title": "Step time",
                    "description": "How much time the LED color is set (ms)",
                    "type": "integer",
                    "value": 100,
                    "min": 1,
                    "step": 1
                },
                {
                    "id": "lightVariationPercent",
                    "title": "Light variation (%)",
                    "description": "How much the color light is able to vary from the base color",
                    "type": "integer",
                    "value": 20,
                    "min": 0,
                    "max": 100,
                    "step": 1
                },
                {
                    "id": "baseColor",
                    "title": "Base color",
                    "description": "Base color theme",
                    "type": "color",
                    "value": [
                        30,
                        0,
                        190
                    ]
                }
            ]
        },
        {
            "name": "explode",
            "title": "Explosion Effect",
            "description": "Simulates fusing particles after an explosion blast",
            "properties": [
                {
                    "id": "lifetime",
                    "title": "Particle Life time",
                    "description": "The particle will die after this time (ms)",
                    "type": "integer",
                    "value": 3000,
                    "min": 1,
                    "step": 1
                },
                {
                    "id": "maxTrailLength",
                    "title": "Trail length",
                    "description": "Where to cut the trail",
                    "type": "integer",
                    "value": 8,
                    "min": 0,
                    "step": 1
                },
                {
                    "id": "attenuation",
                    "title": "Attenuation %",
                    "description": "How darker look next LEDs",
                    "type": "integer",
                    "value": 12,
                    "min": 0,
                    "max": 100,
                    "step": 1
                },
                {
                    "id": "baseColor",
                    "title": "Base Color",
                    "description": "Particles color",
                    "type": "color",
                    "value": [
                        100,
                        200,
                        100
                    ]
                },
                {
                    "id": "stepTime",
                    "title": "Cycle time",
                    "description": "Time of the particles fusing (ms)",
                    "type": "integer",
                    "value": 5000,
                    "min": 0,
                    "step": 1
                },
                {
                    "id": "easing",
                    "title": "Easing",
                    "type": "easing",
                    "value": "easeInQuad"
                }
            ]
        },
        {
            "name": "stack",
            "title": "Stack Effect",
            "description": "Simulate a stack that fills along the time",
            "properties": [
                {
                    "id": "sameTourTime",
                    "title": "Same tour time",
                    "description": "If true each particle will take the same time to be stacked",
                    "type": "boolean",
                    "value": true
                },
                {
                    "id": "enabledColor",
                    "title": "Color 'ON'",
                    "description": "Color of a particle",
                    "type": "color",
                    "value": [
                        255,
                        0,
                        0
                    ]
                },
                {
                    "id": "disabledColor",
                    "title": "Color 'OFF'",
                    "description": "Color where there is no particle yet",
                    "type": "color",
                    "value": [
                        0,
                        0,
                        0
                    ]
                },
                {
                    "id": "stepTime",
                    "title": "Cycle time",
                    "description": "Time to fill the whole strip (ms)",
                    "type": "integer",
                    "value": 60000,
                    "min": 0,
                    "step": 1
                },
                {
                    "id": "direction",
                    "title": "Direction",
                    "type": "direction",
                    "value": "normal"
                },
                {
                    "id": "easing",
                    "title": "Easing",
                    "type": "easing",
                    "value": "linear"
                },
                {
                    "id": "_overriders",
                    "type": "overriders",
                    "value": [
                        [
                            "duration",
                            60000
                        ]
                    ]
                }
            ]
        },
        {
            "name": "stepper",
            "title": "Stepper Effect",
            "description": "Define different steps (colors) over the time",
            "properties": [
                {
                    "id": "smooth",
                    "title": "Smooth",
                    "description": "Fade from one step to the following step",
                    "value": true,
                    "type": "boolean"
                },
                {
                    "id": "steps",
                    "title": "Steps",
                    "description": "Defined steps",
                    "value": [
                        [
                            0,
                            255,
                            0,
                            0,
                            "linear"
                        ],
                        [
                            1000,
                            255,
                            255,
                            0,
                            "linear"
                        ]
                    ],
                    "type": "steps"
                },
                {
                    "id": "_overriders",
                    "type": "overriders",
                    "value": [
                        [
                            "duration",
                            2000
                        ]
                    ]
                }
            ]
        },
        {
            "name": "candle",
            "title": "Candlelight Effect",
            "description": "Simulate a candle light effect",
            "properties": [
                {
                    "id": "color",
                    "title": "Color basis",
                    "description": "Light color",
                    "type": "color",
                    "value": [
                        223,
                        156,
                        0
                    ]
                },
                {
                    "id": "maxBrightnessChange",
                    "title": "Brightness variability %",
                    "description": "How much a color can vary from the base color (%)",
                    "value": 20,
                    "type": "integer",
                    "min": 0,
                    "max": 100,
                    "step": 1
                }
            ]
        },
        {
            "name": "rainbow",
            "title": "Rainbow Effect",
            "description": "A fixed or animated rainbow effect",
            "properties": [
                {
                    "id": "animated",
                    "title": "Animated",
                    "description": "Should the rainbow move along the time",
                    "value": true,
                    "type": "boolean"
                },
                {
                    "id": "angleCover",
                    "title": "Angle covered (°)",
                    "description": "360 to have a whole rainbow on the strip",
                    "type": "integer",
                    "value": 360,
                    "min": 0,
                    "max": 360,
                    "step": 1,
                    "relevant": [
                        [
                            [
                                "setAll",
                                false
                            ]
                        ]
                    ]
                },
                {
                    "id": "offsetAngle",
                    "title": "Angle offset (°)",
                    "description": "From which angle to begin the rainbow",
                    "type": "integer",
                    "value": 0,
                    "min": 0,
                    "max": 360,
                    "step": 1
                },
                {
                    "id": "setAll",
                    "title": "Set All LEDs",
                    "description": "All LEDs will have the same color at the same time",
                    "type": "boolean",
                    "value": false
                },
                {
                    "id": "stepTime",
                    "title": "Cycle time",
                    "description": "Time to run over a whole rainbow (ms)",
                    "type": "integer",
                    "value": 5000,
                    "min": 0,
                    "step": 1
                },
                {
                    "id": "easing",
                    "title": "Easing",
                    "value": "linear",
                    "type": "easing"
                }
            ]
        },
        {
            "name": "breath",
            "title": "Breath Effect",
            "description": "Simulates expiration/inspiration cycles.",
            "properties": [
                {
                    "id": "easing",
                    "title": "Easing",
                    "value": "linear",
                    "type": "easing"
                },
                {
                    "id": "basecolor",
                    "title": "Color basis",
                    "description": "Color theme",
                    "type": "color",
                    "value": [
                        230,
                        80,
                        0
                    ]
                },
                {
                    "id": "inspiration_ratio",
                    "title": "Inspiration %",
                    "description": "How much time the inspiration takes (expiration will last the remaining time)",
                    "type": "integer",
                    "min": "0",
                    "max": "100",
                    "value": 57
                },
                {
                    "id": "stepTime",
                    "title": "Cycle time",
                    "description": "Time of an inspiration + expiration cycle (ms)",
                    "type": "integer",
                    "value": 5000,
                    "min": 0,
                    "step": 1
                }
            ]
        },
        {
            "name": "audio",
            "title": "Sound React",
            "description": "Follows the sound in various ways.",
            "properties": [
                {
                    "id": "linear",
                    "title": "Linear morph",
                    "description": "Develops the effect on a line like an equalizer track",
                    "value": false,
                    "type": "boolean"
                },
                {
                    "id": "advanced",
                    "title": "Advanced mode",
                    "description": "Allow creating different color slices for different powers",
                    "value": false,
                    "type": "boolean"
                },
                {
                    "id": "smooth",
                    "title": "Smooth",
                    "description": "Fade from one slice to the other",
                    "value": false,
                    "type": "boolean",
                    "relevant": [
                        [
                            [
                                "linear",
                                true
                            ],
                            [
                                "advanced",
                                true
                            ]
                        ]
                    ]
                },
                {
                    "id": "frequency-band",
                    "description": "To which frequencies reacting",
                    "title": "Based on",
                    "value": "",
                    "type": "frequency-band"
                },
                {
                    "id": "slices",
                    "description": "Power:Color slices",
                    "title": "Slices",
                    "value": [
                        [
                            10,
                            0,
                            10
                        ],
                        [
                            255,
                            0,
                            255
                        ]
                    ],
                    "type": "slices"
                },
                {
                    "id": "direction",
                    "title": "Direction",
                    "type": "direction",
                    "value": "normal",
                    "relevant": [
                        [
                            [
                                "linear",
                                true
                            ]
                        ]
                    ]
                },
                {
                    "id": "_unique",
                    "title": "Unique",
                    "value": true,
                    "type": "unique"
                }
            ]
        },
        {
            "name": "bouncing_ball",
            "title": "Bouncing Ball Effect",
            "description": "Simulates one or more bouncing balls",
            "properties": [
                {
                    "id": "ballCount",
                    "description": "How many balls",
                    "title": "Ball Count",
                    "value": 1,
                    "type": "integer",
                    "min": 0
                },
                {
                    "id": "color",
                    "title": "Color basis",
                    "description": "Balls color",
                    "type": "color",
                    "value": [
                        223,
                        156,
                        0
                    ],
                    "relevant": [
                        [
                            [
                                "randomColors",
                                false
                            ]
                        ]
                    ]
                },
                {
                    "id": "startHeight",
                    "title": "Start height %",
                    "description": "From which percent height to launch the ball",
                    "value": 100,
                    "type": "integer",
                    "min": 1,
                    "max": 100
                },
                {
                    "id": "dampening",
                    "title": "Dampening %",
                    "description": "Power absorption at each bound",
                    "value": 10,
                    "type": "integer",
                    "min": 1,
                    "max": 99
                },
                {
                    "id": "gravity",
                    "title": "Gravity",
                    "value": -9.81,
                    "type": "integer",
                    "max": -1
                },
                {
                    "id": "trails",
                    "title": "Trails",
                    "description": "Should a trail follow ball(s)",
                    "value": true,
                    "type": "boolean"
                },
                {
                    "id": "trailsLength",
                    "title": "Trails Length",
                    "value": 11,
                    "type": "integer",
                    "min": 0,
                    "relevant": [
                        [
                            [
                                "trails",
                                true
                            ]
                        ]
                    ]
                },
                {
                    "id": "randomColors",
                    "title": "Random colors",
                    "description": "Should each ball have a random color",
                    "value": false,
                    "type": "boolean"
                },
                {
                    "id": "direction",
                    "title": "Direction",
                    "type": "direction",
                    "value": "normal"
                }
            ]
        },
        {
            "name": "knight_rider",
            "title": "Knight Rider",
            "description": "Simulates the Knight Rider movie car light effect",
            "properties": [
                {
                    "id": "scannerWidth",
                    "title": "Scanner width",
                    "description": "Size of the moving scanner",
                    "value": 10,
                    "type": "integer",
                    "min": 1
                },
                {
                    "id": "baseColor",
                    "title": "Color basis",
                    "description": "Color theme",
                    "type": "color",
                    "value": [
                        255,
                        0,
                        0
                    ]
                },
                {
                    "id": "stepTime",
                    "title": "Cycle time",
                    "description": "Time of a round trip (ms)",
                    "type": "integer",
                    "value": 1500,
                    "min": 0,
                    "step": 1
                },
                {
                    "id": "breakTime",
                    "title": "Break time",
                    "description": "Time to wait when the scanner hits an extremity (ms)",
                    "value": 0,
                    "type": "integer",
                    "min": 0
                },
                {
                    "id": "easing",
                    "title": "Easing",
                    "type": "easing",
                    "value": "linear"
                }
            ]
        },
        {
            "name": "twinkle",
            "title": "Twinkle",
            "description": "Twinkle",
            "properties": [
                {
                    "id": "randomColors",
                    "title": "Random colors",
                    "description": "Set a random color to each LED",
                    "type": "boolean",
                    "value": false
                },
                {
                    "id": "baseColor",
                    "title": "Base color",
                    "description": "Color theme",
                    "value": [255, 0, 0],
                    "type": "color",
                    "min": 0,
                    "relevant": [
                        [
                            [
                                "randomColors",
                                false
                            ]
                        ]
                    ]
                },
                {
                    "id": "stepTime",
                    "title": "Step time",
                    "description": "Duration of a twinkle cycle (ms)",
                    "value": 3000,
                    "type": "integer",
                    "min": 0
                },
                {
                    "id": "stepsCount",
                    "title": "Steps count",
                    "description": "How many steps to reach the end of twinkle cycle",
                    "value": 10,
                    "type": "integer",
                    "min": 1
                },
                {
                    "id": "minEnabledPercent",
                    "title": "Min ON %",
                    "description": "Minimum percent of LEDs to light on",
                    "value": 15,
                    "type": "integer",
                    "min": 0,
                    "max": 100
                },
                {
                    "id": "maxEnabledPercent",
                    "title": "Max ON %",
                    "description": "Maximum percent of LEDs to light on",
                    "value": 60,
                    "type": "integer",
                    "min": 0,
                    "max": 100
                },
                {
                    "id": "easing",
                    "title": "Easing",
                    "type": "easing",
                    "value": "linear"
                }
            ]
        },
        {
            "name": "sparkle",
            "title": "Sparkle",
            "description": "Sparkle",
            "properties": [
                {
                    "id": "randomColors",
                    "title": "Random colors",
                    "description": "Each sparking LED will have a random color",
                    "type": "boolean",
                    "value": false
                },
                {
                    "id": "baseColor",
                    "title": "Base color",
                    "description": "Color theme",
                    "value": [255, 255, 230],
                    "type": "color",
                    "min": 0,
                    "relevant": [
                        [
                            [
                                "randomColors",
                                false
                            ]
                        ]
                    ]
                },
                {
                    "id": "minEnabledPercent",
                    "title": "Min ON %",
                    "description": "Minimum percent of LEDs to light on",
                    "value": 15,
                    "type": "integer",
                    "min": 0,
                    "max": 100
                },
                {
                    "id": "maxEnabledPercent",
                    "title": "Max ON %",
                    "description": "Maximum percent of LEDs to light on",
                    "value": 60,
                    "type": "integer",
                    "min": 0,
                    "max": 100
                },
                {
                    "id": "stepTime",
                    "title": "Step time",
                    "value": 50,
                    "type": "integer",
                    "min": 0
                }
            ]
        },
        {
            "name": "moving_waves",
            "title": "Moving Waves",
            "description": "Moving Waves",
            "properties": [
                {
                    "id": "baseColor",
                    "title": "Base color",
                    "description": "Color theme",
                    "value": [0, 255, 0],
                    "type": "color",
                    "min": 0
                },
                {
                    "id": "waveSize",
                    "title": "Wave Size",
                    "description": "Count of LEDs compounding a wave",
                    "value": 20,
                    "type": "integer",
                    "min": 0
                },
                {
                    "id": "stepTime",
                    "title": "Step Time",
                    "description": "To adjust the speed of the movement (ms)",
                    "value": 50,
                    "type": "integer",
                    "min": 0
                },
                {
                    "id": "forceSmooth",
                    "title": "Force smooth",
                    "description": "Set a wave size that will make waves to move smoothly regarding the total count",
                    "type": "boolean",
                    "value": false
                },
                {
                    "id": "direction",
                    "title": "Direction",
                    "type": "direction",
                    "value": "normal"
                },
            ]
        },
        {
            "name": "color_wipe",
            "title": "Color Wipe",
            "description": "Color Wipe",
            "properties": [
                {
                    "id": "stepTime",
                    "title": "Step Time",
                    "description": "To adjust the speed of the movement (ms)",
                    "value": 50,
                    "type": "integer",
                    "min": 0
                },
                {
                    "id": "colors",
                    "title": "Colors",
                    "description": "Colors to unroll",
                    "value": [
                        [0, 0, 0],
                        [0, 0, 255],
                        [255, 0, 0],
                        [0, 255, 0],
                        [255, 255, 0]
                    ],
                    "type": "color-set"
                },
                {
                    "id": "direction",
                    "title": "Direction",
                    "type": "direction",
                    "value": "normal"
                }
            ]
        },
        {
            "name": "theater_chase",
            "title": "Theater Chase",
            "description": "Simulates theaters posters and stairs lights",
            "properties": [
                {
                    "id": "baseColor",
                    "title": "Base color",
                    "description": "Color theme",
                    "type": "color",
                    "value": [
                        255,
                        0,
                        0
                    ],
                    "relevant": [
                        [
                            [
                                "rainbow",
                                false
                            ]
                        ]
                    ]
                },
                {
                    "id": "stepTime",
                    "title": "Step Time",
                    "description": "To adjust the speed of the movement (ms)",
                    "value": 100,
                    "type": "integer",
                    "min": 0
                },
                {
                    "id": "space",
                    "title": "Space",
                    "description": "Space between 2 powered ON LEDs",
                    "value": 4,
                    "type": "integer",
                    "min": 0
                },
                {
                    "id": "rainbow",
                    "title": "Rainbow",
                    "description": "Unroll a rainbow on powered ON LEDs",
                    "type": "boolean",
                    "value": false
                }, ,
                {
                    "id": "forceSmooth",
                    "title": "Force smooth",
                    "description": "Try to find a space that makes the LEDs to smoothly run over the extremes",
                    "type": "boolean",
                    "value": false
                },
                {
                    "id": "direction",
                    "title": "Direction",
                    "type": "direction",
                    "value": "normal"
                }
            ]
        },
        {
            "name": "fire",
            "title": "Fire Effect",
            "description": "A flame emitter with various controls",
            "properties": [
                {
                    "id": "cooling",
                    "title": "Cooling",
                    "description": "Attenuates the flame",
                    "type": "integer",
                    "value": 55,
                    "min": 0,
                    "max": 100,
                },
                {
                    "id": "sparking",
                    "title": "Sparking",
                    "description": "Increase to add fuel",
                    "type": "integer",
                    "value": 120,
                    "min": 0,
                    "max": 100,
                },
                {
                    "id": "stepTime",
                    "title": "Step Time",
                    "description": "To adjust the speed of the movement (ms)",
                    "value": 15,
                    "type": "integer",
                    "min": 1
                },
                {
                    "id": "bothSides",
                    "title": "Both sides",
                    "description": "Create a second emitter at the end of the strip",
                    "type": "boolean",
                    "value": false
                },
                {
                    "id": "direction",
                    "title": "Direction",
                    "type": "direction",
                    "value": "normal"
                }
            ]
        }
    ]
};

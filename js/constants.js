const KEY_UP = 38
const KEY_RIGHT = 39
const KEY_DOWN = 40
const KEY_LEFT = 37
const KEY_FIRE = 32 //Barra espaciadora
const SPEED = 1
const MOVEMENT_FRAMES = 10
const GRAVITY = 0.4
//120 FRAMES => 60FRAMES/SEGUNDO => 120/60=2 SEGUNDOS
const BALL_FRAMES=120
const HORROCRUXES = [
    {
        name: "cup",
        image: Object.assign(new Image, {
            src: './img/horrocruxes/cup.png',

        }),
        position: [508, 601]
    },
    {
        name: "diadem",
        image: Object.assign(new Image, {
            src: './img/horrocruxes/diadem.png',

        }),
        position: [120, 500]
    },
    {
        name: "diary",
        image: Object.assign(new Image, {
            src: './img/horrocruxes/diary.png',

        }),
        position: [62, 50]
    },
    {
        name: "locket",
        image: Object.assign(new Image, {
            src: './img/horrocruxes/locket.png',

        }),
        position: [230, 323]
    },
    {
        name: "nagini",
        image: Object.assign(new Image, {
            src: './img/horrocruxes/nagini.png',

        }),
        position: [810, 700]
    },
    {
        name: "ring",
        image: Object.assign(new Image, {
            src: './img/horrocruxes/ring.png',

        }),
        position: [500, 20]
    }
]

export default class Game extends Phaser.Scene {
  constructor() {
    // key of the scene
    // the key will be used to start the scene by other scenes
    super("Game");
  }

  init() {
    let SapesRecolected = [
      { type: "Triangulo", count: 0 },
      { type: "Cuadrado", count: 0 },
      { type: "Rombo", count: 0 },
    ];

    // this is called before the scene is created
    // init variables
    // take data passed from other scenes
    // data object param {}
  }

  preload() {
    // load assets
    this.load.image("sky", "./assets/images/Cielo.png");
  }

  create() {
    // create game objects
    this.add.image(400, 300, "sky").setScale(0.555).refreshBody();
  }

  update() {
    // update game objects
  }
}

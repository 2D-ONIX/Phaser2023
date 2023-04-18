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
    this.load.image("platform", "./assets/images/platform.png");
    this.load.image("Player", "./assets/images/Ninja.png");
    this.load.image("triangulo", "./assets/images/Triangulo.png");
  }

  create() {
    // create game objects
    this.add.image(400, 300, "sky").setScale(0.555);
    // jugador
    this.Player = this.physics.add.sprite(100, 200, "Player");
    // grupo formas
    this.ShapeGroup = this.physics.add.group();
    this.ShapeGroup.create(100, 0, "triangulo");

    // grupo plataformas
    this.plataformasPropias = this.physics.add.staticGroup();
    this.plataformasPropias
      .create(400, 550, "platform")
      .setScale(2)
      .refreshBody();
    // colicion del PJ con suelo
    this.physics.add.collider(this.Player, this.plataformasPropias);
    // colicion entre suelo y formas
    this.physics.add.collider(this.ShapeGroup, this.plataformasPropias);
    // overlap entre formas y Pj
    this.physics.add.overlap(
      this.Player,
      this.ShapeGroup,
      this.collectShape,
      null
    );
  }

  update() {
    // update game objects
  }

  collectShape(Jugador, figuraChocada) {
    console.log("figura recolectada");
    figuraChocada.disableBody(true, true);
  }
}

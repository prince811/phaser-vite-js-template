import Phaser from "phaser";
import logoImg from "./assets/logo.png";
import "./style.css";

const width = 300;
const height = 500;

class MyGame extends Phaser.Scene {
  constructor() {
    super();
  }

  preload() {
    this.load.image("logo", logoImg);
  }

  create() {
    this.scale.displaySize.setAspectRatio(width / height);
    this.scale.refresh();
    const squareWidth = 100;
    const square = this.add.rectangle(
      this.scale.width / 2,
      this.scale.height / 2,
      squareWidth,
      squareWidth,
      0xff0000
    );
    // const logo = this.add.image(
    //   this.scale.displaySize.width,
    //   this.scale.displaySize.height / 2,
    //   "logo"
    // );

    // this.tweens.add({
    //   targets: square,
    //   y: 450,
    //   duration: 2000,
    //   ease: "Power2",
    //   yoyo: true,
    //   loop: -1,
    // });
  }
}

const config = {
  type: Phaser.AUTO,
  parent: "block-builder-container",
  width,
  height,
  scale: {
    mode: Phaser.Scale.FIT,
  },
  scene: MyGame,
};

const game = new Phaser.Game(config);

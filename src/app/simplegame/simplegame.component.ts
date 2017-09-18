import { Component, OnInit } from '@angular/core';
import * as Phaser from "phaser-ce";
@Component({
  selector: 'app-simplegame',
  templateUrl: './simplegame.component.html',
  styleUrls: ['./simplegame.component.css']
})
export class SimplegameComponent{

  //Sprites
  private star:Phaser.Sprite;
  private sky:Phaser.Sprite;
  private ground:Phaser.Sprite;

  //platform group
  private platforms:Phaser.Group;
   //Phaser Game and World
   private game: Phaser.Game;
   private world:Phaser.World;
   private ancho:number=800;
   private alto:number=600;
   


  constructor() {
    this.game = new Phaser.Game(this.ancho,this.alto, Phaser.AUTO, 'content', { preload: this.preload, create: this.create });
    this.world=this.game.world;}




private preload() {
  this.game.load.image('sky', 'assets/sky.png');
  this.game.load.image('ground', 'assets/platform.png');
  this.game.load.image('star', 'assets/star.png');
  this.game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
}


private create() {
  //  We're going to be using physics, so enable the Arcade Physics system
   this.game.physics.startSystem(Phaser.Physics.ARCADE);

   this.sky=this.game.add.sprite(0, 0, 'sky');
   this.star=this.game.add.sprite(0, 0, 'star');
    //  The platforms group contains the ground and the 2 ledges we can jump on
   this.platforms=this.game.add.group();
      //  We will enable physics for any object that is created in this group
   this.platforms.enableBody=true;
   this.ground=this.platforms.create(0, this.world.height - 64, 'ground');
    //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
    this.ground.scale.setTo(2, 2);
    this.ground.body.immovable = true;

    /*  Now let's create two ledges.
     Nota: Crea un sprite local que se asigna a un grupo.A ese Sprite local
    se le setea la propiedad, luego se sobre-escribe, y se vuelve a setear una propiedad pero esta
    vez al sprite sobre escrito por eso si quisieramos un mayor manejo de los sprites que asignamos a
    un grupo lo que podríamos hacer sería crear un arreglo de sprites, agregarlos a un grupo y así mantener
    la referencia de los sprites asignados a ese grupo en ese arreglo y poder manipularlos con mayor libertad.*/
    let ledge:Phaser.Sprite;
    ledge = this.platforms.create(400, 400, 'ground');   
    ledge.body.immovable = true;
    ledge = this.platforms.create(-140, 240, 'ground');
    ledge.body.immovable = true;
}


}

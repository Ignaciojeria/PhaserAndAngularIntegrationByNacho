import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simplegame',
  templateUrl: './simplegame.component.html',
  styleUrls: ['./simplegame.component.css']
})
export class SimplegameComponent{

  //Sprites
  private sky:Phaser.Sprite;
  private ground:Phaser.Sprite;
  private player:Phaser.Sprite;

  //cursor
  private cursors:Phaser.CursorKeys;

  //groups
  private platforms:Phaser.Group;
  private stars:Phaser.Group;
   //Phaser Game and World
   private game: Phaser.Game;
   private world:Phaser.World;
   private ancho:number=800;
   private alto:number=600;
   


  constructor() {
    this.game = new Phaser.Game(this.ancho,this.alto, Phaser.AUTO, 'content', { preload: this.preload, create: this.create, update:this.update });
    this.world=this.game.world;
      
  }




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
      // The player and its settings
    this.player = this.game.add.sprite(32, this.world.height - 150, 'dude');
    
    //  We need to enable physics on the player
    this.game.physics.arcade.enable(this.player);
    
    //  Player physics properties. Give the little guy a slight bounce.
    this.player.body.bounce.y = 0.2;
    this.player.body.gravity.y = 300;
    this.player.body.collideWorldBounds = true;
    
    //  Our two animations, walking left and right.
    this.player.animations.add('left', [0, 1, 2, 3], 10, true);
    this.player.animations.add('right', [5, 6, 7, 8], 10, true);
    this.player.body.gravity.y=300;

    this.stars=this.game.add.group();
    this.stars.enableBody=true;

    for (let i = 0; i < 12; i++)
    {
        //  Create a star inside of the 'stars' group
        var star = this.stars.create(i * 70, 0, 'star');

        //  Let gravity do its thing
        star.body.gravity.y = 400;

        //  This just gives each star a slightly random bounce value
        star.body.bounce.y = 0.7 + Math.random() * 0.2;
    }

    //inicializando el teclado xD
    this.cursors=this.game.input.keyboard.createCursorKeys();
}
  private update(){
    let hitPlatform= this.game.physics.arcade.collide(this.player, this.platforms);
    let hitStars=this.game.physics.arcade.collide(this.stars,this.platforms);

    /*esto detecta la colición entre el jugador y las estrellas.El tercer parametro es una función.
      Esta función recibe dos parametros que son los Sprites que colisionaron.*/
    this.game.physics.arcade.overlap(this.player,this.stars,(plater,star)=>{ star.kill();});
    
    //  Reset the players velocity (movement)
    this.player.body.velocity.x = 0;
    
        if (this.cursors.left.isDown)
        {
            //  Move to the left
            this.player.body.velocity.x = -150;
    
            this.player.animations.play('left');
        }
        else if (this.cursors.right.isDown)
        {
            //  Move to the right
            this.player.body.velocity.x = 150;
    
            this.player.animations.play('right');
        }
        else
        {
            //  Stand still
            this.player.animations.stop();
    
            this.player.frame = 4;
        }
    
        //  Allow the player to jump if they are touching the ground.
        if (this.cursors.up.isDown && this.player.body.touching.down && hitPlatform)
        {
          this.player.body.velocity.y = -350;
        }
  }

}

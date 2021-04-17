class Game{
    constructor(){
    }

    getState(){
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value",function(data){
            gameState = data.val();
        })
    }

    updateState(count){
        database.ref("/").update({
            gameState : count
        });
    }

    start(){
        if(gameState === 0){
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
        car1 = createSprite(100,200,50,50);
        car2 = createSprite(300,200,50,50);
        car3 = createSprite(500,200,50,50);
        car4 = createSprite(700,200,50,50);
        cars=  [car1,car2,car3,car4];
    }

    play(){
      form.hide();

      Player.getPlayerInfo();

      textSize(30);
      text("Game Starts", 50, 50);

      if(allPlayers !== undefined){
          var index = 0;
          var x = 0;
          var y = 0;

          
         for(var plr in allPlayers){
          x = x+200;            
          y = displayHeight - allPlayers[plr].distance;
          
          console.log(plr +":"+ y);

          cars[index].x = x;
          cars[index].y = y;         
          
          if(index+1 == player.index){
              cars[index].shapeColor = "red";
          }
          index++;

        }
        
      }

      if(keyDown(UP_ARROW) && player.index !== null){
        player.distance+=50;
        player.update();
      }
      drawSprites();
    }

}
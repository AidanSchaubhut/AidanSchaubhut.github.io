var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game, app) {
        // some useful constants
        var groundY = game.groundY;
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            name: "Robot Romp",
            number: 1,
            speed: -3,
            gameItems: [
                {type: 'sawblade',x:400,y:groundY},
                {type: 'sawblade',x:600,y:groundY},
                {type: 'sawblade',x:900,y:groundY},
                {type: 'rock',x:canvasWidth,y:groundY}
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // BEGIN EDITING YOUR CODE HERE
        // function createObstacle(nameOfObstacle, x, y){
        //     var hitZoneSize = 25;
        //     var damageFromObstacle = 10
        //     var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
        //     myObstacle.x = x;
        //     myObstacle.y = y;
        //     game.addGameItem(myObstacle);
        //     var obstacleImage = draw.bitmap(nameOfObstacle);
        //     myObstacle.addChild(obstacleImage);
        //     obstacleImage.x = -25;
        //     obstacleImage.y = -25;
        // }
        // createObstacle(img/sawBlade.png, 600, 100);
         function createSawBlade(x,y){
            var hitZoneSize = 25;
            var damageFromObstacle = 10;
            var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
            myObstacle.x = x;
            myObstacle.y = y;
            game.addGameItem(myObstacle);
            var obstacleImage = draw.bitmap('img/sawblade.png');
            myObstacle.addChild(obstacleImage);
            obstacleImage.x = -25;
            obstacleImage.y = -25;
        }

        for(i = 0; i < levelData.gameItems.length; i++){
            var x = levelData.gameItems[i].x;
            var y = levelData.gameItems[i].y;
            createSawBlade(x, y);
        }

        function createRock(){
            var hitZoneSize = 25;
            var damageFromObstacle = 10;
            var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
            myObstacle.x = x;
            myObstacle.y = y;
            game.addGameItem(myObstacle);
            var obstacleImage = draw.bitmap('img/rock.png');
            myObstacle.addChild(obstacleImage);
            obstacleImage.x = -25;
            obstacleImage.y = -25;
        }

           // createRock(300, groundY);

            var enemy =  game.createGameItem('enemy',25);
            var enemy = draw.bitmap('img/Alien.png');
            enemy.addChild(redSquare);
            enemy.x = 400;
            enemy.y = groundY-50;
            game.addGameItem(enemy);
            enemy.velocityX = -1;
            enemy.onPlayerCollision = function() {
                game.changeIntegrity(-10);
            };
            



    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
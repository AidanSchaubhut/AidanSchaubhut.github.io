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
            speed: -1,
            gameItems: [
                {type: 'sawblade',x:400,y:groundY},
                {type: 'sawblade',x:600,y:groundY},
                {type: 'sawblade',x:900,y:groundY},
                {type: 'rock',x:canvasWidth,y:groundY},
                {type: 'enemy',x:400, y: groundY - 10},
                {type: 'enemy',x:800, y: groundY - 100},
                {type: 'enemy',x:1200, y: groundY - 50},
                {type: 'reward',x:400, y: groundY - 10},
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

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
            var type = levelData.gameItems[i].type;

            if (type === 'sawblade'){
                createSawBlade(x, y);
            }else if (type === 'rock'){
                createRock(x, y);
            }else if (type === 'enemy'){
                createEnemy(x, y);
            }
        }

        function createRock(x, y){

            var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
            var obstacleImage = draw.bitmap('img/rock.png');
            game.addGameItem(myObstacle);
            myObstacle.addChild(obstacleImage);
            myObstacle.x = x;
            myObstacle.y = y;
            obstacleImage.x = -25;
            obstacleImage.y = -25;
            var hitZoneSize = 25;
            var damageFromObstacle = 10;

        }

        //Enemy
        function createEnemy(x, y){
            var enemy =  game.createGameItem('enemy',25);
            var enemyImage = draw.bitmap('img/Alien.png');
            enemy.addChild(enemyImage);
            game.addGameItem(enemy);

            enemy.x = x;
            enemy.y = y;
            enemyImage.x = -25;
            enemyImage.y = -25;

            enemy.velocityX = -2;
            enemy.onPlayerCollision = function() {
                game.changeIntegrity(-10);
                enemy.fadeOut();
            };
            enemy.onProjectileCollision = function(){
                shrink();
            }
        }

        //Reward
        function createReward(x, y){
            var reward = game.createGameItem('reward', 25);
            var rewardImg = draw.bitmap('img/reward.png');
            enemy.addChild(rewardImg);
            game.addGameItem(reward);

            reward.x = x;
            reward.y = y;
            rewardImg.x = -25;
            rewardImg.y = -25;

            reward.velocityX = -1;
            reward.onPlayerCollision = function(){
                reward.fadeOut();
                increaseScore(100);
            }
        }
        createReward(1500, groundY - 10);
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
class Quiz{
    constructor(){

    }

    display(){

    }

    getState(){
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
       gameState = data.val();
    })
    }


    update(state){
        database.ref('/').update({
          gameState: state
        });
      }

    async start(){
        if(gameState === 0){
          contestant = new Contestant();
          var contestantCountRef = await database.ref('contestantCount').once("value");
          if(contestantCountRef.exists()){
            contestantCount = contestantantCountRef.val();
            contestant.getCount();
          }
          form = new Form();
          form.display();

          question=new Question();
          question.display();
        }
    }

    end(){
        console.log("Game Ended");
      }
}
    

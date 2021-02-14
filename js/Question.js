class Question{
    constructor(){
        this.input=createInput("Enter your answer");
        this.question=createElement('h3');
    }
    display(){
        this.question.position(displayWidth+30,displayHeight+50);
        this.input.position(this.question.position.x,this.question.position.y+30);
    }

}
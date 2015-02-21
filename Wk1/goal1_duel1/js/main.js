//Jacob Willford 02/20/15

//self executing function
(function(){

    //set the round number for the fight
    var round = 1;

    // create and object for all the fighters
    var fighters=[{name:"Goku",damage:20,health:100}, {name:"Vegeta",damage:20,health:100}];

    //grab the tag
    var fighter1text = document.querySelector("#kabal").querySelector("p");

    //grab the tag
    var fighter2text = document.querySelector("#kratos").querySelector("p");

    //grab the area for the round text
    var roundText = document.getElementById("round");

    //grab the fight button
    var button = document.getElementById("fight_btn");

    //sets the round text
    roundText.innerHTML=fighters[0].name+" VS "+fighters[1].name;

    //when the button is clicked it runs the fight function
    button.addEventListener("click", fight, false);

    //creates the fight function
    function fight(){

        //use innerHTML to set the round text
        roundText.innerHTML="Round "+round+" Over!";

        //create minimum damage variables
        var minDamage1 = fighters[0].damage * .5;
        var minDamage2 = fighters[1].damage * .5;

        //choose random damage
        var f1 = Math.floor(Math.random()*(fighters[0].damage-minDamage1) + minDamage1);
        var f2 = Math.floor(Math.random()*(fighters[1].damage-minDamage2) + minDamage2);

        //inflict damage
        fighters[0].health -= f1;
        fighters[1].health -= f2;

        //run winner check function
        var results = winnerCheck();

        //check if the result is no winner
        if(results==="no winner"){

            //add to round number
            round++;

            //show fighter1's name and health
            fighter1text.innerHTML=fighters[0].name+": "+fighters[0].health;

            //show fighter 2's name and health
            fighter2text.innerHTML=fighters[1].name+": "+fighters[1].health;

        }else{

            //make the button unable to be clicked
            button.removeEventListener("click",fight,false);

            //change button text to "DONE!!"
            document.querySelector(".buttonblue").innerHTML="DONE!!";
        }
    }
    //creates the winner check function
    function winnerCheck(){

        //create a result var and set it to "no winner"
        var result = "no winner";

        //if both players die
        if(fighters[0].health<1&&fighters[1].health<1){
            result = "You both die!";
            fighter1text.innerHTML="You both die";
            fighter2text.innerHTML="";

            //if player one dies
        }else if(fighters[0].health<1){
            result = fighters[0].name+" Dies.. "+fighters[1].name+" Wins!";
            fighter1text.innerHTML="";
            fighter2text.innerHTML=fighters[1].name+" you have WON the fight!";

            //if player two dies
        }else if(fighters[1].health<1){
            result = fighters[1].name+" Dies.. "+fighters[0].name+" Wins!";
            fighter1text.innerHTML=fighters[0].name+" you have WON the fight!";
            fighter2text.innerHTML="";
        }
        //send back result
        return result
    }
})();
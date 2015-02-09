/**
 * Jacob Willford - goal1_duel1
 * Date: 02/07
*/

// self-executing function
(function(){

    console.log("FIGHT!");

    //player name
    var playerOneName = "Superman!";
    var playerTwoName = "Goku!";

    //player damage
    var player1Damage = 20;
    var player2Damage = 20;

    //player health
    var playerOneHealth = 100;
    var playerTwoHealth = 100;

    //start round
    var round=0;

    function fight(){
        alert(playerOneName+":"+playerOneHealth+"  *START*  "+playerTwoName+":"+playerTwoHealth);
        for (var i = 0; i < 10; i++)
        {
            //formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = player1Damage * .5;
            var minDamage2 = player2Damage * .5;
            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2);

            //inflict damage
            playerOneHealth-=f1;
            playerTwoHealth-=f2;

            console.log(playerOneName+": "+playerOneHealth + " " + playerTwoName+":"+playerTwoHealth);

            var result = winnerCheck();
            //display result in console
            console.log(result);
            //if result is equal to "no winner" then increment round and alert this
            if (result==="no winner")
            {
                round++;
                alert(playerOneName+":"+playerOneHealth+"  *ROUND "+round+" OVER"+"*  "+playerTwoName+":"+playerTwoHealth);
//else alert result
            } else{
                alert(result);
                break;
            }

          }
    }
//function winnercheck
    function winnerCheck(){
        var result="no winner";
        //if playeronehealth is less than 1 and player two health is less than 1 display "They both have died"
        if (playerOneHealth<1 && playerTwoHealth<1)
        {
            result = "They have both died";
        //else if playeronehealth is less than 1 display "playertwoname + 'WINS!'"
        } else if(playerOneHealth<1){
            result =playerTwoName+" WINS!";
        //else if playertwohealth is less than 1 display "playertwoname + 'WINS!'"
        } else if (playerTwoHealth<1)
        {
            result = playerOneName+" WINS!";
        }
       //return result
        return result;
    }

    //The program begins here
    fight();

})();
/**
 * Jacob Willford - goal1_duel1
 * Date: 02/07
*/

// self-executing function
(function(){

    console.log("FIGHT!");

    //player name
    playerName = ["Superman","Goku"];

    //player damage
    playerDamage = ["20","20"];

    //player health
    playerHealth = ["100","100"];

    //start round
    var round=0;

    function fight(){
        alert(playerName[0]+":"+playerHealth[0]+"  *START*  "+playerName[1]+":"+playerHealth[1]);
        for (var i = 0; i < 10; i++)
        {
            //formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = playerDamage[0] * .5;
            var minDamage2 = playerDamage[1] * .5;
            var f1 = Math.floor(Math.random()*(playerDamage[0]-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(playerDamage[1]-minDamage2)+minDamage2);

            //inflict damage
            playerHealth[0]-=f1;
            playerHealth[1]-=f2;

            console.log(playerName[0]+": "+playerHealth[0] + " " + playerName[1]+":"+playerHealth[1]);

            var result = winnerCheck();
            //display result in console
            console.log(result);
            //if result is equal to "no winner" then increment round and alert this
            if (result==="no winner")
            {
                round++;
                alert(playerName[0]+":"+playerHealth[0]+"  *ROUND "+round+" OVER"+"*  "+playerName[1]+":"+playerHealth[1]);
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
        if (playerHealth[0]<1 && playerHealth[1]<1)
        {
            result = "They have both died";
        //else if playeronehealth is less than 1 display "playertwoname + 'WINS!'"
        } else if(playerHealth[0]<1){
            result =playerName[1]+" WINS!";
        //else if playertwohealth is less than 1 display "playertwoname + 'WINS!'"
        } else if (playerHealth[1]<1)
        {
            result = playerName[0]+" WINS!";
        }
       //return result
        return result;
    }

    //The program begins here
    fight();

})();
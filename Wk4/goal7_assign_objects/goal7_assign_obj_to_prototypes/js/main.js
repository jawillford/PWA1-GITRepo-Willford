/**
 * Created by Jacob Willford
 * Class: PWA
 * Goal: Goal7
 */

(function(){
    //declare all variables
    var numOfPeople =3;
    var people = [];
    var names = ["Jacob","Blake","Jay","Damon","Autumn"];
    var interval;

    //make the loop for selecting person
    for(var i = 0; i<numOfPeople;i++){

        //choose a number
        var personIndex = Math.floor(Math.random()*names.length);

        //Choose new person
        var person = new Person(names[personIndex],i+1);

        populateHTML(person.name,"r"+(i+1)+"c1");
        populateHTML(person.job,"r"+(i+1)+"c2");

        people.push(person);
        names.splice(personIndex,1);
    }
    //clears the old interval so you can declare a new one
    clearInterval(interval);

    //set the interval
    interval=setInterval(runUpdate,1000 / 30);
    //function populateHTML
    function populateHTML(data,field){
        var id=document.getElementById(field);
        id.innerHTML = data;
    }
    //function runUpdate
    function runUpdate(){
        people.forEach(function(element){
            element.update();
        });
    }
})();
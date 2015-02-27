/**
 * Created by : Jacob Willford
 * Class: PWA
 * Goal: Goal7
 */
(function(){

    //makes person variable global so main.js can use it
    window.Person=Person;

    //adds all of the jobs to the person
    Person.jobs = ["Teacher","Actor","Student","Pilot"];
    //adds all of the actions to the person
    Person.actions = ["Eating","Working","Sleeping"];
    //creates function person
    function Person(name,row){
        //defines the name
        this.name = name;

        //sets random actions
        this.action = Person.actions[Math.floor(Math.random()*Person.actions.length)];

        //sets random jobs
        this.job = Person.jobs[Math.floor(Math.random()*Person.jobs.length)];

        //defines the row
        this.row = row;

        //displays the first action
        var id = document.getElementById("r"+this.row+"c3");
        id.innerHTML=this.action;
    }


    //cycles through each action
    Person.prototype.update = function(){
        if(Math.floor(Math.random() <.01)){
            var i = Math.floor(Math.random()*Person.actions.length);
            this.action = Person.actions[i];
            var id = document.getElementById("r"+this.row+"c3");
            //display the random action
            id.innerHTML=this.action;
        }
    }



})();
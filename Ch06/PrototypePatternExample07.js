        function Person(){
        }
        
        Person.prototype = {
            //constructor: Person, // 但修改了原生的constructor的[[enumerable]]
            name : "Nicholas",
            age : 29,
            job: "Software Engineer",
            sayName : function () {
                console.log(this.name);
            }
        };

        var friend = new Person();
        
        console.log(friend instanceof Object);  //true
        console.log(friend instanceof Person);  //true
        console.log(friend.constructor == Person);  //false
        console.log(friend.constructor == Object);  //true
 

        function Person(){
        }
        
        Person.prototype.name = "Nicholas";
        Person.prototype.age = 29;
        Person.prototype.job = "Software Engineer";
        Person.prototype.sayName = function(){
            console.log(this.name);
        };
        
        var keys = Object.keys(Person.prototype);
        console.log(keys);   //"name,age,job,sayName"

var p1 = new Person();
p1.name = 'a'
p1.age = 23
p1.kk = 'yui'
var keys1 = Object.keys(p1)
console.log(keys1)
 

var person = {};
Object.defineProperty(person, "name", {
    writable: false,
    value: "Nicholas"
});

console.log(person.name);
person.name = "Michael";
console.log(person.name);



// Object destructuring is method to callout some specific values of an an object by mentioning their keys
// This is a special way to mention apart from using (.) operator
const obj={
    "name":"parthib",
    "title":"deb"
}
const {name:personName}=obj // renaming the keyname from 'name' to 'personName'
console.log(personName);
const {title}=obj
console.log(title);
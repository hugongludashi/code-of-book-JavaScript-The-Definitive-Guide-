/*object literals have become a preferred way of passing a large number of optional arguments to
* a function
*/

function displayInfo(args){
  var output ="";
  
  if (typeof args.name== "string"){
    output += "Name: " + args.name + "\n";
  }
  
  if (type of args.age =="number"){
    output += "Age: " + args.age + "\n";
  }
  
  alert(output);
}

displayInfo({
  name: "Nicholas",
  age: 29
});

displayInfo({
  name: "Greg"
})

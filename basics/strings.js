// Strings are Such Primary datatypes which comes from class "String"
// We can create a string in 2 ways:
let varString = "PaRtHib" // Directly creating a string type value and assigning a varible to it
varString = new String("PaRtHib") // Sending a String type argument to a string class to create a object in a traditional class-object way

// In browser console If we create string object in class-object way then we will se that 
// the [[prototype]] provides a list of functions applicable for string manipulations


// So here are some string methods, for mor methods follow MDN docs
console.log(varString.length)
console.log(varString.charAt['0'])
console.log(varString.toLowerCase())
varString=new String("     abcdEp1390    ")
console.log(varString.toString()) // actually varstring was an object , we have converted the total object into a string
console.log(varString.trim())
varString=new String("PArThIb-KuMar-DeB")
console.log(varString.split("-"))
console.log(varString.replace("ArThIb","ARTHIB"))

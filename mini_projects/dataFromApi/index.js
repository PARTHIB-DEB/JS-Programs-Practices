let avatar;
let uid;
const reqURL = "https://api.github.com/users/PARTHIB-DEB"; // The URL of Api (from which data will be fetched)

const request = new XMLHttpRequest(); // It's a constructor - used to send the request to the server which will throw the api in response

request.open("GET", reqURL); // Two paramters It takes : Request-method ('GET', 'POST', etc) and the URL of api

console.log(request.readyState); // There are 4 STATES of a request that determines whether it is successfully fetched the data or not
// This console.log just printing the '1' state (OPENED state - Request is created )

request.send(); // sending request (It's not sent so still in '1' state - OPENED)

request.onreadystatechange = function () {
  // It takes a function to track what to do when STATES changes
  console.log(request.readyState); // Tracking the other stated ('2' , '3' , '4')

  if (request.readyState === 4) {
    // STATE '4' - When the in-response of request , the data from the server successfully came to user
    const data = JSON.parse(this.responseText)
    avatar=data.avatar_url
    uid=data.login
    document.querySelector(".gid-val").innerHTML=uid
    document.getElementById("avt").setAttribute('src',avatar)
    //console.log(data); // Printing the Data (API) in console
  }
};
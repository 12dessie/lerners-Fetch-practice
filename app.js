/*
In this activity you will be making a simple fetch api call to the url provided to request some data stored there.
In this first stage of this challenge, your task is to use the provided code to make the fetch request and then console log the data
If your time has time ,update our code using the async/await keywords!
*/

async function makecall() {
    // use the fetch api to display some simple data to the console!
try { 
    const url = "https://reqres.in/api/users";
    const userData = await fetch(url); // call the fetch api with the correct input argument!
    const parsedData = await userData.json();
    const usersArray = parsedData.userData

    
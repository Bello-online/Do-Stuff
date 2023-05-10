exports.getDate = getDate;   // This Exports the getDate function module to be used in the app.js

function getDate(){
    const today = new Date();  // This returns the date
    
    const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
};
     // This gives the date as a string and is formatted based on the options we have gives
    return today.toLocaleDateString("en-us", options); ;
}
exports.getDay = getDay;    // This exports the getDay function module to be used in the app.js

function getDay(){
    const today = new Date();  // This returns the date
    
    const options = {
    weekday: "long"
};
      // This gives the date as a string and is formatted based on the options we have gives
    return today.toLocaleDateString("en-us", options);;
}


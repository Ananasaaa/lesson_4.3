let year = Number(prompt("Enter your year of birth"));
let city = prompt("Enter your city of residence");
let sport = prompt("Enter your favorite sport");

let messageAge;
let messageCity;
let messageSport;

if (year) {
    res = 2024 - year;
    messageAge = `You are ${res} years old.`
} else {
    messageAge = "Its a pity that you didnt enter your year of birth.";
}

//----------------------------------------

if (city === "London") {
        messageCity = "You live in the capital of Great Britan.";
  }  else if (city === "Kyiv"){
        messageCity = "You live in the capital of Ukraine.";
  }  else if (city === "Washington"){
        messageCity = "You live in the capital of USA.";
  }  else if (city === null) {
        messageCity = "Its a pity that you didnt enter your city of residence.";
  }  else {
        messageCity = `You live in ${city}.`;
  }

//-----------------------------------------

if (sport === "Football") {
     messageSport = "Cool! Do you want to become Ronaldo?";
} else if (sport === "Basketball") {
    messageSport = "Cool! Do you want to become Michael Jordan?";
} else if (sport === "Hockey") {
    messageSport = "Cool! Do you want to become Wayne Gretzky?";
} else if (sport === null) {
    messageSport = "Its a pity that you didnt enter your favorite sport.";
} else {
    messageSport = `You like ${sport}.`;
}

//-----------------------------------------

alert(messageAge + " " + messageCity + " " + messageSport);









let firstName = ["Aadi", "Aayush", "Abhimanyu", "Bahadurjit", "Balvan", "Chandresh", "Devansh",
                "Ishaan", "Gautam", "Gaurav", "Harsh", "Hardik", "Hitesh", "Indrajit", "Jagat"];

let lastName = ["Acharya", "Aggarwal", "Ahluwalia", "Anand", "Chatterjee", "Chakraborty", "Bhavsar",
                "Chaudhary", "Chopra", "Dutt", "Gupta", "Goswami", "Ganesh", "Kapoor", "Kumar"];


function getName () {
    let randomName = firstName[Math.floor(Math.random() * firstName.length)] + " " + lastName[Math.floor(Math.random() * lastName.length)];
    return randomName;
}


function nameQty () {
    let userQty = document.querySelector(".qty").value;
    document.querySelector(".nameList").innerHTML = getName() + "<br/>";
    if(userQty > 10) {
        document.querySelector(".nameList").innerHTML = "ONLY 10 NAMES CAN BE GENERATE";
    } else {
        for(let i = 1; i < userQty; i++) {
            document.querySelector(".nameList").innerHTML += getName() + "<br/>";
        }
    }
}; 
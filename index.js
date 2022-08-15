/*
// NAME: Random website generator
// CONTRIBUTORS: Steph Koopmanschap
// VERSION: 1.0
*/

default_img_source = "./default-img.png";
default_href = "example.com";

siteContainer = document.getElementById('siteContainer');

const elements = [
    "div",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "p",
    "button",
    "inputText",
    "inputCheckbox",
    "img",
    "ul",
    "ol",
    "br",
    "hr",
    "a",
    "strong",
    "label"
];

elementLength = elements.length;

//returns a random integer between min and max
function randIntRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Returns a random string specified by strLength containing the letters a-z, A-Z, 0-9 
//By default it will return 1 string. 
//If you set numOfStrings to a number higher than 1 then the functin will return an array of strings
//The amount of strings in the array is specified by numOfStrings
function getRandomString(strLength, numOfStrings=1) {
    let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let randStr = "";
    let strArray = [];

    for (let i = 0; i < numOfStrings; i++) {
        for (let i = 0; i < strLength; i++) {
            randStr += chars[Math.floor(Math.random() * chars.length)];
        }
        strArray.push(randStr);
    }
    if (numOfStrings === 1) {
        return strArray[0];
    }
    return strArray;
}

//Returns a random Hex color
function getRandomColorHex() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function createNewElement() {
    randomElement = elements[randIntRange(0, elementLength-1)];
    randomText = getRandomString(randIntRange(5, 35));
    let newElement;

    if (randomElement === "div") 
    {
        newElement = document.createElement('div');
    }
    //Header elements
    else if (randomElement === "h" + randomElement[1]) 
    {
        newElement = document.createElement("h" + randomElement[1]);
    }
    else if (randomElement === "inputText")
    {
        newElement = document.createElement('input');
        newElement.setAttribute("type", "text");
    }
    else if (randomElement === "inputCheckbox")
    {
        newElement = document.createElement('input');
        newElement.setAttribute("type", "checkbox");
    }
    else if (randomElement === "img")
    {
        newElement = document.createElement('img');
        newElement.setAttribute("src", default_img_source);
    }
    //Lists
    else if (randomElement === "ul" || randomElement === "ol")
    {
        newElement = document.createElement(randomElement);
        //Add items to the list
        for (let index = 0; index < randIntRange(2, 8); index++) 
        {
            let item = document.createElement('li');
            item.innerHTML = getRandomString(randIntRange(2, 10));
            newElement.appendChild(item);
        }
    }
    else if (randomElement === "a") 
    {
        newElement = document.createElement('a');
        newElement.setAttribute("href", default_href);
    }
    else {
        newElement = document.createElement(randomElement);
    }

    newElement.innerHTML = randomText;
    newElement.style.color = getRandomColorHex();
    newElement.style.backgroundColor = getRandomColorHex();
    siteContainer.appendChild(newElement); 
}

function addNewElements() {
    for (let i = 0; i < randIntRange(5, 100); i++) 
    {
        createNewElement();
    }
}

addNewElements();

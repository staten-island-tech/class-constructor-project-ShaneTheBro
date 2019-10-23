// //list of avengers
// const avengers = [];

// //get user input

// //create individual avengers ** Objects function constructor
// /* function Avenger(alias, identity, powers, firstAppearance){
//     this.alias = alias;
//     this.identity = identity;
//     this.powers = powers;
//     this.firstAppearance = firstAppearance;
//     this.yearsActive = function(){
//         return new Date().getUTCFullYear() - this.firstAppearance;
//     }
// } */

// //const ironMan = new Avenger('Iron-Man', 'Tony Stark', 'Smart, Facial Hair, Dead', 1963);
// //console.log(ironMan);

// //push into array
// /* function addAvenger(alias, identity, powers, firstAppearance){
//     avengers.push(new Avenger(alias, identity, powers, firstAppearance));
// } */
// //addAvenger('Captain America', 'Steve Rogers', 'Freedom', 1941);
// //display obejcts on screen

// const form = document.querySelector('#hero-form'); //could also getElementById
// const userAlias = document.querySelector('#alias');
// const userPowers = document.querySelector('#powers');
// const userFullName = document.querySelector('#full-name');
// const userFirstAppearance = document.querySelector('#first-appearance');
// const userImage = document.querySelector('#image');
// const display = document.querySelector('.display');

// function eventListeners(){
//     form.addEventListener('submit', displayAvengerMember);
//     display.addEventListener('click', removeAvenger);
//     /* form.addEventListener('submit', function(){
//        console.log('test');
//    });  */
// }
// eventListeners();

// function displayAvengerMember(e) {
//     let html = '<div class='display-avenger'><div class='display-alias'>%alias%</div><div class='display-powers'>%powers%</div><div class='display-name'>%name%</div><div class='first-appearance'>%years%</div><div class='display-image'><img src='%url%' alt=''></div><div class='remove-avenger'><p class='remove-avenger'>Remove Avenger &#10006; </p></div></div>';

//     let newHtml = html.replace('%alias%', userAlias.value);
//     newHtml = newHtml.replace('%powers%', userPowers.value);
//     newHtml = newHtml.replace('%name%', userFullName.value);
//     newHtml = newHtml.replace('%years%', userFirstAppearance.value);
//     newHtml = newHtml.replace('%url%', userImage.value);
//     display.insertAdjacentHTML('beforeend', newHtml);
//     //console.log('is the vebnt firing?');
//     e.preventDefault();

// }

// function removeAvenger(e) {
//     if(e.target.parentElement.classList.contains('remove-avenger')){
//         //e.target.parentElement.parentElement.remove();
//         console.log(e.target.parentElement);
//     }
// }

// one class to create the object person, albu, movie ***Model
// take arguments

// ***view */ class for the UI which contains methods

// creates/insert the html for the UI DISPLAY

// clear fields method

// remove something/object

// controller combines ui and mode
// event handler with function
// get values

class Character {
  constructor(name, house, weapon, firstAppearance) {
    this.name = name;
    this.house = house;
    this.weapon = weapon;
    this.firstAppearance = firstAppearance;
  }
}

class UI {
  addCharacter(character) {
    let html =
      '<div class="display-character flew-row"><div class="display-name">%name%</div><div class="display-house">%house%</div><div class="display-weapon">%weapon%</div><div class="first-appearance">%first-appearance%</div><div class="remove-character">Remove Character &#10006;</div></div>';

    let newHtml = html.replace("%name%", character.name);
    newHtml = newHtml.replace("%house%", character.house);
    newHtml = newHtml.replace("%weapon%", character.weapon);
    newHtml = newHtml.replace("%first-appearance%", character.firstAppearance);
    document.querySelector(".display").insertAdjacentHTML("beforeend", newHtml);
  }

  clearFields() {
    document.getElementById("name").value = "";
    document.getElementById("house").value = "";
    document.getElementById("weapon").value = "";
    document.getElementById("first-appearance").value = "";
  }

  removeCharacter(target) {
    if (target.className === "remove-character") {
      target.parentElement.remove();
      // console.log(e.target.parentElement);
    }
  }
}

document.getElementById("character-form").addEventListener("submit", function(e) {
    const name = document.getElementById("name").value;
    const house = document.getElementById("house").value;
    const weapon = document.getElementById("weapon").value;
    const firstAppearance = document.getElementById("first-appearance").value;

    const character = new Character(name, house, weapon, firstAppearance);

    const ui = new UI();
    ui.addCharacter(character);
    ui.clearFields();
    e.preventDefault();
  });

document.querySelector(".display").addEventListener("click", function(e) {
  const ui = new UI();
  ui.removeCharacter(e.target);
  ui.clearFields();
  e.preventDefault();
});

//instantiate new Class/object album with variable name

//instantiate new ui const ui = new UI()

//call relevent methods

//separate event handler for removing

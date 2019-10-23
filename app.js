
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

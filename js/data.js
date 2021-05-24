const recipe = [
  {
    item: "noodles",
    ingredients: ["tomato", "capsicum", "onion", "sauce"],
    steps:
      "*Noodles recipe* Make the veggie patties as same as the size of the burger buns. Keep aside. If the mixture looks soft or crumbles, then do add some more breadcrumbs and mix everything again very well. Cover the veggie patties and set aside.",
  },
  {
    item: "burger",
    ingredients: ["potato", "tomato", "cabbage"],
    steps: "*Burger recipe* Make the veggie patties as same as the size of the burger buns. Keep aside. If the mixture looks soft or crumbles, then do add some more breadcrumbs and mix everything again very well. Cover the veggie patties and set aside."
  },
  {
    item: "Capsicum curry",
    ingredients: ["tomato", "onion", "capsicum"],
    steps: "*Capsicum curry* Make the veggie patties as same as the size of the burger buns. Keep aside. If the mixture looks soft or crumbles, then do add some more breadcrumbs and mix everything again very well. Cover the veggie patties and set aside."
  },
  {
    item: "patties",
    ingredients: ["tomato", "onion", "capsicum"],
    steps: "*Patties* Mix maida, salt and 1 cup butter into a crumbly consistency.Roll dough into a long strip again, fold one third from one end towards center and then the other. Chill. And repeat twice more before using as required."
  }
];

// handle click
document.getElementById("inputBox").addEventListener("click", (e) => {
  document.getElementById("select").style.visibility = "visible";
  e.stopPropagation()
});

document.getElementById("select").addEventListener("click", (e) => {
  e.stopPropagation()
});

document.querySelector("body").addEventListener("click", (e) => {
  document.getElementById("select").style.visibility = "hidden";
});

// delete an ingredient
const removeIngredient = () => {
  let close = document.getElementsByClassName("close");
  for (let i = 0; i < close.length; i++) {
    close[i].addEventListener("click", (e) => {
      let a = arr[i];
      document.getElementById(a).checked = false;
      handleSubmit();
      document.getElementById("all").checked = false;
      e.stopPropagation()
    })
  }
}

// This array will store selected ingredients
let arr = [];

const checkCondition = (a, b = arr) => {
  if (a.length > b.length) {
    return false;
  }
  for (let i = 0; i < a.length; i++) {
    if (!b.includes(a[i])) {
      return false;
    }
  }
  return true;
};

const handleSubmit = (e) => {
  setInputBoxValue();
  document.getElementById("image").style.display = "none";

  removeAllChild(document.getElementById("recipes"));
  let count = 0;
  for (let i = 0; i < recipe.length; i++) {
    let flag = checkCondition(recipe[i].ingredients);
    if (flag == true) {
      count++;

      // CARD
      let card = document.createElement("div");
      card.classList.add("card");

      // CARD BODY
      let cardBody = document.createElement("div");
      cardBody.classList.add("card-body");

      // CARD TITLE
      let cardTitle = document.createElement("h5");
      let node = document.createTextNode(recipe[i].item);
      cardTitle.classList.add("card-title");
      cardTitle.appendChild(node);

      //CARD img Body
      let cardImg = document.createElement("img");
      cardImg.setAttribute("src", "./svg/undraw_Hamburger_8ge6.svg");
      cardImg.classList.add("card-img-top");

      // CARD TEXT
      let para = document.createElement("p");
      node = document.createTextNode(recipe[i].steps);
      para.classList.add("card-text");
      para.appendChild(node);

      cardBody.appendChild(cardTitle);
      cardBody.appendChild(para);
      card.appendChild(cardImg);
      card.appendChild(cardBody);

      document.getElementById("recipes").appendChild(card);
    }
  }
  if (count === 0) {
    document.getElementById("image").style.display = "block";
  }
  removeIngredient();
};

// Print values in input box
const setInputBoxValue = () => {
  removeAllChild(document.getElementById("inputBox"));
  arr = [];
  let searchedItems = document.getElementsByClassName("checkbox");
  for (let i = 0; i < searchedItems.length; i++) {
    if (searchedItems[i].checked) {
      arr.push(searchedItems[i].id)
    }
  }
  for (let i = 0; i < arr.length; i++) {
    let node = document.createTextNode(arr[i]);
    let para = document.createElement("span");
    para.classList.add("ingredient")
    para.appendChild(node);

    let close = document.createElement("span");
    close.classList.add("close");
    node = document.createTextNode("x");
    close.appendChild(node);
    para.appendChild(close);

    document.getElementById("inputBox").appendChild(para)
  }
  return;
}


// Empty input box
const removeAllChild = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
  return;
}





// select all ingredients
const selectAll = () => {
  let searchedItems = document.getElementsByClassName("checkbox");
  if (document.getElementById("all").checked) {
    for (let i = 0; i < searchedItems.length; i++) {
      searchedItems[i].checked = true;
    }
  }
  else {
    for (let i = 0; i < searchedItems.length; i++) {
      searchedItems[i].checked = false;
    }
  }
}


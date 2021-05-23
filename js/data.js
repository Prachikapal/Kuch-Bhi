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

const checkCondition = (a, b = arr) => {
  if (a.length > b.length) {
    return false;
  }
  let x = b.map(e => e.text)
  for (let i = 0; i < a.length; i++) {
    if (!x.includes(a[i])) {
      return false;
    }
  }
  return true;
};

const handleSubmit = (e) => {
  document.getElementById("image").style.display = "none";
  removeAllChild(document.getElementById("recipes"));
  for (let i = 0; i < recipe.length; i++) {
    let flag = checkCondition(recipe[i].ingredients);
    if (flag == true) {
      console.log(recipe[i].item);

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
      let cardImg= document.createElement("img");
      cardImg.setAttribute("src","./svg/undraw_Hamburger_8ge6.svg");
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
};

const removeAllChild = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

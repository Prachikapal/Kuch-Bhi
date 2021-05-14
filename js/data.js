const recipe = [
  {
    item: "noodles",
    ingredients: ["tomato", "capsicum", "onion", "sauce"],
    steps:
      "Make the veggie patties as same as the size of the burger buns. Keep aside. If the mixture looks soft or crumbles, then do add some more breadcrumbs and mix everything again very well. Cover the veggie patties and set aside.",
  },
  {
    item: "burger",
    ingredients: ["potato", "tomato", "cabbage"],
    steps: "Make the veggie patties as same as the size of the burger buns. Keep aside. If the mixture looks soft or crumbles, then do add some more breadcrumbs and mix everything again very well. Cover the veggie patties and set aside."
  },
  {
    item: "Capsicum curry",
    ingredients: ["tomato", "onion", "capsicum"],
    steps: "Make the veggie patties as same as the size of the burger buns. Keep aside. If the mixture looks soft or crumbles, then do add some more breadcrumbs and mix everything again very well. Cover the veggie patties and set aside."
  },
  {
    item: "patties",
    ingredients: ["refined flour", "onion", "potato"],
    steps: "Mix maida, salt and 1 cup butter into a crumbly consistency.Roll dough into a long strip again, fold one third from one end towards center and then the other. Chill. And repeat twice more before using as required."
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
  removeAllChild(document.getElementById("recipes"));
  for (let i = 0; i < recipe.length; i++) {
    let flag = checkCondition(recipe[i].ingredients);
    if (flag == true) {
      console.log(recipe[i].item);
      let card = document.createElement("div");
      card.classList.add("card");
      // let para = document.createElement("p");
      let node = document.createTextNode(recipe[i].steps);
      // para.classList.add("para");
      card.appendChild(node);
      document.getElementById("recipes").appendChild(card);
    }
  }
};

const removeAllChild = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function nameMenuItem(name) {
  return `Delicious ${name}`
}

function createMenuItem() {
  var menuItem = {
    name: "Delicious French Toast",
    price: 10.99,
    type: "breakfast",
  }
  return menuItem
}

function addIngredients(name, ingredients) {
  // for (var i = 0; i < ingredients.length; i++) {
    // if (`{name} !== ingredients[i]`) {
      return ingredients.push(name);
    // }
  //  }
}


function formatPrice(initialPrice) {
  return `$${initialPrice}`;
}

function decreasePrice(price) {
  var reducedPrice = price * 0.9
  return `$${reducedPrice})`
  // HOW TF DO I GET IT TO 2 DECIMALS
}

function createRecipe(title, ingredients, type) {
  var recipe = {
    title: `${title}`,
    ingredients: `${ingredients}`,
    type: `${type}`,
  }
  return recipe;
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}



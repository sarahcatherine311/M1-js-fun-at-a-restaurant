function nameMenuItem(name) {
  return `Delicious ${name}`
}

function createMenuItem() {
  menuItem = {
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

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  // formatPrice,
  // decreasePrice,
  // createRecipe
}



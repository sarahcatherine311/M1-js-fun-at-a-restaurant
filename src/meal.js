function nameMenuItem(name) {
  return `Delicious ${name}`
}


function createMenuItem(menuItemName, menuItemPrice, menuItemType) {
  var menuItem = {
    name: menuItemName,
    price: menuItemPrice,
    type: menuItemType,
  }
  return menuItem
}




// function addIngredients(name, array) {
//   return array.push(name);  
// }

function addIngredients(name, array) {
  if (array.includes(name) == false){
    return array.push(name);
  } else {
    return array;
  } 
}

// var ingredients = ["cheese", "peppers", "onion"]


// function addIngredients(name, ingredients) {  
//   for (var i = 0; i < ingredients.length; i++) {
//     if (ingredients[i] !== name) {
//       return ingredients.push(name);
//     } else {
//     return ingredients;
//    } 
//   }
// }




function formatPrice(initialPrice) {
  return `$${initialPrice}`;
}




function decreasePrice(price) {
  var reducedPrice = price * 0.9
  return `${reducedPrice}`
  // HOW TF DO I GET IT TO 2 DECIMALS
}

function createRecipe(recipeTitle, recipeIngredients, recipeType) {
  var recipe = {
    title: recipeTitle,
    ingredients: recipeIngredients,
    type: recipeType,
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



function createRestaurant(name) {
  var pizzaRestaurant = {
    name: name,
    menus: {breakfast: [], lunch: [], dinner: []},
  }
  return pizzaRestaurant;
}

function addMenuItem (pizzaRestaurant, menuItem) {
 var menuType = menuItem.type
  if ((menuType === "lunch") && (pizzaRestaurant.menus.lunch.includes(menuItem) == false)) {
     return pizzaRestaurant.menus.lunch.push(menuItem);
  } else if ((menuType === "breakfast") && (pizzaRestaurant.menus.breakfast.includes(menuItem) == false)) {
    return pizzaRestaurant.menus.breakfast.push(menuItem);
  } else if ((menuType === "dinner") && (pizzaRestaurant.menus.dinner.includes(menuItem) == false)) {
    return pizzaRestaurant.menus.dinner.push(menuItem);
  }
} 

function removeMenuItem (pizzaRestaurant, itemName, menuType) {
  if (pizzaRestaurant.menus[menuType].length === 0) {
    return `Sorry, we don't sell ${itemName}, try adding a new recipe!`
  }
  
  for (var i = 0; i < pizzaRestaurant.menus[menuType].length; i++) {
    if (pizzaRestaurant.menus[menuType][i].name == itemName) {
      pizzaRestaurant.menus[menuType].splice([i], 1);
    }
  return `No one is eating our ${itemName} - it has been removed from the ${menuType} menu!`;
}
}

// function refundOrder(order, deliveryOrders) {
//   for (var i = 0; i < deliveryOrders.length; i++) {
//     if (deliveryOrders[i].orderNumber === order) {
//       deliveryOrders.splice([i], 1)
//       return deliveryOrders
//     }
//   } return deliveryOrders
// }

module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem
}
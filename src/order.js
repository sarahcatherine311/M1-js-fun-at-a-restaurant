// function takeOrder(orderNumber, deliveryOrders) {
//   deliveryOrders.push(orderNumber);
//   return deliveryOrders;
// }

function takeOrder(orderNumber, deliveryOrders) {
  if (deliveryOrders.length <= 2) {
    deliveryOrders.push(orderNumber);
  } else {
    return deliveryOrders;
  }
}



function refundOrder(order, deliveryOrders) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].orderNumber === order) {
      deliveryOrders.splice([i], 1)
      return deliveryOrders
    }
  } return deliveryOrders
}


// var deliveryOrders = [order1, order2, order3];
//  var items = listItems(deliveryOrders);

//  assert.deepEqual(items, "burger, blt sandwich, rueben");

function listItems(deliveryOrders) {
  var itemsList = []
  for (var i = 0; i < deliveryOrders.length; i++) {
    itemsList.push(deliveryOrders[i].item);
  } 
  return itemsList.join(', '); 
}


function searchOrder(deliveryOrders, itemName) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].item == itemName) {
    return true
   } 
  } 
  return false
}


module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
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


function refundOrder(orderNumber, deliveryOrders) {
  deliveryOrders.filter(1657);
}
// how to search by order number??



// var deliveryOrders = [order1, order2, order3];
//  var items = listItems(deliveryOrders);

//  assert.deepEqual(items, "burger, blt sandwich, rueben");

function listItems(deliveryOrders) {
  var itemsList = ''
  for (i = 0; i < deliveryOrders.length; i++) {
    items += deliveryOrders[i].item;
  } 
  return itemsList 
}


module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  // searchOrder
}
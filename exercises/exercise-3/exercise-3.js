let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

const [itemName, quantity, unitPrice] = order;

function orderedItems(order) {
  let arr = [];
  let itemTotal;

  for (item of order) {
    itemTotal = item.unitPrice * item.quantity;
    arr.push(itemTotal);
  }
  return arr;
}

const itemsArray = orderedItems(order);

function orderTotal(itemsArray) {
  let total = 0;

  itemsArray.forEach((price) => {
    total += price;
  });

  return total;
}

const total = orderTotal(itemsArray);

function receipt(order) {
  const receiptHeader = "QTY\t\tITEM\t\t\t\tTOTAL";
  console.log(receiptHeader);

  order.forEach((item) => {
    console.log(
      `${item.quantity}\t\t${item.itemName}\t\t\t${(
        (item.unitPrice * item.quantity * 100) /
        100
      ).toFixed(2)}`
    );
  });

  console.log(`\nTotal: ${total}`);
}

receipt(order);

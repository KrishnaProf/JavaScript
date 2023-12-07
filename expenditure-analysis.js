/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryMap = {};

  transactions.forEach(transaction => {
    const {category,Price} = transaction;

    if(category in categoryMap){
      categoryMap[category] += Price;
    }
    else {
      categoryMap[category] = Price;
    }
  });

  const result = []

  for(const category in categoryMap){
    result.push({ [category] : categoryMap[category]});
  }

  return result
}
trans = [
  {itemName:'Item 1', category:'Food', Price:30, timestamp: 1639256400 }
  // {itemName:'Item 2', category:'Clothing', Price:50, timestamp: 1639342800 },
  // {itemName:'Item 3', category:'Food', Price:60, timestamp: 1639256420 },
  // {itemName:'Item 4', category:'Electronics', Price:90, timestamp: 1639602000 },
  // {itemName:'Item 5', category:'Clothing', Price:40, timestamp: 1839256400 }
];

const results = calculateTotalSpentByCategory(trans)
console.log(results)

module.exports = calculateTotalSpentByCategory;

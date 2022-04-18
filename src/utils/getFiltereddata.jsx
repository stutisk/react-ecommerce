export const getFiltereddata = (state, productList) => {
  const { categories, rating, price, sort } = state;

  console.log("before-sort", productList);
  let sortedList = [
    ...productList.sort((productA, productB) => {
      if (sort == "ascending") {
        return productA.discountedPrice - productB.discountedPrice;
      } else if (sort == "descending") {
        return productB.discountedPrice - productA.discountedPrice;
      }
      return [...productList];
    }),
  ];
  console.log("after-sort", sortedList);
  // By rating
  let filteredData = [...sortedList.filter((item) => item.rating >= rating)];
  console.log("after-rating", filteredData);

  filteredData = categories.length
    ? [
        ...filteredData.filter((product) =>
          categories.includes(product.categoryName)
        ),
      ]
    : [...filteredData];
   

  filteredData = [
    ...filteredData.filter((item) => item.price < price),
  ];

  return [...filteredData];
};

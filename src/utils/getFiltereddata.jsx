export const getFiltereddata = (state, products) => {
  const { category, rating, price, sort } = state;

  console.log("before-sort", products);
  let sortedList = [
    ...products.sort((productA, productB) => {
      if (sort === "ascending") {
        return productA.price - productB.price;
      } else if (sort === "descending") {
        return productB.price - productA.price;
      }
      return [...products];
    }),
  ];
  console.log("after-sort", sortedList);
  // By rating
  let filteredData = [...sortedList.filter((item) => item.rating >= rating)];
  console.log("after-rating", filteredData);

  filteredData = category.length
    ? [
        ...filteredData.filter((product) =>
          category.includes(product.category)
        ),
      ]
    : [...filteredData];
   

  filteredData = [
    ...filteredData.filter((product) => product.price < price),
  ];

  return [...filteredData];
  
};


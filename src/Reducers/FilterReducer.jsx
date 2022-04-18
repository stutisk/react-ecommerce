const FilterReducer = (state, action) => {
  switch (action.type) {
    case "PRICE_RANGE":
      return { ...state, price: action.payload };
    case "CLEAR":
      return { ...action.payload };

    case "CATEGORY":
      return { ...state, category: [...state.category, action.payload] };

    case "REMOVE-CATEGORY":
      return {
        ...state,
        category: [
          ...state.category.filter((category) => category !== action.payload),
        ],
      };
    case "RATINGS":
      return { ...state, rating: action.payload };
      
    case "LOW_TO_HIGH":
      return { ...state, sort: action.payload };
    case "HIGH_TO_LOW":
      return { ...state, sort: action.payload };
    default:
      return state;
  }
};

export { FilterReducer };

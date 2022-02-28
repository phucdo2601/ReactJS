const initState = {
  users: [
    {
      id: 1,
      name: "Phuc Do",
    },
    {
      id: 2,
      name: "Le Vinh",
    },
    {
      id: 3,
      name: "Khanh Tram",
    },
  ],
};

/**
 * state trong truong hop nay khong phai state cua reactma la state cua redux
 */
const rootReducer = (state = initState, action) => {
  return state;
};

export default rootReducer;

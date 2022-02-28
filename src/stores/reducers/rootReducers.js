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

  post: [],
};

/**
 * state trong truong hop nay khong phai state cua reactma la state cua redux
 */
const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "DELETE_USER":
      // console.log(">>> run into delete user: ", action);
      let users = state.users;
      users = users.filter((item) => item.id !== action.payload.id);

      //cap nhat lai state moi nhat, ghi de du lieu
      return {
        ...state,
        users,
      };
      break;

    case "CREATE_USER":
      let id = Math.floor(Math.random() * 10000);
      let user = {
        id: id,
        name: `random - ${id}`,
      };
      /**
       * Dau tien phai copy lai state,
       * Ghi de lai user (Trong user thi copy lai trang thai hien tai, sau do day them user vua create vao)
       */
      return {
        ...state,
        users: [...state.users, user],
      };
      break;

    default:
      break;
  }

  return state;
};

export default rootReducer;

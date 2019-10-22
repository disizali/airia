const initialState = { user: {}, status: 0 };
module.exports = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_AUTH":
      state = { user: action.payload.user, status: action.payload.status };
      break;
  }
  return state;
};

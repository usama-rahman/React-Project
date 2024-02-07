const initialState = {
  showModal: false,
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "MODAL_OPEN":
      return { ...state, showModal: true };
    case "MODAL_CLOSE":
      return { ...state, showModal: false };
    default:
      return state;
  }
};

export { initialState, taskReducer };

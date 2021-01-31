const intialState = {
  lang: "eng",
};

const langReducer = (state = intialState, action) => {
  switch (action.type) {
    default:
      return state;

    case "LANGUAGE":
      return {
        ...state,
        lang: action.payload,
      };
  }
};

export { langReducer };

const changeLanguage = (lang) => {
  return (dispatch) => {
    dispatch({
      type: "LANGUAGE",
      payload: lang,
    });
  };
};

export { changeLanguage };

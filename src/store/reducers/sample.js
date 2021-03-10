const initialState = {
  carousal_data: "",
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "CAROUSAL_DATA":
      let finalData = payload.results;
      // console.log("payload data ", finalData);
      return {
        ...state,
        carousal_data: finalData,
      };

    default:
      return state;
  }
}

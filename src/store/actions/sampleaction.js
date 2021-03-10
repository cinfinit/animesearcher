import axios from "axios";
let config = "https://api.jikan.moe/v3/search/anime?q=";

export const carousalData = (anime_name) => async (dispatch) => {
  const res = await axios.get(`${config}${anime_name}&amp;limit=16`);

  dispatch({ type: "CAROUSAL_DATA", payload: res.data });
};

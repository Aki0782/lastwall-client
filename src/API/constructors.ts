import { HTTP } from ".";

const BASE_URL = "http://localhost:8000";

export default {
  getUsersList(): performRequestTypes {
    return {
      url: BASE_URL
    };
  },

  addNewUser(payload: payloadData): performRequestTypes {
    return {
      url: `${BASE_URL}/addNew`,
      data: payload,
      method: HTTP.POST
    };
  },
  searchUser(name: string): performRequestTypes {
    return {
      url: `${BASE_URL}/search?name=${name}`
    };
  }
};

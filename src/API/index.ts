import axios from "axios";

export const enum HTTP {
  GET = "GET",
  POST = "POST",
  DELETE = "DELETE",
  PATCH = "PATCH"
}

export default {
  async performRequest({ url, method, data }: performRequestTypes) {
    const methodType = method ?? "GET";

    const response = await axios(url, {
      method: methodType,
      data
    });

    return response;
  }
};

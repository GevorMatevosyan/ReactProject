import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/";

export class HttpRequests {
  static async getPosts() {
    const response = await axios.get(BASE_URL + "posts");
    return response.data;
  }
  static async getComments() {
    const response = await axios.get(BASE_URL + "comments");
    return response.data;
  }
  static async getTodos() {
    const response = await axios.get(BASE_URL + "todos");
    return response.data;
  }
}

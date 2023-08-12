import axios from './axios';
export class ProductsApi {
  static async getAll() {
      const response = await axios.get();
      return response.data.products;
  }
}
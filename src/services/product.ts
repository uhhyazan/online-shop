import axios from "axios";

const apiURL = 'https://fakestoreapi.com/products'

const getAllProducts = async () => {
    try {
      const response = await fetch(apiURL)
      const products = response.json();
      console.log(products)
      return products;
    } catch (error) {
      console.error(error);
    }
}

const getProduct = async (product: string) => {
    try {
      const response = await axios.get((apiURL + '/' + product));
      const products = response.data;
      return products;
    } catch (error) {
      console.error(error);
    }
}

export { 
    getAllProducts,
    getProduct
}
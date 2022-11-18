export default function useApi() {
  return {
    getProducts: async () => {
      const data = await fetch('https://fakestoreapi.com/products');
      const res = await data.json();
      return res;
    },
    getSingleProduct: async (id) => {
      const data = await fetch(`https://fakestoreapi.com/products/${id}`);
      const res = await data.json();
      return res;
    },
    getComments: async () => {
      const data = await fetch('https://dummyjson.com/comments');
      const res = await data.json();
      return res;
    },
  };
}

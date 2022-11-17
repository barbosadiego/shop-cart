export default function useApi() {
  return {
    getProducts: async () => {
      const data = await fetch('https://fakestoreapi.com/products');
      const res = await data.json();
      return res;
    },
  };
}

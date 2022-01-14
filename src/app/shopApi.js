import axios from "axios";

export const fetchMenu = () => {
  return axios.get('/menu.json').then(({data})=>data)
}

export const fetchProducts = async () => {
  return axios.get('/product.json').then(({data})=> data.productList)
}
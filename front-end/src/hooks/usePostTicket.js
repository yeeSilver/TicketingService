import { POSTAPI } from "../api";
import axios from "axios";


export async function createOrder() {
  const response = await axios.post(POSTAPI,{
    "describe": "bulgogi flavor",
    "foodName": "Kimbap",
    "price": "$12.00"
  });
  console.log(response)
  return response;
}
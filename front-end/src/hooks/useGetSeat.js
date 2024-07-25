import { GETAPI } from "../api";
import axios from "axios";


// export async function getMenu(){
//   axios.defaults.withCredentials = true;
//   const response = await axios({
//     method:'get',
//     url :  `/api/foods`,
//   }).then((response) => console.log(response)).catch((error)=>console.log(error))
    
//   console.log('hi')
//   return response;

// }

export async function getSeat() {
  const response = await axios.get(GETAPI);
  response.data.response.map((item) => (console.log(item.imageLink)))

  return response;
}
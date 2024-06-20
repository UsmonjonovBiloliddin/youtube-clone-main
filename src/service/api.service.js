import { RedoOutlined } from "@mui/icons-material";
import axios from "axios";

const  BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
    params: {
      maxResults: '50',
    },
    headers: {
      'X-RapidAPI-Key': 'dba27bd4d4msh9de70821507508fp1e400djsnea582fc41dda',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };


export const ApiService = {
    async fetching(url){
        const response = await axios.get(`${BASE_URL}/${url}` , options)
        return response.data
    }
}

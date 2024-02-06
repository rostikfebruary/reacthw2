import axios from "axios";
import {baseURL} from "../jsonURL/urls";

const axiosService = axios.create({baseURL})

export {
    axiosService
}
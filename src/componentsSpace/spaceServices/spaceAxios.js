import axios from "axios";
import {baseURL} from "../spaceURL/url";

const axiosService = axios.create({baseURL})

export {
    axiosService
}
import {axiosService} from './spaceAxios';
import {urls} from '../spaceURL/url'

const launchService ={
    getAll:() => axiosService(urls.launches.base),
    getById:(id)=> axiosService(urls.launches.byId(id))
}

export {
    launchService
}
import axios from 'axios';
import {UserDTO} from '../interfaces/UserDTO'

const apiClient = axios.create({
    baseURL: 'https://scholarspace-254954748843.southamerica-east1.run.app/api',
    headers:{
        'Content-Type': 'application/json'
    }
})

export const CreateUser = (userDTO: UserDTO) =>{
    return apiClient.post('/User', userDTO)
}
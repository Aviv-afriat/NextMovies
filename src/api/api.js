import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/',
})

export const getAllMovies = () => api.get(`/movies`)
export const getMovieById = id => api.get(`/movies/${id}`)

const apis = {
    getAllMovies,
    getMovieById,
}

export default apis
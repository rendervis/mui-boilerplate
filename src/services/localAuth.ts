import axios, { AxiosInstance } from 'axios'
class LocalAuthService {
    base: AxiosInstance
    constructor() {
        this.base = axios.create({
            baseURL: import.meta.env.VITE_API_URL
            // withCredentials: true
        })
    }

    login(formData: any): Promise<string> {
        return new Promise((resolve, reject) => {
            this.base
                .post(`/users/login`, formData)
                .then(({ data }) => {
                    resolve(data)
                })
                .catch((err) => reject(err))
        })
    }
    signup(formData: any): Promise<string> {
        return new Promise((resolve, reject) => {
            this.base
                .post('/users/signup', formData)
                .then(({ data }) => {
                    resolve(data)
                })
                .catch((err) => reject(err))
        })
    }
    forgot(formData: any) {
        return new Promise((resolve, reject) => {
            this.base
                .post('/users/forgot', formData)
                .then(({ data }) => {
                    resolve(data)
                })
                .catch((err) => reject(err))
        })
    }
    reset(formData: any) {
        return new Promise((resolve, reject) => {
            this.base
                .post('/users/reset', formData)
                .then(({ data }) => {
                    resolve(data)
                })
                .catch((err) => reject(err))
        })
    }
}

export default new LocalAuthService()

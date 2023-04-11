import axios, { AxiosInstance } from 'axios'

class ApiService {
    base: AxiosInstance
    constructor() {
        this.base = axios.create({
            baseURL: process.env.VITE_API_URL,
            withCredentials: true
        })
    }

    // Clients
    getClient(id: string): Promise<any[]> {
        return new Promise(async (resolve, reject) => {
            this.base
                .get(`/clients/${id}`)
                .then(({ data }) => {
                    resolve(data)
                })
                .catch((err) => reject(err))
        })
    }
    getClients(): Promise<any[]> {
        return new Promise(async (resolve, reject) => {
            this.base
                .get('/clients')
                .then(({ data }) => {
                    resolve(data)
                })
                .catch((err) => reject(err))
        })
    }
    createClient(client: any): Promise<any[]> {
        return new Promise((resolve, reject) => {
            this.base
                .post('/clients', client)
                .then(({ data }) => {
                    resolve(data)
                })
                .catch((err) => reject(err))
        })
    }
    updateClient(id: string, client: any): Promise<any[]> {
        return new Promise((resolve, reject) => {
            this.base
                .patch(`/clients/${id}`, client)
                .then(({ data }) => {
                    resolve(data)
                })
                .catch((err) => reject(err))
        })
    }
    deleteClient(id: string): Promise<any> {
        return new Promise((resolve, reject) => {
            this.base
                .delete(`/clients/${id}`)
                .then(({ data }) => {
                    resolve(data)
                })
                .catch((err) => reject(err))
        })
    }

    // Header
    setAuthToken(token: any) {
        if (token) {
            // Apply authorization token to every request if logged in
            this.base.defaults.headers.common['Authorization'] = token
        } else {
            // Delete auth header
            delete this.base.defaults.headers.common['Authorization']
        }
    }
}

export default new ApiService()

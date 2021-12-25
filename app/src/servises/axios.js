import axios from "axios";

export default class API {
  static #api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/todos',
  })

  static getItems = async (page = 0) => {
    const { data } = await this.#api.get('/', {
      params: {
        _page: page,
        _limit: 20,
      },
    })
    return data
  }

  static renameItem = async (id, title) => {
    const { data } = await this.#api.patch(`/${id}`, { title })
    return data
  }

  static completeItem = async (id, completed) => {
    const { data } = await this.#api.patch(`/${id}`, { completed })
    return data
  }

  static createItem = async (item) => {
    const { data } = await this.#api.delete(`/`, item)
    return data
  }

  static deleteItem = async (id) => {
    const { data } = await this.#api.delete(`/${id}`)
    return data
  }
}

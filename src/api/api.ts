import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://test2.sionic.ru/api/',
})

export const productAPI = {
    getProducts() {
        instance.get<ProductType[]>('products')
    }
}

export const categoryAPI = {
    getCategories() {
        instance.get<CategoryType[]>('categories')
    }
}

//types
type ProductType = {
    id: number
    name: string
    category_id: number
    description: string
}

type CategoryType = {
    id: number
    name: string
}
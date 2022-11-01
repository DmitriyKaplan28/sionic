import axios from "axios";
import {CategoryType, ProductType} from "../store/orm/types/models-types";

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
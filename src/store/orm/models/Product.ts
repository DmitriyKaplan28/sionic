import Model, {attr, fk, ModelType} from "redux-orm";
import {OrmSession} from "redux-orm/Session";

export class Product extends Model {
    static modelName = "Product" as const;

    static get fields() {
        return {
            id: attr(),
            name: attr(),
            category: fk("Category", "products"),
        };
    }

    static reducer(action: ProductAction, Product: ModelType<Product>, session: OrmSession<any>) {
        switch (action.type) {
            case ProductActionTypes.CREATE_PRODUCT:
                Product.create(action.payload);
                break;
            default:
                break;
        }
    }

}

//types
export enum ProductActionTypes {
    CREATE_PRODUCT = 'CREATE_PRODUCT',
    FETCH_PRODUCT = 'FETCH_PRODUCT',
    FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS',
    FETCH_PRODUCT_ERROR = 'FETCH_PRODUCT_ERROR',
}

interface CreateProductAction {
    type: ProductActionTypes.CREATE_PRODUCT;
    payload: { name: string; category: number; };
}

interface FetchProductAction {
    type: ProductActionTypes.FETCH_PRODUCT;
}

interface FetchProductSuccessAction {
    type: ProductActionTypes.FETCH_PRODUCT_SUCCESS;
    payload: any[];
}

interface FetchProductErrorAction {
    type: ProductActionTypes.FETCH_PRODUCT_ERROR;
    payload: string;
}

export type ProductAction =
    CreateProductAction
    | FetchProductAction
    | FetchProductSuccessAction
    | FetchProductErrorAction;
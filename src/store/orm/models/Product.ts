import Model, {attr, fk} from "redux-orm";

export class Product extends Model {
    static modelName = "Product" as const;

    static get fields() {
        return {
            id: attr(),
            name: attr(),
            category: fk("Category", "products"),
        };
    }


}



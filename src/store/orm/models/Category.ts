import Model, {attr} from "redux-orm";

export class Category extends Model {
}

Category.modelName = "Category";
Category.fields = {
    id: attr(),
    name: attr(),
}
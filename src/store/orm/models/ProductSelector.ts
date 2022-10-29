import {createSelector} from 'redux-orm';
import orm from "../orm";

export const productSelector = createSelector(orm, session => {
        return session.Product.all().toModelArray();
    }
);
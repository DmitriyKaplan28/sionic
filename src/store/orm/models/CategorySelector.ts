import {createSelector} from 'redux-orm';
import orm from "../orm";

export const categorySelector = createSelector(orm, session => {
        return session.Category.all().toModelArray();
    }
);
import React, {
    ChangeEvent,
    ChangeEventHandler,
    useCallback,
    useState,
} from 'react';
import {useDispatch} from 'react-redux';
import style from './OrderForDelivery.module.css';
import {Action, ActionType, CartItemInfo} from "../../../store/orm/types/shop-store-types";
import {session} from "../../../store/orm/models/redux-orm-store";
import {ProductVariationPropertyValueType} from "../../../store/orm/types/models-types";
import ProductVariationPropertiesList from "../../ProductVariationPropertiesList/ProductVariationPropertiesList";
import ProductImage from "../../ProductImage/ProductImage";

type CartItemProps = {
    cartItemData: CartItemInfo;
    readonly: boolean;
};

const OrderForDelivery: React.FC<CartItemProps> = React.memo(
    ({cartItemData, readonly}) => {
        const productName = (session.Product.withId(cartItemData.product_id) as any)
            .name;

        const productVariation = session.ProductVariation.withId(
            cartItemData.product_variation_id
        );
        const productVariationPropertyValues: ProductVariationPropertyValueType[] =
            (productVariation as any).productVariationPropertyValues
                .all()
                .toRefArray() as ProductVariationPropertyValueType[];

        const dispatch = useDispatch();
        const onRemoveItemHandler = useCallback(() => {
            const action: Action = {
                type: ActionType.REMOVE_FROM_CART,
                cartItemPayload: {...cartItemData},
            };
            dispatch(action);
        }, [cartItemData.product_id, cartItemData.product_variation_id]);

        const onItemCountChanged: ChangeEventHandler<HTMLInputElement> =
            useCallback(
                (event: ChangeEvent<HTMLInputElement>) => {
                    setCount(+event.target.value);
                    let action: Action = {
                        type: ActionType.CHANGE_ITEM_COUNT,
                        cartItemPayload: {...cartItemData},
                    };
                    if (+event.target.value > cartItemData.count) {
                        action.type = ActionType.ADD_TO_CART;
                    }
                    dispatch(action);
                },
                [cartItemData.product_id, cartItemData.product_variation_id]
            );

        const [count, setCount] = useState(cartItemData.count);
        const inputId =
            cartItemData.product_id + '_' + cartItemData.product_variation_id;

        return (
            <div className={style.item}>
                {!readonly && <ProductImage productId={cartItemData.product_id}/>}
                <span className={style.product_title}>{productName}</span>

                {!readonly && (
                    <input
                        id={inputId}
                        type="number"
                        min="1"
                        max="5"
                        value={count}
                        onChange={onItemCountChanged}></input>
                )}

                <ProductVariationPropertiesList
                    productVariationPropertyValues={productVariationPropertyValues}
                />

                <span className={style.price}>
          ({cartItemData.count}x{cartItemData.price} &#8381;)
        </span>
                <span className={style.total_price}>
          {cartItemData.price * cartItemData.count} &#8381;
        </span>

                {!readonly && (
                    <button type="button" onClick={onRemoveItemHandler}>
                        <i className="bi bi-trash"></i>
                    </button>
                )}
            </div>
        );
    }
);

export default OrderForDelivery;

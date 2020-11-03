import * as cartType from '../conStans/cart';

export const addCArt=(cartProduct,quantity)=>{
    return {
        type:cartType.ADD_CART,
        cartProduct,
        quantity
    }
}

export const deleteCart=(id)=>{
    return {
        type:cartType.DELETE_CART,
        id
    }
}
export const cartT=(cartProduct)=>{
    return{
        type:cartType.UPDATE_CART_T,
        cartProduct
    }
}
export const cartG=(cartProduct)=>{
    return {
        type:cartType.UPDATE_CART_G,
        cartProduct
    }
}
export const FormatCart=()=>{
    return{
        type:cartType.FormatCart,

    }
}


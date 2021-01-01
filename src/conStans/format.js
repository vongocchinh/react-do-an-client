export const format_currency=(price)=>{
    return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}
export const priceSale=(price,priceSale)=>{
    var tong=0;
    if(priceSale===0){
        return price;
    }else{
        tong+=(price-(price*(priceSale/100)));
    }
    return tong;
}
export const to_slug=(str)=>
{
    str = str.toLowerCase();
    str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
    str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
    str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
    str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
    str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
    str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
    str = str.replace(/(đ)/g, 'd');
    str = str.replace(/([^0-9a-z-\s])/g, '');
    str = str.replace(/(\s+)/g, '-');
    str = str.replace(/^-+/g, '');
    str = str.replace(/-+$/g, '');
    return str;
}
export const status=(status)=>{
    if(status>0){
        return "Còn hàng"
    }else{
        return "Hết hàng"
    }
}
export const  totalCart=(cart)=>{
    var result=0;
    for(let i=0;i<cart.length;i++){
        result+=cart[i].quantity;
    }
    return result;
}

export const totalCartPrice=(cart)=>{
    var result=0;
    for(let i=0;i<cart.length;i++){
        if(cart[i].cartProduct.priceSale===0){
            result+=cart[i].quantity*(cart[i].cartProduct.price);

        }else
        result+=cart[i].quantity*(cart[i].cartProduct.price-(cart[i].cartProduct.price*cart[i].cartProduct.priceSale/100));
    }
    return result;
}
export const totalCartPriceItem=(price,priceSale,quantity)=>{
    var result=0;
    if(priceSale===0){
        result=price*quantity;
    }else{
        result=(price-(price*(priceSale/100)))*quantity;
    }
    return result;
}

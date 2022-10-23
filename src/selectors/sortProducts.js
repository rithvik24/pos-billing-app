export const sortProductsByNameAtoZ = (products) => {
    return [...products.sort((a,b) => {
        if(a.name > b.name){
            return 1
        }else{
            return -1
        }
    })]
}

export const sortProductsByNameZtoA = (products) => {
    return [...products.sort((a,b) => {
        if(a.name < b.name){
            return 1
        }else{
            return -1
        }
    })]
}

export const sortProductsByPriceLowToHigh = (products) => {
    return [...products.sort((a,b) =>{
        return a.price - b.price
    })]
}

export const sortProductsByPriceHighToLow = (products) => {
    return [...products.sort((a,b) =>{
        return b.price - a.price
    })]
}
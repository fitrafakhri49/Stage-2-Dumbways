export interface Product{
    id:number,
    productName:string,
    detail:string
}
export interface Order{
    id:number,
    productId:number,
    quantity:number
}

export const products:Product[]=[
    {id:1, productName:"coki-coki", detail:"Snack Coklat"},
    {id:2, productName:"coca-cola", detail:"minuman"}
]

export const orders:Order[]=[
    {id:1,productId:1,quantity:5},
    {id:2,productId:2,quantity:6}
]
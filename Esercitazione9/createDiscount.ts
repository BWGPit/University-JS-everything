interface Product {
    name: string,
    price: number,
    category: string
}

type DiscountFunction = (p: Product) => Product 

function createDiscount(discount: number = 0.1): DiscountFunction {
    let f: DiscountFunction = function(p) {
        p.price = p.price - (discount*p.price)
        return p
    }
    return f
}
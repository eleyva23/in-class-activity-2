const product= [
    {sku: "A-100", name: "iphone", category: "electronics", price: 800.25, inventory: 10},
    {sku: "B-110", name: "iphone case", category: "accessories", price: 25.99, inventory: 15},
    {sku: "C-115", name: "hairbrush", category: "hair care", price: 10.25, inventory: 5},
    {sku: "D-120", name: "mascara", category:"makeup", price: 15.00, inventor: 8 },
    {sku: "E-125", name: "bleach", category: "cleanun supplies", price: 8.75, inventory: 12},
    ];

    
    for (let product of products) {
        let discount= 0;
        switch (product.category) {
            case "electronics":
                discount = .2
                break;
                case "accessories":
                    discount= .15
                break;
                case "hair care":
                case "makeup":
                    discount = .10
                break;
                default:
                    discount= 0;
                    break; 
           }
           // Place the PromoPrice Integration here
           let promoPrice= product.Price * (1-discount);
           product.promoPrice = promoPrice;

        }
        console.log(product)
    
        const customers = [
            {id: 1, customerType: "regular", couponCode: "SAVE10", taxRate: 0.007,
             cart: [{sku: "A-100", qty: 10}, {sku: "B-110", qty: 15}]},
             {id: 2, customerType: "student", cuponCode: "StUDENT2", taxRate: 0.07,
            cart: [{sku: "C-115", qty: 5}, {sku: "D-120", qty: 8}]},
             
        ]
        
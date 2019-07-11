const data = []
let subTotal = data.map((item) => {
    return item.price * item.qty
})
data.push(
    {
        "id_cart": 1,
        "product_name": "SENTER AJAIB PEMBESAR APA SAJA",
        "price": 1200100,
        "qty": 2,
        "sub_total": subTotal,
        "image": "https://cdn.idntimes.com/content-images/post/20161208/5-35b6343f68c36d03c2495f7c84e1dede.jpg",
        "location": "jepang"
    },
    {
        "id_cart": 2,
        "product_name": "LEMARI IKEA",
        "price": 567654,
        "qty": 1,
        "sub_total": subTotal,
        "image": "https://ecs7.tokopedia.net/img/cache/700/product-1/2019/1/11/4482427/4482427_016a1e90-1f8b-494b-beb9-2789890347af_700_700.jpg",
        "location": "papua new guinea"
    },
)


module.exports = data
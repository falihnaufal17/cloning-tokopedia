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
)


module.exports = data
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
        "sub_total": 2400200,
        "image": "https://cdn.idntimes.com/content-images/post/20161208/5-35b6343f68c36d03c2495f7c84e1dede.jpg",
        "location": "jepang",
        "nama_penerima": "Sugeng Rawuh",
        "no_hp": "08123456789",
        "alamat_rumah": "Jalan Lorem ipsum dulur Blok 11",
        "kota": "Deutch",
        "negara": "Germany",
    },
)


module.exports = data
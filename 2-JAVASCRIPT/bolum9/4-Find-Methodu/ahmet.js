const points = [70, 75, 99, 31, 46, 51, 45];

const highPoint = points.find(point => {
    return point > 70;                       //FİND METHODU DEĞER OLARAK İSTENİLENLERE UYGUN OLANI BULUR VE İLK BULDUĞU DEĞERDEN SONRASINA BAKMAZ
});

console.log(highPoint);
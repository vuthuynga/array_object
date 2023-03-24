// Bài 1 Cho Mảng Những Sản Phẩm dưới đây tìm Sản Phẩm có giá thành cao nhất dùng hàm map hoặc reduce 
const products = [
  { name: "Product 1", price: 20, category: "Electronics" },
  { name: "Product 2", price: 30, category: "Clothes" },
  { name: "Product 3", price: 40, category: "Electronics" },
  { name: "Product 4", price: 50, category: "Clothes" },
  { name: "Product 5", price: 60, category: "Clothes" },
  { name: "Product 6", price: 70, category: "Electronics" },
  { name: "Product 7", price: 90, category: "Clothes" },
  { name: "Product 8", price: 90, category: "Electronics" },
];
const maxPrice = products.reduce(
    (max, product) => (product.price > max ? product.price : max),
    products[0].price
  );
console.log(maxPrice);


// Bài 2: Tính tổng các giá trị trong mảng dùng Hàm map hoặc reduce
const inputs = [1, -4, 12, 0, -3, 29, -150];
function sum(inputs){
    let sum = 0;
    inputs.map(function(value){
        sum += value;
    });
     
    return sum;
}
console.log(sum(inputs)); 


// Bài 3: Dùng Hàm filter để lọc ra những người 67 tuổi
const input = [
  {
    name: "John",
    age: 13,
  },
  {
    name: "Mark",
    age: 56,
  },
  {
    name: "Rachel",
    age: 45,
  },
  {
    name: "Nate",
    age: 67,
  },
  {
    name: "Jennifer",
    age: 67,
  },
];
let findAge = input.filter(function(value) {
    return value.age === 67;
});
console.log(findAge)
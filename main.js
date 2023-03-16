// ex1
let myInfo = {
    name: 'Vu Thi Thuy Nga',
    year_of_birth: 2004,
    address: "Ha Noi",
    getAge: function(name, year_of_birth) {
        var d = new Date();
        var current_year = d.getFullYear();

        var age = current_year - year_of_birth;
        console.log(name + " is " + age + " years old");
}
    }
console.log(myInfo)
console.log(myInfo.getAge())

let myInfo2 = {
    name: 'Vu Thi Thuy Nga',
    year_of_birth: 2004,
    address: "Ha Noi",
    getAge: function(name, year_of_birth) {
        let d = new Date();
        let current_year = d.getFullYear();

        let age = current_year - this.year_of_birth;
        return this.name + " is " + age + " years old"
}
    }
console.log(myInfo)

//True code with true demand
function run(name, year_of_birth) {
    let d = new Date();
    let current_year = d.getFullYear();
    // define an object
    let myInfo = {
        name: name,
        year_of_birth: year_of_birth,
        address: "Ha Noi"
    }
    // Calculate age ...
    let age = current_year - myInfo.year_of_birth
    console.log(myInfo);
    // print object
    console.log(myInfo.name + " is " + age + " years old");
}
run("Tuong", 2003)

// ex2
//Bai nay dung roi nhung bo vào function de tai su dung nhe
let random = Math.floor(Math.random() * 5)
let testData = [254, 45, 212, 365, 2543]
console.log(testData[random])

// ex3
// cau nay em can tim hieu them 
function move(arr, old_index, new_index) {
    while (old_index < 0) {
        old_index += arr.length;
    }
    while (new_index < 0) {
        new_index += arr.length;
    }
    if (new_index >= arr.length) {
        var k = new_index - arr.length;
        while ((k--) + 1) {
            arr.push(undefined);
        }
    }
     arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);  
   return arr;
}

console.log(move([10, 20, 30, 40, 50], 0, 2));
console.log(move([10, 20, 30, 40, 50], -1, -2));
// // ex4
//Bai nay cung bo vao function nhe, nhung em nen bo sung them dieu kien neu hai mang khong co do dai bang nhau thi tinh nhu nao
let array1 = [1,0,2,3,4];
let array2 = [3,5,6,7,8,13];
let sum = []
for(var i = 0; i < array1.length; i++){
    sum.push(array1[i] + array2[i]);
 }
console.log(sum)

// // ex5
// Bai nay sai het cu phap mat ruiii
let library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];
let need = function() {
    if(readingStatus == true) {
        console.log(`'Already read ',title, 'by', author` )
    }
    else {
        console.log('You still need to read', title, 'by', author)
    }
}
console.log(need)


// // ex6
//Bài nay dung rui
let student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12
}
console.log(student)
delete student.rollno
console.log(student)
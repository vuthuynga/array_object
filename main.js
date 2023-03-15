// ex1
let myInfo = {
    name: 'Vu Thi Thuy Nga',
    year_of_birth: 2004,
    address: "Ha Noi",
    getAge: function(name, year_of_birth) {
        let d = new Date();
        let current_year = d.getFullYear();

        let age = current_year - year_of_birth;
        console.log(name + " is " + age + " years old");
}
    }
console.log(myInfo)
console.log(myInfo.getAge())


// ex2
let random = Math.floor(Math.random() * 5)
let testData = [254, 45, 212, 365, 2543]
console.log(testData[random])


// ex3
// cau nay em can tim hieu them 

// ex4
let array1 = [1,0,2,3,4];
let array2 = [3,5,6,7,8,13];
let sum = []
for(let i = 0; i < array1.length; i++){
    sum.push(array1[i] + array2[i]);
 }
console.log(sum)


// ex5
let library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }];
let need = function() {
    if(readingStatus == true) {
        console.log('Already read ',title, 'by', author )
    }
    else {
        console.log('You still need to read', title, 'by', author)
    }
}
console.log(need)


// ex6
let student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 
}
console.log(student)   
delete student.rollno
console.log(student)

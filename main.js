// Array
/*const cars = ["Audi", "BMW", "Tesla"];

console.log(cars);

cars.unshift("Toyota");

console.log(cars);*/




// object

/*const person = {
    name1: "Abdullajon",
    age: 14,
    address: {
        street: "Main st",
        houseNumber: 123
    }    
}

console.log(person.name1, person.address.street); //eskiroq esuli

const { name1, age, isStudent, address: {street}} = person; //yangiroq funksiyasi

console.log( name1, age, isStudent, street );*/




//JSON biz bunday malumotni backendga jo'natayotganimizda ishlatamiz ya'ni string qilib jo'natiladi
/*const person = {
    name1: "Abdullajon",
    age: 14,
    address: {
        street: "Main st",
        houseNumber: 123
    }    
}

console.log( JSON.stringify(person));*/

//Bunda ma'lumotlarni hammasi jsonga o'tadi va o'ziga xos belgilar oladi ya'ni ":" ni ham hamma veriableslarga qo'yib beradi



const students = [
    {
        fname: "Jane Doe",
        age: 23,
        gradiated: false
    },
    {
        fname: "Jane Smith",
        age: 21,
        gradiated: true 
    },
    {
        fname: "Bob Mark",
        age: 33,
        gradiated: true 
    }
];

//for degani biron narsa to'xtamaguncha aylanib kelaveradi
/*for (let i = 0; i <= 10; i++) {
    console.log(i)
}*/

for (let i = 0; i <= students.length; i++) {
    console.log(i);
    console.log(students[i] /*.fname qilsak faqat ismni oladi*/);
}
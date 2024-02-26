// 1 способ
// создали функцию

//function Hell() {
//    console.log("Привет")
//}

// вызов функции
//Hello();


// 2 способ
//const privet = function Privet2() {
//    console.log("Привет 2")
//}

//privet();

// 3 способ
//const main = () => {
//    console.log("Привет 3")
//}
//main();

//let person = (array) => {
//}

//const tom = ["Tom", 42, "tom@example.com"];
//const tom = ["Bob", 32, "bob@example.com"];
//console.log(tom[0])
//person(tom);
//person(bob);

//let person = (object) => {
//    console.log(object["name"]);
//    console.log(object["age"]);
//}

//let tom = {name: "Tom", age: 42, email: "tom@example.com"};
//let tom = {name: "Bob", age: 32, email: "bob@example.com"};

//person(tom);
//person(bob);

let temp = (e) => {
    if ( e === undefined) {
        console.log("Укажите тем-ру");
    } else {
    if (e >= 25)  {
        console.log(`Сегодная ${e} градусов. Можно надеть футболку`);
        }
    }
}
let key = promt("Введите тем-ру");
temp(key);
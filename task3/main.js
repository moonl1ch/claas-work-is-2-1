//let person = {
  //  name: "Tom",
    //age: 18,
    //hobbies: ["Кушать", "Спать", "Просмотр кино", "Читать книги"],
    //contacts: {
      //  phone: [88005553255, 88905553255],
       // email: ["tom@example.com", "tom2@example.com"],
        //social: "www.github.com"
//    }
//}
//
//console.log(`Имя - ${person["name"]}. Возраст - ${person["age"]}`);
//console.log(person["hobbies"][2]);
//console.log(person["contacts"]["email"][1]);

let college = [
    { 
        name: "Harry", 
        age: 18,
        group: "ИС-2-2",
        studID: 321232,
        typeLearning: "Очная",
        task: ["Физ-ра","МДК-02-02","МДК-02-02","МДК-04-02",],
        cash: 5500,
        isStudent: true
    },
    {
        name: "Ron", 
        age: 19,
        group: "ССА-3-2",
        studID: 321232,
        typeLearning: "Заочная",
        task: ["ИЗО","БЖ","ПРАВО","МДК-04-02",],
        cash: 0,
        isStudent: true
    },
    {
        name: "Tom", 
        age: 32,
        isKurator: true,
        kuratorGroup: "ССА-3-2",
        kafedra: "Инф.технологии",
        predmet: ["МДК-02-01","МДК-02-2","МДК-09-02"],
        isStudent: false
    },
    {
        name: "bob", 
        age: 32,
        isKurator: true,
        kuratorGroup: "ССА-2-2",
        kafedra: "Инф.технологии",
        predmet: ["МДК-02-01","МДК-02-2","МДК-09-02"],
        isStudent: false
    }
];

if (college[0]["isStudent"] === true){
    console.log(`Студент ${college[0]["name"]}`)
} else if (college[0]["isStudent"] === false){
    console.log("Преподаватель")
}
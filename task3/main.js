let person = {
    name: "Tom",
    age: 18,
    hobbies: ["Кушать", "Спать", "Просмотр кино", "Читать книги"],
    contacts: {
        phone: [88005553255, 88905553255],
        email: ["tom@example.com", "tom2@example.com"],
        social: "www.github.com"
    }
}

console.log(`Имя - ${person["name"]}. Возраст - ${person["age"]}`);
console.log(person["hobbies"][2]);
console.log(person["contacts"]["email"][1]);
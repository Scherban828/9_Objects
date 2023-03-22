"use strict";
//Создание объекта 
//let us = new Object(); //Конструктор объекта
//let us = {}; //Литерал объекта
//Пример 
let usInfo = {
    name: "Толя",
    age: 27,
    "user male": "man",//Если название св-ва объекта состоит из нескольких слов, ставим в ковычки
};
console.log(usInfo);
console.log(usInfo.name);
console.log(usInfo["user male"]);
//Вычисление, либо передача имени переменной
let firstPart = "likes";
let userI = {
    name: "Nady",
    age: 25,
    [firstPart]: true,
    address: {
        city: "MSK",
        street: "Varvarka",
    },
    showInfo() {
        console.log(`${this.name}, ${this.secondName}, Город - ${user1.address.city} `);
    },
};// This - обращается к первому родительскому элементу, тут this = user1
console.log(userI[firstPart]);
console.log(userI.address.street);
userI.secondName = "Ivanova"; //Добавление св-в объккта
console.log(userI);
delete userI.age; // Удаление св-в объекта
console.log(userI);
userI.secondName = "Петрова"; //Изменение св-ва объекта
console.log(userI.secondName);
let user1 = Object.assign({}, userI);//Копирование объекта
console.log(user1);
user1.name = "Masha";
console.log(user1.name);
//Добавление новых св-в объекта 
Object.assign(user1, { gun: "knife" });
console.log(user1.gun);
//Проверка наличия св-ва объекта 
if (user1.age) {
    console.log(user1.age);
} //Тут, если св-ва age есть - true, выведет результат, если св-ва нет - false
//age ранее был удален - поэтому false
//Можно проверять с помощью опциональной цепочки 
//console.log(user1?.name);
console.log(user1?.address?.street);
//Оператор in
if ("name" in user1) {
    console.log(user1.name);
}// Также проверяет наличие св-ва in объекте 
//Полный вывод ключей и св-в объекта через цикл 
for (let key in user1) {
    console.log(key);
    console.log(user1[key]);
}
//Добавил фу-ию в объект 
Object.assign(user1, {
    shIn: function () {
        console.log(`${user1.name} ${user1.secondName}`);
    }
});
user1.showInfo();
user1.shIn();// и вывел ее
//Объект конструктор, с помощью Ф-ИИ
function UserInfo(name, age) {
    this.name = name;
    this.age = age;
}
console.log(new UserInfo('Вася', 30));
console.log(new UserInfo('Лена', 50));
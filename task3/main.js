let college = [
    {
        name: "Harry",
        age: 17,
        group: "ИС-2-1",
        studID: 321232,
        typeLearning: "Очная",
        task: ["Физ-ра", "МДК-02-02", "МДК-02-02", "МДК-04-01"],
        cash: 0,
        isStudent: true
    },
    {
        name: "Ron",
        age: 19,
        group: "ССА-3-2",
        studID: 321236,
        typeLearning: "Заочная",
        task: ["ИЗО", "БЖ", "ПРАВО", "МДК-04-01"],
        cash: 0,
        isStudent: true
    },
    {
        name: "Tom",
        age: 32,
        isKurator: true,
        kuratorGroup: "ССА-3-2",
        kafedra: "Инф.технологии",
        predmet: ["МДК-02-1","МДК-02-2","МДК-09.01","МДК-09-02"],
        isStudent: false,
    },
    {
        name: "Bob",
        age: 32,
        isKurator: true,
        kuratorGroup: "ССА-2-2",
        kafedra: "Инф.технологии",
        predmet: ["МДК-02-1","МДК-02-2","МДК-09.01","МДК-09-02"],
        isStudent: false,
    }
];

let student = college[2]; 

if (student.isStudent) {
  console.log(`Вы выбрали студента ${student.name}`);

  if (student.age >= 18) {
    console.log(`Студент ${student.name} совершеннолетний. Ему ${student.age}`);
  } else {
    console.log(`Студент ${student.name} несовершеннолетний. Ему ${student.age}`);
  }

  let stipendMessage;
  if (student.cash >= 4500) {
    stipendMessage = `получает повышенную стипендию (${student.cash} руб.)`;
  } else if (student.cash > 0) {
    stipendMessage = `получает обычную стипендию (${student.cash} руб.)`;
  } else {
    stipendMessage = `не получает стипендию`;
  }

  console.log(`Студент ${student.name} ${stipendMessage}`);
  console.log(`Номер студенческого ${student.studID}`);
} else if (student.isKurator) {
  console.log(`Вы выбрали преподавателя ${student.name}`);
  console.log(`Преподаватель ${student.name} куратор группы ${student.kuratorGroup}`);
  console.log(`Кафедра ${student.kafedra}`)
  console.log(`Ведет предметы ${student.predmet}`)
}

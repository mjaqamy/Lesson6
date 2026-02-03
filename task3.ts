// Напишите метод analyze, который возвращает объект анализа пользователей

const userAnalyzer = {
  users: [
    { id: 1, name: "Анна", age: 24, isActive: true },
    { id: 2, name: "Иван", age: 17, isActive: false },
    { id: 3, name: "Мария", age: 31, isActive: true },
    { id: 4, name: "Пётр", age: 19, isActive: false },
    { id: 5, name: "Олег", age: 42, isActive: true },
  ],

  analyze() {
    const result = {
      total: 0,
      adults: 0,
      activeUsers: 0,
    };

    for (const user of this.users) {
      result.total++;
      if (user.age >= 18) {
        result.adults++;
      }
      if (user.isActive) {
        result.activeUsers++;
      }
    }
    return result;
  },
};

console.log(userAnalyzer.analyze());

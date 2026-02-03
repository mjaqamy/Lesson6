/* eslint-disable @typescript-eslint/no-unused-vars */
// Написать функцию, которая поверхностно сравнивает два объекта
// * В объекте могут быть функции

interface User {
  name: string;
  age: number | (() => number);
}

const user1: User = {
  name: "Vlad",
  age: 23,
};

const user2: User = {
  name: "Vlad",
  age: 23,
};

const user3: User = {
  name: "Vlad",
  age: () => 23,
};

const user4: User = {
  name: "Vlad",
  age: () => 23,
};

const compareObjects = (object1: User, object2: User) => {
  for (const key1 in object1) {
    if (object1[key1 as keyof User] !== object2[key1 as keyof User]) {
      return false;
    }
  }

  return true;
};

console.log(compareObjects(user1, user2));

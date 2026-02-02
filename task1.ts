// Написать функцию, которая будет высчитывать среднюю сумму чисел значений объекта
type Salaries = Record<string, number | string | null>;
const salaries = {
  alexander: 500,
  elena: 341.3,
  karina: "465",
  anastasia: 480.5,
  diana: 390,
  julia: null,
} as const;

function averageSumOfSalaries(salaries: Salaries) {
  let sumSalaries = 0;
  let countSalary = 0;
  for (const salaryKey in salaries) {
    const salary = salaries[salaryKey];
    if (salary != null) {
      countSalary++;
      sumSalaries += parseFloat(String(salary));
    }
  }
  if (countSalary > 0) {
    return sumSalaries / countSalary;
  }
  return 0;
}
console.log(averageSumOfSalaries(salaries));

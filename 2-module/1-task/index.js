function sumSalary(salaries) {
  let amount = 0;
  for (key in salaries) {
    if (Number(salaries[key]) && isFinite(salaries[key])) {
      amount += salaries[key]
    }
  }
  return amount;
};
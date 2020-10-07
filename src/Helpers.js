//calc the difference between the years
export function getDifferenceYear(year) {
  return new Date().getFullYear() - year;
}

//calc the increase depending of the brand
export function calcBrand(brand) {
  let increase;

  switch (brand) {
    case "european":
      increase = 1.3;
      break;
    case "american":
      increase = 1.15;
      break;
    case "asian":
      increase = 1.05;
      break;
    default:
      break;
  }
  return increase;
}

//calc the increase depending of the plan
export function calcPlan(plan) {
  let increase;

  switch (plan) {
    case "basic":
      increase = 1.2;
      break;
    case "complete":
      increase = 1.5;
      break;
    default:
      break;
  }
  return increase;
}

//change to uppercase
export function changeUpperCase(text){
  return text.charAt(0).toUpperCase() + text.slice(1)
}
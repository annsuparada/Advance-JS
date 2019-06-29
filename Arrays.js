const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//   console.log('ages:' + ages.length)
//   console.log(companies.length)

//   for( let i = 0; i < companies.length; i++) {
//       console.log(companies[i])
//   }

//forEach
// companies.forEach(function(company) {
// console.log(company.name)
// })


// get 21 and older
//filter
// let canDrink = [];
// for(let i = 0; i < ages.length; i++) {
//     if(ages[i] >= 21) {
//         canDrink.push(ages[i])
//     }
// }

// const canDrink = ages.filter(function(age) {
//     if(age >= 21) {
//         return true;
//     }
// })

// const canDrink = ages.filter(age => age >= 21)

// console.log(canDrink)


// Filter retail companies

// const retailCompanies = companies.filter(function(company) {
//     if(company.category === 'Retail')
//     return true;
// })

// const retailCompanies = companies.filter(company => company.category === 'Retail')

// console.log(retailCompanies)

// get 80s companies 

// const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start <= 1990))
// console.log(eightiesCompanies)

// Get companies that lasted 10 years

// const lastedTenYears = companies.filter(company => (company.end - company.start >= 10) )
// console.log(lastedTenYears)


// map

// create array of company names

// const companyName = companies.map(company => 
//     `${company.name} [${company.start} - ${company.end}]`)
// console.log(companyName)

// const agesSqure = ages.map(age => Math.sqrt(age))
// console.log(agesSqure)

// const agesTimesTwo = ages.map(age => age * 2)
// console.log(agesTimesTwo)

// const agesMap = ages
// .map(age => Math.sqrt(age))
// .map(age => age * 2);
// console.log(agesMap)

// sort companies by start year
// const sortedCompanies = companies.sort(company => company.start)

// const sortedCompanies = companies.sort(function(c1, c2) {
//     if(c1.start > c2.start) {
//         return 1;
//     } else {
//         return -1;
//     }
// });

// const sortedCompanies = companies.sort((c1, c2) => 
// (c1.start > c2.start ? 1 : -1));
// // ? = return , 1 = ture , : = else,  -1 = false,

// console.log(sortedCompanies)

// sort ages

// const sortAges = ages.sort((a,b) => a - b);
// // a- b = เรียงจากน้อยไปมาก
// // b - a  = เรียงจากมากไปน้อย
// console.log(sortAges)

// reduce

// let ageSum =0;
// for(let i = 0; i < ages.length; i++) {
//     ageSum += ages[i];
// }

// const ageSum = ages.reduce(function(totle, age) {
//     return totle + age;
// }, 0)
// ,0 = อยู่ในวงเล็บหลัง ,
const ageSum = ages.reduce((totle, age) => totle + age, 0)

// console.log(ageSum)


// // get total yearsfor all the companies

// const totalYears = companies.reduce((total, company) => 
// total + (company.end - company.start), 0)

// console.log(totalYears)

// combine Methods

const combine = ages
.map(age => age * 2)
.filter(age => age >= 40)
.sort((a,b) => a - b)
.reduce((a, b) => a + b, 0)
console.log(combine)









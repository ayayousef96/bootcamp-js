let c1='Spain', p1= 47, cc1='Madrid';
let c2='Israel', p2= 9, cc2='Jerusalem';
let c3='Italy', p3= 59, cc3='Rome';
function countryInfo(country, population,capitalCity){
    s= country + " has " +population + " million people and its capital city is "+ capitalCity;
    return s;
}
let r1=countryInfo(c1,p1,cc1);
console.log(r1);
let r2=countryInfo(c2,p2,cc2);
console.log(r2);
let r3=countryInfo(c3,p3,cc3);
console.log(r3);

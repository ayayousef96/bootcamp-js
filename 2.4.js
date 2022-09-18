let datenow = new Date()
const weekdays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let curdate= "Today is " + weekdays[datenow.getDay() - 1] +" the "+ datenow.getDate()+ " of " + months[datenow.getMonth()] +" " + datenow.getFullYear();
console.log(curdate);
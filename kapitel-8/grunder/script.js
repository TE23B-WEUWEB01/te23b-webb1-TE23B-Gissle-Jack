// var tal1 = Number(prompt("Tal Ett"));
// var tal2 = Number(prompt("Tal Två"));
// var summa = tal1+tal2;

// document.writeln(tal1 +"+"+tal2 +"=" +summa);

var tal1 = Number(prompt("Tal Ett"));
var tal2 = Number(prompt("Tal Två"));
var procent = tal2*0.01;
var summa = tal1-(tal1*procent);
document.writeln("Din inkomst efter skat är " + summa +"Kr med "+ procent + "% i skatt");
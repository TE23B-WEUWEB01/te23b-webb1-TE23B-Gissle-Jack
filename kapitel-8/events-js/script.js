// while (true) {
//     let namn = prompt("Ange ditt namn:");
//     let lösenord = prompt("Ange ditt lösenord:");

//     if (namn == "jack"&&lösenord=="pegasus") {
//         document.writeln("Välkomen")
//         break;
//     }
// }
// let ålder = promt("Ange ålder");
// document.writeln(`hej ${namn} du är ${ålder}`)

var number = 0;
var int = false;
while (number<5 || number > 10) {
    number = parseInt(Number(prompt("Skriv ett heltal mellan 5-10")));
}
for (let index = 0; index < number; index++) {
    document.writeln(`rad ${i}<br>`);
}
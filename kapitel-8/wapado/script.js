
var ålder = Number(prompt("hur gammal är du?"))

if (ålder >= 15) {
    alert("Du får se filmen");
} else {
        document.writeln("Du är för ung för att see filmen");
}

var tempratur = Number(prompt("Hur varmt är det ute"));

if (tempratur >= 20) {
    alert("Det är kallt ute");
} else {
        document.writeln("Det är varm ute");
}

var djur = (prompt("Vad är ditt favorit djur"));

if (djur == "hund"||djur == "Hund") {
    alert("Jag gillar också hundar");
} else {
        document.writeln("jag skjälv gillar inte det djuret");
}

var köpkraft = Number(prompt("Hur mycket handlar du för"));

if (köpkraft >= 300) {
    alert("Det är rebat idag!");
} else {
        document.writeln("Det finns ingen rebatt idag");
}

var lössen = (prompt("Vad är lösenordet"));

if (lössen == "hund") {
    alert("Välkomen");
} else {
        document.writeln("Fel Lösenord");
}
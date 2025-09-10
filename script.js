// Déclaration et initialisation des variables
let x = 6;
let y = 6;
let z = 7;

// ben et yb sont des chaînes de caractères
let ben = "Dieu";
let yb = " ou son frère";

// Calculs
let h = x + y;
let w = x - y;
let v = x / y;
let u = x + y + h;

// Fonction pour effacer les résultats
function clearResults() {
    document.getElementById("results").innerHTML = "";
}

// Fonctions pour afficher les résultats
function showH() {
    document.getElementById("results").innerHTML += `<p>La valeur de h (x + y) est : ${h}</p>`;
}

function showW() {
    document.getElementById("results").innerHTML += `<p>La valeur de w (x - y) est : ${w}</p>`;
}

function showV() {
    document.getElementById("results").innerHTML += `<p>La valeur de v (x / y) est : ${v}</p>`;
}

function showU() {
    document.getElementById("results").innerHTML += `<p>La valeur de u (x + y + h) est : ${u}</p>`;
}

function showBen() {
    document.getElementById("results").innerHTML += `<p>La valeur de ben est donc ${ben + yb}</p>`;
}

function showAll() {
    clearResults(); // Efface les résultats précédents
    showH();
    showW();
    showV();
    showU();
    showBen();
}

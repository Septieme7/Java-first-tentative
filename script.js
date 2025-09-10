// Déclaration et initialisation des variables
let x = 6;
let y = 6;
let z = 7;
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
    document.getElementById("results").innerHTML = `<p>La valeur de h (x + y) est : ${h}</p>`;
}

function showW() {
    document.getElementById("results").innerHTML = `<p>La valeur de w (x - y) est : ${w}</p>`;
}

function showV() {
    document.getElementById("results").innerHTML = `<p>La valeur de v (x / y) est : ${v}</p>`;
}

function showU() {
    document.getElementById("results").innerHTML = `<p>La valeur de u (x + y + h) est : ${u}</p>`;
}

// Fonction pour afficher "La valeur de ben peut être : Dieu ou son frère"
function showBenPossible() {
    document.getElementById("results").innerHTML = `<p>La valeur de ben peut être : ${ben + yb}</p>`;
}

// Fonction pour afficher "La valeur ben est donc Dieu et py C tout..."
function showBenFinal() {
    document.getElementById("results").innerHTML = `<p>La valeur ben est donc ${ben} et py C tout...</p>`;
}

function showAll() {
    document.getElementById("results").innerHTML = `
        <p>La valeur de h (x + y) est : ${h}</p>
        <p>La valeur de w (x - y) est : ${w}</p>
        <p>La valeur de v (x / y) est : ${v}</p>
        <p>La valeur de u (x + y + h) est : ${u}</p>
        <p>La valeur de ben peut être : ${ben + yb}</p>
        <p>La valeur ben est donc ${ben} et py C tout...</p>
    `;
}

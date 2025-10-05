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

// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function() {
    // Récupérer tous les boutons
    const buttons = document.querySelectorAll('.button-diagonal');
    const showAllBtn = document.querySelector('.show-all');
    const clearAllBtn = document.querySelector('.clear-all');

    // Assigner les fonctions aux boutons diagonaux
    if (buttons[0]) buttons[0].addEventListener('click', showH);
    if (buttons[1]) buttons[1].addEventListener('click', showW);
    if (buttons[2]) buttons[2].addEventListener('click', showV);
    if (buttons[3]) buttons[3].addEventListener('click', showU);
    if (buttons[4]) buttons[4].addEventListener('click', showBenPossible);
    if (buttons[5]) buttons[5].addEventListener('click', showBenFinal);

    // Assigner les fonctions aux boutons spéciaux
    if (showAllBtn) showAllBtn.addEventListener('click', showAll);
    if (clearAllBtn) clearAllBtn.addEventListener('click', clearResults);

    // Mettre à jour le tableau des variables
    updateVariablesTable();
});

// Fonction pour mettre à jour le tableau des variables
function updateVariablesTable() {
    const tbody = document.querySelector('.variables-table tbody');
    if (tbody) {
        tbody.innerHTML = `
            <tr>
                <td>x</td>
                <td>${x}</td>
                <td>Actif</td>
            </tr>
            <tr>
                <td>y</td>
                <td>${y}</td>
                <td>Actif</td>
            </tr>
            <tr>
                <td>z</td>
                <td>${z}</td>
                <td>Actif</td>
            </tr>
            <tr>
                <td>h (x + y)</td>
                <td>${h}</td>
                <td>Calculé</td>
            </tr>
            <tr>
                <td>w (x - y)</td>
                <td>${w}</td>
                <td>Calculé</td>
            </tr>
            <tr>
                <td>v (x / y)</td>
                <td>${v}</td>
                <td>Calculé</td>
            </tr>
            <tr>
                <td>u (x + y + h)</td>
                <td>${u}</td>
                <td>Calculé</td>
            </tr>
            <tr>
                <td>ben</td>
                <td>${ben}</td>
                <td>Divine</td>
            </tr>
        `;
    }
}
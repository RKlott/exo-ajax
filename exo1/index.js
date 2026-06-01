//TODO //////////////////// EXO 1 //////////////////////////
const btnChargerTxt = document.getElementById("chargerTexte");
const contentArea = document.getElementById("contentArea");
let chargerTxt;

async function chargerTexte() {
  try {
    const response = await fetch("texte.txt");
    if (!response.ok) throw new Error("Erreur HTTP : " + response.status);
    const content = await response.text();
    chargerTxt = content;
  } catch (error) {
    console.error("Erreur: ", error.message);
  }
}

function chargerTexte() {
  fetch("texte.txt")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("contentArea").innerText = data;
    })
    .catch((error) => alert("Erreur AJAX : " + error));
}

chargerTexte();

btnChargerTxt.addEventListener("click", () => {
  contentArea.innerHTML = chargerTxt;
});

//TODO //////////////////// EXO 2 //////////////////////////
const btnChargerUsers = document.getElementById("chargerUsers");
const ulChargerUsers = document.getElementById("listeUsers");
let contentStr;

async function chargerUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error("Erreur HTTP : " + response.status);
    }
    contentStr = await response.json();

  } catch (error) {
    console.error("Erreur: ", error.message);
  }
}

chargerUsers();

btnChargerUsers.addEventListener("click", () => {
    contentStr.forEach((element) => {
      ulChargerUsers.innerHTML += `<li>${element.name}</li>`;
    });
});

//TODO //////////////////// EXO 3 //////////////////////////

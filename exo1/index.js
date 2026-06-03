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
const btnPost = document.getElementById("chargerPost");
const postDiv = document.getElementById("post");
async function chargerPost(){
  postDiv.innerHTML = "<p>Chargement du contenu..</p>";
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    if (!response.ok) {
      throw new Error("Erreur HTTP : " + response.status);
    }
    postContent = await response.json();

    postDiv.innerHTML = `
      <h3>${postContent.title}</h3> <br>
      <p>${postContent.body}</p>
    `;
  } catch (error) {
    console.error("Erreur: ", error.message);
  }
}

btnPost.addEventListener("click", chargerPost);

//TODO //////////////////// EXO 4 //////////////////////////
const inputVille = document.getElementById("ville");
const btnMeteo = document.getElementById("btn-meteo");
const meteoContainer = document.getElementById("meteo");

async function chargerMeteo(){
  let villeSaisie = inputVille.value.trim();

  if(villeSaisie === ""){
    villeSaisie = "Paris";
  }

  meteoContainer.innerHTML = "<p>Recherche de la météo...</p>";

  try {
    const url = `https://wttr.in/${villeSaisie}?format=3`;

    const response = await fetch(url);

    if(!response.ok){
      throw new Error("Impossible de récupérer la météo: " + response.status);
    }

    const donneesMeteo = await response.text();
    meteoContainer.innerHTML = `<p><strong>${donneesMeteo}</strong></p>`;
  } catch (error) {
    console.error("Erreur météo : ", error.message);
  }
}

btnMeteo.addEventListener("click", chargerMeteo);
//TODO //////////////////// EXO 5 //////////////////////////
const btnLoadAll = document.getElementById('btn-load-all');
const titresList = document.getElementById('titres');

async function chargerTitres(){
  titresList.innerHTML = "";
  titresList.innerHTML = "<li>Chargement des titres...</li>";

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if(!response.ok){
      throw new Error("Erreur: " + response.status);
    }

    const posts = await response.json();

    titresList.innerHTML = "";

    posts.forEach(post => {
      const li = document.createElement('li');

      li.textContent = post.title;

      titresList.appendChild(li);
    });
  } catch (error) {
    console.error("Erreur console: " + error.message);
  }
}

btnLoadAll.addEventListener("click", chargerTitres);
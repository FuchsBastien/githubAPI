const APICALL = "https://api.github.com/users/";
const affichage = document.querySelector('.affichage');
const form = document.querySelector('.form-github-recherche');
const inpRecherche = document.querySelector('.inp-recherche');


//async = action différé dans le temps en Javascript
async function dataGithub(utilisateur) {
    const reponse = await fetch (`${APICALL}${utilisateur}`)
    const data = await reponse.json();
    console.log(data);

    creationCarte(data)
}

dataGithub("FuchsBastien")

//user = data
function creationCarte(user) {

    // création template (équivalent createElement, appendchild)
    const cartHTML = 
    `
    <div class="carte">
    <img src=${user.avatar_url} alt ="icone avatar" class="avatar">
    <h2>${user.login}</h2>
    <ul class="cont-infos">
        <li class ="followers"> Followers : ${user.followers} </li>
        <li class ="etoiles"> Repos : ${user.public_repos} </li>
        <li clasz = "bio"> Bios : ${user.bio} </li>
    <div>
    `
    //innerHtml et non innerText sinon cela va rendre le template sous forme de texte
    affichage.innerHTML = cartHTML
}

form.addEventListener('submit', (e) => {
    e.preventDefault ();

    if (inpRecherche.value.length > 0) {

        dataGithub(inpRecherche.value);
        inpRecherche.value = "";
        
    }
})


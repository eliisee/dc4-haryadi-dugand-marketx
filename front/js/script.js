//Nous déclarons la constante servant à récupérer l'élément HTML ayant pour ID #item 
const items = (document.getElementById('items'))

/* Nous initialisons la fonction fetchProduct, fonction asynchrone servant à récupérer les données présentes 
dans l'API, puis à les convertir au format Javascript 
  Les données au format Javascript sont ensuite stockées dans la variable meubleData*/
/* const fetchCampaign = async () => {
  await fetch('http://localhost:3000/api/campaigns')
    .then((response) => response.json())
    .then((response) => { 
      pelouseData = response
      return pelouseData
    })
}
//fetchCampaign()

/*Une fois la fonction fetchProduct exécutée, nous déclarons displayProduct, fonction asynchrone qui attend 
  l'éxecution de fetchProduct avant de s'éxecuter
  Lorsque l'éxecution de fetchProduct est terminée, nous appliquons la méthode .map() sur meubleData, afin de parcourir et de "cartographier" les données 
  qui s'y trouvent
  Cela nous permet ensuite d'injecter les données correspondantes au sein du HTML 
  Pour finir, nous appliquons la méthode .join(), afin de supprimer les apostrophres présentes entre chaque carte produit */
/* const displayCampaign = async () => {
  await fetchCampaign()
  items.innerHTML = pelouseData // tab[prod, prod2, prod3]
    .map(                      //      0       1    2
      (pelouse) =>
        `<a href="./campaigns.html?_id=${pelouse._id}">
        <article class = "article">
        <img class="item__img" src = "${pelouse.imageUrl}" alt = "${pelouse.altTxt}" />
        <h3 class="campaignName">${pelouse.name}</h3>
        <p class="campaignDescription">${pelouse.description}</p>
    </article>
    </a>`,
    )
    .join(' ') 
}
displayCampaign() */
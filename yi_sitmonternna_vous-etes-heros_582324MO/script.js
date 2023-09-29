const chapter = {
    information: {
        titre: "Chapitre 1" ,
        description: "Vous avez été téléporté de votre monde, la Terre et pour retourner dans votre monde vous devez survivre à l’aventure mise devant vous. Allez vers le chemin devant vous et vous devriez choisir des ingrédients pour créer un plat délicieux. Veuillez bien réfléchir aux ingrédients que vous allez choisir parce que si le plat n’est pas délicieux. Vous allez être pris dans ce monde pour toujours et jamais retourner à la Terre.",
        image: "./assets/images/forest.jpg",
        bouton: [
            {titre: 'Home', 'destination:' :'continuer votre chemin'},
            {titre: 'XX', 'destination:' :'chemin'},
            {titre: 'Continuer', 'destination:' :'chemin'}
        ]
    },
    debut: {
        titre: "Chapitre 2" ,
        description: "Autour de vous se retrouve différents choix d’ ingrédients que vous pouvez utiliser pour votre potion, veuillez en choisir votre premier ingrédient.",
        image: "./assets/images/chemin-rond.jpg",
        bouton: [
            {titre: 'Fraise volante', 'destination:' :'fraise'},
            {titre: 'Cochon mauve', 'destination:' :'cochon'},
            {titre: ' Champignons qui changent de couleurs', 'destination:' :'champignon'}
        ]
    },
    champignon: {
        titre: "Chapitre 3" ,
        description: "En suivant le chemin guidé, vous avez trouvés différents choix d’ ingrédients que vous pouvez utiliser pour votre potion, veuillez en choisir votre deuxième ingrédient.",
        image: "./assets/images/chemin-rond.jpg",
        bouton: [
            {titre : 'Salade qui cours', 'destination' : 'salade'},
            {titre : ' Oignon qui pleurent', 'destination' : 'oignon'},
            {titre : 'Tomate qui crache du feu', 'destination' : 'tomate'}

        ]
    },
    tomate: {
        titre: "Chapitre 4" ,
        description: "En suivant le chemin guidé, vous avez trouvés différents choix d’ ingrédients que vous pouvez utiliser pour votre potion, veuillez en choisir votre troisième ingrédient.        ",
        image: "./assets/images/chemin-rond.jpg",
        bouton: [
            {titre : 'Poivrons noirs et rouges', 'destination' : 'poivron'},
            {titre : 'Poulet bleu et mauve', 'destination' : 'poulet'},
            {titre : ' Patate orange', 'destination' : 'patate'}

        ]
    },
    patate: {
        titre: "Chapitre 5" ,
        description: "En suivant le chemin guidé, vous avez trouvés différents choix d’ ingrédients que vous pouvez utiliser pour votre plat, veuillez en choisir votre deuxième ingrédient.",
        image: "./assets/images/chemin-rond.jpg",
        bouton: [
            {titre : ' Fraise volante', 'destination' : 'retour1'},
            {titre : 'Cochon mauve', 'destination' : 'retour2'},
            {titre : 'Champignons changent de couleurs', 'destination' : 'réussi'}
        ]
    }
};

if(chapter.information.titre === 'Chapitre 1'){
   console.log(`Titre: ${chapter.information.titre} 
    description:${chapter.information.description} 
    Image: ${chapter.information.image} 
    Boutton: ${chapter.information.bouton}`);
}
console.log('Veuillez taper "goToChapiter2(chapter)" pour continuer');

function goToChapiter2(chapter){
    if(chapter.debut.titre === "Chapitre 2"){
      console.log(chapter.debut)
      console.log("Pour continuer tapez 'goToChapiter4(chapter)'");  
    }else{
        console.log("il y a une erreur")
    }
}

function goToChapiter3(chapter){
    if(chapter.tomate.titre === "Chapitre 4"){
      console.log(chapter.tomate);  
      console.log("Pour continuer tapez 'goToChapiter5(chapter)'");  
    }else{
        console.log("il y a une erreur")
    }
}

function goToChapiter4(chapter){
    if(chapter.champignon.titre === "Chapitre 3"){
      console.log(chapter.champignon);  
      console.log("Pour continuer tapez 'goToChapiter3(chapter)'");  

    }else{
        console.log("il y a une erreur")
    }
}

function goToChapiter5(chapter){
    if(chapter.patate.titre === "Chapitre 5"){
      console.log(chapter.patate);  
      console.log("Vous avez terminez le jeu");  

    }else{
        console.log("il y a une erreur")
    }
}


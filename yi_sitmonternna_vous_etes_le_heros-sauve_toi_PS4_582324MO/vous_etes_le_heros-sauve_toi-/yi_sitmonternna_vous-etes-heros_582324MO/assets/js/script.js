const chapter = {
    information: {
        titre: "Chapitre 1",
        description: "Vous avez été téléporté de votre monde, la Terre et pour retourner dans votre monde vous devez survivre à l’aventure mise devant vous. Allez vers le chemin devant vous et vous devriez choisir des ingrédients pour créer un plat délicieux. Veuillez bien réfléchir aux ingrédients que vous allez choisir parce que si le plat n’est pas délicieux. Vous allez être pris dans ce monde pour toujours et jamais retourner à la Terre.",
        image: "./assets/images/house.jpg",
        video: "./assets/video/ambiance.mp4",
        bouton: [
            { titre: 'Continuer', destination: 'debut' }
        ]
    },
    debut: {
        titre: "Faire un choix...",
        description: "Autour de vous se retrouvent différents choix d’ingrédients que vous pouvez utiliser pour votre potion, veuillez en choisir votre premier ingrédient.",
        image: "./assets/images/foret_entrer.jpg",
        bouton: [
            { titre: 'Fraise volante', destination: 'fraise' },
            { titre: 'Cochon mauve', destination: 'cochon' },
            { titre: 'Champignons qui changent de couleurs', destination: 'champignon' }
        ]
    },
    fraise: {
        titre: "Survecue au premier defi",
        description: "Bravo!! Vous avez choisi le bon ingrédient, vous avez survécu à votre  premier défi. Veuillez continuer votre aventure en suivant le chemin guidez.",
        image: "./assets/images/forest.jpg",
        bouton: [
            { titre: 'Continuer', destination: 'tomate' }
        ]
    },
    cochon: {
        titre: "Cours",
        description: "Bravo!! Vous avez choisi le bon ingrédient, vous avez survécu à votre  premier défi. Veuillez continuer votre aventure en suivant le chemin guidez.",
        image: "./assets/images/chemin.jpg",
        bouton: [
            { titre: 'Continuer', destination: 'tomate' }
        ]
    },
    champignon: {
        titre: "Champignon",
        description: "En suivant le chemin guidé, vous avez trouvé différents choix d’ingrédients que vous pouvez utiliser pour votre potion, veuillez en choisir votre deuxième ingrédient.",
        image: "./assets/images/foret_roche.jpg",
        video: "./assets/video/champignon.mp4",
        bouton: [
            { titre: 'Salade qui court', destination: 'salade' },
            { titre: 'Oignon qui pleure', destination: 'oignon' },
            { titre: 'Tomate qui crache du feu', destination: 'tomate' }
        ]
    },
    salade: {
        titre: "Attaquer",
        description: "Ouchh!! Lorsque vous avez voulu attraper la salade, vous n’aviez pas vu le trou dans le sol et est tombé à l’ intérieur. Vous n’ avez pas pu vous en sortir et pourrissez là.",
        image: "./assets/images/chemin-rond.jpg",
        bouton: [
            { titre: 'Recommencer', destination: 'information' }
        ]
    },
    oignon: {
        titre: "Opps",
        description: "Opps.. Ce légume est un type d’oignon spécifique qui attaque tout autour de lui avec ses larmes, qui sont empoisonnés. Vous avez été tuer!!",
        image: "./assets/images/forest.jpg",
        bouton: [
            { titre: 'Recommencer', destination: 'information' }
        ]
    },
    tomate: {
        titre: "Tomate",
        description: "En suivant le chemin guidé, vous avez trouvé différents choix d’ingrédients que vous pouvez utiliser pour votre potion, veuillez en choisir votre troisième ingrédient.",
        image: "./assets/images/foret_entrer.jpg",
        bouton: [
            { titre: 'Poivrons noirs et rouges', destination: 'poivron' },
            { titre: 'Poulet bleu et mauve', destination: 'poulet' },
            { titre: 'Patate orange', destination: 'patate'}
        ]
    },
    poivron: {
        titre: "flamme",
        description: "Ouchh!! Lorsque vous avez voulu attraper la salade, vous n’aviez pas vu le trou dans le sol et est tombé à l’ intérieur. Vous n’ avez pas pu vous en sortir et pourrissez là.",
        image: "./assets/images/chemin.jpg",
        bouton: [
            { titre: 'Recommencer', destination: 'information' }
        ]
    },
    poulet: {
        titre: "fierce",
        description: "Opps.. Cet animal est un type de poulet sauvage et est très violent envers tout ce qu’ il voit.  Vous avez été tuer!!",
        image: "./assets/images/foret_roche.jpg",
        bouton: [
            { titre: 'Recommencer', destination: 'information' }
        ]
    },
    patate: {
        titre: "Patate",
        description: "En suivant le chemin guidé, vous avez trouvé différents choix d’ingrédients que vous pouvez utiliser pour votre plat, veuillez en choisir votre deuxième ingrédient.",
        image: "./assets/images/chemin.jpg",
        bouton: [
            { titre: 'Fraise volante', destination: 'debut' },
            { titre: 'Cochon mauve', destination: 'debut' },
            { titre: 'Champignons changent de couleurs', destination: 'réussi' }
        ]
    },
    réussi: {
        titre: "Vous avez réussi",
        description: "Bravo!! Tous ces ingrédients sont harmonieux et fait une bonne potion magique. Vous avez survécu à cette aventure et pouvez finalement être transporter sur la Terre.",
        image: "./assets/images/house.jpg",
        bouton: [
            { titre: 'Retourner', destination: 'information' }
        ]
    }
};

const boutons = document.querySelector('.btn');
const gaucheButton = document.querySelector('.gauche');
const centreButton = document.querySelector('.centre');
const droitButton = document.querySelector('.droit');

const chapitre = document.querySelector('#chapitre');
const texte = document.querySelector('#texte');
const image = document.querySelector('#image');       

const buttonRestart = "Réinitialiser";

//creation du video
const creationVideo = document.createElement("video");
creationVideo.controls = true;
image.appendChild(creationVideo);
let currentPlaybackTime = 0;

//creation du son
const creationSonore = document.createElement("audio");
image.appendChild(creationSonore);
creationSonore.src = "./assets/sons/swoosh.mp3"

function audioButtonClick() {
    // Play the sound
    creationSonore.currentTime = 0;
    creationSonore.play();
}

const sonMuet = document.getElementById("checkbox");

function updateMuteStatus() {
    creationSonore.muted = sonMuet.checked;
    localStorage.setItem('noSound', sonMuet.checked);
}

sonMuet.addEventListener('change', updateMuteStatus);
updateMuteStatus();


function goToChapter(chapterName) {
    const currentChapter = chapter[chapterName];
    
    if (currentChapter) {
        
        if(currentChapter.video){
            creationVideo.src = currentChapter.video;
            creationVideo.currentTime = currentPlaybackTime;
            console.log("Video source:", currentChapter.video);
        }

        // Donner nouvelle information pour le code
        chapitre.textContent = currentChapter.titre;
        texte.textContent = currentChapter.description;
        image.style.backgroundImage = `url(${currentChapter.image})`;
    
        // efface les bouttons précédents
        while (boutons.firstChild) {
            boutons.removeChild(boutons.firstChild);
        }

        //sauvegarde
        localStorage.setItem('currentChapter', chapterName);

        //twist
        if (currentChapter.fraise && currentChapter.cochon) {
            localStorage.setItem('twistActivated', 'true');
        } else {
            localStorage.removeItem('twistActivated');
        }

        // création de nouveau boutton pour page actuelle
        if (currentChapter.bouton) {
            for (let i = 0; i < currentChapter.bouton.length; i++) {
                const buttonInfo = currentChapter.bouton[i];
                const nouveauBtn = document.createElement('button');
                nouveauBtn.textContent = buttonInfo.titre;
                nouveauBtn.addEventListener('click', () => {
                    audioButtonClick();
                    goToChapter(buttonInfo.destination);
                });
                boutons.appendChild(nouveauBtn);
            }
        }
        if (currentChapter.video) {
            // video apparaitre et effacer image
            image.style.backgroundImage = "none";
        } 
    else {
            console.log("Chapter not found:", chapterName);
            } 
        }
            
        }
    

//function pour bouton reset
function afficherResetButton(){
    const resetButton = document.getElementById(buttonRestart);

    //si button existe pas
    if(!resetButton){
        const restartButton = document.createElement('button');
        restartButton.textContent = "Réinitialiser";
        restartButton.id = buttonRestart;
        restartButton.addEventListener('click', () => {
            // Réinitialise le localStorage et revient au début de l'histoire
            localStorage.clear();
            goToChapter('information');
        });
        boutons.appendChild(restartButton);
    }
}

window.onload = function() {
    const sauvegardeChapitre = localStorage.getItem('currentChapter');
    if (sauvegardeChapitre) {
        goToChapter(sauvegardeChapitre);
    }
};

// Commence le chapitre avec la premiere page
goToChapter('information');




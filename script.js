console.log("be-replic");


const gallery = document.getElementById("gallery-container");
const dotsContainer = document.getElementById("gallery-dots");


let projects = [];
let currentIndex = 0;



fetch("data/realisations.json")

.then(response => response.json())

.then(realisations => {


    // Création des images

realisations.forEach((realisation, index) => {

    gallery.innerHTML += `

    <div class="project" onclick="goToSlide(${index})">

        <img src="images/realisations/${realisation.image}" 
             alt="${realisation.titre}">

        <h3>${realisation.titre}</h3>

        <p>${realisation.description}</p>

    </div>

    `;

});



    projects = document.querySelectorAll(".project");


    // Création des points

    realisations.forEach((realisation,index)=>{


        const dot = document.createElement("span");

        dot.classList.add("dot");


        dot.onclick = ()=>{

            goToSlide(index);

        };


        dotsContainer.appendChild(dot);


    });



    // Initialisation

    updateCarousel();


});




// Aller à une image

function goToSlide(index){


    currentIndex = index;


    updateCarousel();


}


window.innerWidth

// Mise à jour du carrousel

function updateCarousel(){

    let offset = 330;


    if(window.innerWidth <= 768){

        offset = 250;

    }




    projects.forEach((project,index)=>{


        project.classList.remove("active");


        let position = index - currentIndex;


        // boucle visuelle

        if(position > projects.length / 2){

            position -= projects.length;

        }


        if(position < -projects.length / 2){

            position += projects.length;

        }



        project.style.transform = 
        `translateX(${position * offset}px) scale(${position === 0 ? 1 : 0.8})`;



        project.style.opacity = 
        position === 0 ? "1" : "0.35";



        project.style.zIndex =
        position === 0 ? "2" : "1";


    });




    // mise à jour des points

    const dots = document.querySelectorAll(".dot");


    dots.forEach((dot,index)=>{


        dot.classList.toggle(

            "active",

            index === currentIndex

        );


    });

}




// Flèches

function scrollGallery(direction){


    currentIndex += direction;



    if(currentIndex < 0){

        currentIndex = projects.length - 1;

    }


    if(currentIndex >= projects.length){

        currentIndex = 0;

    }



    updateCarousel();


}

function toggleMaterials(){

    const list = document.getElementById("materials-list");
    const arrow = document.getElementById("materials-arrow");

    list.classList.toggle("open");

    if(list.classList.contains("open")){

        arrow.textContent = "⌃";

    }else{

        arrow.textContent = "⌄";

    }

}
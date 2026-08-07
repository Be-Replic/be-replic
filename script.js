console.log("be-replic");


fetch("data/realisations.json")
.then(response => response.json())
.then(realisations => {

    const gallery = document.getElementById("gallery-container");

    realisations.forEach(realisation => {

        gallery.innerHTML += `

        <div class="project">

            <img src="images/realisations/${realisation.image}" 
                 alt="${realisation.titre}">

            <h3>${realisation.titre}</h3>

            <p>${realisation.description}</p>

        </div>

        `;

    });

});



fetch("data/realisations.json")
.then(response => {
    console.log(response);
    return response.json();
})
.then(realisations => {

    console.log(realisations);

});
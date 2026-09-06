
const library = [

    {
        title: "Stranger Things",
        type: "shows",
        year: 2016,
        rating: 10,
        poster: "",
        favorite: true
    },

    {
        title: "The Batman",
        type: "movies",
        year: 2022,
        rating: 9,
        poster: "",
        favorite: true
    },

    {
        title: "Wednesday",
        type: "shows",
        year: 2022,
        rating: 9,
        poster: "",
        favorite: false
    },

    {
        title: "Spider-Man: No Way Home",
        type: "movies",
        year: 2021,
        rating: 10,
        poster: "",
        favorite: true
    }

];


let currentCategory = "all";


function displayLibrary(items) {

    const libraryContainer = document.getElementById("library");

    libraryContainer.innerHTML = "";

    document.getElementById("movie-count").textContent =
        `${items.length} titles`;


    items.forEach(item => {

        const card = document.createElement("div");

        card.className = "movie-card";


        card.innerHTML = `

            <div class="poster">

                ${
                    item.poster
                    ? `<img src="${item.poster}" alt="${item.title}">`
                    : `<div style="
                        height:100%;
                        display:flex;
                        align-items:center;
                        justify-content:center;
                        color:#555;
                        font-size:40px;
                    ">🎬</div>`
                }

            </div>

            <div class="movie-title">
                ${item.title}
            </div>

            <div class="movie-info">
                ${item.year} • ⭐ ${item.rating}/10
            </div>

        `;


        libraryContainer.appendChild(card);

    });

}


function showCategory(category) {

    currentCategory = category;

    let filtered = library;


    if (category === "movies") {

        filtered = library.filter(item =>
            item.type === "movies"
        );

        document.getElementById("section-title").textContent =
            "Movies";

    }


    else if (category === "shows") {

        filtered = library.filter(item =>
            item.type === "shows"
        );

        document.getElementById("section-title").textContent =
            "TV Shows";

    }


    else if (category === "favorites") {

        filtered = library.filter(item =>
            item.favorite
        );

        document.getElementById("section-title").textContent =
            "Favorites";

    }


    else {

        document.getElementById("section-title").textContent =
            "My Library";

    }


    displayLibrary(filtered);

}


function searchLibrary() {

    const searchTerm =
        document.getElementById("search").value.toLowerCase();


    let filtered = library.filter(item =>
        item.title.toLowerCase().includes(searchTerm)
    );


    if (currentCategory === "movies") {

        filtered = filtered.filter(item =>
            item.type === "movies"
        );

    }


    if (currentCategory === "shows") {

        filtered = filtered.filter(item =>
            item.type === "shows"
        );

    }


    if (currentCategory === "favorites") {

        filtered = filtered.filter(item =>
            item.favorite
        );

    }


    displayLibrary(filtered);

}


displayLibrary(library);

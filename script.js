// ========================================
// MY LIBRARY
// ========================================

const library = [

    // ==============================
    // SHOWS
    // ==============================

    {
        id: "victorious",
        title: "Victorious",
        type: "shows",
        year: 2010,
        rating: 10,
        poster: "",
        favorite: true
    },

    {
        id: "sam-and-cat",
        title: "Sam & Cat",
        type: "shows",
        year: 2013,
        rating: 10,
        poster: "",
        favorite: true
    },

    {
        id: "game-shakers",
        title: "Game Shakers",
        type: "shows",
        year: 2015,
        rating: 9,
        poster: "",
        favorite: true
    },

    {
        id: "icarly",
        title: "iCarly",
        type: "shows",
        year: 2007,
        rating: 10,
        poster: "",
        favorite: true
    },

    {
        id: "henry-danger",
        title: "Henry Danger",
        type: "shows",
        year: 2014,
        rating: 10,
        poster: "",
        favorite: true
    },


    // ==============================
    // MOVIES
    // ==============================

    {
        id: "home-alone",
        title: "Home Alone",
        type: "movies",
        year: 1990,
        rating: 10,
        poster: "",
        favorite: true
    },

    {
        id: "home-alone-2",
        title: "Home Alone 2: Lost in New York",
        type: "movies",
        year: 1992,
        rating: 10,
        poster: "",
        favorite: true
    }

];


// ========================================
// CURRENT CATEGORY
// ========================================

let currentCategory = "all";


// ========================================
// DISPLAY LIBRARY
// ========================================

function displayLibrary(items) {

    const libraryContainer = document.getElementById("library");

    libraryContainer.innerHTML = "";


    // Update number of titles

    document.getElementById("movie-count").textContent =
        `${items.length} ${items.length === 1 ? "title" : "titles"}`;


    // No results message

    if (items.length === 0) {

        libraryContainer.innerHTML = `
            <div style="
                grid-column: 1 / -1;
                text-align: center;
                padding: 60px 20px;
                color: #777;
                font-size: 18px;
            ">
                No titles found 🎬
            </div>
        `;

        return;
    }


    // Create each card

    items.forEach(item => {

        const card = document.createElement("div");

        card.className = "movie-card";


        // Make the card clickable

        card.onclick = function () {
            openTitle(item.id);
        };


        // Poster

        let posterHTML;

        if (item.poster) {

            posterHTML = `
                <img
                    src="${item.poster}"
                    alt="${item.title}"
                >
            `;

        } else {

            posterHTML = `
                <div style="
                    width:100%;
                    height:100%;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    background:linear-gradient(
                        135deg,
                        #191919,
                        #292929
                    );
                    color:#666;
                    font-size:45px;
                ">
                    ${item.type === "shows" ? "📺" : "🎬"}
                </div>
            `;

        }


        // Card HTML

        card.innerHTML = `

            <div class="poster">

                ${posterHTML}

            </div>


            <div class="movie-title">

                ${item.title}

            </div>


            <div class="movie-info">

                ${item.year}
                •
                ⭐ ${item.rating}/10

            </div>

        `;


        libraryContainer.appendChild(card);

    });

}


// ========================================
// SHOW CATEGORY
// ========================================

function showCategory(category) {

    currentCategory = category;

    let filtered = library;


    // ALL

    if (category === "all") {

        document.getElementById("section-title").textContent =
            "My Library";

    }


    // MOVIES

    else if (category === "movies") {

        filtered = library.filter(item =>
            item.type === "movies"
        );

        document.getElementById("section-title").textContent =
            "Movies";

    }


    // SHOWS

    else if (category === "shows") {

        filtered = library.filter(item =>
            item.type === "shows"
        );

        document.getElementById("section-title").textContent =
            "TV Shows";

    }


    // FAVORITES

    else if (category === "favorites") {

        filtered = library.filter(item =>
            item.favorite === true
        );

        document.getElementById("section-title").textContent =
            "Favorites";

    }


    // Display results

    displayLibrary(filtered);

}


// ========================================
// SEARCH
// ========================================

function searchLibrary() {

    const searchInput =
        document.getElementById("search");

    const searchTerm =
        searchInput.value.toLowerCase().trim();


    // Search titles

    let filtered = library.filter(item =>
        item.title.toLowerCase().includes(searchTerm)
    );


    // Keep current category active

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
            item.favorite === true
        );

    }


    displayLibrary(filtered);

}


// ========================================
// OPEN MOVIE / SHOW
// ========================================

function openTitle(id) {

    const item = library.find(movie =>
        movie.id === id
    );


    if (!item) {
        return;
    }


    console.log("Selected:", item.title);


    // For now we will show an alert.
    // Later we will replace this with
    // the actual movie/show page.

    alert(
        `${item.title}\n\n` +
        `${item.type === "shows" ? "TV Show" : "Movie"}\n` +
        `Year: ${item.year}\n` +
        `Rating: ⭐ ${item.rating}/10`
    );

}


// ========================================
// INITIAL LOAD
// ========================================

displayLibrary(library);

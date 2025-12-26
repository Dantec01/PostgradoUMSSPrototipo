// search-box open close js code
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");
let searchInput = document.querySelector(".search-box .input-box input");
let inputBox = document.querySelector(".search-box .input-box");

// Create recent searches container
let recentSearchesContainer = document.createElement("div");
recentSearchesContainer.className = "recent-searches";
recentSearchesContainer.style.display = "none"; // Hidden by default
if (inputBox) {
    inputBox.appendChild(recentSearchesContainer);
}

// Toggle search box
if (searchBox && navbar) {
    searchBox.addEventListener("click", () => {
        if (searchInput) {
             performSearch(searchInput.value.trim());
        }
    });
}

// Load recent searches from localStorage
function getRecentSearches() {
    const searches = localStorage.getItem("recentSearches");
    return searches ? JSON.parse(searches) : [];
}

function saveRecentSearch(query) {
    let searches = getRecentSearches();
    // Remove if exists to move to top
    searches = searches.filter(s => s !== query);
    searches.unshift(query);
    // Limit to 5
    if (searches.length > 5) searches.pop();
    localStorage.setItem("recentSearches", JSON.stringify(searches));
}

function removeRecentSearch(query) {
    let searches = getRecentSearches();
    searches = searches.filter(s => s !== query);
    localStorage.setItem("recentSearches", JSON.stringify(searches));
    renderRecentSearches();
}

function renderRecentSearches() {
    const searches = getRecentSearches();
    if (searches.length === 0) {
        recentSearchesContainer.style.display = "none";
        return;
    }
    
    recentSearchesContainer.innerHTML = "";
    const ul = document.createElement("ul");
    
    searches.forEach(search => {
        const li = document.createElement("li");
        
        const textSpan = document.createElement("span");
        textSpan.textContent = search;
        li.appendChild(textSpan);

        const deleteBtn = document.createElement("i");
        deleteBtn.className = "bx bx-x delete-search";
        deleteBtn.title = "Eliminar del historial";
        
        deleteBtn.addEventListener("mousedown", (e) => {
             e.preventDefault(); 
             e.stopPropagation();
             removeRecentSearch(search);
             searchInput.focus(); 
        });

        li.appendChild(deleteBtn);
        
        // Prevent closing when clicking on item
        li.addEventListener("mousedown", (e) => {
            if (e.target === deleteBtn) return;
            e.preventDefault(); // Prevent blur
            searchInput.value = search;
            performSearch(search);
        });
        
        ul.appendChild(li);
    });
    
    recentSearchesContainer.appendChild(ul);
    recentSearchesContainer.style.display = "block";
}

function performSearch(query) {
    if (!query) return;
    saveRecentSearch(query);
    window.location.href = `buscador.htm?q=${encodeURIComponent(query)}`;
}

// Input event listeners
if (searchInput) {
    searchInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            performSearch(searchInput.value.trim());
        }
    });
    
    searchInput.addEventListener("focus", () => {
        renderRecentSearches();
    });
    
    searchInput.addEventListener("blur", () => {
        // Delay hiding to allow click event on list items
        setTimeout(() => {
            recentSearchesContainer.style.display = "none";
        }, 200);
    });
}

/* 
searchBox.addEventListener("click", ()=>{
  navbar.classList.toggle("showInput");
  if(navbar.classList.contains("showInput")){
    searchBox.classList.replace("bx-search" ,"bx-x");
  }else {
    searchBox.classList.replace("bx-x" ,"bx-search");
  }
});
*/

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
if (menuOpenBtn && navLinks) {
  menuOpenBtn.onclick = function() {
    navLinks.style.left = "0";
  }
}
if (menuCloseBtn && navLinks) {
  menuCloseBtn.onclick = function() {
    navLinks.style.left = "-100%";
  }
}


// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
if (htmlcssArrow && navLinks) {
  htmlcssArrow.onclick = function() {
    navLinks.classList.toggle("show1");
  }
}
let moreArrow = document.querySelector(".more-arrow");
if (moreArrow && navLinks) {
  moreArrow.onclick = function() {
    navLinks.classList.toggle("show2");
  }
}
/*let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function() {
 navLinks.classList.toggle("show3");
}*/

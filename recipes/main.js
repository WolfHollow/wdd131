import recipes from "../recipes/recipes.mjs";


// 1. Get the container element
const container = document.getElementById('recipe');

// 2. Use map() to create an array of HTML strings
const articleHTMLArray = recipes.map(recipes => {
    // Template literal (backticks) for easy string formatting
    return `
        <div class="recipe-card">
            <img src="${recipes.image}" alt="${recipes.name}">
            <div class="recipe-word">
                <button class="tag-${recipes.tags}">${recipes.tags}</button>
                <h2>${recipes.name}</h2>
                <span
	                class="rating"
	                role="img"
	                aria-label="Rating: ${recipes.rating} out of 5 stars"
                >
	                <span aria-hidden="true" class="icon-star">⭐</span>
	                <span aria-hidden="true" class="icon-star">⭐</span>
	                <span aria-hidden="true" class="icon-star">⭐</span>
	                <span aria-hidden="true" class="icon-star">⭐</span>
	                <span aria-hidden="true" class="icon-star-empty">☆</span>
                </span>
                <p>${recipes.description}</p>
            </div>
        </div>
        
    `;
});

// 3. Use join('') to combine the array of strings into one big string
const finalHTML = articleHTMLArray.join('');

// 4. Inject the single string into the HTML container
container.innerHTML = finalHTML;
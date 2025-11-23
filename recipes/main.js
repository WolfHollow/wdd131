import recipes from "../recipes/recipes.mjs";


function random(num) {
	return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
	const listLength = list.length;
	const randomNum = random(listLength);
	return list[randomNum];
}


// to test
const recipe = getRandomListEntry(recipes);
console.log(recipe);
let recipeList = [recipe];

//search
function searchList(list, q) {
    function searchCallback(item) {
      return (
        item.name.toLowerCase().includes(q.toLowerCase()) ||
        item.description.toLowerCase().includes(q.toLowerCase()) ||
        item.tags.find((tag) => tag.toLowerCase().includes(q.toLowerCase()))
      );
    }
    const filtered = list.filter(searchCallback);

    const sorted = filtered.sort((a, b) => a.distance - b.distance);
    return sorted;
}


// 1. Get the container element
const container = document.getElementById('recipe');

// Helper function to generate tags HTML
function tagsTemplate(tags) {
    if (!Array.isArray(tags) || tags.length === 0) {
        return ''; // Return an empty string if no tags are provided
    }
	// loop through the tags list and transform the strings to HTML
    const html = tags.map(tag => {
        return `<button type="button" class="tag-${capitalizeFirstLetter(tag)}">${capitalizeFirstLetter(tag)}</button>`;
    }).join('');
    
	return html;
}

//Capitalze first letter of a string
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Helper function to generate rating HTML
function ratingTemplate(rating) {
	// begin building an html string using the ratings HTML written earlier as a model.
	let html = `<span
	    class="rating"
	    role="img"
	    aria-label="Rating: ${rating} out of 5 stars"
        >`
        // our ratings are always out of 5, so create a for loop from 1 to 5
        for (let i = 1; i <= 5; i++) {
            // check to see if the current index of the loop is less than our rating
	    	// if so then output a filled star
            if (i <= rating) {
                html += `<span aria-hidden="true" class="icon-star">⭐</span>`
	    	// else output an empty star
            } else {
                html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`
            }
        }
	    // after the loop, add the closing tag to our string
	    html += `</span>`
	// return the html string
	return html
}

// 2. Use map() to create an array of HTML strings
const renderRecipes = recipeList.map(recipe => {
    // Template literal (backticks) for easy string formatting
    return `
        <div class="recipe-card">
            <img src="${recipe.image}" alt="${recipe.name}">
            <div class="recipe-word">
                ${tagsTemplate(recipe.tags)}
                <h2>${recipe.name}</h2>
                ${ratingTemplate(recipe.rating)}
                <p>${recipe.description}</p>
            </div>
        </div>
        
    `;
});

// 3. Use join('') to combine the array of strings into one big string
const finalHTML = renderRecipes.join('');

// 4. Inject the single string into the HTML container
container.innerHTML = finalHTML;




const searchbutton = document.getElementById('search-button');
const searchinput = document.getElementById('search-input');
searchbutton.addEventListener("click", (event) => {
    event.preventDefault();
    recipeList = searchList(recipes, searchinput.value);
    // You may want to re-render the recipes here, e.g.:
    // container.innerHTML = recipeList.map(recipe => ...).join('');
    const renderRecipes = recipeList.map(recipe => {
    // Template literal (backticks) for easy string formatting
    return `
        <div class="recipe-card">
            <img src="${recipe.image}" alt="${recipe.name}">
            <div class="recipe-word">
                ${tagsTemplate(recipe.tags)}
                <h2>${recipe.name}</h2>
                ${ratingTemplate(recipe.rating)}
                <p>${recipe.description}</p>
            </div>
        </div>
        
    `;
});
    const finalHTML = renderRecipes.join('');
    container.innerHTML = finalHTML;
});

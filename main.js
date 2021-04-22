//data for BREAKFAST recipe cards
let breakfastCardsData = [
    {
        name: "Peanut Butter Buckwheat",
        category: "Breakfast",
        a: "#pb-buckwheat",
        img: "pb-buckwheat-card.jpg",
        imgText: "peanut butter buckwheat",
        allergens: ["oats", "gluten", "eggs", "sugar", "dairy"]
    },
    {
        name: "Chia Pudding",
        category: "Breakfast",
        a: "#chiaPudding",
        img: "chia-pudding-card.jpg",
        imgText: "jar of chia pudding topped with berries",
        allergens: ["oats", "gluten", "eggs", "sugar", "dairy", "nuts"]
    },
    {
        name: "Buckwheat Pancakes",
        category: "Breakfast",
        a: "#buckwheatPan",
        img: "buckwheat-pancakes-card.jpg",
        imgText: "buckwheat pancakes on plate",
        allergens: ["oats", "gluten", "eggs", "sugar", "dairy", "nuts"]
    },
    {
        name: "Fruit Compote",
        category: "Breakfast",
        a: "#fruitCompote",
        img: "fruit-compote-card.jpg",
        imgText: "berry fruit compote in glass bowl",
        allergens: ["oats", "gluten", "eggs", "sugar", "dairy", "nuts"]
    }
]

//data for ENTREES recipe cards
let entreeCardsData = [
    {
        name: "Spiralized Sweet Potato Mexican Casserole",
        category: "Entree",
        a: "#mexCasserole",
        img: "mex-casserole-card.jpg",
        imgText: "spiralized sweet potato Mexican casserole in pan",
        allergens: ["oats", "gluten", "eggs", "sugar", "dairy", "nuts"]
    },
    {
        name: "Turkey Chili",
        category: "Entree",
        a: "#turkeyChili",
        img: "chili-card.jpg",
        imgText: "turkey chili in bowl",
        allergens: ["oats", "gluten", "eggs", "sugar", "dairy", "nuts"]
    },
    {
        name: "Balsalmic Tenderloin",
        category: "Entree",
        a: "#balTenderloin",
        img: "pork-card.jpg",
        imgText: "cooked pork tenderloin",
        allergens: ["oats", "gluten", "eggs", "sugar", "dairy", "nuts"]
    },
    {
        name: "Butternut Squash &amp; Sweet Potato Soup",
        category: "Entree",
        a: "#squashSoup",
        img: "soup-card.jpg",
        imgText: "cup of butternut sqaush and sweet potato soup topped with turkey bacon",
        allergens: ["oats", "gluten", "eggs", "sugar", "dairy", "nuts"]
    }
]

//data for SNACKS/SIDES recipe cards
let snackCardsData = [
    {
        name: "Carrot Fries",
        category: "Snacks/Sides",
        a: "#carrot-fries",
        img: "carrot-fries-card.jpg",
        imgText: "plate of roasted carrot fries",
        allergens: ["oats", "gluten", "eggs", "sugar", "dairy", "nuts"]
    },
    {
        name: "Jicama Fries",
        category: "Snacks/Sides",
        a: "#jicamaFries",
        img: "jicama-card.jpg",
        imgText: "pile of jicama fries",
        allergens: ["oats", "gluten", "eggs", "sugar", "dairy", "nuts"]
    },
    {
        name: "Roasted Garbanzo Beans",
        category: "Snacks/Sides",
        a: "#garbanzo",
        img: "garbanzo-card.jpg",
        imgText: "plate of roasted garbanzo beans",
        allergens: ["oats", "gluten", "eggs", "sugar", "dairy"]
    },
    {
        name: "Hummus",
        category: "Snacks/Sides",
        a: "#hummus",
        img: "hummus-card.jpg",
        imgText: "bowl of homemade hummus",
        allergens: ["oats", "gluten", "eggs", "sugar", "dairy", "nuts"]
    }
]

//data for DESSERT recipe cards
let dessertCardsData = [
    {
        name: "Chocolate Muffins",
        category: "Dessert",
        a: "#chocoMuffins",
        img: "choco-muffin-card.jpg",
        imgText: "chocolate muffins in baking pan",
        allergens: ["oats", "gluten", "eggs", "sugar", "dairy", "nuts"]
    },
    {
        name: "Chocolate Ice Cream",
        category: "Dessert",
        a: "#chocoIceCream",
        img: "choco-ice-cream-card.jpg",
        imgText: "jar of chocolate ice cream",
        allergens: ["oats", "gluten", "eggs", "sugar", "dairy", "nuts"]
    },
    {
        name: "Brownie in a Mug",
        category: "Dessert",
        a: "#mugBrownie",
        img: "brownie-mug-card.jpg",
        imgText: "jar of chocolate ice cream",
        allergens: ["oats", "gluten", "eggs", "sugar", "dairy"]
    },
    {
        name: "Coconut Whipped Cream",
        category: "Dessert",
        a: "#coconutCream",
        img: "whip-cream-card.jpg",
        imgText: "coconut whipped cream in a glass bowl",
        allergens: ["oats", "gluten", "eggs", "sugar", "dairy", "nuts"]
    }
]

function displayRecipeCards() {
    let breakfastRecipes = document.querySelector('#breakfastCard');
    let entreeRecipes = document.querySelector('#entreeCard');
    let snackRecipes = document.querySelector('#snackCard');
    let dessertRecipes = document.querySelector('#dessertCard');
    
    if(breakfastRecipes) {
        for(let i=0; i< breakfastCardsData.length; i++) {
            breakfastRecipes.innerHTML = '';
            Object.values(breakfastCardsData).map( (item, index) => {
                breakfastRecipes.innerHTML +=
            `<div class="card mb-3" style="max-width: 540px;">
                <div class="row no-gutters">
                    <div class="col-4">
                        <a href="${item.a}">
                        <img src="${item.img}" class="card-img" alt="${item.imgText}"></a>
                    </div>
                    <div class="col-8">
                        <div class="card-body">
                        <a href="${item.a}">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="card-text"><i>${item.category}</i></p>
                        <p class="card-text"><small class="text-muted">Free of: ${item.allergens.join(', ')}</small></p>
                        </a>
                        </div>
                    </div>
                </div>
            </div>`
            });
        }
    }
    if(entreeRecipes) {
        for(let i=0; i< entreeCardsData.length; i++) {
            entreeRecipes.innerHTML = '';
            Object.values(entreeCardsData).map( (item, index) => {
                entreeRecipes.innerHTML +=
            `<div class="card mb-3" style="max-width: 540px;">
                <div class="row no-gutters">
                    <div class="col-4">
                        <a href="${item.a}">
                        <img src="${item.img}" class="card-img" alt="${item.imgText}"></a>
                    </div>
                    <div class="col-8">
                        <div class="card-body">
                        <a href="${item.a}">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="card-text"><i>${item.category}</i></p>
                        <p class="card-text"><small class="text-muted">Free of: ${item.allergens.join(', ')}</small></p>
                        </a>
                        </div>
                    </div>
                </div>
            </div>`
            });
        }
    }
    if(snackRecipes) {
        for(let i=0; i< snackCardsData.length; i++) {
            snackRecipes.innerHTML = '';
            Object.values(snackCardsData).map( (item, index) => {
                snackRecipes.innerHTML +=
            `<div class="card mb-3" style="max-width: 540px;">
                <div class="row no-gutters">
                    <div class="col-4">
                        <a href="${item.a}">
                        <img src="${item.img}" class="card-img" alt="${item.imgText}"></a>
                    </div>
                    <div class="col-8">
                        <div class="card-body">
                        <a href="${item.a}">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="card-text"><i>${item.category}</i></p>
                        <p class="card-text"><small class="text-muted">Free of: ${item.allergens.join(', ')}</small></p>
                        </a>
                        </div>
                    </div>
                </div>
            </div>`
            });
        }
    }
    if(dessertRecipes) {
        for(let i=0; i< dessertCardsData.length; i++) {
            dessertRecipes.innerHTML = '';
            Object.values(dessertCardsData).map( (item, index) => {
                dessertRecipes.innerHTML +=
            `<div class="card mb-3" style="max-width: 540px;">
                <div class="row no-gutters">
                    <div class="col-4">
                        <a href="${item.a}">
                        <img src="${item.img}" class="card-img" alt="${item.imgText}"></a>
                    </div>
                    <div class="col-8">
                        <div class="card-body">
                        <a href="${item.a}">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="card-text"><i>${item.category}</i></p>
                        <p class="card-text"><small class="text-muted">Free of: ${item.allergens.join(', ')}</small></p>
                        </a>
                        </div>
                    </div>
                </div>
            </div>`
            });
        }
    }
}

displayRecipeCards();

//SEARCH
document.getElementById("search").onsearch = function() {searchTool()};

function searchTool () {
    let oats = document.getElementById("oats").value;
    let gluten = $('#gluten').val();
    let eggs = $('#eggs').val();
    let sugar = $('#sugar').val();
    let dairy = $('#dairy').val();
    let nuts = $('#nuts').val();

    let output = [];

        for(let i = 0; i < breakfastCardsData.length; i++) {
            if(oats === true && breakfastCardsData.allergens.includes('oats')){
                output.push(i);
                console.log(ouput);
            }
        }
        for(let j = 0; j < entreeCardsData.length; i++) {
            if(oats === true && entreeCardsData.allergens.includes('oats')){
                output.push(j);
                console.log(ouput);
            }
        }
        for(let k = 0; k < snackCardsData.length; i++) {
            if(oats === true && snackCardsData.allergens.includes('oats')){
                output.push(k);
                console.log(ouput);
            }
        }
        for(let l = 0; l < dessertCardsData.length; i++) {
            if(oats === true && dessertCardsData.allergens.includes('oats')){
                output.push(l);
                console.log(ouput);
            }
        }
    }

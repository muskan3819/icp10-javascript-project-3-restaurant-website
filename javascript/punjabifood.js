// Punjabi menu items (English & Punjabi)
const menuItems = [
    { 
        name_en: "Amritsari Kulcha", 
        name_pa: "ਅਮ੍ਰਿਤਸਰੀ ਕੁਲਚਾ", 
        price: "₹120", 
        image: "https://www.cookingcarnival.com/wp-content/uploads/2016/02/Amritsari-Kulcha-2.jpg"
    },
    { 
        name_en: "Chole Bhature", 
        name_pa: "ਛੋਲੇ ਭਟੂਰੇ", 
        price: "₹100", 
        image: "https://images.squarespace-cdn.com/content/v1/5ec30182cff13b4331c5384d/1677207139729-KTC6G6TMQZ7CZ5HO4W8D/IMG_0182.jpeg"
    },
    { 
        name_en: "Makki di Roti & Sarson da Saag", 
        name_pa: "ਮੱਕੀ ਦੀ ਰੋਟੀ ਤੇ ਸਰਸੋਂ ਦਾ ਸਾਗ", 
        price: "₹150", 
        image: "https://www.travelmypakistan.com/wp-content/uploads/2015/07/Sarso-ka-ssag.jpg"
    },
    { 
        name_en: "Paneer Butter Masala", 
        name_pa: "ਪਨੀਰ ਬਟਰ ਮਸਾਲਾ", 
        price: "₹180", 
        image: "https://www.cubesnjuliennes.com/wp-content/uploads/2019/11/Paneer-Butter-Masala-Recipe-1.jpg"
    },
    { 
        name_en: "Lassi", 
        name_pa: "ਲੱਸਸੀ", 
        price: "₹60", 
        image: "https://www.whiskaffair.com/wp-content/uploads/2021/07/Kesar-Pista-Lassi-2-1-1200x1800.jpg"
    },
    { 
        name_en: "Gulab Jamun", 
        name_pa: "ਗੁਲਾਬ ਜਾਮੁਨ", 
        price: "₹80", 
        image: "https://img.freepik.com/premium-photo/gulab-jamun-gulabjamun-is-indian-sweet-served-bowl-as-pile-closeup-view_466689-89344.jpg?w=2000"
    }
];

const menuContainer = document.getElementById("menu");
const searchBox = document.getElementById("search");

function displayMenu(items) {
    menuContainer.innerHTML = "";
    items.forEach(item => {
        menuContainer.innerHTML += `
            <div class="menu-item">
                <img src="${item.image}" alt="${item.name_en}">
                <h2>${item.name_en} - ${item.name_pa}</h2>
                <p>${item.price}</p>
                <button class="buy-now">Buy Now</button>
            </div>
        `;
    });
}

// Display full menu initially
displayMenu(menuItems);

// Filter menu items on search
searchBox.addEventListener("keyup", () => {
    const searchText = searchBox.value.toLowerCase();
    const filteredItems = menuItems.filter(item => 
        item.name_en.toLowerCase().includes(searchText) || 
        item.name_pa.toLowerCase().includes(searchText)
    );
    displayMenu(filteredItems);
});

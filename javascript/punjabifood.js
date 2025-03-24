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
        image: "images/chole_bhature.jpg"
    },
    { 
        name_en: "Makki di Roti & Sarson da Saag", 
        name_pa: "ਮੱਕੀ ਦੀ ਰੋਟੀ ਤੇ ਸਰਸੋਂ ਦਾ ਸਾਗ", 
        price: "₹150", 
        image: "images/makki_roti_sarson_saag.jpg"
    },
    { 
        name_en: "Paneer Butter Masala", 
        name_pa: "ਪਨੀਰ ਬਟਰ ਮਸਾਲਾ", 
        price: "₹180", 
        image: "images/paneer_butter_masala.jpg"
    },
    { 
        name_en: "Lassi", 
        name_pa: "ਲੱਸਸੀ", 
        price: "₹60", 
        image: "images/lassi.jpg"
    },
    { 
        name_en: "Gulab Jamun", 
        name_pa: "ਗੁਲਾਬ ਜਾਮੁਨ", 
        price: "₹80", 
        image: "images/gulab_jamun.jpg"
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

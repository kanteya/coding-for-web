let musicItemsData = [
    {
        id: 1,
        img: "https://cdn.shopify.com/s/files/1/0468/5889/5516/products/click-rockAir_Jordan_1_Retro_High_Travis_Scott_Cactus_Jack-CD4487-100-1_1024x.png",
        title: "Air Jordan 1 (Cactus Jack)",
    },
    {
        id: 1,
        img: "https://www.williamjacket.com/wp-content/uploads/2023/01/kanye-west-red-jacket-style-1-front.webp",
        title: "Yeezy Gap Round Jacket",
    },
    {
        id: 1,
        img: "images/igor.png",
        title: "Cerulean IGOR Suit",
    },
    {
        id: 1,
        img: "images/cortez.png",
        title: "Nike Cortez Kenny 1",
    },
    {
        id: 1,
        img: "images/yeezy-gap.png",
        title: "Yeezy Gap Dove Hoodie",
    },

];

let music = document.getElementById("music");

let generateMusic = () => {
    const musicGrid = document.querySelector('.image-grid'); // Select the grid container
    musicGrid.innerHTML = musicItemsData.map((x) => {
        return `
        <div class="images">
            <img src="${x.img}">
            <div class="overlay">
                <div class="text">${x.title}</div>
            </div>
        </div>
        `;
    }).join("");
};

// Call the function to generate the grid
generateMusic();

let stickersItemsData = [
    {
        id: 1,
        img: "images/1.jpg",
        english: "Throwing litter in open or streets",
        hindi: "कूडा-करकट बाहर फेंकना"
    },
    {
        id: 2,
        img: "images/2.jpg",
        english: "Gambling",
        hindi: "जुआ खेलना"
    },
    {
        id: 3,
        img: "images/3.jpg",
        english: "To take law in hands",
        hindi: "तोड-फोड करना"
    },
    {
        id: 4,
        img: "images/4.jpg",
        english: "Playing with tools",
        hindi: "औजारों से खेलना"
    },
    {
        id: 5,
        img: "images/5.jpg",
        english: "Playing with electricity",
        hindi: "बिजली से खेलना"
    },
    {
        id: 6,
        img: "images/6.jpg",
        english: "Animal teasing",
        hindi: "जानवरोंके साथ छेडछाड करना"
    },
    {
        id: 7,
        img: "images/7.jpg",
        english: "Kite flying or playing on open roofs",
        hindi: "खुली छत पर खेलना व पतंग उड़ाना"
    },
    {
        id: 8,
        img: "images/8.jpg",
        english: "Playing on the road and travelling on foot board",
        hindi: "सड़क पर खेलना व बस में लटककर यात्रा करना"
    },
    {
        id: 9,
        img: "images/9.jpg",
        english: "Use of in hygenic and clean eatbles",
        hindi: "खुली और गन्दी चीजें खाना"
    },
    {
        id: 10,
        img: "images/10.jpg",
        english: "Quarelling",
        hindi: "झगड़ा करना"
    },
    {
        id: 11,
        img: "images/11.jpg",
        english: "Stealing",
        hindi: "चोरी करना"
    }
];

let stickers = document.getElementById("stickers");

let generateStickers = () => {
    return (stickers.innerHTML = stickersItemsData.map((x) => {
        return `
        <div class="image-box">
            <figure><img src=${x.img}>
            <figcaption> ${x.english}<br>${x.hindi}</figcaption>
            </figure>
        </div>
        `
    })
    .join(""));
};

generateStickers();
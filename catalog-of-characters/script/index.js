const root = document.getElementById("root")
const wrapper = document.getElementById("list");
const button = document.getElementById("button");
const pending = document.getElementById("pending")
const grayWindow = document.getElementById("gray-window");
const search = document.getElementById("search");

const addElements = (parent, ...children) => {
    children.forEach(e => parent.appendChild(e))
}

async function preloadImg () {
    pictures.forEach((e) => {
        const img = new Image();
        img.src = e;
    })
}

const searchByName = (input) => {
    characters.forEach(({character, element}) => {
        if (!character.name.toUpperCase().includes(input.toUpperCase())) {
            element.style.display = "none";
            return false;
        }
        element.style.display = "block";
        return true;
    })
}

const openModal = ({id, title, vision, description, rarity, gender, weapon, nation}) => {
    document.body.style.overflow = 'hidden';

    grayWindow.style.display = "block";
    grayWindow.addEventListener("click", () => closeModal(modal));

    const modal = document.createElement("div");
    modal.classList.add("modal-block");

    const img = document.createElement("img");
    img.src = `https://genshin.jmp.blue/characters/${id.toLowerCase()}/card`;
    img.addEventListener("error", () => img.src = "assets/error.jpg")

    const divImg = document.createElement("div");
    divImg.appendChild(img);

    const info = document.createElement("div");
    info.classList.add("info");

    const titleText = document.createElement("h1")
    titleText.innerText = !id.includes("traveler") ? title : `Traveler (${vision})`;
    const descriptionText = document.createElement("h2");
    descriptionText.innerText = description;
    const statistics = document.createElement("div");
    statistics.innerHTML = `Gender: ${gender}<br>Weapon: ${weapon}<br>Rarity: ${rarity} stars<br>Element: ${vision}<br>City: ${nation}`;

    const imagesInfo = document.createElement("div");
    const imgEl = document.createElement("img");
    imgEl.src = `https://genshin.jmp.blue/elements/${vision.toLowerCase()}/icon`;
    imagesInfo.appendChild(imgEl);
    imagesInfo.classList.add("images");
    for (let i = 1; i <= rarity; i++) {
        const imgInfo = document.createElement("img")
        imgInfo.src = "assets/star.png";

        imagesInfo.appendChild(imgInfo);
    }

    addElements(info, titleText, descriptionText, statistics);
    addElements(modal, divImg, info, imagesInfo)
    wrapper.appendChild(modal);
}

const closeModal = (modal) => {
    document.getElementById("gray-window").style.display = "none";
    document.body.style.overflow = 'auto';
    modal.remove();
}

async function fetchAPI () {
    let response = await fetch("https://genshin.jmp.blue/characters");
    let characters = await response.json();

    return characters;
}

async function getParametrs(name) {
    let response = await fetch(`https://genshin.jmp.blue/characters/${name}`);
    let character = await response.json();

    return character;
}

const names = await fetchAPI();
const pictures = [];
const characters = [];

const promisesOfCharacters = names.map((e) => {
    pictures.push(`https://genshin.jmp.blue/characters/${e}/card`, `https://genshin.jmp.blue/characters/${e}/icon-big`);
    
    return getParametrs(e)
});

const renewedList = await Promise.all(promisesOfCharacters);

await preloadImg();

renewedList.forEach((character) => {
    const id = character.id.toLowerCase();
    
    const div = document.createElement("div");
    div.classList.add("character")
    div.addEventListener("click", () => openModal(character))
    
    const imgEl = document.createElement("img")
    imgEl.src = `https://genshin.jmp.blue/characters/${id}/icon-big`;
    imgEl.style.backgroundColor = character.rarity === 5 ? "rgb(200,124,36" : "rgb(148,112,187)";
    //imgEl.onload = () => imgEl.style.background = "gray";
    
    const headLine = document.createElement("h2");
    headLine.textContent = `${!character.id.includes("traveler") ? character.name : `Traveler (${character.vision})`}`;
    headLine.classList.add("name");
    
    addElements(div, imgEl, headLine);
    wrapper.appendChild(div); 
    
    characters.push({character, element: div});
})

pending.style.display = "none";
root.style.display = "grid";


search.addEventListener("input", (input) => searchByName(input.target.value));







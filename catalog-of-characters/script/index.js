const wrapper = document.getElementById("root");
const button = document.getElementById("button");
const pending = document.getElementById("pending")
const grayWindow = document.getElementById("gray-window");

const addElements = (parent, ...children) => {
    children.forEach(e => parent.appendChild(e))
}

const openModal = ({id, title, vision, description, rarity, gender, weapon, nation}) => {
    grayWindow.style.display = "block";
    document.body.style.overflow = 'hidden';
    grayWindow.addEventListener("click", () => closeModal(modal));

    const modal = document.createElement("div");
    modal.classList.add("modal-block");

    const divImg = document.createElement("div");
    const img = document.createElement("img");
    img.src = `https://genshin.jmp.blue/characters/${id}/card`;
    img.addEventListener("error", () => img.src = "https://i.pinimg.com/564x/c5/0b/7b/c50b7be4d3a21f765097ca12147ed5f4.jpg")
    divImg.appendChild(img);

    const info = document.createElement("div");
    info.classList.add("info");
    const titleText = document.createElement("h1")
    titleText.innerText = !id.includes("traveler") ? title : `Traveler (${vision})`;
    const descriptionText = document.createElement("h2");
    descriptionText.innerText = description;
    const statistics = document.createElement("div");
    statistics.innerHTML = `Gender: ${gender}<br>Weapon: ${weapon}<br>Rarity: ${rarity} stars<br>Element: ${vision}<br>City: ${nation}`;

    addElements(info, titleText, descriptionText, statistics);
    addElements(modal, divImg, info)
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

const characters = await fetchAPI();
let status = "downloading";

for (const c of characters) {
    const character = await getParametrs(c);

    const div = document.createElement("div");
    div.classList.add("character")
    div.addEventListener("click", () => openModal(character))
    
    const imgEl = document.createElement("img")
    imgEl.src = `https://genshin.jmp.blue/characters/${c}/icon-big`;

    const headLine = document.createElement("h2");
    headLine.textContent = `${!character.id.includes("traveler") ? character.name : `Traveler (${character.vision})`}`;
    headLine.classList.add("name");
    
    addElements(div, imgEl, headLine);
    wrapper.appendChild(div);
}

pending.style.display = "none";
wrapper.style.display = "grid";






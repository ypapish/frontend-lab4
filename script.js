const fourth_el = document.getElementById("fourth_el");
const fifth_el = document.querySelector("#fifth_el");
let fourth_el_clicked = false;
let fifth_el_clicked = false;

fourth_el.addEventListener("click", () => {
    if (fourth_el_clicked == false) {
    fourth_el.style.backgroundColor = "pink";
    fourth_el.style.color = "grey";
    fourth_el_clicked = true;
}
    else {
    fourth_el.style.backgroundColor = "lightblue";
    fourth_el.style.color = "white";
    fourth_el_clicked = false;
}
})
fifth_el.addEventListener("click", () => {
    if (fifth_el_clicked == false) {
    fifth_el.style.backgroundColor = "green";
    fifth_el.style.color = "white";
    fifth_el_clicked = true;
}
    else {
    fifth_el.style.backgroundColor = "yellow";
    fifth_el.style.color = "red";
    fifth_el_clicked = false;
}});

const container = document.getElementById("image-container");
const addBtn = document.getElementById("add-btn");
const increaseBtn = document.getElementById("increase-btn");
const decreaseBtn = document.getElementById("decrease-btn");
const removeBtn = document.getElementById("remove-btn");

addBtn.addEventListener("click", () => {
    const img = document.createElement("img");
    img.src = "https://tripmydream.cc/travelhub/travel/region/27/6/276.jpg";
    img.width = 500;
    container.appendChild(img);
});

increaseBtn.addEventListener("click", () => {
const images = container.getElementsByTagName("img");
const lastImg = images[images.length - 1];
if (lastImg) {
    lastImg.width += 50;
}});

decreaseBtn.addEventListener("click", () => {
    const images = container.getElementsByTagName("img");
    const lastImg = images[images.length - 1];
    if (lastImg && lastImg.width > 50) lastImg.width -= 50;
});

removeBtn.addEventListener("click", () => {
    const images = container.getElementsByTagName("img");
    const lastImg = images[images.length - 1];
    if (lastImg) lastImg.remove()});


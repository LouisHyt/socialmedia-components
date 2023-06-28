const body = document.querySelector("body")
const cards = document.querySelectorAll(".card")

let settings = JSON.parse(localStorage.getItem("itemsActive")) || []

for(const item of settings){
    let elem = document.querySelector(`.${item}`);
    elem.classList.add("active");
}


for(const card of cards){
    card.addEventListener("click", e => {
        card.classList.toggle("active");

        if(card.classList.contains("active")){
            settings.push(card.classList[0]);
            console.log(settings);
        } else {
            settings = settings.filter(elem => elem !== card.classList[0]);
            console.log(settings);
        }
        localStorage.setItem("itemsActive", JSON.stringify(settings));

        if(settings.length == 0){
            body.style.backgroundColor = "";
        } else {
            const lastActive = document.querySelector(`.${settings[settings.length - 1]}`)
            body.style.backgroundColor = lastActive.getAttribute("data-bgColor");
        }
    })
}
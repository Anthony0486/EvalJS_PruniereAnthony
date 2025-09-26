//EX 1 API METEO

const cardMeteo = document.querySelector(".cardMeteo");
const button = document.querySelector("button");

const info = document.createElement("div");
info.setAttribute("style", "height : 300px; width : 200px; marginTop : 16px; marginBottom : 16px; border : solid, 3px, grey ; padding : 16px 12px 12px 24px")
cardMeteo.appendChild(info);
cardMeteo.insertBefore(info, button);
console.log(cardMeteo);

function addInfo(text) {
    info.textContent = text;
};

function bouton (){
    button.classList.add("button__cardMeteo");
};

button.addEventListener ("mousedown", () =>{
    button.setAttribute("style", "background : orange");

});
window.addEventListener("mouseup", () =>{
    button.removeAttribute("style", "background : orange");
});

async function getMeteoJson(){
    return await fetch("https://prevision-meteo.ch/services/json/toulouse")
    .then(response => {
        return response.json();
});
};

button.addEventListener("click", () => {
    getMeteoJson().then(json =>{
        console.log(json);
        console.log(json.current_condition.condition);
        console.log(json.current_condition.tmp);
        console.log(json.fcst_day_0.tmax);
        console.log(json.fcst_day_0.tmin);
        addInfo(
            `Condition actuelle : ${json.current_condition.condition}`
            `Température actuelle : ${json.current_condition.tmp}`
            `Température maximum du jour  : ${json.fcst_day_0.tmax}`
            `Température minimum du jour: ${json.fcst_day_0.tmin}`
        );
    });
});


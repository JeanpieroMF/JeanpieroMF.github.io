const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

const salirads1 = document.querySelector(".poner-ads1");
const ads1 = document.querySelector(".ads1");
const sinads1 = document.querySelector(".poner-sinads1");


abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})
cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

salirads1.addEventListener("click", () => {
    ads1.classList.add("hiden");
}) 
sinads1.addEventListener("click", () => {
    ads1.classList.remove("hiden");
}) 





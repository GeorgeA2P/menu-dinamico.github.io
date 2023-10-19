//#region variables
const uncollapsedC = document.querySelector(".uncollapsed-C");
const cuentas = document.querySelector(".cuentas");
const uncollapsedT = document.querySelector(".uncollapsed-T");
const tarjetas = document.querySelector(".tarjetas");
const uncollapsedP = document.querySelector(".uncollapsed-P");
const prestamos = document.querySelector(".prestamos");
const uncollapsedI = document.querySelector(".uncollapsed-I");
const inversiones = document.querySelector(".inversiones");
const uncollapsedS = document.querySelector(".uncollapsed-S");
const seguros = document.querySelector(".seguros");
const about = document.querySelector(".about");
const about_active = document.querySelector(".about_active");
let flag = false;
//#endregion

const showSubMenu = (show, submenu)=>{

    show.addEventListener("mouseenter",()=>{

        flag = true;
        submenu.classList.add("active");
        
        if(submenu.classList.contains("active")){

            submenu.addEventListener("mouseleave",()=>{
             
                submenu.classList.remove("active");
            })
        }

        else{
            show.addEventListener("mouseleave",()=>{       
                submenu.classList.remove("active");
            })
        }
    })
};

showSubMenu(uncollapsedC, cuentas);
showSubMenu(uncollapsedI, inversiones);
showSubMenu(uncollapsedT, tarjetas);
showSubMenu(uncollapsedP, prestamos);
showSubMenu(uncollapsedS, seguros);
showSubMenu(about_active, about);


const p = ()=>{
    window.addEventListener("click",(e)=>{
        console.log(e)
    })
}
p();
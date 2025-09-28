let radBtns = document.querySelectorAll(".rad-button")

radBtns.forEach(radbtn => {
    radbtn.parentElement.lastElementChild.classList.add("hidden-part")
    radbtn.onclick = () => {
        radbtn.classList.toggle("show")
        radbtn.parentElement.lastElementChild.classList.toggle("hidden-part")
    }
})
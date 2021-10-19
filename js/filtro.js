// Por el momento el filtro solo funciona en minuscula

//========================BUSCAR========================//

export default function searchFilter(input, selector){
    document.addEventListener("keyup", (e) => {
        if(e.target.matches(input)){

            document.querySelectorAll(selector).forEach((el) =>
            el.textContent.toLowerCase().includes(e.target.value)
            ?el.classList.remove("filter")
            :el.classList.add("filter")
            );
        }                                           
    })
}
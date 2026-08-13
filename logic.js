const inputSearch = document.getElementById("inputSearch");
const ramalListDefault = document.querySelectorAll(".ramalListDefault");
const ramalListFirst = document.querySelector(".ramalListFirst");
const ramalListLast = document.querySelector(".ramalListLast");
const searchCounterReturn = document.getElementById("searchCounterReturn");
const container_ramalNotFaund = document.getElementById("container_ramalNotFaund");
const sectorNameResponsive = document.querySelectorAll(".sectorNameResponsive");
const container_Father = document.getElementById("container_Father");
const windowsBrowserDimension = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth; /*Captura a largura da janela do usuário*/


const ramalAll = [ ...ramalListDefault , ramalListFirst , ramalListLast]; /*Esse array armazena todas as estruturas do HTML referente aos ramais*/



document.addEventListener("DOMContentLoaded", () => { /* Função responsável pela responsividade de determinados ramais para Mobile */
    if(windowsBrowserDimension <= 500) {
        sectorNameResponsive[0].classList.add("sectorNameResponsiveMobile");
        sectorNameResponsive[1].classList.add("sectorNameResponsiveMobile");
        sectorNameResponsive[2].classList.add("sectorNameResponsiveMobile");
    } 
  }
);


function normalizeInput(input) { /* Função responsável por retirar os caracteres especiais inputados na barra de pesquisa */
    return input.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
};


inputSearch.addEventListener("input", () => { /*Função responsável por tratar o input da barra de pesquisa e comparar com a lista de ramais existente, em seguida retorna quando encontrado */
    const search = normalizeInput(inputSearch.value); 
    let searchCounterIncrement = 0;  
         ramalAll.forEach(contact => { 
            const htmlForText = normalizeInput(contact.textContent);
            if (htmlForText.includes(search)) { 
                    contact.style.display = "";  /* O campo está em branco para não influênciar no layaut dos elementos que contêm Flex-Box*/
                    contact.classList.add("ramalListReturned");
                    searchCounterIncrement++;                               
            }else { 
                    contact.style.display = "none"; 
            } 
        } 
     ); 
     searchCounterReturn.innerHTML = `${searchCounterIncrement} Ramais Encontrados`; /*Parte responsável por retornar a quantidade de ramais*/
            if(searchCounterIncrement == 1 ) {
                     searchCounterReturn.innerHTML =`${searchCounterIncrement} Ramal Encontrado`;

            }else if(searchCounterIncrement == 0) {
                    container_ramalNotFaund.style.display = "block";

            }else {
                container_ramalNotFaund.style.display = "none";
            }

});


inputSearch.addEventListener("input", () => { /*Função responsável por remover o layaut especial das agendas pesquisadas para a padrão após pesquisa */
    const search = normalizeInput(inputSearch.value);

    if (search === "") {
        ramalAll.forEach(contact => {
            contact.style.display = "";
            contact.classList.remove("ramalListReturned");
            
        });
        return;
    }
});  






const inputSearch = document.getElementById("inputSearch");
const ramalListDefault = document.querySelectorAll(".ramalListDefault");
const ramalListFirst = document.querySelector(".ramalListFirst");
const ramalListLast = document.querySelector(".ramalListLast");
const searchCounterReturn = document.getElementById("searchCounterReturn");


const ramalAll = [ ...ramalListDefault , ramalListFirst , ramalListLast]; /*Esse array armazena todas as estruturas do HTML referente aos ramais*/


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
})





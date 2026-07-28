
const inputSearch = document.getElementById("inputSearch");
const ramalListDefault = document.querySelectorAll(".ramalListDefault");
const ramalListFirst = document.querySelector(".ramalListFirst");
const ramalListLast = document.querySelector(".ramalListLast");

const ramalAll = [ ...ramalListDefault , ramalListFirst , ramalListLast]; /*Esse array armazena todas as estruturas do HTML referente aos ramais*/



function normalizeInput(input) { /* Função responsável por retirar os caracteres especiais inputados na barra de pesquisa */
    return input.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
};


inputSearch.addEventListener("input", () => { 
    const search = normalizeInput(inputSearch.value); 
         ramalAll.forEach(contact => { 
            const htmlForText = normalizeInput(contact.textContent);
            if (htmlForText.includes(search)) { 
              contact.style.display = "";  /* O campo está em branco para não influênciar no layaut dos elementos que contêm Flex-Box*/
              contact.style.class.add
            } else { 
              contact.style.display = "none"; 
            } 
        } 
     );  
  });
    




const inputSearch = document.getElementById("inputSearch");
const ramalListDefault = document.querySelectorAll(".ramalListDefault");
const ramalListFirst = document.querySelector(".ramalListFirst");
const ramalListLast = document.querySelector(".ramalListLast");

const ramalAll = [ ...ramalListDefault , ramalListFirst , ramalListLast]; /*Esse array armazena todas as estruturas do HTML referente aos ramais*/

console.log(ramalAll);

inputSearch.addEventListener("input", () => { 
    const search = inputSearch.value.toLowerCase(); 
         ramalAll.forEach(contato => { 
            const texto = contato.textContent.toLowerCase();
            if (texto.includes(search)) { 
              contato.style.display = ""; /* o campo está em branco para não influênciar no layaut dos elementos que contêm Flex-Box*/
            } else { 
              contato.style.display = "none"; 
            } 
        } 
     );  
  });
    



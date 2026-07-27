const searchInput = document.getElementById("search");
const emptyMessage = document.getElementById("emptyMessage");
const ramalList = document.querySelector(".ramalList");
const inputSearch = document.getElementById("inputSearch");
const ramalListDefault = document.querySelectorAll(".ramalListDefault");
const ramalListFirst = document.querySelector(".ramalListFirst");
const ramalListLast = document.querySelector(".ramalListLast");

const search = inputSearch.value; /* Contante que armazena o valor realizado na barra de pesquisa de ramais */


inputSearch.addEventListener("input", () => { 
    const search = inputSearch.value.toLowerCase(); 
         ramalListDefault.forEach(contato => { 
            const texto = contato.textContent.toLowerCase();
            if (texto.includes(search)) { 
              contato.style.display = "block"; 
            } else { 
              contato.style.display = "none"; 
            } 
        } 
     );  
  });
    



//console.log(ramalListDefault, inputSearch);

/*function  mouseColorListRamalEnable() { Funcionalidade substituida pelo Hover no CSS
  ramalList.style.backgroundColor = "#E9F0FF";
};

function  mouseColorListRamalDisable() {
  ramalList.style.backgroundColor = "#ffffff";
};
*/
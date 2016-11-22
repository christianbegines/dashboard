function addMenu(idLista,idItem){
    if(document.getElementById(idLista).classList.contains("visible")){
        document.getElementById(idLista).className="vertical-menu__item-container-1 invisible";
        document.getElementById(idItem).className="vertical-menu-container--icono_close";
        
    }else{
        document.getElementById(idLista).className="vertical-menu__item-container-1 visible";
        document.getElementById(idItem).className="vertical-menu-container--icono_open";

    }
}
function toggleVisibilityMenu() { 
    var elements = document.getElementsByClassName("vertical-menu__item-0"); 
    for (var i = 0; i < elements.length; i++) { 
        if (elements[i].className.indexOf("vertical-menu__item-0--visible") >= 1) { 
            elements[i].className = "vertical-menu__item-0 vertical-menu__item-0--hide";
            
        } else { 
            elements[i].className = "vertical-menu__item-0 vertical-menu__item-0--visible";
            
        
        } 
    } 
}



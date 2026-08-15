// atribuindo icone Hamburger Menu
const icoHamburgerMenu = document.getElementById('menu');
// atribuindo o sideBar
const sidebar = document.getElementById('sidebar');
// atribuindo o icone fechar do sidebar
const iClose = document.getElementById('close');
// atribuindo ao elementos do sidBar
const selectionsMyMenu = document.querySelectorAll('.my-selection-menu') 

// função úncia para ser exportada
function listingHeader(){

    // função para mostrar o sideBar 
    icoHamburgerMenu.addEventListener('click', () =>{
                
        sidebar.classList.toggle('show-sidebar');
    })

    // função para fechar o sider
    iClose.addEventListener('click', () =>{
        
        sidebar.classList.toggle('show-sidebar');
    })

    // itens do menu
    selectionsMyMenu.forEach(element => {
        element.addEventListener('click', () => {
            sidebar.classList.remove('show-sidebar')
        })
    });

}

export { listingHeader };
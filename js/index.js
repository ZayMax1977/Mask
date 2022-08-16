function show_menu(){
    
    let menu = document.getElementsByClassName('menu');
    if (menu[0].style.display !== 'block'){
        menu[0].style.display = 'block';
    }else{
        menu[0].style.display = 'none';
    }
    
}
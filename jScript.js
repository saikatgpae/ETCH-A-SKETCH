//console.log('Hello World!')
function grid(){
    //taking the input to create the grid and storing the input
    var grid_number = parseInt(prompt('Please enter the grid matrix between 1-100'));
    document.getElementById('grid-view').innerHTML = 'New Grid '+grid_number+'*'+grid_number;
    //removing all child node inside the main div
    const element = document.querySelector(".main");
    while(element.firstChild){element.removeChild(element.firstChild)};

    //creating the new grid using the input
    const frag = document.createDocumentFragment();
    for(let i = 1; i<=grid_number*grid_number; i++){
        const grid_div_attr = document.createAttribute('class');
        grid_div_attr.value = 'new-grid';
        const grid_div = document.createElement('div');
        frag.appendChild(grid_div).setAttributeNode(grid_div_attr);   
    }
    document.querySelector('.main').appendChild(frag);

    //fixing the height and width of the grid using the user input
    var new_grid = document.querySelectorAll('.new-grid');
    var x=960/grid_number;
    Array.from(new_grid).forEach(v => v.style.width = x+'px');
    Array.from(new_grid).forEach(v => v.style.height = x+'px');
    
    //adding the adevenlisner method to function the mouse hover to trail through the grid 
    let grid_new = document.querySelectorAll('.new-grid');
    Array.from(grid_new).forEach(v => v.addEventListener('mouseover', ()=>{
        v.style.background = 'black';
    }))
}

document.addEventListener('DOMContentLoaded', ()=>{
    
    /*// creating the main div with class name main
    const main = document.createAttribute('class');
    main.value = "main";
    const main_div = document.createElement('div');
    document.body.appendChild(main_div).setAttributeNode(main);
    */
    
    //creating the grid container with class name grid-container
    const att = document.createAttribute("class");
    att.value = "grid-container";
    const div = document.createElement('div');
    document.querySelector('.main').appendChild(div).setAttributeNode(att);
    
    // creating 16*16 256 div inside the div of class grid-container
    const frag = document.createDocumentFragment();
    for(let i = 1; i<=256; i++){
        const grid_div_attr = document.createAttribute('class');
        grid_div_attr.value = 'grid-div';
        const grid_div = document.createElement('div');
        frag.appendChild(grid_div).setAttributeNode(grid_div_attr)
    }
    document.querySelector('.grid-container').appendChild(frag);

    //adding the adevenlisner method to function the mouse hover to trail through the grid 
    var grid = document.querySelectorAll('.grid-div');
    Array.from(grid).forEach(v => v.addEventListener('mouseover', ()=>{
        v.style.background = 'black';
    }))
    //var arr = Array.from(grid);
    //console.log(arr.length);
    
})

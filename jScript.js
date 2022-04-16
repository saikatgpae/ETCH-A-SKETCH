//console.log('Hello World!')
function grid(){
    grid_number = parseInt(prompt('Please enter the grid matrix between 1-100'))
}

document.addEventListener('DOMContentLoaded', ()=>{
    
    // creating the main div with class name main
    const main = document.createAttribute('class');
    main.value = "main";
    const main_div = document.createElement('div');
    document.body.appendChild(main_div).setAttributeNode(main);
    
    //creating the grid container with class name grid-container
    const att = document.createAttribute("class");
    att.value = "grid-container";
    const div = document.createElement('div');
    document.querySelector('.main').appendChild(div).setAttributeNode(att);
    
    // creating 16*16 256 div inside the div of class grid-container
    for(let i = 1; i<=256; i++){
        const grid_div_attr = document.createAttribute('class');
        grid_div_attr.value = 'grid-div';
        const grid_div = document.createElement('div');
        document.querySelector('.grid-container').appendChild(grid_div).setAttributeNode(grid_div_attr)
    }

    //adding the adevenlisner method to function the mouse hover to trail through the grid 
    var grid = document.querySelectorAll('.grid-div');
    Array.from(grid).forEach(v => v.addEventListener('mouseover', ()=>{
        v.style.background = 'black';
    }))
    //var arr = Array.from(grid);
    //console.log(arr.length);
})

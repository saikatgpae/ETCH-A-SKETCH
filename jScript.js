console.log('Hello World!')

document.addEventListener('DOMContentLoaded', ()=>{
    
    const div = document.createElement('div');
    document.body.appendChild(div);
    const att = document.createAttribute("class");
    att.value = "container";
    document.getElementsByTagName("div")[0].setAttributeNode(att);
})

var para = document.querySelector('.container');
var cell;

// for (let i=0;i<16;i++){
//     var divElement = document.createElement('div');
//     divElement.setAttribute("id",i)
//     para.appendChild(divElement); 
//     //para.style.gridTemplateColumns = "auto auto auto auto";
//     // para.style.gridTemplateRows = "repeat(16, 10%)";
//     divElement.setAttribute("class","effect")
//     divElement.addEventListener('mouseenter', function(e){
//         e.target.style.backgroundColor= 'green';
//      })
// }

makeGrid(15);

function makeGrid(rows){
    para.style.setProperty('--grid-rows', rows)
    para.style.setProperty('--grid-cols', rows)
    for(let c=0; c<(rows*rows);c++) {
        cell = document.createElement('div');
        para.appendChild(cell).className = "grid-item";
        blackHover();
    }
}

function blackHover (){
    cell.addEventListener('mouseenter', function(e){
            e.target.style.backgroundColor= 'black';
          })
        }

var Gridsize = document.getElementById('resize');
Gridsize.addEventListener("click",function(){
    let gridSize = prompt('Enter a value from 1 to 64 ');
    removeChild(para);
    if(gridSize<65){
        makeGrid(gridSize);
    }else{
        alert('Enter a value less than 65')
        makeGrid(15);
    }
    
});

var Reset = document.getElementById('reset');
Reset.addEventListener("click",function (){
    removeChild(para);
    makeGrid(15) ;
});;

function removeChild (parent){
    while(parent.firstChild){
        parent.removeChild(para.firstChild);
    }
}

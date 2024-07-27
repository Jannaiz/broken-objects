

/*This is also for the hovering, refactor hovering later for css*/
function showHuman(seat,hover) {
    let human = null;
    if(hover) human = document.getElementById('human'+seat+'Hover');
    else human = document.getElementById('human'+seat);
    human.style.display = "block";
}

function hideHuman(seat,hover) {
    let human = null;
    if(hover) human = document.getElementById('human'+seat+'Hover');
    else human = document.getElementById('human'+seat);
    human.style.display = "none";
}
for (let index = 1; index < 5; index++) {

    let button = document.getElementById('button'+index);
    button.addEventListener('click', function() {
        showHuman(index,false);
    });  

    button.addEventListener('mouseover', function(){
        showHuman(index,true);
    });

    button.addEventListener('mouseleave', function(){
        hideHuman(index,true);
    });

}
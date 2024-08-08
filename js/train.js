const empty = 0; const E = 0;
const LL = 1;
const LR = 2;
const RL = 3;
const RR = 4;

const operation = [[E,  LL, LR, RL, RR  ],
                   [LL, RR, E,  -1, -1  ],
                   [LR, E,  -1, -1, -1  ],
                   [RL, -1, -1, -1, E   ],
                   [RR, -1,  -1, E,  LL  ]];

let full_operations = operation;
let table = [[-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1]];

function calculate_state(current_state, new_state){
    let result = full_operations[current_state][new_state];
    if(result == -1){
        let avalable = [LL,LR,RL,RR];
        console.log("lloking at "+current_state+" "+new_state);
        for (let index = 0; index < avalable.length; index++) {
            const element = avalable[index];
            let found = false;
            console.log("checkking for "+element);
            for (let i = 0; i < 5 && !found; i++) {
                if(element == full_operations[i][new_state] ){
                     found = true;
                     console.log("found at "+i+" "+new_state);
                }else if(element == full_operations[current_state][i]){
                    found = true;
                    console.log("found at "+current_state+" "+i);

                }
                
            }
            if(!found){
                console.log("yess");
                full_operations[current_state][new_state] = element;
                full_operations[new_state][current_state] = element;

                return element;
            }
            console.log("not avaalane");
        }
        //console.log("ERROR");

        return E
        
    }

    return result;
}

function updateTable(row, col, state){

}

let state = E;
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

function changeState(new_state){

    if(state != E) hideHuman(state, false);
    

    state = calculate_state(state, new_state);

    if(state != E) showHuman(state, false);
}

for (let index = 1; index < 5; index++) {

    let button = document.getElementById('button'+index);
    button.addEventListener('click', function() {
        // if(seatedHuman != -1)hideHuman(seatedHuman,false);
        // seatedHuman = index;
        // showHuman(index,false);
        changeState(index);
    });  

    button.addEventListener('mouseover', function(){
        showHuman(index,true);
    });

    button.addEventListener('mouseleave', function(){
        hideHuman(index,true);
    });

}
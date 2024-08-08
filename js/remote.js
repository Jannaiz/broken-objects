let tableRowStyle = 0;

function addListItem(channel1, channel2, result) {
    // Create a new <li> element
    const row = document.createElement('tr');
    const element = [];
    for (let index = 0; index < 3; index++) {
        element[index] = document.createElement('td');
        
    }
    element[2].setAttribute('scope','row')
    element[0].textContent = channel1;
    element[1].textContent = channel2;
    element[2].textContent = result;
    // Set the text content of the row item
    if(tableRowStyle%2 == 1)row.setAttribute('class','table-primary')
    tableRowStyle++; // make the row style alternate

    element.forEach(e => {
        row.appendChild(e)
    });

    // Append the row item to the tbody element
    document.getElementById('history').childNodes.forEach(c =>{
        if(c.nodeName == "TBODY"){
            c.appendChild(row);
        }
    });
    if(channel2 == 1){
        document.getElementById('history-ones').childNodes.forEach(c =>{
            if(c.nodeName == "TBODY"){
                c.appendChild(row.cloneNode(true));
            }
        });
    }
}

let channelContent = ["https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExaDlsaW94dGRjdHhhOXhlZ3gydzlnZWdid3dpOWg2bm8yZXQ1NmcyNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YTDZakyAorkLDYqN0q/giphy.gif",
    "https://media4.giphy.com/media/XhT868oxljs88/giphy.gif?cid=6c09b952v8loihgz7aa8lqol4spftof6i560ldxt9t7lcvma&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g",
    "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHMxaHZxN3dlZXRwYmI0ZTB6OXF1amVycjk4dzlhM2ptdzByODc5ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/H6KB7Tqy3OlOM/giphy.gif",
    "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWhoM2dwN2M4dmZoeDB4NWt0ZHV1ZXo2M2p3ZmdyNWkzZjZyZWVzbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qC5abwZ54KV6U/giphy.gif",
    "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGc3bWRoc2k5Z2p6ZnBoamcycGk3NXk1amU2ZWF6ajNjZ3pwaGFwayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Sb7WSbjHFNIL6/giphy.gif"
];

function changeChannel(channel, tv){
    document.getElementById('TV'+tv+'-content').src = channelContent[channel%5];
    document.getElementById('channel_number-tv'+tv).innerText = "Channel # "+channel;
}

let current_channel = 1;

for(let tv = 1; tv <= 2; tv++){
    for (let index = 1; index < 6; index++) {
        document.getElementById('button'+index+"-tv"+tv).addEventListener('click', function() {
            let old_channel = current_channel;
            current_channel = (current_channel  +index)%5 ;
            if(current_channel == 0) current_channel = 5;
            changeChannel(current_channel, tv);
            if(tv == 1)addListItem(old_channel, index, current_channel);
        });  
    }
    
}



const clockHand = document.getElementById('clockHand');
        const clock = document.querySelector('.clock');
        let isDragging = false;

        function getAngle(x, y) {
            const rect = clock.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const deltaX = x - centerX;
            const deltaY = y - centerY;
            let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI) + 90;
            if (angle < 0) angle += 360;
            return angle;
        }

        clockHand.addEventListener('mousedown', (e) => {
            isDragging = true;
        });

        document.addEventListener('mousemove', (e) => {
            if (isDragging) {
                const angle = getAngle(e.clientX, e.clientY);
                clockHand.style.transform = `rotate(${angle}deg)`;
            }
        });

        document.addEventListener('mouseup', () => {
            isDragging = false;
        });

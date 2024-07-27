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
}



let current_channel = 1;
for (let index = 1; index < 6; index++) {
    document.getElementById('button'+index).addEventListener('click', function() {
        let old_channel = current_channel;
        current_channel = (current_channel  +index)%5 ;
        if(current_channel == 0) current_channel = 5;
        document.getElementById('channel_number').innerText = "Channel # "+current_channel;
        addListItem(old_channel, index, current_channel);
    });  
}
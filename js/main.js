document.getElementById('alertButton').addEventListener('click', function() {
    alert('Button was clicked!');
});
let current_channel = 1;
for (let index = 1; index < 6; index++) {
    document.getElementById('button'+index).addEventListener('click', function() {
        current_channel = (current_channel  +index)%5 ;
        if(current_channel == 0) current_channel = 5;
        document.getElementById('channel_number').innerText = "Channel # "+current_channel;
    });  
}
// Code your solutions in this file


function writeCards(name, event) {
        let thanks = []
    for(let i=0; i < name.length; i++) {
        
        thanks.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
    }
    return thanks;
}


// function countDown(num){
//     for (var i = num.length -1; i >= 0; i--) {
//         console.log(num[i]) 
//     }

// }

function countDown(num){
    while (num > 0) {
        console.log(num); 
        num -= 1;
    }
    console.log(num);
}
function reloj (){
    let time = new Date();

    // TIME
    document.getElementById('hours').innerHTML = time.getHours();
    document.getElementById('minutes').innerHTML = time.getMinutes();
    document.getElementById('seconds').innerHTML = time.getSeconds();
 
    // DATE 
    document.getElementById('day').innerHTML = time.getDate();

    // MONTH

    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sepr", "Oct", "Nov", "Dec"];
    document.getElementById('month').innerHTML = months[time.getUTCMonth()];
    
    
}
setInterval(reloj, 1000);
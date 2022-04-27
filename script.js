setInterval(()=>{
    const time = document.querySelector(".display #time");
    const dat = document.querySelector(".display #date");

    let date = new Date(); //Getting systems current time

    //    Date Variables
    let d =  date.getDate();
    let m = (date.getMonth()+1);
    let y = date.getFullYear();

//    Time Variables 
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    
    // Time Logic
    let day_night = "AM";
    if(hours > 12){
      day_night = "PM";
      hours = hours - 12;
    }
    if(seconds < 10){
      seconds = "0" + seconds;
    }
    if(minutes < 10){
      minutes = "0" + minutes;
    }
    if(hours < 10){
      hours = "0" + hours;
    }

    // Displaying Date
    dat.textContent = d+'-'+m+'-'+y;

    // Displaying Time
    time.textContent = hours + ":" + minutes + ":" + seconds + " "+ day_night;
  });
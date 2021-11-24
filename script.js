function klok() {
    const today = new Date();
        let h = today.getHours();
        let m = today.getMinutes();
        let s = today.getSeconds();
        let D = today.getDate();
        let d = today.getDay();
        let Month = today.getMonth();
        Day = translateDay(d);
        M = translateMonth(Month);

        document.getElementById("klok").innerHTML = checkTime(h) + ':'  + checkTime(m) + ':' + checkTime(s);

        document.getElementById("date").innerHTML = translateDay(d) + " " + d +" " + translateMonth(Month);
        
        timer();
}
function timer() {
    setTimeout(() => {
        klok();
    }, 1000);
}
function checkTime(inputTime) {
    if (inputTime <= 9) {
        return '0' + inputTime;
    }
    else{
        return inputTime;
    }
}

function translateMonth(MonthNumber) {
    switch (MonthNumber) {
        case 0:
            return "Jan";
        case 1:
            return "Feb";
        case 2:
            return "Mrt";
        case 3:
            return "Apr";
        case 4:
            return "Mei";
        case 5:
            return "Jun";
        case 6:
            return "Jul";
        case 7:
            return "Aug";
        case 8:
            return "Sept";
        case 9:
            return "Okt";
        case 10:    
            return "Nov";
        case 11:
            return "Dec";
    }
}
function translateDay(dayNumber) {
    switch (dayNumber) {
        case 0:
            return "Zondag";
        case 1:
            return "Maandag";
        case 2:
            return "Dinsdag";
        case 3:
            return "Woensdag";
        case 4:
            return "Donderdag";
        case 5:
            return "Vrijdag";
        case 6:
            return "Zaterdag";
    }
}
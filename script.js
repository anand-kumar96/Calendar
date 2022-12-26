var currentDate = new Date();

// month list 
var month_Names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
var year_Names = [];
for (var i = 1950; i <= 2072; i++) {  // range of year
    year_Names.push(i);
}

//render function  when body load 
function renderDate() {
    document.querySelector('#month-picker').innerHTML = month_Names[currentDate.getMonth()];
    document.querySelector('.year').innerHTML = currentDate.getFullYear();
    var endDateOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate(); //end Date of current month
    var endDatePrevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();   //end date of previous month
    var endDaysOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), endDateOfMonth).getDay(); //end days of current month
    var today = new Date();
    currentDate.setDate(1);
    var day = currentDate.getDay(); //first day of month

    // generating days
    var count = 42;  //(prev + current + next) month days
    var cells = "";
    for (var x = day; x > 0; x--) {   //prev month date
        count--;
        cells += "<div class='prev-day'>" + (endDatePrevMonth - x + 1) + "</div>";
    }
    for (var i = 1; i <= endDateOfMonth; i++) {   //current date
        count--;
        if (i == today.getDate() && currentDate.getMonth() == today.getMonth() && currentDate.getFullYear() == today.getFullYear()) {
            cells += "<div class='today'>" + i + "</div>";
        } else {
            cells += "<div>" + i + "</div>";
        }
    }
    for (var y = endDaysOfMonth; y < count + endDaysOfMonth; y++) {   // next month date
        cells += "<div class='prev-day'>" + (y - endDaysOfMonth + 1) + "</div>";
    }
    document.getElementsByClassName("calendar-days")[0].innerHTML = cells;
}

// next and prev month code
function moveMonth(para) {
    document.getElementById("next").style.cursor = "pointer";
    document.getElementById("prev").style.cursor = "pointer";
    if (para == 'prev') {
        if (currentDate.getFullYear() == 1950 && currentDate.getMonth() == 1) {
            document.getElementById("prev").style.cursor = "default";
        }
        if (currentDate.getFullYear() == 1950 && currentDate.getMonth() == 0) {
            document.getElementById("prev").style.cursor = "default";
            return;
        } else {
            currentDate.setMonth(currentDate.getMonth() - 1);
        }
    }
    if (para == 'next') {
        if (currentDate.getFullYear() == 2072 && currentDate.getMonth() == 10) {
            document.getElementById("next").style.cursor = "default";
        }
        if (currentDate.getFullYear() == 2072 && currentDate.getMonth() == 11) {
            document.getElementById("next").style.cursor = "default";
            return;
        } else {
            currentDate.setMonth(currentDate.getMonth() + 1);

        }
    }
    renderDate();
}

// dropdown list of month
let month_list = document.querySelector('.month-list')
month_Names.forEach((e, index) => {
    let month = document.createElement('div')
    month.innerHTML = `<div data-month="${index}">${e}</div>`
    month.querySelector('div').onclick = () => {
        month_list.classList.remove('show')
        currentDate.setMonth(index);
        renderDate();
    }
    month_list.appendChild(month)
})

let month_picker = document.querySelector('#month-picker')
month_picker.onclick = () => {
    month_list.classList.add('show')
}

// dropdown list of year
let year_list = document.querySelector('.year-list')
year_Names.forEach((e, index) => {
    let years = document.createElement('div')
    years.innerHTML = `<div data-year="${index}">${e}</div>`
    years.querySelector('div').onclick = () => {
        year_list.classList.remove('show')
        currentDate.setFullYear(e);
        renderDate();
    }
    year_list.appendChild(years)
})

let year_picker = document.querySelector('#year')
year_picker.onclick = () => {
    year_list.classList.add('show')
}

// dark Mode code
let dark_mode_toggle = document.querySelector('.dark-mode-switch')
dark_mode_toggle.onclick = () => {
    document.querySelector('body').classList.toggle('light')
    document.querySelector('body').classList.toggle('dark')
}




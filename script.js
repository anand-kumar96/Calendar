
var dt = new Date(); // I used without assign for global
var month_names = ['January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December']
    
    var year_names = [];
    for (var i = 1950; i <= 2072; i++) {
        year_names.push(i);
    }

function renderDate() {  // when body load  //current month & year->day sun-->0 to sat->1,similrly  month-->0 to 11

    document.querySelector('#month-picker').innerHTML = month_names[dt.getMonth()];
    document.querySelector('.year').innerHTML = dt.getFullYear();

    // to print whole calendar 
    var endDateOfMonth = new Date(dt.getFullYear(), dt.getMonth() + 1, 0).getDate();   // end Date of current month

    var endDatePrevMonth = new Date(dt.getFullYear(), dt.getMonth(), 0).getDate();     // end date of previous month
    var endDaysOfMonth = new Date(dt.getFullYear(), dt.getMonth(), endDateOfMonth).getDay(); //end days of current month


    var today = new Date();

    dt.setDate(1);
    var day = dt.getDay(); // first day of month

// generating days
    var count=42;
    var cells = "";
    for (var x = day; x > 0; x--) {
        count--;
        cells += "<div class='prev-day'>" + (endDatePrevMonth - x + 1) + "</div>";
    }
    for (var i = 1; i <= endDateOfMonth; i++) {
        count--;
        if (i == today.getDate() && dt.getMonth() == today.getMonth() && dt.getFullYear() == today.getFullYear()) {
            cells += "<div class='today'>" + i + "</div>";
        } else {
            cells += "<div>" + i + "</div>";
        }
    }
    for (var y = endDaysOfMonth; y < count+endDaysOfMonth; y++) {
        cells += "<div class='prev-day'>" + (y - endDaysOfMonth + 1) + "</div>";
    }
    document.getElementsByClassName("calendar-days")[0].innerHTML = cells;

}

// next and prev month code
function moveMonth(para) {
    if (para == 'prev') {
        dt.setMonth(dt.getMonth() - 1);
    } else {
        dt.setMonth(dt.getMonth() + 1);
    }
    renderDate();
}

// dropdown list of month
let month_list = document.querySelector('.month-list')

month_names.forEach((e, index) => {
    let month = document.createElement('div')
    month.innerHTML = `<div data-month="${index}">${e}</div>`
    month.querySelector('div').onclick = () => {
        month_list.classList.remove('show')
        dt.setMonth(index);
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

year_names.forEach((e, index) => {
    let years = document.createElement('div')
    years.innerHTML = `<div data-year="${index}">${e}</div>`
    years.querySelector('div').onclick = () => {
        year_list.classList.remove('show')
        dt.setFullYear(e);
        renderDate();
    }
    year_list.appendChild(years)
})
// var p=0;
// for(var z=1950;z<=2051;z++){
//     let years = document.createElement('div')
//     years.innerHTML = `<div data-year="${p++}">${z}</div>`
//     years.querySelector('div').onclick = () => {
//         year_list.classList.remove('show')
//         dt.setFullYear(z);
//         renderDate();
//     }
//     year_list.appendChild(years)
// }

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




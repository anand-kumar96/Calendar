
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
var year_names = ['2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
    '2021',
    '2022',
    '2023',
    '2024',
    '2025',
    '2026']

function renderDate() {  // when body load
    //current month & year->day sun-->0 to sat->1,similrly  month-->0 to 11

    document.querySelector('#month-picker').innerHTML = month_names[dt.getMonth()];
    document.querySelector('.year').innerHTML = dt.getFullYear();

    // to print whole calendar 
    var endDate = new Date(dt.getFullYear(), dt.getMonth() + 1, 0).getDate();   // to get current month we add 1

    var preDate = new Date(dt.getFullYear(), dt.getMonth(), 0).getDate();     // prevMonthDay  


    var today = new Date();

    dt.setDate(1);
    var day = dt.getDay();


    var cells = "";
    for (var x = day; x > 0; x--) {
        cells += "<div class='prev-day'>" + (preDate - x + 1) + "</div>";
    }
    for (var i = 1; i <= endDate; i++) {
        if (i == today.getDate() && dt.getMonth() == today.getMonth() && dt.getFullYear() == today.getFullYear()) {
            cells += "<div class='today'>" + i + "</div>";
        } else {
            cells += "<div>" + i + "</div>";
        }
    }
    document.getElementsByClassName("calendar-days")[0].innerHTML = cells;

}

function moveMonth(para) {
    if (para == 'prev') {
        dt.setMonth(dt.getMonth() - 1);
    } else {
        dt.setMonth(dt.getMonth() + 1);
    }
    renderDate();
}


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
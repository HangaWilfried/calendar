const date = new Date();

const renderCalendar = ()=>{
    date.setDate(1);
    const monthDays = document.querySelector('.days');

    const lastDay = new Date(date.getFullYear(), date.getMonth()+1, 0).getDate();
    const lastDayIndex = new Date(date.getFullYear(), date.getMonth()+1, 0).getDay();

    const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    const firstDayIndex = date.getDay();

    const nextDays = 7 - lastDayIndex -1;

    const months = [
        'January',
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
        'December'
    ];

    document.querySelector('.date h1').innerHTML = months[date.getMonth()];

    document.querySelector('.date p').innerHTML = new Date().toDateString();

    let days = '';

    for (let x = firstDayIndex; x > 0; x--) 
    {
        days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;       
    }

    for (let i = 1; i <= lastDay; i++) 
    {
        if(i == new Date().getDate() && date.getMonth() == new Date().getMonth()){
        days += `<div class = "today">${i}</div>`; 
        }
        else{
            days += `<div>${i}</div>`;
        }
    }
    for (let j = 0; j < nextDays; j++) {
        days += `<div class="next-date">${j}</div>`;
        monthDays.innerHTML = days; 
    }
}


document.getElementsByTagName('ion-icon')[0].addEventListener('click', ()=>{
    date.setMonth(date.getMonth()-1);
    renderCalendar();
});

document.getElementsByTagName('ion-icon')[1].addEventListener('click', ()=>{
    date.setMonth(date.getMonth()+1);
    renderCalendar();
});

renderCalendar();
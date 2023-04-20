const storageName = 'lastVisit';

function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const milliseconds = String(date.getMilliseconds()).padStart(3, '0');

    return day + '.' + month + '.' + year + ' ' + hours + ':' + minutes + ':' + seconds + ':' + milliseconds;
}

function setLocalStorage(name, value) {
    localStorage.setItem(name, value);
}

function getLocalStorage(name) {
    return localStorage.getItem(name);
}

let lastVisitDate = getLocalStorage(storageName);
lastVisitDate = lastVisitDate ? new Date(+lastVisitDate) : new Date('01-01-0420');

setLocalStorage(storageName, Date.now());

document.querySelector('.ostatnie').textContent = 'Ostatnia wizyta: ' + formatDate(lastVisitDate);
function updateUTCTime() {
    const utcTimeElement = document.getElementById('utcTime');
    const now = new Date();
    const utcTimeString = now.toUTCString();
    utcTimeElement.innerHTML = `<i class="far fa-clock"></i> UTC Time: ${utcTimeString}`;
}

// Update time immediately
updateUTCTime();

// Update time when the page is refreshed
window.addEventListener('load', updateUTCTime);

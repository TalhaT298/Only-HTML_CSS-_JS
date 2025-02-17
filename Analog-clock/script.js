function updateClock() {
    const now = new Date();
    const utcTime = now.getTime() + (now.getTimezoneOffset() * 60000);
    const bangladeshTime = new Date(utcTime + (3600000 * 6)); // Bangladesh is UTC+6

    const hours = bangladeshTime.getHours();
    const minutes = bangladeshTime.getMinutes();
    const seconds = bangladeshTime.getSeconds();

    const hourHand = document.getElementById('hour-hand');
    const minuteHand = document.getElementById('minute-hand');
    const secondHand = document.getElementById('second-hand');

    const hourDeg = (hours % 12) * 30 + (minutes / 2);
    const minuteDeg = minutes * 6 + (seconds / 10);
    const secondDeg = seconds * 6;

    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    secondHand.style.transform = `rotate(${secondDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock(); // Initial call to set the clock immediately
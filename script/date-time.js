function showToday(){
    const today = new Date();
    const options = {weekday : 'long', month : 'short', day : 'numeric', year : 'numeric'};
    const todayDate = today.toLocaleDateString('en-US',options);
    document.getElementById('date-display').innerText = todayDate;
}
showToday();
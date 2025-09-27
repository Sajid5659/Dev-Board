function getRandomColor(){
    const r = Math.floor(Math.random() * 55) + 200; 
    const g = Math.floor(Math.random() * 55) + 200; 
    const b = Math.floor(Math.random() * 55) + 200; 
    return `rgb(${r}, ${g}, ${b})`;
}
document.getElementById('theme-btn').addEventListener('click',function(){
        const color = getRandomColor();
        document.getElementById('bg-body').style.backgroundColor = color;
})
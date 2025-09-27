const allBtnComplete = document.getElementsByClassName('btn-primary');
let taskAssigned = getValueOfInText('task-count');
let taskCount = getValueOfInText('count');
let activity = document.getElementById('activity-log');

for(const btn of allBtnComplete){
    btn.addEventListener('click',function(event){
        const cardName = event.target.parentNode.parentNode.childNodes[3].innerText;
        event.target.disabled=true;
        event.target.style.opacity=0.8;
        taskAssigned--;
        taskCount++;
        getIdAndValue('task-count', taskAssigned);
        alert(`Congratulations! Your Task Added :  ${cardName}`);
        getIdAndValue('count', taskCount);

        const time = getTime();
        const div = document.createElement('div');
        div.innerHTML=`<div class="bg-gray-200 gap-2 px-3 py-2 mx-auto my-2 rounded-md"><p>You Have Completed The Task <span class=" font-bold">${cardName}</span> at <span class="text-black font-bold">${time}</span></p></div>`
        activity.appendChild(div);

        if(taskAssigned==0){
            alert('Congratulations! You have completed all task.');
        }
    })
}
document.getElementById('btn-clear').addEventListener('click',function(){
    document.getElementById('activity-log').innerText = '';
})
const backBtn = document.getElementById('back-btn');
if(backBtn){
  document.getElementById('back-btn').addEventListener('click',function(){
    window.location.href='index.html';
})
}
const discoverNew = document.getElementById('discover-new');
if(discoverNew){
    document.getElementById('discover-new').addEventListener('click',
    function(){
        window.location.href='discover.html'
    }
)
}


function ham(ele)
{    
        document.getElementById('nav-list').className = 'nav_hidden';
        document.getElementById('nav-list').style.display ='inline-block';
        ele.style.display='none';
        document.getElementById('ham_close').style.display = 'block';
}
function close_ham(ele)
{
        document.getElementById('ham_icon').style.display = 'block';
        ele.style.display ='none';
        document.getElementById('nav-list').style.display ='none';
        document.getElementById('nav-list').classList.remove('nav_hidden');
        

}

var btns    = document.getElementsByClassName('menu');
for (let i = 0; i < btns.length; i++) {
    btns[i].onclick = (e) => {
        e.preventDefault();
        document.getElementById('nav').classList.toggle('hide-mobile');
    }
}
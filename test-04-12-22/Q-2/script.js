let i = 0
document.getElementById('dec_button').onclick = function decrease() {
    i -= 1;
    if(i<0){
        document.getElementById('count').style.color = 'red';
    }
    document.getElementById('count').innerHTML = i;
}

document.getElementById('res_button').onclick = function reset() {
    i = 0;
    document.getElementById('count').style.color = 'green';
    document.getElementById('count').innerHTML = i;
}

document.getElementById('inc_button').onclick = function increase() {
    i += 1;
    if(i>0){
        document.getElementById('count').style.color = 'green';
    }
    document.getElementById('count').innerHTML = i;
}




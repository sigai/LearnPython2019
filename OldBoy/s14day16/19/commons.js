function add() {
    var tag = "<p><input type=\"text\"></p>";
    document.getElementById('i1').insertAdjacentHTML('beforeEnd',tag);
}
function add2() {
    var tag = document.createElement('input');
    tag.setAttribute('type','text');
    tag.style.fontSize = '16px';
    tag.style.color = 'red';

    var p = document.createElement('p')
    p.appendChild(tag)

    document.getElementById('i1').appendChild(p)
}
function add() {
    let addBtn = document.getElementById('btn');
    addBtn.textContent = 'Class Added'
    addBtn.classList.add('active-btn');
}
function remove() {
    let addBtn2 = document.getElementById('btn-2');
    addBtn2.textContent = 'Class Removed  :('
    addBtn2.classList.remove('btn-2');
}
function toggle() {
    let addBtn3 = document.getElementById('btn-3');
    addBtn3.classList.toggle('activebtn3');
}
function contain() {
    let addBtn4 = document.getElementById('btn-4');
    let classBoy = prompt('Enter class name :')
    let x = addBtn4.classList.contains(classBoy);
    document.getElementById('fg').innerHTML = x
}
function replace() {
    let addBtn5 = document.getElementById('btn-5');
    addBtn5.textContent = 'Class Replaced'
    addBtn5.classList.replace('btn-5','replaced');
    
}
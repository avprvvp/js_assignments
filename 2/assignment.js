const task3Element = document.getElementById('task-3');
let name = 'This Name';

function showText() {
    alert('Any text to my taste');
}

function showName(name) {
    alert(name);
}

function concatString(first, second, third) {
    return first + ' ' + second + ' ' + third;
}

showText();
showName(name);
alert(concatString('First', 'Second', 'Third'));

task3Element.addEventListener('click', showText);

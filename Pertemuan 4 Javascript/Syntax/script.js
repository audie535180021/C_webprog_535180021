function loop() {
    iteration = document.getElementById('iLoop').value;
    result = document.getElementById('result');
    let str = "Audie Milson";
    for (i = 0; i < iteration; i++) {
        result.innerHTML += str + "<br>"
    }
}

let hobby = [];

function AddHobbies(inputHobby) {
    inputHobby = document.getElementById('hobi').value;
    if (hobby.length == 5) {
        alert("You have reach maximum possible hobbile");
    } else if (hobby.length < 5 && inputHobby.length < 3) {
        alert("Please type correct hobby!");
    } else {
        hobby.push(inputHobby);
        inputHobby.value = "";
        console.log(hobby.length);
    }

}

function InLoop() {
    let item;
    listHobi = document.getElementById('loopResult');
    for (item of hobby) {
        listHobi.innerHTML += item + "<br>";
    }
}
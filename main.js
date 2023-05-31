let input_video = document.querySelector("#input_video");
var video_selected = document.querySelector("#video_selected");
let inc1 = document.getElementById('inc1');
let inc2 = document.getElementById('inc2');
let inc3 = document.getElementById('inc3');

input_video.addEventListener('input', function () {
    //criando o leitor de files
    var reader = new FileReader;

    //transformando o arquivo selecionado em url 
    reader.readAsDataURL(input_video.files[0]);

    //adicionando o evento para quando terminar e encaminhar o resultado
    reader.onload = function (e) {
        video_selected.src = e.target.result;
    }
});

function cinc1() {

    if (inc1.checked) {
        video_selected.autoplay = true;
    } else {
        video_selected.autoplay = false;
    }

};

function cinc2() {

    if (inc2.checked) {
        video_selected.loop = true;
    } else {
        video_selected.loop = false;
    }

};

function cinc3() {

    if (inc3.checked) {
        video_selected.muted = true;
    } else {
        video_selected.muted = false;
    }

};

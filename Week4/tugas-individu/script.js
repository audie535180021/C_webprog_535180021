const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const hasil = document.getElementById('hasil');

const btnTambah = document.getElementById('tambah');
const btnKurang = document.getElementById('kurang');
const btnKali = document.getElementById('kali');
const btnBagi = document.getElementById('bagi');
const btnClear = document.getElementById('clear');

btnClear.addEventListener('click', () => {
    input1.value = '';
    input2.value = '';
    hasil.value = '';

});

btnTambah.addEventListener('click', function () {
    let a = input1.value;
    let b = input2.value;
    hasil.value = Number(a) + Number(b);
});

btnKurang.addEventListener('click', function () {
    let a = input1.value;
    let b = input2.value;
    hasil.value = Number(a) - Number(b);
});

btnKali.addEventListener('click', function () {
    let a = input1.value;
    let b = input2.value;
    hasil.value = Number(a) * Number(b);
});

btnBagi.addEventListener('click', function () {
    let a = input1.value;
    let b = input2.value;
    hasil.value = Number(a) / Number(b);
});
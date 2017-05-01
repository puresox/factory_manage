const BrowserWindow = require('electron').remote.BrowserWindow;
const path = require('path');
const {
    ipcRenderer,
} = require('electron');


document.getElementById('button').addEventListener('click', () => {
var arr = new Array(9);
    arr[0]=document.getElementById("arr0").value;
    arr[1]=document.getElementById("arr1").value;
    arr[2]=document.getElementById("arr2").value;
    arr[3]=document.getElementById("arr3").value;
    arr[4]=document.getElementById("arr4").value;
    arr[5]=document.getElementById("arr5").value;
    arr[6]=document.getElementById("arr6").value;
    arr[7]=document.getElementById("arr7").value;
    arr[8]=document.getElementById("arr8").value;
var rearr=new Array(3)
rearr[2]=(arr[3]*arr[7]-arr[4]*arr[6])*arr[2];
rearr[1]=(arr[0]*arr[5]-arr[2]*arr[3])*arr[1];
rearr[0]=(arr[4]*arr[8]-arr[5]*arr[6])*arr[0];
$('#result1').text(rearr[0]);
$('#result2').text(rearr[1]);
$('#result3').text(rearr[2]);
});
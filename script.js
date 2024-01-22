numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, "O"];

function initialize(){
  for (var i = 1; i < 16; i++){
     document.getElementById("box" + i).innerHTML = parseFloat(numbers[i -1 ]);
  }
}
function add1(a){
  a.innerHTML = parseFloat(a.innerHTML) + 1;
}

function checkAdj(box){
  document.getElementById("log").innerHTML += "works ";
  var j = numbers.indexOf(parseFloat(box.innerHTML)) + 1;
  if (j==1){
  var check1 = numbers[j];
  var check2 = null;
  var check3 = numbers[j + 3];
  var check4 = null;
  document.getElementById("log").innerHTML += "1 ";
  }
  if (j==4){
  var check1 = null;
  var check2 = numbers[j - 2];
  var check3 = numbers[j + 3];
  var check4 = null;
  document.getElementById("log").innerHTML += "4 ";
  }
  if (j==13){
  var check1 = numbers[j];
  var check2 = null;
  var check3 = null;
  var check4 = numbers[j - 5];
  document.getElementById("log").innerHTML += "13 ";
  }
  if (j==16){
  var check1 = null;
  var check2 = numbers[j - 2];
  var check3 = null;
  var check4 = numbers[j - 5];
  document.getElementById("log").innerHTML += "16 ";

  }
  if ( j==5 || j==9 ){
  var check1 = numbers[j];
  var check2 = null;
  var check3 = numbers[j + 3];
  var check4 = numbers[j - 5];
  document.getElementById("log").innerHTML += "5 or 9 ";
  }
  if ( j==8 || j==12 ){
  var check1 = null;
  var check2 = numbers[j - 2];
  var check3 = numbers[j + 3];
  var check4 = numbers[j - 5];
  document.getElementById("log").innerHTML += "8 or 12 ";
  }
  if (j > 1 && j < 4){
    var check1 = numbers[j];
    var check2 = numbers[j - 2];
    var check3 = numbers[j + 3];
    var check4 = null;
    document.getElementById("log").innerHTML += "2 or 3 ";
  }
  if (j > 13 && j < 16){
  var check1 = numbers[j];
  var check2 = numbers[j - 2];
  var check3 = null;
  var check4 = numbers[j - 5];
  document.getElementById("log").innerHTML += "14 or 15";
  }
  if ((j > 5 && j < 8) || (j > 9 && j < 12)){
  var check1 = numbers[j];
  var check2 = numbers[j - 2];
  var check3 = numbers[j + 3];
  var check4 = numbers[j - 5];
  document.getElementById("log").innerHTML += "middle ";
  }
  var checkArr = [check1, check2, check3, check4];
  if (j >= 1 && j <= 16){
  for (var i = 0; i < 4; i++){
    if (checkArr[i] == "O"){
      var bx = numbers.indexOf("O") + 1;
      document.getElementById("log").innerHTML += ("O = " + bx);
      var temp = box.innerHTML;
      var temp2 = document.getElementById("box" + bx).innerHTML;
      var ind1 = j-1
      var ind2 = numbers.indexOf("O");
      var tem = numbers[ind1];
      numbers[ind1] = "O";
      numbers[ind2] = tem;
      box.innerHTML = temp2;
      document.getElementById("box" + bx).innerHTML = temp; 
      document.getElementById("log").innerHTML += "  " + numbers;
      return 0;
    }
  }
}

}

function switchNum(box){
var rand = Math.round(Math.random() * 15) + 1;
var temp = box.innerHTML;
var temp2 = document.getElementById("box" + rand).innerHTML;
box.innerHTML = temp2;
document.getElementById("box" + rand).innerHTML = temp;
}

function texting(box){
  box.innerHTML = numbers.indexOf(12) + 1;
}

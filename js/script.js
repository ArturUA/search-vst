window.onload = () => {
  let radioV = document.getElementById('radio-v');
  let radioS = document.getElementById('radio-s');
  let radioT = document.getElementById('radio-t');

  let speedBlock = document.getElementById('speed');
  let timeBlock = document.getElementById('time');
  let distanceBlock = document.getElementById('distance');

  let resultButton = document.getElementById('btn-res');
  let clearButton = document.getElementById('btn-clear');

  let resultBlock = document.getElementById('result_');

  resultButton.onclick = () => {
    let result;
    let speed = speedBlock.value;
    let time = timeBlock.value;
    let distance = distanceBlock.value;
    let radioAll = document.getElementsByName('radio-btn');

    if((speed == "") && (time == "") && (distance == "")){
      resultBlock.innerHTML = "Please enter values";
    }else{
      for(i = 0; i < radioAll.length; i++){
        if(radioAll[i].checked){
          switch (i) {
            case 0:
              if(((time != "") && (distance != "")) && ((time != "e") && (distance != "e"))){
                result = distance / time;
                result = result.toFixed(2);
                resultBlock.innerHTML = result + "m/s";
              }else{
                resultBlock.innerHTML = "Invalid values";
              }
              break;
            case 1:
              if(((time != "") && (speed != "")) && ((time != "e") && (speed != "e"))){
                result = time * speed;
                result = result.toFixed(2);
                resultBlock.innerHTML = result + "m";
              }else{
                resultBlock.innerHTML = "Invalid values";
              }
              break;
            case 2:
              if(((speed != "") && (distance != "")) && ((speed != "e") && (distance != "e"))){
                result = distance / speed;
                result = result.toFixed(2);
                resultBlock.innerHTML = result + "s";
              }else{
                resultBlock.innerHTML = "Invalid values";
              }
              break;
          }
          break;
        }
      }
    }
  }

  clearButton.onclick = () => {
    speedBlock.value = "";
    timeBlock.value = "";
    distanceBlock.value = "";
    resultBlock.innerHTML = "Result will here";
  }

  radioS.onclick = () => {
    distanceBlock.disabled = true;
    speedBlock.disabled = false;
    timeBlock.disabled = false;
    speedBlock.value = "";
    timeBlock.value = "";
    distanceBlock.value = "";
    resultBlock.innerHTML = "Result will here";
    distanceBlock.placeholder = "Disabled";
    speedBlock.placeholder = "Enter speed (M/S)";
    timeBlock.placeholder = "Enter time (Seconds)";
  }

  radioV.onclick = () => {
    distanceBlock.disabled = false;
    speedBlock.disabled = true;
    timeBlock.disabled = false;
    speedBlock.value = "";
    timeBlock.value = "";
    distanceBlock.value = "";
    resultBlock.innerHTML = "Result will here";
    speedBlock.placeholder = "Disabled";
    distanceBlock.placeholder = "Enter distance (M)";
    timeBlock.placeholder = "Enter time (Seconds)";
  }

  radioT.onclick = () => {
    distanceBlock.disabled = false;
    speedBlock.disabled = false;
    timeBlock.disabled = true;
    speedBlock.value = "";
    timeBlock.value = "";
    distanceBlock.value = "";
    resultBlock.innerHTML = "Result will here";
    timeBlock.placeholder = "Disabled";
    speedBlock.placeholder = "Enter speed (M/S)";
    distanceBlock.placeholder = "Enter distance (M)";
  }
}

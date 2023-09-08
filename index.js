// let star = "";
// for(let i = 0; i < 20; i++){
    // document.getElementById("new_sample").innerHTML += star + "<br>";
//     star = star + "*/*";
// }
// function changeTextColor() {
//     let textElement = document.getElementById("textToChange");
//     let red = Math.floor(Math.random() * 256);
//     let green = Math.floor(Math.random() * 256);
//     let blue = Math.floor(Math.random() * 256);
//     let textColor = "rgb(" + red + "," + green + "," + blue + ")";
    
//     textElement.style.color = textColor;
//   }

// function lights(){
// let red = Math.floor(Math.random() * 256);
// let green = Math.floor(Math.random() * 256);
// let blue = Math.floor(Math.random() * 256);
// let redgreenblue = "rgb(" + red + "," + green + "," + blue + ")";

// document.body.style.Color = redgreenblue;
// }

// function start(){
//     go = setInterval(changeTextColor, 1000);
// }
// function stop(){
//     clearInterval(go);
// }
        let go;
        let audio = document.getElementById('audio');
    let star = "";

    for(let i = 0; i < 20; i++) {
     document.getElementById("new_sample").innerHTML += star + "<br>";
     star = star + "*/0";
    }
    function changeTextColor() {
      let textElement = document.getElementById("new_sample");
      let red = Math.floor(Math.random() * 256);
      let green = Math.floor(Math.random() * 256);
      let blue = Math.floor(Math.random() * 256);
      let textColor = "rgb(" + red + "," + green + "," + blue + ")";
      
      textElement.style.color = textColor;
      document.getElementById("rgb_values").innerText = textColor
      
    }
    function start() {
      if (go) {
          clearInterval(go);
      }

      go = setInterval(function () {
          changeTextColor();
          audio.play();
      }, 1000);
  }

    // function start() {
    //   go = setInterval(changeTextColor, 1000);
    // }

    // function stop() {
    //   clearInterval(go);
    // }
    function stop() {
      clearInterval(go);
      audio.pause(); 
      audio.currentTime = 0;
  }
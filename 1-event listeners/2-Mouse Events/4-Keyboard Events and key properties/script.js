const itemInput = document.getElementById("item-input");

// const onKeyPress = (e) => {
//   console.log("keypress");
// };

// const onkeyUp = (e) => {
//   console.log("keyup");
// };

const onkeyDown = (e) => {
  //Key
  //   if (e.key === "Enter") {
  //     alert("You Pressed enter");
  //   }

  //Keycode
  // https://www.toptal.com/developers/keycode/table
  if (e.keyCode === 13) {
    alert("You Pressed enter");
  }

  //code
  if (e.code === "Digit1") {
    console.log("you pressed 1");
  }

  if (e.repeat) {
    console.log("You are holding down " + e.key);
  }

  //   console.log("Shift: " + e.shiftKey);
  //   console.log("Control: " + e.ctrlKey);
  //   console.log("Alt: " + e.altKey);

  if (e.shiftKey && e.key === "k") {
    console.log("You hit shift + K");
  }
};

// itemInput.addEventListener("keypress", onKeyPress);
// itemInput.addEventListener("keyup", onkeyUp);
itemInput.addEventListener("keydown", onkeyDown);

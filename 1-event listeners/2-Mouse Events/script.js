// const logo = document.querySelector("img");

// const onClick = () => console.log("Click event");
// const onDoubleClick = () => {
//   if (document.body.style.backgroundColor !== "purple") {
//     document.body.style.backgroundColor = "purple";
//     document.body.style.color = "white";
//   } else {
//     document.body.style.backgroundColor = "white";
//     document.body.style.color = "black";
//   }
// };

// const onRightClick = () => console.log("Right Click event");
// const onMouseDown = () => console.log("mouse down event");
// const onMouseUp = () => console.log("mouse up event");
// const onMouseWheel = () => console.log("mouse wheel event");
// const onMouseOver = () => console.log("mouse over event");
// const onMouseOut = () => console.log("mouse out event");
// const onDragStart = () => console.log("drag start event");
// const onDrag = () => console.log("drag event");
// const onDragEnd = () => console.log("drag end event");

// //Event Listeners
// logo.addEventListener("click", onClick);
// logo.addEventListener("dblclick", onDoubleClick);
// logo.addEventListener("contextmenu", onRightClick);
// logo.addEventListener("mousedown", onMouseDown);
// logo.addEventListener("mouseup", onMouseUp);
// logo.addEventListener("wheel", onMouseWheel);
// logo.addEventListener("mouseover", onMouseOver);
// logo.addEventListener("mouseout", onMouseOut);
// logo.addEventListener("dragstart", onDragStart);
// logo.addEventListener("drag", onDrag);
// logo.addEventListener("dragend", onDragEnd);

// 03- Event Object

// const logo = document.querySelector("img");

// function onClick(e) {
//   //   console.log(e.target);
//   //   console.log(e.currentTarget);
//   //   //   e.target.style.backgroundColor = "black";
//   //   console.log(e.type);
//   //   console.log(e.timeStamp);
//   //   console.log(e.clientX);
//   //   console.log(e.clientY);
//   //   console.log(e.offsetX);
//   //   console.log(e.offsetY);
//   //   console.log(e.pageX);
//   //   console.log(e.pageY);
//   //   console.log(e.screenX);
//   //   console.log(e.screenY);
// }
// function onDrag(e) {
//   document.querySelector("h1").textContent = `X${e.clientX}Y${e.clientY}`;
// }

// logo.addEventListener("click", onClick);
// logo.addEventListener("drag", onDrag);

// // document.body.addEventListener("click", function (e) {
// //   console.log(e.target);
// //   console.log(e.currentTarget);
// // });
// document.querySelector("a").addEventListener("click", function (e) {
//   e.preventDefault();
//   console.log("Link was Clicked");
// });

// /*
// -`target'- The element that triggered the event
// -`currentTarget`- The element that the event listener is attached to(These are the same in this case)
// -`type`-the type of that was triggered
// -`timeStamp`- The time that the  event was triggered
// -`clientX`- The x position of the mouse click relative to the window
// -`clientY`- The y position of the mouse click relative to the window
// -`offSetX`- The x position of the mouse click relative to the element
// -`offSetY`- The y position of the mouse click relative to the element
// -`pageX`- The x position of the mouse click relative to the page
// -`pageY`- The y position of the mouse click relative to the page
// -`scrrenX`- The x position of the mouse click relative to the screen
// -`scrrenY`- The y position of the mouse click relative to the screen
// */

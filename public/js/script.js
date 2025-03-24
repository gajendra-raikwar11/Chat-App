// const socket = io();

// const input = document.querySelector(".input");
// const messages = document.querySelector(".messages");
// const messageBox = document.querySelector(".messagebox")
// const send = document.querySelector(".send")

// function sendMessage() {
//     if (input.value.trim()) {
//         socket.emit("message", input.value);
//         input.value = '';
//     }
// }

// send.addEventListener("click", sendMessage);

// input.addEventListener("keydown", (event) => {
//     if (event.keyCode === 13) {
//         if (event.shiftKey) {
//             const curserPos = this.SelectionStart;
//             this.vakue = this.value.slice(0, curserPos) + "\n" + this.value.slice(curserPos)
//             this.SelectionStart = curserPos;
//             this.SelectionEnd = curserPos;
//         } else {
//             // event.preventDefault();
//             sendMessage();
//         }
//     }
// })


// let container = ``;

// socket.on("message", function (message) {
//     container = `<div  class=" flex justify-end">
//            <div class="bg-blue-500 text-white p-3 rounded-l-lg rounded-br-lg">
//                <p class="text-sm">${message}</p>
//            </div>
//         </div>`
//     messages.innerHTML += container;
//     messageBox.scrollTop = messageBox.scrollHeight;
// });

// document.querySelector("#set")
//     .addEventListener("click", function () {
//         let val = document.querySelector("input").value;
//         socket.emit("name", val);
//     })

// document.querySelector("#show")
//     .addEventListener("click", function () {
//         socket.emit("show")
//     })



// fetch('people.json')
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         appendData(data);
//     })
//     .catch(function (err) {
//         console.log('error: ' + err);
//     });
// function appendData(data) {
//     let mainContainer = document.getElementById("myData");
//     for (let i = 0; i < data.length; i++) {
//         let div = document.createElement("div");
//         div.innerHTML = 'Name: ' + data[i].firstName + ' ' + data[i].lastName;
//         mainContainer.appendChild(div);
//     }
// }
let btn = document.getElementById("first")
btn.onclick = function (){
    fetch('test.txt')
        .then(function (response) {
            return response.text();
        })
        .then(function (data) {
            let mainContainer = document.getElementById("myData");
            mainContainer.innerText = data
        })
        .catch(function (err) {
            console.log('error: ' + err);
        })}
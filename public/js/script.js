showData();
// after clicking button new note add in the local storage
const addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", () => {
    let addText = document.getElementById("addText");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addText.value);
    console.log(addText.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addText.value = "";
    showData();
});
// after insert the data in the localstorage showData() will be call
function showData() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
                    <div class="card noteCard my-2 mx-2" style="width: 18rem; margin: 1rem;">
                        <div class="card-body">
                            <h5 class="card-title">LIST : ${index + 1}</h5>
                            <p class="card-text">${element}</p>
                            <button id="${index}" onclick="deleteList(this.id)" class="btn btn-primary">DELETE</button>
                        </div>
                    </div>
                `;
    });
    // If localstorage is is empty
    let notesElement = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesElement.innerHTML = html;
    } else {
        notesElement.innerHTML = `
        <div class="alert alert-danger" role="alert" style="margin-left: 1rem;">
            <h1 class="text-center fs-6">--- Nothing to show! To add a new note click on  "ADD" button ---</h1>
        </div>
    `;
    }
}
// after click on the delete button a note delete fron note object
function deleteList(index) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showData();
}
// to search existing note
let search = document.getElementById('searchTxt');
search.addEventListener("input", function () {
    let inputVal = search.value.toLowerCase();
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if (cardTxt.toLowerCase().includes(inputVal)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    })
})
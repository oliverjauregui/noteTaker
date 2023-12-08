const notes = ["Nota 1", "Nota 2"];

let notesContainer = document.getElementById("notes-container"); //grandfather notes container
let writedNote = document.getElementById("writed-note"); //textarea
let button = document.getElementById("button"); //create button


button.addEventListener("click", function createNote(event) {
    event.preventDefault();
    let writedNoteValue = writedNote.value;
    notes.push(writedNoteValue);
    // console.log(notes);
    writedNote.form.reset();
});

function renderNotes() {
    notesContainer.innerHTML = "";
    for (let i = 0; i < notes.length; i++) {
        let note = notes[i];

        createEstructure(note); // Calling the next function
    }
}


function createEstructure(note){
    const div = document.createElement("div");
    const p = document.createElement("p");
    const btn = document.createElement("button");

    div.className = "note-style";
    // p.className = "textClass";
    // btn.className = "delete-button";
    p.textContent = note;
    btn.textContent = "Borrar"

    btn.addEventListener("click", function() {
        const index = notes.indexOf(note);
        notes.splice(index, 1);
        renderNotes()
    });

    div.append(p, btn);
    notesContainer.appendChild(div);
}
button.addEventListener("click", renderNotes);
renderNotes()
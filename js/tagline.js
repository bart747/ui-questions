(function () {

const doc = document;
const notes = doc.getElementsByClassName('note');

for (let note of notes) {
  let content = note.getElementsByClassName('content')[0];
  let tagline = document.createElement('div');
  tagline.classList.add('tagline');

  if (note.dataset.sec === '' ||
      note.dataset.sec === ' ' ||
      note.dataset.sec === undefined) {
    tagline.innerHTML = "<span class='highlight'>" + note.dataset.pri +
                        "</span>";
  } else {
    tagline.innerHTML = "<span class='highlight'>" + note.dataset.pri +
                        "</span>" + ', ' + note.dataset.sec;
  }
  
  note.insertBefore(tagline, content);
  console.log(note.dataset);
}

})();

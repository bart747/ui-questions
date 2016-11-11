(function () {

const doc = document;
const notes = [].slice.call(doc.getElementsByClassName('note'));

const context1 = doc.getElementsByClassName('subcont-primary')[0];
const context2 = doc.getElementsByClassName('subcont-secondary')[0];
const context3 = doc.getElementsByClassName('subcont-rest')[0];

const btns = {
  nav: doc.getElementsByClassName('navigation')[0],
  err: doc.getElementsByClassName('errors')[0],
  rec: doc.getElementsByClassName('recognition')[0],
  sca: doc.getElementsByClassName('scannability')[0]
};

const btnVals = Object.values(btns);
let btnArr = [];

btnVals.forEach(val => {
  return btnArr.push(val);
});

function btnAction(btn, keyword) {
  btn.addEventListener('click', _=> {
    displayNotes(keyword);
    btnArr.forEach(btn => btn.classList.remove('btn-active'));
    btn.classList.add('btn-active');
    context2.classList.add('underline');
  });
}

btnAction(btns.nav, 'navigation');
btnAction(btns.err, 'errors');
btnAction(btns.rec, 'recognition');
btnAction(btns.sca, 'scannability');

function displayNotes(keyword) { 
  notes.forEach(note => {

    if (note.dataset.pri === keyword) {
      context1.append(note);
    }

    else if (note.dataset.sec === keyword) {
      context2.append(note);
    }

    else {
      context3.append(note);
    }
  });
}


})();
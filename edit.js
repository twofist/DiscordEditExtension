let c = confirm("allow edits?");
document.body.addEventListener('dblclick', function (e) {
    if(!c) return;
    let p = prompt("enter new text");
    e.target.innerHTML = p;
  });
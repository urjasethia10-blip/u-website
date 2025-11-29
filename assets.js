// main.js - small helpers used on every page
document.addEventListener('DOMContentLoaded', function () {
  // set year in footer (IDs appear in pages)
  ['yr','yr2','yr3'].forEach(id=>{
    const el = document.getElementById(id);
    if(el) el.textContent = new Date().getFullYear();
  });

  // basic form handling for all forms: demo behaviour
  document.querySelectorAll('form').forEach(f=>{
    f.addEventListener('submit', function(e){
      e.preventDefault();
      alert('Thanks — demo submit. Replace with your backend or email handler.');
      f.reset();
    });
  });

  // accessibility: focus outline for keyboard users
  document.body.addEventListener('keyup', function(e){
    if(e.key === 'Tab') document.body.classList.add('user-is-tabbing');
  });
});

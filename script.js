const triggers = document.querySelectorAll('.collapsible-trigger');

triggers.forEach(trigger => {
  trigger.addEventListener('click', (event) => {
    const collapsibleElement = trigger.parentElement;
    const content = trigger.nextElementSibling;
    
    collapsibleElement.classList.toggle('open');

    content.hidden = !content.hidden;
  });
});
const triggers = document.querySelectorAll('.collapsible-trigger');

triggers.forEach(trigger => {
  trigger.addEventListener('click', () => {
    const article = trigger.parentElement;
    const content = trigger.nextElementSibling;

    article.classList.toggle('open');

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });
});
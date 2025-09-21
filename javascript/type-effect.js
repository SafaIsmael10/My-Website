document.addEventListener('DOMContentLoaded', () => {
  const textEl = document.querySelector('.typing-text');
  const fullText = textEl.textContent;
  let index = 0;
  let typingInterval = null;
  let isTypingForward = false;

  textEl.textContent = '';

  function typeForward() {
    if (index < fullText.length) {
      textEl.textContent += fullText.charAt(index);
      index++;
    } else {
      clearInterval(typingInterval);
    }
  }

  function typeBackward() {
    if (index > 0) {
      index--;
      textEl.textContent = fullText.substring(0, index);
    } else {
      clearInterval(typingInterval);
    }
  }

  const personal = document.querySelector('.personal');

  personal.addEventListener('mouseenter', () => {
    clearInterval(typingInterval);
    isTypingForward = true;
    typingInterval = setInterval(typeForward, 30);
  });

  personal.addEventListener('mouseleave', () => {
    clearInterval(typingInterval);
    isTypingForward = false;
    typingInterval = setInterval(typeBackward, 10);
  });
});

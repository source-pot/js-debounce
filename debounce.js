
const CreateDebounce = (callback, timeout = 300) => {
   let timeoutId;
   return () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(callback, timeout);
   }
}

const fadeInThenOutElement = (element, delayBeforeFadingOut) => {
   element.style.opacity = 1;
   setTimeout(() => element.style.opacity = 0, delayBeforeFadingOut);
}


(() => {
    const Debounce = CreateDebounce(
        () => fadeInThenOutElement(document.querySelector('.debounce__activity'), 500),
        1000
    );

    document
        .querySelector('.debounce__input')
        .addEventListener('keyup', Debounce);

})();

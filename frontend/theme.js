// theme.js
(function() {
    const theme = localStorage.getItem('theme') || 'default';
    document.documentElement.setAttribute('data-theme', theme);
    // console.log(localStorage.getItem('theme'));
  })();
  
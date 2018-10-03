window.addEventListener('load', () => {
  var animation = bodymovin.loadAnimation({
    container: document.getElementById('bm'),
    renderer: 'html',
    loop: true,
    autoplay: true,
    path: 'data.json'
  });
});

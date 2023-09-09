
  function toggleReadMore() {
    var aboutContent = document.querySelector('.about-content');
    var btnRead = document.querySelector('#btnread');

    if (aboutContent.style.display === 'none' || aboutContent.style.display === '') {
      aboutContent.style.display = 'block';
      btnRead.textContent = 'Read Less';
    } else {
      aboutContent.style.display = 'none';
      btnRead.textContent = 'Read More';
    }
  }
  document.getElementById('btnread').addEventListener('click', toggleReadMore);

 const section
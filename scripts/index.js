function showPicture() {
    
   
    var cardKing = document.querySelector('button[type="button"]');
   
  

  cardKing.addEventListener('click', (e) => {
    showPicture(e.target.king);
    cardKing.style.display = "block";
});

};
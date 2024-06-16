document.getElementById('box').addEventListener('click', function() {
    var lid = document.getElementById('lid');
    var boxContent = document.querySelector('.box-content');
    
    lid.style.transform = 'rotateX(-120deg)';
    setTimeout(function() {
        boxContent.style.display = 'block';
    }, 1000); // delay to match the lid opening
});

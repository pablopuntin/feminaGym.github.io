
// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption

//var img = document.getElementById('myImg1');


var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
function prueba(e){
    modal.style.display = "block";
    modalImg.src = e.src;
    modalImg.alt = e.alt;
    captionText.innerHTML = e.alt;
}

const galeria = document.getElementById('galeria')

galeria.addEventListener('click', (e) => {
    console.log(e.id);
    
})


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

/* logica para agregar txto y quitar texto con el mismo boton*/
let btnInfo = document.getElementById('masInfo');
let parraro = document.getElementById('texto');
let agregado = false;

btnInfo.addEventListener('click', function(){
  if (agregado){
    texto.textContent = '';
    masInfo.textContent=  'mas info';
    agregado=false;
  } else{
    texto.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque in cupiditate quae quia eos necessitatibus impedit distinctio! Dolores velit, quasi enim molestias repudiandae qui, laudantium dolor illo iusto molestiae distinctio!';
    masInfo.textContent = 'menos info';
    agregado = true;
  }
})  

/*modo oscuro*/
let btnOscuro = document.getElementById('oscuro');

btnOscuro.addEventListener('click', function(){
  if(btnOscuro.textContent === 'Modo claro'){
    document.body.style.backgroundColor = 'black';
    btnOscuro.textContent = 'Modo oscuro';
   } else{
    document.body.style.backgroundColor = 'white';
    btnOscuro.textContent = 'Modo claro';
   }
})
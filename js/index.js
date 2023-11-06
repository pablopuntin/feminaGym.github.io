document.addEventListener('DOMContentLoaded', function() {
  // Tu código JavaScript aquí
  // Se ejecutará una vez que el DOM esté completamente cargado





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
  if(btnOscuro.textContent === 'Modo oscuro'){
    document.body.style.backgroundColor = 'slategray';
    btnOscuro.textContent = 'Modo claro';
   } else{
    document.body.style.backgroundColor = 'floralwhite';
    btnOscuro.textContent = 'Modo oscuro';
   }
})




//script para el form de venta
// definir el valor del ticket
const ticket = 2000;

// definir descuentos
const descEstudiante = 0.05;
const descTrainee = 0.10;
const descJunior = 0.15;

// tomar los elementos

const cantidad = document.getElementById('cantidad');
const categoria = document.getElementById('categoria');
const totalPagar = document.getElementById('totalAPagar');
const btnResumen = document.getElementById('resumen');


function calcularPago() {

    let total = cantidad.value * ticket;

    // condicionar por descuentos
    switch (categoria.value) {
        case "estudiante":
            total = total * 1.2 - (total * descEstudiante);
            break;
        case "trainee":
            total = total * 1.8 - (total * descTrainee);
            break;
        case "junior":
            total = total * 3 - (total * descJunior);
            break;
    }

    totalPagar.textContent = `Total a Pagar: $ ${total}`;

    console.log("hola");
}

btnResumen.addEventListener('click', (e) => {
    e.preventDefault();
    calcularPago();

});

//fin script de venta


//despues de esta linea el js se carga antes del dom

});



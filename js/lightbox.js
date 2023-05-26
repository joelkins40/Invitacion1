const imagenes = document.querySelectorAll('.img-galeria');
const imagenesLight = document.querySelector('.agregar-imagen');
const contenedorLight = document.querySelector('.imagen-light');

const nextBtn = document.querySelector('.adelante');
const prevBtn = document.querySelector('.atras');
const closeBtn = document.querySelector('.btn-cerrar');

const numberOfSlides = imagenes.length;
let slideNumber = 0;

imagenes.forEach(imagen => {
    imagen.addEventListener('click', ()=>{
        aparecerImagen(imagen.getAttribute('src'));
    })
})

closeBtn.addEventListener('click', (e)=>{
    if(e.target != imagenesLight){
        contenedorLight.classList.toggle('show')
        imagenesLight.classList.toggle('showImage')
    }
})

const aparecerImagen = (imagen) =>{
    imagenesLight.src = imagen;
    contenedorLight.classList.toggle('show');
    imagenesLight.classList.toggle('showImage');
}

// Next buttom
nextBtn.addEventListener('click', () => {
    slideNumber++;

    if(slideNumber > (numberOfSlides - 1)){
        slideNumber = 0;
    }

    aparecerImagen(imagenes[slideNumber].getAttribute('src'));
    contenedorLight.classList.toggle('show');
    imagenesLight.classList.toggle('showImage');
})

// Prev buttom
prevBtn.addEventListener('click', () => {
    slideNumber--;

    if(slideNumber < 0){
        slideNumber = numberOfSlides - 1;
    }

    aparecerImagen(imagenes[slideNumber].getAttribute('src'));
    contenedorLight.classList.toggle('show');
    imagenesLight.classList.toggle('showImage');
})
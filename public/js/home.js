const mostrarPublicaciones = (publicaciones, elementoHtml) => {

  let secciones = "";
  publicaciones.forEach((pub) => {
    secciones +=
      `
        <div class="card mb-3" style="max-width: 100%;">
        <div class="row g-0">
          <div class="col-md-4 img-conteiner">
            <img src="${pub.url_imagen}" class="img-fluid rounded-start" alt="${pub.titulo}">
          </div>
          <div class="col-md-8">
            <div class="card-body text-container">
              <h5 class="card-title">${pub.titulo}</h5>
              <p class="card-text">${pub.detalle}</p>
              <p class="card-text"><small class="text-muted">${pub.fecha}</small></p>
            </div>
          </div>
        </div>
      </div>`

  })






  elementoHtml.innerHTML = secciones;

}

const obtenerPublicaicones = async () => {
  const response = await fetch('/publicaciones')
  const data = await response.json()
  return data;
}





document.addEventListener('DOMContentLoaded', async () => {

  const publicaciones = await obtenerPublicaicones()
  const main = document.querySelector('#lista-publicaciones')
  mostrarPublicaciones(publicaciones, main)
})
const fetchData = async (URL) => {
    try {
        const response = await fetch(URL, {})
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }
}


const API = 'https://api.jikan.moe/v3/search/anime?q=Haikyuu&limit=15'

const mostrarAnimes = (Animes) => {
    const contenido = document.getElementById('contenedor')
    Animes.map( (Anime) => {
        contenido.innerHTML = contenido.innerHTML + `
        <div class="col s12 m4 ">
            <div class="card small horizontal">
                <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator" src="${Anime.image_url}">
                    </div>
                <div class="card-content">
                    <p><span class="card-title activator grey-text text-darken-4">${Anime.title}</span></p>
                </div>
                <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4">${Anime.title}<i class="material-icons right">close</i></span>
                    <p>${Anime.synopsis}</p>
                </div>
            </div>
        </div>
        `
    } )
}

const funcionInicial = async () => {
    let datos = await fetchData(API)
    mostrarAnimes( datos.results )
    console.log(datos)
}

funcionInicial()

const API2 = 'https://api.jikan.moe/v3/search/anime?q=kuroko&limit=18'

const mostrarAnimes2 = (Animes2) => {
    const contenido = document.getElementById('contenedor2')
    Animes2.map( (Anime2) => {
        contenido.innerHTML = contenido.innerHTML + `
        <div class="col s12 m4 ">
            <div class="card small horizontal">
                <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator" src="${Anime2.image_url}">
                    </div>
                <div class="card-content">
                    <p><span class="card-title activator grey-text text-darken-4">${Anime2.title}</span></p>
                </div>
                <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4">${Anime2.title}<i class="material-icons right">close</i></span>
                    <p>${Anime2.synopsis}</p>
                </div>
            </div>
        </div>
        `
    } )
}

const funcionInicial2 = async () => {
    let datos = await fetchData(API2)
    mostrarAnimes2( datos.results)
    console.log(datos)
}

funcionInicial2()


    
import image from '../assets/image.png';

function Information() {
    return (
        <div className="information">
            <img src={image} alt="otakuhaven logo" className='logo' />
            <h2>Acerca de OtakuHaven</h2>
            <h3>
            ¡Bienvenidos a OtakuHaven! 
            </h3>
            <p>
            Nos apasiona traerles los mejores y más recientes animes, desde los clásicos favoritos hasta los nuevos lanzamientos que son tendencia. Nuestra misión es brindarles a los entusiastas del anime una plataforma atractiva para explorar y seguir sus series favoritas.
            </p>
            <p>
            Ya seas fanático desde hace mucho tiempo o recién llegado al mundo del anime, estamos aquí para hacer que tu experiencia sea agradable e informativa.
            </p>
            <p>
            ¡Gracias por visitar OtakuHaven!
            </p>
        </div>
    );
}

export default Information;
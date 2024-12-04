import ContactForm from '../components/ContactForm'; 
function Contact() {
    return (
        <div className='contact-page'>
            <h1>Contactanos</h1>
            <p>Envíanos un mensaje y te responderemos lo más pronto posible.</p>
            <hr />
            <p>Puedes recomendarnos un Anime que no esté en el listado, informarnos acerca de un error, o preguntarnos acerca de un Anime en especifico</p>
            <ContactForm />
        </div>
    );
}

export default Contact;
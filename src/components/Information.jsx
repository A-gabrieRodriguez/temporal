import Card from './Card.jsx';
import PremiumIcon from '../assets/Premium-icon.png';
import DeliveryIcon from '../assets/fast-delivery-icon.png';

const Information = () => {
    return (
        // usamos grid, decimos que queremos dos columnas y una fila
        // y que queremos un espacio de 2 entre cada elemento
        // y que queremos que ocupe todo el ancho disponible
        <div className='grid grid-cols-2 grid-rows-1 gap-2 w-full '>
            <Card image={PremiumIcon} title="Calidad en nuestros productos" description="En Panadería La Fuente, horneamos con pasión y dedicación cada día para ofrecerte productos frescos, deliciosos y de la más alta calidad. Utilizamos ingredientes naturales seleccionados cuidadosamente y seguimos recetas artesanales que combinan tradición con un toque moderno. Nuestro compromiso es brindarte el mejor sabor en cada bocado, porque creemos que un buen pan no solo alimenta, también alegra el alma." />
            <Card image={DeliveryIcon} title="Entrega rápida y segura" description={
                <>
                    Nuestro servicio de delivery es rápido, seguro y 100% confiable. Contamos con transporte certificado y personal capacitado para garantizar que tu pedido llegue en perfectas condiciones. En Panadería La Fuente nos comprometemos con tu satisfacción:{" "}
                    <span className="font-extrabold">
                        ¡si ocurre algún accidente en la entrega, repondremos tu pedido sin costo adicional!
                    </span>{" "}
                    Disfruta de tus productos favoritos sin salir de casa, con la tranquilidad de que estás en buenas manos.
                </>
            } />
        </div>
    )
}
export default Information;
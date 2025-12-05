import SlideBackground from '../../assets/slice_background.jpg';
import TextSlice from './TextSlice';
import ImageSlice from './ImageSlice';

const Slice = (Tranparency, Tranparency2) => {
    return (
        <>

            <ImageSlice image={SlideBackground} Tranparency={Tranparency} Tranparency2={Tranparency2} />
            {/* Superponer el texto alineado a la izquierda encima de la imagen */}
            <TextSlice />
        </>

    );
}
export default Slice;
import ImageSliceDesert from "./assets/slice_background.jpg";
import ImageSlice from "./components/Slice/ImageSlice2.jsx";
import PieceCake from './assets/pieces-cake.jpg';
import AboutUsImage from './assets/AboutUs.webp'
import Footer from './components/Footer.jsx';
import Reveal from './components/Reveal.jsx';
import Title from "./components/Title.jsx";

const Nosotros = () => {
  return (
    <>
    <Reveal>
      <ImageSlice image={ImageSliceDesert} />


  <Title text="Conócenos" />
  <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex justify-center mb-8">
        </div>

        {/* Contenido principal: texto e imagen lado a lado */}
        <div className="bg-amber-50 rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 items-stretch">
            <div className="p-12 flex flex-col justify-center md:col-span-1">
              <h1 className="text-4xl font-bold text-amber-900 mb-4">Sobre Nosotros</h1>
              <p className="text-lg text-gray-700 mb-4">
                En La Fuente somos una panadería artesanal con años de tradición. Trabajamos con
                ingredientes locales y técnicas clásicas para ofrecer productos frescos cada día.
              </p>
              <p className="text-gray-600">
                Nuestro compromiso es la calidad: masas fermentadas lentamente, mantequillas
                seleccionadas y hornos a la temperatura justa para lograr texturas y sabores únicos.
              </p>
            </div>
            <div className="md:col-span-2 h-96 md:h-full self-stretch">
              <img src={AboutUsImage} alt="Panadería" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* Misión y Visión — cards más pequeñas */}
      <div className="w-full px-4 py-8 sm:px-6 lg:px-8 mb-15">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="p-6 bg-amber-50 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-amber-900 mb-2">Misión</h3>
              <p className="text-lg text-gray-700">
                Ofrecer productos de panadería artesanales, frescos y deliciosos, preparados con
                ingredientes locales y procesos tradicionales para enriquecer la experiencia diaria de
                nuestros clientes.
              </p>
            </div>

            <div className="p-6 bg-amber-50 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-amber-900 mb-2">Visión</h3>
              <p className="text-lg text-gray-700">
                Ser reconocidos como la panadería referente en la región por nuestra calidad,
                sostenibilidad y cariño por el oficio, expandiendo nuestro alcance y manteniendo
                siempre la artesanía en cada receta.
              </p>
            </div>
          </div>
        </div>
      </div>

    </Reveal>

      <Footer />
    </>
  );
}

export default Nosotros;

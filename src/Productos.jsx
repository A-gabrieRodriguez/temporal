import Image from "./assets/slice_background.jpg";
import Footer from './components/Footer.jsx';
import ImageSlice from "./components/Slice/ImageSlice2.jsx";
import Title from "./components/Title.jsx";
import Card from "./components/Card/Card.jsx";
import PieceCake from "./assets/pieces-cake.jpg";
import Cupcakes from "./assets/cupcakes.jpg";
import Donuts from "./assets/donuts.jpg";
import Milkbaskets from "./assets/Desert.jpg";

const Productos = () => {
  return (
    <>
      <ImageSlice image={Image} />
      <Title text="Nuestros Productos" />

      {/*Aqui van las tarjetas de productos*/}
      {/* 
        El contenedor principal de las tarjetas de productos utiliza las siguientes clases de Tailwind:
        - mx-auto: centra horizontalmente el contenedor.
        - max-w-2xl y lg:max-w-7xl: define el ancho máximo en pantallas pequeñas y grandes.
        - px-4, sm:px-6, lg:px-8: define el padding horizontal en diferentes tamaños de pantalla.
        - py-16, sm:py-24: define el padding vertical.
        
        El grid interno utiliza:
        -mt-6: margen superior.
        -grid grid-cols-1 -> en pantallas pequeñas,
        -sm:grid-cols-2 - -> en pantallas grandes,
        -lg:grid-cols-4: -> en pantallas extra grandes,
         definen la cantidad de columnas según el tamaño de pantalla.
        - gap-x-6, gap-y-10, xl:gap-x-8: define el espacio entre columnas y filas.
      */}
      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-15 lg:max-w-7xl lg:px-8">
        <div className="mt-6
         grid 
         grid-cols-1 gap-x-6 gap-y-10 
         sm:grid-cols-2 
         lg:grid-cols-4 
         xl:gap-x-8" >

          <Card
            img={PieceCake}
            title="Piece of Cake"
            description="Suaves capas de pastel esponjoso con el balance perfecto entre dulzura y textura, ideal para acompañar con una taza de café o té."
            price="$5.00"
          />
          <Card
            img={Cupcakes}
            title="Cupcakes"
            description="Pequeños pero irresistibles, decorados con cremoso betún y un sabor que conquista desde el primer mordisco."
            price="$3.00"
          />
          <Card
            img={Donuts}
            title="Donuts"
            description="Clásicos y dulces, con un glaseado perfecto que se derrite en la boca, ¡un antojo que nunca pasa de moda!"
            price="$2.00"
          />
          <Card
            img={Milkbaskets}
            title="Desserts"
            description="Postres variados con un toque especial de la casa: frescura, dulzura y calidad en cada porción."
            price="$4.00"
          />
          <Card
            img={Donuts}
            title="Donuts"
            description="Clásicos y dulces, con un glaseado perfecto que se derrite en la boca, ¡un antojo que nunca pasa de moda!"
            price="$2.00"
          />
          <Card
            img={Milkbaskets}
            title="Desserts"
            description="Postres variados con un toque especial de la casa: frescura, dulzura y calidad en cada porción."
            price="$4.00"
          />
          <Card
            img={PieceCake}
            title="Piece of Cake"
            description="Suaves capas de pastel esponjoso con el balance perfecto entre dulzura y textura, ideal para acompañar con una taza de café o té."
            price="$5.00"
          />
          <Card
            img={Cupcakes}
            title="Cupcakes"
            description="Pequeños pero irresistibles, decorados con cremoso betún y un sabor que conquista desde el primer mordisco."
            price="$3.00"
          />


        </div>
      </div>
      <Footer />
    </>
  );
}

export default Productos;

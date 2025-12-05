import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx';
import Slice from './components/Slice/Slice.jsx';
import Information from './components/Information.jsx';
import Title from './components/Title.jsx';
import SpaceSquare from './components/SpaceSquare.jsx';
import WriteUs from './components/WriteUs.jsx';
import Footer from './components/Footer.jsx';
import Nosotros from './Nosotros.jsx';
import Productos from './Productos.jsx';
import Card from './components/Card/Card.jsx';
import Carousel from './components/Carousel.jsx';
import Reveal from './components/Reveal.jsx';
import PieceCake from './assets/pieces-cake.jpg';
import Cupcakes from './assets/cupcakes.jpg';
import Donuts from './assets/donuts.jpg';

const App = () => {
  return (
    <>
      {/* Navbar siempre visible */}
      <Navbar />

      {/* Contenido que cambia */}
      <Routes>
        <Route path="/" element={
          <>

            {/* Slice siempre visible (reveal on scroll) */}
            <Reveal>
              <Slice />
            </Reveal>

            {/* Espacio para los productos de temporada */}
            <Reveal>
              <Title text="Productos de temporada" />
            </Reveal>

              <div className="w-full px-4 py-8 sm:px-6 lg:px-8">
                <div className="w-full max-w-8xl mx-auto mt-6">
                  <Reveal>
                    <Carousel>
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
                      img={PieceCake}
                      title="Brioche"
                      description="Brioche recién horneado: mantecoso, tierno y perfecto para desayunos o meriendas. Una delicia artesanal."
                      price="$4.00"
                    />
                    <Card
                      img={Cupcakes}
                      title="Croissant"
                      description="Croissant hojaldrado y dorado, perfecto para acompañar con mermelada o solo. Textura crujiente y mantequilla natural."
                      price="$2.50"
                    />
                    <Card
                      img={Donuts}
                      title="Pan Integral"
                      description="Pan integral con semillas, horneado lentamente para conservar aroma y textura rústica. Saludable y sabroso."
                      price="$3.50"
                    />
                    <Card
                      img={PieceCake}
                      title="Tarta Frutada"
                      description="Tarta de frutas frescas sobre crema pastelera y masa quebrada casera. Color y sabor en cada porción."
                      price="$6.00"
                    />
                    <Card
                      img={PieceCake}
                      title="Tarta Frutada"
                      description="Tarta de frutas frescas sobre crema pastelera y masa quebrada casera. Color y sabor en cada porción."
                      price="$6.00"
                    />
                    </Carousel>
                  </Reveal>
                </div>
              </div>

            <Reveal>
              <WriteUs />
            </Reveal>

            <Reveal>
              <Footer />
            </Reveal>
          </>
        } />
        <Route path="/nosotros" element={<Nosotros />} />
  <Route path="/productos" element={<Reveal><Productos /></Reveal>} />
      </Routes>
    </>
  )
}

export default App

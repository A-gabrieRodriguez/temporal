import PremiumIcon from '../assets/Premium-icon.png';

const Card = ({ image, title, description }) => {
  return (
    // En este caso con col-span-1 hacemos que el card ocupe una columna, despues con max-w-[70%] le decimos que ocupe un 70% del ancho disponible pero tambien podemos usar max-w-md o max-w-lg que son clases de tailwind que nos permiten definir un ancho maximo
    <div className="bg-white shadow-md rounded-lg p-6 text-center col-span-1 max-w-[65%] mx-auto">
  <img
    src={image}
    alt="Premium Icon"
    className="w-50 h-50 mx-auto"
  />
  <h1 className="mt-10 text-4xl font-bold mb-4">{title}</h1>
  <article className="text-wrap">
      <p className="text-left text-gray-700">{description}</p>
  </article>
</div>
  );
}

export default Card;
const ImageSlice = ({ image, from = 0, to = 80, brightness = 0.9 }) => {
  const mask = `linear-gradient(to bottom, rgba(0,0,0,1) ${from}%, rgba(0,0,0,0) ${to}%)`;

  return (
    <div
      className="relative w-full"
      style={{
        WebkitMaskImage: mask,
        maskImage: mask,
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
      }}
    >
      <img
        src={image}
        alt="Slide Background pastry"
        className="block w-full h-[250px] object-cover"
        style={{ filter: `brightness(${brightness})` }}
      />
    </div>
  );
};

export default ImageSlice;

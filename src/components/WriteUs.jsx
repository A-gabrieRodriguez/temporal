
import FormForSend from "./FormInformation/FormForSend.jsx";

const WriteUs = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-1 gap-4 mb-20">
      <div className="p-3">
        {/* Place title above the form within the same inner container so they share left margin */}
        <div className="">
          <div className="max-w-130 mx-auto">
            <h2 className="text-5xl font-bold text-amber-900">Escríbenos</h2>
            <br></br>
            {/*Formulario de contacto*/}
            <FormForSend />
          </div>
        </div>
      </div>
      <div className="p-4 rounded-lg flex flex-col items-center">
        <div className="mb-4 text-center">
          <h2 className="text-sm font-bold text-blue-700">Ubicación Destacada</h2>
          <p className="text-xs text-gray-700">Central Gallery, San Salvador, El Salvador</p>
        </div>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.3434826666858!2d-89.19573522419174!3d13.697634786688564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6330e9696730ed%3A0xf5b216a8cde57bd!2sCentral%20Gallery!5e0!3m2!1sen!2ssv!4v1754536730443!5m2!1sen!2ssv"
          width="100%"
          height="420"
          style={{ border: 0, minHeight: 320, width: '90%' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg border-4 border-blue-500 shadow-md w-full"
        />
      </div>
    </div>
  );
}

export default WriteUs;

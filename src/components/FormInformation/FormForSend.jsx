import Input  from "./Input.jsx";
import TextArea from "./TextAre.jsx";

const FormForSend = () => {
    return (
        <form className="max-w-130 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              id="name"
              label="Nombre completo"
              placeholder="Ingrese su nombre"
              type="text"
              required={true}
            />
            <Input
              id="phone"
              label="Teléfono"
              placeholder="(123) 456-7890"
              type="tel"
              required={false}
            />
          </div>
          <Input
            id="email"
            label="Email"
            placeholder="Ingrese su email"
            type="email"
            required={true}
          />
          <TextArea
            id="message"
            label="Mensaje"
            placeholder="Escriba su mensaje"
            type="text"
            required={true}
          />
          <button
            type="submit"
            className="text-white bg-amber-400 hover:bg-amber-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-extrabold rounded-lg text-base w-full sm:w-auto px-7 py-3 text-center dark:bg-amber-600 dark:hover:bg-amber-400 dark:focus:ring-bg-amber-600"
          >
            Send
          </button>
        </form>

  );
};

export default FormForSend;

const Input = ({ id, label, placeholder, required, type, warningMessage }) => {
  return (
    <div className="mb-5">
      <label htmlFor={id} className="block mb-2 text-2xl font-extrabold text-gray-900 dark:text-amber-700">{label}</label>

      <input
        type={type}
        id={id}
        className="h-15 bg-white border border-gray-300 text-2xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-amber-50  dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        required={required}
      />

      {warningMessage ? (
        <p className="mt-2 text-sm text-red-600">{warningMessage}</p>
      ) : null}
    </div>
  );
};

export default Input;

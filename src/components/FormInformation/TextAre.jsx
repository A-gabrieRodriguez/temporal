const TextArea = ({ id, label, placeholder, required, type }) => {
    return (
        <>
            <label type={type} for={id} className="block mb-2 text-sm font-extrabold text-amber-700 dark:text-2xl">{label}</label>
            <textarea id={id} rows="4" className="block p-2.5 w-full bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-amber-50 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 text-2xl mb-5" placeholder={placeholder} required={required}></textarea>
        </>
    );
};

export default TextArea;

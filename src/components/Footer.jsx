import PhoneIcon from '../assets/phone-call.png';
import EmailIon from '../assets/email.png';
import WebIcon from '../assets/webicon.png';
// Logo image removed - using text logo instead
// Social icons replaced with inline SVGs (use currentColor)
import FooterLogo from '../assets/footer-logo.webp';
import OlaFooter from '../assets/ola-footer.svg';

const Footer = () => {
  return (
    <>
      <div className="-mt-28 md:-mt-20 lg:-mt-24">
        <img src={OlaFooter} alt="Ola footer" className="block w-full h-36 md:h-48 lg:h-56 object-cover" />
      </div>
    <footer className="bg-amber-900 text-amber-100 py-8">
      {/* Top wave separator — use external SVG file */}

      {/* Force-fit any image placed inside the emblem to avoid overflow */}
      <style>{`.footer-emblem img{width:100%;height:100%;object-fit:cover;display:block;}`}</style>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">

          {/* Contact column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold text-white">Contactos</h3>

            <div className="space-y-1">
              <div className="flex items-center gap-1">
                <img src={PhoneIcon} alt="Phone" className="w-8 h-8" />
                <a href="tel:+1234567890" className="text-amber-100 font-medium hover:text-yellow-300">(123) 456-7890</a>
              </div>

              <div className="flex items-center gap-1">
                <img src={EmailIon} alt="Email" className="w-8 h-8" />
                <a href="mailto:info@mybakery.com" className="text-amber-100 font-medium hover:text-yellow-300">info@mybakery.com</a>
              </div>

              <div className="flex items-center gap-1">
                <img src={WebIcon} alt="Website" className="w-8 h-8" />
                <a href="https://LafuenteBakery.com" target="_blank" rel="noreferrer" className="text-amber-100 font-medium hover:text-yellow-300">LafuenteBakery.com</a>
              </div>
            </div>
          </div>

          {/* Branding / Socials column */}
          <div className="flex flex-col items-center md:items-end gap-4">
            {/* Text logo (SVG/text-based) */}
              <div className="flex flex-col items-center gap-2 mt-6 md:mt-8 mb-2">
                <div className="footer-emblem flex items-center justify-center w-20 md:w-24 lg:w-28 h-20 md:h-24 lg:h-28 rounded-full bg-gradient-to-br from-yellow-300 to-amber-600 text-amber-900 font-bold text-lg shadow-lg overflow-hidden">
                  {/* Image will be fitted to the emblem */}
                  <img src={FooterLogo} alt="La Fuente" />
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-serif font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-amber-600">La Fuente</div>
                  <div className="text-sm text-amber-200">Panadería artesanal</div>
                </div>
              </div>

            {/* Social icons moved below for better balance */}
          </div>

        </div>

        {/* Centered social icons row */}
        <div className="mt-8 border-t border-amber-700 pt-6">
          <div className="flex items-center justify-center gap-6">
            <a href="#" aria-label="Facebook" className="transform hover:scale-110 transition-transform text-amber-100">
              {/* Facebook (filled) */}
              <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M22 12.073C22 6.48 17.523 2 12 2S2 6.48 2 12.073C2 17.094 5.656 21.128 10.438 21.98v-6.99H7.898v-2.918h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.261c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.918h-2.33v6.99C18.344 21.128 22 17.094 22 12.073z" />
              </svg>
            </a>

            <a href="#" aria-label="Instagram" className="transform hover:scale-110 transition-transform text-amber-100">
              {/* Instagram (outline) */}
              <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
                <circle cx="12" cy="12" r="3.5" />
                <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
              </svg>
            </a>

            <a href="#" aria-label="Twitter" className="transform hover:scale-110 transition-transform text-amber-100">
              {/* Twitter (bird) */}
              <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M23 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.38 4.482A13.945 13.945 0 011.671 3.149a4.916 4.916 0 001.523 6.573 4.897 4.897 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.918 4.918 0 004.588 3.417A9.867 9.867 0 010 19.54a13.94 13.94 0 007.548 2.212c9.056 0 14.009-7.496 14.009-13.986 0-.21-.005-.423-.014-.634A10.012 10.012 0 0023 4.557z" />
              </svg>
            </a>
          </div>

          <p className="mt-4 text-center text-sm text-amber-200">&copy; {new Date().getFullYear()} La Fuente — Panadería artesanal</p>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;

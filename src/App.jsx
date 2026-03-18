import "./index.css";
import avatar from "./assets/avatar.png";
import Link from "./components/Link";
import "./js/formVlidation.js";
import { useState } from "react";
import ContactForm from "./components/Contact.jsx";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <main className=" relative  mx-auto w-140 flex justify-center text-center m-10 flex-col">
        <div className="mesh-gradient"></div>
        <div className="info z-10">
          <div className="avatar w-fit flex justify-center mx-auto size-34 bg-blue-700 rounded-full shadow-shadow-[0_90px_60px_rgba(0,0,0,0.4)] ">
            <img src={avatar} alt="Imagen de un avatar parecido" />
          </div>
          <div className="name text-5xl font-semibold text-white m-4">
            Ismael Martín
          </div>
          <div className="rol text-zinc-300 text-lg">
            Desarrollador Web Front-End
          </div>
        </div>
        <div className="links z-10">
          <Link onOpenModal={() => setIsModalOpen(true)} />
        </div>
      </main>
      {isModalOpen && (
        <div className="fixed inset-0 z-20 bg-black/50 flex items-center justify-center">
          <div className="bg-zinc-900 p-6 rounded-2xl text-white">
            <h2 className="text-xl mb-8 font-bold text-center">Contacto</h2>
            <ContactForm />
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 px-4 py-2 bg-blue-500 rounded-lg"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;

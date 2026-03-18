import "./App.css";
import "./index.css";
import avatar from "./assets/avatar.png";

function App() {
  return (
    <>
      <main className="mx-auto w-140 flex justify-center text-center m-10">
        <div class="mesh-gradient"></div>
        <div className="info z-10">
          <div className="avatar w-fit flex justify-center mx-auto size-34 bg-blue-500 rounded-full shadow-shadow-[0_90px_60px_rgba(0,0,0,0.4)] ">
            <img src={avatar} alt="Imagen de un avatar parecido" />
          </div>
          <div className="name text-5xl font-semibold text-white m-4">
            Ismael Martín
          </div>
          <div className="rol text-zinc-300 text-lg">
            Desarrollador Web Front-End
          </div>
        </div>
      </main>
    </>
  );
}

export default App;

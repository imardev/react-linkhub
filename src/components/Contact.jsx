import { useState } from "react";

export default function ContactForm() {
  const [result, setResult] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [email, setEmail] = useState("");
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!name.trim() || !email.trim()) {
      setStatus("error");
      setResult("Completa todos los campos.");
      return;
    }

    if (!isValidEmail(email)) {
      setStatus("error");
      setResult("Introduce un email válido");
      return;
    }

    setStatus("loading");
    setResult("Enviando...");
    const formData = new FormData(event.target);
    formData.append("access_key", "6643e89e-adfb-435c-98fa-8513692c2867");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setStatus("success");
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        setResult("Error");
      }
    } catch (error) {
      setStatus("error");
      setResult("Error de red al enviar el formulario.");
      console.error("ERROR DEL SISTEMA:", error);
    }
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <script src="https://web3forms.com/client/script.js" async defer></script>
      <input
        type="text"
        name="name"
        onChange={(e) => setName(e.target.value)}
        placeholder="Nombre: "
        className="name text-white bg-zinc-800/30 rounded-xl p-2 w-80 ring ring-blue-500/30"
      />
      <input
        type="email"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Correo: "
        className="email text-white bg-zinc-800/30 rounded-xl p-2 w-80 ring ring-blue-500/30"
      />
      <input
        type="text"
        placeholder="Empresa S.L."
        name="company"
        className="text-white bg-zinc-800/30 rounded-xl p-2 w-80 ring ring-blue-500/30"
      ></input>
      <select
        aria-label="Tipo de oportunidad"
        name="opportunity_type"
        defaultValue=""
        className="mb-3 text-white bg-zinc-800/30 rounded-xl p-2 w-80 ring ring-blue-500/30 appearance-none "
      >
        <option
          disabled
          value=""
          className="bg-zinc-800 text-white  appearance-none"
        >
          Tipo de oportunidad
        </option>
        <option
          className="bg-zinc-800 appearance-none text-white"
          value="Propuesta laboral"
        >
          Propuesta laboral
        </option>
        <option
          className="bg-zinc-800 appearance-none text-white"
          value="Incorporación a equipo"
        >
          Incorporación a equipo
        </option>
        <option
          className="bg-zinc-800 appearance-none text-white"
          value="Consulta profesional"
        >
          Consulta profesional
        </option>
        <option
          className="bg-zinc-800 appearance-none text-white"
          value="Información adicional sobre mi perfil"
        >
          Información adicional sobre mi perfil
        </option>
        <option className="bg-zinc-800 appearance-none text-white" value="Otra">
          Otra
        </option>
      </select>
      <textarea
        name="message"
        placeholder="Indique su mensaje: "
        className="text-white bg-zinc-800/30 rounded-xl p-2 w-80 ring ring-blue-500/30"
      ></textarea>
      <input type="text" name="botcheck" className="sr-only" />
      <div className="h-captcha" data-captcha="true" data-theme="dark"></div>
      <button
        type="submit"
        className="bg-blue-500 rounded-xl px-4 py-2 cursor-pointer hover:scale-110 duration-500"
      >
        Submit Form
      </button>
      <span
        className={`resultDisplay ${
          status === "error"
            ? "text-red-500"
            : status === "success"
              ? "text-green-500"
              : status === "loading"
                ? "text-yellow-500"
                : "text-gray-400"
        } `}
      >
        {result}
      </span>
    </form>
  );
}

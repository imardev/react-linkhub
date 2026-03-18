import { useState } from "react";

export default function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "6643e89e-adfb-435c-98fa-8513692c2867");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult("Error");
    }
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <script src="https://web3forms.com/client/script.js" async defer></script>
      <input
        type="text"
        name="name"
        required
        placeholder="Nombre: "
        className="text-white bg-zinc-800/30 rounded-xl p-2 w-80 ring ring-blue-500/30"
      />
      <input
        type="email"
        name="email"
        required
        placeholder="Correo: "
        className="text-white bg-zinc-800/30 rounded-xl p-2 w-80 ring ring-blue-500/30"
      />
      <textarea
        name="message"
        required
        placeholder="Indique su mensaje: "
        className="text-white bg-zinc-800/30 rounded-xl p-2 w-80 ring ring-blue-500/30"
      ></textarea>
      <input type="text" name="botcheck" className="sr-only" />
      <div class="h-captcha" data-captcha="true" data-theme="dark"></div>
      <button
        type="submit"
        className="bg-blue-500 rounded-xl px-4 py-2 cursor-pointer hover:scale-110 duration-500"
      >
        Submit Form
      </button>
      <span>{result}</span>
    </form>
  );
}

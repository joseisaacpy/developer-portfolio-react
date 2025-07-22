import japanImg from "../../assets/img/japan.webp";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";

const Contato = () => {
  // Função pra copiar o e-mail
  const handleEmailClick = () => {
    const email = "joseisaacnascimento@gmail.com";
    navigator.clipboard.writeText(email);
    toast.success("E-mail copiado com sucesso");
  };
  return (
    <section className="bg-black flex flex-col items-center justify-center p-4">
      <h4 className="text-2xl md:text-3xl font-bold text-center text-white">
        Conexões constroem pontes — vamos conversar!
      </h4>
      <div className="p-2 flex flex-col items-center justify-center w-full md:max-w-[80%]">
        <img
          src={japanImg}
          loading="lazy"
          alt="Imagem de um lugar japonês"
          className="w-full max-h-[200px] md:max-h-[350px] object-cover rounded-t-2xl"
        />
        <div className="p-2 bg-white flex items-center justify-center gap-4 rounded-b-2xl w-full">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/jos%C3%A9-isaac-nascimento/"
            className="hover:scale-105 transition duration-300 hover:text-blue-500"
          >
            <FaLinkedin className="text-3xl" />
          </a>
          <a
            target="_blank"
            href="https://github.com/joseisaacpy"
            className="hover:scale-105 transition duration-300 hover:text-blue-500"
          >
            <FaGithub className="text-3xl" />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/j0se_isaacsn/"
            className="hover:scale-105 transition duration-300 hover:text-blue-500"
          >
            <FaInstagram className="text-3xl" />
          </a>
          <a
            onClick={handleEmailClick}
            title="Copiar e-mail"
            className="cursor-pointer hover:scale-105 transition duration-300 hover:text-blue-500"
          >
            <FaEnvelope className="text-3xl" />
          </a>
        </div>
      </div>
      <ToastContainer autoClose={1000} />
    </section>
  );
};

export default Contato;

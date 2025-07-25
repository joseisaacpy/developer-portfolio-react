import techsBg from "../../assets/img/background-techs.webp";
import { FaMessage } from "react-icons/fa6";
import { FaCalendar, FaStar, FaCode, FaLink } from "react-icons/fa";

import { useState, useEffect } from "react";
const Projetos = () => {
  const [projetos, setProjetos] = useState([]); // Estado para armazenar os projetos

  // Função para buscar os projetos da API
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/projetos");
      const data = await response.json();
      setProjetos(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData(); // Chama a função para buscar os projetos ao montar o componente
  }, []);

  return (
    <section
      className="relative py-16 bg-gray-100 text-gray-800 bg-cover bg-center"
      style={{ backgroundImage: `url(${techsBg})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <h2 className="relative z-10 text-3xl font-poppins-bold text-center text-white mb-5">
        Projetos
      </h2>
      <div
        id="container-projetos"
        className="relative z-10 grid p-2 items-center justify-center m-auto grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3"
      >
        {projetos.map((projeto) => (
          <div className="flex flex-col justify-between gap-1.5 p-4 rounded-lg shadow-md bg-slate-800 text-white w-full h-full">
            <h2 className="text-xl font-bold">
              <FaCode className="inline-block mr-1" />
              {""}
              {projeto.nome}
            </h2>
            <p>
              <FaMessage className="inline-block mr-1" /> {projeto.descricao}
            </p>
            <p>
              <FaCalendar className="inline-block mr-1" />
              Data de criação:{" "}
              {new Date(projeto.data_criacao).toLocaleDateString("pt-BR")}
            </p>
            <p>
              <FaStar className="inline-block mr-1" />
              Status: {projeto.status}
            </p>
            <a target="_blank" href={projeto.link} className="underline">
              {" "}
              <FaLink className="inline-block mr-1" />
              Link do Projeto
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projetos;

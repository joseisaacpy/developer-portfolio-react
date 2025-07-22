import techsBg from "../../assets/img/background-techs.webp";
const Projetos = () => {
  return (
    <section
      className="relative py-16 bg-gray-100 text-gray-800 bg-cover bg-center"
      style={{ backgroundImage: `url(${techsBg})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <h2 className="relative z-10 text-3xl font-bold text-center text-white mb-5">
        Projetos
      </h2>
      <div
        id="container-projetos"
        className="relative z-10 grid p-2 items-center justify-center m-auto grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3"
      ></div>
    </section>
  );
};

export default Projetos;

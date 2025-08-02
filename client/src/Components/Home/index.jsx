// imagem hero
import heroImage from "../../assets/img/hero-image.webp";
const Home = () => {
  return (
    <>
      {/* <section className="relative flex flex-col items-center justify-center h-[100vh] bg-cover bg-center bg-no-repeat bg-[url('https://joseisaacpy.github.io/developer-portfolio/img/hero/hero-image.webp')] text-white"> */}

      <section className="relative flex flex-col items-center justify-center h-screen text-white">
        <img
          src={heroImage}
          alt="Imagem Hero"
          className="absolute inset-0 w-full h-full object-cover z-0"
          loading="eager"
          fetchpriority="high"
        />

        <div className="absolute inset-0 bg-black/50"></div>
        <div className="p-2 relative z-10 flex flex-col gap-2 items-center justify-center h-full text-white text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-center">
            Olá, me chamo <span className="text-blue-500">José Isaac</span>!
            <span className="wave-hand">👋🏽</span>
          </h1>
          <p className="text-xl md:text-2xl font-bold">
            Desenvolvedor <span className="text-blue-500">Front-end</span>
          </p>
          <p className="text-lg md:text-xl text-gray-200">
            Transformando ideias em códigos e tomando um cafezinho.
          </p>
          <p className="text-lg md:text-xl text-blue-500 font-bold">
            Vamos criar algo juntos?
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;

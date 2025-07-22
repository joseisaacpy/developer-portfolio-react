// Components

const Home = () => {
  return (
    <>
      <section className="relative flex flex-col items-center justify-center h-[100vh] bg-cover bg-center bg-no-repeat bg-[url('https://joseisaacpy.github.io/developer-portfolio/img/hero/hero-image.webp')] text-white">
        <div class="absolute inset-0 bg-black/50"></div>
        <div class="p-2 relative z-10 flex flex-col gap-2 items-center justify-center h-full text-white text-center">
          <h1 class="text-4xl md:text-6xl font-extrabold text-center">
            Olá, me chamo <span class="text-blue-500">José Isaac</span>!
            <span class="wave-hand">👋🏽</span>
          </h1>
          <p class="text-xl md:text-2xl font-medium">
            Desenvolvedor{" "}
            <span class="text-blue-500 font-bold">Full Stack</span>
          </p>
          <p class="text-lg md:text-xl text-gray-200">
            Transformando ideias em códigos e tomando um cafezinho.
          </p>
          <p class="text-lg md:text-xl text-blue-500 font-bold">
            Vamos criar algo juntos?
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;

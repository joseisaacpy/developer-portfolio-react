const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="h-20 w-20 animate-spin rounded-full border-4 border-solid border-white border-t-transparent"></div>
      <h1 className="text-2xl text-white font-bold z-10">Carregando...</h1>
    </div>
  );
};

export default Loader;

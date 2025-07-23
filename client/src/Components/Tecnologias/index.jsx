const Tecnologias = () => {
    return(
      <section
        id="tecnologias"
        className="py-16 bg-cover text-gray-900 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-5">
            Tecnologias
          </h2>

          <div
            id="container-tecnologias"
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 justify-center"
          >
            <div
              className="flex flex-col items-center justify-center bg-white border shadow-2xl p-4 rounded-2xl hover:scale-105 hover:shadow-lg transition duration-300"
            >
              <div className="flex space-x-3 mb-2">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                  alt="Logo do HTML5"
                  className="h-8 md:h-10"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
                  alt="Logo do CSS3"
                  className="h-8 md:h-10"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                  alt="Logo do Tailwind CSS"
                  className="h-8 md:h-10"
                />
              </div>
              <p className="text-sm font-medium text-center">
                HTML, CSS e Tailwind CSS
              </p>
            </div>

            <div
              className="flex flex-col items-center bg-white border shadow-2xl p-4 rounded-2xl hover:scale-105 hover:shadow-lg transition duration-300"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                alt="Logo do JavaScript"
                className="h-16"
              />
              <p className="mt-2 text-sm font-medium">JavaScript</p>
            </div>

            <div
              className="flex flex-col items-center bg-white border shadow-2xl p-4 rounded-2xl hover:scale-105 hover:shadow-lg transition duration-300"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
                alt="Logo do Node.js"
                className="h-16"
              />
              <p className="mt-2 text-sm font-medium">Node.js</p>
            </div>

            <div
              className="flex flex-col items-center bg-white border shadow-2xl p-4 rounded-2xl hover:scale-105 hover:shadow-lg transition duration-300"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
                alt="Logo do Express.js"
                className="h-16"
              />

              <p className="mt-2 text-sm font-medium">Express.js</p>
            </div>

            <div
              className="flex flex-col items-center bg-white border shadow-2xl p-4 rounded-2xl hover:scale-105 hover:shadow-lg transition duration-300"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
                alt="Logo do MySQL"
                className="h-16"
              />
              <p className="mt-2 text-sm font-medium">MySQL</p>
            </div>

            <div
              className="flex flex-col items-center bg-white border shadow-2xl p-4 rounded-2xl hover:scale-105 hover:shadow-lg transition duration-300"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg"
                alt="Logo do SQLite"
                className="h-16"
              />
              <p className="mt-2 text-sm font-medium">SQLite</p>
            </div>
            <div
              className="flex flex-col items-center bg-white border shadow-2xl p-4 rounded-2xl hover:scale-105 hover:shadow-lg transition duration-300"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
                alt="Logo do MongoDB"
                className="h-16"
              />
              <p className="mt-2 text-sm font-medium">MongoDB</p>
            </div>
            <div
              className="flex flex-col items-center bg-white border shadow-2xl p-4 rounded-2xl hover:scale-105 hover:shadow-lg transition duration-300"
            >
              <div className="flex space-x-3 mb-2">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
                  alt="Logo do Git"
                  className="h-10 md:h-16"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                  alt="Logo do GitHub"
                  className="h-10 md:h-16"
                />
              </div>
              <p className="text-sm font-medium text-center">Git e GitHub</p>
            </div>
          </div>
        </div>
      </section>
    )
};

export default Tecnologias
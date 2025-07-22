// Imports
import logoImg from "../../assets/img/dev-jose.png";
import { FaHome, FaUser, FaBriefcase, FaPhone } from "react-icons/fa";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
  // Estado pra controlar o menu
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header>
        {/* Navigation */}
        <nav className="w-full bg-orange-500 p-4 flex items-center justify-between md:justify-around">
          {/* Logo */}
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer flex items-center gap-1 hover:scale-110 transition-all duration-300"
          >
            <img
              src={logoImg}
              alt="Logo de José Isaac"
              className="rounded-full w-12 h-12"
            />

            <span className="hidden md:flex text-lg font-bold">
              joseisaacpy
            </span>
          </Link>
          {/* Menu burguer */}
          <IoMdMenu
            className="md:hidden text-3xl font-bold"
            onClick={() => setIsOpen(!isOpen)}
          />
          {/* Ul */}
          <ul className="hidden md:flex items-center gap-4">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="cursor-pointer transition-all hover:text-blue-950"
              >
                Início
              </Link>
            </li>
            <li>
              <Link
                to="sobre"
                smooth={true}
                duration={500}
                className="cursor-pointer transition-all hover:text-blue-950"
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                to="projetos"
                smooth={true}
                duration={500}
                className="cursor-pointer transition-all hover:text-blue-950"
              >
                Projetos
              </Link>
            </li>
            <li>
              <Link
                to="contato"
                smooth={true}
                duration={500}
                className="cursor-pointer transition-all hover:text-blue-950"
              >
                Contato
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Menu mobile (só aparece no mobile e quando isOpen for true) */}
      {isOpen && (
        <div className="md:hidden w-full h-screen fixed top-0 left-0 bg-orange-500 z-50 transition-all duration-300">
          <button
            className="absolute top-4 right-4 text-3xl cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            <IoMdClose />
          </button>
          <ul className="h-full flex flex-col items-center justify-center gap-6">
            <li>
              <a
                onClick={() => {
                  setIsOpen(false);
                }}
                className="text-2xl flex items-center justify-center gap-2 hover:scale-105 transition-transform"
                href=""
              >
                <FaHome /> Início
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setIsOpen(false);
                }}
                className="text-2xl flex items-center justify-center gap-2 hover:scale-105 transition-transform"
                href="#hero"
              >
                <FaUser /> Sobre
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setIsOpen(false);
                }}
                className="text-2xl flex items-center justify-center gap-2 hover:scale-105 transition-transform"
                href="#projetos"
              >
                <FaBriefcase /> Projetos
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setIsOpen(false);
                }}
                className="text-2xl flex items-center justify-center gap-2 hover:scale-105 transition-transform"
                href="#contato"
              >
                <FaPhone /> Contato
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;

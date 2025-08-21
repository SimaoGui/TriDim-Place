import { Box, Facebook, Github, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import "../../index.css";

const Footer = () => {
  return (
    <div className="w-full h-1/5 flex flex-col justify-center items-center bg-base-200">
      <footer className="footer w-full sm:!w-3/5 h-full !p-6 grid-cols-4 justify-center items-start sm:footer-horizontal bg-base-200 text-base-content 2xl:w-1/2">
        <aside className="sm:!mr-2 ">
          <Box className="w-12 h-12"/>
          <p>
            TriDim
            <br />
            Inovação para sua casa desde 1998.
          </p>
        </aside>
        <nav className="!pl-4">
          <h6 className="footer-title">Serviços</h6>
          <a className="cursor-pointer hover:translate-x-0.5  hover:text-primary transition-all ease-in">Termos</a>
          <a className="cursor-pointer hover:translate-x-0.5  hover:text-primary transition-all ease-in">Blog</a>
          <a className="cursor-pointer hover:translate-x-0.5  hover:text-primary transition-all ease-in">Suporte</a>
          <a className="cursor-pointer hover:translate-x-0.5  hover:text-primary transition-all ease-in">Anúncios</a>

        </nav>
        <nav className="!pl-4">
          <h6 className="footer-title">Empresa</h6>
          <a className="cursor-pointer hover:translate-x-0.5 hover:text-primary transition-all ease-in">Sobre Nós</a>
          <a className="cursor-pointer hover:translate-x-0.5  hover:text-primary transition-all ease-in">Contato</a>
          <a className="cursor-pointer hover:translate-x-0.5  hover:text-primary transition-all ease-in">Vagas</a>
        </nav>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-cols-3 grid-rows-2 gap-4">
            <Twitter className="w-6 h-6 hover:scale-110 transition-all ease-in hover:text-blue-500" />
            <Instagram className="w-6 h-6 hover:scale-110 transition-all ease-in hover:text-pink-500" />
            <Linkedin className="w-6 h-6 hover:scale-110 transition-all ease-in hover:text-blue-500" />
            <Youtube className="w-6 h-6 hover:scale-110 transition-all ease-in hover:text-red-500"/>
            <Facebook className="w-6 h-6 hover:scale-110 transition-all ease-in hover:text-blue-500"/>
            <Github className="w-6 h-6 hover:scale-110 transition-all ease-in hover:text-gray-500"/>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;

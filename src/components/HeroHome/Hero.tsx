import '../../index.css'
import HeroBackgroundImage from '../../assets/heropage.png' // Certifique-se que o caminho para a imagem está correto

const Hero = () => {
  return (
    // Container principal para centralizar o hero na página
    <div className='w-5/6 xl:w-full h-1/2 flex justify-center items-center !p-4 !mb-8 bg-base-100'>

      {/* Hero Section com a imagem de fundo escurecida aplicada via style */}
      <div
        style={{
          // Adiciona uma camada escura semi-transparente sobre a imagem de fundo
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${HeroBackgroundImage})`,
        }}
        className="w-full max-w-6xl h-[500px] md:h-[500px] rounded-2xl bg-cover bg-center shadow-2xl
                   flex justify-center items-center text-center text-white"
      >

        {/* Conteúdo de texto sobre a imagem */}
        <div className="bg-opacity-40 !p-8 rounded-xl w-full h-2/3 !my-auto flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-4xl md:text-5xl font-semibold">Experimente Produtos em 3D</h1>
          <p className="my-6 text-lg md:text-xl font-light italic !mt-4 !mb-6">
            Explore nossos modelos 3D interativos e visualize melhor os produtos antes de comprar!
          </p>
          <button className="bg-blue-600 cursor-pointer text-white font-bold !py-3 !px-6 rounded-lg text-lg hover:bg-blue-700 transition-colors">
            Explorar
          </button>
        </div>
        
      </div>
    </div>
  )
}

export default Hero
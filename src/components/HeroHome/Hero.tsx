import { useState } from 'react';
import '../../index.css';

// --- Imagens ---
import HeroBackgroundImage1 from '../../assets/heropage.png';
import HeroBackgroundImage2 from '../../assets/heropage-2.png';
import HeroBackgroundImage3 from '../../assets/heropage-3.png';

const Hero = () => {
  const slides = [
    {
      image: HeroBackgroundImage1,
      title: "Experimente Produtos em 3D",
      subtitle: "Explore nossos modelos 3D interativos e visualize melhor os produtos antes de comprar!",
    },
    {
      image: HeroBackgroundImage2,
      title: "Design Inovador e Moderno",
      subtitle: "Navegue por uma coleção de produtos com design de ponta e tecnologia de visualização avançada.",
    },
    {
      image: HeroBackgroundImage3,
      title: "Qualidade que Você Pode Ver",
      subtitle: "Gire, aproxime e veja cada detalhe com nossos modelos 3D de alta fidelidade.",
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='w-5/6 xl:w-full flex justify-center items-center !p-4 !mb-8 bg-base-100'>
      
      {/* Container principal (viewport) com overflow-hidden para esconder o resto do "filme" de slides */}
      <div className="w-full max-w-6xl h-[500px] rounded-2xl shadow-2xl relative overflow-hidden">
        
        {/* Container interno (filmstrip) que se move. Usamos 'transform' para a animação */}
        <div 
          className="flex h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {/* Mapeamos os slides aqui, cada um ocupando 100% do espaço do viewport */}
          {slides.map((slide, index) => (
            <div
              key={index}
              className="w-full h-full flex-shrink-0 bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slide.image})`,
              }}
            >
              {/* Conteúdo de texto sobre a imagem */}
              <div className="w-full h-full flex flex-col justify-center items-center text-center text-white p-8">
                <h1 className="text-4xl md:text-5xl font-semibold">{slide.title}</h1>
                <p className="my-6 text-lg md:text-xl font-light italic !mt-4 !mb-6 max-w-2xl">
                  {slide.subtitle}
                </p>
                <button className="bg-blue-600 cursor-pointer text-white font-bold !py-3 !px-6 rounded-lg text-lg hover:bg-blue-700 transition-colors">
                  Explorar
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* --- SETAS DE NAVEGAÇÃO (ficam fora do contêiner que se move) --- */}
        <div onClick={goToPrevious} className='absolute top-1/2 -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/30 text-white cursor-pointer hover:bg-black/50 z-10'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </div>
        
        <div onClick={goToNext} className='absolute top-1/2 -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/30 text-white cursor-pointer hover:bg-black/50 z-10'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </div>
        
        {/* --- INDICADORES (PONTOS) --- */}
        <div className='absolute bottom-5 left-1/2 -translate-x-1/2 flex justify-center space-x-2 z-10'>
          {slides.map((_, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${currentIndex === slideIndex ? 'bg-white' : 'bg-white/50'}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Hero;
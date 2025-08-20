import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import '../../index.css'
import Hero from '../../components/HeroHome/Hero'
import Category from '../../components/Sec1Home/Category'

const HomePage = () => {
  return (
    <div className='min-h-full w-full flex flex-col justify-between'>
        <Header />
        <main className='bg-base-100 w-full h-auto !py-8 flex flex-col justify-between items-center'>
          <Hero />
          <div className="!divider">Categorias</div>
          <Category />
        </main>
        <Footer />
    </div>
  )
}

export default HomePage
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import '../../index.css'
import Hero from '../../components/HeroHome/Hero'

const HomePage = () => {
  return (
    <div className='h-full w-full flex flex-col justify-between'>
        <Header />
        <main className='bg-base-100 w-full h-full flex flex-col justify-center items-center'>
          <Hero />
        </main>
        <Footer />
    </div>
  )
}

export default HomePage
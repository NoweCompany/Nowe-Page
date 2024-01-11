//componentes
import Nav from '../pages/components/Nav'
import Home from './components/home/Home'
import Page from './components/home/Paginas'
import WeonExplain from './components/home/WeonExplain'
import Card from './components/home/Card'
import Video from './components/home/Video'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function app() {
  return (
    <>
    <Nav />
    <Home /> 

    <section id="scroll"></section>
    <Page />

    
    <WeonExplain />
    <Card />
    <Video />
    <Footer />
    </>
  )
}

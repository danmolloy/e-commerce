import Image from "next/image";
import Link from "next/link";
import Layout from "../components/layout";
import Fade from 'react-reveal/Fade';
import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';

const CarouselUI = ({ children }) => (
  <div className="carousel">{children}</div>
);
const Carousel = makeCarousel(CarouselUI);


export default function Home() {
  return (
    <Layout>
      <div className="home">
        <div className="fade-element home-window justify-start">
          <h1 className="font-medium p-4">Sustainably-sourced coffee you'll <span className="text-red-500 font-bold">love</span></h1>
          <div >
            <Carousel defaultWait={4000} >
              <Slide right >
                <Image src="/images/coffee-log.jpeg" height="400" width="600"/>
              </Slide>
              <Slide right >
                <Image src="/images/coffee-hands.jpeg" height="400" width="600"/>
              </Slide>
              <Slide right>
                <Image src="/images/coffee-farm.jpeg" height="400" width="600"/>
              </Slide>
            </Carousel>
          </div>
        </div>
        <Fade  bottom>
          <div className="home-window">
          <h2 className="p-4 text-amber-500">About</h2>
          <p className="p-4">Our mission is to bring you fair-trade, sustainable coffee. Discover the taste of everyone is talking about.</p>
          <Image src="/images/coffee-plant.jpeg" width={600} height={400} />
          <Link href="/about">
            <a className="landing-page-link">Learn More</a>
          </Link>
          </div>
        </Fade>
        <Fade bottom> 
          <div className="home-window">
          <h2 className="p-4 text-amber-500">Shop</h2>
          <Image src="/images/hot-coffee.jpeg" width={600} height={400} />
          <p className="p-4">We sell a variety of blends with next day delivery.</p>

          <Link href="/products/viewAll">
            <a className="landing-page-link">
              Explore
            </a>
          </Link>
          </div>
        </Fade>
      </div>
    </Layout>
  )
}

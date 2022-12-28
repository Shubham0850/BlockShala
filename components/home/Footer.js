import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const linkStyle = "p text-gray-400";
  return (
    <div className="bg-[#000]">
      <div className="section">
        <Row>
          <Col md={6} className="mb-5 sm:mb-0">
            <h3 className="h3 mb-3 text-white">BlockShala</h3>
            <p className="p text-gray-400">
              {`SBR Photofilms is a team of  top candid wedding photographers and wedding filmers in India.  SBR Photofilms is headed by Rishav Agarwal. Who is one of the pioneers in the field of candid wedding photography in India. `}
            </p>
            <Row>
              <Col className="flex">
                <a
                  href=""
                  rel="noreferrer"
                  target="_blank"
                  className="text-3xl mr-3 mt-2 text-gray-500"
                >
                 <ion-icon name="logo-discord"></ion-icon>
                </a>
                <a
                  href="https://www.instagram.com/sbrphotofilms/?utm_medium=copy_link"
                  rel="noreferrer"
                  target="_blank"
                  className="text-3xl mr-3 mt-2 text-gray-500"
                >
                 <ion-icon name="logo-linkedin"></ion-icon>
                </a>
                <a
                  href="https://wa.me/919798936441"
                  rel="noreferrer"
                  target="_blank"
                  className="text-3xl mr-3 mt-2 text-gray-500"
                >
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
                <a
                  href="https://www.youtube.com/channel/UCwizlnwmhZgspMOQyUgKqww"
                  rel="noreferrer"
                  target="_blank"
                  className="text-3xl mr-3 mt-2 text-gray-500"
                >
                  <ion-icon name="logo-youtube"></ion-icon>
                </a>
              </Col>
            </Row>
          </Col>

          <Col xs={4} md={2} className="text-left sm:text-right">
            <h4 className="h4 text-white">Learn</h4>
            <div>
              <p className={linkStyle}>
                <Link href="/">Cources</Link>
              </p>
              <p className={linkStyle}>
                <Link href="/about-us">Tutorial</Link>
              </p>
              <p className={linkStyle}>
                <Link href="/book-now">Video</Link>
              </p>
              <p className={linkStyle}>
                <Link href="/portfolio">Challanges</Link>
              </p>
            </div>
          </Col>

          <Col xs={4} md={2} className="text-left sm:text-right">
            <h4 className="h4 text-white">Build</h4>
            <div>
              <p className={linkStyle}>
                <Link href="/">Contribute</Link>
              </p>
              <p className={linkStyle}>
                <Link href="/about-us">Earn</Link>
              </p>
              <p className={linkStyle}>
                <Link href="/book-now">Hackathons</Link>
              </p>
              <p className={linkStyle}>
                <Link href="/portfolio">Portfolio</Link>
              </p>
            </div>
          </Col>

          <Col xs={4} md={2} className="text-left sm:text-right text-white">
            <h4 className="h4">Resources</h4>
            <div>
              <p className={linkStyle}>
                <Link href="/resources/documentary">Documentaries</Link>
              </p>
              <p className={linkStyle}>
                <Link href="/resources/whitepaper">Whitepapers</Link>
              </p>
              <p className={linkStyle}>
                <Link href="/resources/projects">Projects</Link>
              </p>
              <p className={linkStyle}>
                <Link href="/resources/web3-glossary">Web3-Glossary</Link>
              </p>
            </div>
          </Col>
        </Row>
      </div>
      <div className="flex item-center justify-between p-3 border-t-2 border-gray-900 flex-wrap">
        <p className="text-gray-400 w-full sm:w-[50%]">
          ✨ The blockchain is going to change everything more than the internet
          has.
        </p>

        <p className="text-gray-400 w-full sm:w-[50%] text-left sm:text-right">⚡️ Open-source ⚡️ Free ⚡️ Peer-2-Peer</p>
      </div>
    </div>
  );
}

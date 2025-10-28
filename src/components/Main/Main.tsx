import Particles from "react-tsparticles";
import { Container } from "./styles";
import { Hero } from "../Hero/Hero";
import { About } from "../About/About";
import { Skills } from "../Skills/Skills";
import { Project } from "../Project/Project";
import { Contact } from "../Contact/Contact";

import python from "../../assets/python.svg";
import java from "../../assets/java.svg";
import wordpress from "../../assets/wordpress.svg";
import shopify from "../../assets/shopify.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import sassIcon from "../../assets/sass-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";

export function Main() {
  return (
    <Container>
      {/* Animated background only for Hero + About */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <Particles
          id="tsparticles"
          options={{
            fullScreen: { enable: false },
            detectRetina: true,
            fpsLimit: 60,
            interactivity: {
              events: {
                onHover: { enable: true, mode: "bubble" },
                resize: true,
              },
              modes: {
                bubble: { distance: 400, duration: 2, opacity: 0.8, size: 2 },
              },
            },
            particles: {
              color: { value: "#ffffff" },
              move: {
                enable: true,
                speed: 2,
                direction: "none",
                outMode: "out",
              },
              number: {
                density: { enable: true, area: 800 },
                value: 15,
              },
              opacity: {
                value: 1,
                random: true,
                animation: { enable: true, speed: 1, minimumValue: 0.2 },
              },
              rotate: {
                value: 0,
                random: true,
                animation: { enable: true, speed: 5 },
              },
              shape: {
                type: "image",
                image: [
                  { src: boostrapIcon, width: 20, height: 20 },
                  { src: cssIcon, width: 20, height: 20 },
                  { src: wordpress, width: 20, height: 20 },
                  { src: shopify, width: 20, height: 20 },
                  { src: htmlIcon, width: 20, height: 20 },
                  { src: jsIcon, width: 20, height: 20 },
                  { src: python, width: 20, height: 20 },
                  { src: java, width: 20, height: 20 },
                  { src: reactIcon, width: 20, height: 20 },
                  { src: sassIcon, width: 20, height: 20 },
                  { src: typescriptIcon, width: 20, height: 20 },
                  { src: vueIcon, width: 20, height: 20 },
                ],
              },
              size: { value: 16 },
            },
          }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
          }}
        />
        <Hero />
        <About />
      </div>

      {/* No background animation beyond this point */}
      <Skills />
      <Project />
      <Contact />
    </Container>
  );
}

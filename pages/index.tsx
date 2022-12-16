import Image from "next/image";
import { BasicButton } from "../components/Buttons/BasicButton";
import Spline from "@splinetool/react-spline";
import { LegacyRef, useEffect, useRef } from "react";
import { Application } from "@splinetool/runtime";
import Wave from "react-wavify";
import { useParallax } from "react-scroll-parallax";
import { TypeAnimation } from "react-type-animation";
import styles from "../styles/Home.module.css";
import { Card } from "../components/Card";
import { Chip } from "../components/Chip";
import MeImage from "../public/Me.png";
import Background from "../public/homeBackground.jpg";

export default function Home() {
  const parallax = useParallax<HTMLDivElement>({
    speed: 15,
  });

  return (
    <div>
      <section className="h-screen w-screen flex align-middle justify-center bg">
        <div className="absolute top-0 left-0 w-full h-full object-cover blur-sm">
          <Image
            className="object-cover"
            src={Background}
            fill
            alt="Background"
            priority
          />
        </div>
        <div
          ref={parallax.ref}
          className="flex flex-wrap p-5 justify-center align-middle gap-12 max-w-6xl m-auto"
        >
          <Image
            className="flex-[2] max-h-80 relative z-1"
            src={MeImage}
            style={{
              objectFit: "contain",
            }}
            priority
            quality={100}
            height={500}
            width={500}
            alt="An image with me!"
          />
          {/* image with max width */}
          <div className="text-3xl sm:text-3xl md:text-6xl sm:text-left min-w-12 text-center font-semibold m-auto flex-[3]">
            <TypeAnimation
              sequence={[
                "Hello World!",
                1000,
                "Hola!",
                1000,
                "Bonjour!",
                1000,
                "Hi there!",
                1000,
              ]}
              speed={1}
              cursor
              wrapper="span"
              className="relative text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-purple-600 to-blue-600 after:bg-amber-400 after:w-2"
            />
            <br />
            <span className="relative">Welcome to my website!</span>
            <BasicButton className=" pt-2">Contact Me!</BasicButton>
          </div>
        </div>
      </section>
      <StackSection />
    </div>
  );
}

const Icon = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <Image
      className="middleOrbitCircle "
      src={src}
      width={50}
      height={50}
      alt={alt}
    />
  );
};

const StackSection = () => {
  return (
    <>
      <section className="relative overflow-hidden">
        <BlobAnimation />
        <div className="relative overflow-hidden min-h-[450px] mt-20 z-[2] p-5 sm:p-10">
          <Card className="m-auto">
            <div className="meDrawingContainer my-[60px] ">
              <div className="middleOrbitCenter">
                <div className="middleOrbit">
                  <Icon src="/logoReact.png" alt="React Logo" />
                  <Icon src="/logoGolang.png" alt="React Logo" />
                  <Icon src="/mongoLogo.png" alt="React Logo" />
                  <Icon src="/logoJs.png" alt="React Logo" />
                  <Icon src="/logoNode.png" alt="React Logo" />
                </div>
              </div>
              <Image
                id="meDrawing"
                className="relative m-auto"
                src="/meDrawing.png"
                alt=""
                width={150}
                height={150}
              />
            </div>
            <h1 className="text-4xl text-center mb-3">My Tech Stack</h1>
            <p className="text-center leading-6 text-gray-400 text text-lg">
              I am a junior full stack developer with a passion for learning new
              technologies. I mainly specialize in JavaScript and Golang, but I
              am always looking to learn new languages and frameworks.
            </p>
            <p className="mt-2 ml-2 text-sm">Backend Skills:</p>
            {[
              "Golang",
              "JavaScript",
              "Node.js",
              "MongoDB",
              "MongoDb",
              "SQL",
              "Redis",
              "Docker",
              "RabbitMq",
              "GraphQl",
            ].map((skill) => (
              <Chip key={skill} className="bg-indigo-700">
                {skill}
              </Chip>
            ))}
            <p className="mt-2 ml-2 text-sm">Frontend Skills:</p>
            {["React", "Next.js", "Tailwind", "Material UI", "HTML", "CSS"].map(
              (skill) => (
                <Chip key={skill} className="bg-violet-700">
                  {skill}
                </Chip>
              )
            )}

            {/* add chips to skills */}
          </Card>
        </div>
      </section>
    </>
  );
};

const BlobAnimation = () => {
  return <div className={styles.animatedBlob}></div>;
};

import Image from "next/image";
import { BasicButton } from "../components/Buttons/BasicButton";
import Spline from "@splinetool/react-spline";
import { useEffect, useRef } from "react";
import { Application } from "@splinetool/runtime";

export default function Home() {
  const splineRef = useRef<Application | null>(null);

  const onLoad = (spline: Application) => {
    console.log("loaded", spline);
    console.log(spline.findObjectByName("Head"));
    // splineRef.current = spline;
  };

  // const lookAt = (x: number, y: number) => {
  //   // make Head look at mouse even if it is outside the spline canvas
  //   if (!splineRef.current) return;
  //   const head = spline.current?.findObjectById("Head");
  //   console.log(head);
  // };

  // useEffect(() => {
  //   let mouseEventListener: null | ((e: MouseEvent) => void) = null;
  //   console.log(window);
  //   window.addEventListener("mousemove", (e) => {
  //     const x = e.clientX;
  //     const y = e.clientY;
  //     lookAt(x, y);
  //   });
  //   return () => {
  //     if (mouseEventListener !== null) {
  //       window.removeEventListener("mousemove", mouseEventListener);
  //     }
  //   };
  // }, [spline]);

  return (
    <div>
      <div className="h-screen w-screen flex align-middle justify-center">
        <div className="flex flex-wrap p-5 justify-center align-middle gap-12 max-w-6xl m-auto">
          <Image
            className="flex-[2] max-h-80"
            src="/Me.png"
            style={{
              objectFit: "contain",
            }}
            quality={100}
            height={500}
            width={500}
            alt="An image with me!"
          />
          {/* image with max width */}
          <div className="text-3xl sm:text-3xl md:text-6xl sm:text-left min-w-12 text-center font-semibold m-auto flex-[3]">
            <span
              id="typewriter"
              className="bg-clip-text whitespace-nowrap m-0 relative font-mono text-transparent bg-gradient-to-r from-amber-400 via-purple-600 to-blue-600"
            >
              Hello world!
            </span>
            <br />
            <span className="waitForWriter">Welcome to my website!</span>
            <BasicButton className="waitForWriter pt-2">
              Contact Me!
            </BasicButton>
          </div>
        </div>
      </div>
      <section className="relative min-h-[450px]">
        <h1 className="text-5xl text-center ">My Stack</h1>
        <div className="meDrawingContainer mt-20 ">
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
            className="relative w-40 m-auto"
            src="/meDrawing.png"
            alt=""
            width={50}
            height={60}
          />
        </div>
      </section>
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

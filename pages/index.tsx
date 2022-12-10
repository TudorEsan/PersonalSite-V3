import Image from "next/image";
import { BasicButton } from "../components/Buttons/BasicButton";

export default function Home() {
  return (
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
        <div className="text-xl sm:text-3xl md:text-6xl sm:text-left min-w-12 text-center font-semibold m-auto flex-[3]">
          <span
            id="typewriter"
            className="bg-clip-text m-0 relative font-mono text-transparent bg-gradient-to-r from-amber-400 via-purple-600 to-blue-600"
          >
            Hello world!
          </span>
          <br />
          <span className="waitForWriter">Welcome to my website!</span>
          <BasicButton className="waitForWriter pt-2">Contact Me!</BasicButton>
        </div>
      </div>
    </div>
  );
}

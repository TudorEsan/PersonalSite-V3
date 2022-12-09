import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-screen flex align-middle justify-center">
      <div className="flex flex-wrap p-5 justify-center align-middle gap-12 max-w-6xl m-auto">
        <Image
          className="flex-[2] max-h-80"
          src="/Me.png"
          quality={100}
          height={500}
          width={500}
          alt="An image with me!"
        />
        {/* image with max width */}
        <div className="min-w-full text-center font-semibold m-auto flex-[3] sm:text-3xl md:text-6xl sm:text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-purple-600 to-blue-600">
            Hello world!
          </span>
          <br />
          Welcome to my website!
        </div>
      </div>
    </div>
  );
}

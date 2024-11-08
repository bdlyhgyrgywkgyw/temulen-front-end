import Image from "next/image";



export default function Home() {
  return (
    <div className="">
      <Image
        src="/favicon.ico"
        width={50}
        height={50}
        alt="Picture of the author"
      />
      <h1 className="text-2xl">212 555 6342</h1>
    </div>
    
  );
}

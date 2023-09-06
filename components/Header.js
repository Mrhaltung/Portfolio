import Image from "next/image";
import Link from "next/link";
import Socials from "../components/Socials";
import Head from "next/head";

const Header = () => {
  return (
    <>
      <Head>
        <title>Dipesh Chandekar</title>
        <link rel="icon" href={'/favicon.ico.png'}/>
      </Head>
      <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
            <Link href={"/"}>
              {/* <Image
                src={"/logo.svg"}
                width={320}
                height={48}
                alt=""
                priority={true}
                className="absolute md:-top-[6rem] md:left-[12rem] -top-[4rem] left-[7rem]"
              /> */}
              <div className="flex flex-row md:text-[40px] text-[28px]">
                <div className="mx-2 text-white">Dipesh</div>
                <div className="text-white/20">Chandekar</div>
                <div className="text-accent">.</div>
              </div>
            </Link>
            {/* <Socials /> */}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

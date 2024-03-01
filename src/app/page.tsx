import Image from "next/image";
import bgImage from '../../public/hero-bg.png'
import python from '../../public/python-icon.svg'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="w-full h-full flex justify-center items-center">
        <div className="max-w-7xl z-30 my-16 mx-10 py-24 px-24 backdrop-blur-xl rounded-xl flex flex-col justify-center items-start gap-12 ">
          <div>
            <b className="mr-5">$</b><span className="relative w-[max-content] font-mono text-2xl before:absolute before:inset-0 before:animate-typewriter before:bg-black after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-white">Hello World</span>
          </div>
          <h1 className="font-medium text-5xl leading-[42px] text-white">Comece ou especialize-se em programação e <span className="bg-gradient-rocketseat-hero bg-clip-text text-transparent">conquiste as melhores vagas</span></h1>
          <p className="text-2xl max-w-3xl">A plataforma completa pra você aprender programação do zero no seu ritmo, se tornar Full Stack e se especializar em diversas tecnologias.</p>
          <div>
            <h2 className="text-xl mb-5">EXPLORE NOSSAS FORMAÇÕES</h2>
            <div className="inline-flex items-center gap-3 bg-[#9956f6] p-2 rounded-3xl">
              <Image src={python} alt="Python" width={24}/>
              <span className="text-lg">Python</span>
            </div>
          </div>
        </div>
        <div className="z-20">

        </div>
        <Image src={bgImage}  alt="Imagem fundo" className="w-screen absolute top-0 left-0 z-10 object-cover lg:object-contain"/>
      </section>
    </main>
  );
}

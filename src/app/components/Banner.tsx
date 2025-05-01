import Image from 'next/image';
import Link from 'next/link';

interface BannerProps {
  imagem: string;
  titulo: string;
  subtitulo: string;
  ctaTexto: string;
  ctaLink: string;
  headerHeight?: number;
}

export default function Banner({ imagem, titulo, subtitulo, ctaTexto, ctaLink, headerHeight }: BannerProps) {
  return (
    <div 
      className="relative w-full min-w-[100vw]"
      style={{ minHeight: `calc(100vh - ${headerHeight}px)` }}
    >
      {/* Imagem de Fundo */}
      <Image
        src={imagem}
        alt="Banner"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      {/* Conteúdo Sobre a Imagem */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-[#e6e6fa] bg-black/50 z-10">
        <h1 className="text-4xl md:text-6xl text-[#e6e6fa] font-bold mb-4">{titulo}</h1>
        <p className="text-xl md:text-2xl mb-8">{subtitulo}</p>
        <Link
          href={ctaLink}
          className="bg-[#5e2b6d]/70 hover:bg-[#5e2b6d] text-white font-bold py-2 px-6 rounded-lg text-lg"
        >
          {ctaTexto}
        </Link>
      </div>
    </div>
  );
}
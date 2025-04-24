import Image from 'next/image';

// Definindo a interface para o tipo do objeto imovel
interface Imovel {
  id: number;
  imagem: string;
  titulo: string;
  descricao: string;
  preco: string;
}

interface ImovelCardProps {
  imovel: Imovel;
}

export default function ImovelCard({ imovel }: ImovelCardProps) {
  return (
    <div className="outline outline-gray-300 rounded-md shadow-md cursor-pointer">
      <div className="relative w-full h-80">
        <Image
          src={imovel.imagem}
          alt={imovel.titulo}
          layout="fill"
          objectFit="cover"
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-medium mt-2">{imovel.titulo}</h3>
        <p className="text-gray-600">{imovel.descricao}</p>
        <p className="text-lg font-medium mt-2">{imovel.preco}</p>
      </div>
    </div>
  );
}

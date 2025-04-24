import Head from 'next/head';
import ImovelCard from './components/ImovelCard';

const imoveis = [
  { id: 1, titulo: 'Apartamento Luxuoso', descricao: '3 quartos, vista para o mar', preco: 'R$ 500.000', imagem: '/images/real_state_stock_01.webp' },
  { id: 2, titulo: 'Casa Aconchegante', descricao: '2 quartos, jardim amplo', preco: 'R$ 300.000', imagem: '/images/real_state_stock_02.webp' },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Imóveis em Natal - Nome do Corretor</title>
        <meta name="description" content="Encontre os melhores imóveis em Natal." />
      </Head>
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Imóveis em Destaque</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {imoveis.map(imovel => (
            <ImovelCard key={imovel.id} imovel={imovel} />
          ))}
        </div>
      </div>
    </>
  );
}

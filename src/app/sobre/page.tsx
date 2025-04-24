import Head from 'next/head';

export default function Sobre() {
  return (
    <>
      <Head>
        <title>Sobre - Nome do Corretor</title>
        <meta name="description" content="Conheça o corretor Nome do Corretor." />
      </Head>
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Sobre Mim</h2>
        <p className="text-gray-700">
          Sou Nome do Corretor, especialista em imóveis em Natal há mais de 10 anos.
        </p>
      </div>
    </>
  );
}

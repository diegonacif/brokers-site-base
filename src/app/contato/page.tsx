import Head from 'next/head';

export default function Contato() {
  return (
    <>
      <Head>
        <title>Contato - Nome do Corretor</title>
        <meta name="description" content="Entre em contato com Nome do Corretor." />
      </Head>
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Entre em Contato</h2>
        <form className="max-w-md mx-auto">
          <input type="text" placeholder="Nome" className="w-full p-2 mb-2 border rounded" />
          <input type="email" placeholder="E-mail" className="w-full p-2 mb-2 border rounded" />
          <textarea placeholder="Mensagem" className="w-full p-2 mb-2 border rounded" rows={4}></textarea>
          <button type="submit" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Enviar</button>
        </form>
      </div>
    </>
  );
}

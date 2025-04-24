import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">Nome do Corretor</h1>
        <ul className="flex space-x-4">
          <li><Link href="/" className="hover:underline">Início</Link></li>
          <li><Link href="/sobre" className="hover:underline">Sobre</Link></li>
          <li><Link href="/contato" className="hover:underline">Contato</Link></li>
        </ul>
      </nav>
    </header>
  );
}
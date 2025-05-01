"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Interface para os itens do menu
interface MenuItem {
  label: string;
  href: string;
}

// Interface para as props do Header
interface HeaderProps {
  menuItems: MenuItem[];
  logo?: string; // URL opcional da imagem do logo
  nomeCorretor: string; // Nome do corretor, usado se logo não for fornecido
}

export default function Header({ menuItems, logo, nomeCorretor }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#2a0e3c] text-white p-4 shadow-md h-24">
      <div className="container mx-auto flex justify-between items-center h-full">
        {/* Logo ou Nome do Corretor */}
        {logo ? (
          <Image src={logo} alt="Logo" width={200} height={50} className="object-contain" />
        ) : (
          <h1 className="text-2xl font-bold">{nomeCorretor}</h1>
        )}

        {/* Navegação para telas maiores */}
        <nav className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-lg font-[500] text-[#e6e6fa] hover:text-white transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Menu Hamburguer para telas menores */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
          aria-expanded={isMenuOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Menu Dropdown para telas menores */}
      {isMenuOpen && (
        <div className="md:hidden bg-white text-blue-600 absolute top-16 left-0 w-full z-50 shadow-lg">
          <ul className="flex flex-col space-y-2 p-4">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block text-lg hover:underline"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
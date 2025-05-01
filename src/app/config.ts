export interface MenuItem {
  label: string;
  href: string;
}

export const siteConfig = {
  nomeCorretor: 'Nome do Corretor',
  logo: '/images/logo.png', // Deixe vazio ('') se não usar logo
  whatsapp: '(84) 99999-9999',
  email: 'contato@nomedocorretor.com.br',
  redesSociais: {
    facebook: 'https://facebook.com/corretor',
    instagram: 'https://instagram.com/corretor',
    linkedin: 'https://linkedin.com/corretor',
  },
  menuItems: [
    { label: 'Início', href: '/' },
    { label: 'Imóveis', href: '/imoveis' },
    { label: 'Sobre', href: '/sobre' },
    { label: 'Contato', href: '/contato' },
  ],
  seo: {
    title: 'Imóveis em Natal - Nome do Corretor',
    description: 'Encontre os melhores imóveis em Natal com o corretor Nome do Corretor.',
  },
};
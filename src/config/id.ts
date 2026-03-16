import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Eviana Putri Zarfi — MAN 1 Banda Aceh",
  author: "Eviana Putri Zarfi",
  description: "Saya adalah seorang siswi dari MAN 1 Banda Aceh dengan semangat tinggi untuk belajar, berkembang, dan mencoba hal-hal baru.",
  lang: "id",
  siteLogo: "/favicon.png", 
  navLinks: [
    { text: "Keahlian", href: "#experience" },
    { text: "Tujuan", href: "#projects" },
    { text: "Tentang", href: "#about" },
  ],
  socialLinks: [
    { text: "Instagram", href: "https://instagram.com/zrfievnaptri_" },
    { text: "Github", href: "https://github.com/puputimut" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://your-website-url.vercel.app", 
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Eviana Putri Zarfi",
    specialty: "Pelajar & Pembelajar Sepanjang Hayat",
    summary:
      "Saya adalah seorang siswi dari MAN 1 Banda Aceh yang memiliki semangat tinggi untuk belajar, berkembang, dan mencoba hal-hal baru. Saya percaya bahwa setiap hari adalah kesempatan untuk memperbaiki diri dan menjadi pribadi yang lebih baik.",
    email: "evianaputrizarfi@gmail.com",
  },
  experience: [
    {
      company: "Pengembangan Keahlian",
      position: "Belajar Biologi",
      startDate: "Berlangsung",
      endDate: "Sekarang",
      summary: "Saya sedang belajar biologi untuk menambah pengetahuan saya tentang makhluk hidup, lingkungan, dan berbagai proses yang terjadi di alam.",
    },
    {
      company: "Pengembangan Keahlian",
      position: "Pembuatan Konten & Menulis",
      startDate: "Berlangsung",
      endDate: "Sekarang",
      summary: [
        "Mulai belajar cara membuat konten sederhana untuk berbagi informasi, ide, dan hal-hal bermanfaat.",
        "Menikmati menulis pikiran, pengalaman, atau ide sederhana sebagai cara untuk mengekspresikan diri."
      ],
    },
    {
      company: "Pertumbuhan Pribadi",
      position: "Pengembangan Diri & Komunikasi",
      startDate: "Berlangsung",
      endDate: "Sekarang",
      summary: [
        "Tertarik belajar tentang pengembangan diri, seperti membangun kebiasaan baik, disiplin, dan menjadi pribadi yang lebih baik.",
        "Belajar cara berkomunikasi dengan baik, mengungkapkan pendapat, dan mendengarkan orang lain.",
        "Berusaha mengambil pelajaran dari setiap pengalaman agar saya bisa terus berkembang."
      ],
    },
  ],
  projects: [
    {
      name: "Perbaikan Berkelanjutan",
      summary: "Terus belajar, memperbaiki diri, dan mendapatkan pengalaman serta pengetahuan baru.",
      linkPreview: "#",
      linkSource: "#",
      image: "/spotifu.png",
    },
    {
      name: "Mencapai Impian",
      summary: "Berusaha mencapai impian saya selangkah demi selangkah dengan usaha dan keinginan kuat untuk belajar.",
      linkPreview: "#",
      linkSource: "#",
      image: "/shopify-clon.png",
    },
    {
      name: "Dampak Positif",
      summary: "Menjadi pribadi yang lebih baik setiap harinya dan menjadi seseorang yang bermanfaat bagi orang lain.",
      linkPreview: "#",
      linkSource: "#",
      image: "/clone-ig.png",
    },
  ],
  about: {
    description: `Halo! Saya Eviana Putri Zarfi.

Saya adalah seorang siswi dari MAN 1 Banda Aceh yang memiliki semangat tinggi untuk belajar, berkembang, dan mencoba hal-hal baru. Saya percaya bahwa setiap hari adalah kesempatan untuk memperbaiki diri dan menjadi pribadi yang lebih baik.

Saya senang mempelajari banyak hal yang dapat memperluas pengetahuan dan pengalaman saya. Bagi saya, belajar tidak hanya terjadi di sekolah, tetapi juga melalui pengalaman, lingkungan sekitar, dan orang-orang yang kita temui.

Meskipun perjalanan saya masih panjang, saya selalu berusaha mempelajari keterampilan baru, mendapatkan pengalaman baru, dan membuka peluang untuk masa depan yang lebih baik. Saya percaya bahwa dengan usaha dan keinginan kuat untuk belajar, setiap orang dapat mencapai impiannya.

Bagi saya, setiap langkah kecil yang diambil hari ini akan membawa kita lebih dekat ke masa depan yang lebih baik.`,
    image: "/Eviana-foto.jpeg",
  },
};
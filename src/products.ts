// const products = () => {
  const headphones = [
    {
      title: "XX99 Mark II Headphones",
      price: "2999",
      desc: "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
      images: [
        "https://res.cloudinary.com/deqnekemi/image/upload/v1738304153/image-gallery-1_myoepz.jpg",
        "https://res.cloudinary.com/deqnekemi/image/upload/v1738304153/image-gallery-3_zsmyot.jpg",
        "https://res.cloudinary.com/deqnekemi/image/upload/v1738304153/image-gallery-2_bz9yck.jpg",
      ],
      mainImg:
        "https://res.cloudinary.com/deqnekemi/image/upload/v1738575488/image-product-removebg-preview_k7ras5.png",
    },
    {
      title: "XX99 Mark I Headphones",
      price: "1750",
      desc: "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
      images: [
        "https://res.cloudinary.com/deqnekemi/image/upload/v1738304141/image-gallery-1_zsmun0.jpg",
        "https://res.cloudinary.com/deqnekemi/image/upload/v1738304142/image-gallery-3_azcs6c.jpg",
        "https://res.cloudinary.com/deqnekemi/image/upload/v1738304141/image-gallery-1_zsmun0.jpg",
      ],
      mainImg:
        "https://res.cloudinary.com/deqnekemi/image/upload/v1738575421/image-category-page-preview-removebg-preview_1_cgvvk4.png",
    },
    {
      title: "XX59 Headphones",
      price: "899",
      desc: "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
      images: [
        "https://res.cloudinary.com/deqnekemi/image/upload/v1738304158/image-gallery-1_bo8adm.jpg",
        "https://res.cloudinary.com/deqnekemi/image/upload/v1738304158/image-gallery-3_yhhdj9.jpg",
        "https://res.cloudinary.com/deqnekemi/image/upload/v1738304158/image-gallery-2_e1h2sl.jpg",
      ],
      mainImg:
        "https://res.cloudinary.com/deqnekemi/image/upload/v1738574995/image-category-page-preview-removebg-preview_af0v9m.png",
    },
  ];
  const speakers = [
    {
      title: "ZX9 SPEAKER",
      desc: "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
      price: "4500",
      images: [
        "https://res.cloudinary.com/deqnekemi/image/upload/v1738304144/image-gallery-2_qddenf.jpg",
        "https://res.cloudinary.com/deqnekemi/image/upload/v1738304144/image-gallery-3_ssdn5u.jpg",
        "https://res.cloudinary.com/deqnekemi/image/upload/v1738304144/image-gallery-1_hjvo49.jpg",
      ],
      mainImg:
        "https://res.cloudinary.com/deqnekemi/image/upload/v1738575639/image-category-page-preview-removebg-preview_2_ynncm1.png",
    },
    {
      title: "ZX7 SPEAKER",
      desc: "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
      price: "3500",
      images: [
        "https://res.cloudinary.com/deqnekemi/image/upload/v1738304161/image-gallery-2_k8ojuo.jpg",
        "https://res.cloudinary.com/deqnekemi/image/upload/v1738304161/image-gallery-3_g9esvx.jpg",
        "https://res.cloudinary.com/deqnekemi/image/upload/v1738304161/image-gallery-1_gqi7hm.jpg",
      ],
      mainImg:
        "https://res.cloudinary.com/deqnekemi/image/upload/v1738575712/image-category-page-preview-removebg-preview_3_ts0xgq.png",
    },
  ];
  const earphones = [
    {
      title: "YX1 WIRELESS EARPHONES",
      desc: "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
      price: "599",
      images: [
        "https://res.cloudinary.com/deqnekemi/image/upload/v1738304136/image-gallery-1_viasqa.jpg",
        "https://res.cloudinary.com/deqnekemi/image/upload/v1738304137/image-gallery-3_ordz2v.jpg",
        "https://res.cloudinary.com/deqnekemi/image/upload/v1738304137/image-gallery-2_btjpzh.jpg",
      ],
      mainImg:
        "https://res.cloudinary.com/deqnekemi/image/upload/v1738575822/image-category-page-preview-removebg-preview_4_owvw3z.png",
    },
  ];

  const products= new Map([
    ["headphones", headphones],
    ["speakers", speakers],
    ["earphones", earphones],
  ]);
// };
export default products;

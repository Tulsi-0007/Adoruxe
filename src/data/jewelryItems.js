// data/jewelryItems.js
const jewelryItems = [
    {
      id: 1,
      name: 'Pearl Butterfly',
      price: 3000,
      category: 'earrings',
      material: 'White Gold',
      stone: 'Diamond',
      description: 'Classic round brilliant diamond stud earrings with 4-prong settings',
      image: 'data:image/jpeg;base64,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'
    },
    {
        id: 1,
        name: 'Mi Amor',
        price: 2500,
        category: 'earrings',
        material: 'Rose Gold',
        stone: 'Diamond',
        description: 'Classic round brilliant diamond stud earrings with 4-prong settings',
        image: 'https://i.pinimg.com/originals/33/20/2b/33202b4e8c7be464fea1cbcab41f670f.jpg'
      },
      {
        id: 1,
        name: 'Dazzle Drops',
        price: 1725,
        category: 'earrings',
        material: 'White Gold',
        stone: 'Diamond',
        description: 'Classic round brilliant diamond stud earrings with 4-prong settings',
        image: 'https://i.etsystatic.com/6382786/r/il/34bf74/1510505486/il_fullxfull.1510505486_kmdl.jpg'
      },
      {
        id: 1,
        name: 'Twinkling Tears',
        price: 1520,
        category: 'earrings',
        material: 'White Gold',
        stone: 'Diamond',
        description: 'Classic round brilliant diamond stud earrings with 4-prong settings',
        image: 'https://th.bing.com/th/id/OIP.f_2qhdpNdfs766pIVEIiGAHaHa?rs=1&pid=ImgDetMain'
      },
      {
        id: 1,
        name: 'Diamond Stud Earrings',
        price: 1100,
        category: 'earrings',
        material: 'White Gold',
        stone: 'Diamond',
        description: 'Classic round brilliant diamond stud earrings with 4-prong settings',
        image: 'https://sothebys-md.brightspotcdn.com/59/3c/37587a6d43e68ff24693f2654e1f/l20051-bjtqq-1.jpg'
      },
      {
        id: 1,
        name: 'Diamond Stud Earrings',
        price: 5000,
        category: 'earrings',
        material: 'White Gold',
        stone: 'Diamond',
        description: 'Classic round brilliant diamond stud earrings with 4-prong settings',
        image: 'https://th.bing.com/th/id/OIP.hw4fCzZyuqXlWRzuJKlRkAHaH4?rs=1&pid=ImgDetMain'
      },


    {
      id: 2,
      name: 'Pearl Necklace',
      price: 899,
      category: 'necklace',
      material: 'Sterling Silver',
      stone: 'Freshwater Pearl',
      description: 'Elegant 18-inch pearl necklace with sterling silver clasp',
      image: '/necklace1.jpg'
    },
    {
        id: 2,
        name: 'Pearl Necklace',
        price: 899,
        category: 'necklace',
        material: 'Sterling Silver',
        stone: 'Freshwater Pearl',
        description: 'Elegant 18-inch pearl necklace with sterling silver clasp',
        image: '/necklace1.jpg'
      },
      {
        id: 2,
        name: 'Pearl Necklace',
        price: 899,
        category: 'necklace',
        material: 'Sterling Silver',
        stone: 'Freshwater Pearl',
        description: 'Elegant 18-inch pearl necklace with sterling silver clasp',
        image: '/necklace1.jpg'
      },
      {
        id: 2,
        name: 'Pearl Necklace',
        price: 899,
        category: 'necklace',
        material: 'Sterling Silver',
        stone: 'Freshwater Pearl',
        description: 'Elegant 18-inch pearl necklace with sterling silver clasp',
        image: '/necklace1.jpg'
      },
      {
        id: 2,
        name: 'Pearl Necklace',
        price: 899,
        category: 'necklace',
        material: 'Sterling Silver',
        stone: 'Freshwater Pearl',
        description: 'Elegant 18-inch pearl necklace with sterling silver clasp',
        image: '/necklace1.jpg'
      },
      {
        id: 2,
        name: 'Pearl Necklace',
        price: 899,
        category: 'necklace',
        material: 'Sterling Silver',
        stone: 'Freshwater Pearl',
        description: 'Elegant 18-inch pearl necklace with sterling silver clasp',
        image: '/necklace1.jpg'
      },


      {
        id: 3,
        name: 'Pearl Necklace',
        price: 899,
        category: 'bracelet',
        material: 'Sterling Silver',
        stone: 'Freshwater Pearl',
        description: 'Elegant 18-inch pearl necklace with sterling silver clasp',
        image: '/necklace1.jpg'
      },
      {
        id: 3,
        name: 'Pearl Necklace',
        price: 899,
        category: 'bracelet',
        material: 'Sterling Silver',
        stone: 'Freshwater Pearl',
        description: 'Elegant 18-inch pearl necklace with sterling silver clasp',
        image: '/necklace1.jpg'
      },
      {
        id: 3,
        name: 'Pearl Necklace',
        price: 899,
        category: 'bracelet',
        material: 'Sterling Silver',
        stone: 'Freshwater Pearl',
        description: 'Elegant 18-inch pearl necklace with sterling silver clasp',
        image: '/necklace1.jpg'
      },
      {
        id: 3,
        name: 'Pearl Necklace',
        price: 899,
        category: 'bracelet',
        material: 'Sterling Silver',
        stone: 'Freshwater Pearl',
        description: 'Elegant 18-inch pearl necklace with sterling silver clasp',
        image: '/necklace1.jpg'
      },
      {
        id: 3,
        name: 'Pearl Necklace',
        price: 899,
        category: 'bracelet',
        material: 'Sterling Silver',
        stone: 'Freshwater Pearl',
        description: 'Elegant 18-inch pearl necklace with sterling silver clasp',
        image: '/necklace1.jpg'
      },
      {
        id: 3,
        name: 'Pearl Necklace',
        price: 899,
        category: 'bracelet',
        material: 'Sterling Silver',
        stone: 'Freshwater Pearl',
        description: 'Elegant 18-inch pearl necklace with sterling silver clasp',
        image: '/necklace1.jpg'
      },



      {
        id: 4,
        name: 'Pearl Necklace',
        price: 899,
        category: 'ring',
        material: 'Sterling Silver',
        stone: 'Freshwater Pearl',
        description: 'Elegant 18-inch pearl necklace with sterling silver clasp',
        image: '/necklace1.jpg'
      },
      {
        id: 4,
        name: 'Pearl Necklace',
        price: 899,
        category: 'rings',
        material: 'Sterling Silver',
        stone: 'Freshwater Pearl',
        description: 'Elegant 18-inch pearl necklace with sterling silver clasp',
        image: '/necklace1.jpg'
      },
      {
        id: 4,
        name: 'Pearl Necklace',
        price: 899,
        category: 'rings',
        material: 'Sterling Silver',
        stone: 'Freshwater Pearl',
        description: 'Elegant 18-inch pearl necklace with sterling silver clasp',
        image: '/necklace1.jpg'
      },
      {
        id: 4,
        name: 'Pearl Necklace',
        price: 899,
        category: 'rings',
        material: 'Sterling Silver',
        stone: 'Freshwater Pearl',
        description: 'Elegant 18-inch pearl necklace with sterling silver clasp',
        image: '/necklace1.jpg'
      },
      {
        id: 4,
        name: 'Pearl Necklace',
        price: 899,
        category: 'rings',
        material: 'Sterling Silver',
        stone: 'Freshwater Pearl',
        description: 'Elegant 18-inch pearl necklace with sterling silver clasp',
        image: '/necklace1.jpg'
      },
      {
        id: 4,
        name: 'Pearl Necklace',
        price: 899,
        category: 'rings',
        material: 'Sterling Silver',
        stone: 'Freshwater Pearl',
        description: 'Elegant 18-inch pearl necklace with sterling silver clasp',
        image: '/necklace1.jpg'
      },
      
  ];
  
  export default jewelryItems;
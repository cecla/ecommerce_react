const products = [
  {
    id: 1,
    image:
      "https://cdn.etonshirts.com/media/catalog/product/cache/small_image/568x/fe048ded4c6db6c6afa45b749bc258ce/3/1/31007951118_st.jpg",
    name: "Solid Black Dress Shirt",
    type: "Slim fit",
    price: 1295
  },
  {
    id: 2,
    image:
      "https://cdn.etonshirts.com/media/catalog/product/cache/small_image/400x/fe048ded4c6db6c6afa45b749bc258ce/1/0/10000024625_st.jpg",
    name: "Blue Paislet Print Poplin Shirt",
    type: "Slim fit",
    price: 1195
  },
  {
    id: 3,
    image:
      "https://cdn.etonshirts.com/media/catalog/product/cache/small_image/568x/fe048ded4c6db6c6afa45b749bc258ce/1/0/10000024521_st.jpg",
    name: "Blue Indigo Casual Shirt",
    type: "Slim",
    price: 1295
  },
  {
    id: 4,
    image:
      "https://cdn.etonshirts.com/media/catalog/product/cache/small_image/400x/fe048ded4c6db6c6afa45b749bc258ce/0/7/07080030755_st.jpg",
    name: "Red Striped Natural Stretch Oxford Shirt",
    type: "Slim fit",
    price: 1295
  },
  {
    id: 5,
    image:
      "https://cdn.etonshirts.com/media/catalog/product/cache/small_image/400x/fe048ded4c6db6c6afa45b749bc258ce/0/2/02526362834_st.jpg",
    name: "Beige Linen Button Under Shirt",
    type: "Slim fit",
    price: 1095
  },
  {
    id: 6,
    image:
      "https://cdn.etonshirts.com/media/catalog/product/cache/small_image/400x/fe048ded4c6db6c6afa45b749bc258ce/0/2/02525759352_st.jpg",
    name: "Peach  Linen Short SleeveShirt",
    type: "Slim",
    price: 1295
  }
];

const imageText = [
  {
    id: 1,
    image: "https://cdn.etonshirts.com/media/wysiwyg/20181201_accessoarer.jpg",
    header: "The Essentials",
    text: "Curabitur blandit tempus porttitor"
  },
  {
    id: 2,
    image: "https://cdn.etonshirts.com/media/wysiwyg/1907126.jpg",
    header: "Closet No 6",
    text: "Donec id elit non mi porta gravida at eget metus"
  },
  {
    id: 3,
    image: "https://cdn.etonshirts.com/media/wysiwyg/20190201_SOFT.jpg",
    header: "Closet No 14",
    text: "Euismod aenean inceptos bibendum"
  }
];

const imageTextLinks = [
  {
    id: 1,
    image: "https://cdn.etonshirts.com/media/wysiwyg/20181210_poloshirts.jpg",
    header: "Spring / Summer 16",
    text:
      "Maecenas sed diam eget risus varius blandit sit amet non magna. Maecenas sed diam eget risus varius blandit sit amet non magna.",
    link: "",
    linkText: "explore collection"
  }
];

const links = [
  {
    link: "",
    linkText: "Customer care"
  },
  {
    link: "",
    linkText: "Press"
  },
  {
    link: "",
    linkText: "PR Agencies"
  },
  {
    link: "",
    linkText: "Career"
  },
  {
    link: "",
    linkText: "Retailers"
  }
];

const menu = {
  shirts: [
    {
      id: 1,
      header: "Body fit",
      list: [
        { link: "", linkText: "Super Slim" },
        { link: "", linkText: "Slim" },
        { link: "", linkText: "Contemporary" },
        { link: "", linkText: "Classic" },
        { link: "", linkText: "Extra Long Sleeve" }
      ]
    },
    {
      id: 2,
      list: [
        { link: "", linkText: "All Shirts" },
        { link: "", linkText: "New Arrivals" },
        { link: "", linkText: "White Shirts" },
        { link: "", linkText: "Outlet" }
      ]
    },
    {
      id: 3,
      list: [
        { link: "", linkText: "Size Guide" },
        { link: "", linkText: "Eton Express" }
      ]
    },
    {
      id: 4,
      header: "Collection",
      list: [
        { link: "", linkText: "Red Ribbon" },
        { link: "", linkText: "Green Ribbon" },
        { link: "", linkText: "Black Ribbon" }
      ]
    }
  ],
  accessories: [
    {
      id: 5,
      header: "Accessories",
      list: [
        { link: "", linkText: "All accessories" },
        { link: "", linkText: "Ties" },
        { link: "", linkText: "Pocket Squares" }
      ]
    }
  ],
  ourWorld: [
    {
      id: 6,
      list: [
        { link: "", linkText: "About our shirts" },
        { link: "", linkText: "About Eton" }
      ]
    }
  ]
};

export default { products, imageText, imageTextLinks, links, menu };

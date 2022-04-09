export default function handler(req, res) {
  const { module } = req.query;
  const itemsJson = {
    module_001: {
      items: [
        {
          image: "/photo1.webp",
          title: "item 1",
        },
        {
          image: "/photo2.webp",
          title: "item 2",
        },
      ],
      title: "Günün Fırsatları",
      subTitle: "Sadece haftasonuna özel",
    },
    module_002: {
      items: [
        {
          image: "/module_02_1.jpg",
          title: "Category 1",
        },
        {
          image: "/module_02_2.jpg",
          title: "Category 2",
        },
        {
          image: "/module_02_3.jpg",
          title: "Category 3",
        },
        {
          image: "/module_02_4.jpg",
          title: "Category 4",
        },
        {
          image: "/module_02_5.jpg",
          title: "Category 5",
        },
        {
          image: "/module_02_1.jpg",
          title: "Category 1",
        },
        {
          image: "/module_02_2.jpg",
          title: "Category 2",
        },
        {
          image: "/module_02_3.jpg",
          title: "Category 3",
        },
        {
          image: "/module_02_4.jpg",
          title: "Category 4",
        },
        {
          image: "/module_02_5.jpg",
          title: "Category 5",
        },
      ],
      title: "Özel Fiyatlar",
      subTitle: "",
    },
  };

  if (module) {
    return res.status(200).send({ moduleData: itemsJson });
  }
}

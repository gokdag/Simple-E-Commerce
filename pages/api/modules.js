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
          image: "/photo1.webp",
          title: "item 1",
        },
        {
          image: "/photo2.webp",
          title: "item 2",
        },
      ],
      title: "Özel Fiyatlar",
      subTitle: "",
    },
  };
  
  if (module) {
    return res.status(200).send({ moduleData: itemsJson[`${module}`] });
  }
}

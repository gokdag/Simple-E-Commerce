function ProductDetail({ productData }) {
  console.log("productData", productData);
  return (
    <div className="categoryList">
      <div className="categoryInfo">
        <div>{productData.categoryId}</div>
        <div>{productData.categoryName}</div>
        <div>{productData.categoryUrl}</div>
      </div>
      <div className="productList"></div>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:2000/category`);
  const data = await res.json();

  return {
    fallback: false,
    paths:
      data.status == "ok" &&
      data.data.map((x) => {
        return { params: { categoryId: x.categoryId } };
      }),
  };
}

export async function getStaticProps(context) {
  const categoryId = context.params.categoryId;
  const res = await fetch(
    `http://localhost:2000/category/getCategoryDetail?categoryId=${categoryId}`
  );
  const data = await res.json();
  console.log("datadatadatadatadata", data);
  return {
    props: {
      productData: data.status == "ok" && data.data,
    },
    //revalidate:60
  };
}

export default ProductDetail;

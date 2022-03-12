import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsAll, getProductFirst } from "../src/store/actions/productAction";
export default function Home() {
  const dispatch = useDispatch();

  const apiCall = () => {
    dispatch(getProductsAll());
  };
  const { data, loading, error } = useSelector((store) => store.products);
  if (loading) return "Yükleniyor...";
  return (
    <div>
      Hello World!
      <button onClick={() => apiCall()}>Click!</button>
    </div>
  );
}

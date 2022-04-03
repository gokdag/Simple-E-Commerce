import { useDispatch, useSelector } from "react-redux";
import { getProductsAll } from "../src/store/actions/commentAction";
export default function Home() {
  const dispatch = useDispatch();

  const apiCall = () => {
    dispatch(getProductsAll());
  };
  const { data, loading, error } = useSelector((store) => store.products);
  console.log(data);
  if (loading) return "Yükleniyor...";
  return (
    <div>
      Hello World!
      <button onClick={() => apiCall()}>Click!</button>
    </div>
  );
}

import { useDispatch, useSelector } from "react-redux";
import { getComments } from "../src/store/actions/commentAction";
import Module_001 from "../components/module_001";
import Module_002 from "../components/module_002";

export default function Home() {
  const dispatch = useDispatch();
  const apiCall = () => {
    dispatch(getComments());
  };
  const { data, loading, error } = useSelector((store) => store.comments);
  if (loading) return "Yükleniyor...";
  return (
    <div style={{ padding: "20px 0" }}>
      {/* <button onClick={() => apiCall()}>Click!</button> */}
      <Module_001 />
      <Module_002 />
    </div>
  );
}

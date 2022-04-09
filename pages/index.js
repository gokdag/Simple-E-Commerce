import { useDispatch, useSelector } from "react-redux";
import { getModuleItems } from "../src/store/actions/moduleAction";
const moduleJson = require("../public/helper/firmPacket.json");
import dynamic from "next/dynamic";
import { useEffect } from "react";

export default function Home() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getModuleItems({ module: "module_001" }));
  }, [dispatch]);

  const DynamicComponent = (a) =>
    dynamic(
      () =>
        import(`../components/${a}/`)
          .then((x) => {
            return x;
          })
          .catch((err) => console.log(err)),
      {
        // loading: (x) => (
        //   <p
        //     style={{
        //       background: "#000",
        //       height: "35",
        //       color: "#fff",
        //       textAlign: "center",
        //     }}
        //   >
        //     YÜKLENİYOR
        //   </p>
        // ),
      }
    );

  const arrayofModule = moduleJson.homePage_modules.map((x) =>
    DynamicComponent(x.module_name)
  );

  return (
    <div style={{ padding: "20px 0" }}>
      {/* <Module_001 />
      <Module_002 /> */}
      {arrayofModule.map((SelectedModule, i) => (
        <div key={i} className="homePageModuleWrapper">
          <SelectedModule></SelectedModule>
        </div>
      ))}
    </div>
  );
}

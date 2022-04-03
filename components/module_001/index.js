import { Carousel } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getModuleItems } from "../../src/store/actions/moduleAction";
import { Spin } from "antd";
import Image from "next/image";

export default function Module_001() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getModuleItems({ module: "module_001" }));
  }, [dispatch]);

  const { data, loading, error } = useSelector((store) => store.modules);
  console.log("data", data);
  if (loading) {
    return (
      <div className="moduleDefaultDivider" style={{ textAlign: "center" }}>
        <Spin size={"large"} />
      </div>
    );
  }

  const contentStyle = {
    textAlign: "center",
    background: "#364d79",
    color:"#fff",
    padding:"40px 0"
  };
  return (
    <div className="moduleDefaultDivider">
      <Carousel autoplay={true} >
        {data.moduleData &&
          data?.moduleData?.items.map((item, index) => {
            return (
              <div key={index} image={item.image}>
                <Image src={item.image} width={1900} height={800} />
                <h3 style={contentStyle}>{item.title}</h3>
              </div>
            );
          })}
      </Carousel>
    </div>
  );
}

import { Swiper, SwiperSlide } from "swiper/react";
import { Spin } from "antd";
import style from "./index.module.css";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { getModuleItems } from "../../src/store/actions/moduleAction";
import { Skeleton } from "antd";

import "swiper/css";
import React from "react";

export default function Module_002() {
  const dispatch = useDispatch();
  // React.useEffect(() => {
  //   dispatch(getModuleItems({ module: "module_002" }));
  // }, []);

  const { data, loading, error } = useSelector((store) => store.modules);
  console.log(data);
  if (loading) {
    return (
      <div className="moduleDefaultDivider" style={{ textAlign: "center" }}>
        <Spin size={"large"} />
      </div>
    );
  }

  return (
    <Swiper slidesPerView={5} spaceBetween={5}>
      {data.moduleData &&
        data?.moduleData.module_002?.items.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <Link href="/">
                <a className={style.linkElement}>
                  <div className={style.imageWrapper}>
                    <Image
                      className={style.imageElement}
                      src={item.image}
                      width={360}
                      height={500}
                    />
                  </div>
                  <div className={style.productInfo}>
                    <p className={style.productName}>{item.title}</p>
                  </div>
                </a>
              </Link>
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
}

import React, { useState, useEffect, useRef } from "react";
import "./Gallery.scss";
import { Image, Row, Col } from "antd";
import Sourceimg from "../img/img5 crop.png";
import WOW from "wow.js";
import gallery2 from "../img/gallery2.png";
import gallery1 from "../img/gallery3.png";
import gallery3 from "../img/gallery1.jpg";

function Gallery() {
  return (
    <>
      <div class="container mx-auto " id="gallery">
        <div className="flex justify-center items-center text-4xl lg:text-6xl text-orange-600 flex-col font-bold text-center p-5 wow rotateIn ">
          GALLERY
        </div>
        <div className="flex flex-wrap gap-4 justify-center mx-auto mt-4 mr-10 pr-10 ">
          <div className="w-full md:w-2/3 lg:w-8/12 xl:w-auto wow SlideUp">
            <Image width={400} src={gallery3} alt="Gallery 3" />
          </div>
          <div className="w-full md:w-1/3 lg:w-4/12 xl:w-3/12 wow SlideRight ">
            <Row className="h-1/2">
              <Col span={24}>
                <Image width={400} src={gallery2} alt="Gallery 2" />
              </Col>
            </Row>
            <Row className="h-1/2">
              <Col span={24}>
                <Image width={400} src={gallery1} alt="Gallery 1" />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;

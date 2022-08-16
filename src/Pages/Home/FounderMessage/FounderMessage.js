import React from "react";
import president from "../../../Assets/photo/Mask group.png";
import logo6 from "../../../Assets/logo/Frame 95.png";
import logo7 from '../../../Assets/logo/Logo divider (2).png'

const FounderMessage = () => {
  return (
    <div className="bg py-10">
      <div className="py-10 w-full lg:w-[800px] bg-[#ffffff93] mx-auto shadow-lg rounded-md">
        <h1 className="text-center special uppercase text-3xl font-medium mb-10">
          Founder’s Message
        </h1>
        <div className="flex justify-center">
          <img
            className="w-56 border-4 border-black rounded-full p-1"
            src={president}
            alt=""
          />
        </div>
        <div className="flex justify-center my-4">
          <img src={logo6} alt="" />
        </div>
        <div className="bg-[#f8f8f8] px-10 py-2 w-full lg:w-96 mx-auto">
          <p className="text-3xl font-bold">Mr. Jayesh H. Pandya</p>
        </div>
        <div className="bg-[#f8f8f8] px-10 py-2 w-full lg:w-[600px] mt-5 mx-auto">
          <p className="text-xl font-semibold italic text-center">
            “When a customer buys a home, he is giving up a major chunk of his
            life's savings to do so. It is imperative to give him exactly what
            he looks for in his home.”
          </p>
        </div>
        <p className="mt-12 px-5 lg:px-10 text-justify">
          We bring to our clients much wanted human values, integrity, trust and
          an assurance of responsibility all coupled with our expertise in
          construction, engineering & management. Our biggest assets have always
          been our small but highly trained team of professional managers and
          engineers who are backed by a very able team of administrators. We
          have a clear vision about building on our strengths and our
          achievements while holding dear to us our basic principles
        </p>
      </div>
        <div className="w-full lg:w-[800px] mx-auto mt-7">
            <img src={logo7} alt="" />
        </div>
    </div>
  );
};

export default FounderMessage;

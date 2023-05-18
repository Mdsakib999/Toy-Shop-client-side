import React from "react";

const Reviow = () => {
  return (
    <div>
      <p className="font-bold text-4xl my-16 text-center">Happy Customer's</p>

      <div>
        <div className="mb-16 carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <div className="w-[80%] mx-auto lg:flex justify-center gap-4 items-center">
              <img
                src="https://i.ibb.co/vLHrz6d/happy-cust-4.jpg"
                className=" w-[400px] h-[300px]"
              />
              <div className=" chat chat-start">
                <div className="chat-bubble chat-bubble-primary bg-gradient-to-r from-blue-700 to-cyan-500 p-5">
                “A satisfied customer is one who will continue to buy from you, seldom shop around, refer other customers and in general be a superstar advocate for your business.” --Gregory Ciotti
                </div>
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
          <div className="w-[80%] mx-auto lg:flex justify-center gap-4 items-center">
          <img
              src="https://i.ibb.co/nBr5zbJ/yes-very-good-smiling-redhead-woman-cheering-up-winking-showing-thumbs-up-approval-praise-great-work.jpg"
              className="w-[400px] h-[300px]"
            />
              <div className=" chat chat-start">
                <div className="chat-bubble chat-bubble-primary bg-gradient-to-r from-blue-700 to-cyan-500 p-5">
                “The goal as a company is to have customer service that is not just the best but legendary.” -Anthonila
                </div>
              </div>
            </div>
            
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
          <div className="w-[80%] mx-auto lg:flex justify-center gap-4 items-center">
          <img
              src="https://i.ibb.co/qjSgk4S/happy-joyful-guy-showing-ok-gesture.jpg"
              className="w-[400px] h-[300px]"
            />
              <div className=" chat chat-start">
                <div className="chat-bubble chat-bubble-primary bg-gradient-to-r from-blue-700 to-cyan-500 p-5">
                “Get closer than ever to your customers. So close, in fact, that you tell them what they need well before they realize it themselves.” --Salim Ullah
                </div>
              </div>
            </div>
            
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
          <div className="w-[80%] mx-auto lg:flex justify-center gap-4 items-center">
          <img
              src="https://i.ibb.co/Rvn5jY8/very-good-smiling-satisfied-businessman-male-entrepreneur-business-suit-show-okay-signs-nod-approval.jpg"
              className="w-[400px] h-[300px]"
            />
              <div className=" chat chat-start">
                <div className="chat-bubble chat-bubble-primary bg-gradient-to-r from-blue-700 to-cyan-500 p-5">
                “At the heart of a successful business strategy is a customer experience that is elegantly simple and positive, where consumers are likely to come away satisfied – Abdul Kader”
                </div>
              </div>
            </div>
            
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviow;

import Image1 from  "./image/image1.png";
import Image2 from  "./image/image2.png";
import Image3 from  "./image/image3.png";
import Image4 from  "./image/image4.png";
import Mark from "./image/mark.png";

import "./Product.css";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


// import Swiper core and required modules
const Men = function(){
    return(
        <div className="product-back pb-5">
            <div className="container">
                <div className="product pt-5 pb-5">
                    <h1>Popular Dishes</h1>



                    <Swiper className='row d-flex justify-content-between pt-5'
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={30}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: false }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide className='col-4'>
        <div className="card text-center w-100">
        <img src={Image1} className="card-img-top" alt=""/>
      <div className="card-body">
        <h5 className="card-title">Barbecue Shish kebab Shashlik Skewer</h5>
        <img src={Mark} className="card-img-top w-25 pt-3" alt=""/>
        <span className="text-danger d-block pt-3">$12.00</span>
       </div>
        </div>
        </SwiperSlide>
      <SwiperSlide className='col-4'>
      <div className="card text-center w-100">
        <img src={Image2} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Barbecue Shish kebab Shashlik Skewer</h5>
        <img src={Mark} className="card-img-top w-25 pt-3" alt=""/>
        <span className="text-danger d-block pt-3">$12.00</span>
       </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className='col-4'>
      <div className="card text-center w-100">
        <img src={Image3} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Barbecue Shish kebab Shashlik Skewer</h5>
        <img src={Mark} className="card-img-top w-25 pt-3" alt=""/>
        <span className="text-danger d-block pt-3">$12.00</span>
       </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className='col-4'>
      <div className="card text-center w-100">
        <img src={Image4} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Barbecue Shish kebab Shashlik Skewer</h5>
        <img src={Mark} className="card-img-top w-25 pt-3" alt=""/>
        <span className="text-danger d-block pt-3">$12.00</span>
       </div>
        </div>
      </SwiperSlide>
    </Swiper>

                </div>
            </div>
        </div>
    
   
    
  );
  
}
export default Men;
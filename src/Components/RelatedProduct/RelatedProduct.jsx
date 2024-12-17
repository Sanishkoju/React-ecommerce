import React , {useState} from 'react'
import {Swiper,SwiperSlide} from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import './RelatedProduct.css'
import data_product from '../Assets/data';


import 'swiper/css';
import 'swiper/css/navigation';

import 'swiper/css/pagination';
import { Item } from '../Item/Item'

export const RelatedProduct = ({all_product, productcat}) => {
  console.log("productcatds",productcat)
  const [value, setValue] =useState(data_product)
    const slicedProducts = value
  return (
               
                <div className="related-products">
                  <h1 style={{marginBlock:"30px"}}>RELATED PRODUCTS</h1>
                  <div className='buttons'>
                   <span className={value === data_product ? "active" : ""} onClick={()=>setValue(data_product)}>Related</span> <span className={value === all_product ? "active" : ""} onClick={()=> setValue(all_product)}>Category</span>
                  </div>
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={3} // Default for larger screens
                        navigation={true}
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        className="swiper"
                        loop={true}
                        modules={[Pagination, Navigation]}
                        style={{
                            '--swiper-navigation-size': '20px', // Set the navigation button size to 20px
                            '--swiper-navigation-color': '#000', // Set the navigation button color to black
                            '--swiper-pagination-color': '#000', // Set pagination color to black
                            '--swiper-pagination-button-color': '#000', // Set the color of the pagination buttons to black
                            '--swiper-pagination-button-size': '20px', 

                        }}
                        breakpoints={{
                            320: { // for small screens (mobile)
                                slidesPerView: 1, // 1 slide per view on mobile
                            },
                            768: { // for tablets and larger screens
                                slidesPerView: 2, // Optionally adjust for tablets
                            },
                            1024: { // for large screens
                                slidesPerView: 4, // 3 slides per view on desktop and larger screens
                            },
                        }}
                        >
                  {
                    slicedProducts.map((item, index) => {
                        // console.log(Array.isArray(all_product));
                        // console.log(all_product);
                        // console.log("items", item.category, productcat)

                      if(productcat === item.category){
                        console.log("dsd",productcat, item.category)
                        return(
                            <SwiperSlide key={index} style={{ height: 'unset',  }}>
                          <Item key={index} item={item} />
                          </SwiperSlide>
                        )
                      }
                      else if(value === data_product){
                        return (
                          <SwiperSlide key={index} style={{ height: 'unset',  }}>
                        <Item key={index} item={item} />
                        </SwiperSlide>
                      );                  }
                      
                    })
                  }
                  </Swiper>
                </div>
  )
}


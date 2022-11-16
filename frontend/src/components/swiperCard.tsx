import {Swiper,SwiperSlide} from 'swiper/react';
import { ProjectCard } from '../components/projectCard';
import { Pagination } from 'swiper';

import "swiper/css";
import "swiper/css/pagination";


export function SwiperCard(){
    return(
        <Swiper
    
            slidesPerView={1}
            centeredSlides={true}
            spaceBetween={30}
            pagination={{
                clickable:true
            }}
            modules={[Pagination]}

            //onSlideChange={()=>{}}
            //onSwiper={(swiper)=>{}}
            className="bg-[whitesmoke] h-auto md:w-[80%] md:mx-auto my-20 rounded  
            shadow-md md:shadow-xl md:hover:shadow-2xl"
        >
            <SwiperSlide>
                <h3 className='text-blue-gray-400 text-2xl font-semibold text-center mx-auto w-[100%]'>Technical Project</h3>
                <ProjectCard/>
            </SwiperSlide>
           
        </Swiper>
    )    
}
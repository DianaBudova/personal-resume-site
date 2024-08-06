import {Navigation} from 'swiper/modules';
import Image from 'next/image'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

export default function ImageSlider({images}) {
    return (
        <Swiper
            style={{
                "--swiper-navigation-color": "#1a9c4a",
            }}
            className="rounded-lg transition-transform duration-300 hover:scale-110"
            modules={[Navigation]}
            slidesPerView={1}
            navigation
        >
            {images.map((url, index) => (
                <SwiperSlide key={index}>
                    <img src={url} alt={`Slide ${index + 1}`}/>
                    <Image src={url} alt={`Slide ${index + 1}`} width={200} height={200}></Image>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

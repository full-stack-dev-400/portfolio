import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/stephen.jpeg'
import AVTR2 from '../../assets/zeeshan.jpg'
import AVTR3 from '../../assets/charlotte-founder-ilg.png'
import AVTR4 from '../../assets/zayed.jpg'

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    {
        avatar: AVTR1,
        name: 'Stephen',
        review: 'Working with Umair has been an exceptional experience. His understanding of our vision for Shorter Investment Group was evident from the start. His attention to detail, technical expertise, and creative approach were key in delivering a website that aligns perfectly with our brand and mission.– Shorter Investment Group'
    },
    {
        avatar: AVTR2,
        name: 'Zeeshan Khan',
        review: 'Working with Umair was amazing! He really understood our vision and created a website that perfectly reflects what AIRVISTAS stands for – quality service and seamless experiences. We’re thrilled with the result and look forward to more projects together!'
    },
    {
        avatar: AVTR3,
        name: 'Charlotte',
        review: 'Umair did an exceptional job designing our website. It perfectly represents the essence of Eiklique—sophisticated and modern. His professionalism and commitment to quality shine through, and we couldn’t be happier with the outcome.'
    },
    {
        avatar: AVTR4,
        name: 'M Zayed',
        review: 'We are incredibly pleased with the website Umair built for Eiklique. It captures the essence of our brand beautifully. His expertise and creativity have helped us showcase our luxury fragrances in the best way possible. Highly recommended!'
    },
]

const testimonials = () => {
    return (

        <section id='testimonials'>
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <Swiper className="container testimonials__container"
                // install Swiper modules
                modules={[Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}>
                {
                    data.map(({ avatar, name, review }, index) => {
                        return (
                            <SwiperSlide key={index} className='testimonial'>
                                <div className="client__avatar">
                                    <img src={avatar} alt="my-client" />
                                </div>
                                <h5 className="client__name">{name}</h5>
                                <small className="client__review">{review}</small>

                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}

export default testimonials
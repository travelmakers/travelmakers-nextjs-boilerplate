'use client';

import { IMypage } from '@/types/api.mypage';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

interface Props {
  data: IMypage;
}
const Container: React.FC<Props> = ({ data }) => (
  <div>
    Container
    <br />
    <br />
    <div>user_name: {JSON.stringify(data.data.user_name)}</div>
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={swiper => console.log(swiper)}
    >
      <SwiperSlide>
        <div style={{ padding: 16, backgroundColor: 'red' }}>Slide 1</div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={{ padding: 16, backgroundColor: 'blue' }}>Slide 2</div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={{ padding: 16, backgroundColor: 'green' }}>Slide 3</div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={{ padding: 16, backgroundColor: 'yellow' }}>Slide 4</div>
      </SwiperSlide>
    </Swiper>
  </div>
);

export default Container;

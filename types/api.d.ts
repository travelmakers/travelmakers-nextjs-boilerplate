interface IPrice {
  is_coupon: boolean;
  is_price: boolean;
  price: {
    discount: number;
    max_night: number;
    min_night: number;
    min_night_discount: number;
    min_night_price: number;
    min_night_sale_price: number;
    price: number;
    sale_price: number;
  }[];
}

interface IHotel {
  address: string;
  coludfront_url: string;
  coupons: string;
  first_image_position_y: string;
  hotel_id: number;
  hotel_price_scheme: string;
  images: string[];
  items: string[];
  latitude: number;
  longitude: number;
  name: string;
  price: number;
  price_info: string;
  prices: IPrice;
  star: string;
  tags: string[];
  type: string;
}

interface ISectionList {
  order: number;
  content: string;
  only: boolean;
}

interface IAmenities {
  excluded: string[];
  included: string[];
}

interface ISections {
  title: string;
  list: ISectionList[];
}

interface IFaq {
  id: number;
  question: string;
  answer: string;
}

interface IImage {
  id: number;
  image: string;
}

interface IItems {
  id: number;
  name: string;
  star: string;
  content: string;
  cloudfront_url: string;
  good: string[];
  option: string;
}

interface IRooms {
  id: number;
  bed_info: string;
  bed_size: string;
  cloudfront_url: string;
  images: string[];
  name: string;
}

declare module '@hotel/api' {
  export interface IHotelInfo {
    amenities: IAmenities[];
    benefit: {
      notice: string;
      sections: ISections[];
    };
    cancelRefundPolicy: {
      document: string;
      fifth: string;
      fifth_content: string;
      first: string;
      first_content: string;
      fourth: string;
      fourth_content: string;
      hotel_id: number;
      hotel_mistake: string;
      id: number;
      immediately_document: string;
      second: string;
      second_content: string;
      third: string;
      third_content: string;
      user_mistake: string;
      using: string;
    };
    cancellationRefundRegulations: string;
    check_points: {
      image: string;
      description: string;
      title: string;
    }[];
    curator: string;
    facilities: string[];
    faqs: IFaq[];
    guide_url: string;
    hotel: IHotel;
    hotel_status: string;
    immediateDischargeRegulations: string;
    is_curator: boolean;
    other_hotels: {
      hotel_id: number;
      name: string;
      eng_name: string;
      first_image_position_y: string;
      image: string;
      items: string[];
      max_price: number;
      min_price: number;
      prices: IPrice;
    }[];
    premium: {
      image: string[];
      main: string;
      sub: string;
    };
    refund: {
      created_at: string;
      day: number;
      days_1_6: number;
      days_7_10: number;
      days_11_20: number;
      days_21_30: number;
      free_benefits_cost: number;
      hotel_id: number;
      id: number;
      in_use_customer_fault: string;
      in_use_hotel_fault: string;
      room_type: string;
      special_agreement: string;
      updated_at: string;
      visible: string;
      weekday_cost: string;
      weekend_cost: string;
    };
    reviews: {
      images: IImage[];
      items: IItems[];
    };
    rooms: IRooms[];
    sub_explanation: string;
    tour_sub_explanation: string;
  }
}

declare module '@hotel/api' {
  export interface Faq {
    id: number;
    question: string;
    answer: string;
  }
  interface Review {
    name: string;
    job: string;
    content: string;
    image: string;
  }
  interface Price {
    max_night: number;
    price: number;
    discount: number;
    sale_price: number;
    min_night: number;
    min_night_price: number;
    min_night_discount: number;
    min_night_sale_price: number;
  }
  interface Coupon {
    exists: boolean;
    coupon_id: number;
    discount_rate: number;
    discount_amount: number;
    discount_sale_price: number;
    discounted: number;
    item: string;
    option: string;
  }
  interface FeatureHotels {
    name: string;
    items: {
      status: string;
      sold_out: boolean;
      type: string;
      hotel_id: number;
      hotel_price_scheme: string;
      name: string;
      eng_name: string;
      first_image_position_y: string;
      image: string;
      address: string;
      subway_station: string;
      rating: string;
      events: string[];
      items: string[];
      price: Price[];
      coupons?: Coupon[];
    };
  }
  interface Section {
    main_title: string;
    sub_title: string;
    data: {
      title: string;
      image: string;
      url: string;
      filter: {
        region: string;
        area: string;
      };
    }[];
  }
  interface Banner {
    hotel_id: number;
    images: string;
    mobile_images: string;
    name: string;
    description: string;
    promotion: string;
    link: string;
    depth: string;
    tab: string;
    route: string;
    view: string;
    tags: string;
  }

  interface Catalog {
    city: string;
    items: {
      type: string;
      hotel_id: number;
      hotel_price_scheme: string;
      star: string;
      first_image_position_y: string;
      image: string;
      name: string;
      description: string;
      subway_station: string;
      tags: string[];
      events: string[];
      price: {
        is_price: boolean;
        is_coupon: boolean;
        price: Price[];
      };
      coupons?: Coupon[];
      timesale: {
        type: string;
        format: string;
        content: string;
        remaining: string;
        end_at: string;
      }[];
    }[];
  }

  export interface IHotelInfo {
    is_curator: boolean;
    curator: string;
    banners: Banner[];
    earlyBird: {
      id: number;
      title: string;
      hotel_id: string;
      explanation: string;
      event: string;
      url: string;
      custom: {
        button: {
          name: string;
        };
        typeform: {
          id: string;
        };
      };
      layout: {
        background: {
          color: string;
        };
      };
      time_limit: {
        start_dt: string;
        end_dt: string;
      };
      image: string;
      image_mobile: string;
    };
    catalogs: Catalog[];
    sections: Section[];
    feature_hotels: FeatureHotels[];
    promotion: {
      id: number;
      title: string;
      hotel_id: number;
      explanation: string;
      event: string;
      url: string;
      custom: {
        button: {
          name: string;
        };
      };
      layout: {
        background: {
          color: string;
        };
      };
      time_limit: {
        start_dt: string;
        end_dt: string;
      };
      image: string;
      image_mobile: string;
    };
    faqs: Faq[];
    reviews: Review[];
  }
}

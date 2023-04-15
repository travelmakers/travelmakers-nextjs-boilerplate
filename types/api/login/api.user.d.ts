declare module '@hotel/api/user' {
  import { User } from 'next-auth';

  export interface IUser extends User {
    accessToken: string;
    id: number;
    name: string;
    nick_name: string;
    email: string;
    profile_image: string;
    tel: string;
    phone: string;
    country_code: string;
    iso: string;
    age_range: string;
    birthyear: string;
    birthday: string;
    gender: string;
    visit_route: string;
    marketing: string;
    privacy_uses_marketing: string;
    email_verified_at: string;
    last_login_at: string;
    deleted_at: string;
    created_at: string;
    updated_at: string;
    isSocial: boolean;
    isAdmin: boolean;
    socials: string[];
    roles: string[];
    mobile_number: string;
    birth: string;
    last_seen_at: string;
    reservation_count: number;
    last_reservation_order_at: string;
    last_confirmation_checkout_at: string;
  }

  export type UserStatus = {
    type: string;
    status: string;
    data: {
      user: IUser;
    };
  };
}

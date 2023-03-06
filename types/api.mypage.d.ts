interface IConfirmation {
  id: number;
  expected_date: string;
  start_date: string;
  end_date: string;
  checkin_d_day: number;
  checkout_d_day: number;
}

export type ReservationState =
  | 'default'
  | 'tour_confirm_before'
  | 'tour_confirm'
  | 'tour_done'
  | 'reservation_purchase_before'
  | 'reservation_purchase_done'
  | 'checkin_before'
  | 'day_n'
  | 'extend_purchase_before'
  | 'extend_purchase_done'
  | 'extend_checkin_before'
  | 'reservation_change_process'
  | 'checkout_before'
  | 'checkout_before_n'
  | 'checkout_done'
  | 'tour_cancel'
  | 'reservation_cancel';

/**
구매 전	      default
투어 확정 전	 tour_confirm_before
투어 확정 	  tour_confirm
투어 완료	    tour_done
결제 진행 중 	reservation_purchase_before
연장 결제 전 	extend_purchase_before
예약 확정 전	reservation_purchase_done
체크인 전	    checkin_before
입주 1일차	  day_1
입주 N일차	  day_n
체크아웃 전	  checkout_before
체크아웃	    checkout_done

결제 진행 중 	reservation_purchase_before
예약 확정 전	reservation_purchase_done
예약 변경 중	reservation_change_process
호텔 이용 중	day_n
연장 확정 전	extend_purchase_done
연장 확정	    extend_checkin_before
체크아웃 D-0	checkout_before_n
 */
interface IMypageReservations {
  id: number;
  state: ReservationState;
  hotel: {
    id: number;
    title: string;
    main_image: string;
  };
  confirmation: IConfirmation;
}

export type IMypage = {
  data: {
    user_id: number;
    user_name: string;
    reservations: IMypageReservations[];
  };
  links: {
    contents: object;
    self: string;
  };
};

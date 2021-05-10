export enum PAYMENT_OPTIONS {
  AMEX = 'AMEX',
  Discover = 'Discover',
  MasterCard = 'MasterCard',
  Visa = 'Visa',
  CarteBlanche = 'Carte Blanche',
  DinersClub = 'Diners Club'
}

type DiningStyle =
  | 'Home Style'
  | 'Casual Dining'
  | 'Casual Elegant'
  | 'Fine Dining';

type FoodType =
  | 'Contemporary american'
  | 'American'
  | 'French'
  | 'Seafood'
  | 'Fine Dining'
  | 'Japanese'
  | 'Steak'
  | 'Portuguese'
  | 'Californian'
  | 'Mexican'
  | 'Italian'
  | string;

type PriceRange = '$30 and under' | '$31 to $50' | '$50 and over';

type Geoloc = {
  lat: number;
  lng: number;
};

type ROUNDED_START_COUNT = 0 | 1 | 2 | 3 | 4 | 5;

export type Restaurant = {
  objectID: string;
  name: string;
  address: string;
  area: string;
  city: string;
  country: string;
  image_url: string;
  mobile_reserve_url: string;
  payment_options: Array<PAYMENT_OPTIONS>;
  phone: number;
  postal_code: number;
  price: number;
  reserve_url: string;
  state: string;
  _geoloc: Geoloc;
  food_type: FoodType;
  stars_count: number;
  reviews_count: number;
  neighborhood: string;
  phone_number: string;
  price_range: PriceRange;
  dining_style: DiningStyle;
  rounded_stars_count: ROUNDED_START_COUNT;
};

export default Restaurant;

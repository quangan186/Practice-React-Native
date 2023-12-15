import {
  roomCategoryImage1,
  roomCategoryImage2,
  roomCategoryImage3,
  roomNearImage1,
  roomNearImage2,
  roomNearImage3,
  roomRecommendImage1,
  roomRecommendImage2,
} from '../../assets/images';
import {ImageSource} from '../../assets/images/type';

export interface RoomCategoryModel {
  title: string;
  type: string;
  image: ImageSource;
}

export interface RoomProps {
  image: ImageSource;
  title: string;
  price: number;
  location?: string;
  distance?: number;
  numberOfBedroom: number;
  numberOfBathroom: number;
  rating: number;
}
export const homeTabBarCategory: string[] = ['All', 'Stay', 'Office'];

export const roomCategories: RoomCategoryModel[] = [
  {
    title: 'Service Room',
    type: 'service',
    image: roomCategoryImage1,
  },
  {
    title: 'Duplex Room',
    type: 'duplex',
    image: roomCategoryImage2,
  },
  {
    title: 'Apartment',
    type: 'apartment',
    image: roomCategoryImage3,
  },
];

export const nearRooms: RoomProps[] = [
  {
    image: roomNearImage1,
    title: 'Blue Vibe Room',
    price: 12.5,
    distance: 1.2,
    numberOfBedroom: 1,
    numberOfBathroom: 1,
    rating: 5.0,
  },
  {
    image: roomNearImage2,
    title: 'Wooden Room',
    price: 12.5,
    distance: 1.2,
    numberOfBedroom: 1,
    numberOfBathroom: 1,
    rating: 5.0,
  },
  {
    image: roomNearImage3,
    title: 'West View Room',
    price: 12.5,
    distance: 1.2,
    numberOfBedroom: 1,
    numberOfBathroom: 1,
    rating: 5.0,
  },
];

export const recommendRooms: RoomProps[] = [
  {
    image: roomRecommendImage1,
    title: 'Minimalism Room',
    price: 12.5,
    location: 'Phu Nhuan',
    numberOfBedroom: 1,
    numberOfBathroom: 1,
    rating: 5.0,
  },
  {
    image: roomRecommendImage2,
    title: 'Blue Vibe Room',
    price: 20.5,
    location: 'Phu Nhuan',
    numberOfBedroom: 1,
    numberOfBathroom: 1,
    rating: 5.0,
  },
];

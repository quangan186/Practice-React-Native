import {
  giftImage,
  roomBookingImage1,
  roomBookingImage2,
  roomBookingImage3,
  roomBookingImage4,
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

export const messageAndNotificationTabBarCategory: string[] = [
  'Chat',
  'Service',
];

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

export const chatMessages = [
  {
    imgSource: roomBookingImage1,
    from: 'Karen Smith',
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    time: '3 hours ago',
  },
  {
    imgSource: roomBookingImage2,
    from: 'Hilary',
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    time: '3 hours ago',
  },
  {
    imgSource: roomBookingImage3,
    from: 'Karen Smith',
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    time: '3 hours ago',
  },
];

export const serviceMessages = [
  {
    imgSource: roomBookingImage1,
    title: 'Your booking has been completed',
    time: '3 hours ago',
  },
  {
    imgSource: roomBookingImage4,
    title: 'Your booking has been cancelled',
    time: '3 hours ago',
  },
  {
    imgSource: giftImage,
    title: '50% off for all booking',
    time: '3 hours ago',
  },
  {
    imgSource: giftImage,
    title: 'No deposit fee at all from 3th - 6th June',
    time: '3 hours ago',
  },
];

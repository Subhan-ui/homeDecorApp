import {
  Home,
  CardDetail,
  Cart,
  Category,
  Checkout,
  DeliveryTime,
  EditProfile,
  FailurePayment,
  ForgotPassword,
  ItemsPage,
  Launch,
  Login,
  Order,
  Profile,
  ResetPassword,
  Reviews,
  Signup,
  SubCategory,
  SuccessPayment,
  Wishlist,
  VerifyEmail,
  Settings,
  Address,
  Boarding,
} from '../../screens';
import {navigation} from '../../types/types';

export const navigationLogged: navigation = [
  {
    id: 1,
    name: 'Home',
    Component: Home,
  },
  {
    id: 2,
    name: 'CardDetail',
    Component: CardDetail,
  },
  {
    id: 3,
    name: 'Cart',
    Component: Cart,
  },
  {
    id: 4,
    name: 'Category',
    Component: Category,
  },
  {
    id: 5,
    name: 'Checkout',
    Component: Checkout,
  },
  {
    id: 6,
    name: 'DeliveryTime',
    Component: DeliveryTime,
  },
  {
    id: 7,
    name: 'EditProfile',
    Component: EditProfile,
  },
  {
    id: 8,
    name: 'FailurePayment',
    Component: FailurePayment,
  },
  {
    id: 9,
    name: 'ItemsPage',
    Component: ItemsPage,
  },
  {
    id: 10,
    name: 'Launch',
    Component: Launch,
  },
  {
    id: 11,
    name: 'Order',
    Component: Order,
  },
  {
    id: 12,
    name: 'Profile',
    Component: Profile,
  },
  {
    id: 13,
    name: 'Reviews',
    Component: Reviews,
  },
  {
    id: 14,
    name: 'SubCategory',
    Component: SubCategory,
  },
  {
    id: 15,
    name: 'SuccessPayment',
    Component: SuccessPayment,
  },
  {
    id: 16,
    name: 'Wishlist',
    Component: Wishlist,
  },
  {
    id: 17,
    name: 'Settings',
    Component: Settings,
  },
  {
    id: 18,
    name: 'Address',
    Component: Address,
  },
];

export const navigationSignUp: navigation = [
  {
    id: 2,
    name: 'Launch',
    Component: Launch,
  },
  {
    id: 6,
    name: 'Login',
    Component: Login,
  },
  {
    id: 7,
    name: 'Signup',
    Component: Signup,
  },
  {
    id: 3,
    name: 'ResetPassword',
    Component: ResetPassword,
  },
  {
    id: 4,
    name: 'ForgotPassword',
    Component: ForgotPassword,
  },
  {
    id: 5,
    name: 'VerifyEmail',
    Component: VerifyEmail,
  },
  {
    id: 1,
    name: 'Boarding',
    Component: Boarding,
  },
];

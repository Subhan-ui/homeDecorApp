export type navigatorTypes = {
  Home: undefined;
  CardDetail: {
    name: string;
    description: string;
    price: number;
    picture: string;
    id: string;
  };
  Splash: undefined;
  Cart: undefined;
  Category: undefined;
  Checkout: undefined;
  DeliveryTime: undefined;
  EditProfile: undefined;
  FailurePayment: undefined;
  ForgotPassword: undefined;
  ItemsPage: undefined;
  Launch: undefined;
  Login: undefined;
  Order: undefined;
  Profile: undefined;
  ResetPassword: undefined;
  Reviews: {id: string};
  Signup: undefined;
  SubCategory: undefined;
  SuccessPayment: undefined;
  Wishlist: undefined;
  VerifyEmail: undefined;
  Settings: undefined;
  Address: undefined;
  Boarding: undefined;
};

export type userDataType = {
  name: string;
  email: string;
  id: string;
  mobileNumber: string;
  dateOfBirth: string;
  profilePicture: string | null;
  address: addressType | null;
  orders: orderType[];
  cartItems: cartType[];
  favourites: favouriteType[];
  reviews: reviewType[];
};

export type Rating = 'WORST' | 'BAD' | 'NORMAL' | 'GOOD' | 'BEST';

export type getReviewType = {
  id: string;
  rating: Rating;
  comment: string;
  user: {
    name: string;
    profilePicture: string | null;
  };
};

export type reviewState = {
  reviews: getReviewType[] | null;
  status: status;
  error: string | null;
};

export type orderType = {
  totalPrice: number;
  id: string;
  status: 'PENDING' | 'IN_PROGRESS' | 'DELIVERED' | 'CANCELED';
  updatedAt: string;
  items: {
    id: string;
    quantity: number;
    price: number;
    furnitureItem: itemsType;
  }[];
};

export type updateUserType = {
  picture: string;
  name: string;
  dateOfBirth: string;
  mobileNumber: string;
  email: string;
};

type status = 'idle' | 'loading' | 'succeeded' | 'failed';
export type OrderState = {
  order: orderType[] | [];
  status: status;
  total: number;
  error: string | null;
};

export type reviewType = {
  id: string;
  rating: Rating;
  comment: string;
  furnitureItem: itemsType;
};
export type navigation = {
  id: number;
  name: keyof navigatorTypes;
  Component: React.ComponentType<any>;
}[];

export type SignupType = {
  name: string;
  email: string;
  mobileNumber: string;
  dateOfBirth: string;
  password: string;
  confirmPassword: string;
};
export type SignupSubType = {
  name: string;
  email: string;
  mobileNumber: string;
  dateOfBirth: string;
  password: string;
};

export type AuthState = {
  user: SignupType | null;
  status: status;
  error: string | null;
  userData: userDataType | null;
};
export type AddressState = {
  address: addressType | null;
  status: status;
  error: string | null;
};

export type verifyType = {
  email: string;
  verificationCode: string;
};

export type loginType = {
  email: string;
  password: string;
};

export type resetPasswordType = {
  password: string;
  confirmPassword: string;
  resetCode: string;
};

export type addressType = {
  country: string;
  state: string;
  city: string;
  postalCode: string;
  street: string;
};

export type itemsType = {
  picture: string;
  name: string;
  description: string;
  price: number;
  id: string;
  category: {
    id: string;
    name: string;
  };
  subCategory: {
    id: string;
    name: string;
  };
  createdAt: number;
};

export type itemState = {
  items: itemsType[] | null;
  status: status;
  error: string | null;
  topItems: itemsType[] | null;
};

export type favouriteType = {
  id: string;
  furnitureItem: itemsType;
};

export type favouriteState = {
  favourites: favouriteType[] | null;
  status: status;
  error: string | null;
};

export type cartType = {
  id: string;
  quantity: number;
  furnitureItem: itemsType;
  totalPrice: number;
};

export type cartState = {
  carts: cartType[] | null;
  status: status;
  error: string | null;
};

export type cardType = {
  marginBottom?: number;
  name: string;
  description: string;
  price: number;
  picture: string;
  id: string;
};

export type cartItemType = {
  picture: string;
  id: string;
  name: string;
  price: number;
  quantity: number;
  itemId: string;
};
export type componentWrapperType = {
  children: JSX.Element;
  text: string;
  filter?: boolean;
  wishlist?: boolean | null;
  refresh?: JSX.Element;
};
export type componentWrapperViewType = {
  children: JSX.Element;
  text: string;
  filter?: boolean;
  navbar?: boolean;
};
export type dropdownType = {
  value: Rating;
  onChange: (text: Rating) => void;
};

export type headerType = {text: string};
export type imgType = {
  photo: string | null | undefined;
  img: {width: number; height: number; borderRadius: number};
};

export type ItemsProfileType = {
  children: JSX.Element;
  text: string;
  onPress?: () => void;
};

export type modalType = {
  isVisible: boolean;
  close: () => void;
};

export type buttonType = {
  text: string;
  marginTop: number;
  onPress?: () => void;
  marginBottom?: number;
  color?: boolean;
};

export type dateInputType = {
  color?: boolean;
  value: Date;
  onChange: (date: Date) => void;
  marginTop?: number;
};
export type headerItemType = {
  text: string;
  wishlist?: boolean | null;
};
export type inputType = {
  title: string;
  placeholder: string;
  onChange: (text: string) => void;
  value: string;
  eye?: boolean;
  marginTop?: number;
  color?: boolean;
  name?: string;
};
export type radioButtonType = {
  label: string;
  checked: boolean;
  onChange: () => void;
};
export type noCartType = {where: 'Cart' | 'Wishlist'};
export type orderItemType = {
  id: string;
  status: string;
  date: string;
  picture: string;
  head: string;
  desc: string;
  price: number;
  quantity: number;
  total: number;
  handleConfirm: () => void;
};
export type reviewComponentType = {
  picture: string | null;
  name: string;
  comment: string;
};
export type reviewModalType = {
  isVisible: boolean;
  close: () => void;
  comment: string;
  rating: Rating;
  onChange: (name: string, value: string) => void;
  addReview: () => void;
};
export type settingItemType = {
  text: string;
  children: JSX.Element;
  onClick?: () => void;
};
export type wishlistCardType = {
  id: string;
  name: string;
  price: number;
  picture: string;
};
export type gridComponentType = {data: {id: number; name: string}[]};

import {gql} from '@apollo/client';

export const SIGNUP_USER = gql`
  mutation SIGNUP_USER(
    $name: String!
    $email: String!
    $mobileNumber: String!
    $dateOfBirth: String!
    $password: String!
  ) {
    signUp(
      name: $name
      email: $email
      mobileNumber: $mobileNumber
      dateOfBirth: $dateOfBirth
      password: $password
    ) {
      user {
        id
      }
    }
  }
`;

export const VERIFY_EMAIL = gql`
  mutation VERIFY_USER($email: String!, $verificationCode: String!) {
    verifyEmail(email: $email, verificationCode: $verificationCode)
  }
`;

export const LOGIN_USER = gql`
  mutation LOGIN_USER($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      accessToken
      refreshToken
      user {
        name
      }
    }
  }
`;

export const FORGOT_PASSWORD = gql`
  mutation FORGOT_PASSWORD($email: String!) {
    forgotPassword(email: $email)
  }
`;

export const RESET_PASSWORD = gql`
  mutation RESET_PASSWORD($resetCode: String!, $password: String!) {
    resetPassword(resetToken: $resetCode, newPassword: $password)
  }
`;

export const ADD_ADDRESS = gql`
  mutation ADD_ADDRESS(
    $country: String!
    $state: String!
    $city: String!
    $postalCode: String!
    $street: String!
  ) {
    addAddress(
      country: $country
      state: $state
      city: $city
      postalCode: $postalCode
      street: $street
    ) {
      id
    }
  }
`;

export const GET_ADDRESS = gql`
  query GET_ADDRESS {
    getAddress {
      street
      city
      state
      postalCode
      country
    }
  }
`;

export const UPDATE_ADDRESS = gql`
  mutation UPDATE_ADDRESS(
    $country: String!
    $state: String!
    $city: String!
    $postalCode: String!
    $street: String!
  ) {
    updateAddress(
      country: $country
      state: $state
      city: $city
      postalCode: $postalCode
      street: $street
    )
  }
`;

export const DELETE_ADDRESS = gql`
  mutation DELETE_ADDRESS {
    deleteAddress
  }
`;

export const GET_ITEMS = gql`
  query GET_ITEMS {
    getItems {
      picture
      id
      name
      description
      price
      category {
        name
        id
      }
      subCategory {
        name
        id
      }
    }
  }
`;

export const ADD_FAVOURITE = gql`
  mutation ADD_FAVOURITE($id: String!) {
    addToFavourites(itemId: $id)
  }
`;

export const DEL_FAVOURITE = gql`
  mutation DEL_FAVOURITE($id: String!) {
    removeFromFavourites(id: $id)
  }
`;

export const GET_FAVOURITES = gql`
  query GET_FAVOURITES {
    getUserFavourites {
      id
      furnitureItem {
        name
        description
        price
        id
        picture
        category {
          name
          id
        }
        subCategory {
          name
          id
        }
      }
    }
  }
`;

export const ADD_CART = gql`
  mutation ADD_CART($id: String!) {
    addItemToCart(id: $id, quantity: 1) {
      id
    }
  }
`;

export const GET_CART = gql`
  query GET_CART {
    getCartItems {
      id
      quantity
      totalPrice
      furnitureItem {
        id
        name
        description
        price
        picture
        category {
          name
          id
        }
        subCategory {
          name
          id
        }
      }
    }
  }
`;
export const ADD_ORDER = gql`
  mutation ADD_ORDER($quantity: Float!, $id: String!) {
    addOrderItem(quantity: $quantity, productId: $id)
  }
`;

export const MAKE_ORDER = gql`
  mutation MAKE_ORDER($id: String!) {
    makeOrder(id: $id)
  }
`;

export const ADD_SINGLE_CART = gql`
  mutation ADD_SINGLE_CART($id: String!) {
    addSingleItem(cartId: $id)
  }
`;
export const REMOVE_SINGLE_CART = gql`
  mutation REMOVE_SINGLE_CART($id: String!) {
    removeSingleItem(cartId: $id)
  }
`;

export const REMOVE_ORDER_ITEM = gql`
  mutation REMOVE_ORDER_ITEM($id: String!) {
    removeOrderItem(id: $id)
  }
`;

export const DELETE_ORDER = gql`
  mutation DELETE_ORDER($id: String!) {
    deleteOrder(id: $id)
  }
`;

export const UPDATE_PROFILE = gql`
  mutation UPDATE_PROFILE(
    $name: String!
    $dateOfBirth: String!
    $mobileNumber: String!
    $picture: String!
  ) {
    updateUser(
      name: $name
      dateOfBirth: $dateOfBirth
      mobileNumber: $mobileNumber
      picture: $picture
    )
  }
`;

export const CANCEL_ORDER = gql`
  mutation CANCEL_ORDER($id: String!) {
    cancelOrder(id: $id)
  }
`;

export const WHOLE_DATA = gql`
  query WHOLE_DATA {
    getUser {
      name
      email
      mobileNumber
      profilePicture
      id
      dateOfBirth
      address {
        street
        city
        state
        postalCode
        country
      }
      orders {
        totalPrice
        id
        status
        updatedAt
        items {
          id
          quantity
          price
          furnitureItem {
            name
            id
            description
            price
            picture
            category {
              name
              id
            }
            subCategory {
              name
              id
            }
          }
        }
      }
      cartItems {
        id
        quantity
        totalPrice
        furnitureItem {
          name
          id
          description
          price
          picture
          category {
            name
            id
          }
          subCategory {
            name
            id
          }
        }
      }
      favourites {
        id
        furnitureItem {
          name
          id
          description
          price
          picture
          category {
            name
            id
          }
          subCategory {
            name
            id
          }
        }
      }
      reviews {
        id
        rating
        comment
        furnitureItem {
          name
          id
          description
          price
          picture
          category {
            name
            id
          }
          subCategory {
            name
            id
          }
        }
      }
    }
  }
`;

export const SEARCH = gql`
  query SEARCH($text: String!) {
    searchItems(term: $text) {
      name
      id
      description
      price
      picture
      category {
        name
        id
      }
      subCategory {
        name
        id
      }
      createdAt
    }
  }
`;

export const GET_NEW_COLLECTION = gql`
  query GET_NEW_COLLECTION {
    newCollection {
      name
      id
      description
      price
      picture
      category {
        name
        id
      }
      subCategory {
        name
        id
      }
      createdAt
    }
  }
`;
export const GET_POPULAR = gql`
  query GET_POPULAR {
    popularItems {
      name
      id
      description
      price
      picture
      category {
        name
        id
      }
      subCategory {
        name
        id
      }
      createdAt
    }
  }
`;

export const GET_ITEM_CATEGORY_WISE = gql`
  query GET_ITEM_CATEGORY_WISE($categoryId: String!, $subCategoryId: String!) {
    getSubItems(categoryId: $categoryId, subCategoryId: $subCategoryId) {
      name
      id
      description
      price
      picture
      category {
        name
        id
      }
      subCategory {
        name
        id
      }
      createdAt
    }
  }
`;

export const GET_CATEGORIES = gql`
  query GET_CATEGORIES {
    getCategories {
      name
      id
      subCategories {
        name
        id
      }
    }
  }
`;

export const GET_REVIEWS = gql`
  query GET_REVIEWS($id: String!) {
    getReviews(productId: $id) {
      id
      rating
      comment
      user {
        name
        profilePicture
      }
    }
  }
`;

export const ADD_REVIEW = gql`
  mutation ADD_REVIEW($rating: Rating!, $comment: String!, $id: String!) {
    addReview(rating: $rating, comment: $comment, productId: $id)
  }
`;

export const GET_ORDERS = gql`
  query GET_ORDERS {
    getOrders {
      id
      totalPrice
      status
      items {
        quantity
        id
        price
        furnitureItem {
          name
          id
          description
          price
          picture
          category {
            name
            id
          }
          subCategory {
            name
            id
          }
        }
      }
    }
  }
`;

import AsyncStorage from '@react-native-async-storage/async-storage';
import {jwtDecode} from 'jwt-decode';

export const refreshTokenAction = async (refreshToken: string) => {
  try {
    const response = await fetch('https://home-decor-production.up.railway.app/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
                  mutation RefreshToken {
                      refreshToken(refreshToken: "${refreshToken}"){
                      accessToken
                      refreshToken
                      }
                  }
                  `,
      }),
    });

    const data = await response.json();

    if (response.ok && data?.data?.refreshToken) {
      const tokens = data.data.refreshToken;
      await AsyncStorage.setItem('authToken', tokens.accessToken);
      await AsyncStorage.setItem('refreshToken', tokens.refreshToken);
      return {
        accessToken: tokens.accessToken,
        refreshToken: tokens.refreshToken,
      };
    } else {
      throw new Error('Failed to refresh token');
    }
  } catch (error) {
    console.error('Refresh token error:', error);
    return null;
  }
};

export const isAccessTokenExpired = (accessToken: string) => {
  try {
    const {exp} = jwtDecode(accessToken);
    if (exp) {
      const currentTime = Date.now() / 1000;
      return exp < currentTime;
    }
  } catch (error) {
    console.error('Error decoding token:', error);
    return true;
  }
};

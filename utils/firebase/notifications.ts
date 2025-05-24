

import messaging from '@react-native-firebase/messaging';
import { Alert } from 'react-native';

export const setupFCM = async (): Promise<string | null> => {
  try {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (!enabled) return null;

    const token = await messaging().getToken();

    messaging().onMessage(async remoteMessage => {
      Alert.alert(
        remoteMessage.notification?.title ?? 'Notification',
        remoteMessage.notification?.body ?? 'You received a message'
      );
    });

    return token;
  } catch (error) {
    console.error('FCM setup error:', error);
    return null;
  }
};

# Expo FCM Notification App

This is the frontend mobile app built using Expo and React Native. It registers the device with Firebase Cloud Messaging (FCM) and handles push notifications.

## Prerequisites

- Node.js (LTS)
- Expo CLI (`npm install -g expo-cli`)
- Android device/emulator
- Firebase project with FCM enabled

## Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone https://github.com/sulthan1866/google-signin-expo.git
   cd expo-fcm-app
  

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server and launch the app on Android:**

   ```bash
   npx expo start --android
   ```

   > Make sure your Android emulator is running or your physical Android device is connected with USB debugging enabled.

4. **Firebase Configuration:**

   * Place your `google-services.json` file in the appropriate location.
   * Ensure Firebase and `@react-native-firebase/messaging` are properly configured for your Expo project (EAS Build may be required for production).

## Features

* Requests FCM permissions
* Retrieves and logs the device token
* Sends the token to the backend server
* Displays incoming foreground notifications using React Native alerts

## Notes

* This app is meant to be used alongside a Next.js backend which handles saving tokens and sending notifications.

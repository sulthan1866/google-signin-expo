import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { setupFCM } from '../../utils/firebase/notifications';
import { useEffect } from 'react';

export default function HomeScreen() {
  useEffect(() => {
    const initFCM = async () => {
      const token = await setupFCM();
      if (token) {
        await fetch('https://your-next-app.vercel.app/api/utils/save-token',{
        
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ token }),
        });
      }
    };

    initFCM();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        source={{ uri: 'https://google-signin-app-f72o.vercel.app/' }} 
        style={{ flex: 1 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { 
  FontAwesome, 
  SimpleLineIcons, 
  Ionicons, 
  MaterialIcons, 
  MaterialCommunityIcons, 
  AntDesign, 
  Feather,
  Entypo 
} from '@expo/vector-icons';
import { store } from './app/store/store';
import Main from './Index';

export default function App() { 
  const [fontsLoaded, fontError] = useFonts({
    'Montserrat': require('./assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-SemiBold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
    'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
    'FontAwesome': require('./assets/fonts/FontAwesome.ttf'),
    'simple-line-icons': require('./assets/fonts/SimpleLineIcons.ttf'),
    'Ionicons': require('./assets/fonts/Ionicons.ttf'),
    'Material Icons': require('./assets/fonts/MaterialIcons.ttf'),
    'Material Design Icons': require('./assets/fonts/MaterialCommunityIcons.ttf'),
    'AntDesign': require('./assets/fonts/AntDesign.ttf'),
    'Feather': require('./assets/fonts/Feather.ttf'),
    'Entypo': require('./assets/fonts/Entypo.ttf'),
    'Octicons': require('./assets/fonts/Octicons.ttf'),
  });

  useEffect(() => {
    if (fontError) {
      console.warn('Aviso: falha ao carregar fontes customizadas:', fontError);
    }
  }, [fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaProvider>
        <Provider store={store}>
          <Main />
        </Provider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src/Navigations';
import {store,persistor} from './src/Store/Index';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
          <Navigation/> 
      </PersistGate>         
    </Provider> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});

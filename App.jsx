import { ActivityIndicator, StatusBar, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import store, { persistor } from './src/redux/store/store';

import Nav from './src/navigation';
import { PersistGate } from 'redux-persist/integration/react';
function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
      <Provider store={store}>
        <PersistGate
          loading={
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <ActivityIndicator size="large" color="#00C6FB" />
            </View>
          }
          persistor={persistor}
        >
          <Nav />
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;

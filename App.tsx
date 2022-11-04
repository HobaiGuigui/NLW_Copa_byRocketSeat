import { View } from 'react-native';
import { NativeBaseProvider, StatusBar } from "native-base";
import { useFonts, Roboto_400Regular, Roboto_700Bold, Roboto_500Medium} from '@expo-google-fonts/roboto'

import { Signin } from './src/screens/Signin';
import { Loading } from './src/assets/components/Loading';

import { THEME } from './src/assets/styles/theme';

export default function App() {
  const [fontsLoaded] = useFonts ({ Roboto_400Regular, Roboto_700Bold, Roboto_500Medium });
    

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Signin /> : <Loading />}
      </NativeBaseProvider>
  );
}


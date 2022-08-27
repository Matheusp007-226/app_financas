import Home from './src/pages/Home'
import Detalhe from './src/pages/Detalhe'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
   <NavigationContainer>
    <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detalhe" component={Detalhe} />
    </Stack.Navigator>
   </NavigationContainer>
  );
}


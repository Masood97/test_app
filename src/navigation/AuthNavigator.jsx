import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {LoginScreen} from '../screens/Auth'


const Stack = createNativeStackNavigator();
const AuthNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{ headerShown: false }}
                name="Login Screen"
                component={LoginScreen}
            />
        </Stack.Navigator>
    );
};

export default AuthNavigator;
import {
    NavigationContainer,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";;
import { useSelector } from "react-redux";
import { authenticated } from "../redux/slices/authSlice";
import AuthStackNavigator from "./AuthNavigator";
import HomeStackNavigator from "./AppNavigator";

const Stack = createNativeStackNavigator();

const Navigation = () => {

    const isAuthenticated = useSelector(authenticated)
    return (
        <NavigationContainer independent>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {
                    isAuthenticated ?
                        <Stack.Screen name="HomeStack" component={HomeStackNavigator} />
                        :
                        <Stack.Screen name="AuthStack" component={AuthStackNavigator} />
                }
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DetailScreen, HomeScreen } from '../screens/Main';


const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{
                    title: "Home",
                    headerStyle: { backgroundColor: "#181928" },
                    headerTintColor: "#fff",
                }}
                name="Home"
                component={HomeScreen}
            />
            <Stack.Screen
                options={{
                    title: "User Details",
                    headerStyle: { backgroundColor: "#181928" },
                    headerTintColor: "#fff",
                }}
                name="DetailScreen"
                component={DetailScreen}
            />

        </Stack.Navigator>
    );
};

export default HomeStackNavigator;
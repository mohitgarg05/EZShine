import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GetStartedScreen } from "../screens";

const Stack = createNativeStackNavigator();

const LaunchNav = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="GetStartedScreen" component={GetStartedScreen} />
    </Stack.Navigator>
  );
};

export default LaunchNav;

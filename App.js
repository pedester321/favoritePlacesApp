import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import AllPlaces from "./screens/AllPlaces";
import AddPlace from "./screens/AddPlace";
import IconButton from "./components/IconButton";
import { Colors } from "./constants/colors";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: Colors.primary500,
          },
          headerTintColor: Colors.gray700,
          headerTitleStyle: {
            fontWeight: "bold",
          },
          contentStyle: {backgroundColor: Colors.gray700},
        }}>
          <Stack.Screen
            name="AllPlacesScreen"
            component={AllPlaces}
            options={({ navigation }) => ({
              title: "Your Favorite Places",
              headerRight: ({ tintColor }) => (
                <IconButton
                  icon="add"
                  size={24}
                  color={tintColor}
                  onPress={() => navigation.navigate("AddPlaceScreen")}
                />
              ),
            })}
          />
          <Stack.Screen name="AddPlaceScreen" component={AddPlace} options={{
            title: "Add New Place",
          }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

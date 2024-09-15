import React from "react";
import { Linking } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Contacts from "../screens/Contacts";
import Profile from "../screens/Profile";
import Favorites from "../screens/Favorites";
import User from "../screens/User";
import Options from "../screens/Options";
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../utils/colors";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

// Function to get the tab bar icon
const getTabBarIcon = (icon) => ({ color, focused }) => (
  <MaterialIcons
    name={icon}
    size={focused ? 30 : 26} // Larger size when focused
    color={focused ? colors.white : color} // Change color when focused
  />
);

const Stack = createNativeStackNavigator();

const ContactsScreens = () => {
  return (
    <Stack.Navigator
      initialRouteName="Contacts"
      screenOptions={{
        headerShown: false, // Hide header
      }}
    >
      <Stack.Screen name="Contacts" component={Contacts} />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={({ route }) => {
          const { contact } = route.params;
          const { name } = contact;
          return {
            title: name.split(" ")[0],
            headerTintColor: "white",
            headerStyle: { backgroundColor: colors.blue },
          };
        }}
      />
    </Stack.Navigator>
  );
};

const FavoritesScreens = () => {
  return (
    <Stack.Navigator
      initialRouteName="Favorites"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Favorites" component={Favorites} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

const UserScreens = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="User">
      <Stack.Screen
        name="User"
        component={User}
        options={{
          headerTitle: "Me",
          headerTintColor: "white",
          headerStyle: { backgroundColor: colors.blue },
          headerRight: () => (
            <MaterialIcons
              name="settings"
              size={24}
              style={{ color: "white", marginRight: 10 }}
              onPress={() => navigation.navigate("Options")}
            />
          ),
        }}
      />
      <Stack.Screen name="Options" component={Options} />
    </Stack.Navigator>
  );
};

const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="ContactsScreens"
        barStyle={{
          backgroundColor: colors.blue,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 5 },
          shadowOpacity: 0.3,
          shadowRadius: 4,
          elevation: 10, 
        }}
        labeled={false}
        activeTintColor={colors.greyLight}
        inactiveTintColor={colors.greyDark}
        shifting={true} 
      >
        <Tab.Screen
          name="ContactsScreens"
          component={ContactsScreens}
          options={{
            tabBarIcon: getTabBarIcon("list"),
          }}
        />
        <Tab.Screen
          name="FavoritesScreens"
          component={FavoritesScreens}
          options={{
            tabBarLabel: "Favorites", 
            tabBarIcon: getTabBarIcon("star"),
          }}
        />
        <Tab.Screen
          name="UserScreens"
          component={UserScreens}
          options={{
            tabBarIcon: getTabBarIcon("person"),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;

const CallScreens = () => {
  Linking.openURL(`tel:*101\#`);
};

import React from "react";
import { StyleSheet, View, Text } from "react-native";
import ContactThumbnail from "../components/ContactThumbnail";
import DetailListItem from "../components/DetailListItem";
import { fetchRandomContact } from "../utils/api";
import colors from "../utils/colors";
import { Call, Email } from "./Call";

const Profile = ({ route }) => {
  const { contact } = route.params;
  const { avatar, name, email, phone, cell } = contact;

  return (
    <View style={styles.container}>
      <View style={styles.avatarSection}>
        <ContactThumbnail avatar={avatar} name={name} phone={phone} />
        <Text style={styles.nameText}>{name}</Text>
      </View>
      <View style={styles.detailsSection}>
        <DetailListItem 
          icon="mail" 
          title="Email" 
          subtitle={email} 
          onPress={() => Email(email)} 
          style={styles.detailItem} 
        />
        <DetailListItem 
          icon="phone" 
          title="Work" 
          subtitle={phone} 
          onPress={() => Call(phone)} 
          style={styles.detailItem} 
        />
        <DetailListItem 
          icon="smartphone" 
          title="Personal" 
          subtitle={cell} 
          onPress={() => Call(phone)} 
          style={styles.detailItem} 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGrey, // Light background color for contrast
  },
  avatarSection: {
    flex: 1.5, // Larger space for avatar section
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.blue,
    padding: 20, // Add some padding for spacing
    borderBottomLeftRadius: 40, // Rounded corners
    borderBottomRightRadius: 40,
  },
  nameText: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: "bold",
    color: colors.white, // Stand out on blue background
  },
  detailsSection: {
    flex: 1,
    backgroundColor: colors.white,
    paddingVertical: 20, // Add vertical padding
    paddingHorizontal: 15,
  },
  detailItem: {
    marginVertical: 10, // Space between list items
    borderRadius: 10, // Rounded corners for list items
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5, // Light shadow for depth
    elevation: 5, // Android shadow effect
  },
});

export default Profile;

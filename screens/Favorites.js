import React, { useState, useEffect } from "react";
import {
  StyleSheet, Text, View, FlatList, ActivityIndicator,
} from "react-native";
import { fetchContacts } from "../utils/api";
import ContactThumbnail from "../components/ContactThumbnail";
import { useDispatch, useSelector } from 'react-redux';
import Call from "./Call";

const keyExtractor = ({ phone }) => phone;

const Favorites = ({ navigation }) => {
  const { contacts = [], loading, error } = useSelector((state) => state.contacts);

  useEffect(() => {
    fetchContacts()
      .then((contacts) => {
        // Code for loading contacts
      })
      .catch((e) => {
        // Error handling
      });
  });

  const renderFavoriteThumbnail = ({ item }) => {
    const { avatar, name, phone } = item;
    return (
      <View style={styles.thumbnailContainer}>
        <ContactThumbnail
          avatar={avatar}
          onPress={() => navigation.navigate("Profile", { contact: item })}
          onLongPress={() => Call(phone)}
        />
        <Text style={styles.nameText}>{name}</Text>
      </View>
    );
  };

  const favorites = contacts.filter((contact) => contact.favorite);

  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      {error && <Text style={styles.errorText}>Error...</Text>}
      {!loading && !error && (
        <FlatList
          data={favorites}
          keyExtractor={keyExtractor}
          numColumns={3}
          contentContainerStyle={styles.list}
          renderItem={renderFavoriteThumbnail}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0", // Light grey background color
    paddingHorizontal: 10,
  },
  list: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  thumbnailContainer: {
    marginVertical: 15,
    alignItems: 'center',
    width: 100,
    borderRadius: 15,
    backgroundColor: "#ffffff", // White background for the thumbnail
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5, // Shadow for Android
    padding: 10,
  },
  nameText: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: "600",
    color: "#333333", // Dark grey for text
    textAlign: "center",
  },
  errorText: {
    color: "red",
    fontSize: 18,
    textAlign: "center",
    marginTop: 20,
  },
});

export default Favorites;

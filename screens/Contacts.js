import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { fetchContacts } from "../utils/api";
import ContactListItem from "../components/ContactListItem";
import {
  fetchContactsLoading,
  fetchContactsSuccess,
  fetchContactsError,
} from "../components/store"; // Redux action creators

import { useDispatch, useSelector } from "react-redux";
import Call from "./Call";

const keyExtractor = ({ phone }) => phone;

const Contacts = ({ navigation }) => {
  const dispatch = useDispatch();
  
  const { contacts = [], loading, error } = useSelector((state) => state.contacts);

  useEffect(() => {
    const loadContacts = async () => {
      dispatch(fetchContactsLoading());
      try {
        const contacts = await fetchContacts();
        dispatch(fetchContactsSuccess(contacts));
      } catch (e) {
        dispatch(fetchContactsError());
      }
    };
  
    loadContacts();
  }, [dispatch]);

  const contactsSorted = contacts;

  const renderContact = ({ item }) => {
    const { name, avatar, phone } = item;
    return (
      <ContactListItem
        name={name}
        avatar={avatar}
        phone={phone}
        onPress={() => navigation.navigate("Profile", { contact: item })}
        onLongPress={() => Call(phone)}
      />
    );
  };

  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator color="#007AFF" size="large" style={styles.loader} />}
      {error && <Text style={styles.errorText}>Error loading contacts...</Text>}
      {!loading && !error && (
        <FlatList
          data={contactsSorted}
          keyExtractor={keyExtractor}
          renderItem={renderContact}
          contentContainerStyle={styles.list}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F0F4F7",  // Nền màu sáng nhẹ
    flex: 1,
    paddingHorizontal: 10,  // Căn lề hai bên
    paddingTop: 20,  // Khoảng cách trên cùng
  },
  loader: {
    alignSelf: "center",
  },
  errorText: {
    color: "red",
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
  },
  list: {
    paddingBottom: 20,  // Thêm khoảng cách dưới cùng
  },
});

export default Contacts;

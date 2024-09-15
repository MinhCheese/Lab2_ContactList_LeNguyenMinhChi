import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import PropTypes from "prop-types";

const DetailListItem = ({ icon, title, subtitle, onPress }) => {
  return (
    <TouchableOpacity style={styles.wrapper} onPress={onPress}>
      <View style={styles.container}>
        {icon && (
          <Icon
            name={icon}
            size={28}  // Tăng kích thước icon để nổi bật hơn
            style={styles.icon}
          />
        )}
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{title}</Text>
          {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        </View>
      </View>
    </TouchableOpacity>
  );
};

DetailListItem.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  onPress: PropTypes.func,
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderBottomColor: "#E0E0E0", // Màu xám nhạt cho đường viền
    borderBottomWidth: 1,
    backgroundColor: "#FFFFFF", // Màu nền trắng
    elevation: 2, // Bóng cho Android
    shadowColor: "#000", // Bóng cho iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    borderRadius: 10, // Bo góc các mục
    marginVertical: 8,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    color: "#333333", // Màu icon đậm hơn
    marginRight: 16,
  },
  contentContainer: {
    justifyContent: "center",
    flex: 1,
  },
  title: {
    color: "#333333", // Màu chữ đậm hơn
    fontWeight: "bold",
    fontSize: 16,
  },
  subtitle: {
    color: "#1E88E5", // Màu xanh sáng hơn cho phụ đề
    fontSize: 14,
    marginTop: 4,
  },
});

export default DetailListItem;

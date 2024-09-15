import React from 'react';
import { StyleSheet, View, TouchableHighlight, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

const ContactListItem = ({
  name,
  avatar,
  phone,
  onPress,
  onLongPress,
}) => {
  return (
    <TouchableHighlight
      underlayColor="#E0E0E0"  // Màu nhấn nhá sáng khi nhấn vào
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <View style={styles.contactInfo}>
        <Image
          style={styles.avatar}
          source={{ uri: avatar }}
        />
        <View style={styles.details}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>{phone}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  phone: PropTypes.string,
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',  // Màu nền trắng cho danh sách liên hệ
    borderRadius: 10,  // Bo góc cho container
    marginVertical: 8,  // Khoảng cách giữa các mục
    marginHorizontal: 12,  // Căn lề hai bên cho đẹp
    elevation: 2,  // Đổ bóng nhẹ
  },
  contactInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,  // Tăng padding để nội dung không bị chật
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#E0E0E0',
  },
  avatar: {
    borderRadius: 25,  // Avatar hình tròn
    width: 50,  // Kích thước avatar lớn hơn
    height: 50,
    marginRight: 15,  // Tạo khoảng cách giữa avatar và chi tiết
  },
  details: {
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    color: '#212121',  // Màu chữ đen đậm
    fontWeight: '600',  // Font chữ đậm hơn
    fontSize: 18,  // Kích thước chữ lớn hơn
  },
  subtitle: {
    color: '#757575',  // Màu chữ xám nhạt hơn cho số điện thoại
    fontSize: 14,  // Giữ kích thước chữ nhỏ hơn để tạo sự khác biệt
    marginTop: 4,
  },
});

export default ContactListItem;

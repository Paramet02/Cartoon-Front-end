import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { Text, Button, Image, Card, Icon } from "@rneui/themed";

const products = [
  {
    id: 1,
    title: "คุณชายพันธุ์โชะ",
    category: "เล่มเดียวจบ",
    duration: "3 วัน",
    price: "฿ 6",
    status: "มีสินค้า",
    image: require("./assets/book1.jpg"),
  },
  {
    id: 2,
    title: "ซาคาโมโตะเดส์ เล่ม 1",
    category: "เป็นตอน",
    duration: "3 วัน",
    price: "฿ 59",
    status: "ขายแล้ว",
    image: require("./assets/book2.jpg"),
  },
];

const ProductItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.details}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <Text style={styles.title}>{item.title}</Text>
            <Icon name="more-vert" />
        </View>
        <Text>หมวดหมู่: {item.category}</Text>
        <Text>ระยะเวลาตัดรอบสินค้า: {item.duration}</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.price}>{item.price}</Text>
            <Text style={styles.status}>{item.status}</Text>
        </View>
      </View>
    </View>
  );

const MyProductScreen = () => {
  return (
    <View style={styles.container}>
      <Text h4 style={styles.header}>My product</Text>
      <Text style={styles.subHeader}>รายการสินค้าทั้งหมด</Text>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductItem item={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
      <Button title="เพิ่มสินค้า" buttonStyle={styles.addButton} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 15,
      backgroundColor: "#fff",
    },
    header: {
      marginBottom: 5,
    },
    subHeader: {
      fontSize: 16,
      marginBottom: 10,
    },
    itemContainer: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: 10,
      borderBottomWidth: 1, // เพิ่มเส้นคั่นระหว่างรายการ
      borderBottomColor: "#ddd", // กำหนดสีเส้น
    },
    image: {
      width: 80,
      height: 110,
      marginRight: 15, // เพิ่มระยะห่าง
    },
    details: {
      flex: 1,
    },
    title: {
      fontSize: 16,
      fontWeight: "bold",
    },
    price: {
      fontSize: 18,
      fontWeight: "bold",
      color: "black",
    },
    status: {
      fontSize: 14,
      color: "gray",
      paddingLeft: 10,
    },
    addButton: {
      backgroundColor: "#00C853",
      margin: 15,
      borderRadius: 10,
    },
  });

export default MyProductScreen;

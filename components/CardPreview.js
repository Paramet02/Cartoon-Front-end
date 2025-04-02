import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Card } from "@rneui/themed";

const CardPreview = ({ cardNumber, expiryDate }) => {
  return (
    <View style={styles.container}>
      <Card containerStyle={styles.card}>
        <Image source={require("../assets/pic/Visa.png")} style={styles.image} />
        <Text style={styles.cardNumber}>
          {cardNumber ? cardNumber.replace(/(\d{4})/g, "$1 ") : "**** **** **** ****"}
        </Text>
        <Text style={styles.expiry}>{expiryDate || "MM/YY"}</Text>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent : 'center',
    alignItems : 'center'
  },
  card: {
    padding: 20,
    borderRadius: 16,
    backgroundColor: "orange",
    marginBottom: 40,
    width: 300,
    height: 175,
  },
  cardNumber: { fontSize: 18, color: "#fff", marginTop: 30 },
  expiry: { fontSize: 16, color: "#fff", marginTop: 25 },
  image: { width: 49, height: 16 },
});

export default CardPreview;

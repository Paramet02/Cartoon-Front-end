import React, { useState } from "react";
import {
  View,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import CardPreview from "../components/CardPreview";
import CardForm from "../components/CardForm";
import { Header, Icon } from "@rneui/themed";

const AddCardScreen = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.inner}
      >
        <Header
          containerStyle={styles.header}
          leftComponent={
            <View style={styles.headerLeftComponent}>
              <Icon
                raised
                name="left"
                type="antdesign"
                size={18}
                color="#000"
                onPress={() => console.log('Back')}
              />
              <Text style={styles.headerText}>Add Card</Text>
            </View>
          }
        />
        <CardPreview cardNumber={cardNumber} expiryDate={expiryDate} />
        <CardForm
          cardNumber={cardNumber}
          setCardNumber={setCardNumber}
          cardHolder={cardHolder}
          setCardHolder={setCardHolder}
          expiryDate={expiryDate}
          setExpiryDate={setExpiryDate}
          cvv={cvv}
          setCvv={setCvv}
        />
      </KeyboardAvoidingView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>บันทึก</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  inner: {
    flex: 1,
    padding: 20
  },
  footer: {
    padding: 30,
    justifyContent: "flex-end",
  },
  button: {
    backgroundColor: "#2ECC71",
    padding: 15,
    borderRadius: 55,
    alignItems: "center",
    width: "100%",
    height : 50
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  header: {
    backgroundColor: "#fff",
    borderBottomWidth: 0,
  },
  headerLeftComponent: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width : 200
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 20,
    color: "#000",
  },
});

export default AddCardScreen;
import React from "react";
import { View, StyleSheet } from "react-native";
import { Input } from "@rneui/themed";

const CardForm = ({ cardNumber, setCardNumber, cardHolder, setCardHolder, expiryDate, setExpiryDate, cvv, setCvv }) => {
  return (
    <View>
      <Input
        placeholder="เลขบัตร"
        placeholderTextColor="#A0A0A0"
        keyboardType="numeric"
        maxLength={19}
        value={cardNumber}
        onChangeText={(text) =>
          setCardNumber(text.replace(/\s/g, "").replace(/(\d{4})/g, "$1 ").trim())
        }
        containerStyle={styles.inputContainer}
        inputContainerStyle={styles.inputBox}
        inputStyle={styles.inputText}
      />
      <Input
        placeholder="ชื่อ-นามสกุล"
        placeholderTextColor="#A0A0A0"
        value={cardHolder}
        onChangeText={setCardHolder}
        containerStyle={styles.inputContainer}
        inputContainerStyle={styles.inputBox}
        inputStyle={styles.inputText}
      />
      <View style={styles.row}>
        <Input
          placeholder="วันหมดอายุ"
          placeholderTextColor="#A0A0A0"
          maxLength={5}
          keyboardType="numeric"
          value={expiryDate}
          onChangeText={(text) => {
            let formatted = text.replace(/[^0-9]/g, "");
            if (formatted.length > 2) {
              formatted = `${formatted.slice(0, 2)}/${formatted.slice(2, 4)}`;
            }
            setExpiryDate(formatted);
          }}
          containerStyle={[styles.inputContainer, styles.smallInputContainer]}
          inputContainerStyle={styles.inputBox}
          inputStyle={styles.inputText}
        />
        <Input
          placeholder="CVV"
          placeholderTextColor="#A0A0A0"
          maxLength={3}
          keyboardType="numeric"
          value={cvv}
          onChangeText={setCvv}
          containerStyle={[styles.inputContainer, styles.smallInputContainer]}
          inputContainerStyle={styles.inputBox}
          inputStyle={styles.inputText}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    paddingHorizontal: 0, // เอาช่องว่างด้านข้างออก
    marginBottom: -10, // ลดช่องว่างระหว่างฟิลด์
  },
  inputBox: {
    backgroundColor: "#FFFFFF", // สีฟ้าอ่อน
    borderWidth: 1,
    borderColor: "#F1EEF8", // สีเทา
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 50, // กำหนดความสูงให้ดูดี
  },
  inputText: {
    fontSize: 14, // ขนาดตัวอักษรใหญ่ขึ้น
    color: "#000", // สีดำ
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  smallInputContainer: {
    width: "48%",
  },
});

export default CardForm;

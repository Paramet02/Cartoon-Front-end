import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Input, Button, Chip, Text , Icon } from "@rneui/themed";
import { Shadow } from "react-native-shadow-2";
import { Dropdown } from 'react-native-element-dropdown';

const data = [
  { label: 'ตลก', value: '1' },
  { label: 'แอคชั่น', value: '2' },
  { label: 'ศิลปะการต่อสู้', value: '3' },
  { label: 'ดราม่า', value: '4' },
  { label: 'แฟนตาซี', value: '5' },
  { label: 'สยองขวัญ', value: '6' },
  { label: 'สืบสวน', value: '7' },
];

const MangaForm = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [condition, setCondition] = useState("สภาพดี ไม่มีตำหนิ");
  const [selectedValues, setSelectedValues] = useState([]);

  const handleSelect = (item) => {
    setSelectedValues(prev => {
      if (prev.some(selected => selected.value === item.value)) {
        return prev.filter(selected => selected.value !== item.value); // ลบออกถ้ากดซ้ำ
      }
      return [...prev, item]; // เพิ่มเข้าไป
    });
  };

  return (
    <View style={styles.container}>
      <Shadow
        distance={23}
        startColor="rgba(82, 28, 238, 0.02)"
        offset={[0, 4]}
        style={{ width: 300 }}
      >
        <Input
          placeholder="ชื่อมังงะ"
          value={title}
          onChangeText={setTitle}
          leftIcon={{ name: "book", type: "font-awesome", color: "#2ECC71" }}
          containerStyle={[styles.inputContainer, { marginBottom: -30 }]}
          inputContainerStyle={styles.inputBox}
          inputStyle={styles.inputText}
        />
      </Shadow>
      <View style={[styles.Manga]}>
        <Text style={{ textDecorationLine: "underline" }}>รายละเอียดมังงะ</Text>
      </View>
      <Shadow
        distance={23}
        startColor="rgba(82, 28, 238, 0.02)"
        offset={[0, 4]}
        style={{ width: 300 }}
      >
        <Input
          placeholder="ราคา"
          value={price}
          onChangeText={setPrice}
          keyboardType="numeric"
          leftIcon={{ name: "money", type: "font-awesome", color: "#2ECC71" }}
          containerStyle={styles.inputContainer}
          inputContainerStyle={styles.inputBox}
          inputStyle={styles.inputText}
        />
      </Shadow>

      <Shadow
        distance={23}
        startColor="rgba(82, 28, 238, 0.02)"
        offset={[0, 4]}
        style={{ width: 300 }}
      >
        <Input
          placeholder="รายละเอียดมังงะ"
          value={condition}
          onChangeText={setCondition}
          leftIcon={{ name: "box", type: "entypo", color: "#2ECC71" }}
          containerStyle={styles.inputContainer}
          inputContainerStyle={styles.inputBox}
          inputStyle={styles.inputText}
        />
      </Shadow>

      <Shadow distance={10} startColor="rgba(82, 28, 238, 0.02)" offset={[0, 4]} style={{ width: 300 }}>
        <Dropdown
          data={data}
          labelField="label"
          valueField="value"
          value={selectedValues.map(item => item.value)} // เก็บค่าที่เลือก
          placeholder="เลือกประเภท"
          placeholderStyle={{ fontSize: 14  }}
          maxHeight={200}
          onChange={handleSelect}
          renderItem={(item) => (
            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
              <Text style={{ flex: 1 }}>{item.label}</Text>
              {selectedValues.some(selected => selected.value === item.value) && (
                <Icon name="check" type="feather" color="#2ECC71" size={20} />
              )}
            </View>
          )}
          renderLeftIcon={() => (
            <Icon name="add-circle" type="ionicon" size={20} color="#2ECC71" style={{ marginRight: 10 }} />
          )}
          renderInputSearch={() => (
            <Text style={{ padding: 10 }}>
              {selectedValues.length > 0 ? selectedValues.map(item => item.label).join(' , ') : "เลือกประเภท"}
            </Text>
          )}
          style={{
            backgroundColor: 'white',
            borderRadius: 10,
            height: 50,
            padding: 10,
            width: 330,
            borderWidth: 1,
            borderColor: "#F1EEF8", // สีเทา
          }}
        />
      </Shadow>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  footer: {
    flex: 1,
    padding: 30,
    justifyContent: "flex-end",
    backgroundColor: "red",
  },
  chipContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 15,
  },
  chip: {
    marginRight: 5,
    marginBottom: 5,
  },
  button: {
    backgroundColor: "#2ECC71",
    padding: 15,
    borderRadius: 55,
    alignItems: "center",
    width: "100%",
    height: 50,
  },
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
    width: 330
  },
  inputText: {
    fontSize: 14, // ขนาดตัวอักษรใหญ่ขึ้น
    color: "#000", // สีดำ
  },
  Manga: {
    paddingVertical: 15,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
});

export default MangaForm;

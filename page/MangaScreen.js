import React, { useState } from "react";
import { View, StyleSheet , TouchableOpacity } from "react-native";
import ImagePicker from "../components/ImagePicker";
import MangaForm from "../components/MangaForm";
import { Input, Button, Header , Icon , Text } from "@rneui/themed";

const MangaScreen = () => {
  const [images, setImages] = useState([
    { file : require("../assets/pic/cover_manga.png") },
    { file : require("../assets/pic/manga1.png") },
  ]);

  const handleAddImage = () => {
    console.log("เพิ่มรูปภาพ");
  };

  return (
    <View style={styles.container}>
      <Header
          containerStyle={styles.header}
          leftComponent={
            <View style={styles.headerLeftComponent}>
              {/* ปุ่มย้อนกลับ */}
              <TouchableOpacity
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: "#f5f5f5",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Icon name="left" type='antdesign' size={20} color="#555" />
              </TouchableOpacity>

              {/* ข้อความ Add Product */}
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "#333",
                }}
              >
                Add Card
              </Text>
            </View>
          }
        />
        <ImagePicker images={images} onAddImage={handleAddImage} />
        <MangaForm />
      <View style={styles.footer}>
        {/* ส่วนท้ายที่คุณอาจจะต้องการเพิ่ม */}
        <Button title="บันทึก" onPress={() => console.log("บันทึกข้อมูล")} buttonStyle={styles.button} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  main: {
    flex: 2, // ส่วนกลางจะใช้พื้นที่ 2/3
    alignItems: "center",
  },
  footer: {
    flex: 1, // ส่วนท้ายยังไม่มีเนื้อหาหรือสามารถปรับให้เป็น 0 ได้
    justifyContent: "flex-end",
  },
  button: {
    backgroundColor: "#2ECC71",
    padding: 15,
    borderRadius: 55,
    alignItems: "center",
    width: "100%",
    height: 50,
  },
  header: {
    backgroundColor: "#fff",
    borderBottomWidth: 0,
    height: 60, // กำหนดความสูงที่ต้องการ (ค่าดีฟอลต์คือประมาณ 70)
  },
  headerLeftComponent: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: 100,
  },
});

export default MangaScreen;

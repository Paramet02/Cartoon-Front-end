import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Icon, Text } from "@rneui/themed";

const ImagePicker = ({ images, onAddImage }) => {
  return (
    <View style={styles.container}> 
      <View style={styles.imageRow}>
        {images.map((img, index) => (
          <View key={index} style={styles.imageBox}>
            <Image source={img.file} style={styles.image} />
          </View>
        ))}
        <TouchableOpacity style={styles.addImageBox} onPress={onAddImage}>
          <Icon name="add-a-photo" size={30} />
          <Text style={styles.addImageText}>+ เพิ่มรูป</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    paddingTop : 15
  },
  imageRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  imageBox: {
    width: 80,
    height: 110,
    marginRight: 10,
    backgroundColor: "#eee",
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  addImageBox: {
    width: 80,
    height: 110,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderStyle: "dashed",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
  },
  addImageText: {
    fontSize: 12,
    textAlign: "center",
    marginTop: 5,
  },
});

export default ImagePicker;

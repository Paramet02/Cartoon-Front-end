import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SetNewPasswordScreen = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Ionicons name="chevron-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>Set a new password</Text>
       <Text style={styles.description}>
        Create a new password. Ensure it differs from
        previous ones for security
      </Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="กรอกรหัสผ่านของคุณ"
          secureTextEntry={true}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          placeholder="กรอกรหัสผ่านของคุณอีกครั้ง"
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity style={styles.updateButton} onPress={() => {
        console.log('Update Password button pressed');
      }}>
        <Text style={styles.updateButtonText}>Update Password</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6F9EE', 
    paddingHorizontal: 20,
    paddingTop: 60, 
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 1,
  },
  backButtonText: {
    fontSize: 24,
    color: 'black',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 100,
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    color: '#777',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#333',
  },
  updateButton: {
    backgroundColor: '#2ECC71', 
    borderRadius: 10,
    paddingVertical: 15,
    marginTop: 30,
    alignItems: "center",
    marginLeft:35,
    width:301
  },
  updateButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',

  },
});

export default SetNewPasswordScreen;
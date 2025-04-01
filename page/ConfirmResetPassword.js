import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const PasswordResetScreen = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
      <Ionicons name="chevron-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>Password reset</Text>
      <Text style={styles.description}>
        Your password has been successfully reset.
      </Text>
      <Text style={styles.description}>
        Click confirm to set a new password.
      </Text>
      <TouchableOpacity style={styles.confirmButton} onPress={() => {
      }}>
        <Text style={styles.confirmButtonText}>Confirm</Text>
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
    color: 'black', // You can style this further
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 100,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'left',
    color: '#333',
    marginBottom: 10,
  },
  confirmButton: {
    backgroundColor: '2ECC71', 
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 20,

    
  },
  confirmButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PasswordResetScreen;
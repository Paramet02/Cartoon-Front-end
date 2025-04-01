import React from 'react';
import { StyleSheet, View } from 'react-native';
import PasswordResetScreen from './page/ConfirmResetPassword'; // หรือพาธไปยังไฟล์ของคุณ
import SetNewPasswordScreen from './page/ResetPassword';
const App = () => {
  return (
    <View style={styles.container}>
      <SetNewPasswordScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
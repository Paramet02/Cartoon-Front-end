import React from 'react';
import { StyleSheet, View } from 'react-native';
import PasswordResetScreen from './page/ConfirmResetPassword'; // หรือพาธไปยังไฟล์ของคุณ
import SetNewPasswordScreen from './page/ResetPassword';
import AddCardScreen from './page/AddCardScreen';
import MangaScreen from './page/MangaScreen';

const App = () => {
  return (
    <View style={styles.container}>
      <MangaScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
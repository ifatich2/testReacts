import React, { useEffect } from 'react';
import { Button, SafeAreaView, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Smartlook, { Properties } from 'react-native-smartlook-analytics';

const PageScreen = ({ navigation }) => {
  useEffect(() => {
//     Smartlook.instance.analytics.trackNavigationExit('App');
//     Smartlook.instance.analytics.trackEvent("App");
    Smartlook.instance.analytics.trackNavigationEnter("App");
    Smartlook.instance.analytics.trackNavigationExit("App");
  }, []);

  const handleMagicButtonPress = () => {
    const props = new Properties();
    props.putString('prop1', 'Prop from Magic Button');

    Smartlook.instance.analytics.trackEvent('magic-button-press-event', props);
  };

  const handleCustomEventPress = () => {
    const props = new Properties();
    props.putString('prop1', 'Custom Event 1');

    Smartlook.instance.analytics.trackEvent('custom-event', props);
  };

  const handleBlueButtonPress = () => {
    const props = new Properties();
    props.putString('color', 'blue');

    Smartlook.instance.analytics.trackEvent('color-button-press-event', props);
  };

  const handleRedButtonPress = () => {
    const props = new Properties();
    props.putString('color', 'red');

    Smartlook.instance.analytics.trackEvent('color-button-press-event', props);
  };

  const handleGoToTwoScreen = () => {
    navigation.navigate('twoScreen'); // Pindah ke layar TwoScreen
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.heading}>V - 1.00.024</Text>

        <TouchableOpacity style={styles.button} onPress={handleMagicButtonPress} testID="magic-button">
          <Text style={styles.buttonText}>Magic Buttons</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.blueButton]} onPress={handleBlueButtonPress} testID="blue-button">
          <Text style={styles.buttonText}>Blue Button</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.redButton]} onPress={handleRedButtonPress} testID="red-button">
          <Text style={styles.buttonText}>Red Button</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleGoToTwoScreen} testID="go-to-two-screen-button">
          <Text style={styles.buttonText}>Go to TwoScreen</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#000',
  },
  button: {
    backgroundColor: '#3498db',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  blueButton: {
    backgroundColor: 'blue',
  },
  redButton: {
    backgroundColor: 'red',
  },
});

export default PageScreen;

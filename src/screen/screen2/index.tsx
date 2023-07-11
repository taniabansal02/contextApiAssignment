import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import routes from '../../assets/routes';
import {AppContext} from '../../root';
import {styles} from './style';
import Button from '../../components/button';
import {Strings} from '../../assets/strings';

const Screen2 = () => {
  const navigation = useNavigation();
  const {text, setText} = useContext(AppContext);

  const navigateToScreen1 = () => {
    setText('');
    navigation.navigate(routes.screen1.path);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>
        {Strings.screen2.TEXT_ENTERED_BY_USER} {text}{' '}
      </Text>

      <Button title={Strings.screen2.GO_BACK} fun={() => navigateToScreen1()} />
    </View>
  );
};

export default Screen2;

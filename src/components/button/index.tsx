import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './style';

interface Props {
  title: string;
  fun: () => void;
}

const Button = ({title, fun}: Props) => {
  return (
    <View style={styles.btnView}>
      <TouchableOpacity style={styles.button} onPress={fun}>
        <Text style={styles.txt}>{title} </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

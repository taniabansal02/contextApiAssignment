import {StyleSheet} from 'react-native';
import {colors} from '../../assets/theme/colors';

export const styles = StyleSheet.create({
  btnView: {
    alignItems: 'center',
  },
  button: {
    marginTop: 50,
    alignItems: 'center',
    backgroundColor: colors.btncolor,
    height: 50,
    width: 130,
    justifyContent: 'center',
    borderRadius: 50,
  },
  txt: {
    color: colors.white,
  },
});

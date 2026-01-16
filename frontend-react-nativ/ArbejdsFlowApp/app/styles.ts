import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '@/constants/theme';

export const Styles = (colorScheme: 'light' | 'dark') =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      backgroundColor: Colors[colorScheme].background,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
    },
    logo: {
      width: 120,
      height: 60,
    },
    headingText: {
      fontSize: 18,
      color: Colors[colorScheme].headingText,
      fontFamily: Fonts.sans,
    },
    headingContainer: {
      backgroundColor: 'black',
      width: '100%',
    },
  });

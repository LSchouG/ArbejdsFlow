import { Image, Text } from 'react-native';
import { ScrollView, View } from 'react-native';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Styles } from '@/app/styles';

export default function HomeScreen() {
  const colorScheme = useColorScheme() ?? 'light';
  const styles = Styles(colorScheme);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={[styles.row, styles.headingContainer]}>
        <Image
          source={require('@/assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.headingText}>
          Welcome To Home on web. Logged in!
        </Text>
      </View>
    </ScrollView>
  );
}

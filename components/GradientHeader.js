import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, StyleSheet, View } from 'react-native';

export default function GradientHeader({ title }) {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#4A00E0", "#8E2DE2", "#00D4FF"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradient}
      />
      <SafeAreaView edges={['top']} style={styles.safeArea}>
        <Text style={styles.title}>{title}</Text>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    overflow: 'hidden',
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 12,
  },
  gradient: {
    ...StyleSheet.absoluteFillObject, 
  },
  safeArea: {
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 16,
    backgroundColor: 'transparent',
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
  },
});

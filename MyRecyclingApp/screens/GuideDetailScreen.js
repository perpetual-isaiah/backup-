// screens/GuideDetailScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

// Map guide keys to images for dos and donts tabs
const guideImages = {
  plastic: {
    dos: require('../assets/images/plastic_dos.png'),
    donts: require('../assets/images/plastic_donts.png'),
  },
  glass: {
    dos: require('../assets/images/glass_dos.png'),
    donts: require('../assets/images/glass_donts.png'),
  },
  paper: {
    dos: require('../assets/images/paper_dos.png'),
    donts: require('../assets/images/paper_donts.png'),
  },
  metal: {
    dos: require('../assets/images/metal_dos.png'),
    donts: require('../assets/images/metal_donts.png'),
  },
  carton: {
    dos: require('../assets/images/carton_dos.png'),
    donts: require('../assets/images/carton_donts.png'),
  },
  ewaste: {
    dos: require('../assets/images/ewaste_dos.png'),
    donts: require('../assets/images/ewaste_donts.png'),
  },
  organic: {
    dos: require('../assets/images/organic_dos.png'),
    donts: require('../assets/images/organic_donts.png'),
  },
  batteries: {
    dos: require('../assets/images/batteries_dos.png'),
    donts: require('../assets/images/batteries_donts.png'),
  },
  clothes: {
    dos: require('../assets/images/clothes_dos.png'),
    donts: require('../assets/images/clothes_donts.png'),
  },
  tires: {
    dos: require('../assets/images/tires_dos.png'),
    donts: require('../assets/images/tires_donts.png'),
  },
  construction: {
    dos: require('../assets/images/construction_dos.png'),
    donts: require('../assets/images/construction_donts.png'),
  },
};

export default function GuideDetailScreen({ route, navigation }) {
  const { guide } = route.params;
  const [tab, setTab] = useState('dos'); // 'dos' or 'donts'

  const dos = guide.dos || [];
  const donts = guide.donts || [];

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: tab === 'dos' ? '#A5D6A7' : '#EF9A9A' },
      ]}
    >
      <ScrollView contentContainerStyle={styles.scroll}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
          <AntDesign name="arrowleft" size={24} color="#000" />
        </TouchableOpacity>

        <Image
          source={
            (guideImages[guide.key] && guideImages[guide.key][tab]) ||
            guideImages['glass'][tab] // fallback to glass images
          }
          style={styles.image}
        />

        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[styles.tab, tab === 'dos' && styles.tabActiveGreen]}
            onPress={() => setTab('dos')}
          >
            <Text style={styles.tabText}>Dos</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, tab === 'donts' && styles.tabActiveRed]}
            onPress={() => setTab('donts')}
          >
            <Text style={styles.tabText}>Don'ts</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Text style={styles.title}>{guide.label || 'Glass'}</Text>
          {(tab === 'dos' ? dos : donts).map((item, idx) => (
            <View key={idx} style={styles.listItem}>
              {tab === 'dos' ? (
                <MaterialCommunityIcons name="recycle" size={20} color="#54d65aff" />
              ) : (
                <AntDesign name="closecircle" size={20} color="#E08282" />
              )}
              <Text style={styles.listText}>{item}</Text>
            </View>
          ))}
        </View>

        <TouchableOpacity style={styles.mapButton}>
          <Text style={styles.mapButtonText}>Show point in map</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    paddingBottom: 40,
  },
  back: {
    margin: 16,
  },
  image: {
    alignSelf: 'center',
    width: 220,
    height: 140,
    resizeMode: 'contain',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 12,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 24,
    backgroundColor: '#eee',
    borderRadius: 20,
    marginHorizontal: 5,
  },
  tabActiveGreen: {
    backgroundColor: '#9CD04C',
  },
  tabActiveRed: {
    backgroundColor: '#E57373',
  },
  tabText: {
    color: '#fff',
    fontWeight: '600',
  },
  card: {
    backgroundColor: '#fff',
    margin: 20,
    borderRadius: 16,
    padding: 20,
    elevation: 3,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#000',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  listText: {
    marginLeft: 10,
    fontSize: 15,
    color: '#444',
    flex: 1,
  },
  mapButton: {
    backgroundColor: '#388E3C',
    marginHorizontal: 20,
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginTop: 10,
  },
  mapButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});

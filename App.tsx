import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  FlatList,
  Linking,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

import ButtonText from "./src/components/ButtonText";
import Section from "./src/components/Section";
import ProjectCard from "./src/components/ProjectCard";

import data from "./src/data";

export default function App() {
  const handleSocial = (social: string) => Linking.openURL(social);

  const handleContactMe = () => Linking.openURL(`mailto:${data.email}`);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }} edges={["bottom"]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image
            style={styles.banner}
            source={{
              uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/0.jpeg",
            }}
          />

          <View style={styles.body}>
            <View style={styles.profileContainer}>
              <Image
                style={styles.avatar}
                source={{ uri: "https://i.pravatar.cc/300" }}
              />
              <Text style={styles.name}>{data.name}</Text>
              <Text style={styles.designation}>{data.designation}</Text>
            </View>

            <View style={styles.socialsContainer}>
              <FontAwesome6
                name="github"
                size={24}
                color="black"
                onPress={() => handleSocial(data.social.github)}
              />
              <FontAwesome6
                name="linkedin"
                size={24}
                color="black"
                onPress={() => handleSocial(data.social.linkedin)}
              />
              <FontAwesome6
                name="link"
                size={24}
                color="black"
                onPress={() => handleSocial(data.social.website)}
              />
            </View>

            <Text style={styles.bio}>{data.bio}</Text>

            <ButtonText text="Contact Me" onPress={handleContactMe} />
          </View>

          <Section title="My Projects">
            <FlatList
              contentContainerStyle={styles.projectCardsContainer}
              data={data.projects}
              renderItem={({ item }) => <ProjectCard {...item} />}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </Section>
        </ScrollView>

        <StatusBar style="light" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  banner: {
    width: "100%",
    aspectRatio: 16 / 9,
  },
  body: {
    marginTop: -70,
    marginBottom: 20,
    alignItems: "center",
    gap: 20,
    paddingHorizontal: 12,
  },
  profileContainer: {
    alignItems: "center",
  },
  avatar: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 4,
    borderColor: "white",
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
  },
  designation: {
    color: "grey",
  },
  socialsContainer: {
    flexDirection: "row",
    gap: 24,
  },
  bio: {
    fontSize: 16,
    lineHeight: 20,
    textAlign: "center",
  },
  projectCardsContainer: {
    gap: 12,
    paddingHorizontal: 12,
  },
});

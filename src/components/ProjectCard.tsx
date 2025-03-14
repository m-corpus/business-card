import {
  StyleSheet,
  View,
  Image,
  Text,
  ImageSourcePropType,
} from "react-native";

type ProjectCardProps = {
  name: string;
  thumbnail: ImageSourcePropType;
};

export default function ProjectCard({ name, thumbnail }: ProjectCardProps) {
  return (
    <View style={styles.container}>
      <Image style={styles.thumbnail} source={thumbnail} />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 4,
  },
  thumbnail: {
    height: 140,
    aspectRatio: 16 / 9,
    borderRadius: 8,
  },
  name: {
    color: "grey",
  },
});

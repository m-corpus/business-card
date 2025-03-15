import { StyleSheet, TouchableOpacity, Text } from "react-native";

type ButtonTextProps = {
  text: string;
  onPress: () => void;
};

export default function ButtonText({ text, onPress }: ButtonTextProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "dodgerblue",
    fontSize: 16,
    fontWeight: "500",
  },
});

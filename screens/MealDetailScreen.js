import { View, Text, StyleSheet, Image, Button } from "react-native";
import React, { useLayoutEffect } from "react";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import { ScrollView } from "react-native";
import IconButton from "../components/IconButton";

const MealDetailScreen = ({ route, navigation }) => {
  const id = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === id);

  const headerButtonPressHandler = () => {
    console.log("Button Pressed");
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params.title,
      headerRight: () => (
        <IconButton
          icon="star"
          color="white"
          onPress={headerButtonPressHandler}
        />
      ),
    });
  }, [headerButtonPressHandler, navigation]);

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.text}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailsText}
        style={styles.details}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  container: {
    marginBottom: 32,
  },
  text: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    margin: 8,
    textAlign: "center",
  },
  detailsText: {
    color: "white",
  },
  image: {
    width: "100%",
    height: 350,
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});

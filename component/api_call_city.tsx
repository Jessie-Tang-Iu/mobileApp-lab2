import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ApiCallCity: React.FC<{ city: string }> = ({ city }) => {

    const [imageUrl, setImageUrl] = useState<string>("");
    const [description, setDescription] = useState("");
    const [extract, setExtract] = useState("");
    const baseUrl = "https://en.wikipedia.org/api/rest_v1/page/summary/"

    const cityApiCall = async () => {
        try {
            const response = await fetch(`${baseUrl}${city}`);
            if (!response.ok) throw new Error("Network response was not ok");
            const jsonData = await response.json();
            setImageUrl(jsonData.thumbnail.source);
            setDescription(jsonData.description);
            setExtract(jsonData.extract);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        cityApiCall();
    }, []);

    return (
        <View>
            {imageUrl ? (
                <Image source={{ uri: imageUrl }} style={styles.image} />
            ) : null}
            {/* {description ? (<Text>{description}</Text>) : null} */}
            {extract ? (<Text>{extract}</Text>) : null}

        </View>
    );
};

export default ApiCallCity;

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 200
    }
});
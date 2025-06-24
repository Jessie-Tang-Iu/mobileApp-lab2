import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, ScrollView, TextInput, Pressable, Image } from "react-native";

const ApiCallCity: React.FC<{ city: string }> = ({ city }) => {

    const [imageUrl, setImageUrl] = useState<string>("");
    const [description, setDescription] = useState("");
    const baseUrl = "https://en.wikipedia.org/api/rest_v1/page/summary/"

    const cityApiCall = async () => {
        try {
            const response = await fetch(`${baseUrl}${city}`);
            if (!response.ok) throw new Error("Network response was not ok");
            const jsonData = await response.json();
            console.log(jsonData);
            setImageUrl(jsonData.thumbnail.source);
            setDescription(jsonData.description);
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
                <Image source={{ uri: imageUrl }} style={{ width: 200, height: 200 }} />
            ) : null}
            {description ? (<Text>{description}</Text>) : null}

        </View>
    );
};

export default ApiCallCity;
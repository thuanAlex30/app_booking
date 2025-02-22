import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const hotels = new Array(10).fill(null).map((_, index) => ({
    id: index.toString(),
    name: `Khách sạn mẫu ${index + 1}`,
    location: `Địa điểm ${index + 1}`,
    distance: `${(Math.random() * 5).toFixed(1)}km`,
    rating: (Math.random() * 2 + 7).toFixed(1),
    priceOld: `$${(Math.random() * 50 + 30).toFixed(0)}`,
    priceNew: `$${(Math.random() * 30 + 10).toFixed(0)}`,
    image: "https://via.placeholder.com/80",
}));

const HotelItem = ({ hotel }: { hotel: any }) => (
    <View style={{ flexDirection: "row", padding: 8, borderBottomWidth: 0.5, borderColor: "#ddd", alignItems: "center" }}>
        <Image source={{ uri: hotel.image }} style={{ width: 80, height: 80, borderRadius: 5 }} />
        <View style={{ flex: 1, paddingLeft: 8 }}>
            <Text style={{ fontSize: 14, fontWeight: "600" }}>{hotel.name}</Text>
            <Text style={{ color: "gray", fontSize: 12 }}>{hotel.location} • {hotel.distance}</Text>
            <Text style={{ color: "#007AFF", fontSize: 12 }}>⭐ {hotel.rating} Tốt</Text>
            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 3 }}>
                <Text style={{ textDecorationLine: "line-through", color: "gray", fontSize: 12 }}>{hotel.priceOld}</Text>
                <Text style={{ fontSize: 14, fontWeight: "bold", marginLeft: 5 }}>{hotel.priceNew}</Text>
            </View>
        </View>
    </View>
);

const HotelListScreen = () => {
    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
            <View style={{ flexDirection: "row", padding: 12, backgroundColor: "#003580", alignItems: "center" }}>
                <TouchableOpacity>
                    <FontAwesome name="arrow-left" size={18} color="#fff" />
                </TouchableOpacity>
                <Text style={{ color: "#fff", fontSize: 14, marginLeft: 10, flex: 1 }}>Xung quanh vị trí hiện tại</Text>
            </View>
            <FlatList
                data={hotels}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <HotelItem hotel={item} />}
            />
        </View>
    );
};

export default HotelListScreen;

import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

// Danh sách sản phẩm đã mua (giả lập)
const purchasedProducts = {
    'p123': true,
    'p456': true,
    'p789': false,
};

const ProductReviewScreen = () => {
    const [productId, setProductId] = useState('');
    const [review, setReview] = useState('');
    const [rating, setRating] = useState('');
    const [canReview, setCanReview] = useState(false);

    const handleCheckPurchase = () => {
        if (!productId) {
            Alert.alert('Lỗi', 'Vui lòng nhập ID sản phẩm!');
            return;
        }

        if (purchasedProducts[productId]) {
            setCanReview(true);
        } else {
            Alert.alert('Thông báo', 'Bạn chưa mua sản phẩm này, không thể đánh giá!');
        }
    };

    const handleSubmitReview = () => {
        const numericRating = parseFloat(rating);

        if (review.trim().length === 0) {
            Alert.alert('Lỗi', 'Vui lòng nhập nội dung đánh giá!');
            return;
        }
        if (isNaN(numericRating) || numericRating < 1 || numericRating > 10) {
            Alert.alert('Lỗi', 'Vui lòng nhập thang điểm từ 1.0 đến 10.0!');
            return;
        }

        Alert.alert('Thành công', `Cảm ơn bạn đã đánh giá sản phẩm! Điểm: ${numericRating}/10`);
        setProductId('');
        setReview('');
        setRating('');
        setCanReview(false);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Đánh Giá Phòng Khách Sạn</Text>

            <TextInput
                style={styles.input}
                placeholder="Nhập ID phòng"
                value={productId}
                onChangeText={setProductId}
            />
            <Button title="Kiểm tra" onPress={handleCheckPurchase} />

            {canReview && (
                <>
                    <TextInput
                        style={[styles.input, styles.reviewInput]}
                        placeholder="Nhập đánh giá của bạn..."
                        value={review}
                        onChangeText={setReview}
                        multiline
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Nhập điểm (1.0 - 10.0)"
                        value={rating}
                        onChangeText={setRating}
                        keyboardType="numeric"
                    />
                    <Button title="Gửi đánh giá" onPress={handleSubmitReview} />
                </>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
    },
    reviewInput: {
        height: 100,
        textAlignVertical: 'top',
    },
});

export default ProductReviewScreen;

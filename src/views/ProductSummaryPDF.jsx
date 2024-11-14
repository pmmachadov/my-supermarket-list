import React, { useEffect, useState } from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import { convertImageToBase64 } from '../utils/imageUtils';

const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        padding: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
    },
    product: {
        marginBottom: 10,
        padding: 10,
        border: '1px solid #e0e0e0',
        borderRadius: 5,
    },
    productImage: {
        width: 100,
        height: 100,
        objectFit: 'contain',
        marginBottom: 10,
    },
    productName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    productQuantity: {
        fontSize: 14,
    },
});

const ProductSummaryPDF = ({ products }) => {
    const [base64Images, setBase64Images] = useState({});

    useEffect(() => {
        const loadImages = async () => {
            const images = {};
            for (const product of products) {
                const base64Image = await convertImageToBase64(`/images/${product.image}`);
                images[product.id] = base64Image;
            }
            setBase64Images(images);
        };
        loadImages();
    }, [products]);

    return (
        <Document>
            <Page style={ styles.page }>
                <Text style={ styles.title }>Resumen de Productos</Text>
                { products.map((product) => (
                    <View key={ product.id } style={ styles.product }>
                        { base64Images[product.id] && (
                            <Image style={ styles.productImage } src={ base64Images[product.id] } />
                        ) }
                        <Text style={ styles.productName }>{ product.name }</Text>
                        <Text style={ styles.productQuantity }>
                            Cantidad: { product.quantity } { product.unitType }
                        </Text>
                    </View>
                )) }
            </Page>
        </Document>
    );
};

export default ProductSummaryPDF;
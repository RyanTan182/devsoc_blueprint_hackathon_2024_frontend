import React, { useEffect, useRef, useState } from 'react';
import ProductCard from '../common/ProductCard';
import axios from 'axios';
import useSWR from 'swr';

import { GetProducts } from '../../requests/GetProducts';
import { GET_ALL_PRODUCTS_API } from '../../requests/requestConfig';
import PageSpinner from '../ui/pageSpinner';
import { Box } from '@mui/material';

const dummyProducts = {
    "limit": 10,
    "page": 1,
    "products": [
        {
            "account_id": "45bc8e65-d25c-41d0-82ae-f4a2832c9037",
            "created_time": "Sun, 13 Oct 2024 07:06:58 GMT",
            "description": "description",
            "photo_urls": null,
            "price": 0.0,
            "product_id": "ddd7cad6-2382-464d-83e8-25f416329e7a",
            "product_type": "service",
            "title": "title1",
            "video_urls": [
                "test1",
                "test2"
            ]
        },
        {
            "account_id": "45bc8e65-d25c-41d0-82ae-f4a2832c9037",
            "created_time": "Sun, 13 Oct 2024 07:07:23 GMT",
            "description": "description",
            "photo_urls": null,
            "price": 0.0,
            "product_id": "4514a381-ee9f-4b99-b40d-b86f70220d8b",
            "product_type": "service",
            "title": "title1",
            "video_urls": [
                "test1",
                "test2"
            ]
        },
        {
            "account_id": "45bc8e65-d25c-41d0-82ae-f4a2832c9037",
            "created_time": "Sun, 13 Oct 2024 07:11:31 GMT",
            "description": "description",
            "photo_urls": [
                "test1",
                "test2"
            ],
            "price": 0.0,
            "product_id": "e8151c51-2b67-48ad-aedb-048bb102c449",
            "product_type": "service",
            "title": "title2",
            "video_urls": [
                "test1",
                "test2"
            ]
        }
    ]
}

export default function ProductPage() { 
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPage, setTotalPage] = useState(1);
    const [posts, setPosts] = useState();

    // useEffect(() => {
    //     updatePage(1);
    // }, [props.requestPromise, props.onSelected])

    const fetcher = url => axios.get(url).then(res => res.data);
    const {data: productsRes, error: productError } = useSWR(GET_ALL_PRODUCTS_API, fetcher);

    let products;

    if (productError) {
        return "error";
    }

    if (!productsRes) {
        return <PageSpinner />
    } 
    
    // products = productsRes.products.sort((d1, d2) => d2.created_time - d1.created_time);
    products = dummyProducts.products;


    // let product = [{ 'product_name': 'Piano Lessons at AUD$45/ph', 
    //     'seller_name': 'Megan Fox',
    //     'reviews':'4', 
    //     'description': 'At Megan Fox Piano Academy, we belive that anyone can master the piano with the right guidance and dedication. Whether you are a complete beginnner or looking to refind your skills, our personalised piano lessons are designed to help you achieve your musical goals at any stage of your journey.' }]
    return(
        <Box className = 'min-h-screen bg-gradient-to-r from-violet-950 to-black'>
            {products.map(product => <ProductCard data={product} />)}
        </Box>
    );
}
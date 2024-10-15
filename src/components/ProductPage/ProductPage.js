import React, { useEffect, useRef, useState } from 'react';
import ProductCard from '../common/ProductCard';
import axios from 'axios';
import useSWR from 'swr';

import { GetProducts } from '../../requests/GetProducts';
import { GET_ALL_PRODUCTS_API } from '../../requests/requestConfig';
import PageSpinner from '../ui/pageSpinner';

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
    
    products = productsRes.products.sort((d1, d2) => d2.created_time - d1.created_time);


    // let product = [{ 'product_name': 'Piano Lessons at AUD$45/ph', 'seller_name': 'Megan Fox','reviews':'5', 'description': 'Hi! I can offer Piano lessons! AUD$45/ph' }]
    return(
        <div>
            {products.map(d => <ProductCard data={d} />)}
        </div>
    );
}
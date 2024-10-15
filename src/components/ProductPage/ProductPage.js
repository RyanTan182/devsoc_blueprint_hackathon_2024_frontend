import React, { useEffect, useRef, useState } from 'react';
import ProductCard from '../common/ProductCard';

export default function ProductPage() { 
    let product = [{ 'product_name': 'Piano Lessons at AUD$45/ph', 
        'seller_name': 'Megan Fox',
        'reviews':'4', 
        'description': 'At Megan Fox Piano Academy, we belive that anyone can master the piano with the right guidance and dedication. Whether you are a complete beginnner or looking to refind your skills, our personalised piano lessons are designed to help you achieve your musical goals at any stage of your journey.' }]
    return(
        <div>
            {product.map(d => <ProductCard data={d} />)}
        </div>
    );
}
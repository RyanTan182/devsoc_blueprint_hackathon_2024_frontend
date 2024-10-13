import React, { useEffect, useRef, useState } from 'react';
import ProductCard from '../common/ProductCard';

export default function ProductPage() { 
    let product = [{ 'product_name': 'Piano Lessons at AUD$45/ph', 'seller_name': 'Megan Fox','reviews':'5', 'description': 'Hi! I can offer Piano lessons! AUD$45/ph' }]
    return(
        <div>
            {product.map(d => <ProductCard data={d} />)}
        </div>
    );
}
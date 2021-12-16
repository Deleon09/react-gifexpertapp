import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

/* const categories = ['One punch', 'Samurai X', 'Dragon Ball']; */
const GifExpertApp = () => {

    const [categories, setCategories] = useState(['programming']);

    /* const handleAdd = () => {
        setCategories([...categories, 'HunterXHunter']);
        setCategories( cat => [...cat, 'HunterXHunter']);   
    } */
    
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />

            <ol>
                {
                    categories.map(category => (
                        <GifGrid 
                            key={category} 
                            category={category} 
                        />
                    ))
                }
            </ol>
        </>
    )
}

export default GifExpertApp
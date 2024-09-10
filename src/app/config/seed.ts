import Product from "../modules/product/product.model";

export const seedProducts = async () => {
    const products = [
        {
            "name": "Pine Forest",
            "price": 29.99,
            "description": "",
            "image": "https://i.ibb.co/GFSsyCp/pexels-kpaukshtite-3270223.jpg"
        },
        {
            "name": "Smart Phone",
            "price": 79.99,
            "description": "",
            "image": "https://i.ibb.co/NCFpb9X/pexels-fotios-photos-1092644.jpg"
        },
        {
            "name": "Apple Product Package",
            "price": 49.99,
            "description": "",
            "image": "https://i.ibb.co/nsCw3fn/pexels-gabriel-freytez-110599-341523.jpg"
        },
        {
            "name": "winter coat",
            "price": 39.99,
            "description": "",
            "image": "https://i.ibb.co/f97ZYNj/pexels-kiara-coll-1519602-2928381.jpg"
        },
        {
            "name": "Smart Phone",
            "price": 99.99,
            "description": "",
            "image": "https://i.ibb.co/Np1M1bQ/pexels-lastly-699122.jpg"
        },
        {
            "name": "Camera",
            "price": 199.99,
            "description": "",
            "image": "https://i.ibb.co/TBngDBz/pexels-madebymath-90946.jpg"
        }
    ];
    try {
        const operations = products.map(product => ({
            updateOne: {
                filter: { name: product.name }, // Use a unique field to identify duplicates (e.g., name)
                update: { $set: product },
                upsert: true // Insert the product if it doesn't exist
            }
        }));

        const result = await Product.bulkWrite(operations);
        console.log('Products seeded successfully!!', result);
    } catch (error) {
        console.error('Error seeding products:', error);
    }
};
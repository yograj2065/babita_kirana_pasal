
// Import images
import waiWaiImg from '../assets/products/wai-wai.jpg';
import masoorDalImg from '../assets/products/masoor-dal.jpg';
import cocaColaImg from '../assets/products/coca-cola.jpg';
import sunflowerOilImg from '../assets/products/sunflower-oil.jpg';
import muraiImg from '../assets/products/murai.jpg';

export const products = [
    {
        id: 1,
        name: "Wai Wai Noodles",
        category: "Snacks & Noodles",
        price: "NPR 25/pack",
        image: waiWaiImg,
        description: "The most popular ready-to-eat instant noodles."
    },
    {
        id: 2,
        name: "Masoor Dal (Red Lentils)",
        category: "Daily Essentials",
        price: "NPR 180/kg",
        image: masoorDalImg,
        description: "Premium quality split red lentils for daily cooking."
    },
    {
        id: 3,
        name: "Coca Cola",
        category: "Beverages",
        price: "NPR 270",
        image: cocaColaImg,
        description: "Original taste large bottle for refreshment."
    },
    {
        id: 4,
        name: "Sunflower Oil",
        category: "Household & Cleaning",
        price: "NPR 280/liter",
        image: sunflowerOilImg,
        description: "Healthy and refined sunflower oil."
    },
    {
        id: 5,
        name: "Puffed Rice (Murai)",
        category: "Snacks & Noodles",
        price: "NPR 60/pack",
        image: muraiImg,
        description: "Fresh, crispy puffed rice for snacking."
    }
];

export const categories = [
    "Daily Essentials",
    "Snacks & Noodles",
    "Beverages",
    "Household & Cleaning"
];

export const offers = []; // Keeping empty as offers section is removed

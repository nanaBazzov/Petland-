import productImg1 from '../images/dog food adult.jpeg';
import productImg2 from '../images/dog food -  junior.jpeg';
import productImg3 from '../images/Advanded cat food adult.jpeg';
import productImg4 from '../images/Advanded cat foods.jpeg';
import productImg5 from '../images/Advanded dog foods.jpeg';
import productImg6 from '../images/Advanded puppy food.jpeg';
import productImg7 from '../images/cat litter - crystals.jpeg';
import productImg8 from '../images/cat toy.jpeg';
import productImg9 from '../images/Delectables treats cat.jpeg';
import  productImg10 from '../images/Delectables treats cat2.webp';
import productImg11 from '../images/Delectables treats dog.webp';
import productImg12 from '../images/dog toys.jpeg';
import productImg13 from '../images/HILIS - cat food kidney care.jpeg';
import productImg14 from '../images/HILIS - salmon cat treat.jpeg';
import productImg15 from '../images/HILIS- adult dog food.webp';
import productImg16 from '../images/HILIS- dog food kindny care.jpeg';
import productImg17 from '../images/pure cat - litter .png';
import productImg18 from '../images/Purina - cats food.jpeg';
import productImg19 from '../images/Purina - dog food.jpeg';




const products = [
    {
        id: "1",
        productName: "Royal Canin Maxi Adult",
        imgUrl: productImg1,
        category: "Dog",
        price: 50,
        shortDesc:
        "All large Dogs from 26 to 44KG",
        description:
        "Helps promote optimal digestibility thanks to an exclusive formula including very high quality proteins and a balanced supply of dietary fibre.",
        reviews : [{
            rating: 4.3,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        ],
        avgRating: 4.5,
},

    {
        id: "2",
        productName: "Royal Canin Junior Dog Food",
        imgUrl: productImg2,
        category: "Dog",
        price: 30,
        shortDesc:
            "Complete nutrition for small breed dogs adult weight up to 10 kg up to 10 months",
        description:
           "Digestive health for Junior breed dogs",
        reviews : [{
            rating: 4.1,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        ],
        avgRating: 4.2,
    },

    {
        id: "3",
        productName: "Advance Adult Cat Dry Food",
        imgUrl: productImg3,
        category: "Cat",
        price: 36,
        shortDesc:
            "Days Feeding –Based on 4kg adult cat inactive feeding guide.",
        description:
            "Includes the natural active ingredient Beet Pulp. This fibre source has been shown to effectively reduce the frequency of hairballs.",
        reviews : [{
            rating: 4.7,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        ],
        avgRating: 4.6,
    },

    {
        id: "4",
        productName: "Advance Adult Cat Dry Food - Salmon",
        imgUrl: productImg4,
        category: "Cat",
        price: 40,
        shortDesc:
            "A complete, healthy and balanced product specially developed for adult cats with dietary sensitivity to chicken and beef.",
        description:
            "Cats are prone to food sensitivities. Food sensitivities may manifest through digestive problems and sometimes through skin symptoms. To avoid this problem, your cat's diet should be rich in high-quality, easy-to-digest protein - salmon.",
        reviews : [{
            rating: 4.9,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        ],
        avgRating: 4.8,
    },


    {
        id: "5",
        productName: "DOG MOTHER DOG & INITIAL",
        imgUrl: productImg5,
        category: "Dog",
        price: 100,
        shortDesc:
            "Helps with BONE DEVELOPMENT",
        description:
            "Advance Mother Dog & Initial is a top-end product specifically formulated to meet the needs of pregnant and nursing mothers, as well as those of puppies during the first weeks of life.",
        reviews : [{
            rating: 4.3,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",

        },
        ],
        avgRating: 4.3,
    },

    {
        id: "6",
        productName: "Dog Maxi Puppy ",
        imgUrl: productImg6,
        category: "Dog",
        price: 175,
        shortDesc:
            "Helps with - IMMUNE SYSTEM SUPPORT ",
        description:
            "Advance Maxi Puppy is a top-end product formulated to meet your Maxi puppy’s specific nutritional needs, by promoting the development of its digestive and immune systems.",
        reviews : [{
            rating: 4.9,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        ],
        avgRating: 4.9,
    },

    {
        id: "7",
        productName: "Cat Litter",
        imgUrl: productImg7,
        category: "Cat",
        price: 15,
        shortDesc:
            "Cat litter Crystals",
        description:
            "Crystal Litter for Cats: Easier litter box maintenance with odor-locking crystal sand that absorbs moisture",
        reviews : [{
            rating: 4.9,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        ],
        avgRating: 4.8,
    },

    {
        id: "8",
        productName: "Cat Toy",
        imgUrl: productImg8,
        category: "Cat",
        price: 2,
        shortDesc:
            "Cat Toy ",
        description:
            "Cat Toy - Brown and White Mouse",
        reviews : [{
            rating: 4.9,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        ],
        avgRating: 4.8,
    },

    {
        id: "9",
        productName: "Delectables Cat Treat",
        imgUrl: productImg9,
        category: "Cat",
        price: 3,
        shortDesc:
            "Delectables™ Chicken Squeeze Up™ Cat Treat ",
        description:
            "artz Delectables Squeeze Up with Chicken is a rich, thick puree in a lickable tube that you can hand feed for a fun and delicious treat.",
        reviews : [{
            rating: 4.0,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        ],
        avgRating: 4.0,
    },

    {
        id: "10",
        productName: "Delectables Cat Treat 4-tubes",
        imgUrl: productImg10,
        category: "Cat",
        price: 10,
        shortDesc:
           "Includes 4,.5 ounce tubes",
        description:
            "Rich and thick chicken flavor puree comes in a lickable tube that pet parents can hand feed to their cats.",
        reviews : [{
            rating: 4.9,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        ],
        avgRating: 4.8,
    },

    {
        id: "11",
        productName: "Delectables Stew Dog Treat",
        imgUrl: productImg11,
        category: "Dog",
        price: 7,
        shortDesc:
            "Lickable Treat",
        description:
            "Chicken with Beef, Tender Chicken and beef in a Rich Stew Sauce",
        reviews : [{
            rating: 4.4,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        ],
        avgRating: 4.4,
    },

    {
        id: "12",
        productName: "Dog Toy",
        imgUrl: productImg12,
        category: "Dog",
        price: 8,
        shortDesc:
            "Dog Toy ",
        description:
            "3 Toy set for Your Dog",
        reviews : [{
            rating: 4.9,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        ],
        avgRating: 4.8,
    },

    {
        id: "13",
        productName: "Hills kd kidney care for cats",
        imgUrl: productImg13,
        category: "Cat",
        price: 45,
        shortDesc:
            " Hills kd kidney cold for a cat with kidney problems.",
        description:
            "Hill's nutritionists and veterinarians have developed clinical nutrition to support your cat's kidney function and help preserve muscle mass.\n" +
            "In fact, the kd diet is a diet that has been clinically tested to improve and extend the quality of life.",
        reviews : [{
            rating: 4.9,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        ],
        avgRating: 4.8,
    },

    {
        id: "14",
        productName: "Hill's Science Diet Adult Wet Cat Food",
        imgUrl: productImg14,
        category: "Cat",
        price: 3,
        shortDesc:
            "5.5 oz Wet Cat Food",
        description:
            "Made with purposeful ingredients for a flavorful, nutritious meal, Science Diet Adult Savory Salmon Entree wet cat food tempts your cat with savory real salmon ",
        reviews : [{
            rating: 4.7,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        ],
        avgRating: 4.7,
    },

    {
        id: "15",
        productName: "Adult Chicken & Barley Recipe Dog Food",
        imgUrl: productImg15,
        category: "Dog",
        price: 45,
        shortDesc:
            "has Omega-6s & Vitamin E for beautiful skin & coat",
        description:
            "Hill's Science Diet Adult dry dog food is specially formulated to fuel the energy needs of dogs during the prime of their life. Made with high quality, easy-to-digest ingredients.",
        reviews : [{
            rating: 4.6,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        ],
        avgRating: 4.6,
    },

    {
        id: "16",
        productName: "Kidney Care Food for Dogs",
        imgUrl: productImg16,
        category: "Dog",
        price: 90,
        shortDesc:
            "Hills k/d 0 12KG",
        description:
            "Kidney treatment nutrition that helps protect vital kidney function and increase appetite",
        reviews : [{
            rating: 4.5,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        ],
        avgRating: 4.5,
    },

    {
        id: "17",
        productName: "Cat Clumping Litter",
        imgUrl: productImg17,
        category: "Cat",
        price: 20,
        shortDesc:
            "Cat litter - clumping",
        description:
            "Cat litter - clumping , cleaner and smells better",
        reviews : [{
            rating: 4.6,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        ],
        avgRating: 4.6,
    },

    {
        id: "18",
        productName: "Purina - Friskies Tender & Crunchy ",
        imgUrl: productImg18,
        category: "Cat",
        price: 30,
        shortDesc:
            "Friskies Tender & Crunchy - 7.27KG",
        description:
        "Friskies barbecue chunks, dry and extremely tasty food with a texture that cats love. Provides 100% complete and balanced nutrition for cats at all stages of their lives.",
        reviews : [{
            rating: 4.0,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        ],
        avgRating: 4.0,
    },

    {
        id: "19",
        productName: "Purina - FRISKIES BALANCE Dog Food ",
        imgUrl: productImg19,
        category: "Dog",
        price: 30,
        shortDesc:
            "Dog Food with Chicken and Vegetables 10kg",
        description:
            "Keep your furry friend healthy at all times with the Purina Friskies Balance Dog Food with Chicken and Vegetables. It is specially made to ensure firm stools, thanks to a healthy digestion system.",
        reviews : [{
            rating: 4.0,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        ],
        avgRating: 4.0,
    },
];

export default products;
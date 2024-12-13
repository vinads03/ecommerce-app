import biru_1 from './biru_1.png'
import bungaa from './bungaa.png'
import biru_2 from './biru_2.png'
import biru_3 from './biru_3.png'
import kuning_1 from './kuning_1.png'
import kuning_2 from './kuning_2.png'
import kuning_3 from './kuning_3.png'
import merah_1 from './merah_1.png'
import merah_2 from './merah_2.png'
import merah_3 from './merah_3.png'
import hitam_1 from './hitam_1.png'
import hitam_2 from './hitam_2.png'
import hitam_3 from './hitam_3.png'
import pink_1 from './pink_1.png'
import pink_2 from './pink_2.png'
import pink_3 from './pink_3.png'
import hijau_1 from './hijau_1.png'
import hijau_2 from './hijau_2.png'
import hijau_3 from './hijau_3.png'
import colors_1 from './colors_1.png'
import colors_2 from './colors_2.png'
import colors_3 from './colors_3.png'




import logo from './logo.png'
import hero_img from './hero_img.png'
import cart_icon from './cart_icon.png'
import bin_icon from './bin_icon.png'
import dropdown_icon from './dropdown_icon.png'
import exchange_icon from './exchange_icon.png'
import profile_icon from './profile_icon.png'
import quality_icon from './quality_icon.png'
import search_icon from './search_icon.png'
import star_dull_icon from './star_dull_icon.png'
import star_icon from './star_icon.png'
import support_img from './support_img.png'
import menu_icon from './menu_icon.png'
import about_img from './about_img.png'
import contact_img from './contact_img.png'
import razorpay_logo from './razorpay_logo.png'
import stripe_logo from './stripe_logo.png'
import cross_icon from './cross_icon.png'

export const assets = {
    logo,
    hero_img,
    cart_icon,
    dropdown_icon,
    exchange_icon,
    profile_icon,
    quality_icon,
    search_icon,
    star_dull_icon,
    star_icon,
    bin_icon,
    support_img,
    menu_icon,
    about_img,
    contact_img,
    razorpay_logo,
    stripe_logo,
    cross_icon
}

export const products = [
    {
        _id: "aaaaa",
        name: "Bucket Bunga Blue",
        description: "Bucket bunga warna biru.",
        price: 100,
        image: [biru_1,bungaa],
        category: "Bunga",
        subCategory: "Biru",
        sizes: ["Kecil", "Sedang", "Besar"],
        date: new Date(1716634345448),
        bestseller: true
    },

    {
        _id: "aaaba",
        name: "Bucket Bunga Blue ver",
        description: "Bucket bunga warna biru.",
        price: 100,
        image: [biru_2],
        category: "Bunga",
        subCategory: "Biru",
        sizes: ["Kecil", "Sedang", "Besar"],
        date: new Date(1716634345448),
        bestseller: true
    },

    {
        _id: "aaaab",
        name: "Bucket Snack Blue",
        description: "Bucket snack warna biru.",
        price: 200,
        image: [biru_2],
        category: "Snack",
        subCategory: "Biru",
        sizes: ["Kecil", "Sedang", "Besar"],
        date: new Date(1716621345448),
        bestseller: true
    },
    {
        _id: "aaaac",
        name: "Bucket Photocard Biru",
        description: "Bucket photocard bertema biru.",
        price: 220,
        image: [biru_3],
        category: "Photocard",
        subCategory: "Biru",
        sizes: ["Kecil", "Sedang", "Besar"],
        date: new Date(1716234545448),
        bestseller: true
    },


    {
        _id: "aaaad",
        name: "Bucket Bunga Kuning",
        description: "Bucket bunga bertema kuning.",
        price: 110,
        image: [kuning_1],
        category: "Bunga",
        subCategory: "Kuning",
        sizes: ["Kecil", "Sedang", "Besar"],
        date: new Date(1716621345448),
        bestseller: true
    },
    {
        _id: "aaaae",
        name: "Bucket Snack Kuning",
        description: "Bucket snack bertema kuning.",
        price: 110,
        image: [kuning_2],
        category: "Snack",
        subCategory: "Kuning",
        sizes: ["Kecil", "Sedang", "Besar"],
        date: new Date(1716621345448),
        bestseller: true
    },
    {
        _id: "aaaaf",
        name: "Bucket Photocart Kuning",
        description: "Bucket photocart bertema kuning.",
        price: 110,
        image: [kuning_3],
        category: "Photocart",
        subCategory: "Kuning",
        sizes: ["Kecil", "Sedang", "Besar"],
        date: new Date(1716621345448),
        bestseller: false
    },


    {
        _id: "aaaag",
        name: "Bucket Bunga Merah",
        description: "Bucket bunga bertema merah.",
        price: 190,
        image: [merah_1],
        category: "Bunga",
        subCategory: "Merah",
        sizes: ["Kecil", "Sedang", "Besar"],
        date: new Date(1716621542448),
        bestseller: false
    },
    {
        _id: "aaaah",
        name: "Bucket Snack Merah",
        description: "Bucket snack bertem merah.",
        price: 110,
        image: [merah_2],
        category: "Snack",
        subCategory: "Merah",
        sizes: ["Kecil", "Sedang", "Besar"],
        date: new Date(1716621345448),
        bestseller: false
    },
    {
        _id: "aaaai",
        name: "Bucket Photocart Merah",
        description: "Bucket photocard bertema merah.",
        price: 110,
        image: [merah_3],
        category: "Photocart",
        subCategory: "Merah",
        sizes: ["Kecil", "Sedang", "Besar"],
        date: new Date(1716621345448),
        bestseller: false
    },


    {
        _id: "aaaaj",
        name: "Bucket Bunga Hitam",
        description: "Bucket bunga bertema Hitam.",
        price: 110,
        image: [hitam_1],
        category: "Bunga",
        subCategory: "Hitam",
        sizes: ["Kecil", "Sedang", "Besar"],
        date: new Date(1716621345448),
        bestseller: false
    },
    {
        _id: "aaaak",
        name: "Bucket Snack Hitam",
        description: "Bucket snack bertema hitam.",
        price: 110,
        image: [hitam_2],
        category: "Snack",
        subCategory: "Hitam",
        sizes: ["Kecil", "Sedang", "Besar"],
        date: new Date(1716621345448),
        bestseller: false
    },
    {
        _id: "aaaal",
        name: "Bucket Photocart Hitam",
        description: "Bucket Photocart bertema hitam.",
        price: 110,
        image: [hitam_3],
        category: "Photocart",
        subCategory: "Hitam",
        sizes: ["Kecil", "Sedang", "Besar"],
        date: new Date(1716621345448),
        bestseller: false
    },

    {
        _id: "aaaam",
        name: "Bucket Bunga Pink",
        description: "Bucket bunga bertema warna pink.",
        price: 110,
        image: [pink_1],
        category: "Bunga",
        subCategory: "Pink",
        sizes: ["Kecil", "Sedang", "Besar"],
        date: new Date(1716621345448),
        bestseller: false
    },
    {
        _id: "aaaan",
        name: "Bucket Bunga Pink",
        description: "Bucket sanck betema pink.",
        price: 110,
        image: [pink_2],
        category: "Snack",
        subCategory: "Pink",
        sizes: ["Kecil", "Sedang", "Besar"],
        date: new Date(1716621345448),
        bestseller: false
    },
    {
        _id: "aaaao",
        name: "Bucket Photocart Pink",
        description: "Bucket Photocart bertema pink.",
        price: 110,
        image: [pink_3],
        category: "Photocart",
        subCategory: "Pink",
        sizes: ["Kecil", "Sedang", "Besar"],
        date: new Date(1716621345448),
        bestseller: false
    },


    {
        _id: "aaaap",
        name: "Bucket Bunga Hijau",
        description: "Bucket bunga bertema hijau.",
        price: 170,
        image: [hijau_1],
        category: "Bunga",
        subCategory: "Hijau",
        sizes: ["Kecil", "Sedang", "Besar"],
        date: new Date(1716628845448),
        bestseller: false
    },
    {
        _id: "aaaaq",
        name: "Bucket Snack Hijau",
        description: "Bucket snack bertema hijau.",
        price: 110,
        image: [hijau_2],
        category: "Snack",
        subCategory: "Hijau",
        sizes: ["Kecil", "Sedang", "Besar"],
        date: new Date(1716621345448),
        bestseller: false
    },
    {
        _id: "aaaar",
        name: "Bucket Photocart",
        description: "Bucket photocart bertema hijau",
        price: 110,
        image: [hijau_3],
        category: "Photocart",
        subCategory: "Hijau",
        sizes: ["Kecil", "Sedang", "Besar"],
        date: new Date(1716621345448),
        bestseller: false
    },

    {
        _id: "aaaas",
        name: "Bucket Bunga Colorfull",
        description: "Bucket bunga bertema warna warni.",
        price: 110,
        image: [colors_1],
        category: "Bunga",
        subCategory: "Colorfull",
        sizes: ["Kecil", "Sedang", "Besar"],
        date: new Date(1716621345448),
        bestseller: true
    },
    {
        _id: "aaaat",
        name: "Bucket Snack Colorfull",
        description: "Bucket snack bertema colorfull",
        price: 110,
        image: [colors_2],
        category: "Snack",
        subCategory: "Colorfull",
        sizes: ["Kecil", "Sedang", "Besar"],
        date: new Date(1716621345448),
        bestseller: true
    },
    {
        _id: "aaaau",
        name: "Bucket Photocart Colorfull",
        description: "Bucket bunga bertema colorfull.",
        price: 110,
        image: [colors_3],
        category: "Photocart",
        subCategory: "Colorfull",
        sizes: ["Kecil", "Sedang", "Besar"],
        date: new Date(1716621345448),
        bestseller: true
    },
];

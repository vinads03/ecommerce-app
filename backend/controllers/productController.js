


const addProduct = async (req, res) => {
    try {
        const { name, description, price, category, subCategory, sizes, bestseller } = req.body;

        // Periksa keberadaan files sebelum mengaksesnya
        const image1 = req.files?.image1?.[0];
        const image2 = req.files?.image2?.[0];
        const image3 = req.files?.image3?.[0];
        const image4 = req.files?.image4?.[0];

        // Validasi apakah semua file ada
        if (!image1 || !image2 || !image3 || !image4) {
            return res.status(400).json({
                success: false,
                message: "All images (image1, image2, image3, image4) are required."
            });
        }

        console.log("Body:", { name, description, price, category, subCategory, sizes, bestseller });
        console.log("Files:", { image1, image2, image3, image4 });

        // Jika semua file ada, bisa diteruskan ke proses berikutnya
        res.json({
            success: true,
            message: "Product added successfully.",
            data: {
                name,
                description,
                price,
                category,
                subCategory,
                sizes,
                bestseller,
                images: [image1.filename, image2.filename, image3.filename, image4.filename]
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message });
    }
};


// function for list product
const listProducts = async (req, res) => {


}

// function for removing product
const removeProduct = async (req, res) => {


}

// function for single  product info
const singleProduct = async (req, res) => {


}

export { listProducts, addProduct, removeProduct, singleProduct }
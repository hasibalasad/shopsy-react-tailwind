import Image1 from "../../assets/hero/women.png"
import Image2 from "../../assets/hero/shopping.png"
import Image3 from "../../assets/hero/sale.png"

const ImageList = [
    {
        id: 1,
        image: Image1,
        title: "50% off on all Women's wear",
        description: "Discover our collection of women's clothing. Shop now! ",
    },
    {
        id: 2,
        image: Image2,
        title: "30% off on all Shopping",
        description: " Discover our collection of shopping. Shop now! ",
    },
    {
        id: 3,
        image: Image3,
        title: "40% off on all Sale",
        description: "Discover our collection of sale. Shop now! ",
    }
];
function Hero() {
    return (
        <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white">
            {/* Background Pattern */}
            <div className="bg-primary/40 h-[700px] w-[700px] rotate-45 absolute right-0 -top-1/2 rounded-3xl"></div>
            {/* Hero Content */}
            <div className="container pb-8 sm:pb-0">
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2">
                        <div>
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">Lorem ipsum dolor sit amet.</h1>
                            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, cumque?</p>
                            <div>
                                <button className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full hover:scale-105 transition-all duration-200">
                                    Order Now
                                </button>
                            </div>
                        </div>
                        {/* image Section */}
                        <div>
                            <div>
                                <img src={Image1} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero

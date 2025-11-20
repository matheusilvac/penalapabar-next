const images = [
    { id: "1", image: "/1.png" },
    { id: "2", image: "/2.png" },
    { id: "3", image: "/3.png" },
    { id: "4", image: "/4.png" },
    { id: "6", image: "/5.png" },
    { id: "5", image: "/6.png" },
    { id: "7", image: "/7.png" },
    { id: "8", image: "/8.png" },
    { id: "9", image: "/9.png" },
    { id: "10", image: "/10.png" },
    { id: "11", image: "/11.png" },
    { id: "12", image: "/12.png" },
    { id: "13", image: "/13.png" },
    { id: "14", image: "/14.png" },
    { id: "15", image: "/15.png" },
    { id: "16", image: "/16.png" },
]

export default function CardapioPage() {
    return (
        <section className="w-full h-full flex flex-col justify-center items-center">
            <h1>Cardápio</h1>
            <div className="max-w-[800px] h-full flex justify-center items-center gap-10">
                <div className="w-full flex flex-col justify-center items-center gap-5 p-3 sm:p-0 md:p-0">
                    {images.map((item, index) => (
                        <img src={item.image} alt="" className="w-full flex justify-center items-center mx-auto" key={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}
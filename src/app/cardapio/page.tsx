const images = [
    {id: "1", image: "/0001.jpg"},
    {id: "2", image: "/0002.jpg"},
    {id: "3", image: "/0003.jpg"},
    {id: "4", image: "/0004.jpg"},
    {id: "6", image: "/0005.jpg"},
    {id: "5", image: "/0006.jpg"},
    {id: "7", image: "/0007.jpg"},
    {id: "8", image: "/0008.jpg"},
    {id: "9", image: "/0009.jpg"},
    {id: "15", image: "/0010.jpg"},
    {id: "10", image: "/0011.jpg"},
    {id: "11", image: "/0012.jpg"},
    {id: "12", image: "/0013.jpg"},
    {id: "13", image: "/0014.jpg"},
]

export default function CardapioPage(){
    return(
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
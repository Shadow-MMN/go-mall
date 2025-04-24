import Image from "next/image";
export default function AboutHero(){
    return(
        <div className="flex flex-col md:flex-row pt-12 gap-8 px-4 md:px-16">
                <div className="flex items-center md:w-1/2">
                  <article className="flex flex-col gap-5">
                    <h2 className="font-black text-5xl leading-tight">Our Story</h2>
                    <p className="text-gray-700 leading-relaxed">
                      Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace with an active presence in Bangladesh. Supported by a wide range of tailored marketing, data, and service solutions, Exclusive has 10,500 sellers and 300 brands, serving 3 million customers across the region.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Exclusive offers more than 1 million products and continues to grow rapidly. We provide a diverse assortment of categories ranging from consumer goods to electronics and fashion.
                    </p>
                  </article>
                </div>
                <div className="md:w-1/2 flex items-center">
                  <Image
                    src="/about-pic.png"
                    alt="Two girls holding shopping bags and checking out their phone"
                    width={626}
                    height={417}
                    className="rounded object-cover w-full h-full"
                  />
                </div>
        </div>
    )
}
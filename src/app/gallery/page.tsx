import Image from "next/image"

<p className="text-center text-gray-500 mb-4">
Moments and memories from Rajveer Public School
</p>

const images = [
  "/gallery/1.jpg",
  "/gallery/2.jpg",
  "/gallery/3.jpg",
  "/gallery/4.jpg",
  "/gallery/5.jpg",
  "/gallery/6.jpg",
  "/gallery/7.jpg",
  "/gallery/8.jpg",
  "/gallery/9.jpg",
  "/gallery/10.jpg",
]

export default function GalleryPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">

      <h1 className="text-4xl font-bold text-center mb-12">
        School Gallery
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {images.map((src, index) => (
          <div
            key={index}
            className="relative h-[250px] w-full overflow-hidden rounded-xl shadow-md group"
          >
            <Image
              src={src}
              alt={`Gallery Image ${index + 1}`}
              fill
              className="object-cover group-hover:scale-110 transition duration-300"
            />

            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
              <p className="text-white font-semibold">
                Image {index + 1}
              </p>
            </div>

          </div>
        ))}

      </div>

    </div>
  )
}
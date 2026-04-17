import Image from "next/image";

export default function Gallery() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Gallery</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <Image src="/images/food1.jpg" width={300} height={200} alt="food" />
        <Image src="/images/food2.jpg" width={300} height={200} alt="food" />
        <Image src="/images/food3.jpg" width={300} height={200} alt="food" />
      </div>
    </div>
  );
}
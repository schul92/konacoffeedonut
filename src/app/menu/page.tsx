import Image from 'next/image';

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-[1920px]">
        <Image
          src="/menu.png"
          alt="Kona Coffee Donut Menu"
          width={1920}
          height={1080}
          className="w-full h-auto"
          priority
        />
      </div>
    </div>
  );
}

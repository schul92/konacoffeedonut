import Image from 'next/image';

export default function MenuPage() {
  return (
    <div className="w-screen h-screen bg-black flex items-center justify-center overflow-hidden">
      <Image
        src="/images/menu/bingsu.png"
        alt="Kona Coffee Donut Menu"
        fill
        className="object-contain"
        style={{ imageRendering: 'crisp-edges' }}
        priority
      />
    </div>
  );
}

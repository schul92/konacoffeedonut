'use client';

import { useState, useEffect } from 'react';

export default function MapEmbed() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showIframe, setShowIframe] = useState(false);

  useEffect(() => {
    // Load interactive map after initial render for better performance
    const timer = setTimeout(() => {
      setShowIframe(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
      {/* Static placeholder - always visible for instant loading */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="text-gray-400 text-lg">Loading map...</div>
        </div>
      )}

      {/* Interactive Google Maps iframe */}
      {showIframe && (
        <iframe
          src="https://www.google.com/maps?q=2142+Kalakaua+Ave,+Honolulu,+HI+96815&output=embed&z=15"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="eager"
          referrerPolicy="no-referrer-when-downgrade"
          title="Kona Coffee Donut Location"
          onLoad={() => setIsLoaded(true)}
          className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        />
      )}
    </div>
  );
}

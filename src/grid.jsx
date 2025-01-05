export default function Grid() {
  const items = [
    "8000+ Transitions",
    "Adobe CC Collection",
    "Camera Rig Overlays",
    "Glitch Effects",
    "Video Editing Course",
    "Youtube Essential Pack",
    "2000+ FX Presets",
    "4K Cinematic Film Grain",
    "Fire Spark Overlays",
    "10,000+ Fonts Collection",
    "Rain Overlays",
    "Smoke Overlays",
    "Dust & Snow Overlays",
    "Wedding Invitation Pack",
    "Lens & Bokeh Overlays",
    "Light Leak Overlays",
    "Logo Animation Pack",
    "Wedding Title Pack",
    "100+ After Effects Plugins",
    "100+ Backgrounds",
    "200+ Cinematic Luts",
    "3000+ Sound Effects",
    "200+ Animated Emoji",
    "100+ Callout Graphics",
    "1500+ Lower Third Pack",
    "500+ Stock Videos",
    "Motion Graphic Pack",
    "Animated Title Pack",
    "1000+ Royalty Free Music",
    "Viral Meme Pack",
  ];

  return (
    <div className="p-10 w-screen bg-gray-900 bg-[url('/background1.webp')] bg-cover bg-center text-white">
      <h1 className="text-3xl font-bold text-center mb-8">
        Everything You'll Get Inside:
      </h1>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg shadow-lg lg:p-4  flex flex-col items-center"
          >
            <img
            src={`/Item ${index + 1}.webp`}

              alt={item}
              className="w-full lg:h-56 object-cover rounded-lg mb-4"
            />
            <p className="text-center text-sm font-semibold">{item}</p>
          </div>
        ))}
      </div>

      <Button/>
    </div>
  );
}

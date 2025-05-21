"use client";

export function DemoReel() {
  return (
    <section className="space-y-4">
      <h2 className="text-xl md:text-2xl font-bold text-gray-900">🎬 Demo Reel</h2>
      <div className="rounded-2xl overflow-hidden shadow-lg aspect-video">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/dz8dqTZLVFE"
          title="Demo Reel"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </section>
  );
}

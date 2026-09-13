function seedRandomStars(seed) {
  const val = Math.sin(seed) * 10000;
  return val - Math.floor(val);
}

// function isPositionValid(star, currentStars) {

// }

const stars = Array.from({ length: 623}, (_, i) => ({
  top: seedRandomStars(i * 3) * 100,
  left: seedRandomStars(i * 7) * 100,
  size: seedRandomStars(i + 2) * 7 + 3,
  delay: seedRandomStars(i + 10) * -2000
}));

export default function Home() {
  return (
    <main className="h-dvh">
      <div className="glow relative min-h-screen">
        {stars.map((star, i) => (
          <div
            key={i}
            className="star"
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${star.delay}ms`
            }}
          />
        ))}
      </div>
    </main>
  );
}

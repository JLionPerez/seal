function seedRandomStars(seed) {
  const val = Math.sin(seed) * 10000;
  return val - Math.floor(val);
}

function isPositionValid(star, currentStars) {

}

const stars = Array.from({ length: 100}, (_, i) => ({
  top: seedRandomStars(i * 3) * 100,
  left: seedRandomStars(i * 5 + 1) * 100,
  size: seedRandomStars(i + 10) * 9 + 2
}));

export default function Home() {
  return (
    <main>
      <div className="glow relative min-h-screen">
        {stars.map((star, i) => (
          <div
            key={i}
            className="star"
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              width: `${star.size}px`,
              height: `${star.size}px`
            }}
          />
        ))}
      </div>
    </main>
  );
}

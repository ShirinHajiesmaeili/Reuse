import Video from "../components/Video";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-softBlue via-lavender to-endPurple">
      <div className="w-full max-w-[2000px] mx-auto">
        <div className="text-center mb-12">
          <h1
            className="text-6xl font-bold text-secondary mb-4
                           tracking-wider animate-fade-in-down"
          >
            Welcome to Reuse
          </h1>
          <p
            className="text-xl text-tertiary max-w-2xl mx-auto px-4
                          animate-fade-in-up"
          >
            Discover sustainable fashion and join our mission to reduce waste
          </p>
        </div>

        <Video />

        <div className="text-center mt-12 px-4">
          <h2 className="text-4xl font-bold text-secondary mb-6">
            Join the Sustainable Fashion Movement
          </h2>
          <p className="text-lg text-tertiary max-w-3xl mx-auto mb-8">
            Our platform connects conscious consumers with quality pre-loved
            fashion. Every purchase helps reduce waste and promotes sustainable
            living.
          </p>
          <button
            onClick={() => (window.location.href = "/shop-items")}
            className="bg-primary text-white px-8 py-3 rounded-md
                           hover:bg-secondary transition-all duration-300
                           transform hover:scale-105"
          >
            Explore Collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

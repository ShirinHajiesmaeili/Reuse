import React from "react";

const HowReuseWorks = () => {
  return (
    <div className="bg-[#E7F8E9] min-h-screen text-[#2B5D67] font-sans">
      <header className="bg-[#DFF5E4] py-4 shadow-md">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">How Reuse Works</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-12">
        {/* How our company works section */}
        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">How Our Company Works</h2>
          <p className="text-lg leading-relaxed">
            At Reuse, we aim to revolutionize the way people think about waste and sustainability. 
            Our platform connects individuals and businesses to facilitate the buying, selling, 
            and trading of reusable items. By encouraging reuse, we reduce waste and promote a 
            circular economy where resources are maximized and waste is minimized.
          </p>
        </section>

        {/* Philosophy section */}
        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">What Are We Doing in Reuse? (Philosophy)</h2>
          <p className="text-lg leading-relaxed">
            Our philosophy centers around sustainability, community, and innovation. 
            We believe in giving a second life to products that would otherwise be discarded. 
            Through our platform, we empower individuals to make environmentally conscious 
            decisions and inspire a culture of reuse that benefits everyone.
          </p>
        </section>

        {/* Mission/Vision section */}
        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Mission & Vision</h2>
          <p className="text-lg leading-relaxed">
            <strong>Mission:</strong> To create a world where sustainability is the norm, 
            not the exception. We strive to make reuse easy, accessible, and impactful for 
            individuals and businesses alike.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            <strong>Vision:</strong> A future where waste is a thing of the past, and every 
            resource is valued and utilized to its fullest potential. Together, we can build 
            a greener, more sustainable planet.
          </p>
        </section>
      </main>
    </div>
  );
};

export default HowReuseWorks;

const Services = () => {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Private Photo Tours</h2>
            <p>Personalized photography tours tailored to your interests and skill level.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Group Workshops</h2>
            <p>Learn and practice photography techniques with like-minded enthusiasts.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Wildlife Photography</h2>
            <p>Specialized tours focused on capturing Costa Rica's diverse wildlife.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
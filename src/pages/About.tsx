
const About = () => {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8">Property Overview</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold mb-4 text-primary">Prime Lake Arenal Location</h2>
            <p className="text-lg mb-6">
              Discover this exceptional investment opportunity in La Fortuna, Costa Rica. 
              This unique property features four fully livable and rentable units with 
              breathtaking views of Lake Arenal, surrounded by lush tropical landscapes.
            </p>
            <p className="text-lg mb-6">
              Located in one of Costa Rica's most sought-after destinations, this property 
              offers both immediate rental income potential and long-term appreciation in 
              a stable, growing market.
            </p>
          </div>
          
          <div className="bg-primary/5 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Key Investment Highlights</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>4 independent, rentable units</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Stunning Lake Arenal views</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Prime La Fortuna location</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Proven rental income history</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Turnkey investment opportunity</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Stable Costa Rican real estate market</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">About La Fortuna & Lake Arenal</h2>
          <p className="text-lg mb-4">
            La Fortuna is renowned as one of Costa Rica's premier eco-tourism destinations, 
            home to the majestic Arenal Volcano and the pristine Lake Arenal. The area attracts 
            hundreds of thousands of visitors annually, creating consistent demand for quality rental accommodations.
          </p>
          <p className="text-lg">
            With its perfect climate, stunning natural beauty, and world-class adventure activities, 
            La Fortuna offers an ideal environment for both vacation rentals and long-term investment growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

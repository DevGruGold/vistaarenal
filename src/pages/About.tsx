
const About = () => {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Premium Investment Opportunity
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">Vista Arenal</h1>
          <div className="text-3xl md:text-4xl font-bold text-green-600 mb-4">$500,000 USD</div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Exceptional lakefront property with four independent rental units in Costa Rica's premier eco-tourism destination
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">Prime Lake Arenal Location</h2>
              <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                Discover Vista Arenal, an exceptional investment opportunity in La Fortuna, Costa Rica. 
                This unique property features four fully livable and rentable units with 
                breathtaking views of Lake Arenal, surrounded by lush tropical landscapes.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Located in one of Costa Rica's most sought-after destinations, Vista Arenal 
                offers both immediate rental income potential and long-term appreciation in 
                a stable, growing market.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-2xl border border-primary/20">
            <h3 className="text-2xl font-bold mb-6 text-primary">Investment Highlights</h3>
            <div className="mb-6 p-4 bg-green-50 rounded-xl border border-green-200">
              <p className="text-2xl font-bold text-green-700">$500,000 USD</p>
              <p className="text-green-600">Competitive lakefront pricing</p>
            </div>
            <div className="space-y-4">
              {[
                "4 independent, rentable units",
                "Stunning Lake Arenal views",
                "Prime La Fortuna location",
                "Proven rental income history",
                "Turnkey investment opportunity",
                "Stable Costa Rican real estate market"
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-10 rounded-2xl border border-gray-200">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">About La Fortuna & Lake Arenal</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                La Fortuna is renowned as one of Costa Rica's premier eco-tourism destinations, 
                home to the majestic Arenal Volcano and the pristine Lake Arenal. The area attracts 
                hundreds of thousands of visitors annually, creating consistent demand for quality rental accommodations.
              </p>
            </div>
            <div>
              <p className="text-lg text-gray-700 leading-relaxed">
                With its perfect climate, stunning natural beauty, and world-class adventure activities, 
                La Fortuna offers an ideal environment for both vacation rentals and long-term investment growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

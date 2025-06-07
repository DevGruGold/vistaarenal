
const Services = () => {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8">Property Features & Units</h1>
        
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Four Independent Rental Units</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-bold mb-4 text-primary">Unit 1 - Lakefront Master</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Prime lake view location</li>
                <li>• Spacious living area</li>
                <li>• Full kitchen and bathroom</li>
                <li>• Private outdoor space</li>
                <li>• Perfect for couples or small families</li>
              </ul>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-bold mb-4 text-primary">Unit 2 - Garden Retreat</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Lush garden views</li>
                <li>• Comfortable living space</li>
                <li>• Modern amenities</li>
                <li>• Peaceful setting</li>
                <li>• Ideal for longer stays</li>
              </ul>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-bold mb-4 text-primary">Unit 3 - Volcano View</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Volcano and lake vistas</li>
                <li>• Open-plan design</li>
                <li>• Fully equipped kitchen</li>
                <li>• Large windows for natural light</li>
                <li>• Premium rental potential</li>
              </ul>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-bold mb-4 text-primary">Unit 4 - Tropical Haven</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Surrounded by tropical vegetation</li>
                <li>• Private and secluded</li>
                <li>• Complete living facilities</li>
                <li>• Nature immersion experience</li>
                <li>• High occupancy rates</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-primary/5 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-bold mb-6">Property Amenities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-primary">Natural Features</h4>
              <ul className="space-y-2">
                <li>• Direct lake access</li>
                <li>• Mature tropical landscaping</li>
                <li>• Private beach area</li>
                <li>• Wildlife viewing opportunities</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-primary">Modern Conveniences</h4>
              <ul className="space-y-2">
                <li>• High-speed internet</li>
                <li>• Reliable electricity</li>
                <li>• Water and septic systems</li>
                <li>• Parking areas</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-primary">Investment Benefits</h4>
              <ul className="space-y-2">
                <li>• Established rental history</li>
                <li>• Professional management available</li>
                <li>• Year-round rental demand</li>
                <li>• Appreciation potential</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Location Advantages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-3">Nearby Attractions</h4>
              <ul className="space-y-2">
                <li>• Arenal Volcano National Park</li>
                <li>• Hot springs and spas</li>
                <li>• Adventure tours and zip-lining</li>
                <li>• Hiking and nature walks</li>
                <li>• Fishing and water sports</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Accessibility</h4>
              <ul className="space-y-2">
                <li>• 3 hours from San José airport</li>
                <li>• 15 minutes to La Fortuna center</li>
                <li>• Easy access to main roads</li>
                <li>• Close to restaurants and shops</li>
                <li>• Tourist infrastructure</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

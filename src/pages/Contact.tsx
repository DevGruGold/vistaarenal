
import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar, Mail } from "lucide-react";

const Contact = () => {
  const whatsappNumber = "+506 6237 3779";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\s+/g, '')}`;

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Vista Arenal - Property Inquiries</h1>
          <p className="text-2xl font-semibold text-primary">$500,000 USD</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Schedule Your Property Visit</h2>
            <p className="text-lg mb-8">
              Ready to see Vista Arenal, this exceptional Lake Arenal investment opportunity? 
              Contact us directly to schedule a private viewing or to receive 
              detailed property information, financial projections, and investment analysis.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MessageCircle className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">WhatsApp (Preferred)</h3>
                  <p className="text-gray-600 mb-3">
                    For immediate response and easy communication
                  </p>
                  <Button
                    asChild
                    className="bg-green-600 hover:bg-green-700 text-white inline-flex items-center space-x-2"
                  >
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-5 w-5 mr-2" />
                      Message on WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Calendar className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Property Viewing</h3>
                  <p className="text-gray-600">
                    Schedule an in-person or virtual tour of Vista Arenal. 
                    We can arrange transportation from La Fortuna or San José.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Investment Package</h3>
                  <p className="text-gray-600">
                    Request our complete investment package including financial 
                    projections, rental history, and market analysis for Vista Arenal.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-primary/5 p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-6">What to Expect</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2 text-primary">Property Tour</h4>
                <p className="text-gray-700">
                  Complete walkthrough of all four units at Vista Arenal, grounds, and amenities. 
                  See the stunning lake views and understand the rental potential.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2 text-primary">Financial Review</h4>
                <p className="text-gray-700">
                  Detailed breakdown of current rental income, expenses, and 
                  projected returns on your $500,000 investment.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2 text-primary">Area Exploration</h4>
                <p className="text-gray-700">
                  Discover the surrounding La Fortuna area, local attractions, 
                  and understand why this location is so attractive to tourists.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2 text-primary">Investment Guidance</h4>
                <p className="text-gray-700">
                  Learn about Costa Rica's real estate market, ownership process 
                  for foreigners, and ongoing property management options.
                </p>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-white rounded-lg border border-primary/20">
              <p className="text-sm text-gray-600">
                <strong>Note:</strong> All viewings are by appointment only. 
                We recommend scheduling at least 48 hours in advance to ensure 
                availability and proper preparation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

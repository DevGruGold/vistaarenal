import { Button } from "@/components/ui/button";
import { WhatsappIcon } from "lucide-react";

const Contact = () => {
  const whatsappNumber = "+506 6237 3779";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\s+/g, '')}`;

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        <div className="max-w-2xl">
          <p className="text-lg mb-8">
            Ready to book your photography tour? Contact us directly through WhatsApp
            for quick and easy communication.
          </p>
          <Button
            asChild
            className="bg-green-600 hover:bg-green-700 text-white inline-flex items-center space-x-2"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <WhatsappIcon className="h-5 w-5 mr-2" />
              Contact via WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
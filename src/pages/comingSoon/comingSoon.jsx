import { Calendar, MapPin } from "lucide-react";
import DitLogo from '../../images/dit.jpg'
import brochurePDF from '../../assets/Brochure.pdf'
import { useEffect } from "react";
// import DitBG from '../../images/img_1.jpg'


export default function ConferencePage() {

  useEffect(() => {
    document.title = "6th National Conference";
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-blue-500 to-purple-600 text-white relative">
      
      <div className="absolute inset-0 bg-cover bg-center opacity-70" style={{ backgroundImage: "url('/images/college-campus.jpg')" }}></div>

      {/* Overlay to darken the background image for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <main className="relative flex-grow flex items-center justify-center px-4">
        <div className="max-w-4xl w-full bg-white/10 backdrop-blur-md rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            {/* DIT Logo */}
            <img src={DitLogo} alt="DIT Logo" className="h-16 mx-auto mb-8" />
            {/* Conference Title */}
            <h1 className="text-5xl font-bold mb-4">
              6th National Conference on Recent Advancements in Physical Sciences
            </h1>
            <p className="text-2xl mb-10">Coming Soon...</p>
          </div>

          {/* Conference Date and Location */}
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-6">
            <div className="flex items-center justify-center">
              <Calendar className="mr-2" />
              <span> 15-16 February, 2025</span>
            </div>
            <div className="flex items-center justify-center">
              <MapPin className="mr-2" />
              <span>DIT University, Dehradun</span>
            </div>
          </div>

          {/* Brochure Link */}
          <div className="text-center">
            <a
              href={brochurePDF}
              className="text-blue-400 hover:text-blue-300 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Conference Brochure
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}


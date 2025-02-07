import { useState, useEffect } from "react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true
    functional: false,
    analytics: false,
    marketing: false,
  });
  const [error, setError] = useState("");

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem("cookiesAccepted");
    if (!cookiesAccepted) {
      setIsVisible(true);
    }
  }, []);

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
    };
    localStorage.setItem("cookiesAccepted", JSON.stringify(allAccepted));
    setPreferences(allAccepted);
    setError("");
    setIsVisible(false);
  };

  const savePreferences = () => {
    if (!preferences.necessary) {
      setError("Necessary cookies must be accepted to use the website.");
      return;
    }
    localStorage.setItem("cookiesAccepted", JSON.stringify(preferences));
    setError("");
    setIsVisible(false);
  };

  const handleDecline = () => {
    setShowPreferences(true);
    setError("");
  };

  const handleToggle = (type) => {
    if (type === 'necessary') {
      setError("Necessary cookies cannot be disabled.");
      return;
    }
    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
    setError("");
  };

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t z-[9999] transition-all duration-500 ease-in-out ${
        showPreferences ? 'h-auto' : 'h-auto'
      }`}
    >
      <div className="max-w-screen-xl mx-auto p-6">
        {!showPreferences ? (
          // Initial View
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-gray-800 text-center sm:text-left">
              We use cookies to ensure you get the best experience on our website.
            </span>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={acceptAll}
                className="bg-[#009383] text-white px-6 py-2 rounded-lg hover:bg-[#007a6b] transition-colors whitespace-nowrap"
              >
                Accept All
              </button>
              <button
                onClick={handleDecline}
                className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition-colors whitespace-nowrap"
              >
                Customize
              </button>
            </div>
          </div>
        ) : (
          // Expanded Preferences View
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-900">Cookie Preferences</h2>
            </div>
            
            {error && (
              <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                <p className="text-red-700">{error}</p>
              </div>
            )}

            <div className="space-y-6">
              {/* Necessary Cookies */}
              <div className="flex items-center justify-between pb-4 border-b">
                <div>
                  <h3 className="font-medium text-gray-900">Necessary Cookies</h3>
                  <p className="text-sm text-gray-500">Required for the website to function properly.</p>
                </div>
                <label className="relative inline-flex items-center">
                  <input
                    type="checkbox"
                    checked={preferences.necessary}
                    onChange={() => handleToggle('necessary')}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-[#009383] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#009383]/20 rounded-full peer after:content-[''] after:absolute after:top-[2px] after:right-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all cursor-not-allowed"></div>
                </label>
              </div>

              {/* Functional Cookies */}
              <div className="flex items-center justify-between pb-4 border-b">
                <div>
                  <h3 className="font-medium text-gray-900">Functional Cookies</h3>
                  <p className="text-sm text-gray-500">Enhanced functionality and personalization.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences.functional}
                    onChange={() => handleToggle('functional')}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#009383]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#009383]"></div>
                </label>
              </div>

              {/* Analytics Cookies */}
              <div className="flex items-center justify-between pb-4 border-b">
                <div>
                  <h3 className="font-medium text-gray-900">Analytics Cookies</h3>
                  <p className="text-sm text-gray-500">Help us improve our website by collecting usage information.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={() => handleToggle('analytics')}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#009383]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#009383]"></div>
                </label>
              </div>

              {/* Marketing Cookies */}
              <div className="flex items-center justify-between pb-4 border-b">
                <div>
                  <h3 className="font-medium text-gray-900">Marketing Cookies</h3>
                  <p className="text-sm text-gray-500">Used to deliver personalized advertisements.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={() => handleToggle('marketing')}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#009383]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#009383]"></div>
                </label>
              </div>
            </div>

            <div className="flex justify-end gap-4 pt-4">
              <button
                onClick={acceptAll}
                className="bg-[#009383] text-white px-6 py-2 rounded-lg hover:bg-[#007a6b] transition-colors"
              >
                Accept All
              </button>
              <button
                onClick={savePreferences}
                className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Save Preferences
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieConsent; 
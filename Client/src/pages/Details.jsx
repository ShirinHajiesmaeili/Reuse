// App.jsx
import React from "react";
import TopNavigation from "../components/TopNavigation";
import Footer from "../components/Footer";
import ProductImage from "../components/ProductImage";
import ProductDescription from "../components/ProductDescription";
import ProductPaymentAndDelivery from "../components/ProductPaymentAndDelivery";
import "tailwindcss/tailwind.css";

function Details(id) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <TopNavigation />
      <main className="flex-1 container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProductImage imageUrl="https://via.placeholder.com/300" />
          <div className="space-y-4">
            <ProductDescription
              title="Wireless Bluetooth Headphones"
              description="High-quality wireless headphones with noise cancellation."
              price="$99.99"
            />
            <ProductPaymentAndDelivery
              deliveryInfo="Free delivery within 3-5 business days"
              paymentMethods="Credit Card, PayPal, and more"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Details;

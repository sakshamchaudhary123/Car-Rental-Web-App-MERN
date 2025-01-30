import React from "react";

function Features() {
  return (
    <div>
      {/* Features Section */}
      <div className="bg-base-300 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Features Data Array */}
            {[
              {
                badge: "24/7",
                title: "Round-the-Clock Support",
                description:
                  "We are always here to assist you, anytime, anywhere!",
                badgeColor: "badge-primary",
              },
              {
                badge: "Anytime",
                title: "Convenient Booking",
                description:
                  "Book a car anytime, anywhere with our easy-to-use app or website.",
                badgeColor: "badge-info",
              },
              {
                badge: "Affordable",
                title: "Competitive Pricing",
                description:
                  "Get the best deals with flexible pricing options and discounts on long-term rentals.",
                badgeColor: "badge-success",
              },
              {
                badge: "Variety",
                title: "Wide Selection of Cars",
                description:
                  "Choose from a wide range of cars: sedans, SUVs, luxury cars, and more!",
                badgeColor: "badge-warning",
              },
              {
                badge: "Easy Returns",
                title: "Simple Car Returns",
                description:
                  "Return your car with ease at any of our locations, with flexible time slots.",
                badgeColor: "badge-accent",
              },
              {
                badge: "Safe & Reliable",
                title: "Safety & Reliability",
                description:
                  "Our cars are well-maintained, insured, and equipped with the latest safety features.",
                badgeColor: "badge-error",
              },
            ].map((data, index) => (
              <div key={index} className="card bg-base-100 cursor-pointer shadow-xl hover:shadow-2xl hover:scale-90 duration-300 transition-transform">
                <div className="card-body items-center text-center">
                  <div className={`badge ${data.badgeColor} badge-lg mb-2`}>
                    {data.badge}
                  </div>
                  <h3 className="card-title">{data.title}</h3>
                  <p>{data.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;

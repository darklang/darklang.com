import React, { useState } from "react";
import Button from "../ui/Button";

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setError("Please enter your email address");
      return;
    }

    try {
      setIsSubmitting(true);
      setError("");

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Here you would actually submit the email to your backend
      console.log("Subscribed email:", email);

      setIsSuccess(true);
      setEmail("");
    } catch (err) {
      setError("Failed to subscribe. Please try again.");
      console.error("Subscription error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full py-20">
      <div className="max-w-7xl 2xl:max-w-[100rem] mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md inset-shadow-sm p-8 md:p-12 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black-custom tracking-tight">
              Send me project updates
            </h2>
            <p className="text-lg text-gray-700">
              Get notified about new features, updates, Bug Fixes, project
              milestones, and more
            </p>
          </div>

          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col md:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="flex-grow py-3 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-lbg focus:border-transparent"
                  disabled={isSubmitting}
                />
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  className="bg-purple-lbg hover:bg-purple-secondary text-white-custom"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Subscribing..." : "send me updates"}
                </Button>
              </div>

              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

              <div className="flex items-center justify-start mt-4 text-sm text-gray-500">
                <svg
                  className="w-5 h-5 mx-2 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  ></path>
                </svg>
                Monthly updates, no spam, unsubscribe anytime
              </div>
            </form>
          ) : (
            <div className="text-center py-8">
              <div className="mb-4 flex justify-center">
                <svg
                  className="w-16 h-16 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-black-custom">
                Thanks for subscribing!
              </h3>
              <p className="text-gray-600">
                We'll send you updates about Darklang project milestones.
              </p>
              <button
                onClick={() => setIsSuccess(false)}
                className="mt-6 text-purple-lbg hover:text-purple-700 underline"
              >
                Subscribe another email
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

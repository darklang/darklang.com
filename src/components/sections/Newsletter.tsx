import React, { useState, useRef } from "react";
import Button from "../ui/Button";

interface NewsletterProps {
  className?: string;
}

const Newsletter: React.FC<NewsletterProps> = () => {
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Reset error state
    setError("");

    const emailInput = document.getElementById(
      "newsletterEmail",
    ) as HTMLInputElement;
    if (!emailInput?.value) {
      setError("Please enter your email address");
      return;
    }

    try {
      const response = await fetch(
        "https://ops-corpsite.builtwithdark.com/signup",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: emailInput.value,
          }),
        },
      );

      if (response.status === 200) {
        setIsSubmitted(true);
      } else {
        setError("Error adding to waitlist");
      }
    } catch (err) {
      setError("Failed to subscribe. Please try again.");
      console.error("Subscription error:", err);
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

          {!isSubmitted ? (
            <form
              id="newsletterForm"
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <div className="flex flex-col md:flex-row gap-3">
                <div className="relative flex-grow">
                  <input
                    id="newsletterEmail"
                    type="email"
                    placeholder="Your email"
                    className="w-full py-3 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-lbg focus:border-transparent"
                    required
                  />
                  {error && (
                    <span
                      id="newsletterError"
                      className="text-red-400 absolute -bottom-7 text-xs italic"
                    >
                      {error}
                    </span>
                  )}
                </div>
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  className="bg-purple-lbg hover:bg-blue-lbg text-white-custom"
                >
                  Send
                </Button>
              </div>

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
            <div className="mt-11 mb-16 border border-mint bg-mint/10 rounded pl-11 pr-14 py-3 relative flex items-center justify-center">
              <span>Added to waitlist!</span>
              <svg
                className="w-5 h-5 text-green-500 absolute right-4 ml-2"
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
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

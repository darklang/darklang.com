import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";

import darklangClassic from "~/assets/darklang-classic.png";

const Signup = () => {
  const [errors, setErrors] = useState<string[]>([]);
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const clearErrors = () => {
    setErrors([]);
    setShowError(false);
  };

  const displayErrors = (errorMessages: string[]) => {
    clearErrors();
    setErrors(errorMessages);
    setShowError(true);
  };

  const displaySuccess = () => {
    clearErrors();
    setShowSuccess(true);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Reset both error and success states
    clearErrors();
    setShowSuccess(false);

    const form = event.currentTarget;
    const codeOfConductInput = form.querySelector(
      "#code-of-conduct",
    ) as HTMLInputElement;

    if (!codeOfConductInput.checked) {
      displayErrors(["Please agree to our code of conduct"]);
      return;
    }

    const nameInput = form.querySelector("#name") as HTMLInputElement;
    const emailInput = form.querySelector("#email") as HTMLInputElement;
    const usernameInput = form.querySelector("#username") as HTMLInputElement;

    const data = {
      name: nameInput.value,
      email: emailInput.value.toLowerCase(),
      username: usernameInput.value,
    };

    try {
      const response = await fetch(
        "https://ops-adduser.builtwithdark.com/v3/create-account",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        },
      );

      if (response.status === 200) {
        form.reset();
        displaySuccess();
      } else {
        const errorText = await response.text();
        displayErrors([errorText]);
      }
    } catch (error) {
      displayErrors(["An error occurred. Please try again later."]);
      console.error("Signup error:", error);
    }
  };

  return (
    <div className="flex items-center justify-center py-20 px-4 bg-dark ">
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <img
            src={darklangClassic}
            alt="Darklang Classic"
            className="md:max-w-3xl mx-auto"
          />
          <p className="mt-20 text-white md:text-2xl">
            We're currently focused on the{" "}
            <a
              href="https://github.com/darklang/dark"
              target="_blank"
              className="text-purple-dbg"
            >
              next{" "}
            </a>
            version of Darklang, but you can still try Darklang Classic!
          </p>
        </div>

        <div className="max-w-md bg-dark shadow-md rounded-lg p-8 border-2 border-purple-dbg mx-auto">
          {/* Error display */}
          {showError && !showSuccess && (
            <div
              id="errors"
              className="flex flex-col items-center justify-center mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded"
            >
              <ul id="error-list">
                {errors.map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Success message */}
          <div
            id="success"
            className={
              showSuccess
                ? "flex flex-col items-center justify-center"
                : "hidden"
            }
          >
            <h2 className="text-xl text-green-500 mb-4">
              Successfully signed up!
            </h2>
            <p className="text-gray-200">
              Thank you for signing up. Check your email for further
              instructions.
            </p>
          </div>

          {!showSuccess && (
            <form
              id="sign-up-form"
              className="space-y-6"
              onSubmit={handleSubmit}
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-200 mb-1"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="text-white appearance-none block w-full px-3 py-2 border border-gray-500 rounded-md shadow-sm placeholder-gray-100 focus:outline-none focus:ring-purple-lbg focus:border-purple-lbg"
                />
              </div>

              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-200 mb-1"
                >
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  className="text-white appearance-none block w-full px-3 py-2 border border-gray-500 rounded-md shadow-sm placeholder-gray-100 focus:outline-none focus:ring-purple-lbg focus:border-purple-lbg"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-200 mb-1"
                >
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className=" text-white appearance-none block w-full px-3 py-2 border border-gray-500 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-purple-lbg focus:border-purple-lbg"
                  placeholder="your@email.com"
                />
              </div>

              <div className="flex items-start my-10">
                <input
                  id="code-of-conduct"
                  name="code-of-conduct"
                  type="checkbox"
                  required
                  className="h-4 w-4 text-purple-lbg focus:ring-purple-lbg border-gray-500 rounded"
                />
                <label
                  htmlFor="code-of-conduct"
                  className="ml-2 block text-sm text-gray-100"
                >
                  I promise to abide by the{" "}
                  <a
                    href="https://darklang.com/code-of-conduct"
                    target="_Blank"
                    className="font-medium text-purple-lbg hover:text-purple-secondary"
                  >
                    Code of Conduct{" "}
                  </a>{" "}
                  when using Dark services or participating in the Dark
                  community.
                </label>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-lbg hover:bg-purple-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-lbg"
                >
                  Create account
                </button>
              </div>
            </form>
          )}
        </div>

        <p className="mt-8 text-center text-sm text-white">
          Already have an account?{" "}
          <Link
            to="https://login.darklang.com"
            className="font-medium text-purple-lbg hover:text-purple-secondary"
            target="_blank"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;

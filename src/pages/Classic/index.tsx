import darklangClassic from "~/assets/darklang-classic.png";
import darkClassicToplevel from "~/assets/dark-classic-toplevel.png";

// TODO talk about how things will eventually be migrated to "-next"

const About = () => {
  return (
    <div className="min-h-screen py-16 bg-dark">
      <div className="max-w-7xl 2xl:max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Logo section */}
        <div className="w-full flex justify-center my-12 2xl:my-18">
          <img
            src={darklangClassic}
            alt="Darklang Classic"
            className="max-w-full sm:max-w-2xl"
          />
        </div>

        {/* Main content - First Section */}
        <div className="text-center mb-18 text-xl md:text-3xl xl:text-[28px]">
          <div className="mb-12">
            <span className="font-semibold text-purple-dbg">Dark </span>
            <span className="text-white">
              is a new way of building serverless backends. Just code your
              backend, with no infra, framework or deployment nightmares. Build
            </span>
            <span className="text-classic-green"> APIs</span>
            <span className="text-white">, </span>
            <span className="text-classic-brown">CRUD</span>
            <span className="text-white"> apps, </span>
            <span className="text-classic-yellow">internal tools</span>
            <span className="text-white"> and </span>
            <span className="text-classic-blue">bots</span>
            <span className="text-white"> - whatever your backend needs.</span>
          </div>

          <p className="text-gray-300 text-base 2xl:text-lg mt-8 border rounded-lg border-classic-yellow p-4">
            Sign ups for Darklang Classic are no longer available. It had been
            running in production since 2019, and we've decided to{" "}
            <a
              className="text-blue-dbg underline"
              href="https://blog.darklang.com/winding-down-darklang-classic/"
              target="_blank"
            >
              wind it down
            </a>
            . Darklang-next is the next iteration of Dark, applicable to both
            the cloud runtime and to local scripts and CLIs.
          </p>
        </div>

        {/* Code Editor Image Section */}
        <div className="mx-auto mb-16">
          <img
            src={darkClassicToplevel}
            alt="Darklang Editor Interface"
            className="w-full rounded-lg shadow-2xl border border-gray-800"
          />
        </div>

        {/* Key Capabilities */}
        <div className="mb-16 w-full">
          <div className="space-y-6">
            {/* Internal Tools & Bots */}
            <div className="bg-dark-black rounded-lg p-8 text-white">
              <h3 className="flex items-center text-xl font-semibold mb-4">
                <span>Internal Tools</span>
                <span className="mx-2 text-purple-dbg">&</span>
                <span>Bots</span>
              </h3>
              <p className="text-gray-300 text-xl mb-4">
                Dark is ideal for quickly building slackbots and automating
                internal tools. Receive webhooks live, call out to 3rd party
                APIs, store data, and schedule jobs - while building no
                infrastructure.
              </p>
              <a
                href="https://docs.darklang.com/using-dark-with-slack"
                className="inline-block text-blue-dbg hover:text-purple-dbg"
              >
                Read more about using dark with Slack
              </a>
            </div>

            {/* REST APIs & Webhooks */}
            <div className="bg-dark-black rounded-lg p-8 text-white">
              <h3 className="flex items-center text-lg font-semibold mb-4">
                <span>REST APIs</span>
                <span className="text-purple-dbg mx-2">&</span>
                <span>Webhooks</span>
              </h3>
              <p className="text-gray-300 text-lg">
                Set up an API endpoint quickly enough to use it as a proof of
                concept during a call. Immediately see the data from a webhook
                to your endpoint. Call an external API using the HttpClient
                library and see responses within the editor, or use workers to
                do them in the background. Use the built-in package manager to
                make external API calls really easily, and contribute your own
                API integrations.
              </p>
            </div>

            {/* CRUD apps */}
            <div className="bg-dark-black rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4">
                <span className="text-purple-dbg">CRUD</span>
                <span className="text-white ml-2">apps</span>
              </h3>
              <p className="text-gray-300 text-lg">
                Get a working CRUD application in less than ten minutes by
                setting up a few API endpoints and a datastore. Build out the
                backend for a web or mobile app, whether a simple HTML form or
                an entire product.
              </p>
            </div>
          </div>
        </div>

        {/* Any Backend Section */}
        <div className="mb-20">
          <h2 className="text-4xl mb-12 pl-0 text-white">
            <span className="text-white">Any </span>
            <span>Backend</span>
            <span className="text-white"> That Requires...</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {/* Feature Card 1 */}
            <div className="bg-dark-black p-6 rounded-lg">
              <h3 className="text-xl font-semibold">
                <span className="text-purple-dbg">API</span>
                <span className="text-white"> Endpoints</span>
              </h3>
            </div>

            {/* Feature Card 2 */}
            <div className="bg-dark-black p-6 rounded-lg">
              <h3 className="text-xl font-semibold">
                <span className="text-purple-dbg"> Data</span>
                <span className="text-white"> Stores</span>
              </h3>
            </div>

            {/* Feature Card 3 */}
            <div className="bg-dark-black p-6 rounded-lg">
              <h3 className="text-xl font-semibold">
                <span className="text-purple-dbg">Background</span>
                <span className="text-white"> Workers</span>
              </h3>
            </div>

            {/* Feature Card 4 */}
            <div className="bg-dark-black p-6 rounded-lg">
              <h3 className="text-xl font-semibold">
                <span className="text-purple-dbg">Scheduled</span>
                <span className="text-white"> Jobs</span>
              </h3>
            </div>
          </div>

          <p className="text-gray-300 text-lg md:text-xl mb-16 px-0">
            Dark lets you build any backend that needs API endpoints, data
            stores, background workers, scheduled jobs, and calling HTTP APIs.
            You just write the code in Dark, and we'll manage the rest.
          </p>

          <div className="flex justify-center mb-20">
            <a
              href="https://www.youtube.com/watch?v=orRn2kTtRXQ&t=38s"
              target="_blank"
              className="flex justify-center items-center text-decoration-none"
            >
              <div className="flex justify-center items-center">
                <button className="bg-classic-purple text-white font-bold py-2 px-2 rounded-full inline-flex items-center justify-center relative">
                  <span className="absolute w-full h-full bg-classic-purple rounded-full opacity-75 animate-ping"></span>
                  <svg
                    viewBox="0 0 16 16"
                    className="z-10 h-4 w-4"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                  </svg>
                </button>
                <p className="mx-4 text-white text-lg">see it in action!</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

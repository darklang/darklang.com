
const Roadmap = () => {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-8 text-black-custom">Darklang Roadmap</h1>

      <div className="prose max-w-none">
        <p className="text-lg mb-8">
          At Darklang, we're committed to building a powerful yet simple platform for backend development.
          Our roadmap outlines our vision for the future and the features we're working on.
        </p>

        <div className="space-y-12 mt-8">
          <div className="border-l-4 border-purple-lbg pl-6 relative">
            <div className="absolute w-4 h-4 rounded-full bg-purple-lbg -left-[10px] top-0"></div>
            <h2 className="text-2xl font-semibold mb-4">Q2 2025</h2>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Enhanced debugging tools with time-travel capabilities</li>
              <li>Extended package management system</li>
              <li>Performance optimizations for large-scale applications</li>
              <li>New UI components library</li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-primary pl-6 relative">
            <div className="absolute w-4 h-4 rounded-full bg-blue-primary -left-[10px] top-0"></div>
            <h2 className="text-2xl font-semibold mb-4">Q3 2025</h2>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Advanced deployment strategies (canary, blue-green)</li>
              <li>AI-assisted coding features</li>
              <li>Enhanced data visualization tools</li>
              <li>Expanded third-party service integrations</li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-secondary pl-6 relative">
            <div className="absolute w-4 h-4 rounded-full bg-purple-secondary -left-[10px] top-0"></div>
            <h2 className="text-2xl font-semibold mb-4">Q4 2025</h2>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Multi-region deployment support</li>
              <li>Advanced monitoring and observability tools</li>
              <li>Expanded language features for complex applications</li>
              <li>Large-scale enterprise features and support</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Help Shape Our Future</h3>
          <p className="mb-4">
            We believe in building in public and with our community. Have suggestions or feature requests?
            We'd love to hear from you!
          </p>
          <button className="px-5 py-2 bg-purple-lbg text-white rounded-md hover:bg-purple-secondary transition-colors">
            Submit Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
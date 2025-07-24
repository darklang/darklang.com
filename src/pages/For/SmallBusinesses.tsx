import React from "react";
import EarlyContentDisclaimer from "../../components/EarlyContentDisclaimer";

const SmallBusinesses: React.FC = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <EarlyContentDisclaimer />
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Darklang for Small Businesses
          </h1>
          <div className="w-24 h-1 bg-blue-lbg mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            Custom software solutions without the enterprise price tag. 
            Build exactly what your business needs.
          </p>
        </div>

        {/* Small Business Pain Points */}
        <div className="bg-red-50 rounded-lg p-8 mb-12 border-l-4 border-red-500">
          <h2 className="text-2xl font-bold text-red-800 mb-4">Software That Doesn't Fit</h2>
          <div className="text-red-700 space-y-3">
            <div className="flex items-start">
              <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <p>Generic SaaS tools that almost fit your workflow (but not quite)</p>
            </div>
            <div className="flex items-start">
              <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <p>WordPress sites that break when you need custom functionality</p>
            </div>
            <div className="flex items-start">
              <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <p>Custom development quotes that cost more than your annual revenue</p>
            </div>
            <div className="flex items-start">
              <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <p>Manual processes that eat hours every week but seem too small to automate</p>
            </div>
            <div className="flex items-start">
              <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <p>Data scattered across spreadsheets, email, and various tools</p>
            </div>
          </div>
        </div>

        {/* Darklang Solution */}
        <div className="bg-green-50 rounded-lg p-8 mb-12 border-l-4 border-green-500">
          <h2 className="text-2xl font-bold text-green-800 mb-4">Custom Software, Small Business Budget</h2>
          <div className="text-green-700 space-y-3">
            <div className="flex items-start">
              <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <p><strong>No upfront costs:</strong> Build incrementally, pay only for what you use</p>
            </div>
            <div className="flex items-start">
              <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <p><strong>Non-technical friendly:</strong> Business logic in plain language</p>
            </div>
            <div className="flex items-start">
              <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <p><strong>Instant deployment:</strong> Changes go live immediately</p>
            </div>
            <div className="flex items-start">
              <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <p><strong>Grows with you:</strong> Start simple, add features as you need them</p>
            </div>
          </div>
        </div>

        {/* Perfect For Small Businesses */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Perfect for Businesses That Need:</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-blue-lbg mb-4">Custom Business Logic</h3>
              <p className="text-gray-700 mb-4">
                Your business has unique rules and processes. Build software that 
                matches exactly how you work, not how a generic tool thinks you should work.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Examples:</strong> Pricing calculators, inventory rules, 
                customer workflows, compliance tracking
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-purple-lbg mb-4">Process Automation</h3>
              <p className="text-gray-700 mb-4">
                Automate the repetitive tasks that drain your team's time. 
                Focus on growing your business, not on manual data entry.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Use cases:</strong> Invoice generation, customer onboarding, 
                report automation, data sync between tools
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-mint mb-4">Better Than WordPress</h3>
              <p className="text-gray-700 mb-4">
                Need more than a static website? Build web applications that handle 
                forms, payments, user accounts, and custom functionality.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Perfect for:</strong> Service booking systems, client portals, 
                e-commerce with custom rules, membership sites
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-taupe mb-4">Data Integration</h3>
              <p className="text-gray-700 mb-4">
                Connect all your business tools. Get your CRM talking to your accounting 
                software, sync data automatically, generate unified reports.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Common need:</strong> Spreadsheet data → web forms → 
                automated processing → reports
              </div>
            </div>
          </div>
        </div>

        {/* Common Small Business Applications */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Small Business Applications</h2>
          
          <div className="space-y-8">
            <div className="border-l-4 border-blue-lbg pl-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Customer Management</h3>
              <p className="text-gray-700 mb-4">
                Build a CRM that matches your business exactly. Track customers, 
                manage leads, automate follow-ups—all customized to your process.
              </p>
              <div className="bg-gray-50 p-4 rounded">
                <div className="text-sm text-gray-600 space-y-1">
                  <div>• Custom fields for your specific customer data</div>
                  <div>• Automated email sequences based on your sales process</div>
                  <div>• Integration with your existing tools and spreadsheets</div>
                  <div>• Reports that show the metrics you actually care about</div>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-purple-lbg pl-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Service Booking & Scheduling</h3>
              <p className="text-gray-700 mb-4">
                Let customers book appointments online with your custom availability rules, 
                pricing, and service options. No more phone tag.
              </p>
              <div className="bg-gray-50 p-4 rounded">
                <div className="text-sm text-gray-600 space-y-1">
                  <div>• Online booking with your specific service rules</div>
                  <div>• Automated confirmations and reminders</div>
                  <div>• Payment processing integrated with booking</div>
                  <div>• Staff scheduling and resource management</div>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-mint pl-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Inventory & Order Management</h3>
              <p className="text-gray-700 mb-4">
                Track inventory, process orders, and manage suppliers with business rules 
                that match your workflow, not a generic template.
              </p>
              <div className="bg-gray-50 p-4 rounded">
                <div className="text-sm text-gray-600 space-y-1">
                  <div>• Custom product categorization and attributes</div>
                  <div>• Automated reorder points and supplier notifications</div>
                  <div>• Integration with your sales channels</div>
                  <div>• Custom reporting for your business metrics</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cost Comparison */}
        <div className="border-l-4 border-purple-lbg pl-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Cost Comparison: Traditional vs Darklang
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-red-600 mb-4">Traditional Custom Development</h3>
              <div className="bg-red-50 p-4 rounded text-sm space-y-2">
                <div>• $10,000-50,000 upfront development</div>
                <div>• 3-6 months development time</div>
                <div>• $2,000-5,000/month hosting & maintenance</div>
                <div>• Additional costs for changes and updates</div>
                <div>• Risk of project going over budget</div>
                <div>• Vendor lock-in with development agency</div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-green-600 mb-4">Darklang Approach</h3>
              <div className="bg-green-50 p-4 rounded text-sm space-y-2">
                <div>• Start free, pay only for usage</div>
                <div>• Deploy working version in days</div>
                <div>• Scales automatically with your business</div>
                <div>• Add features incrementally as needed</div>
                <div>• No upfront investment risk</div>
                <div>• You own and control your application</div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded border-l-4 border-blue-lbg">
            <p className="text-gray-700">
              <strong>The result:</strong> Custom software that would cost $50,000+ traditionally 
              can be built incrementally for a fraction of the cost.
            </p>
          </div>
        </div>

        {/* Success Stories Pattern */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How Small Businesses Use Darklang</h2>
          
          <div className="text-gray-700 leading-relaxed space-y-6">
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-3">Local Service Business</h3>
              <p className="mb-3">
                Replace phone-based booking with online scheduling. Customers book appointments, 
                staff get notifications, payments are processed automatically.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Impact:</strong> 40% reduction in administrative time, 
                25% increase in bookings, happier customers
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-3">E-commerce with Custom Rules</h3>
              <p className="mb-3">
                Sell products with complex pricing rules, bulk discounts, and custom shipping 
                calculations that off-the-shelf platforms can't handle.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Result:</strong> Exact business logic implementation, 
                no workarounds or compromises
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-3">Professional Services Automation</h3>
              <p className="mb-3">
                Automate client onboarding, project tracking, and invoicing. 
                Generate reports for specific client needs and compliance requirements.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Benefit:</strong> More time for billable work, 
                fewer administrative errors, better client experience
              </div>
            </div>
          </div>
        </div>

        {/* Getting Started */}
        <div className="border-l-4 border-mint pl-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Start Small, Grow Smart
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>
              You don't need to replace all your systems at once. Start with one small 
              process that's causing daily frustration. Automate it with Darklang.
            </p>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-3">Suggested First Projects</h3>
              <div className="text-sm text-gray-600 space-y-2">
                <div>• Contact form that goes to your CRM instead of email</div>
                <div>• Automated appointment reminders via text/email</div>
                <div>• Simple inventory tracking for your most important products</div>
                <div>• Customer feedback collection and analysis</div>
                <div>• Automated report generation from your existing data</div>
              </div>
            </div>
            
            <p>
              Once you see the value from that first automation, you can gradually 
              build a complete custom solution that grows with your business.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="border-l-4 border-taupe pl-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Software That Fits Your Business
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p className="text-lg">
              Your business is unique. Your software should be too.
            </p>
            <p>
              Stop forcing your processes into generic tools. Build software that works 
              exactly the way your business works, at a price you can afford.
            </p>
            <p className="text-lg font-medium text-blue-lbg">
              Custom solutions for small business budgets.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallBusinesses;
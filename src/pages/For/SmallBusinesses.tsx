import React from "react";
import EarlyContentDisclaimer from "../../components/EarlyContentDisclaimer";
import RelatedForPages from "../../components/RelatedForPages";
import { Contrast, FeatureCard } from "./components";

const SmallBusinesses: React.FC = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl 2xl:max-w-7xl mx-auto">
        <EarlyContentDisclaimer />
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Darklang for Small Businesses
          </h1>
          <div className="w-24 h-1 bg-blue-lbg mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-4xl 2xl:max-w-5xl mx-auto">
            Custom software solutions without the enterprise price tag. Build
            exactly what your business needs.
          </p>
        </div>

        {/* Small Business Pain Points and Darklang Solution */}
        <div className="mb-16">
          <Contrast
            beforeTitle="Software That Doesn't Fit"
            afterTitle="Custom Software, Small Business Budget"
            before={[
              "Generic SaaS tools that almost fit your workflow (but not quite)",
              "WordPress sites that break when you need custom functionality",
              "Custom development quotes that cost more than your annual revenue",
              "Manual processes that eat hours every week but seem too small to automate",
              "Data scattered across spreadsheets, email, and various tools",
            ]}
            after={[
              <>
                <strong>No upfront costs:</strong> Build incrementally, pay only
                for what you use
              </>,
              <>
                <strong>Non-technical friendly:</strong> Business logic in plain
                language
              </>,
              <>
                <strong>Instant deployment:</strong> Changes go live immediately
              </>,
              <>
                <strong>Grows with you:</strong> Start simple, add features as
                you need them
              </>,
            ]}
          />
        </div>

        {/* Perfect For Small Businesses */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Perfect for Businesses That Need:
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-blue-lbg mb-4">
                Custom Business Logic
              </h3>
              <p className="text-gray-700 mb-4">
                Your business has unique rules and processes. Build software
                that matches exactly how you work, not how a generic tool thinks
                you should work.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Examples:</strong> Pricing calculators, inventory rules,
                customer workflows, compliance tracking
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-purple-lbg mb-4">
                Process Automation
              </h3>
              <p className="text-gray-700 mb-4">
                Automate the repetitive tasks that drain your team's time. Focus
                on growing your business, not on manual data entry.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Use cases:</strong> Invoice generation, customer
                onboarding, report automation, data sync between tools
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-mint mb-4">
                Better Than WordPress
              </h3>
              <p className="text-gray-700 mb-4">
                Need more than a static website? Build web applications that
                handle forms, payments, user accounts, and custom functionality.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Perfect for:</strong> Service booking systems, client
                portals, e-commerce with custom rules, membership sites
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-taupe mb-4">
                Data Integration
              </h3>
              <p className="text-gray-700 mb-4">
                Connect all your business tools. Get your CRM talking to your
                accounting software, sync data automatically, generate unified
                reports.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Common need:</strong> Spreadsheet data → web forms →
                automated processing → reports
              </div>
            </div>
          </div>
        </div>

        {/* Common Small Business Applications */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Common Small Business Applications
          </h2>

          <div className="grid gap-5 md:grid-cols-2">
            <FeatureCard
              h="Customer Management"
              tone="blue"
              detail={
                <span className="block">
                  • Custom fields for your specific customer data
                  <br />
                  • Automated email sequences based on your sales process
                  <br />
                  • Integration with your existing tools and spreadsheets
                  <br />• Reports that show the metrics you actually care about
                </span>
              }
            >
              Build a CRM that matches your business exactly. Track customers,
              manage leads, and automate follow-ups, all customized to your
              process.
            </FeatureCard>

            <FeatureCard
              h="Service Booking and Scheduling"
              tone="purple"
              detail={
                <span className="block">
                  • Online booking with your specific service rules
                  <br />
                  • Automated confirmations and reminders
                  <br />
                  • Payment processing integrated with booking
                  <br />• Staff scheduling and resource management
                </span>
              }
            >
              Let customers book appointments online with your custom
              availability rules, pricing, and service options. No more phone
              tag.
            </FeatureCard>

            <FeatureCard
              h="Inventory and Order Management"
              tone="teal"
              detail={
                <span className="block">
                  • Custom product categorization and attributes
                  <br />
                  • Automated reorder points and supplier notifications
                  <br />
                  • Integration with your sales channels
                  <br />• Custom reporting for your business metrics
                </span>
              }
            >
              Track inventory, process orders, and manage suppliers with
              business rules that match your workflow, not a generic template.
            </FeatureCard>
          </div>
        </div>

        {/* Cost Comparison */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Cost Comparison: Traditional vs Darklang
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-rust mb-4">
                Traditional Custom Development
              </h3>
              <div className="bg-rust/5 p-4 rounded text-sm space-y-2">
                <div>• $10,000-50,000 upfront development</div>
                <div>• 3-6 months development time</div>
                <div>• $2,000-5,000/month hosting & maintenance</div>
                <div>• Additional costs for changes and updates</div>
                <div>• Risk of project going over budget</div>
                <div>• Vendor lock-in with development agency</div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-blue-lbg mb-4">
                Darklang Approach
              </h3>
              <div className="bg-mint/8 p-4 rounded text-sm space-y-2">
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
              <strong>The result:</strong> Custom software that would cost
              $50,000+ traditionally can be built incrementally for a fraction
              of the cost.
            </p>
          </div>
        </div>

        {/* Success Stories Pattern */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            How Small Businesses Use Darklang
          </h2>

          <div className="text-gray-700 leading-relaxed space-y-6 pl-1">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-3">
                Local Service Business
              </h3>
              <p className="mb-3">
                Replace phone-based booking with online scheduling. Customers
                book appointments, staff get notifications, payments are
                processed automatically.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Impact:</strong> 40% reduction in administrative time,
                25% increase in bookings, happier customers
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-3">
                E-Commerce with Custom Rules
              </h3>
              <p className="mb-3">
                Sell products with complex pricing rules, bulk discounts, and
                custom shipping calculations that off-the-shelf platforms can't
                handle.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Result:</strong> Exact business logic implementation, no
                workarounds or compromises
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-3">
                Professional Services Automation
              </h3>
              <p className="mb-3">
                Automate client onboarding, project tracking, and invoicing.
                Generate reports for specific client needs and compliance
                requirements.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Benefit:</strong> More time for billable work, fewer
                administrative errors, better client experience
              </div>
            </div>
          </div>
        </div>

        {/* Getting Started */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Start Small, Grow Smart
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-4 pl-1">
            <p>
              You don't need to replace all your systems at once. Start with one
              small process that's causing daily frustration. Automate it with
              Darklang.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-3">
                Suggested First Projects
              </h3>
              <div className="text-sm text-gray-600 space-y-2">
                <div>• Contact form that goes to your CRM instead of email</div>
                <div>• Automated appointment reminders via text/email</div>
                <div>
                  • Simple inventory tracking for your most important products
                </div>
                <div>• Customer feedback collection and analysis</div>
                <div>• Automated report generation from your existing data</div>
              </div>
            </div>

            <p>
              Once you see the value from that first automation, you can
              gradually build a complete custom solution that grows with your
              business.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Software That Fits Your Business
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-4 pl-1">
            <p className="text-lg">
              Your business is unique. Your software should be too.
            </p>
            <p>
              Stop forcing your processes into generic tools. Build software
              that works exactly the way your business works, at a price you can
              afford.
            </p>
            <p className="text-lg font-medium text-blue-lbg">
              Custom solutions for small business budgets.
            </p>
          </div>
        </div>

        {/* Related For Pages Section */}
        <RelatedForPages currentPath="small-businesses" />
      </div>
    </div>
  );
};

export default SmallBusinesses;

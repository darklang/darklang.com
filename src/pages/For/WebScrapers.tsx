import React, { useState, useEffect } from "react";
import EarlyContentDisclaimer from "../../components/EarlyContentDisclaimer";

const WebScrapers: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
  }, []);
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <EarlyContentDisclaimer />
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Darklang for Web Scrapers
          </h1>
          <div className="w-24 h-1 bg-blue-lbg mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            The web is cluttered with ads, trackers, and noise. Extract the
            signal from the chaos.
          </p>
        </div>

        {/* Web Scraping Pain Points */}
        <div className="py-8">
          <div className="relative inline-block mb-6 px-3 py-2">
            {/* L-shaped corner borders with animation */}
            <div
              className="absolute top-0 left-0 h-0.5 bg-rust transition-all duration-700 ease-out"
              style={{ width: isVisible ? "55px" : "0px" }}
            ></div>
            <div
              className="absolute top-0 left-0 w-0.5 bg-rust transition-all duration-700 ease-out"
              style={{ height: isVisible ? "35px" : "0px" }}
            ></div>
            <div
              className="absolute bottom-0 right-0 h-0.5 bg-rust transition-all duration-700 ease-out delay-300"
              style={{ width: isVisible ? "44px" : "0px" }}
            ></div>
            <div
              className="absolute bottom-0 right-0 w-0.5 bg-rust transition-all duration-700 ease-out delay-300"
              style={{ height: isVisible ? "35px" : "0px" }}
            ></div>

            <h2 className="text-2xl font-semibold text-rust px-4 py-2">
              Traditional Scraping Headaches
            </h2>
          </div>
          <div className="text-gray-800 space-y-3 pl-5">
            <div className="flex items-start">
              <span className="text-rust font-bold text-lg mr-3 flex-shrink-0">
                ✕
              </span>
              <p>
                Managing proxies, user agents, and anti-bot detection systems
              </p>
            </div>
            <div className="flex items-start">
              <span className="text-rust font-bold text-lg mr-3 flex-shrink-0">
                ✕
              </span>
              <p>
                Setting up Selenium, ChromeDriver, and browser automation
                infrastructure
              </p>
            </div>
            <div className="flex items-start">
              <span className="text-rust font-bold text-lg mr-3 flex-shrink-0">
                ✕
              </span>
              <p>
                Handling dynamic content, JavaScript rendering, and AJAX
                requests
              </p>
            </div>
            <div className="flex items-start">
              <span className="text-rust font-bold text-lg mr-3 flex-shrink-0">
                ✕
              </span>
              <p>
                Cron jobs, server maintenance, and monitoring failed scraping
                runs
              </p>
            </div>
            <div className="flex items-start">
              <span className="text-rust font-bold text-lg mr-3 flex-shrink-0">
                ✕
              </span>
              <p>
                Rate limiting, retries, and graceful handling of website changes
              </p>
            </div>
          </div>
        </div>

        {/* Darklang Scraping Advantages */}
        <div className="py-8 mb-10">
          <div className="relative inline-block mb-6 px-3 py-2">
            {/* L-shaped corner borders with animation */}
            <div
              className="absolute top-0 left-0 h-0.5 bg-mint transition-all duration-700 ease-out delay-500"
              style={{ width: isVisible ? "55px" : "0px" }}
            ></div>
            <div
              className="absolute top-0 left-0 w-0.5 bg-mint transition-all duration-700 ease-out delay-500"
              style={{ height: isVisible ? "35px" : "0px" }}
            ></div>
            <div
              className="absolute bottom-0 right-0 h-0.5 bg-mint transition-all duration-700 ease-out delay-800"
              style={{ width: isVisible ? "55px" : "0px" }}
            ></div>
            <div
              className="absolute bottom-0 right-0 w-0.5 bg-mint transition-all duration-700 ease-out delay-800"
              style={{ height: isVisible ? "35px" : "0px" }}
            ></div>

            <h2 className="text-2xl font-semibold text-mint px-4 py-2">
              Darklang: Scraping Made Simple
            </h2>
          </div>

          <div className="text-gray-800 space-y-3 pl-5">
            <div className="flex items-start">
              <span className="text-mint font-bold text-lg mr-3 flex-shrink-0">
                ✔
              </span>
              <p>
                <strong>Built-in browser automation:</strong> No ChromeDriver
                setup or maintenance
              </p>
            </div>
            <div className="flex items-start">
              <span className="text-mint font-bold text-lg mr-3 flex-shrink-0">
                ✔
              </span>
              <p>
                <strong>Automatic scheduling:</strong> Cron jobs that actually
                work
              </p>
            </div>
            <div className="flex items-start">
              <span className="text-mint font-bold text-lg mr-3 flex-shrink-0">
                ✔
              </span>
              <p>
                <strong>Built-in data storage:</strong> No database setup for
                scraped data
              </p>
            </div>
            <div className="flex items-start">
              <span className="text-mint font-bold text-lg mr-3 flex-shrink-0">
                ✔
              </span>
              <p>
                <strong>Instant APIs:</strong> Turn scraped data into APIs
                immediately
              </p>
            </div>
          </div>
        </div>

        {/* Perfect For Web Scrapers */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Perfect for People Who:
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-blue-lbg mb-4">
                Clean Up the Web
              </h3>
              <p className="text-gray-700 mb-4">
                Extract clean, useful content from cluttered websites. Remove
                ads, popups, and tracking scripts—get just the information.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Use cases:</strong> News aggregation, product price
                monitoring, research data collection, content curation
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-purple-lbg mb-4">
                Monitor Everything
              </h3>
              <p className="text-gray-700 mb-4">
                Track changes across multiple websites. Get alerts when prices
                drop, new content appears, or important information changes.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Examples:</strong> Stock price alerts, job posting
                notifications, competitor monitoring, news tracking
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-mint mb-4">
                Aggregate Data
              </h3>
              <p className="text-gray-700 mb-4">
                Collect information from multiple sources and combine it into
                useful datasets. Turn scattered web data into structured
                insights.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Pattern:</strong> Scrape multiple sites → normalize data
                → export to CSV/API → analysis/visualization
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-taupe mb-4">
                Build Better UIs
              </h3>
              <p className="text-gray-700 mb-4">
                Create cleaner interfaces for websites that have terrible UX.
                Extract the data and present it in a usable format.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Like:</strong> Userscripts, browser extensions,
                alternative interfaces for popular sites
              </div>
            </div>
          </div>
        </div>

        {/* Scraping Features */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Built-in Scraping Features
          </h2>

          <div className="space-y-8">
            <div className="border-l-4 border-blue-lbg pl-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Browser Automation
              </h3>
              <p className="text-gray-700 mb-4">
                Full browser automation without managing ChromeDriver or
                Selenium. Handle JavaScript-heavy sites, form submissions, and
                dynamic content.
              </p>
              <div className="bg-gray-50 p-4 rounded font-mono text-sm">
                <div>Browser.navigate "https://example.com"</div>
                <div>Browser.click ".load-more-button"</div>
                <div>Browser.waitFor ".content-loaded"</div>
                <div>Browser.extractText ".article-content"</div>
              </div>
            </div>

            <div className="border-l-4 border-purple-lbg pl-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Smart Data Extraction
              </h3>
              <p className="text-gray-700 mb-4">
                Extract structured data from messy HTML. Built-in parsers for
                common patterns like prices, dates, and contact information.
              </p>
              <div className="bg-gray-50 p-4 rounded">
                <div className="text-sm text-gray-600">
                  <strong>Auto-detects:</strong> Product prices, publication
                  dates, email addresses, phone numbers, social media links
                </div>
              </div>
            </div>

            <div className="border-l-4 border-mint pl-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Anti-Bot Evasion
              </h3>
              <p className="text-gray-700 mb-4">
                Built-in strategies for avoiding detection: rotating user
                agents, realistic timing delays, and proxy management.
              </p>
              <div className="bg-gray-50 p-4 rounded">
                <div className="text-sm text-gray-600">
                  <strong>Handles:</strong> Cloudflare protection, rate
                  limiting, CAPTCHAs, and basic bot detection
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Common Scraping Patterns */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Common Web Scraping Patterns
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-6 pl-1">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-lbg mb-3">
                Price Monitoring
              </h3>
              <p className="mb-3">
                Track product prices across multiple e-commerce sites. Get
                notifications when items go on sale or drop below your target
                price.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Workflow:</strong> Daily scrape → price comparison →
                alert if changed → historical tracking
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-lbg mb-3">
                News Aggregation
              </h3>
              <p className="mb-3">
                Collect articles from multiple news sources, remove ads and
                tracking, present in a clean, unified interface.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Features:</strong> Deduplication, content extraction,
                categorization, clean reading experience
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-lbg mb-3">
                Job Board Monitoring
              </h3>
              <p className="mb-3">
                Scrape job postings from multiple sites, filter by your
                criteria, get notifications for relevant opportunities before
                they're buried.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Benefits:</strong> First-mover advantage, custom
                filtering, consolidated view across platforms
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-lbg mb-3">
                Research Data Collection
              </h3>
              <p className="mb-3">
                Gather data for research projects, market analysis, or
                competitive intelligence. Turn unstructured web data into
                analyzable datasets.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Output:</strong> CSV exports, API endpoints, automated
                reports, data visualization
              </div>
            </div>
          </div>
        </div>

        {/* Comparison: Traditional vs Darklang */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Scraping Setup: Traditional vs Darklang
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-rust mb-4">
                Traditional Python/Node.js Scraper
              </h3>
              <div className="bg-rust/5 p-4 rounded text-sm space-y-2">
                <div>• Install BeautifulSoup/Scrapy/Puppeteer</div>
                <div>• Set up virtual environment</div>
                <div>• Configure ChromeDriver or Selenium</div>
                <div>• Handle proxy rotation and user agents</div>
                <div>• Set up database for scraped data</div>
                <div>• Deploy to server with cron jobs</div>
                <div>• Monitor for failures and restarts</div>
                <div>• Handle website structure changes</div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-blue-lbg mb-4">
                Darklang Scraper
              </h3>
              <div className="bg-mint/8 p-4 rounded text-sm space-y-2">
                <div>• Write scraping logic in browser</div>
                <div>• Built-in browser automation</div>
                <div>• Automatic scheduling and retries</div>
                <div>• Database included for scraped data</div>
                <div>• Instant API endpoints for data access</div>
                <div>• Built-in monitoring and error handling</div>
                <div>• Change detection and notifications</div>
                <div>• Focus on extraction logic, not infrastructure</div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded border-l-4 border-blue-lbg">
            <p className="text-gray-700">
              <strong>Time saved:</strong> What takes days to set up
              traditionally can be running in minutes with Darklang.
            </p>
          </div>
        </div>

        {/* Data Processing and APIs */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            From Scraped Data to Useful APIs
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-4 pl-1">
            <p>
              Scraping is just the first step. The real value comes from
              cleaning, processing, and serving that data in useful ways.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-3">
                  Data Cleaning
                </h3>
                <p className="text-sm text-gray-600">
                  Remove HTML tags, normalize formats, deduplicate content,
                  extract structured data from messy text.
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-3">
                  Instant APIs
                </h3>
                <p className="text-sm text-gray-600">
                  Turn scraped data into REST APIs immediately. No server
                  setup—just define endpoints.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-3">
                  Notifications
                </h3>
                <p className="text-sm text-gray-600">
                  Get alerts when interesting data is found: price drops, new
                  job postings, breaking news.
                </p>
              </div>
            </div>

            <p className="mt-4">
              Your scraped data becomes a valuable API that others can use, or a
              notification system that keeps you informed of important changes.
            </p>
          </div>
        </div>

        {/* Ethical Scraping */}
        <div className="bg-yellow-50 rounded-lg p-8 mb-20 border-l-4 border-yellow-500">
          <h2 className="text-2xl font-bold text-yellow-800 mb-4">
            Responsible Scraping
          </h2>
          <div className="text-yellow-700 space-y-3">
            <div className="flex items-start">
              <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <p>Respect robots.txt and website terms of service</p>
            </div>
            <div className="flex items-start">
              <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <p>
                Use reasonable delays between requests to avoid overloading
                servers
              </p>
            </div>
            <div className="flex items-start">
              <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <p>
                Consider reaching out to site owners for API access when
                appropriate
              </p>
            </div>
            <div className="flex items-start">
              <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <p>
                Don't scrape personal or private information without permission
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Extract Signal from the Noise
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-4 pl-1">
            <p className="text-lg">
              The web is full of valuable information buried under ads,
              trackers, and poor design. You have the skills to extract what
              matters.
            </p>
            <p>
              Darklang eliminates the infrastructure headaches so you can focus
              on the interesting part: finding patterns, cleaning data, and
              creating value from the chaos.
            </p>
            <p className="text-lg font-medium text-blue-lbg">
              Turn web data into valuable insights.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebScrapers;

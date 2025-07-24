import React from "react";

const Sharing: React.FC = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Sharing Darklang
          </h1>
          <div className="w-24 h-1 bg-blue-lbg mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            Thanks for being part of our community! Here are resources to help you 
            share your Darklang experience, including logos, naming guidelines, and 
            positioning information.
          </p>
        </div>

        {/* Naming Guidelines */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Naming Guidelines</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              <strong>Official name:</strong> "Darklang" — pronounced "dark-lang"
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">✅ Correct</h3>
                <ul className="space-y-2 text-sm">
                  <li>• "Darklang" (capitalized - proper noun)</li>
                  <li>• One word, no spaces</li>
                  <li>• Lowercase "darklang" only in the logo</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">❌ Incorrect</h3>
                <ul className="space-y-2 text-sm">
                  <li>• "Dark Lang" (two words)</li>
                  <li>• "DarkLang" (capital L)</li>
                  <li>• "DARKLANG" (all caps)</li>
                  <li>• "Dark language"</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Positioning */}
        <div className="bg-purple-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Positioning & Market</h2>
          <div className="space-y-4 text-gray-700">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">✅ We Are</h3>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>"Just Code"</strong> — for engineers writing code</li>
                  <li>• <strong>"Serverless"</strong> — fits the serverless category</li>
                  <li>• <strong>"Deployless"</strong> — our term for <a href="https://blog.darklang.com/how-dark-deploys-code-in-50ms/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">instant deployment</a></li>
                  <li>• A programming language and platform</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">❌ We're Not</h3>
                <ul className="space-y-2 text-sm">
                  <li>• "Low Code" or "No Code"</li>
                  <li>• A visual programming tool</li>
                  <li>• Currently designed for non-programmers</li>
                  <li>• A drag-and-drop builder</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 p-4 bg-purple-100 rounded">
              <p className="text-sm">
                <strong>Key message:</strong> Darklang is designed for engineers to write code, 
                but removes the complexity of traditional backend development infrastructure.
              </p>
            </div>
          </div>
        </div>

        {/* Logos Section */}

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Logo Downloads</h2>
          
          {/* Standard Logos */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Standard Logos</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 border">
                <div className="text-center mb-4">
                  <div className="bg-gray-50 rounded p-2 mb-3 h-24 flex items-center justify-center">
                    <img src="/assets/branding/logo-light@2x.png" alt="Darklang Logo Light" className="max-h-full max-w-full object-contain" />
                  </div>
                  <p className="text-sm text-gray-600">For light backgrounds</p>
                </div>
                <div className="text-center text-sm space-y-1">
                  <div>
                    <a href="/assets/branding/logo-light.svg" target="_blank" className="text-blue-600 hover:underline">SVG</a>
                    <span className="mx-2 text-gray-400">|</span>
                    <a href="/assets/branding/logo-light.png" target="_blank" className="text-blue-600 hover:underline">PNG</a>
                    <span className="mx-2 text-gray-400">|</span>
                    <a href="/assets/branding/logo-light@2x.png" target="_blank" className="text-blue-600 hover:underline">PNG 2x</a>
                    <span className="mx-2 text-gray-400">|</span>
                    <a href="/assets/branding/logo-light@3x.png" target="_blank" className="text-blue-600 hover:underline">PNG 3x</a>
                  </div>
                  <div className="text-xs">
                    <span className="text-gray-500">Transparent:</span>
                    <a href="/assets/branding/logo-light-transparent.svg" target="_blank" className="text-blue-600 hover:underline ml-1">SVG</a>
                    <span className="mx-1 text-gray-400">|</span>
                    <a href="/assets/branding/logo-light-transparent.png" target="_blank" className="text-blue-600 hover:underline">PNG</a>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg shadow-lg p-6">
                <div className="text-center mb-4">
                  <div className="bg-gray-800 rounded p-2 mb-3 h-24 flex items-center justify-center">
                    <img src="/assets/branding/logo-dark@2x.png" alt="Darklang Logo Dark" className="max-h-full max-w-full object-contain" />
                  </div>
                  <p className="text-sm text-gray-300">For dark backgrounds</p>
                </div>
                <div className="text-center text-sm space-y-1">
                  <div>
                    <a href="/assets/branding/logo-dark.svg" target="_blank" className="text-blue-400 hover:underline">SVG</a>
                    <span className="mx-2 text-gray-500">|</span>
                    <a href="/assets/branding/logo-dark.png" target="_blank" className="text-blue-400 hover:underline">PNG</a>
                    <span className="mx-2 text-gray-500">|</span>
                    <a href="/assets/branding/logo-dark@2x.png" target="_blank" className="text-blue-400 hover:underline">PNG 2x</a>
                    <span className="mx-2 text-gray-500">|</span>
                    <a href="/assets/branding/logo-dark@3x.png" target="_blank" className="text-blue-400 hover:underline">PNG 3x</a>
                  </div>
                  <div className="text-xs">
                    <span className="text-gray-400">Transparent:</span>
                    <a href="/assets/branding/logo-dark-transparent.svg" target="_blank" className="text-blue-400 hover:underline ml-1">SVG</a>
                    <span className="mx-1 text-gray-500">|</span>
                    <a href="/assets/branding/logo-dark-transparent.png" target="_blank" className="text-blue-400 hover:underline">PNG</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Wordmarks */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Wordmarks</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 border">
                <div className="text-center mb-4">
                  <div className="bg-gray-50 rounded p-2 mb-3 h-20 flex items-center justify-center">
                    <img src="/assets/branding/wordmark-light@2x.png" alt="Darklang Wordmark Light" className="max-h-full max-w-full object-contain" />
                  </div>
                  <p className="text-sm text-gray-600">For light backgrounds</p>
                </div>
                <div className="text-center text-sm space-y-1">
                  <div>
                    <a href="/assets/branding/wordmark-light.svg" target="_blank" className="text-blue-600 hover:underline">SVG</a>
                    <span className="mx-2 text-gray-400">|</span>
                    <a href="/assets/branding/wordmark-light.png" target="_blank" className="text-blue-600 hover:underline">PNG</a>
                    <span className="mx-2 text-gray-400">|</span>
                    <a href="/assets/branding/wordmark-light@2x.png" target="_blank" className="text-blue-600 hover:underline">PNG 2x</a>
                    <span className="mx-2 text-gray-400">|</span>
                    <a href="/assets/branding/wordmark-light@3x.png" target="_blank" className="text-blue-600 hover:underline">PNG 3x</a>
                  </div>
                  <div className="text-xs">
                    <span className="text-gray-500">Transparent:</span>
                    <a href="/assets/branding/wordmark-light-transparent.svg" target="_blank" className="text-blue-600 hover:underline ml-1">SVG</a>
                    <span className="mx-1 text-gray-400">|</span>
                    <a href="/assets/branding/wordmark-light-transparent.png" target="_blank" className="text-blue-600 hover:underline">PNG</a>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg shadow-lg p-6">
                <div className="text-center mb-4">
                  <div className="bg-gray-800 rounded p-2 mb-3 h-20 flex items-center justify-center">
                    <img src="/assets/branding/wordmark-dark@2x.png" alt="Darklang Wordmark Dark" className="max-h-full max-w-full object-contain" />
                  </div>
                  <p className="text-sm text-gray-300">For dark backgrounds</p>
                </div>
                <div className="text-center text-sm space-y-1">
                  <div>
                    <a href="/assets/branding/wordmark-dark.svg" target="_blank" className="text-blue-400 hover:underline">SVG</a>
                    <span className="mx-2 text-gray-500">|</span>
                    <a href="/assets/branding/wordmark-dark.png" target="_blank" className="text-blue-400 hover:underline">PNG</a>
                    <span className="mx-2 text-gray-500">|</span>
                    <a href="/assets/branding/wordmark-dark@2x.png" target="_blank" className="text-blue-400 hover:underline">PNG 2x</a>
                    <span className="mx-2 text-gray-500">|</span>
                    <a href="/assets/branding/wordmark-dark@3x.png" target="_blank" className="text-blue-400 hover:underline">PNG 3x</a>
                  </div>
                  <div className="text-xs">
                    <span className="text-gray-400">Transparent:</span>
                    <a href="/assets/branding/wordmark-dark-transparent.svg" target="_blank" className="text-blue-400 hover:underline ml-1">SVG</a>
                    <span className="mx-1 text-gray-500">|</span>
                    <a href="/assets/branding/wordmark-dark-transparent.png" target="_blank" className="text-blue-400 hover:underline">PNG</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Brand Colors */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Brand Colors</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Light Backgrounds</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Black</span>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded" style={{backgroundColor: '#2F2F2F'}}></div>
                    <span className="ml-3 font-mono text-sm">#2F2F2F</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">White</span>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded border" style={{backgroundColor: '#F8F8F8'}}></div>
                    <span className="ml-3 font-mono text-sm">#F8F8F8</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">Purple</span>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded" style={{backgroundColor: '#955B9F'}}></div>
                    <span className="ml-3 font-mono text-sm">#955B9F</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">Blue</span>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded" style={{backgroundColor: '#747AB9'}}></div>
                    <span className="ml-3 font-mono text-sm">#747AB9</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Dark Backgrounds</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-white">Black</span>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded" style={{backgroundColor: '#2F2F2F'}}></div>
                    <span className="ml-3 font-mono text-sm text-white">#2F2F2F</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-white">White</span>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded border" style={{backgroundColor: '#F8F8F8'}}></div>
                    <span className="ml-3 font-mono text-sm text-white">#F8F8F8</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-white">Purple</span>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded" style={{backgroundColor: '#8F5EA1'}}></div>
                    <span className="ml-3 font-mono text-sm text-white">#8F5EA1</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-white">Blue</span>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded" style={{backgroundColor: '#6D74C5'}}></div>
                    <span className="ml-3 font-mono text-sm text-white">#6D74C5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Usage Guidelines */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Usage Guidelines</h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">✅ Please Do</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Use official logos and colors</li>
                <li>• Maintain proper spacing around logos</li>
                <li>• Choose appropriate contrast (light/dark versions)</li>
                <li>• Link back to darklang.com when possible</li>
                <li>• Use high-resolution versions for print</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">❌ Please Don't</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Modify, stretch, or distort the logos</li>
                <li>• Change the colors or add effects</li>
                <li>• Use low-resolution versions for large displays</li>
                <li>• Place logos on backgrounds with poor contrast</li>
                <li>• Use the logos in a way that implies endorsement</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sharing;
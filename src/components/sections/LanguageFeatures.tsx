import React, { useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
import CodeDisplay from '../ui/CodeDisplay';
import hljs from 'highlight.js/lib/core';
import fsharp from 'highlight.js/lib/languages/fsharp';

// Register the F# language with highlight.js
hljs.registerLanguage('fsharp', fsharp);

// Component Types
interface CodeTabProps {
  isActive: boolean;
  label: string;
  onClick: () => void;
}

interface FeatureItemProps {
  children: React.ReactNode;
}

// Tab data structure
interface TabData {
  id: string;
  label: string;
  code: string;
}

// Sub-Components
const CodeTab: React.FC<CodeTabProps> = ({ isActive, label, onClick }) => (
  <button
    className={`px-5 2xl:px-10 py-3 text-sm text-purple-lbg ${isActive ? 'bg-purple-lbg/10' : 'hover:text-black-custom'
      }`}
    onClick={onClick}
  >
    {label}
  </button>
);

const FeatureItem: React.FC<FeatureItemProps> = ({ children }) => (
  <div className="flex items-start mb-3">
    <div className="text-purple-lbg mr-3">
      <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
        <path
          d="M20.25 23.3438H6.75C5.92949 23.3438 5.14258 23.0178 4.56239 22.4376C3.9822 21.8574 3.65625 21.0705 3.65625 20.25V6.75C3.65625 5.92949 3.9822 5.14258 4.56239 4.56239C5.14258 3.9822 5.92949 3.65625 6.75 3.65625H16.7175C16.9413 3.65625 17.1559 3.74514 17.3141 3.90338C17.4724 4.06161 17.5612 4.27622 17.5612 4.5C17.5612 4.72378 17.4724 4.93839 17.3141 5.09662C17.1559 5.25486 16.9413 5.34375 16.7175 5.34375H6.75C6.37704 5.34375 6.01935 5.49191 5.75563 5.75563C5.49191 6.01935 5.34375 6.37704 5.34375 6.75V20.25C5.34375 20.623 5.49191 20.9806 5.75563 21.2444C6.01935 21.5081 6.37704 21.6562 6.75 21.6562H20.25C20.623 21.6562 20.9806 21.5081 21.2444 21.2444C21.5081 20.9806 21.6562 20.623 21.6562 20.25V11.5763C21.6562 11.3525 21.7451 11.1379 21.9034 10.9796C22.0616 10.8214 22.2762 10.7325 22.5 10.7325C22.7238 10.7325 22.9384 10.8214 23.0966 10.9796C23.2549 11.1379 23.3438 11.3525 23.3438 11.5763V20.25C23.3438 21.0705 23.0178 21.8574 22.4376 22.4376C21.8574 23.0178 21.0705 23.3438 20.25 23.3438Z"
          fill="#95589F"
        />
        <path
          d="M11.8128 17.1563C11.5958 17.1397 11.3939 17.0387 11.2503 16.875L7.87535 13.5C7.80015 13.3426 7.77562 13.1657 7.80512 12.9937C7.83463 12.8217 7.91672 12.6631 8.0401 12.5398C8.16348 12.4164 8.32207 12.3343 8.49404 12.3048C8.66601 12.2753 8.8429 12.2998 9.00035 12.375L11.7791 15.1538L21.3753 5.62501C21.5328 5.54981 21.7097 5.52528 21.8817 5.55478C22.0536 5.58429 22.2122 5.66638 22.3356 5.78976C22.459 5.91314 22.5411 6.07173 22.5706 6.2437C22.6001 6.41567 22.5755 6.59256 22.5003 6.75001L12.3753 16.875C12.2318 17.0387 12.0299 17.1397 11.8128 17.1563Z"
          fill="#95589F"
        />
      </svg>
    </div>
    <div>{children}</div>
  </div>
);

// Main Component
const LanguageFeatures: React.FC = () => {
  // Tab data
  const tabs: TabData[] = [
    {
      id: 'functional',
      label: 'Functional Style',
      code: `// Simple types
type UserAction = 
| Click of String
| Type of String
| Submit

// Match patterns
let handleAction (action:UserAction) : String = 
  match action with
  | Click button -> $"Button '{button}' clicked."
  | Type input -> $"User typed: '{input}'"
  | Submit -> "Form submitted!"

let actions = [Click "Login"; Type "Hello"; Submit]
// First-class functions
let logs = actions |> Stdlib.List.map handleAction
// Immutable and composable
logs |> List.iter printLine`,
    },
    {
      id: 'records',
      label: 'Records & Enums',
      code: `// Record
type Url = {
  scheme : HttpScheme
  domain : String
  port : UInt16
  path : String
  query : Option<String>
}

// Enum (aka Variant, Sum Type, or Abstract Data Types)
type UrlError =
| InvalidScheme(String)
| EmptyDomain
| InvalidPort(Int64)
| Unparseable(msg:String, context:String)

// Aliases are just shorthands

type UrlParseResult = Result<Url, UrlError>`,
    },
    {
      id: 'option',
      label: 'Option & Result types',
      code: `// Option type instead of null
type Option<'v> =
| Some of 'v
| None

let findUser (users: List<User>) (id: int) : Option<User> =
  users |> List.tryFind (fun user → user.Id = id)

// Result type instead of exceptions
type Result<'Ok, 'Err> =
| Ok of 'Ok
| Error of 'Err

let findUser
(users: List<User>)
(id: int)
: Result<User, Error> =
  let user = users |> List.tryFind (fun user → user.Id = id)
  match user with
  | Some user → Ok user
  | None → Error NotFound`,
    },
    {
      id: 'unicode',
      label: 'Unicode-First',
      code: `// All characters in Darklang represent Extended Grapheme
// Clusters.

// Characters represent what you see on screen
String.length "hello" // 5
String.length "👨‍👩‍👧‍👦" // 1`,
    },
  ];

  // Feature items data
  const features = [
    'Built-in immutability and strong type system',
    'Garbage-collected',
    'Unicode-first',
    'Records and Enums for straightforward data modeling',
    'Option and Result types keep errors explicit',
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id);

  // Get current tab code
  const getCurrentTabCode = () => {
    const tab = tabs.find((tab) => tab.id === activeTab);
    return tab ? tab.code : '';
  };

  return (
    <section className="py-20">
      <div className="max-w-7xl 2xl:max-w-[100rem] mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left side - static content */}
          <div>
            <SectionTitle subtitle="Language">
              Functional, Composable, and Fun to use
            </SectionTitle>

            <p className="text-lg mb-8 text-dark">
              Darklang is a statically-typed functional language built for
              simplicity and composability. No null, no unexpected exceptions
              —just predictable code that's easy to write, read, and maintain.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <FeatureItem key={index}>
                  <span className="font-medium">{feature}</span>
                </FeatureItem>
              ))}
            </div>
          </div>

          {/* Right side - tabbed content */}
          <div className="pt-30">
            <div className="bg-white rounded-3xl shadow-sm overflow-hidden border border-gray-200">
              {/* Tabs navigation */}
              <div className="flex overflow-x-auto justify-between border-b border-gray-200">
                {tabs.map((tab) => (
                  <CodeTab
                    key={tab.id}
                    isActive={activeTab === tab.id}
                    label={tab.label}
                    onClick={() => setActiveTab(tab.id)}
                  />
                ))}
              </div>

              {/* Code display area */}
              <div
                className="px-4 md:px-8 py-10 font-mono text-xs md:text-sm overflow-x-auto bg-white"
                style={{ minHeight: '250px' }}
              >
                <div className="text-gray-800">
                  <CodeDisplay
                    code={getCurrentTabCode()}
                    language="fsharp"
                    showLineNumbers={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LanguageFeatures;

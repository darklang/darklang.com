/**
 * FeatureIcons
 * Icons for feature cards and other UI elements
 */

import React from "react";

interface IconProps {
  className?: string;
}

export const HttpIcon: React.FC<IconProps> = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`w-5 h-5 text-blue-600`}
  >
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </svg>
);

export const WorkerIcon: React.FC<IconProps> = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`w-5 h-5 text-orange-600`}
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="8.5" cy="7" r="4" />
    <path d="M20 8v6" />
    <path d="M23 11h-6" />
  </svg>
);

export const CronIcon: React.FC<IconProps> = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`w-5 h-5 text-orange-600`}
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

export const FnIcon: React.FC<IconProps> = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#95589f"
    height="800px"
    width="800px"
    id="Layer_1"
    data-name="Layer 1"
    viewBox="0 0 16 16"
  >
    <path d="M14,12.64286H12.42783L11.53,11.35963l-.92255,1.28323H9.06694l1.658-2.1458L9.09321,8.35714h1.57185l.88315,1.25743.888-1.25743h1.54526L12.34582,10.468ZM9.54391,4.66728h-.233a3.14114,3.14114,0,0,0-.3941-.1A2.45549,2.45549,0,0,0,8.43425,4.517a1.32065,1.32065,0,0,0-.83205.24136,1.33374,1.33374,0,0,0-.40519.895l-.12838.93686H8.91525V7.87217H6.81193l-.376,2.46227a3.57768,3.57768,0,0,1-.462,1.35663,2.58275,2.58275,0,0,1-.78363.80807,3.01506,3.01506,0,0,1-.93874.38729A4.82252,4.82252,0,0,1,3.18422,13q-.27486,0-.6288-.0301A3.52864,3.52864,0,0,1,2,12.89211v-1.815h.11988a.56039.56039,0,0,0,.42384.24432,2.53806,2.53806,0,0,0,.50015.05111,1.30416,1.30416,0,0,0,.8978-.28905,1.584,1.584,0,0,0,.42384-.98524l.32972-2.226H3.25732V6.59022H5.04953l.17882-1.16181a2.9424,2.9424,0,0,1,.44376-1.2449,2.5157,2.5157,0,0,1,.75994-.73361,2.64333,2.64333,0,0,1,.94035-.35569A5.61075,5.61075,0,0,1,8.35686,3q.294,0,.588.02488.294.0254.59907.07569Z" />
  </svg>
);

export const CliIcon: React.FC<IconProps> = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`w-5 h-5 text-blue-600`}
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

export const MiscIcon: React.FC<IconProps> = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`w-5 h-5 text-gray-600`}
  >
    <circle cx="12" cy="12" r="1" />
    <circle cx="19" cy="12" r="1" />
    <circle cx="5" cy="12" r="1" />
  </svg>
);

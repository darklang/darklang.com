import React, { useState, useEffect } from "react";

const BookIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M41.5586 3C40.7386 3 40.5586 3.81599 40.5586 4.63599V5.5H15.5586V4.63599C15.5586 3.81599 15.3786 3.13599 14.5586 3.13599C13.7386 3.13599 13.5586 3.81599 13.5586 4.63599V9C13.5586 9.82 13.7386 10.136 14.5586 10.136C15.3786 10.136 15.5586 9.45599 15.5586 8.63599V7.5H40.5586V8.63599C40.5586 9.45599 40.7386 10 41.5586 10C42.3786 10 42.5586 9.82 42.5586 9V4.63599C42.5586 3.81599 42.3786 3 41.5586 3ZM10.0586 16.136C10.8786 16.136 11.5586 15.82 11.5586 15C11.5586 14.18 10.8786 14 10.0586 14H6.05861C5.23861 14 4.55861 14.18 4.55861 15C4.55861 15.82 5.23861 16.136 6.05861 16.136L7.05861 16V41.136H6.05861C5.23861 41.136 4.55861 41.18 4.55861 42C4.55861 42.82 5.23861 43 6.05861 43H10.0586C10.8786 43 11.5586 42.82 11.5586 42C11.5586 41.18 10.8786 41.136 10.0586 41.136H9.05861V16.136H10.0586ZM38.9206 16L29.5806 12.36C27.8606 11.7 27.6206 11.016 25.9006 11.676L16.5606 15.316C14.0406 16.296 12.5006 16.896 12.5006 18.616V38.616C12.5006 40.336 14.0206 40.936 16.5606 41.916L25.9006 45.556C26.7606 45.896 27.3206 46.116 28.0006 46.116C28.6806 46.116 29.2606 45.896 30.1006 45.556L39.4406 41.916C41.9606 40.936 43.5006 40.336 43.5006 38.616V19.156C43.5006 17.448 41.4286 16.968 38.9206 16ZM38.9206 16L38.9406 16.736L38.4006 18.136C38.6499 18.2373 38.8966 18.334 39.1406 18.426L40.0006 19.5C39.6206 19.66 40.4986 19.34 40.0586 19.5L30.5586 24C30.0986 24.18 28.1606 23.116 28.0406 23.116C27.9206 23.116 27.4806 22.956 27.0206 22.776L24.4806 21.776L35.5806 17.016L38.3806 18.116L38.9206 16.716V16ZM26.5006 13.5L17.5006 17.5C17.0606 17.66 16.3806 17.84 16.0006 18C16.1739 18.0707 16.7939 18.7967 16.9806 18.866L17.7206 19.156L21.0606 21L26.5586 18.426L32.0586 16L29.0806 14.496C28.6206 14.316 27.6206 13.5 27.5006 13.5C27.3806 13.5 26.9606 13.32 26.5006 13.5ZM15.5586 40L27.0586 44L27.0406 25.776C26.9492 25.7392 26.3765 25.7059 26.2826 25.676C26.1866 25.644 26.0793 25.604 25.9606 25.556L22.5606 24.236V26.616C22.5606 27.436 21.8806 28.116 21.0606 28.116C20.2406 28.116 19.5606 27.436 19.5606 26.616V23.076L16.6206 21.936C16.2406 21.796 14.3986 20.64 14.0586 20.5V30V37.72C14.4786 37.94 14.6986 39.66 15.5586 40ZM38.9406 40.5C39.7806 40.18 42.1386 39.24 42.5586 39L42.0586 21C41.7186 21.14 39.8806 21.796 39.5006 21.936L30.1606 25.576C30.0306 25.636 29.9166 25.672 29.8046 25.71C29.7246 25.7367 29.1433 25.7653 29.0606 25.796L29.0586 44L38.9406 40.5Z"
      fill="#676767"
    />
  </svg>
);

const PackageSearchIcon = ({
  className = "w-6 h-6",
}: {
  className?: string;
}) => (
  <svg className={className} viewBox="0 0 48 48" fill="none">
    <path
      d="M22 44C20.364 44 18.8 43.34 15.674 42.02C7.892 38.732 4 37.086 4 34.32V14M22 44V22.71M22 44C22.68 44 23.292 43.886 24 43.656M40 14V23M10 24L14 26M32 8L12 18M40.264 40.318L44 44M14.652 19.382L8.81 16.556C5.604 15.004 4 14.228 4 13C4 11.772 5.604 10.996 8.81 9.444L14.65 6.618C18.26 4.872 20.06 4 22 4C23.94 4 25.742 4.872 29.348 6.618L35.19 9.444C38.396 10.996 40 11.772 40 13C40 14.228 38.396 15.004 35.19 16.556L29.35 19.382C25.74 21.128 23.94 22 22 22C20.06 22 18.258 21.128 14.652 19.382ZM42.414 35.192C42.4132 36.1375 42.2262 37.0736 41.8636 37.9469C41.5011 38.8201 40.9701 39.6134 40.3009 40.2814C39.6318 40.9494 38.8376 41.4791 37.9638 41.8402C37.0899 42.2013 36.1535 42.3868 35.208 42.386C34.2623 42.3871 33.3257 42.2018 32.4516 41.8408C31.5775 41.4798 30.7831 40.9502 30.1138 40.2821C29.4444 39.6141 28.9132 38.8207 28.5506 37.9473C28.1879 37.074 28.0008 36.1377 28 35.192C28.001 34.2465 28.1883 33.3104 28.5511 32.4373C28.9139 31.5641 29.4452 30.771 30.1145 30.1032C30.7838 29.4353 31.5781 28.9059 32.4521 28.545C33.326 28.1841 34.2625 27.9989 35.208 28C37.1172 27.9984 38.9489 28.7552 40.3002 30.1039C41.6516 31.4526 42.4119 33.2828 42.414 35.192Z"
      stroke="#676767"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const UploadIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 38 41" fill="none">
    <path
      d="M21.5 39.4168C20.0344 39.4168 18.6333 38.8256 15.833 37.6431C8.86158 34.6976 5.375 33.223 5.375 30.7452V12.5418M21.5 39.4168C22.9656 39.4168 24.3667 38.8256 27.167 37.6431C34.1384 34.6976 37.625 33.223 37.625 30.7452V12.5418M21.5 39.4168V20.3445M10.75 21.5002L14.3333 23.2918M30.4583 7.16683L12.5417 16.1252M14.9174 17.3632L9.68396 14.8316C6.81192 13.4412 5.375 12.7461 5.375 11.646C5.375 10.5459 6.81192 9.85075 9.68396 8.46041L14.9156 5.92879C18.1496 4.36466 19.7621 3.5835 21.5 3.5835C23.2379 3.5835 24.8522 4.36466 28.0826 5.92879L33.316 8.46041C36.1881 9.85075 37.625 10.5459 37.625 11.646C37.625 12.7461 36.1881 13.4412 33.316 14.8316L28.0844 17.3632C24.8504 18.9273 23.2379 19.7085 21.5 19.7085C19.7621 19.7085 18.1478 18.9273 14.9174 17.3632Z"
      stroke="#676767"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ShareIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none">
    <path
      d="M15 15V35L31 42L47 35V15"
      stroke="#676767"
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 15L31 22L47 15"
      stroke="#676767"
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M23 11.5L39 18.562V25"
      stroke="#676767"
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 15L31 8L47 15M3 27.304L3.094 27.348L11 31M4.412 20.956L11 24M5.73 14.566L11 17M31 22V42"
      stroke="#676767"
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PlusIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none">
    <path
      d="M22 44C20.364 44 18.8 43.34 15.674 42.02C7.892 38.732 4 37.086 4 34.32V14M22 44V22.71M22 44C23.45 44 24.586 43.48 27 42.446M40 14V22M30 35H44M37 42V28M10 24L14 26M32 8L12 18M14.652 19.382L8.81 16.556C5.604 15.004 4 14.228 4 13C4 11.772 5.604 10.996 8.81 9.444L14.65 6.618C18.26 4.872 20.06 4 22 4C23.94 4 25.742 4.872 29.348 6.618L35.19 9.444C38.396 10.996 40 11.772 40 13C40 14.228 38.396 15.004 35.19 16.556L29.35 19.382C25.74 21.128 23.94 22 22 22C20.06 22 18.258 21.128 14.652 19.382Z"
      stroke="#676767"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const RefreshIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none">
    <path
      d="M22 44C20.364 44 18.8 43.34 15.674 42.02C7.892 38.732 4 37.086 4 34.32V14M22 44V22.71M22 44C22.68 44 23.292 43.886 24 43.656M40 14V23M36 36L37.812 34.19M10 24L14 26M32 8L12 18M44 36C44 33.8783 43.1571 31.8434 41.6569 30.3431C40.1566 28.8429 38.1217 28 36 28C33.8783 28 31.8434 28.8429 30.3431 30.3431C28.8429 31.8434 28 33.8783 28 36C28 38.1217 28.8429 40.1566 30.3431 41.6569C31.8434 43.1571 33.8783 44 36 44C38.1217 44 40.1566 43.1571 41.6569 41.6569C43.1571 40.1566 44 38.1217 44 36ZM14.652 19.382L8.81 16.556C5.604 15.004 4 14.228 4 13C4 11.772 5.604 10.996 8.81 9.444L14.65 6.618C18.26 4.872 20.06 4 22 4C23.94 4 25.742 4.872 29.348 6.618L35.19 9.444C38.396 10.996 40 11.772 40 13C40 14.228 38.396 15.004 35.19 16.556L29.35 19.382C25.74 21.128 23.94 22 22 22C20.06 22 18.258 21.128 14.652 19.382Z"
      stroke="#676767"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface ActionIcon {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  angle: number;
  description: string;
}

const Header: React.FC = () => {
  const actions: ActionIcon[] = [
    {
      name: "learn",
      icon: BookIcon,
      angle: 170,
      description: "Learn about packages",
    },
    {
      name: "search",
      icon: PackageSearchIcon,
      angle: 145,
      description: "Search for packages",
    },
    {
      name: "create",
      icon: PlusIcon,
      angle: 110,
      description: "Create new packages",
    },
    {
      name: "update",
      icon: RefreshIcon,
      angle: 70,
      description: "Update existing packages",
    },
    {
      name: "publish",
      icon: UploadIcon,
      angle: 35,
      description: "Publish your packages",
    },
    {
      name: "share",
      icon: ShareIcon,
      angle: 10,
      description: "Share packages with others",
    },
  ];

  // Animation effect for sequential icon appearance
  const [visibleIcons, setVisibleIcons] = useState<number>(0);
  useEffect(() => {
    const timer = setTimeout(
      () => {
        if (visibleIcons < actions.length) {
          setVisibleIcons(prev => prev + 1);
        }
      },
      visibleIcons === 0 ? 200 : 300,
    );

    return () => clearTimeout(timer);
  }, [visibleIcons, actions.length]);

  const getIconPosition = (angle: number) => {
    // Convert angle to radians
    const radian = (angle * Math.PI) / 180;
    // Position icons on the semicircle curve
    const x = Math.cos(radian);
    const y = Math.sin(radian);
    return {
      left: `calc(50% + ${x * 45}%)`,
      top: `calc(90% - ${y * 90}%)`,
    };
  };

  return (
    <div className="relative pt-16">
      {/* Half circle container */}
      <div className="relative w-80 h-48 sm:w-96 sm:h-56 md:w-[500px] md:h-68 lg:w-[650px] lg:h-80 xl:w-[680px] xl:h-88 mx-auto">
        <svg
          className="hidden md:block absolute bottom-2 left-0 w-full h-full pointer-events-none"
          viewBox="0 0 100 50"
          preserveAspectRatio="none"
        >
          <path
            d="M 5 50 A 45 45 0 0 1 95 50"
            fill="none"
            stroke="#494848"
            strokeWidth="2"
            strokeDasharray="15"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <img
            src="/assets/logo-dark-transparent.png"
            alt="Darklang Logo"
            className="w-30 h-30 mb-4"
          />
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <h1 className="text-xl md:text-4xl font-semibold text-white-custom whitespace-nowrap tracking-wider">
            Darklang Packages
          </h1>
        </div>

        {/* Package Action icons positioned along the curve */}
        {actions.map((action, index) => {
          const IconComponent = action.icon;
          const position = getIconPosition(action.angle);
          const isLeftSide = action.angle > 90;
          const isVisible = index < visibleIcons;

          return (
            <div
              key={action.name}
              className={`pl-12 hidden md:block absolute transform -translate-x-1/2 -translate-y-1/2 group transition-all duration-500 ease-out ${
                isVisible
                  ? "opacity-100 scale-100 translate-y-0"
                  : "opacity-0 scale-75 translate-y-4"
              }`}
              style={{
                ...position,
                transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
              }}
              title={action.description}
            >
              <div className="flex items-center justify-center">
                <div className="relative flex items-center">
                  <div className="relative">
                    <IconComponent
                      className={`w-12 h-12 text-gray-light group-hover:text-white-custom transition-all duration-300 ${
                        isVisible ? "transform-none" : "scale-110"
                      }`}
                    />
                  </div>

                  {/* Text label on the left for left-side icons */}
                  {isLeftSide && (
                    <span
                      className={`text-xl text-[#676767] font-medium mr-3 whitespace-nowrap transition-all duration-500 ${
                        isVisible
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 -translate-x-2"
                      }`}
                    >
                      {action.name}
                    </span>
                  )}

                  {/* Text label on the right for right-side icons */}
                  {!isLeftSide && (
                    <span
                      className={`text-xl text-[#676767] font-medium ml-3 whitespace-nowrap transition-all duration-500 ${
                        isVisible
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 translate-x-2"
                      }`}
                    >
                      {action.name}
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Header;

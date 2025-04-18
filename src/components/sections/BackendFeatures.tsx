import React, { useState } from "react";
import SectionTitle from "../ui/SectionTitle";
import CodeDisplay from "../ui/CodeDisplay";

interface FeatureButtonProps {
  icon: any; // CLEANUP: Define a more specific type for the icon
  isMonoFont?: boolean;
  label: string;
  isActive: boolean;
  hasDropdown?: boolean;
  onClick: () => void;
  subOptions?: { label: string; value: string }[];
  onSubOptionClick?: (value: string) => void;
}

const FeatureButton: React.FC<FeatureButtonProps> = ({
  icon,
  isMonoFont = false,
  label,
  isActive,
  hasDropdown = false,
  onClick,
  subOptions = [],
  onSubOptionClick,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleClick = () => {
    if (hasDropdown) {
      setShowDropdown(!showDropdown);
    } else {
      onClick();
    }
  };

  return (
    <div className="relative">
      <div
        className={`flex items-center p-3 rounded-lg border cursor-pointer
                 ${
                   isActive
                     ? "bg-purple-50 border-purple-200 shadow-sm"
                     : "bg-white border-gray-200 shadow-sm"
                 }`}
        onClick={handleClick}
      >
        <span
          className={`text-purple-lbg mr-2 ${isMonoFont ? "font-mono" : ""}`}
        >
          {icon}
        </span>
        <span className="font-medium">{label}</span>
        {hasDropdown && <span className="ml-1 text-gray-500">▾</span>}
      </div>

      {showDropdown && hasDropdown && (
        <div className="absolute z-10 mt-1 bg-white border border-gray-200 rounded-md shadow-lg w-full">
          {subOptions.map(option => (
            <div
              key={option.value}
              className="px-3 py-2 hover:bg-purple-50 cursor-pointer text-sm"
              onClick={() => {
                if (onSubOptionClick) {
                  onSubOptionClick(option.value);
                  setShowDropdown(false);
                }
              }}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Code examples for each feature
const codeExamples = {
  httpHandlerGET: `[<HttpHandler("GET", "/products")>]
let _handler _req =
  let products = Stdlib.DB.getAll ProductsDB
  
  let body = 
    products
    |> Builtin.jsonSerialize
    |> Stdlib.String.toBytes
  
  Stdlib.Http.responseWithHeaders 
    body 
    200L 
    [("Content-Type", "application/json")]`,

  httpHandlerPOST: `[<HttpHandler("POST", "/products")>]
let _handler req =
  // Parse the request body
  let body = 
    req.body
    |> Stdlib.String.fromBytes
    |> Builtin.jsonDeserialize<{
        name: String
        price: Float
        description: String
        category: String
      }>
  
  // Create a new product
  let newProduct = {
    id = Stdlib.Uuid.generate()
    name = body.name
    price = body.price
    description = body.description
    category = body.category
    createdAt = Stdlib.Date.now()
    indexed = false
  }
  
  // Save to database using the UUID as key
  Stdlib.DB.set newProduct newProduct.id ProductsDB
  
  // Emit product to background worker
  emit { productId = newProduct.id } "product-indexer"
  
  // Return the created product
  let responseBody = 
    newProduct
    |> Builtin.jsonSerialize
    |> Stdlib.String.toBytes
  
  Stdlib.Http.responseWithHeaders 
    responseBody 
    201L 
    [("Content-Type", "application/json")]`,

  httpHandlerDELETE: `[<HttpHandler("DELETE", "/products/:id")>]
let _handler req =
  let productId = req.pathParams["id"] |> Stdlib.Uuid.parse |> Builtin.unwrap
  
  match Stdlib.DB.get productId ProductsDB with
  | Some product -> 
    Stdlib.DB.delete productId ProductsDB
    
    Builtin.printline $"Product {productId} deleted"
    
    Stdlib.Http.response 
      (Stdlib.String.toBytes "")
      204L
        
  | None -> 
    // Product not found    
    Stdlib.Http.responseWithHeaders 
      Stdlib.String.toBytes "Product not found"
      404L 
      [("Content-Type", "application/json")]`,

  dataStores: `// Define our product type
type Product = {
  id: Stdlib.Uuid.UUID
  name: String
  price: Float
  description: String
  category: String
  createdAt: Date
  indexed: Bool
}

// Create the database
[<DB>]
type ProductsDB = Product`,

  scheduledJobs: `[<Cron("daily-report", "Every Day")>]
let _handler () =
  // Count total products
  let products = Stdlib.DB.getAll ProductsDB
  let totalProducts = Stdlib.List.length products
  
  // Send email report
  Stdlib.Email.send {
    to = "admin@example.com"
    subject = "Daily Product Report"
    body = $"Total Products: {totalProducts}"
  }
  
  Builtin.log "Daily report sent successfully"`,

  backgroundWorkers: `// Define a worker to process products asynchronously
[<Worker("product-indexer")>]
let _handler =
  // Access the event data (comes from emit)
  let productId = event.productId
  
  // Get the product from database
  match Stdlib.DB.get productId ProductsDB with
  | Some product ->
      // Log start of processing
      Builtin.log $"Processing product {product.id}: {product.name}"
      
      // Update the product status
      let updatedProduct = { product with indexed = true }
      Stdlib.DB.set updatedProduct product.id ProductsDB
      
      // Log completion
      Builtin.log $"Product {product.id} marked as indexed"
      
  | None ->
      Builtin.log $"Product {productId} not found"
`,
};

const BackendFeatures: React.FC = () => {
  const [selectedFeature, setSelectedFeature] =
    useState<keyof typeof codeExamples>("httpHandlerGET");

  // HTTP handler dropdown options
  const httpHandlerOptions = [
    { label: "GET /products", value: "httpHandlerGET" },
    { label: "POST /products", value: "httpHandlerPOST" },
    { label: "DELETE /products/:id", value: "httpHandlerDELETE" },
  ];

  // Get the code for the currently selected feature
  const currentCode = codeExamples[selectedFeature];

  return (
    <section className="w-full bg-white py-20 md:py-32">
      <div className="max-w-7xl 2xl:max-w-[100rem] mx-auto px-4">
        <div className="mb-8">
          <SectionTitle subtitle="Darklang Cloud">
            Build a complete backend with Darklang
          </SectionTitle>

          <p className="text-lg md:text-xl max-w-6xl text-dark">
            Darklang lets you easily develop backend cloud applications. You can
            build tiny applications to connect two services, or large scale
            applications with tens of thousands of users. Code is written in
            collaboration with AI and is instantly and safely deployed on our
            hosted platform or yours, so you can focus on writing code while we
            handle the rest
          </p>

          <p className="text-xl mt-8 text-black-custom">
            You can build any backend that need:
          </p>
        </div>

        <div>
          <div className="flex flex-wrap gap-4 mb-8 max-w-5xl justify-center mx-auto">
            <FeatureButton
              icon="://"
              isMonoFont={true}
              label="Http Handler"
              isActive={
                selectedFeature === "httpHandlerGET" ||
                selectedFeature === "httpHandlerPOST" ||
                selectedFeature === "httpHandlerDELETE"
              }
              hasDropdown={true}
              onClick={() => setSelectedFeature("httpHandlerGET")}
              subOptions={httpHandlerOptions}
              onSubOptionClick={value =>
                setSelectedFeature(value as keyof typeof codeExamples)
              }
            />

            <FeatureButton
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <path
                    d="M5.83301 14V21C5.83301 21 5.83301 24.5 13.9997 24.5C22.1663 24.5 22.1663 21 22.1663 21V14"
                    stroke="#755580"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M5.83301 7V14C5.83301 14 5.83301 17.5 13.9997 17.5C22.1663 17.5 22.1663 14 22.1663 14V7"
                    stroke="#755580"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M13.9997 3.5C22.1663 3.5 22.1663 7 22.1663 7C22.1663 7 22.1663 10.5 13.9997 10.5C5.83301 10.5 5.83301 7 5.83301 7C5.83301 7 5.83301 3.5 13.9997 3.5Z"
                    stroke="#755580"
                    strokeWidth="1.5"
                  />
                </svg>
              }
              label="Data stores"
              isActive={selectedFeature === "dataStores"}
              onClick={() => setSelectedFeature("dataStores")}
            />

            <FeatureButton
              icon="⏱"
              label="Scheduled jobs"
              isActive={selectedFeature === "scheduledJobs"}
              onClick={() => setSelectedFeature("scheduledJobs")}
            />

            <FeatureButton
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="23"
                  viewBox="0 0 22 23"
                  fill="none"
                >
                  <path
                    d="M7.07795 2.97927C7.9785 2.82422 8.90317 2.8889 9.77337 3.16781C10.6436 3.44672 11.4336 3.9316 12.0762 4.58126C12.7188 5.23091 13.1951 6.02612 13.4645 6.89929C13.734 7.77246 13.7886 8.69778 13.6238 9.5966C13.5135 10.1983 13.6309 10.726 13.9406 11.0348L18.8515 15.9466C19.2893 16.4069 19.5298 17.0201 19.5219 17.6553C19.5139 18.2905 19.258 18.8975 18.8088 19.3467C18.3596 19.7959 17.7527 20.0518 17.1175 20.0597C16.4822 20.0677 15.8691 19.8271 15.4087 19.3894L10.4978 14.4784C10.189 14.1696 9.66047 14.0514 9.05962 14.1608C8.16092 14.3253 7.23579 14.2706 6.36279 14.0011C5.4898 13.7316 4.69475 13.2554 4.04517 12.6129C3.39559 11.9705 2.91068 11.1807 2.63162 10.3107C2.35257 9.44074 2.28762 8.51626 2.44229 7.61581C2.48373 7.3541 2.60302 7.11093 2.78463 6.91799C2.96624 6.72505 3.20175 6.59128 3.46048 6.5341C3.93692 6.42557 4.46013 6.56939 4.83688 6.94614L7.08236 9.19073C7.11469 9.22159 7.15766 9.2388 7.20235 9.2388C7.24704 9.2388 7.29002 9.22159 7.32235 9.19073L8.65287 7.86021C8.68372 7.82788 8.70094 7.78491 8.70094 7.74022C8.70094 7.69553 8.68372 7.65255 8.65287 7.62022L6.40916 5.37474C6.23011 5.19859 6.09846 4.98006 6.02643 4.73944C5.9544 4.49882 5.94431 4.2439 5.99712 3.99834C6.10917 3.50424 6.49209 3.08074 7.07795 2.97927Z"
                    fill="#755580"
                  />
                </svg>
              }
              label="Background workers"
              isActive={selectedFeature === "backgroundWorkers"}
              onClick={() => setSelectedFeature("backgroundWorkers")}
            />
          </div>

          <div className="bg-white rounded-4xl shadow-lg inset-shadow-xs overflow-hidden mb-8 max-w-5xl mx-auto">
            <div className="flex justify-end items-center px-8 pt-8">
              <div className="flex space-x-2">
                <div className="w-4 h-4 rounded-full bg-purple-lbg"></div>
                <div className="w-4 h-4 rounded-full bg-sand"></div>
                <div className="w-4 h-4 rounded-full bg-olive"></div>
              </div>
            </div>

            <div className="code-container p-8 mb-2 overflow-x-auto">
              <CodeDisplay code={currentCode} language="fsharp" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackendFeatures;

import React, { useState } from 'react';
import cliImage from '../../assets/cli.png';
import SectionTitle from '../ui/SectionTitle';
import CodeDisplay from '../ui/CodeDisplay';

const CLI: React.FC = () => {
  const [selectedScript, setSelectedScript] = useState<string>('typescript');




  // Script options
  const scriptOptions = [
    { id: 'typescript', label: 'Hello World script' },
    { id: 'bash', label: 'Simple bash script' },
    { id: 'deployment', label: 'Deployment Script' }
  ];

  // Bash code for TypeScript CommonJS files search (Hello World script)
  const bashTypeScriptCode = `find_large_typescript_commonjs_files() {
    local search_path="$1"
    
    find "$search_path" -type f | while read -r file_path; do
      
      if [[ "$file_path" != *.ts && "$file_path" != *.mjs && 
          "$file_path" != *.cjs ]]; then
        echo "Skipping - wrong file type:$file_path"
        continue
      fi
      
      line_count=$(wc -l < "$file_path")
      if [ "$line_count" -le 600 ]; then
        echo "Skipping - too short: $file_path"
        continue
      fi
      
      if grep -q -E "const .* = require\\(.*\\)" "$file_path"; then
        echo "Found one: $file_path"
      fi
    done
  }

  find_large_typescript_commonjs_files "./"`;


  // Darklang code for TypeScript CommonJS files search (Hello World script)
  const darklangTypeScriptCode = `let findLargeTypescriptCommonJSFiles (path : String) =
  Directory.traverse (fun path →
    if not (List.oneOf (File.extension path) [".ts", ".mjs", ".cjs"])
    then
      print $"Skipping - wrong file type: {path}"
    else
      let contents = File.readString path
      let lines = String.splitNewlines contents
      if (List.length lines) < 600 then
        print $"Skipping - too short: {path}"
      else
        let isCommonjs =
          lines |> List.any (fun line →
            line |> Regex.matches "/const .* = require\\(.*\\)/"
          )
        if isCommonjs then
          print $"Found one: {path}"
  )

findLargeTypescriptCommonJSFiles "./"`;

  // Simple bash script example
  const bashSimpleCode = `#!/bin/bash

# Simple script to backup a directory
BACKUP_DIR="/home/user/documents"
TARGET_DIR="/backup/$(date +%Y-%m-%d)"

# Create target directory if it doesn't exist
mkdir -p "$TARGET_DIR"

# Copy files with progress indicator
echo "Backing up $BACKUP_DIR to $TARGET_DIR..."
rsync -av --progress "$BACKUP_DIR/" "$TARGET_DIR/"

# Check if backup was successful
if [ $? -eq 0 ]; then
  echo "Backup completed successfully!"
else
  echo "Backup failed with error code $?"
  exit 1
fi

# Cleanup old backups (keep last 7 days)
find /backup -type d -mtime +7 -exec rm -rf {} \\; 2>/dev/null

echo "Backup process completed."`;

  // Darklang simple script example
  const darklangSimpleCode = `// Simple script to backup a directory
let backupDirectory = (sourcePath : String, keepDays : Int) : Result<String, String> =
  // Create timestamp for backup folder
  let timestamp = Date.now() |> Date.format "yyyy-MM-dd"
  let targetDir = $"/backup/{timestamp}"
  
  // Ensure target directory exists
  FileSystem.createDirectory targetDir
  |> Result.map (fun _ -> 
    // Copy files with built-in progress tracking
    let result = FileSystem.copyDirectory sourcePath targetDir
    
    match result with
    | Ok _ -> 
      // Cleanup old backups
      let oldBackups = 
        FileSystem.listDirectories "/backup"
        |> List.filter (fun dir -> 
          let dirDate = Path.basename dir |> Date.parse
          let daysOld = Date.diffDays dirDate (Date.now())
          daysOld > keepDays
        )
      
      // Delete old backups
      List.forEach oldBackups FileSystem.deleteDirectory
      
      Ok $"Backup completed successfully to {targetDir}"
    | Error e -> 
      Error $"Backup failed: {e}"
  )

// Execute backup with 7 day retention
backupDirectory "/home/user/documents" 7
|> Result.match
   (\\success -> Console.log success)
   (\\error -> Console.error error)`;

  // Deployment script example
  const bashDeploymentCode = `#!/bin/bash

# Deployment script for web application

APP_NAME="mywebapp"
DEPLOY_ENV=$1
SOURCE_DIR="./dist"
SERVER_USER="deploy"

# Validate environment argument
if [[ "$DEPLOY_ENV" != "staging" && "$DEPLOY_ENV" != "production" ]]; then
  echo "Error: Please specify either 'staging' or 'production' as environment"
  echo "Usage: $0 <environment>"
  exit 1
fi

# Set server based on environment
if [[ "$DEPLOY_ENV" == "production" ]]; then
  SERVER="production.example.com"
  TARGET_DIR="/var/www/production/$APP_NAME"
else
  SERVER="staging.example.com"
  TARGET_DIR="/var/www/staging/$APP_NAME"
fi

echo "Deploying $APP_NAME to $DEPLOY_ENV environment..."

# Build the application
echo "Building application..."
npm run build

# Check if build was successful
if [ $? -ne 0 ]; then
  echo "Build failed! Aborting deployment."
  exit 1
fi

# Create backup of current deployment if it exists
ssh $SERVER_USER@$SERVER "if [ -d $TARGET_DIR ]; then cp -r $TARGET_DIR _backup_$(date +%Y%m%d%H%M%S); fi"

# Deploy application to server
echo "Uploading to $SERVER..."
rsync -avz --delete $SOURCE_DIR/ $SERVER_USER@$SERVER:$TARGET_DIR/

# Run post-deployment tasks
echo "Running post-deployment tasks..."
ssh $SERVER_USER@$SERVER "cd $TARGET_DIR && ./post-deploy.sh $DEPLOY_ENV"

echo "Deployment to $DEPLOY_ENV completed successfully!"`;

  // Darklang deployment script example
  const darklangDeploymentCode = `// Deployment script for web application

type Environment = Production | Staging

let deployApplication = (env : Environment, appName : String) : Result<String, String> =
  // Set server and paths based on environment
  let (server, targetDir) = 
    match env with
    | Production -> 
      ("production.example.com", $"/var/www/production/{appName}")
    | Staging -> 
      ("staging.example.com", $"/var/www/staging/{appName}")
  
  Console.log $"Deploying {appName} to {env} environment..."
  
  // Build the application
  Console.log "Building application..."
  let buildResult = Process.run "npm" ["run", "build"]
  
  // Check if build was successful
  match buildResult with
  | Error e -> Error $"Build failed: {e}"
  | Ok _ ->
    // Create backup of current deployment
    Server.execute server $"
      if [ -d {targetDir} ]; then 
        cp -r {targetDir} {targetDir}_backup_$(date +%Y%m%d%H%M%S)
      fi"
    |> ignore
    
    // Deploy files to server
    Console.log $"Uploading to {server}..."
    let deployResult = 
      RemoteFS.sync 
        { sourcePath = "./dist"
          targetServer = server
          targetPath = targetDir
          deleteExtraFiles = true }
    
    match deployResult with
    | Error e -> Error $"Deployment failed: {e}"
    | Ok _ ->
      // Run post-deployment tasks
      Console.log "Running post-deployment tasks..."
      let postDeployResult = 
        Server.execute server $"cd {targetDir} && ./post-deploy.sh {env}"
      
      match postDeployResult with
      | Error e -> Error $"Post-deployment tasks failed: {e}"
      | Ok _ -> Ok $"Deployment to {env} completed successfully!"

// Execute deployment
deployApplication Staging "mywebapp"
|> Result.match
   (\\success -> Console.log success)
   (\\error -> Console.error error)`;

  // Get the appropriate code based on selected script
  const getCode = (scriptId: string) => {
    switch (scriptId) {
      case 'typescript':
        return { bash: bashTypeScriptCode, darklang: darklangTypeScriptCode };
      case 'bash':
        return { bash: bashSimpleCode, darklang: darklangSimpleCode };
      case 'deployment':
        return { bash: bashDeploymentCode, darklang: darklangDeploymentCode };
      default:
        return { bash: bashTypeScriptCode, darklang: darklangTypeScriptCode };
    }
  };

  const currentCode = getCode(selectedScript);

  return (
    <section className="w-full py-20 md:py-28">
      <div className="max-w-7xl 2xl:max-w-[100rem] mx-auto px-6">
        <SectionTitle subtitle='Darklang CLI'> A CLI Runtime to Replace your Bash<br></br>and Python Scripts</SectionTitle>

        <div className="flex flex-col lg:flex-row items-start justify-start">
          {/* Left side - Text content - 2/3 width */}
          <div className="lg:w-2/3 max-w-3xl space-y-10 mt-8 order-2 md:order-1">
            {/* Main text with the correct arrow icon */}
            <div className="flex space-x-4">
              <div className="flex-shrink-0 text-blue-lbg">
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                  <path d="M7.91699 11.0835L15.8337 19.0002L7.91699 26.9168M19.0003 30.0835H30.0837" stroke="#6D74C5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <p className="text-lg text-gray-800 leading-relaxed mr-5">
                Darklang's CLI is a better alternative to Bash, combining its
                power with the simplicity and safety of modern programming
                languages. Enabling you to write scripts without confusing
                errors or dependency issues.
              </p>
            </div>

            {/* Feature boxes in a row with light background */}
            <div className="bg-blue-lbg/5 p-8 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Feature 1 */}
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                      <path d="M15.5 1.9375L3.875 5.8125V17.4375C3.875 23.8585 9.079 29.0625 15.5 29.0625C21.921 29.0625 27.125 23.8585 27.125 17.4375V5.8125L15.5 1.9375ZM24.9453 17.4375C24.9453 22.6536 20.7161 26.8828 15.5 26.8828C10.2839 26.8828 6.05469 22.6536 6.05469 17.4375V7.44727L15.5 4.11719L24.9453 7.44727V17.4375Z" fill="#6D74C5" />
                      <path d="M11.4558 14.383C11.3548 14.2816 11.2347 14.201 11.1025 14.1461C10.9703 14.0912 10.8285 14.0629 10.6853 14.0629C10.5422 14.0629 10.4004 14.0912 10.2682 14.1461C10.136 14.201 10.0159 14.2816 9.91489 14.383C9.81342 14.484 9.7329 14.6041 9.67795 14.7363C9.62301 14.8685 9.59473 15.0103 9.59473 15.1535C9.59473 15.2967 9.62301 15.4384 9.67795 15.5707C9.7329 15.7029 9.81342 15.8229 9.91489 15.924L13.8323 19.8413L13.8958 19.9049C13.9914 20.0006 14.1049 20.0766 14.2298 20.1284C14.3547 20.1802 14.4887 20.2069 14.6239 20.2069C14.7592 20.2069 14.8931 20.1802 15.018 20.1284C15.143 20.0766 15.2565 20.0006 15.352 19.9049L22.1181 13.1388C22.2138 13.0432 22.2898 12.9298 22.3416 12.8048C22.3934 12.6799 22.4201 12.546 22.4201 12.4107C22.4201 12.2755 22.3934 12.1415 22.3416 12.0166C22.2898 11.8917 22.2138 11.7782 22.1181 11.6826L22.0333 11.5979C21.9378 11.5021 21.8243 11.4262 21.6994 11.3744C21.5744 11.3226 21.4405 11.2959 21.3053 11.2959C21.17 11.2959 21.0361 11.3226 20.9112 11.3744C20.7862 11.4262 20.6727 11.5021 20.5772 11.5979L14.6224 17.5496L11.4558 14.383Z" fill="#6D74C5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-lbg mb-1">Type-safe by design</h3>
                    <p className="text-sm 2xl:text-base text-gray-700">Using static types to help ensure correctness</p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                      <path d="M29.58 9.01912L17.8925 2.62021C17.6192 2.4693 17.3122 2.39014 17 2.39014C16.6878 2.39014 16.3808 2.4693 16.1075 2.62021L4.42 9.01912C4.12755 9.17913 3.8835 9.41483 3.7134 9.70152C3.5433 9.98822 3.45341 10.3154 3.45312 10.6487V23.3509C3.45341 23.6843 3.5433 24.0114 3.7134 24.2981C3.8835 24.5848 4.12755 24.8205 4.42 24.9805L16.1075 31.3794C16.3808 31.5301 16.6879 31.6091 17 31.6091C17.3121 31.6091 17.6192 31.5301 17.8925 31.3794L29.58 24.9805C29.8724 24.8205 30.1165 24.5848 30.2866 24.2981C30.4567 24.0114 30.5466 23.6843 30.5469 23.3509V10.6487C30.5466 10.3154 30.4567 9.98822 30.2866 9.70152C30.1165 9.41483 29.8724 9.17913 29.58 9.01912ZM16.8672 4.0174C16.9063 3.99601 16.9501 3.9848 16.9947 3.9848C17.0392 3.9848 17.0831 3.99601 17.1222 4.0174L28.224 10.0936L23.7163 12.5599L12.491 6.416L16.8672 4.0174ZM16.2031 29.617L5.17969 23.5833C5.13896 23.5598 5.1052 23.5259 5.08186 23.4851C5.05853 23.4442 5.04645 23.3979 5.04688 23.3509V11.5094L16.2031 17.6187V29.617ZM5.77602 10.0936L10.8322 7.32443L22.0562 13.4683L17 16.2348L5.77602 10.0936ZM28.9531 23.3509C28.9535 23.3979 28.9415 23.4442 28.9181 23.4851C28.8948 23.5259 28.861 23.5598 28.8203 23.5833L17.7969 29.617V17.6161L22.5781 14.9983V20.1873C22.5781 20.3987 22.6621 20.6014 22.8115 20.7508C22.961 20.9002 23.1637 20.9842 23.375 20.9842C23.5863 20.9842 23.789 20.9002 23.9385 20.7508C24.0879 20.6014 24.1719 20.3987 24.1719 20.1873V14.1271L28.9531 11.5094V23.3509Z" fill="#6D74C5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-lbg mb-1">Built-in Packages</h3>
                    <p className="text-sm 2xl:text-base text-gray-700">No Npm install, no dependency headaches</p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                      <path d="M21.9141 9.79688C21.9141 8.72608 21.5965 7.67932 21.0016 6.78899C20.4067 5.89865 19.5612 5.20471 18.5719 4.79494C17.5826 4.38516 16.494 4.27794 15.4438 4.48684C14.3935 4.69575 13.4289 5.21139 12.6717 5.96856C11.9145 6.72573 11.3989 7.69042 11.19 8.74065C10.9811 9.79087 11.0883 10.8795 11.4981 11.8688C11.9078 12.858 12.6018 13.7036 13.4921 14.2985C14.3824 14.8934 15.4292 15.2109 16.5 15.2109C17.9359 15.2109 19.313 14.6405 20.3283 13.6252C21.3437 12.6099 21.9141 11.2328 21.9141 9.79688ZM16.5 13.6641C15.7351 13.6641 14.9875 13.4373 14.3515 13.0123C13.7156 12.5874 13.2199 11.9834 12.9272 11.2768C12.6345 10.5702 12.5579 9.79259 12.7071 9.04243C12.8563 8.29227 13.2247 7.6032 13.7655 7.06236C14.3063 6.52153 14.9954 6.15321 15.7456 6.004C16.4957 5.85478 17.2733 5.93136 17.9799 6.22406C18.6865 6.51676 19.2905 7.01243 19.7155 7.64838C20.1404 8.28434 20.3672 9.03202 20.3672 9.79688C20.3672 10.8225 19.9598 11.8062 19.2345 12.5314C18.5093 13.2566 17.5256 13.6641 16.5 13.6641ZM24.2344 16.7578C23.1636 16.7578 22.1168 17.0753 21.2265 17.6702C20.3361 18.2652 19.6422 19.1107 19.2324 20.1C18.8227 21.0893 18.7154 22.1779 18.9243 23.2281C19.1332 24.2783 19.6489 25.243 20.4061 26.0002C21.1632 26.7574 22.1279 27.273 23.1781 27.4819C24.2284 27.6908 25.317 27.5836 26.3062 27.1738C27.2955 26.764 28.1411 26.0701 28.736 25.1798C29.3309 24.2894 29.6484 23.2427 29.6484 22.1719C29.6484 20.736 29.078 19.3589 28.0627 18.3436C27.0474 17.3282 25.6703 16.7578 24.2344 16.7578ZM24.2344 26.0391C23.4695 26.0391 22.7218 25.8123 22.0859 25.3873C21.4499 24.9624 20.9543 24.3584 20.6616 23.6518C20.3689 22.9452 20.2923 22.1676 20.4415 21.4174C20.5907 20.6673 20.959 19.9782 21.4999 19.4374C22.0407 18.8965 22.7298 18.5282 23.4799 18.379C24.2301 18.2298 25.0076 18.3064 25.7143 18.5991C26.4209 18.8918 27.0249 19.3874 27.4498 20.0234C27.8748 20.6593 28.1016 21.407 28.1016 22.1719C28.1016 23.1975 27.6941 24.1812 26.9689 24.9064C26.2437 25.6316 25.26 26.0391 24.2344 26.0391ZM8.76563 16.7578C7.69483 16.7578 6.64807 17.0753 5.75774 17.6702C4.8674 18.2652 4.17346 19.1107 3.76369 20.1C3.35391 21.0893 3.24669 22.1779 3.45559 23.2281C3.6645 24.2783 4.18014 25.243 4.93731 26.0002C5.69448 26.7574 6.65917 27.273 7.7094 27.4819C8.75962 27.6908 9.84821 27.5836 10.8375 27.1738C11.8268 26.764 12.6724 26.0701 13.2673 25.1798C13.8622 24.2894 14.1797 23.2427 14.1797 22.1719C14.1797 20.736 13.6093 19.3589 12.5939 18.3436C11.5786 17.3282 10.2015 16.7578 8.76563 16.7578ZM8.76563 26.0391C8.00077 26.0391 7.25309 25.8123 6.61713 25.3873C5.98118 24.9624 5.48551 24.3584 5.19281 23.6518C4.90011 22.9452 4.82353 22.1676 4.97275 21.4174C5.12196 20.6673 5.49028 19.9782 6.03111 19.4374C6.57195 18.8965 7.26102 18.5282 8.01118 18.379C8.76134 18.2298 9.5389 18.3064 10.2455 18.5991C10.9522 18.8918 11.5561 19.3874 11.9811 20.0234C12.406 20.6593 12.6328 21.407 12.6328 22.1719C12.6328 23.1975 12.2254 24.1812 11.5001 24.9064C10.7749 25.6316 9.79127 26.0391 8.76563 26.0391Z" fill="#6D74C5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-lbg mb-1">Cross-platform</h3>
                    <p className="text-sm 2xl:text-base text-gray-700">Running on macOS, Linux, and Windows</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Discover link */}
            <a
              href="#"
              className="inline-flex items-center font-medium text-blue-lbg hover:text-purple-lbg transition-colors"
            >
              Discover Darklang CLI features and how it solves scripting problems →
            </a>
          </div>

          {/* Right side - Image - 1/3 width but much larger */}
          <div className="md:w-1/3 relative order-1 md:order-2">
            <div className='md:absolute md:-right-88 2xl:block'>
              <img
                src={cliImage}
                alt="Darklang CLI interface"
                className="h-auto"
              />
            </div>
          </div>
        </div>

        <div className='mt-35'>
          <h2 className="text-2xl md:text-3xl font-semibold mb-20 text-purple-lbg">
            Darklang compared to Bash and Python
          </h2>
          <div className="flex flex-col lg:flex-row w-full gap-6">
            {/* Sidebar navigation */}
            <div className="lg:w-1/6">
              <ul className="space-y-2">
                {scriptOptions.map((option) => (
                  <li
                    key={option.id}
                    className={`px-4 py-2 border-l-4 cursor-pointer ${selectedScript === option.id
                      ? 'border-purple-lbg text-purple-lbg font-medium'
                      : 'border-gray-200 text-gray-600 hover:border-purple-lbg/20 hover:text-purple-lbg'
                      }`}
                    onClick={() => setSelectedScript(option.id)}
                  >
                    {option.label}
                  </li>
                ))}
              </ul>
            </div>

            {/* Code comparison section */}
            <div className="lg:w-5/6 grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left side: Bash */}
              <div>
                <div className="rounded-lg h-150 overflow-scroll shadow-lg inset-shadow-xs bg-white p-4">
                  <div className="p-4 flex items-center justify-end space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className='p-5 text-sm 2xl:text-base'>
                    <CodeDisplay code={currentCode.bash} showLineNumbers={false} />
                  </div>
                </div>
                <div className="py-8 text-center text-gray-400">-Bash-</div>
              </div>

              {/* Right side: Darklang */}
              <div>
                <div className="rounded-lg h-150 overflow-scroll shadow-md bg-dark p-4 text-white">
                  <div className="p-4 flex items-center space-x-2 justify-end border-gray-700">
                    <div className="w-3 h-3 rounded-full bg-purple-dbg"></div>
                    <div className="w-3 h-3 rounded-full bg-sand"></div>
                    <div className="w-3 h-3 rounded-full bg-olive"></div>
                  </div>
                  <div className='p-5 text-sm 2xl:text-base'>
                    <CodeDisplay code={currentCode.darklang} language="fsharp" showLineNumbers={false} />
                  </div>
                </div>
                <div className="py-8 text-center text-gray-400">-Darklang-</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CLI;

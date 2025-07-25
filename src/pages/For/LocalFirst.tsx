import React from "react";
import EarlyContentDisclaimer from "../../components/EarlyContentDisclaimer";

const LocalFirst: React.FC = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <EarlyContentDisclaimer />
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Darklang for Local-First Developers
          </h1>
          <div className="w-24 h-1 bg-blue-lbg mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            Build resilient applications that work offline and sync seamlessly.
            Your data stays yours.
          </p>
        </div>

        {/* Cloud-First Problems */}
        <div className="bg-red-50 rounded-lg p-8 mb-12 border-l-4 border-red-500">
          <h2 className="text-2xl font-bold text-red-800 mb-4">
            The Cloud-First Problem
          </h2>
          <div className="text-red-700 space-y-3">
            <div className="flex items-start">
              <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <p>Applications that break without internet connectivity</p>
            </div>
            <div className="flex items-start">
              <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <p>
                Your data hostage to SaaS platforms and their business decisions
              </p>
            </div>
            <div className="flex items-start">
              <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <p>
                Sync conflicts, data loss, and "sorry, that feature requires
                Pro"
              </p>
            </div>
            <div className="flex items-start">
              <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <p>Complex CRDT implementation and conflict resolution logic</p>
            </div>
            <div className="flex items-start">
              <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <p>
                Performance degradation as app becomes increasingly
                network-dependent
              </p>
            </div>
          </div>
        </div>

        {/* Local-First with Darklang */}
        <div className="bg-green-50 rounded-lg p-8 mb-12 border-l-4 border-green-500">
          <h2 className="text-2xl font-bold text-green-800 mb-4">
            Darklang: Local-First, Cloud-Enhanced
          </h2>
          <div className="text-green-700 space-y-3">
            <div className="flex items-start">
              <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <p>
                <strong>Local-first architecture:</strong> Apps work offline,
                sync when connected
              </p>
            </div>
            <div className="flex items-start">
              <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <p>
                <strong>Built-in sync:</strong> Conflict resolution and data
                merging handled automatically
              </p>
            </div>
            <div className="flex items-start">
              <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <p>
                <strong>Data ownership:</strong> Your data lives locally, cloud
                is just for sync
              </p>
            </div>
            <div className="flex items-start">
              <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <p>
                <strong>Instant responsiveness:</strong> No network latency for
                local operations
              </p>
            </div>
          </div>
        </div>

        {/* Perfect For Local-First Developers */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Perfect for Developers Building:
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-blue-lbg mb-4">
                Offline-Capable Apps
              </h3>
              <p className="text-gray-700 mb-4">
                Note-taking apps, task managers, creative tools—applications
                that should work seamlessly whether you're online or offline.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Examples:</strong> Document editors, design tools,
                project management, personal productivity apps
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-purple-lbg mb-4">
                Collaborative Tools
              </h3>
              <p className="text-gray-700 mb-4">
                Build real-time collaboration without complex operational
                transforms. Let multiple users edit simultaneously with
                automatic conflict resolution.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Use cases:</strong> Shared whiteboards, collaborative
                documents, team planning tools, multiplayer experiences
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-mint mb-4">
                Data-Intensive Applications
              </h3>
              <p className="text-gray-700 mb-4">
                Applications that process large datasets locally for
                performance, syncing only relevant changes to the cloud.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Pattern:</strong> Local computation → selective sync →
                distributed results
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-taupe mb-4">
                Privacy-First Software
              </h3>
              <p className="text-gray-700 mb-4">
                Keep sensitive data on user devices. Only sync encrypted
                metadata or aggregated insights to the cloud.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Examples:</strong> Health tracking, financial planning,
                personal journals, family organization
              </div>
            </div>
          </div>
        </div>

        {/* Local-First Architecture */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Local-First Architecture Made Simple
          </h2>

          <div className="space-y-8">
            <div className="border-l-4 border-blue-lbg pl-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Local Data Store
              </h3>
              <p className="text-gray-700 mb-4">
                Each user's data lives locally in a fast, queryable database.
                All operations are instant because they happen on-device.
              </p>
              <div className="bg-gray-50 p-4 rounded">
                <div className="text-sm text-gray-600">
                  <strong>Benefits:</strong> Instant response times, works
                  offline, user controls their data, no cloud vendor lock-in
                </div>
              </div>
            </div>

            <div className="border-l-4 border-purple-lbg pl-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Automatic Sync
              </h3>
              <p className="text-gray-700 mb-4">
                Changes sync automatically when devices are online. Darklang
                handles conflict resolution, versioning, and ensuring data
                consistency.
              </p>
              <div className="bg-gray-50 p-4 rounded font-mono text-sm">
                <div>// Automatically synced between devices</div>
                <div>LocalDB.update userNotes noteId newContent</div>
                <div>// Conflicts resolved using timestamps + user intent</div>
              </div>
            </div>

            <div className="border-l-4 border-mint pl-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Conflict Resolution
              </h3>
              <p className="text-gray-700 mb-4">
                When multiple devices modify the same data, Darklang uses
                intelligent merge strategies based on data type and user intent.
              </p>
              <div className="bg-gray-50 p-4 rounded">
                <div className="text-sm text-gray-600">
                  <strong>Strategies:</strong> Last-writer-wins for simple
                  values, operational transforms for text, custom merge
                  functions for complex data
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison with Traditional CRDT Implementation */}
        <div className="border-l-4 border-purple-lbg pl-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Traditional CRDT vs Darklang Local-First
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-red-600 mb-4">
                Traditional CRDT Implementation
              </h3>
              <div className="bg-red-50 p-4 rounded text-sm space-y-2">
                <div>• Complex mathematical data structures</div>
                <div>• Custom conflict resolution algorithms</div>
                <div>• Network topology and peer discovery</div>
                <div>• Garbage collection of old operations</div>
                <div>• Vector clocks and causal ordering</div>
                <div>• Weeks of implementation and testing</div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-green-600 mb-4">
                Darklang Local-First
              </h3>
              <div className="bg-green-50 p-4 rounded text-sm space-y-2">
                <div>• Write normal business logic</div>
                <div>• Automatic conflict resolution</div>
                <div>• Built-in sync infrastructure</div>
                <div>• Transparent data versioning</div>
                <div>• Declarative data relationships</div>
                <div>• Focus on app features, not sync complexity</div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded border-l-4 border-blue-lbg">
            <p className="text-gray-700">
              <strong>Result:</strong> Local-first applications without the
              typical months of CRDT implementation complexity.
            </p>
          </div>
        </div>

        {/* Local-First Patterns */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Common Local-First Patterns
          </h2>

          <div className="text-gray-700 leading-relaxed space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-3">
                Optimistic UI Updates
              </h3>
              <p className="mb-3">
                Make changes immediately in the local UI, then sync in the
                background. Users never wait for network requests for their own
                actions.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Example:</strong> Adding a task to a todo list shows
                immediately, syncs to other devices when network is available
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-3">Partial Sync</h3>
              <p className="mb-3">
                Sync only what's needed. Keep frequently accessed data local,
                lazy-load additional data as needed.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Use case:</strong> Email client that keeps recent
                messages local, fetches older messages on demand
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-3">
                Offline-First Collaboration
              </h3>
              <p className="mb-3">
                Multiple users can work on shared documents while offline.
                Changes merge intelligently when devices reconnect.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Scenario:</strong> Team editing a presentation on a
                plane, changes sync when they land
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-3">
                Progressive Enhancement
              </h3>
              <p className="mb-3">
                Apps work fully offline but gain features when connected: cloud
                backup, sharing, real-time collaboration.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Philosophy:</strong> Offline first, online enhanced
              </div>
            </div>
          </div>
        </div>

        {/* Privacy and Data Ownership */}
        <div className="border-l-4 border-mint pl-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Data Ownership and Privacy
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>
              Local-first means users own their data. It lives on their devices,
              under their control. The cloud is just a convenience, not a
              requirement.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-3">
                  User Control
                </h3>
                <p className="text-sm text-gray-600">
                  Users can export their data, work offline indefinitely, or
                  choose their own sync provider.
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-3">
                  Privacy by Design
                </h3>
                <p className="text-sm text-gray-600">
                  Sensitive data never leaves the user's device unless they
                  explicitly choose to share or sync it.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-3">
                  No Vendor Lock-in
                </h3>
                <p className="text-sm text-gray-600">
                  Apps continue working even if your sync service disappears.
                  Local data is always accessible.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="border-l-4 border-taupe pl-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Build Software That Respects Users
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p className="text-lg">
              The future of software is local-first: fast, private, and
              resilient. But building it shouldn't require a PhD in distributed
              systems.
            </p>
            <p>
              Darklang makes local-first development accessible. Build
              applications that work offline, sync seamlessly, and put users in
              control of their data.
            </p>
            <p className="text-lg font-medium text-blue-lbg">
              Local performance, cloud convenience, user ownership.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocalFirst;

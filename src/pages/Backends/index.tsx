import React from "react";

const Backends: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto">
      <pre>
        talk about features
        http handlers
        CRONs
        workers
        etc.

        talk about our cloud offerings
        reference things in dark-classic

        talk about eventual migration from -classic to -next
      </pre>

      <br />

      <p>
        Darklang is a programming language and platform designed to simplify backend development by removing much of the complexity associated with traditional backend infrastructure. Its backend features are tightly integrated into a single environment, and built to streamline the creation of cloud-native applications without managing infrastructure, deployments, or containers.
      </p>

      <br />
      <p>Darklang’s backend features—HTTP handlers, scheduled jobs (CRONs), background workers, and datastores are designed for rapid development and prototyping, with a focus on simplicity and instant deployment.</p>

      <br />
      <p>
        Datastores:
        - Datastores in Darklang are key-value stores used for persistent data storage, integrated seamlessly with handlers and workers.
        - when you set up a database in dark, you just add the database, like you click a button or a keyboard shortcut, no requiring a server from somewhere to put it on, no going to another server, no config, no orm it is written in the same language as the rest of your code
        - when you make a query, you query in the dark

        talk about operations?
        - (DB.set, DB.get...)
        - (DB.query...)
      </p>

      <br />

      <p>
        HTTP Handlers:
        - HTTP handlers in Darklang are the core mechanism for handling incoming HTTP requests, serving as the entry point for API endpoints and web applications.
        - when setting up a HTTP request you're not setting up a HTTP server, you're just add an end point that is directly connected to the code and you write them in the same place. There's no spinning up servers
        - Darklang is designed for interacting with 3rd party APIs over HTTP. The `HttpClient` module has a set of functions for calling out to other HTTP services and APIs
      </p>
      <br />

      <p>
        Scheduled jobs:
        - CRON jobs in Darklang are scheduled tasks that run on a predefined schedule, similar to Unix cron, ideal for periodic tasks like report generation or data cleanup.
        - Crons run automatically once per interval
      </p>

      <br />
      <p>
        Background Workers:
        - Workers in Darklang handle asynchronous background tasks, processing messages from a queue, making them ideal for tasks like API calls, batch processing, or report generation.
        - Darklang supports doing work asynchronously outside the context of an HTTP handler using a **Worker**. Each worker has a queue of messages, which are processed loosely in-order, executing the code within the Worker once for each message. Messages are created by calling `emit` from any other code, and can contain arbitrary event data.

        ADD Example use case?
      </p>
      <br />

    </section>


  );
};

export default Backends;

import React from "react";

// One place to find every version of this site, so we stop having to remember
// which subdomain or Wayback snapshot holds what.

const deployed = [
  {
    url: "https://wip-old.darklang.com",
    label: "wip-old",
    note: "wip.darklang.com as of September 2026, frozen",
  },
];

const drafts = [
  "home",
  "home2",
  "home4",
  "home5",
  "home6",
  "home7",
  "home8",
  "home9",
  "home10",
  "home11",
];

const wayback = [
  "20180412034909",
  "20190115041201",
  "20200313145805",
  "20210224214311",
  "20220119132849",
  "20230102192737",
  "20240115181617",
  "20250103131227",
  "20260108042713",
];

const linkClass = "text-blue-lbg hover:underline";

const History: React.FC = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-12">
        <h1 className="text-4xl font-bold text-gray-900">
          Versions of this site
        </h1>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Deployed</h2>
          <ul className="space-y-2">
            {deployed.map(d => (
              <li key={d.url}>
                <a className={linkClass} href={d.url}>
                  {d.label}
                </a>
                <span className="text-gray-600 ml-2">{d.note}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Homepage drafts
          </h2>
          <ul className="flex flex-wrap gap-4">
            <li>
              <a className={linkClass} href="/">
                / (current)
              </a>
            </li>
            {drafts.map(p => (
              <li key={p}>
                <a className={linkClass} href={`/${p}`}>
                  /{p}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            darklang.com on the Wayback Machine
          </h2>
          <ul className="flex flex-wrap gap-4">
            {wayback.map(ts => (
              <li key={ts}>
                <a
                  className={linkClass}
                  href={`https://web.archive.org/web/${ts}/https://darklang.com/`}
                >
                  {ts.slice(0, 4)}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default History;

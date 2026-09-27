import React from "react";

import Section from "./Section";
import Console, { Cm, Dim, Kw, Sp, Str, Ty, Warn } from "./Console";

const SyncSection: React.FC = () => (
  <Section
    eyebrow="Sync"
    color="text-acc-teal"
    heading={
      <>
        You choose <span className="text-acc-teal">where it runs</span>
      </>
    }
    panel={
      <div className="space-y-4">
        <Console title="dark sync">
          <Dim>peer</Dim>
          <Sp n={10} />
          <Dim>cursor</Dim>
          <Sp n={3} />
          <Dim>state</Dim>
          {"\n"}
          laptop
          <Sp n={8} />
          <Ty>#1844</Ty>
          <Sp n={4} />
          <Str>up to date</Str>
          {"\n"}
          home-server
          <Sp n={3} />
          <Ty>#1844</Ty>
          <Sp n={4} />
          <Str>up to date</Str>
          {"\n"}
          vps-1
          <Sp n={9} />
          <Ty>#1838</Ty>
          <Sp n={4} />
          <Warn>6 ops behind</Warn>
          {"\n\n"}
          <Dim>$</Dim> dark <Kw>sync</Kw> vps-1{"\n"}
          <Sp n={2} />
          sent ops <Ty>#1839..#1844</Ty>
          <Sp n={2} />
          <Cm># plain HTTP</Cm>
          {"\n"}
          <Sp n={2} />
          <Str>vps-1 now at #1844</Str>
        </Console>

        <div className="grid sm:grid-cols-2 gap-3">
          <div className="rounded-xl border border-gray-200 bg-white p-4">
            <div className="text-xs font-bold uppercase tracking-wider text-acc-teal mb-1">
              home server
            </div>
            <p className="text-sm text-gray-dark">
              Photo organizer. Reads /photos. No internet.
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-4">
            <div className="text-xs font-bold uppercase tracking-wider text-acc-amber mb-1">
              vps
            </div>
            <p className="text-sm text-gray-dark">
              GitHub digest. Reaches GitHub and Discord. No personal files.
            </p>
          </div>
        </div>
      </div>
    }
  >
    <p>
      Run it on your own machines, on your own servers, or on Darklang Cloud.
      Instances copy committed ops to each other over plain HTTP, one cursor per
      log, with no server in the middle, so mixing all three is the normal case
      rather than a migration.
    </p>
    <p>
      Code travels. Secrets, data and permissions stay on the machine they
      belong to, so the same app can be allowed more on your server than on your
      laptop.
    </p>
    <p>
      One binary and one SQLite file, so moving an instance somewhere else is
      copying a file.
    </p>
  </Section>
);

export default SyncSection;

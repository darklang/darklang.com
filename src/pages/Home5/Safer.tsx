import React from "react";

import { Section, Term } from "../Home4/parts";
import { cmd, err, gap, out } from "../Home4/lines";

const LINES = [
  cmd("dark permissions requirements Digest.run"),
  out("Http   GET   https://api.github.com/repos/acme/app/issues"),
  out("Http   POST  https://hooks.slack.com/services/T01/B02"),
  out("Clock"),
  gap,
  cmd("dark eval Digest.run"),
  err("Permission denied: POST https://hooks.example.com/notify"),
  err("is not allowed."),
  err("To allow: `permissions allow http POST"),
  err("           https://hooks.example.com/notify`"),
];

const Safer: React.FC = () => (
  <Section
    id="safer"
    eyebrow="Safer"
    color="text-rust"
    heading={
      <>
        Nothing runs with{" "}
        <span className="text-rust">more than you allowed</span>
      </>
    }
    flip
    tinted
    panel={<Term title="dark" lines={LINES} />}
  >
    <p>
      Most agent setups give you two choices: approve every command by hand, or
      skip permissions and hope. Darklang gives you a third. Code can compute,
      print and use its own local store, and nothing else: no disk, no network,
      no processes. You allow exactly the requests it needs, down to the URL or
      the path.
    </p>
    <p>
      Every function&apos;s effects are worked out from its code, so you can
      check what it will touch before you run it, one function at a time.
      Anything that reaches the network, the file system or a datastore is
      reported.
    </p>
    <p>
      A package can&apos;t quietly gain access in an update. Your approval is
      pinned to a hash of the code you reviewed, so changed code needs a new
      decision. There are no install scripts, and pulled code doesn&apos;t run
      until you run it.
    </p>
  </Section>
);

export default Safer;

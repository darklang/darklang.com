import React from "react";

import { Section } from "../Home4/parts";
import { STORIES } from "./data";

/** One section per story, alternating sides and tint down the page. */
const Steps: React.FC = () => (
  <>
    {STORIES.map((story, i) => (
      <Section
        key={story.id}
        id={story.id}
        eyebrow={story.eyebrow}
        color={story.color}
        heading={story.heading}
        flip={i % 2 === 1}
        tinted={i % 2 === 1}
        panel={story.panel}
      >
        {story.body.map((p, j) => (
          <p key={j}>{p}</p>
        ))}
        <p className="font-medium text-dark">{story.takeaway}</p>
      </Section>
    ))}
  </>
);

export default Steps;

---
title: "What Is a Data Pipeline? (In One Page)"
summary: "A crisp definition, batch vs. stream, and what 'good enough' looks like."
date: "Jan 15 2024"
draft: false
tags:
  - pipeline
  - semantic
  - data-engineering
---

**Definition:** A data pipeline moves data **from sources → storage → serving** in a **repeatable, observable, and change-tolerant** way.

- **Idempotent:** re-running doesn’t corrupt results.
- **Bounded blast radius:** failures isolate to a step/partition.
- **Observable:** freshness, delay, and volume are visible.

**Decision:** sub-minute latency or evented sources? → consider streaming. Otherwise start with simple batch.

**When not to use this**: ad-hoc exploration is fine in a notebook.

**One next step**: add *freshness* and *row-count* checks to an existing job.

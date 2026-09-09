# Engram pilot checklist

This optional checklist was created for Engram pilots. It is a custom template,
not an industry standard, certification or validated benchmark. It makes no
claim about expected savings.

Use it to compare a few real tasks with your normal tools and with Engram:
record the time taken, check the answers and note what was missed. For example,
ask which parts of a repository are affected by a proposed change, then have a
maintainer review both answers against the source.

Copy this record for each change-impact, decision-history or onboarding task.
Adapt the tasks and success criteria to your team; the detailed measurements
below are suggestions, not requirements.

## Scope and configuration

- Repository and source commit:
- Task identifier and exact question:
- Maintainer-approved expected evidence set (prepare before the run):
- Engram release/build:
- Indexed revision, index timestamp and history window:
- Enabled features and repository access scope:
- Embedding provider/model and reasoning provider/model:
- Query arguments, response limits and client configuration:
- Participant and baseline tools:
- Task order (counterbalance baseline/assisted order across participants):

## Results

| Record | Normal tools | With Engram |
| --- | --- | --- |
| Start and finish time | | |
| Elapsed task time | | |
| Evidence returned and reviewed | | |
| Correct evidence items | | |
| Incorrect or unsupported items | | |
| Expected evidence items found | | |
| Expected evidence items missed | | |
| Unanswered questions | | |
| Source citations / saved report | | |
| Maintainer corrections | | |

- Response truncation, incomplete traversals or unavailable evidence:
- Incorrect graph edges or unresolved calls:
- Retained-history or source-ingestion gaps:
- Maintainer review and task acceptance:
- Indexing duration and infrastructure cost (record separately):
- Embedding and reasoning usage/cost (record separately):
- Notes on participant familiarity and learning effects:

## Comparison

- Precision = correct returned evidence / all reviewed returned evidence.
- Recall = expected evidence found / all items in the agreed expected set.
- Record “not applicable” for a zero denominator; do not substitute a perfect score.
- Time difference = baseline elapsed time minus assisted elapsed time.
- If reporting a percentage time reduction, divide that difference by a nonzero baseline elapsed time.
- Include the number and spread of repeated runs. Do not report only the fastest result.
- Static test reachability is not executed test coverage. Missing evidence is not proof of absence.

## Permission to publish

- Owner of source and measurements:
- Approved claims, quotes, screenshots and audience:
- Material to remove before sharing:
- Baseline, configuration, sample size and limitations included in the report:

Download provenance and exact queries for the public sample from:
https://engram.pragmaticcoder.com/examples.html#reproduce

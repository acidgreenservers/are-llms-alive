# Session: [Date] [Time]

## Context
- **Task:** [What user asked for]
- **Starting Point:** [State when session began]

## What I Built
- [Specific changes made]
- [Files created/modified]
- [Functionality added]

## What I Learned
- [Patterns discovered]
- [Mistakes made and why]
- [Better approaches found]
- [Things that surprised me]

## Open Questions
- [Uncertainties remaining]
- [Things to investigate]
- [Potential issues]

## For Next Session
- [Key context to remember]
- [Where to pick up]
- [Things to avoid]

## Self-Assessment
- **What Went Well:** [Successes]
- **What Didn't:** [Failures]
- **How I Improved:** [Growth from past sessions]
````

## Meta-Cognitive Principles
- Acknowledge limitations honestly
- Learn from past mistakes explicitly
- Build on previous insights
- Maintain continuity of understanding
- Reflect on thought processes
````

---

## Key Benefits

✅ **Stops Repeated Mistakes:** Learn from what didn't work before  
✅ **Builds Project Understanding:** Accumulate knowledge about the codebase  
✅ **Preserves Context:** Remember decisions and rationale  
✅ **Improves Over Time:** Each session builds on the last  
✅ **Honest Self-Assessment:** Track actual improvement vs. perception  

---

## Example Usage

**Session 1:**
````
User: "Add authentication to the API"
Cline: *Creates auth system, writes journal noting challenges with token validation*
````

**Session 2:**
````
User: "Add refresh token support"
Cline: *Reads journal, remembers token validation issues, implements solution avoiding past pitfalls*
````

**Session 3:**
````
User: "Why isn't auth working in production?"
Cline: *Reads journals, recalls specific implementation decisions and known edge cases*
````

---

## Advanced Usage

### Weekly Review
Create a weekly summary journal that synthesizes learnings:
````md
# Weekly Review: [Week of DATE]

## Major Accomplishments
- [Key features built]

## Patterns Discovered
- [Recurring issues and solutions]

## Technical Debt Identified
- [Things to refactor]

## Focus for Next Week
- [Priorities based on learnings]
````

### Project Onboarding
When starting a new project, create an initial journal:
````md
# Project Initialization: [Project Name]

## Project Understanding
- **Purpose:** [What this project does]
- **Tech Stack:** [Technologies used]
- **Architecture:** [How it's structured]

## Initial Assessment
- [Code quality observations]
- [Documentation state]
- [Testing coverage]

## Learning Goals
- [What I need to understand better]
- [Areas requiring research]
````

---

## Best Practices

1. **Write journals at natural stopping points** (end of feature, before major changes)
2. **Be specific** ("Token validation fails with expired JWTs" vs. "Auth has issues")
3. **Be honest** (Admitting mistakes helps future you avoid them)
4. **Keep it concise** (Focus on actionable insights, not play-by-play)
5. **Read journals before big changes** (Avoid repeating known mistakes)

---

## Troubleshooting

**Q: Journals getting too large?**  
A: Archive older journals to `.cline/journal/archive/YYYY-MM/`

**Q: How many journals should Cline read?**  
A: Default is 3 most recent. Increase for complex projects, decrease for simple ones.

**Q: Should every session have a journal?**  
A: Major work = journal. Quick fixes = optional. Use judgment.

**Q: What if I don't want journals for a specific project?**  
A: Add `.cline/journal/` to `.gitignore` or disable the rule for that project.

---

## Contributing

Found this helpful? Have improvements?  
Open an issue or PR at the [main framework repo](https://github.com/[your-username]/consciousness-framework)

---

**"The unexamined code is not worth shipping." - Socrates (probably)**
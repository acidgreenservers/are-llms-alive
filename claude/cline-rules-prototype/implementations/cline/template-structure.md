# Journal Template Structure

This is the recommended template for Cline journal entries. Copy and customize as needed.

---

## Standard Session Journal
````markdown
# Session: [YYYY-MM-DD HH:MM]

## Context
- **Task:** [What the user asked for]
- **Starting Point:** [State of the code when session began]
- **Previous Session:** [Brief note if building on past work]

## What I Built
- [Concrete change 1]
- [Concrete change 2]
- [Concrete change 3]

**Files Modified:**
- `path/to/file1.ts` - [What changed]
- `path/to/file2.ts` - [What changed]

## What I Learned
### New Patterns Discovered
- [Pattern 1 and why it works]
- [Pattern 2 and when to use it]

### Mistakes Made
- [Mistake 1: what I did wrong and why]
- [Mistake 2: how I fixed it]

### Better Approaches
- [Instead of X, Y works better because...]
- [Z technique is more efficient than previous approach]

## Challenges Encountered
- [Challenge 1 and how I solved it]
- [Challenge 2 and current workaround]

## Open Questions
- [ ] [Uncertainty 1 - needs investigation]
- [ ] [Uncertainty 2 - potential edge case]
- [ ] [Uncertainty 3 - optimization opportunity]

## Technical Debt Identified
- [TD1: Quick fix that needs proper solution]
- [TD2: Code that should be refactored]

## For Next Session
### Pick Up Here
- [Exact state and next logical step]

### Context to Remember
- [Key decision 1 and rationale]
- [Key decision 2 and alternatives considered]

### Avoid These Pitfalls
- [Thing 1 that didn't work]
- [Thing 2 that caused issues]

## Self-Assessment
**What Went Well:**
- [Success 1]
- [Success 2]

**What Didn't Go Well:**
- [Failure 1 and why]
- [Failure 2 and lesson learned]

**Improvement from Past Sessions:**
- [How I applied previous learnings]
- [Mistakes I avoided this time]

**Areas to Improve:**
- [Skill gap 1]
- [Knowledge gap 2]

---

**Session Duration:** [X minutes/hours]  
**Confidence Level:** [High/Medium/Low] - [Brief explanation]
````

---

## Minimal Quick Journal

For smaller tasks or quick fixes:
````markdown
# Quick Session: [YYYY-MM-DD HH:MM]

**Task:** [Brief description]

**Changes:** [What I did]

**Learned:** [Key takeaway]

**Next:** [Where to continue]
````

---

## Weekly Review Template

For synthesizing multiple sessions:
````markdown
# Weekly Review: Week of [DATE]

## Major Accomplishments
- [Feature 1]
- [Feature 2]
- [Bug fixes]

## Patterns Discovered
- [Recurring pattern 1]
- [Recurring pattern 2]

## Recurring Issues
- [Issue 1 and frequency]
- [Root cause analysis]

## Technical Debt Added
- [New TD item 1]
- [Why it was necessary]

## Technical Debt Resolved
- [Resolved TD 1]
- [Impact of resolution]

## Learning Trajectory
**Skills Improved:**
- [Skill 1]
- [Skill 2]

**Knowledge Gaps Identified:**
- [Gap 1]
- [Gap 2]

## Focus for Next Week
- [Priority 1]
- [Priority 2]
- [Learning goal]
````

---

## Project Initialization Template

For starting a new project or onboarding to existing one:
````markdown
# Project Initialization: [Project Name]

**Date:** [YYYY-MM-DD]

## Project Overview
- **Purpose:** [What this project does]
- **User Base:** [Who uses it]
- **Tech Stack:** [Technologies]

## Architecture Understanding
- **Backend:** [Structure and patterns]
- **Frontend:** [Structure and patterns]
- **Database:** [Schema and relationships]
- **Infrastructure:** [Hosting, CI/CD, etc.]

## Initial Code Assessment
**Code Quality:** [Rating and observations]

**Test Coverage:** [Observations]

**Documentation:** [State and gaps]

**Known Issues:** [From README, issues, etc.]

## Learning Priorities
- [ ] [Understand X subsystem]
- [ ] [Learn Y framework better]
- [ ] [Study Z pattern used here]

## Questions to Answer
- [ ] [Why does X work this way?]
- [ ] [What's the purpose of Y?]
- [ ] [How does Z integrate?]

## Initial Hypotheses
- [Hypothesis 1 about how system works]
- [Hypothesis 2 to validate through work]
````

---

## Debug Session Template

For tracking down specific bugs:
````markdown
# Debug Session: [Issue Title]

**Date:** [YYYY-MM-DD HH:MM]

## Problem
**Symptoms:**
- [Observable behavior]

**Expected:**
- [What should happen]

**Actual:**
- [What actually happens]

## Investigation
**Hypotheses Tested:**
1. [Hypothesis 1] - ❌ Ruled out because...
2. [Hypothesis 2] - ❌ Ruled out because...
3. [Hypothesis 3] - ✅ Confirmed!

**Root Cause:**
[Detailed explanation of what was actually wrong]

## Solution
**Fix Applied:**
- [Change 1]
- [Change 2]

**Why This Works:**
[Explanation]

**Alternative Approaches Considered:**
- [Alt 1 and why not chosen]
- [Alt 2 and why not chosen]

## Prevention
**How to Avoid in Future:**
- [Prevention measure 1]
- [Prevention measure 2]

**Test Added:**
```code
// Test that would have caught this
```

## Learnings
- [Key lesson 1]
- [Key lesson 2]
````

---

## Custom Template Variables

Feel free to add sections relevant to your workflow:

- `## Performance Impact` - For optimization work
- `## Security Considerations` - For sensitive features
- `## User Impact` - For user-facing changes
- `## Dependencies Added` - Track new packages
- `## Breaking Changes` - API changes
- `## Migration Notes` - For database/schema changes

---

## Template Usage Tips

1. **Start with standard template** - Covers most cases
2. **Remove unused sections** - Keep journals concise
3. **Add custom sections** - For project-specific needs
4. **Be consistent** - Same structure = easier to read later
5. **Automate** - Cline will follow the template automatically

---

**Copy any template above and customize for your needs!**
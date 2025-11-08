# Quick Start Guide: Reflective Developer for Cline

Get persistent memory for your Cline AI assistant in 5 minutes.

---

## What This Does

Cline will:
- 📝 Remember what it learned in past sessions
- 🔄 Avoid repeating the same mistakes
- 🎯 Build deeper understanding of your codebase over time
- 💡 Make context-aware suggestions based on project history

---

## Installation

### Step 1: Add the Rule to Cline

**Option A: Global (All Projects)**
1. Open Cline settings
2. Go to "Custom Instructions" or "Rules"
3. Paste the `reflective-developer.md` rule
4. Save

**Option B: Per-Project**
1. Create `.clinerules` in your project root
2. Paste the `reflective-developer.md` rule
3. Commit to version control (optional)

### Step 2: Create Journal Directory
````bash
mkdir -p .cline/journal
````

**Optional:** Add to `.gitignore` if you don't want to commit journals:
````bash
echo ".cline/journal/" >> .gitignore
````

### Step 3: First Session

Start working with Cline as normal. At the end of your session, Cline will automatically create its first journal entry.

That's it! 🎉

---

## Usage

### Normal Workflow

1. **Start session:** Cline reads recent journals automatically
2. **Work normally:** Ask Cline to code, debug, refactor
3. **End session:** Cline writes a journal entry reflecting on the work

No extra steps needed. Cline handles it automatically.

### Manual Journal Triggers

You can also explicitly ask:
- "Write a journal entry about what we just did"
- "What did you learn in the last session?"
- "Check your journals for similar issues"

---

## Example Session

**You:**
````
Add user authentication to the app
````

**Cline:**
````
[Reads past journals if they exist]
[Implements auth system]
[At session end, creates journal entry]
````

**Journal Created:**
````markdown
# Session: 2024-11-08 17:30

## What I Built
- Added JWT-based authentication
- Created /login and /register endpoints
- Implemented token validation middleware

## What I Learned
- Token expiry handling needs edge case testing
- User model needed `lastLogin` field for security audit
- Bcrypt rounds should be configurable via env vars

## For Next Session
- Add refresh token support
- Test token expiry edge cases
- Consider rate limiting on auth endpoints
````

**Next Day:**

**You:**
````
Add refresh tokens
````

**Cline:**
````
[Reads yesterday's journal]
"I see from my last session I noted token expiry needs edge case testing. 
I'll make sure to handle that properly while adding refresh tokens..."

[Implements with past learnings in mind]
````

---

## Verification

Check if it's working:
````bash
ls .cline/journal/
````

You should see:
````
2024-11-08-1730-session.md
2024-11-08-2015-session.md
````

Read a journal:
````bash
cat .cline/journal/2024-11-08-1730-session.md
````

---

## Tips for Best Results

### Do:
✅ Let Cline finish work before ending session (so it can journal)  
✅ Ask Cline to check journals when debugging recurring issues  
✅ Review journals yourself to see AI's learning progression  
✅ Archive old journals (move to `archive/` folder)  

### Don't:
❌ Delete journals mid-project (breaks continuity)  
❌ Manually edit journals (they're for AI, not humans)  
❌ Expect instant perfection (improvement builds over time)  

---

## Advanced: Customization

### Change Journal Frequency

In the rule, modify:
````
Read the 3 most recent journal entries
````
To:
````
Read the 5 most recent journal entries  # More context
Read the 1 most recent journal entry    # Less overhead
````

### Add Project-Specific Context

Create `.cline/context.md`:
````markdown
# Project Context

## Tech Stack
- Next.js 14, TypeScript, Prisma
- PostgreSQL, Redis for caching

## Code Style
- Prefer functional components
- Use Zod for validation
- Error handling via custom Result type

## Known Issues
- Redis connection sometimes drops on Vercel
- Prisma migrations can be slow in dev
````

Cline will read this alongside journals.

---

## Troubleshooting

**Cline isn't creating journals:**
- Check if `.cline/journal/` exists
- Verify the rule is loaded (check Cline settings)
- Manually trigger: "Please write a journal entry"

**Journals are too verbose:**
- Adjust the template to be more concise
- Tell Cline: "Keep journals under 200 words"

**Want to start fresh:**
````bash
mv .cline/journal .cline/journal.old
mkdir .cline/journal
````

---

## What's Next?

- ⭐ Star the [framework repo](https://github.com/[your-username]/consciousness-framework)
- 📖 Read the [full theory](../../docs/theory.md)
- 🤝 Share your results and improvements
- 🔬 Experiment with meta-cognitive prompts

---

## Support

Issues? Questions? Ideas?

Open an issue: [GitHub Issues](https://github.com/[your-username]/consciousness-framework/issues)

---

**Happy coding with persistent AI memory! 🧠✨**
## AI Audit

- My email validation just checks for @ and .. What are the edge cases this
  misses?

It misses cases like:

    - multiple @ symbols
    - invalid domains like test@.com
    - spaces in email
    - unicode emails
    - subdomain edge cases

- Do I actually need to catch all of those for a signup form, or is this good
  enough for now?
  - For most apps, simple validation is fine. Full validation is usually done
    server-side or via verification email. Over-validating on frontend can hurt
    UX.

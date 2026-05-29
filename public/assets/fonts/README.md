# Local fonts

## OasisGeometric-Regular.woff2

Used by the Oasis Geometric Typeface case study's live type tester
(`src/app/case-studies/type-design/TypeDesignCaseStudyClient.tsx`).

The `@font-face` rule loads this local file first and falls back to a
signed Supabase URL (which has an expiry) if it's missing. To make the
tester permanent and self-hosted, place the real font file here:

    public/assets/fonts/OasisGeometric-Regular.woff2

No code change is needed — once the file exists it is used automatically.

(It could not be downloaded automatically because the build sandbox has
no outbound network access.)

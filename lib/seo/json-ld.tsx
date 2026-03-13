import React from "react";

/**
 * @file lib/seo/json-ld.tsx
 * @description Safe JSON-LD injector component for Next.js 16.
 */

interface JsonLdProps {
  data: Record<string, any>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

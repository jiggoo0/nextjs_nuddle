import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => (
      <h1 className="text-foreground mt-8 mb-4 text-3xl font-bold tracking-tight">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-foreground border-border mt-8 mb-4 border-b pb-2 text-2xl font-bold tracking-tight">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-foreground mt-6 mb-3 text-xl font-bold tracking-tight">{children}</h3>
    ),
    p: ({ children }) => <p className="text-muted-foreground mb-4 leading-7">{children}</p>,
    ul: ({ children }) => (
      <ul className="text-muted-foreground mb-4 list-inside list-disc space-y-2">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="text-muted-foreground mb-4 list-inside list-decimal space-y-2">{children}</ol>
    ),
    li: ({ children }) => <li className="ml-4">{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className="border-primary text-muted-foreground my-6 border-l-4 pl-4 italic">
        {children}
      </blockquote>
    ),
    hr: () => <hr className="border-border my-8" />,
    img: (props) => (
      <div className="border-border my-8 overflow-hidden rounded-xl border shadow-md">
        <Image
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          {...(props as ImageProps)}
          alt={props.alt || "ช.สหชัย เกี๊ยวปูหมูแดง"}
        />
        {props.alt && (
          <p className="text-muted-foreground bg-muted/30 py-2 text-center text-xs">{props.alt}</p>
        )}
      </div>
    ),
    ...components,
  };
}

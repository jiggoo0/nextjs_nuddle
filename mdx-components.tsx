import type { MDXComponents } from 'mdx/types'
import Image, { ImageProps } from 'next/image'

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold tracking-tight text-foreground mt-8 mb-4">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold tracking-tight text-foreground mt-8 mb-4 border-b border-border pb-2">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-bold tracking-tight text-foreground mt-6 mb-3">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="leading-7 text-muted-foreground mb-4">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside mb-4 space-y-2 text-muted-foreground">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside mb-4 space-y-2 text-muted-foreground">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="ml-4">
        {children}
      </li>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary pl-4 italic my-6 text-muted-foreground">
        {children}
      </blockquote>
    ),
    hr: () => <hr className="my-8 border-border" />,
    img: (props) => (
      <div className="my-8 overflow-hidden rounded-xl border border-border shadow-md">
        <Image
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
          {...(props as ImageProps)}
          alt={props.alt || 'ช.สหชัย เกี๊ยวปูหมูแดง'}
        />
        {props.alt && (
          <p className="text-center text-xs text-muted-foreground py-2 bg-muted/30">
            {props.alt}
          </p>
        )}
      </div>
    ),
    ...components,
  }
}

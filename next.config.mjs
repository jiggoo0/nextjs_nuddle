import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  // 🚀 FIXED: Resolve Webpack CSS Resolver Error on Android/Local Environment
  webpack: (config) => {
    config.module.rules.forEach((rule) => {
      if (rule.oneOf) {
        rule.oneOf.forEach((oneOfRule) => {
          if (oneOfRule.use) {
            const cssLoader = Array.isArray(oneOfRule.use)
              ? oneOfRule.use.find((u) => u.loader?.includes("css-loader"))
              : oneOfRule.use.loader?.includes("css-loader") ? oneOfRule.use : null;

            if (cssLoader && cssLoader.options) {
              // 🛡️ Disable URL and Path Resolution to fix './&' and '/images/...' error in local Webpack
              cssLoader.options.url = false;
              cssLoader.options.import = false;
            }
          }
        });
      }
    });
    return config;
  },
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);

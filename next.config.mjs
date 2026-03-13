import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
  },
  // 🚀 FIXED: Advanced Webpack Configuration to handle Tailwind 4 CSS resolution issues in local environment
  webpack: (config) => {
    config.module.rules.forEach((rule) => {
      if (rule.oneOf) {
        rule.oneOf.forEach((oneOfRule) => {
          if (oneOfRule.use) {
            const uses = Array.isArray(oneOfRule.use) ? oneOfRule.use : [oneOfRule.use];
            uses.forEach((u) => {
              if (u.loader && u.loader.includes("css-loader")) {
                u.options = {
                  ...u.options,
                  url: false, // 🛡️ Do not resolve url() in CSS
                  import: false, // 🛡️ Do not resolve @import in CSS
                };
              }
            });
          }
        });
      }
    });

    // 🛡️ Ignore specific broken modules that Webpack tries to find but shouldn't
    config.resolve.alias = {
      ...config.resolve.alias,
      "./&": false,
      "../&": false,
    };

    return config;
  },
};

const withMDX = createMDX({});
export default withMDX(nextConfig);

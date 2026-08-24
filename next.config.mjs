/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  webpack: (config, { dev }) => {
    // Windows file-locking intermittently corrupts webpack's persistent
    // cache (ENOENT on the .pack.gz rename), which silently drops newly
    // added Tailwind utilities from the compiled CSS. Disabling the
    // filesystem cache in dev trades a bit of rebuild speed for reliability.
    if (dev) {
      config.cache = false;
    }
    return config;
  },
};

export default nextConfig;

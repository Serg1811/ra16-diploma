/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/netology-code/ra16-diploma/master/html/img/products/**",
      },
    ],
  },
};

module.exports = nextConfig;

module.exports = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: "/text",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

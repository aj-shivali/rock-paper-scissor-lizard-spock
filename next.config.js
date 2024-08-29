module.exports = {
    reactStrictMode: true,
    images: {
        domains: ['your-domain.com'],
    },
    webpack: (config, { dev, isServer }) => {
        // Custom webpack config
        return config;
    },
};
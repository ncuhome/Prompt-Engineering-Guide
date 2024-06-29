const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  latex: true
})

module.exports = withNextra({
  i18n: {
    locales: ['en', 'zh', 'jp', 'pt', 'tr', 'es', 'it', 'fr', 'kr', 'ca', 'fi', 'ru', 'de', 'ar'],
    defaultLocale: 'zh',
  },
  compress: true, // 启用压缩
  images: {
    // domains: ['example.com'], // 替换为你的图片域名
    // deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/avif', 'image/webp'],
  },
  webpack(config, { dev, isServer }) {
    const allowedSvgRegex = /components\/icons\/.+\.svg$/

    const fileLoaderRule = config.module.rules.find(rule =>
      rule.test?.test?.('.svg')
    )
    fileLoaderRule.exclude = allowedSvgRegex

    config.module.rules.push({
      test: allowedSvgRegex,
      use: ['@svgr/webpack']
    })

    if (!dev && !isServer) {
      // 开启 JavaScript 压缩
      config.optimization.minimize = true;

      // 添加 CSS 压缩插件
      const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
      config.plugins.push(
        new OptimizeCSSAssetsPlugin({})
      );
    }

    return config;
  },
  // 移除仅在开发时需要的配置
  devIndicators: {
    buildActivity: false,
  },
});

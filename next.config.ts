import type { NextConfig } from "next";

const nextConfig: NextConfig = {


  outputFileTracingIncludes: {
      '/api/**/*': ['./node_modules/.prisma/client/**/*'],
    },
  

  turbopack : {
      // 2. Map the internal missing module path directly to node_modules
      resolveAlias: {
        '.prisma/client/default': './node_modules/.prisma/client/default.js',
      },
    },

  

  /* config options here */
};

export default nextConfig;

import * as esbuild from 'esbuild-wasm';

export const unpkgPathPlugin = () => {
  return {
    name: 'unpkg-path-plugin',
    setup(build: esbuild.PluginBuild) {
      // Handles root entry file of 'index.js'
      build.onResolve({ filter: /(^index\.js$)/ }, () => ({
        path: 'index.js',
        namespace: 'a'
      }));

      // Handles relative paths in a module
      build.onResolve({ filter: /^\.+\// }, (args: any) => ({
        namespace: 'a',
        path: new URL(args.path, `https://unpkg.com${args.resolveDir}/`).href
      }));

      // Handles root file of a module
      build.onResolve({ filter: /.*/ }, async (args: any) => ({
        namespace: 'a',
        path: `https://unpkg.com/${args.path}`
      }));
    }
  };
};

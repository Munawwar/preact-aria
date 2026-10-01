declare const process: {env: {[key: string]: string | undefined; NODE_ENV?: string}};
declare const jest: {fn: (...args: any[]) => any};
declare module '*.js' {
  const value: any;
  export default value;
}

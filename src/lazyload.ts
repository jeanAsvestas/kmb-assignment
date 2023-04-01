import { lazy } from 'react';

export function lazyload(path: string, namedExport: string) {
  return lazy(() => {
    //webpack requirement for import path to have a base for dynamic imports
    const promise = import(`./${path}`);
    if (namedExport == null) {
      return promise;
    } else {
      return promise.then((module) => ({ default: module[namedExport] }));
    }
  });
}

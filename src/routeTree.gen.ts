/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { Route as rootRouteImport } from './routes/__root'
import { Route as IndexRouteImport } from './routes/index'
import { Route as CharactersIndexRouteImport } from './routes/characters/index'
import { Route as CharactersCharacterIdRouteImport } from './routes/characters/$characterId'

const IndexRoute = IndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRouteImport,
} as any)
const CharactersIndexRoute = CharactersIndexRouteImport.update({
  id: '/characters/',
  path: '/characters/',
  getParentRoute: () => rootRouteImport,
} as any)
const CharactersCharacterIdRoute = CharactersCharacterIdRouteImport.update({
  id: '/characters/$characterId',
  path: '/characters/$characterId',
  getParentRoute: () => rootRouteImport,
} as any)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/characters/$characterId': typeof CharactersCharacterIdRoute
  '/characters': typeof CharactersIndexRoute
}
export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/characters/$characterId': typeof CharactersCharacterIdRoute
  '/characters': typeof CharactersIndexRoute
}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/': typeof IndexRoute
  '/characters/$characterId': typeof CharactersCharacterIdRoute
  '/characters/': typeof CharactersIndexRoute
}
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/characters/$characterId' | '/characters'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/characters/$characterId' | '/characters'
  id: '__root__' | '/' | '/characters/$characterId' | '/characters/'
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  CharactersCharacterIdRoute: typeof CharactersCharacterIdRoute
  CharactersIndexRoute: typeof CharactersIndexRoute
}

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/characters/': {
      id: '/characters/'
      path: '/characters'
      fullPath: '/characters'
      preLoaderRoute: typeof CharactersIndexRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/characters/$characterId': {
      id: '/characters/$characterId'
      path: '/characters/$characterId'
      fullPath: '/characters/$characterId'
      preLoaderRoute: typeof CharactersCharacterIdRouteImport
      parentRoute: typeof rootRouteImport
    }
  }
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  CharactersCharacterIdRoute: CharactersCharacterIdRoute,
  CharactersIndexRoute: CharactersIndexRoute,
}
export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

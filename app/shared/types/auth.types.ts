import { NextPage } from "next";
import { ReactNode } from "react";
export type TypeRoles = { isOnlyAdmin?: boolean; isOnlyUser?: boolean };

export type NextPageAuth<P = {}> = NextPage<P> & TypeRoles;

export interface TypeComponentAuthFields {
  children: ReactNode;
  Component: {
    isOnlyAdmin?: boolean;
    isOnlyUser?: boolean;
  };
}

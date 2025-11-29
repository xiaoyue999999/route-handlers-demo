'use client';

import { createContext, useCallback, useContext } from 'react';

const ValueContext = createContext<Record<string, any>>({}); // 全局context

export const PackageProvider = ({
  children,
  value,
}: {
  children: React.ReactNode;
  value: Record<string, any>;
}) => {
  return <ValueContext.Provider value={value}>{children}</ValueContext.Provider>;
};

export const useDefaultTsx = () => useContext(ValueContext);

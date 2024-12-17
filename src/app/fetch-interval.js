'use client';

import * as React from 'react';
import { useAuth } from '@clerk/nextjs';

export const FetchInterval = () => {
  const auth = useAuth();

  React.useEffect(() => {
    const gimmeData = async () => {
      const token = await auth.getToken();
      fetch('http://localhost:3001/api/trpc/test', {
        headers: { Authorization: `Bearer ${token}` },
      });
    };
    window.setInterval(gimmeData, 3000);
  }, []);

  return <h1>Hello world</h1>;
};

// app/[locale]/(unauth)/layout.tsx
import React from 'react';

import { Navbar } from '@/templates/Navbar';

export default function UnauthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="pt-24">{children}</main>
    </>
  );
}

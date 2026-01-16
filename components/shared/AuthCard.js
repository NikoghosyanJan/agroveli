import React from 'react';
import Logo from './Logo';

export default function AuthCard({ children, size= "md" }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className={`w-full ${size === "md" ? "max-w-[480px]" : "max-w-[680px]"}`}>
        <Logo />
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          {children}
        </div>
      </div>
    </div>
  );
}
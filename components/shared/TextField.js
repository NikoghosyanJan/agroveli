import React from 'react';
import { Input } from '@/components/ui/input';

export default function TextField({ label, error, ...props }) {
  return (
    <label className="space-y-2 relative mb-4">
      {label && <span>{label}</span>}
      <Input {...props} />
      {error && <p className="text-sm absolute left-1 -bottom-4 text-red-500">{error}</p>}
    </label>
  );
}
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

export default function TextField({ label, error, ...props }) {
  return (
    <label className="space-y-2">
      {label && <span>{label}</span>}
      <Input {...props} />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </label>
  );
}
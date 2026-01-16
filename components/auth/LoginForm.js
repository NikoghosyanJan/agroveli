'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import TextField from '@/components/shared/TextField';
import PasswordField from '@/components/shared/PasswordField';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowRight } from 'lucide-react';

export default function LoginForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    keepLoggedIn: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Login:', formData);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-center mb-2">Log In</h2>
      <p className="text-center text-gray-600 text-sm mb-6">
        Need a Agroveli account?{' '}
        <Link href="/register" className="text-[#FF6B2C] hover:underline">
          Create an Account
        </Link>
      </p>

      <form onSubmit={handleSubmit} className="space-y-4" noValidate autoComplete="off">
        <TextField
          label="Email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="Email"
        />

        <PasswordField
          label="Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          placeholder="••••••••••"
        />

        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-2">
            <Checkbox
              id="keepLoggedIn"
              checked={formData.keepLoggedIn}
              onCheckedChange={(checked) =>
                setFormData({ ...formData, keepLoggedIn: checked })
              }
            />
            <label
              htmlFor="keepLoggedIn"
              className="text-sm text-gray-700 cursor-pointer"
            >
              Keep me logged in
            </label>
          </div>
          <Link
            href="/forgot-password"
            className="text-sm text-[#FF6B2C] hover:underline"
          >
            Forget password?
          </Link>
        </div>

        <Button type="submit" className="w-full mt-6">
          Log in
          <ArrowRight size={20} />
        </Button>
      </form>
    </div>
  );
}

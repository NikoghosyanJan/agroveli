'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import TextField from '@/components/shared/TextField';
import PasswordField from '@/components/shared/PasswordField';
import PhoneInput from '@/components/shared/PhoneInput';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function RegisterForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your registration logic here
    console.log('Register:', formData);
    // Redirect to verify email
    router.push('/verify-email');
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-center mb-2">Register</h2>
      <p className="text-center text-gray-600 text-sm mb-6">
        Already have an Account?{' '}
        <Link href="/login" className="text-[#FF6B2C] hover:underline">
          Log In
        </Link>
      </p>

      <form onSubmit={handleSubmit} className="space-y-4" noValidate autoComplete="off">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <TextField
            label="First Name"
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            placeholder="Damien"
          />
          <TextField
            label="Last Name"
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            placeholder="Creation"
          />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <TextField
            label="Email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="Email"
          />
          <PhoneInput
            label="Phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <PasswordField
            label="Create A Password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            placeholder="••••••••••"
          />
          <PasswordField
            label="Confirm Password"
            value={formData.confirmPassword}
            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
            placeholder="••••••••••"
          />
        </div>

        <Button type="submit" className="w-full mt-6">
          Register
          <ArrowRight size={20} />
        </Button>
      </form>
    </div>
  );
}
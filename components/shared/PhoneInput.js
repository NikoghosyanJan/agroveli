'use client';
import React, { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

const countries = [
  { code: '+995', name: 'Georgia', flag: '🇬🇪' },
  { code: '+49', name: 'Germany', flag: '🇩🇪' },
  { code: '+234', name: 'Nigeria', flag: '🇳🇬' },
];

export default function PhoneInput({ label, error, value, onChange, ...props }) {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-2">
      {label && <Label>{label}</Label>}
      <div className="flex gap-2">
        <div className="relative">
          <button
            type="button"
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex items-center gap-2 h-12 px-3 border border-gray-200 rounded-lg bg-white hover:bg-gray-50"
          >
            <span className="text-red-500 text-xl">{selectedCountry.flag}</span>
            <span className="text-sm">({selectedCountry.code})</span>
          </button>

          {showDropdown && (
            <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
              <div className="p-2">
                <Input
                  placeholder="Search countries..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-10"
                />
              </div>
              <div className="max-h-48 overflow-y-auto">
                {filteredCountries.map((country) => (
                  <button
                    key={country.code}
                    type="button"
                    onClick={() => {
                      setSelectedCountry(country);
                      setShowDropdown(false);
                      setSearchQuery('');
                    }}
                    className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-100 text-left"
                  >
                    <span className="text-xl">{country.flag}</span>
                    <span className="text-sm">{country.name} ({country.code})</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <Input
          placeholder={selectedCountry.code}
          value={value}
          onChange={onChange}
          className="flex-1"
          {...props}
        />
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}
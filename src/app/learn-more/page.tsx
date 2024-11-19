'use client';

import React, { useState } from 'react';
import { useLanguageStore } from '@/store/languageStore';
import { translations } from '@/utils/translations';
import { Search, Globe2, BookOpen } from 'lucide-react';

export default function LearnMore() {
  const { language } = useLanguageStore();
  const t = translations[language];
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<'chinese' | 'japanese'>('chinese');

  const chineseKeywords = [
    'chinese name generator', 'chinese girl name generator', 'chinese name generator fantasy',
    'chinese names generator', 'random chinese name generator', 'chinese name generator male',
    'male chinese name generator', 'chinese male names generator', 'chinese name generator with meaning',
    'chinese town name generator', 'chinese name generator female', 'female chinese names generator',
    'chinese city name generator', 'chinese fantasy name generator', 'chinese restaurant name generator',
    'random name generator chinese', 'chinese last name generator', 'chinese last names generator',
    'chinese name generator from english', 'fantasy chinese name generator', 'generator chinese name',
    'generate chinese name', 'ancient chinese name generator', 'chinese female name generator',
    'chinese generational names', 'chinese name generators'
  ];

  const japaneseKeywords = [
    'japanese name generator', 'japanese names generator', 'japanese last name generator',
    'random japanese name generator', 'japanese anime characters name generator',
    'japanese name and surname generator', 'female japanese names generator',
    'name generator japanese', 'female japanese name generator', 'japanese girl name generator',
    'japanese town name generator', 'japanese city name generator', 'japanese name.generator',
    'japanese male name generator', 'japanese name generator female', 'generate japanese name',
    'male japanese name generator', 'japanese female name generator', 'japanese village name generator',
    'japanese family name generator', 'japanese village names generator',
    'japanese name generator with meanings', 'japanese last names generator',
    'japanese names male generator', 'last name generator japanese',
    'female name generator japanese', 'japanese name female generator',
    'name in japanese generator', 'japanese female names generator',
    'random name generator japanese', 'japanese name generator anime',
    'japanese clan name generator', 'japanese fantasy name generator',
    'japanese name generator from english', 'japanese generator name',
    'super japanese name generator', 'japanese random name generator',
    'fantasy japanese name generator', 'japanese male names generator'
  ];

  const filteredKeywords = (activeTab === 'chinese' ? chineseKeywords : japaneseKeywords)
    .filter(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Name Generator Resources
          </h1>
          <p className="text-xl text-gray-600">
            Explore our comprehensive collection of name generation options
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          {/* Search Bar */}
          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search keywords..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          {/* Language Tabs */}
          <div className="flex space-x-4 mb-8">
            <button
              onClick={() => setActiveTab('chinese')}
              className={`flex items-center px-4 py-2 rounded-lg ${
                activeTab === 'chinese'
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Globe2 className="w-4 h-4 mr-2" />
              Chinese Names
            </button>
            <button
              onClick={() => setActiveTab('japanese')}
              className={`flex items-center px-4 py-2 rounded-lg ${
                activeTab === 'japanese'
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <BookOpen className="w-4 h-4 mr-2" />
              Japanese Names
            </button>
          </div>

          {/* Keywords Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredKeywords.map((keyword, index) => (
              <div
                key={index}
                className="bg-gray-50 p-4 rounded-lg hover:bg-purple-50 transition-colors cursor-pointer"
              >
                <p className="text-gray-700">{keyword}</p>
              </div>
            ))}
          </div>

          {filteredKeywords.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500">No keywords found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
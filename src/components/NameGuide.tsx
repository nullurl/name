'use client';

import React from 'react';
import { useLanguageStore } from '@/store/languageStore';
import { translations } from '@/utils/translations';
import { Globe } from 'lucide-react';

export default function NameGuide() {
  const { language } = useLanguageStore();
  const t = translations[language];

  const guide = {
    title: t.nameGuideTitle,
    intro: t.nameGuideIntro,
    sections: [
      {
        title: t.familyNameSection,
        content: t.familyNameContent
      },
      {
        title: t.givenNameSection,
        content: t.givenNameContent
      }
    ],
    tips: Array.isArray(t.namingTips) ? t.namingTips : [],
    elements: Array.isArray(t.popularElementsList) ? t.popularElementsList : [],
    genderPatterns: {
      male: Array.isArray(t.malePatterns) ? t.malePatterns : [],
      female: Array.isArray(t.femalePatterns) ? t.femalePatterns : []
    },
    trends: Array.isArray(t.trendsList) ? t.trendsList : []
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="prose lg:prose-xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center gap-2">
            <Globe className="w-6 h-6 text-purple-600" />
            {guide.title}
          </h2>
          
          <p className="text-gray-600 mb-12">
            {guide.intro}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            {guide.sections.map((section, index) => (
              <div key={index}>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {section.title}
                </h3>
                <p className="text-gray-600">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              {t.namingTipsTitle}
            </h3>
            <ul className="space-y-4">
              {guide.tips.map((tip, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-purple-600 font-bold mr-2">•</span>
                  <span className="text-gray-600">{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              {t.popularElements}
            </h3>
            <ul className="space-y-4">
              {guide.elements.map((element, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-purple-600 font-bold mr-2">•</span>
                  <span className="text-gray-600">{element}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              {t.genderConsiderations}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Male Names</h4>
                <ul className="space-y-4">
                  {guide.genderPatterns.male.map((pattern, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-600 font-bold mr-2">•</span>
                      <span className="text-gray-600">{pattern}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Female Names</h4>
                <ul className="space-y-4">
                  {guide.genderPatterns.female.map((pattern, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-pink-600 font-bold mr-2">•</span>
                      <span className="text-gray-600">{pattern}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              {t.modernTrends}
            </h3>
            <ul className="space-y-4">
              {guide.trends.map((trend, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-purple-600 font-bold mr-2">•</span>
                  <span className="text-gray-600">{trend}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}
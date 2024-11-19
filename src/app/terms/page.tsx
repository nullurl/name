'use client';

import React from 'react';
import { useLanguageStore } from '@/store/languageStore';
import { translations } from '@/utils/translations';

export default function TermsPage() {
  const { language } = useLanguageStore();
  const t = translations[language];

  const userObligationItems = Array.isArray(t.userObligationItems) 
    ? t.userObligationItems 
    : [
        'Use the service responsibly',
        'Respect intellectual property rights',
        'Maintain account security',
        'Comply with applicable laws'
      ];

  return (
    <main className="flex-grow bg-gray-50 pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">{t.termsTitle || 'Terms of Service'}</h1>
          
          <div className="space-y-6 text-gray-600">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">{t.termsIntro || 'Agreement to Terms'}</h2>
              <p>{t.termsIntroText || 'By accessing our service, you agree to these terms and conditions.'}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">{t.serviceAccess || 'Service Access'}</h2>
              <p>{t.serviceAccessText || 'We provide name generation services subject to these terms.'}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">{t.userObligations || 'User Obligations'}</h2>
              <ul className="list-disc pl-5 space-y-2">
                {userObligationItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">{t.intellectualProperty || 'Intellectual Property'}</h2>
              <p>{t.intellectualPropertyText || 'All content and functionality remain our intellectual property.'}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">{t.limitation || 'Limitation of Liability'}</h2>
              <p>{t.limitationText || 'We are not liable for any damages arising from service use.'}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">{t.termination || 'Account Termination'}</h2>
              <p>{t.terminationText || 'We reserve the right to terminate accounts for violations.'}</p>
            </div>

            <p className="text-sm text-gray-500 mt-8">
              {t.lastUpdated || 'Last Updated'}: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
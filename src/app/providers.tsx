'use client';

import React from 'react';
import { useLanguageStore } from '@/store/languageStore';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';

async function getMessages(locale: string) {
  try {
    return (await import(`@/messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

export function Providers({ children }: { children: React.ReactNode }) {
  const { language } = useLanguageStore();
  const [messages, setMessages] = React.useState<any>(null);

  React.useEffect(() => {
    getMessages(language).then(setMessages);
  }, [language]);

  if (!messages) {
    return null;
  }

  return (
    <NextIntlClientProvider locale={language} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
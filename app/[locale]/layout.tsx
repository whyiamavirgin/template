import {NextIntlClientProvider} from 'next-intl';
import { Providers } from './providers';
import { montserrat } from '../ui/fonts';
import '../globals.css'
import {getMessages} from 'next-intl/server';
import { Metadata } from 'next';
import { Footer } from '../components/footer';
import { Navbar } from '../components/topNav';

export const metadata: Metadata = {
    title: "Template",
    description: "Template",
  };
 
export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
 
  return (
    <html lang={locale}>
      <body className={montserrat.className}>
        <NextIntlClientProvider messages={messages}>
            <Providers>
                {/* <TopNav /> */}
                <div className='flex justify-between flex-col h-svh'>
                  <Navbar />
                  {children}
                  <Footer />
                </div>
            </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
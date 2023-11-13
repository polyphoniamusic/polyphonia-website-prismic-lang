import HeaderComponent from '@/app/components/Header/HeaderComponent';
import { getLocales } from '@/app/utils/getLocales';

// Import Prismic Data Client
import { createClient } from '@/prismicio';

export default async function Header() {
  const client = createClient();
  const settings = await client.getSingle('settings');

  // Récupérer l'URL de la page principale dans chaque langue
  const locales = await getLocales(settings, client);

  // Passer les données à HeaderComponent
  return <HeaderComponent locales={locales} settings={settings} />;
}



/*import HeaderComponent from '@/app/components/Header/HeaderComponent';
import { getLocales } from '@/app/utils/getLocales';
import { useRouter } from 'next/router';

// Import Prismic Data Client
import { createClient } from '@/prismicio';

export default async function Header({
    params: { lang },
  }: {
    params: { lang: string };
  }) {
  const client = createClient();
  const settings = await client.getSingle("settings");
  
  //const { query } = useRouter();
  //const lang = query.lang || 'en-us'; // Default to 'en-us' if lang is not present in the query params

  // ⬇️ Fetch home data based on the current language
  const home = await client.getByUID('page', 'home', { lang });

  // ⬇️ Fetch locales data based on the home data
  const locales = await getLocales(home, client);

  return (
    <HeaderComponent settings={settings} locales={locales} />
  );
}
*/
import Head from 'next/head';

export interface MetadataProps {
  title: string;
}

export const ContentfulMetadata = ({ title }: MetadataProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name={'description'}
        content={`Je suis développeur Front-End basé à la frontière de Genève, spécialisé sur le langage Javascript notamment sur des frameworks comme React.Js / Next.Js / Vue.Js. Un langage qui permettra à votre projet d'être extrêmement rapide, et facilement maintenable, la recette idéale pour faire la différence de nos jours, sur tous les points de vue.`}
      />
      <link rel={'shortcut icon'} href={'/favicon.png'} />
    </Head>
  );
};

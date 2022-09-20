import Head from 'next/head';
import Image from 'next/image';

import { DefaultLayout } from '../components/Layouts/DefaultLayout';
import { ContentfulMetadata } from '../helpers/Metadata';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <ContentfulMetadata title={'Manaa Nojoh'} />
      <DefaultLayout>
        <h1>Hello !</h1>
        <hr className={"my-14"} />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque placeat
          magni deleniti ullam molestiae mollitia a nisi. Eos praesentium iure
          non atque iusto itaque, modi quos fugit cumque aspernatur inventore?
        </p>
      </DefaultLayout>
    </>
  );
}

import { Header } from '../components/Header/header';
import { DefaultLayout } from '../components/Layouts/DefaultLayout';
import { ContentfulMetadata } from '../helpers/Metadata';

export default function Home() {
  return (
    <>
      <ContentfulMetadata title={'Manaa Nojoh'} />
      <DefaultLayout>
        <Header title={'Hello'} />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque placeat
          magni deleniti ullam molestiae mollitia a nisi. Eos praesentium iure
          non atque iusto itaque, modi quos fugit cumque aspernatur inventore?
        </p>
      </DefaultLayout>
    </>
  );
}

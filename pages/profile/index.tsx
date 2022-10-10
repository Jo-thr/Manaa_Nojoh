import { Header } from '../../components/Header/header';
import { DefaultLayout } from '../../components/Layouts/DefaultLayout';

export default function Profile() {
  return (
    <>
      <DefaultLayout>
        <Header title={'Profile'} />
      </DefaultLayout>
    </>
  );
}

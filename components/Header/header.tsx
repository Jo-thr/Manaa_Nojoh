export interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => (
  <div className={'w-full'}>
    <h1>{title}</h1>
    <hr className={'my-14'} />
  </div>
);

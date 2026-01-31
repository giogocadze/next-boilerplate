type Props = {
  children: React.ReactNode;
};

export default function Container({ children }: Props) {
  return <div style={{ maxWidth: 960, margin: '0 auto', padding: '24px 16px' }}>{children}</div>;
}

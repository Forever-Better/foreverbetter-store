import ColorInfo from '@/components/ColorInfo/ColorInfo';

export default function ColorBlock({ data }: { data: string[] }) {
  return <ColorInfo data={data} />;
}

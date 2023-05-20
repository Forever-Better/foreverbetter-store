import Gallery from './Gallery/Gallery';
import Order from './Order/Order';

export default function ProductScreen({ data }: { data: any }) {
  return (
    <div className='relative flex border-b border-black'>
      <Gallery data={data.images} />
      <Order data={data} />
    </div>
  );
}

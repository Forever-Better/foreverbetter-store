import CartItem from '../CartItem/CartItem';

export default function Bag({ data }: { data: any }) {
  return (
    <div>
      <h1 className='text-base font-medium'>BAG</h1>
      <ul>
        <li>
          <CartItem data={data[0]} />
        </li>
      </ul>
    </div>
  );
}

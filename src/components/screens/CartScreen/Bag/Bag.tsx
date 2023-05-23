import CartItem from '../CartItem/CartItem';

export default function Bag({ data }: { data: any }) {
  return (
    <div className='w-[55%]'>
      <ul className='flex flex-col'>
        {data.length ? (
          data?.map((item: any) => (
            <li key={item.id} className='border-b border-solid border-black py-4'>
              <CartItem data={item} />
            </li>
          ))
        ) : (
          <div className=''>Shopping Bag is Empty.</div>
        )}
      </ul>
    </div>
  );
}

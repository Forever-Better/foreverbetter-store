import Button from '@/components/common/Button/Button';

export default function ActionsBlock({ addItemToCart }: { addItemToCart: () => void }) {
  return (
    <div className='flex flex-col gap-2 ml-40 justify-end mt-3 mb-7'>
      <Button variant='secondary'>Buy</Button>
      <Button variant='secondary' onClick={addItemToCart}>
        Add to cart
      </Button>
    </div>
  );
}

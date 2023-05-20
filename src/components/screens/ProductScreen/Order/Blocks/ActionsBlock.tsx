import Button from '@/components/common/Button/Button';

export default function ActionsBlock() {
  return (
    <div className='flex flex-col gap-2 ml-40 justify-end mt-3 mb-7'>
      <Button>Buy</Button>
      <Button>Add to cart</Button>
    </div>
  );
}

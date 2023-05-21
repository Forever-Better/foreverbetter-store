import Button from '@/components/common/Button/Button';

export default function Summary() {
  return (
    <div className='w-[45%]'>
      <h2 className='text-sm font-medium mb-6'>SUMMARY</h2>
      <div className='flex flex-col gap-3'>
        <div className='flex justify-between'>
          <span>Subtotal</span>
          <span>299.95</span>
        </div>
        <div className='flex justify-between'>
          <span>Estimated Delivery & Handling</span>
          <span>5.00</span>
        </div>
      </div>
      <div className='flex justify-between border-t border-b border-black border-solid my-8 py-4'>
        <span>Total</span>
        <span>299.95</span>
      </div>
      <Button>Checkout</Button>
    </div>
  );
}

import IconButton from '@/components/common/IconButton/IconButton';
import { Heart2 } from '@/components/icons/Heart2';
import Trash from '@/components/icons/Trash';

export default function ToolsBlock() {
  const cartData = localStorage?.getItem('cart');

  const handleDelete = () => {};
  return (
    <div className='flex -ml-3'>
      <IconButton>
        <Heart2 />
      </IconButton>
      <IconButton>
        <Trash />
      </IconButton>
    </div>
  );
}

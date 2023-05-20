import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

import styles from './MenuDropdown.module.scss';

interface MenuDropdownProps {
  children: React.ReactNode;
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<string | boolean>>;
}
export default function MenuDropdown({
  children,
  className,
  visible,
  ...restProps
}: MenuDropdownProps & React.HTMLProps<HTMLDivElement>) {
  return (
    <div
      className={clsx(styles.menuDropdown, visible && styles.isFocused, 'border-b border-black', className)}
      {...restProps}
    >
      <div className={styles.container}>{children}</div>
    </div>
  );
}

MenuDropdown.Columns = function MenuDropdownColumns({
  children,
  className,
  ...restProps
}: React.PropsWithChildren & React.HTMLProps<HTMLDivElement>) {
  return (
    <div className={clsx(styles.menuColumns, className)} {...restProps}>
      {children}
    </div>
  );
};

MenuDropdown.Column = function MenuDropdownColumn({
  children,
  className,
  ...restProps
}: React.PropsWithChildren & React.HTMLProps<HTMLDivElement>) {
  return (
    <div className={clsx(styles.menuColumn, className)} {...restProps}>
      {children}
    </div>
  );
};

interface MenuDropdownColumnHeaderProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}
MenuDropdown.ColumnHeader = function MenuDropdownColumnHeader({
  children,
  className,
  href
}: MenuDropdownColumnHeaderProps) {
  return (
    <Link className={clsx(styles.menuColumnHeader, className)} href={href}>
      {children}
    </Link>
  );
};

interface MenuDropdownColumnItemProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}
MenuDropdown.ColumnItem = function MenuDropdownColumnItem({ children, className, href }: MenuDropdownColumnItemProps) {
  return (
    <Link className={clsx(styles.menuColumnItem, className)} href={href}>
      {children}
    </Link>
  );
};

interface MenuDropdownGalleryProps {
  children: React.ReactNode;
  type: string;
}
MenuDropdown.Gallery = function MenuDropdownGallery({
  children,
  className,
  type,
  ...restProps
}: MenuDropdownGalleryProps & React.HTMLProps<HTMLDivElement>) {
  return (
    <div className={clsx(type === 'static' && 'flex gap-6', className)} {...restProps}>
      {children}
    </div>
  );
};

interface MenuDropdownGalleryItemProps {
  label: string;
  href: string;
  image: string;
}
MenuDropdown.GalleryItem = function MenuDropdownGalleryItem({ href, image, label }: MenuDropdownGalleryItemProps) {
  return (
    <Link className={clsx('flex flex-col gap-3')} href={href}>
      <Image alt={label} height={200} quality={100} src={image} width={160} />
      <span className={styles.menuColumnItem}>{label}</span>
    </Link>
  );
};

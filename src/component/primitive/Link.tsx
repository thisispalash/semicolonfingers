import clsx from "clsx";


interface LinkProps {
  href: string;
  onClick?: () => void;
  children: React.ReactNode;
}


export default function Link({ href, onClick, children }: LinkProps) {

  return (
    <a 
      href={href}
      onClick={onClick}
      className={clsx(
        'font-system cursor-pointer',
        'hover:italic hover:scale-110',
        'transition-transform duration-300 ease-in-out',
      )}
    >
      {children}
    </a>
  );
}

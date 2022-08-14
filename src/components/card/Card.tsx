import { ComponentProps } from '../../@types';

export function Card({ children }: ComponentProps) {
  return (
    <div className='article'>
      {children}
    </div>
  );
}

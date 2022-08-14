import './Card.css';
import { ComponentProps } from '../../@types';

export function CardBody(props: ComponentProps) {
  return (
    <div className='card-body'>
      {props.children}
    </div>
  );
}

export function Card({ children }: ComponentProps) {
  return (
    <div className='card'>
      {children}
    </div>
  );
}

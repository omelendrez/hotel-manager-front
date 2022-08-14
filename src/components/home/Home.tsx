// create a typescript react funcional component
import { useContext } from 'react';
import ThemeContext from '../../context/theme-provider';
import { Card, CardBody } from '../card';

export default function Home() {
  const { dark, toggle } = useContext(ThemeContext);
  return (
    <Card>
      <h1>Home</h1>
      <CardBody>
        <button
          className='Switch'
          onClick={() => toggle()}
        >
          <span className={`material-icons md-${!dark ? 'dark' : 'light'}`}>{!dark ? 'face' : 'face_3'}</span>
        </button>
        <img alt="no se" className='img' src='https://colitas-felices.vercel.app/static/media/pets.74097462.jpg' />
        <button className='button'>{!dark ? 'Light theme' : 'Dark Theme'}</button>
      </CardBody>
    </Card>
  );
}

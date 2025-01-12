import { APP_VERSION } from './version';

const Footer = () => {
  const VITE_YOU_TOKEN = import.meta.env.VITE_YOU_TOKEN;

  return (
    <footer style={{ textAlign: 'center', marginTop: 40 }}>
      <p>Wersja: {APP_VERSION}</p>
      <p>Token: {VITE_YOU_TOKEN}</p>
    </footer>
  );
};

export default Footer;

import { Workbox } from 'workbox-window';

const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    console.log('Service Worker is not supported in this browser');
    return;
  }

  const wb = new Workbox('./sw.bundle.js');

  try {
    await wb.register();
    console.log('Service Worker Registered');
  } catch (error) {
    console.log('Failed to register Service Worker');
  }
};

export default swRegister;

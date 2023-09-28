import { registerPlugin } from '@capacitor/core';

export interface EchoPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
  checkPackage(options: { value: string }): Promise<{ value: string }>;
}

// -const Echo = registerPlugin('Echo');
const Echo = registerPlugin<EchoPlugin>('Echo');

export default Echo;

import ILogger from '../ILogger';

export default class ConsoleLogger implements ILogger {
  log(message: string) {
    console.log(message);
  }

  info(message: string) {
    console.info(message);
  }

  trace(message: string) {
    console.trace(message);
  }

  error(message: Error) {
    console.error(message);
  }
}

import Logger from './Logger';
// Strategies
import ConsoleLogger from './strategies/ConsoleLogger';

export default class LoggerFactory {
  private logger!: Logger;

  init() {
    this.logger = new Logger();
    this.logger.add('console-logger', new ConsoleLogger());
  }

  log(message: string) {
    this.logger.log(message);
  }

  info(message: string) {
    this.logger.info(message);
  }

  trace(message: string) {
    this.logger.trace(message);
  }

  error(message: Error) {
    this.logger.error(message);
  }
}

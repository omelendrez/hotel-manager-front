import ILogger from './ILogger';

export default class Logger {
  private loggersByName = new Map<string, ILogger>();

  add(name: string, logger: ILogger) {
    this.loggersByName.set(name, logger);
  }

  remove(name: string) {
    this.loggersByName.delete(name);
  }

  // All strategies must implement below methods

  log(message: string) {
    // Let's execute the trace method in all the strategies we added, with the same message
    this.loggersByName.forEach(logger => {
      logger.log(message);
    });
  }

  info(message: string) {
    // Let's execute the trace method in all the strategies we added, with the same message
    this.loggersByName.forEach(logger => {
      logger.info(message);
    });
  }

  trace(message: string) {
    // Let's execute the trace method in all the strategies we added, with the same message
    this.loggersByName.forEach(logger => {
      logger.trace(message);
    });
  }

  error(message: Error) {
    this.loggersByName.forEach(logger => {
      logger.error(message);
    });
  }
}

const sharedInstance = new Logger();

export {
  sharedInstance
};

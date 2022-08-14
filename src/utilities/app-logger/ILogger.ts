export default interface ILogger {
  log(message: string): void;
  info(message: string): void;
  trace(message: string): void;
  error(message: Error): void;
}

export interface IErrorDeserializer {
  (serializedError: string): Error;
}

export abstract class CacheOutPort {
  abstract get(key: string): Promise<string | null>;

  abstract set(key: string, value: string): Promise<'OK'>;
}

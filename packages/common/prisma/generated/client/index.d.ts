
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model NextNumber
 * 
 */
export type NextNumber = $Result.DefaultSelection<Prisma.$NextNumberPayload>
/**
 * Model AuditEvent
 * 
 */
export type AuditEvent = $Result.DefaultSelection<Prisma.$AuditEventPayload>
/**
 * Model CustomSale
 * 
 */
export type CustomSale = $Result.DefaultSelection<Prisma.$CustomSalePayload>
/**
 * Model CustomSaleIgnoreList
 * 
 */
export type CustomSaleIgnoreList = $Result.DefaultSelection<Prisma.$CustomSaleIgnoreListPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more NextNumbers
 * const nextNumbers = await prisma.nextNumber.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more NextNumbers
   * const nextNumbers = await prisma.nextNumber.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.nextNumber`: Exposes CRUD operations for the **NextNumber** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NextNumbers
    * const nextNumbers = await prisma.nextNumber.findMany()
    * ```
    */
  get nextNumber(): Prisma.NextNumberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditEvent`: Exposes CRUD operations for the **AuditEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditEvents
    * const auditEvents = await prisma.auditEvent.findMany()
    * ```
    */
  get auditEvent(): Prisma.AuditEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customSale`: Exposes CRUD operations for the **CustomSale** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CustomSales
    * const customSales = await prisma.customSale.findMany()
    * ```
    */
  get customSale(): Prisma.CustomSaleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customSaleIgnoreList`: Exposes CRUD operations for the **CustomSaleIgnoreList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CustomSaleIgnoreLists
    * const customSaleIgnoreLists = await prisma.customSaleIgnoreList.findMany()
    * ```
    */
  get customSaleIgnoreList(): Prisma.CustomSaleIgnoreListDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    NextNumber: 'NextNumber',
    AuditEvent: 'AuditEvent',
    CustomSale: 'CustomSale',
    CustomSaleIgnoreList: 'CustomSaleIgnoreList'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "nextNumber" | "auditEvent" | "customSale" | "customSaleIgnoreList"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      NextNumber: {
        payload: Prisma.$NextNumberPayload<ExtArgs>
        fields: Prisma.NextNumberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NextNumberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NextNumberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NextNumberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NextNumberPayload>
          }
          findFirst: {
            args: Prisma.NextNumberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NextNumberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NextNumberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NextNumberPayload>
          }
          findMany: {
            args: Prisma.NextNumberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NextNumberPayload>[]
          }
          create: {
            args: Prisma.NextNumberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NextNumberPayload>
          }
          createMany: {
            args: Prisma.NextNumberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NextNumberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NextNumberPayload>[]
          }
          delete: {
            args: Prisma.NextNumberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NextNumberPayload>
          }
          update: {
            args: Prisma.NextNumberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NextNumberPayload>
          }
          deleteMany: {
            args: Prisma.NextNumberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NextNumberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NextNumberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NextNumberPayload>[]
          }
          upsert: {
            args: Prisma.NextNumberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NextNumberPayload>
          }
          aggregate: {
            args: Prisma.NextNumberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNextNumber>
          }
          groupBy: {
            args: Prisma.NextNumberGroupByArgs<ExtArgs>
            result: $Utils.Optional<NextNumberGroupByOutputType>[]
          }
          count: {
            args: Prisma.NextNumberCountArgs<ExtArgs>
            result: $Utils.Optional<NextNumberCountAggregateOutputType> | number
          }
        }
      }
      AuditEvent: {
        payload: Prisma.$AuditEventPayload<ExtArgs>
        fields: Prisma.AuditEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditEventPayload>
          }
          findFirst: {
            args: Prisma.AuditEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditEventPayload>
          }
          findMany: {
            args: Prisma.AuditEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditEventPayload>[]
          }
          create: {
            args: Prisma.AuditEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditEventPayload>
          }
          createMany: {
            args: Prisma.AuditEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditEventPayload>[]
          }
          delete: {
            args: Prisma.AuditEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditEventPayload>
          }
          update: {
            args: Prisma.AuditEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditEventPayload>
          }
          deleteMany: {
            args: Prisma.AuditEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditEventPayload>[]
          }
          upsert: {
            args: Prisma.AuditEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditEventPayload>
          }
          aggregate: {
            args: Prisma.AuditEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditEvent>
          }
          groupBy: {
            args: Prisma.AuditEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditEventCountArgs<ExtArgs>
            result: $Utils.Optional<AuditEventCountAggregateOutputType> | number
          }
        }
      }
      CustomSale: {
        payload: Prisma.$CustomSalePayload<ExtArgs>
        fields: Prisma.CustomSaleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomSaleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomSalePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomSaleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomSalePayload>
          }
          findFirst: {
            args: Prisma.CustomSaleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomSalePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomSaleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomSalePayload>
          }
          findMany: {
            args: Prisma.CustomSaleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomSalePayload>[]
          }
          create: {
            args: Prisma.CustomSaleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomSalePayload>
          }
          createMany: {
            args: Prisma.CustomSaleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomSaleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomSalePayload>[]
          }
          delete: {
            args: Prisma.CustomSaleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomSalePayload>
          }
          update: {
            args: Prisma.CustomSaleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomSalePayload>
          }
          deleteMany: {
            args: Prisma.CustomSaleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomSaleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomSaleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomSalePayload>[]
          }
          upsert: {
            args: Prisma.CustomSaleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomSalePayload>
          }
          aggregate: {
            args: Prisma.CustomSaleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomSale>
          }
          groupBy: {
            args: Prisma.CustomSaleGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomSaleGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomSaleCountArgs<ExtArgs>
            result: $Utils.Optional<CustomSaleCountAggregateOutputType> | number
          }
        }
      }
      CustomSaleIgnoreList: {
        payload: Prisma.$CustomSaleIgnoreListPayload<ExtArgs>
        fields: Prisma.CustomSaleIgnoreListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomSaleIgnoreListFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomSaleIgnoreListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomSaleIgnoreListFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomSaleIgnoreListPayload>
          }
          findFirst: {
            args: Prisma.CustomSaleIgnoreListFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomSaleIgnoreListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomSaleIgnoreListFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomSaleIgnoreListPayload>
          }
          findMany: {
            args: Prisma.CustomSaleIgnoreListFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomSaleIgnoreListPayload>[]
          }
          create: {
            args: Prisma.CustomSaleIgnoreListCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomSaleIgnoreListPayload>
          }
          createMany: {
            args: Prisma.CustomSaleIgnoreListCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomSaleIgnoreListCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomSaleIgnoreListPayload>[]
          }
          delete: {
            args: Prisma.CustomSaleIgnoreListDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomSaleIgnoreListPayload>
          }
          update: {
            args: Prisma.CustomSaleIgnoreListUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomSaleIgnoreListPayload>
          }
          deleteMany: {
            args: Prisma.CustomSaleIgnoreListDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomSaleIgnoreListUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomSaleIgnoreListUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomSaleIgnoreListPayload>[]
          }
          upsert: {
            args: Prisma.CustomSaleIgnoreListUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomSaleIgnoreListPayload>
          }
          aggregate: {
            args: Prisma.CustomSaleIgnoreListAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomSaleIgnoreList>
          }
          groupBy: {
            args: Prisma.CustomSaleIgnoreListGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomSaleIgnoreListGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomSaleIgnoreListCountArgs<ExtArgs>
            result: $Utils.Optional<CustomSaleIgnoreListCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    nextNumber?: NextNumberOmit
    auditEvent?: AuditEventOmit
    customSale?: CustomSaleOmit
    customSaleIgnoreList?: CustomSaleIgnoreListOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model NextNumber
   */

  export type AggregateNextNumber = {
    _count: NextNumberCountAggregateOutputType | null
    _avg: NextNumberAvgAggregateOutputType | null
    _sum: NextNumberSumAggregateOutputType | null
    _min: NextNumberMinAggregateOutputType | null
    _max: NextNumberMaxAggregateOutputType | null
  }

  export type NextNumberAvgAggregateOutputType = {
    id: number | null
    value: number | null
  }

  export type NextNumberSumAggregateOutputType = {
    id: number | null
    value: number | null
  }

  export type NextNumberMinAggregateOutputType = {
    id: number | null
    name: string | null
    value: number | null
  }

  export type NextNumberMaxAggregateOutputType = {
    id: number | null
    name: string | null
    value: number | null
  }

  export type NextNumberCountAggregateOutputType = {
    id: number
    name: number
    value: number
    _all: number
  }


  export type NextNumberAvgAggregateInputType = {
    id?: true
    value?: true
  }

  export type NextNumberSumAggregateInputType = {
    id?: true
    value?: true
  }

  export type NextNumberMinAggregateInputType = {
    id?: true
    name?: true
    value?: true
  }

  export type NextNumberMaxAggregateInputType = {
    id?: true
    name?: true
    value?: true
  }

  export type NextNumberCountAggregateInputType = {
    id?: true
    name?: true
    value?: true
    _all?: true
  }

  export type NextNumberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NextNumber to aggregate.
     */
    where?: NextNumberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NextNumbers to fetch.
     */
    orderBy?: NextNumberOrderByWithRelationInput | NextNumberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NextNumberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NextNumbers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NextNumbers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NextNumbers
    **/
    _count?: true | NextNumberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NextNumberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NextNumberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NextNumberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NextNumberMaxAggregateInputType
  }

  export type GetNextNumberAggregateType<T extends NextNumberAggregateArgs> = {
        [P in keyof T & keyof AggregateNextNumber]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNextNumber[P]>
      : GetScalarType<T[P], AggregateNextNumber[P]>
  }




  export type NextNumberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NextNumberWhereInput
    orderBy?: NextNumberOrderByWithAggregationInput | NextNumberOrderByWithAggregationInput[]
    by: NextNumberScalarFieldEnum[] | NextNumberScalarFieldEnum
    having?: NextNumberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NextNumberCountAggregateInputType | true
    _avg?: NextNumberAvgAggregateInputType
    _sum?: NextNumberSumAggregateInputType
    _min?: NextNumberMinAggregateInputType
    _max?: NextNumberMaxAggregateInputType
  }

  export type NextNumberGroupByOutputType = {
    id: number
    name: string
    value: number
    _count: NextNumberCountAggregateOutputType | null
    _avg: NextNumberAvgAggregateOutputType | null
    _sum: NextNumberSumAggregateOutputType | null
    _min: NextNumberMinAggregateOutputType | null
    _max: NextNumberMaxAggregateOutputType | null
  }

  type GetNextNumberGroupByPayload<T extends NextNumberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NextNumberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NextNumberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NextNumberGroupByOutputType[P]>
            : GetScalarType<T[P], NextNumberGroupByOutputType[P]>
        }
      >
    >


  export type NextNumberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    value?: boolean
  }, ExtArgs["result"]["nextNumber"]>

  export type NextNumberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    value?: boolean
  }, ExtArgs["result"]["nextNumber"]>

  export type NextNumberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    value?: boolean
  }, ExtArgs["result"]["nextNumber"]>

  export type NextNumberSelectScalar = {
    id?: boolean
    name?: boolean
    value?: boolean
  }

  export type NextNumberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "value", ExtArgs["result"]["nextNumber"]>

  export type $NextNumberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NextNumber"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      value: number
    }, ExtArgs["result"]["nextNumber"]>
    composites: {}
  }

  type NextNumberGetPayload<S extends boolean | null | undefined | NextNumberDefaultArgs> = $Result.GetResult<Prisma.$NextNumberPayload, S>

  type NextNumberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NextNumberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NextNumberCountAggregateInputType | true
    }

  export interface NextNumberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NextNumber'], meta: { name: 'NextNumber' } }
    /**
     * Find zero or one NextNumber that matches the filter.
     * @param {NextNumberFindUniqueArgs} args - Arguments to find a NextNumber
     * @example
     * // Get one NextNumber
     * const nextNumber = await prisma.nextNumber.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NextNumberFindUniqueArgs>(args: SelectSubset<T, NextNumberFindUniqueArgs<ExtArgs>>): Prisma__NextNumberClient<$Result.GetResult<Prisma.$NextNumberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NextNumber that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NextNumberFindUniqueOrThrowArgs} args - Arguments to find a NextNumber
     * @example
     * // Get one NextNumber
     * const nextNumber = await prisma.nextNumber.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NextNumberFindUniqueOrThrowArgs>(args: SelectSubset<T, NextNumberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NextNumberClient<$Result.GetResult<Prisma.$NextNumberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NextNumber that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NextNumberFindFirstArgs} args - Arguments to find a NextNumber
     * @example
     * // Get one NextNumber
     * const nextNumber = await prisma.nextNumber.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NextNumberFindFirstArgs>(args?: SelectSubset<T, NextNumberFindFirstArgs<ExtArgs>>): Prisma__NextNumberClient<$Result.GetResult<Prisma.$NextNumberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NextNumber that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NextNumberFindFirstOrThrowArgs} args - Arguments to find a NextNumber
     * @example
     * // Get one NextNumber
     * const nextNumber = await prisma.nextNumber.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NextNumberFindFirstOrThrowArgs>(args?: SelectSubset<T, NextNumberFindFirstOrThrowArgs<ExtArgs>>): Prisma__NextNumberClient<$Result.GetResult<Prisma.$NextNumberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NextNumbers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NextNumberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NextNumbers
     * const nextNumbers = await prisma.nextNumber.findMany()
     * 
     * // Get first 10 NextNumbers
     * const nextNumbers = await prisma.nextNumber.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nextNumberWithIdOnly = await prisma.nextNumber.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NextNumberFindManyArgs>(args?: SelectSubset<T, NextNumberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NextNumberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NextNumber.
     * @param {NextNumberCreateArgs} args - Arguments to create a NextNumber.
     * @example
     * // Create one NextNumber
     * const NextNumber = await prisma.nextNumber.create({
     *   data: {
     *     // ... data to create a NextNumber
     *   }
     * })
     * 
     */
    create<T extends NextNumberCreateArgs>(args: SelectSubset<T, NextNumberCreateArgs<ExtArgs>>): Prisma__NextNumberClient<$Result.GetResult<Prisma.$NextNumberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NextNumbers.
     * @param {NextNumberCreateManyArgs} args - Arguments to create many NextNumbers.
     * @example
     * // Create many NextNumbers
     * const nextNumber = await prisma.nextNumber.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NextNumberCreateManyArgs>(args?: SelectSubset<T, NextNumberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NextNumbers and returns the data saved in the database.
     * @param {NextNumberCreateManyAndReturnArgs} args - Arguments to create many NextNumbers.
     * @example
     * // Create many NextNumbers
     * const nextNumber = await prisma.nextNumber.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NextNumbers and only return the `id`
     * const nextNumberWithIdOnly = await prisma.nextNumber.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NextNumberCreateManyAndReturnArgs>(args?: SelectSubset<T, NextNumberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NextNumberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NextNumber.
     * @param {NextNumberDeleteArgs} args - Arguments to delete one NextNumber.
     * @example
     * // Delete one NextNumber
     * const NextNumber = await prisma.nextNumber.delete({
     *   where: {
     *     // ... filter to delete one NextNumber
     *   }
     * })
     * 
     */
    delete<T extends NextNumberDeleteArgs>(args: SelectSubset<T, NextNumberDeleteArgs<ExtArgs>>): Prisma__NextNumberClient<$Result.GetResult<Prisma.$NextNumberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NextNumber.
     * @param {NextNumberUpdateArgs} args - Arguments to update one NextNumber.
     * @example
     * // Update one NextNumber
     * const nextNumber = await prisma.nextNumber.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NextNumberUpdateArgs>(args: SelectSubset<T, NextNumberUpdateArgs<ExtArgs>>): Prisma__NextNumberClient<$Result.GetResult<Prisma.$NextNumberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NextNumbers.
     * @param {NextNumberDeleteManyArgs} args - Arguments to filter NextNumbers to delete.
     * @example
     * // Delete a few NextNumbers
     * const { count } = await prisma.nextNumber.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NextNumberDeleteManyArgs>(args?: SelectSubset<T, NextNumberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NextNumbers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NextNumberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NextNumbers
     * const nextNumber = await prisma.nextNumber.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NextNumberUpdateManyArgs>(args: SelectSubset<T, NextNumberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NextNumbers and returns the data updated in the database.
     * @param {NextNumberUpdateManyAndReturnArgs} args - Arguments to update many NextNumbers.
     * @example
     * // Update many NextNumbers
     * const nextNumber = await prisma.nextNumber.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NextNumbers and only return the `id`
     * const nextNumberWithIdOnly = await prisma.nextNumber.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NextNumberUpdateManyAndReturnArgs>(args: SelectSubset<T, NextNumberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NextNumberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NextNumber.
     * @param {NextNumberUpsertArgs} args - Arguments to update or create a NextNumber.
     * @example
     * // Update or create a NextNumber
     * const nextNumber = await prisma.nextNumber.upsert({
     *   create: {
     *     // ... data to create a NextNumber
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NextNumber we want to update
     *   }
     * })
     */
    upsert<T extends NextNumberUpsertArgs>(args: SelectSubset<T, NextNumberUpsertArgs<ExtArgs>>): Prisma__NextNumberClient<$Result.GetResult<Prisma.$NextNumberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NextNumbers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NextNumberCountArgs} args - Arguments to filter NextNumbers to count.
     * @example
     * // Count the number of NextNumbers
     * const count = await prisma.nextNumber.count({
     *   where: {
     *     // ... the filter for the NextNumbers we want to count
     *   }
     * })
    **/
    count<T extends NextNumberCountArgs>(
      args?: Subset<T, NextNumberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NextNumberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NextNumber.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NextNumberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NextNumberAggregateArgs>(args: Subset<T, NextNumberAggregateArgs>): Prisma.PrismaPromise<GetNextNumberAggregateType<T>>

    /**
     * Group by NextNumber.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NextNumberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NextNumberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NextNumberGroupByArgs['orderBy'] }
        : { orderBy?: NextNumberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NextNumberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNextNumberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NextNumber model
   */
  readonly fields: NextNumberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NextNumber.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NextNumberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NextNumber model
   */
  interface NextNumberFieldRefs {
    readonly id: FieldRef<"NextNumber", 'Int'>
    readonly name: FieldRef<"NextNumber", 'String'>
    readonly value: FieldRef<"NextNumber", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * NextNumber findUnique
   */
  export type NextNumberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NextNumber
     */
    select?: NextNumberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NextNumber
     */
    omit?: NextNumberOmit<ExtArgs> | null
    /**
     * Filter, which NextNumber to fetch.
     */
    where: NextNumberWhereUniqueInput
  }

  /**
   * NextNumber findUniqueOrThrow
   */
  export type NextNumberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NextNumber
     */
    select?: NextNumberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NextNumber
     */
    omit?: NextNumberOmit<ExtArgs> | null
    /**
     * Filter, which NextNumber to fetch.
     */
    where: NextNumberWhereUniqueInput
  }

  /**
   * NextNumber findFirst
   */
  export type NextNumberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NextNumber
     */
    select?: NextNumberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NextNumber
     */
    omit?: NextNumberOmit<ExtArgs> | null
    /**
     * Filter, which NextNumber to fetch.
     */
    where?: NextNumberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NextNumbers to fetch.
     */
    orderBy?: NextNumberOrderByWithRelationInput | NextNumberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NextNumbers.
     */
    cursor?: NextNumberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NextNumbers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NextNumbers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NextNumbers.
     */
    distinct?: NextNumberScalarFieldEnum | NextNumberScalarFieldEnum[]
  }

  /**
   * NextNumber findFirstOrThrow
   */
  export type NextNumberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NextNumber
     */
    select?: NextNumberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NextNumber
     */
    omit?: NextNumberOmit<ExtArgs> | null
    /**
     * Filter, which NextNumber to fetch.
     */
    where?: NextNumberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NextNumbers to fetch.
     */
    orderBy?: NextNumberOrderByWithRelationInput | NextNumberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NextNumbers.
     */
    cursor?: NextNumberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NextNumbers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NextNumbers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NextNumbers.
     */
    distinct?: NextNumberScalarFieldEnum | NextNumberScalarFieldEnum[]
  }

  /**
   * NextNumber findMany
   */
  export type NextNumberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NextNumber
     */
    select?: NextNumberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NextNumber
     */
    omit?: NextNumberOmit<ExtArgs> | null
    /**
     * Filter, which NextNumbers to fetch.
     */
    where?: NextNumberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NextNumbers to fetch.
     */
    orderBy?: NextNumberOrderByWithRelationInput | NextNumberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NextNumbers.
     */
    cursor?: NextNumberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NextNumbers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NextNumbers.
     */
    skip?: number
    distinct?: NextNumberScalarFieldEnum | NextNumberScalarFieldEnum[]
  }

  /**
   * NextNumber create
   */
  export type NextNumberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NextNumber
     */
    select?: NextNumberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NextNumber
     */
    omit?: NextNumberOmit<ExtArgs> | null
    /**
     * The data needed to create a NextNumber.
     */
    data: XOR<NextNumberCreateInput, NextNumberUncheckedCreateInput>
  }

  /**
   * NextNumber createMany
   */
  export type NextNumberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NextNumbers.
     */
    data: NextNumberCreateManyInput | NextNumberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NextNumber createManyAndReturn
   */
  export type NextNumberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NextNumber
     */
    select?: NextNumberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NextNumber
     */
    omit?: NextNumberOmit<ExtArgs> | null
    /**
     * The data used to create many NextNumbers.
     */
    data: NextNumberCreateManyInput | NextNumberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NextNumber update
   */
  export type NextNumberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NextNumber
     */
    select?: NextNumberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NextNumber
     */
    omit?: NextNumberOmit<ExtArgs> | null
    /**
     * The data needed to update a NextNumber.
     */
    data: XOR<NextNumberUpdateInput, NextNumberUncheckedUpdateInput>
    /**
     * Choose, which NextNumber to update.
     */
    where: NextNumberWhereUniqueInput
  }

  /**
   * NextNumber updateMany
   */
  export type NextNumberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NextNumbers.
     */
    data: XOR<NextNumberUpdateManyMutationInput, NextNumberUncheckedUpdateManyInput>
    /**
     * Filter which NextNumbers to update
     */
    where?: NextNumberWhereInput
    /**
     * Limit how many NextNumbers to update.
     */
    limit?: number
  }

  /**
   * NextNumber updateManyAndReturn
   */
  export type NextNumberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NextNumber
     */
    select?: NextNumberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NextNumber
     */
    omit?: NextNumberOmit<ExtArgs> | null
    /**
     * The data used to update NextNumbers.
     */
    data: XOR<NextNumberUpdateManyMutationInput, NextNumberUncheckedUpdateManyInput>
    /**
     * Filter which NextNumbers to update
     */
    where?: NextNumberWhereInput
    /**
     * Limit how many NextNumbers to update.
     */
    limit?: number
  }

  /**
   * NextNumber upsert
   */
  export type NextNumberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NextNumber
     */
    select?: NextNumberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NextNumber
     */
    omit?: NextNumberOmit<ExtArgs> | null
    /**
     * The filter to search for the NextNumber to update in case it exists.
     */
    where: NextNumberWhereUniqueInput
    /**
     * In case the NextNumber found by the `where` argument doesn't exist, create a new NextNumber with this data.
     */
    create: XOR<NextNumberCreateInput, NextNumberUncheckedCreateInput>
    /**
     * In case the NextNumber was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NextNumberUpdateInput, NextNumberUncheckedUpdateInput>
  }

  /**
   * NextNumber delete
   */
  export type NextNumberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NextNumber
     */
    select?: NextNumberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NextNumber
     */
    omit?: NextNumberOmit<ExtArgs> | null
    /**
     * Filter which NextNumber to delete.
     */
    where: NextNumberWhereUniqueInput
  }

  /**
   * NextNumber deleteMany
   */
  export type NextNumberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NextNumbers to delete
     */
    where?: NextNumberWhereInput
    /**
     * Limit how many NextNumbers to delete.
     */
    limit?: number
  }

  /**
   * NextNumber without action
   */
  export type NextNumberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NextNumber
     */
    select?: NextNumberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NextNumber
     */
    omit?: NextNumberOmit<ExtArgs> | null
  }


  /**
   * Model AuditEvent
   */

  export type AggregateAuditEvent = {
    _count: AuditEventCountAggregateOutputType | null
    _avg: AuditEventAvgAggregateOutputType | null
    _sum: AuditEventSumAggregateOutputType | null
    _min: AuditEventMinAggregateOutputType | null
    _max: AuditEventMaxAggregateOutputType | null
  }

  export type AuditEventAvgAggregateOutputType = {
    id: number | null
  }

  export type AuditEventSumAggregateOutputType = {
    id: number | null
  }

  export type AuditEventMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    eventType: string | null
    sourceId: string | null
    targetId: string | null
    data: string | null
  }

  export type AuditEventMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    eventType: string | null
    sourceId: string | null
    targetId: string | null
    data: string | null
  }

  export type AuditEventCountAggregateOutputType = {
    id: number
    createdAt: number
    eventType: number
    sourceId: number
    targetId: number
    data: number
    _all: number
  }


  export type AuditEventAvgAggregateInputType = {
    id?: true
  }

  export type AuditEventSumAggregateInputType = {
    id?: true
  }

  export type AuditEventMinAggregateInputType = {
    id?: true
    createdAt?: true
    eventType?: true
    sourceId?: true
    targetId?: true
    data?: true
  }

  export type AuditEventMaxAggregateInputType = {
    id?: true
    createdAt?: true
    eventType?: true
    sourceId?: true
    targetId?: true
    data?: true
  }

  export type AuditEventCountAggregateInputType = {
    id?: true
    createdAt?: true
    eventType?: true
    sourceId?: true
    targetId?: true
    data?: true
    _all?: true
  }

  export type AuditEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditEvent to aggregate.
     */
    where?: AuditEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditEvents to fetch.
     */
    orderBy?: AuditEventOrderByWithRelationInput | AuditEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditEvents
    **/
    _count?: true | AuditEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuditEventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuditEventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditEventMaxAggregateInputType
  }

  export type GetAuditEventAggregateType<T extends AuditEventAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditEvent[P]>
      : GetScalarType<T[P], AggregateAuditEvent[P]>
  }




  export type AuditEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditEventWhereInput
    orderBy?: AuditEventOrderByWithAggregationInput | AuditEventOrderByWithAggregationInput[]
    by: AuditEventScalarFieldEnum[] | AuditEventScalarFieldEnum
    having?: AuditEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditEventCountAggregateInputType | true
    _avg?: AuditEventAvgAggregateInputType
    _sum?: AuditEventSumAggregateInputType
    _min?: AuditEventMinAggregateInputType
    _max?: AuditEventMaxAggregateInputType
  }

  export type AuditEventGroupByOutputType = {
    id: number
    createdAt: Date
    eventType: string
    sourceId: string | null
    targetId: string | null
    data: string | null
    _count: AuditEventCountAggregateOutputType | null
    _avg: AuditEventAvgAggregateOutputType | null
    _sum: AuditEventSumAggregateOutputType | null
    _min: AuditEventMinAggregateOutputType | null
    _max: AuditEventMaxAggregateOutputType | null
  }

  type GetAuditEventGroupByPayload<T extends AuditEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditEventGroupByOutputType[P]>
            : GetScalarType<T[P], AuditEventGroupByOutputType[P]>
        }
      >
    >


  export type AuditEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    eventType?: boolean
    sourceId?: boolean
    targetId?: boolean
    data?: boolean
  }, ExtArgs["result"]["auditEvent"]>

  export type AuditEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    eventType?: boolean
    sourceId?: boolean
    targetId?: boolean
    data?: boolean
  }, ExtArgs["result"]["auditEvent"]>

  export type AuditEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    eventType?: boolean
    sourceId?: boolean
    targetId?: boolean
    data?: boolean
  }, ExtArgs["result"]["auditEvent"]>

  export type AuditEventSelectScalar = {
    id?: boolean
    createdAt?: boolean
    eventType?: boolean
    sourceId?: boolean
    targetId?: boolean
    data?: boolean
  }

  export type AuditEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "eventType" | "sourceId" | "targetId" | "data", ExtArgs["result"]["auditEvent"]>

  export type $AuditEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditEvent"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      eventType: string
      sourceId: string | null
      targetId: string | null
      data: string | null
    }, ExtArgs["result"]["auditEvent"]>
    composites: {}
  }

  type AuditEventGetPayload<S extends boolean | null | undefined | AuditEventDefaultArgs> = $Result.GetResult<Prisma.$AuditEventPayload, S>

  type AuditEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditEventCountAggregateInputType | true
    }

  export interface AuditEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditEvent'], meta: { name: 'AuditEvent' } }
    /**
     * Find zero or one AuditEvent that matches the filter.
     * @param {AuditEventFindUniqueArgs} args - Arguments to find a AuditEvent
     * @example
     * // Get one AuditEvent
     * const auditEvent = await prisma.auditEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditEventFindUniqueArgs>(args: SelectSubset<T, AuditEventFindUniqueArgs<ExtArgs>>): Prisma__AuditEventClient<$Result.GetResult<Prisma.$AuditEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditEventFindUniqueOrThrowArgs} args - Arguments to find a AuditEvent
     * @example
     * // Get one AuditEvent
     * const auditEvent = await prisma.auditEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditEventFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditEventClient<$Result.GetResult<Prisma.$AuditEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditEventFindFirstArgs} args - Arguments to find a AuditEvent
     * @example
     * // Get one AuditEvent
     * const auditEvent = await prisma.auditEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditEventFindFirstArgs>(args?: SelectSubset<T, AuditEventFindFirstArgs<ExtArgs>>): Prisma__AuditEventClient<$Result.GetResult<Prisma.$AuditEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditEventFindFirstOrThrowArgs} args - Arguments to find a AuditEvent
     * @example
     * // Get one AuditEvent
     * const auditEvent = await prisma.auditEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditEventFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditEventClient<$Result.GetResult<Prisma.$AuditEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditEvents
     * const auditEvents = await prisma.auditEvent.findMany()
     * 
     * // Get first 10 AuditEvents
     * const auditEvents = await prisma.auditEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditEventWithIdOnly = await prisma.auditEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditEventFindManyArgs>(args?: SelectSubset<T, AuditEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditEvent.
     * @param {AuditEventCreateArgs} args - Arguments to create a AuditEvent.
     * @example
     * // Create one AuditEvent
     * const AuditEvent = await prisma.auditEvent.create({
     *   data: {
     *     // ... data to create a AuditEvent
     *   }
     * })
     * 
     */
    create<T extends AuditEventCreateArgs>(args: SelectSubset<T, AuditEventCreateArgs<ExtArgs>>): Prisma__AuditEventClient<$Result.GetResult<Prisma.$AuditEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditEvents.
     * @param {AuditEventCreateManyArgs} args - Arguments to create many AuditEvents.
     * @example
     * // Create many AuditEvents
     * const auditEvent = await prisma.auditEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditEventCreateManyArgs>(args?: SelectSubset<T, AuditEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditEvents and returns the data saved in the database.
     * @param {AuditEventCreateManyAndReturnArgs} args - Arguments to create many AuditEvents.
     * @example
     * // Create many AuditEvents
     * const auditEvent = await prisma.auditEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditEvents and only return the `id`
     * const auditEventWithIdOnly = await prisma.auditEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditEventCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuditEvent.
     * @param {AuditEventDeleteArgs} args - Arguments to delete one AuditEvent.
     * @example
     * // Delete one AuditEvent
     * const AuditEvent = await prisma.auditEvent.delete({
     *   where: {
     *     // ... filter to delete one AuditEvent
     *   }
     * })
     * 
     */
    delete<T extends AuditEventDeleteArgs>(args: SelectSubset<T, AuditEventDeleteArgs<ExtArgs>>): Prisma__AuditEventClient<$Result.GetResult<Prisma.$AuditEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditEvent.
     * @param {AuditEventUpdateArgs} args - Arguments to update one AuditEvent.
     * @example
     * // Update one AuditEvent
     * const auditEvent = await prisma.auditEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditEventUpdateArgs>(args: SelectSubset<T, AuditEventUpdateArgs<ExtArgs>>): Prisma__AuditEventClient<$Result.GetResult<Prisma.$AuditEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditEvents.
     * @param {AuditEventDeleteManyArgs} args - Arguments to filter AuditEvents to delete.
     * @example
     * // Delete a few AuditEvents
     * const { count } = await prisma.auditEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditEventDeleteManyArgs>(args?: SelectSubset<T, AuditEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditEvents
     * const auditEvent = await prisma.auditEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditEventUpdateManyArgs>(args: SelectSubset<T, AuditEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditEvents and returns the data updated in the database.
     * @param {AuditEventUpdateManyAndReturnArgs} args - Arguments to update many AuditEvents.
     * @example
     * // Update many AuditEvents
     * const auditEvent = await prisma.auditEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditEvents and only return the `id`
     * const auditEventWithIdOnly = await prisma.auditEvent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuditEventUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuditEvent.
     * @param {AuditEventUpsertArgs} args - Arguments to update or create a AuditEvent.
     * @example
     * // Update or create a AuditEvent
     * const auditEvent = await prisma.auditEvent.upsert({
     *   create: {
     *     // ... data to create a AuditEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditEvent we want to update
     *   }
     * })
     */
    upsert<T extends AuditEventUpsertArgs>(args: SelectSubset<T, AuditEventUpsertArgs<ExtArgs>>): Prisma__AuditEventClient<$Result.GetResult<Prisma.$AuditEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditEventCountArgs} args - Arguments to filter AuditEvents to count.
     * @example
     * // Count the number of AuditEvents
     * const count = await prisma.auditEvent.count({
     *   where: {
     *     // ... the filter for the AuditEvents we want to count
     *   }
     * })
    **/
    count<T extends AuditEventCountArgs>(
      args?: Subset<T, AuditEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuditEventAggregateArgs>(args: Subset<T, AuditEventAggregateArgs>): Prisma.PrismaPromise<GetAuditEventAggregateType<T>>

    /**
     * Group by AuditEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuditEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditEventGroupByArgs['orderBy'] }
        : { orderBy?: AuditEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuditEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditEvent model
   */
  readonly fields: AuditEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuditEvent model
   */
  interface AuditEventFieldRefs {
    readonly id: FieldRef<"AuditEvent", 'Int'>
    readonly createdAt: FieldRef<"AuditEvent", 'DateTime'>
    readonly eventType: FieldRef<"AuditEvent", 'String'>
    readonly sourceId: FieldRef<"AuditEvent", 'String'>
    readonly targetId: FieldRef<"AuditEvent", 'String'>
    readonly data: FieldRef<"AuditEvent", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AuditEvent findUnique
   */
  export type AuditEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditEvent
     */
    omit?: AuditEventOmit<ExtArgs> | null
    /**
     * Filter, which AuditEvent to fetch.
     */
    where: AuditEventWhereUniqueInput
  }

  /**
   * AuditEvent findUniqueOrThrow
   */
  export type AuditEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditEvent
     */
    omit?: AuditEventOmit<ExtArgs> | null
    /**
     * Filter, which AuditEvent to fetch.
     */
    where: AuditEventWhereUniqueInput
  }

  /**
   * AuditEvent findFirst
   */
  export type AuditEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditEvent
     */
    omit?: AuditEventOmit<ExtArgs> | null
    /**
     * Filter, which AuditEvent to fetch.
     */
    where?: AuditEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditEvents to fetch.
     */
    orderBy?: AuditEventOrderByWithRelationInput | AuditEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditEvents.
     */
    cursor?: AuditEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditEvents.
     */
    distinct?: AuditEventScalarFieldEnum | AuditEventScalarFieldEnum[]
  }

  /**
   * AuditEvent findFirstOrThrow
   */
  export type AuditEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditEvent
     */
    omit?: AuditEventOmit<ExtArgs> | null
    /**
     * Filter, which AuditEvent to fetch.
     */
    where?: AuditEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditEvents to fetch.
     */
    orderBy?: AuditEventOrderByWithRelationInput | AuditEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditEvents.
     */
    cursor?: AuditEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditEvents.
     */
    distinct?: AuditEventScalarFieldEnum | AuditEventScalarFieldEnum[]
  }

  /**
   * AuditEvent findMany
   */
  export type AuditEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditEvent
     */
    omit?: AuditEventOmit<ExtArgs> | null
    /**
     * Filter, which AuditEvents to fetch.
     */
    where?: AuditEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditEvents to fetch.
     */
    orderBy?: AuditEventOrderByWithRelationInput | AuditEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditEvents.
     */
    cursor?: AuditEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditEvents.
     */
    skip?: number
    distinct?: AuditEventScalarFieldEnum | AuditEventScalarFieldEnum[]
  }

  /**
   * AuditEvent create
   */
  export type AuditEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditEvent
     */
    omit?: AuditEventOmit<ExtArgs> | null
    /**
     * The data needed to create a AuditEvent.
     */
    data: XOR<AuditEventCreateInput, AuditEventUncheckedCreateInput>
  }

  /**
   * AuditEvent createMany
   */
  export type AuditEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditEvents.
     */
    data: AuditEventCreateManyInput | AuditEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditEvent createManyAndReturn
   */
  export type AuditEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditEvent
     */
    omit?: AuditEventOmit<ExtArgs> | null
    /**
     * The data used to create many AuditEvents.
     */
    data: AuditEventCreateManyInput | AuditEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditEvent update
   */
  export type AuditEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditEvent
     */
    omit?: AuditEventOmit<ExtArgs> | null
    /**
     * The data needed to update a AuditEvent.
     */
    data: XOR<AuditEventUpdateInput, AuditEventUncheckedUpdateInput>
    /**
     * Choose, which AuditEvent to update.
     */
    where: AuditEventWhereUniqueInput
  }

  /**
   * AuditEvent updateMany
   */
  export type AuditEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditEvents.
     */
    data: XOR<AuditEventUpdateManyMutationInput, AuditEventUncheckedUpdateManyInput>
    /**
     * Filter which AuditEvents to update
     */
    where?: AuditEventWhereInput
    /**
     * Limit how many AuditEvents to update.
     */
    limit?: number
  }

  /**
   * AuditEvent updateManyAndReturn
   */
  export type AuditEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditEvent
     */
    omit?: AuditEventOmit<ExtArgs> | null
    /**
     * The data used to update AuditEvents.
     */
    data: XOR<AuditEventUpdateManyMutationInput, AuditEventUncheckedUpdateManyInput>
    /**
     * Filter which AuditEvents to update
     */
    where?: AuditEventWhereInput
    /**
     * Limit how many AuditEvents to update.
     */
    limit?: number
  }

  /**
   * AuditEvent upsert
   */
  export type AuditEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditEvent
     */
    omit?: AuditEventOmit<ExtArgs> | null
    /**
     * The filter to search for the AuditEvent to update in case it exists.
     */
    where: AuditEventWhereUniqueInput
    /**
     * In case the AuditEvent found by the `where` argument doesn't exist, create a new AuditEvent with this data.
     */
    create: XOR<AuditEventCreateInput, AuditEventUncheckedCreateInput>
    /**
     * In case the AuditEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditEventUpdateInput, AuditEventUncheckedUpdateInput>
  }

  /**
   * AuditEvent delete
   */
  export type AuditEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditEvent
     */
    omit?: AuditEventOmit<ExtArgs> | null
    /**
     * Filter which AuditEvent to delete.
     */
    where: AuditEventWhereUniqueInput
  }

  /**
   * AuditEvent deleteMany
   */
  export type AuditEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditEvents to delete
     */
    where?: AuditEventWhereInput
    /**
     * Limit how many AuditEvents to delete.
     */
    limit?: number
  }

  /**
   * AuditEvent without action
   */
  export type AuditEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditEvent
     */
    omit?: AuditEventOmit<ExtArgs> | null
  }


  /**
   * Model CustomSale
   */

  export type AggregateCustomSale = {
    _count: CustomSaleCountAggregateOutputType | null
    _avg: CustomSaleAvgAggregateOutputType | null
    _sum: CustomSaleSumAggregateOutputType | null
    _min: CustomSaleMinAggregateOutputType | null
    _max: CustomSaleMaxAggregateOutputType | null
  }

  export type CustomSaleAvgAggregateOutputType = {
    id: number | null
  }

  export type CustomSaleSumAggregateOutputType = {
    id: number | null
  }

  export type CustomSaleMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    orderURL: string | null
    title: string | null
  }

  export type CustomSaleMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    orderURL: string | null
    title: string | null
  }

  export type CustomSaleCountAggregateOutputType = {
    id: number
    createdAt: number
    orderURL: number
    title: number
    _all: number
  }


  export type CustomSaleAvgAggregateInputType = {
    id?: true
  }

  export type CustomSaleSumAggregateInputType = {
    id?: true
  }

  export type CustomSaleMinAggregateInputType = {
    id?: true
    createdAt?: true
    orderURL?: true
    title?: true
  }

  export type CustomSaleMaxAggregateInputType = {
    id?: true
    createdAt?: true
    orderURL?: true
    title?: true
  }

  export type CustomSaleCountAggregateInputType = {
    id?: true
    createdAt?: true
    orderURL?: true
    title?: true
    _all?: true
  }

  export type CustomSaleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomSale to aggregate.
     */
    where?: CustomSaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomSales to fetch.
     */
    orderBy?: CustomSaleOrderByWithRelationInput | CustomSaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomSaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomSales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomSales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CustomSales
    **/
    _count?: true | CustomSaleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomSaleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomSaleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomSaleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomSaleMaxAggregateInputType
  }

  export type GetCustomSaleAggregateType<T extends CustomSaleAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomSale]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomSale[P]>
      : GetScalarType<T[P], AggregateCustomSale[P]>
  }




  export type CustomSaleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomSaleWhereInput
    orderBy?: CustomSaleOrderByWithAggregationInput | CustomSaleOrderByWithAggregationInput[]
    by: CustomSaleScalarFieldEnum[] | CustomSaleScalarFieldEnum
    having?: CustomSaleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomSaleCountAggregateInputType | true
    _avg?: CustomSaleAvgAggregateInputType
    _sum?: CustomSaleSumAggregateInputType
    _min?: CustomSaleMinAggregateInputType
    _max?: CustomSaleMaxAggregateInputType
  }

  export type CustomSaleGroupByOutputType = {
    id: number
    createdAt: Date
    orderURL: string
    title: string
    _count: CustomSaleCountAggregateOutputType | null
    _avg: CustomSaleAvgAggregateOutputType | null
    _sum: CustomSaleSumAggregateOutputType | null
    _min: CustomSaleMinAggregateOutputType | null
    _max: CustomSaleMaxAggregateOutputType | null
  }

  type GetCustomSaleGroupByPayload<T extends CustomSaleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomSaleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomSaleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomSaleGroupByOutputType[P]>
            : GetScalarType<T[P], CustomSaleGroupByOutputType[P]>
        }
      >
    >


  export type CustomSaleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    orderURL?: boolean
    title?: boolean
  }, ExtArgs["result"]["customSale"]>

  export type CustomSaleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    orderURL?: boolean
    title?: boolean
  }, ExtArgs["result"]["customSale"]>

  export type CustomSaleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    orderURL?: boolean
    title?: boolean
  }, ExtArgs["result"]["customSale"]>

  export type CustomSaleSelectScalar = {
    id?: boolean
    createdAt?: boolean
    orderURL?: boolean
    title?: boolean
  }

  export type CustomSaleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "orderURL" | "title", ExtArgs["result"]["customSale"]>

  export type $CustomSalePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CustomSale"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      orderURL: string
      title: string
    }, ExtArgs["result"]["customSale"]>
    composites: {}
  }

  type CustomSaleGetPayload<S extends boolean | null | undefined | CustomSaleDefaultArgs> = $Result.GetResult<Prisma.$CustomSalePayload, S>

  type CustomSaleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomSaleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomSaleCountAggregateInputType | true
    }

  export interface CustomSaleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CustomSale'], meta: { name: 'CustomSale' } }
    /**
     * Find zero or one CustomSale that matches the filter.
     * @param {CustomSaleFindUniqueArgs} args - Arguments to find a CustomSale
     * @example
     * // Get one CustomSale
     * const customSale = await prisma.customSale.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomSaleFindUniqueArgs>(args: SelectSubset<T, CustomSaleFindUniqueArgs<ExtArgs>>): Prisma__CustomSaleClient<$Result.GetResult<Prisma.$CustomSalePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CustomSale that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomSaleFindUniqueOrThrowArgs} args - Arguments to find a CustomSale
     * @example
     * // Get one CustomSale
     * const customSale = await prisma.customSale.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomSaleFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomSaleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomSaleClient<$Result.GetResult<Prisma.$CustomSalePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomSale that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomSaleFindFirstArgs} args - Arguments to find a CustomSale
     * @example
     * // Get one CustomSale
     * const customSale = await prisma.customSale.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomSaleFindFirstArgs>(args?: SelectSubset<T, CustomSaleFindFirstArgs<ExtArgs>>): Prisma__CustomSaleClient<$Result.GetResult<Prisma.$CustomSalePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomSale that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomSaleFindFirstOrThrowArgs} args - Arguments to find a CustomSale
     * @example
     * // Get one CustomSale
     * const customSale = await prisma.customSale.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomSaleFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomSaleFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomSaleClient<$Result.GetResult<Prisma.$CustomSalePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CustomSales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomSaleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CustomSales
     * const customSales = await prisma.customSale.findMany()
     * 
     * // Get first 10 CustomSales
     * const customSales = await prisma.customSale.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customSaleWithIdOnly = await prisma.customSale.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomSaleFindManyArgs>(args?: SelectSubset<T, CustomSaleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomSalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CustomSale.
     * @param {CustomSaleCreateArgs} args - Arguments to create a CustomSale.
     * @example
     * // Create one CustomSale
     * const CustomSale = await prisma.customSale.create({
     *   data: {
     *     // ... data to create a CustomSale
     *   }
     * })
     * 
     */
    create<T extends CustomSaleCreateArgs>(args: SelectSubset<T, CustomSaleCreateArgs<ExtArgs>>): Prisma__CustomSaleClient<$Result.GetResult<Prisma.$CustomSalePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CustomSales.
     * @param {CustomSaleCreateManyArgs} args - Arguments to create many CustomSales.
     * @example
     * // Create many CustomSales
     * const customSale = await prisma.customSale.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomSaleCreateManyArgs>(args?: SelectSubset<T, CustomSaleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CustomSales and returns the data saved in the database.
     * @param {CustomSaleCreateManyAndReturnArgs} args - Arguments to create many CustomSales.
     * @example
     * // Create many CustomSales
     * const customSale = await prisma.customSale.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CustomSales and only return the `id`
     * const customSaleWithIdOnly = await prisma.customSale.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomSaleCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomSaleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomSalePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CustomSale.
     * @param {CustomSaleDeleteArgs} args - Arguments to delete one CustomSale.
     * @example
     * // Delete one CustomSale
     * const CustomSale = await prisma.customSale.delete({
     *   where: {
     *     // ... filter to delete one CustomSale
     *   }
     * })
     * 
     */
    delete<T extends CustomSaleDeleteArgs>(args: SelectSubset<T, CustomSaleDeleteArgs<ExtArgs>>): Prisma__CustomSaleClient<$Result.GetResult<Prisma.$CustomSalePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CustomSale.
     * @param {CustomSaleUpdateArgs} args - Arguments to update one CustomSale.
     * @example
     * // Update one CustomSale
     * const customSale = await prisma.customSale.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomSaleUpdateArgs>(args: SelectSubset<T, CustomSaleUpdateArgs<ExtArgs>>): Prisma__CustomSaleClient<$Result.GetResult<Prisma.$CustomSalePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CustomSales.
     * @param {CustomSaleDeleteManyArgs} args - Arguments to filter CustomSales to delete.
     * @example
     * // Delete a few CustomSales
     * const { count } = await prisma.customSale.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomSaleDeleteManyArgs>(args?: SelectSubset<T, CustomSaleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomSales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomSaleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CustomSales
     * const customSale = await prisma.customSale.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomSaleUpdateManyArgs>(args: SelectSubset<T, CustomSaleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomSales and returns the data updated in the database.
     * @param {CustomSaleUpdateManyAndReturnArgs} args - Arguments to update many CustomSales.
     * @example
     * // Update many CustomSales
     * const customSale = await prisma.customSale.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CustomSales and only return the `id`
     * const customSaleWithIdOnly = await prisma.customSale.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CustomSaleUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomSaleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomSalePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CustomSale.
     * @param {CustomSaleUpsertArgs} args - Arguments to update or create a CustomSale.
     * @example
     * // Update or create a CustomSale
     * const customSale = await prisma.customSale.upsert({
     *   create: {
     *     // ... data to create a CustomSale
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CustomSale we want to update
     *   }
     * })
     */
    upsert<T extends CustomSaleUpsertArgs>(args: SelectSubset<T, CustomSaleUpsertArgs<ExtArgs>>): Prisma__CustomSaleClient<$Result.GetResult<Prisma.$CustomSalePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CustomSales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomSaleCountArgs} args - Arguments to filter CustomSales to count.
     * @example
     * // Count the number of CustomSales
     * const count = await prisma.customSale.count({
     *   where: {
     *     // ... the filter for the CustomSales we want to count
     *   }
     * })
    **/
    count<T extends CustomSaleCountArgs>(
      args?: Subset<T, CustomSaleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomSaleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CustomSale.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomSaleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomSaleAggregateArgs>(args: Subset<T, CustomSaleAggregateArgs>): Prisma.PrismaPromise<GetCustomSaleAggregateType<T>>

    /**
     * Group by CustomSale.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomSaleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomSaleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomSaleGroupByArgs['orderBy'] }
        : { orderBy?: CustomSaleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomSaleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomSaleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CustomSale model
   */
  readonly fields: CustomSaleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CustomSale.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomSaleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CustomSale model
   */
  interface CustomSaleFieldRefs {
    readonly id: FieldRef<"CustomSale", 'Int'>
    readonly createdAt: FieldRef<"CustomSale", 'DateTime'>
    readonly orderURL: FieldRef<"CustomSale", 'String'>
    readonly title: FieldRef<"CustomSale", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CustomSale findUnique
   */
  export type CustomSaleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomSale
     */
    select?: CustomSaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomSale
     */
    omit?: CustomSaleOmit<ExtArgs> | null
    /**
     * Filter, which CustomSale to fetch.
     */
    where: CustomSaleWhereUniqueInput
  }

  /**
   * CustomSale findUniqueOrThrow
   */
  export type CustomSaleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomSale
     */
    select?: CustomSaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomSale
     */
    omit?: CustomSaleOmit<ExtArgs> | null
    /**
     * Filter, which CustomSale to fetch.
     */
    where: CustomSaleWhereUniqueInput
  }

  /**
   * CustomSale findFirst
   */
  export type CustomSaleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomSale
     */
    select?: CustomSaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomSale
     */
    omit?: CustomSaleOmit<ExtArgs> | null
    /**
     * Filter, which CustomSale to fetch.
     */
    where?: CustomSaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomSales to fetch.
     */
    orderBy?: CustomSaleOrderByWithRelationInput | CustomSaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomSales.
     */
    cursor?: CustomSaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomSales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomSales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomSales.
     */
    distinct?: CustomSaleScalarFieldEnum | CustomSaleScalarFieldEnum[]
  }

  /**
   * CustomSale findFirstOrThrow
   */
  export type CustomSaleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomSale
     */
    select?: CustomSaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomSale
     */
    omit?: CustomSaleOmit<ExtArgs> | null
    /**
     * Filter, which CustomSale to fetch.
     */
    where?: CustomSaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomSales to fetch.
     */
    orderBy?: CustomSaleOrderByWithRelationInput | CustomSaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomSales.
     */
    cursor?: CustomSaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomSales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomSales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomSales.
     */
    distinct?: CustomSaleScalarFieldEnum | CustomSaleScalarFieldEnum[]
  }

  /**
   * CustomSale findMany
   */
  export type CustomSaleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomSale
     */
    select?: CustomSaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomSale
     */
    omit?: CustomSaleOmit<ExtArgs> | null
    /**
     * Filter, which CustomSales to fetch.
     */
    where?: CustomSaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomSales to fetch.
     */
    orderBy?: CustomSaleOrderByWithRelationInput | CustomSaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CustomSales.
     */
    cursor?: CustomSaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomSales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomSales.
     */
    skip?: number
    distinct?: CustomSaleScalarFieldEnum | CustomSaleScalarFieldEnum[]
  }

  /**
   * CustomSale create
   */
  export type CustomSaleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomSale
     */
    select?: CustomSaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomSale
     */
    omit?: CustomSaleOmit<ExtArgs> | null
    /**
     * The data needed to create a CustomSale.
     */
    data: XOR<CustomSaleCreateInput, CustomSaleUncheckedCreateInput>
  }

  /**
   * CustomSale createMany
   */
  export type CustomSaleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CustomSales.
     */
    data: CustomSaleCreateManyInput | CustomSaleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CustomSale createManyAndReturn
   */
  export type CustomSaleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomSale
     */
    select?: CustomSaleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CustomSale
     */
    omit?: CustomSaleOmit<ExtArgs> | null
    /**
     * The data used to create many CustomSales.
     */
    data: CustomSaleCreateManyInput | CustomSaleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CustomSale update
   */
  export type CustomSaleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomSale
     */
    select?: CustomSaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomSale
     */
    omit?: CustomSaleOmit<ExtArgs> | null
    /**
     * The data needed to update a CustomSale.
     */
    data: XOR<CustomSaleUpdateInput, CustomSaleUncheckedUpdateInput>
    /**
     * Choose, which CustomSale to update.
     */
    where: CustomSaleWhereUniqueInput
  }

  /**
   * CustomSale updateMany
   */
  export type CustomSaleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CustomSales.
     */
    data: XOR<CustomSaleUpdateManyMutationInput, CustomSaleUncheckedUpdateManyInput>
    /**
     * Filter which CustomSales to update
     */
    where?: CustomSaleWhereInput
    /**
     * Limit how many CustomSales to update.
     */
    limit?: number
  }

  /**
   * CustomSale updateManyAndReturn
   */
  export type CustomSaleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomSale
     */
    select?: CustomSaleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CustomSale
     */
    omit?: CustomSaleOmit<ExtArgs> | null
    /**
     * The data used to update CustomSales.
     */
    data: XOR<CustomSaleUpdateManyMutationInput, CustomSaleUncheckedUpdateManyInput>
    /**
     * Filter which CustomSales to update
     */
    where?: CustomSaleWhereInput
    /**
     * Limit how many CustomSales to update.
     */
    limit?: number
  }

  /**
   * CustomSale upsert
   */
  export type CustomSaleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomSale
     */
    select?: CustomSaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomSale
     */
    omit?: CustomSaleOmit<ExtArgs> | null
    /**
     * The filter to search for the CustomSale to update in case it exists.
     */
    where: CustomSaleWhereUniqueInput
    /**
     * In case the CustomSale found by the `where` argument doesn't exist, create a new CustomSale with this data.
     */
    create: XOR<CustomSaleCreateInput, CustomSaleUncheckedCreateInput>
    /**
     * In case the CustomSale was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomSaleUpdateInput, CustomSaleUncheckedUpdateInput>
  }

  /**
   * CustomSale delete
   */
  export type CustomSaleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomSale
     */
    select?: CustomSaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomSale
     */
    omit?: CustomSaleOmit<ExtArgs> | null
    /**
     * Filter which CustomSale to delete.
     */
    where: CustomSaleWhereUniqueInput
  }

  /**
   * CustomSale deleteMany
   */
  export type CustomSaleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomSales to delete
     */
    where?: CustomSaleWhereInput
    /**
     * Limit how many CustomSales to delete.
     */
    limit?: number
  }

  /**
   * CustomSale without action
   */
  export type CustomSaleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomSale
     */
    select?: CustomSaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomSale
     */
    omit?: CustomSaleOmit<ExtArgs> | null
  }


  /**
   * Model CustomSaleIgnoreList
   */

  export type AggregateCustomSaleIgnoreList = {
    _count: CustomSaleIgnoreListCountAggregateOutputType | null
    _avg: CustomSaleIgnoreListAvgAggregateOutputType | null
    _sum: CustomSaleIgnoreListSumAggregateOutputType | null
    _min: CustomSaleIgnoreListMinAggregateOutputType | null
    _max: CustomSaleIgnoreListMaxAggregateOutputType | null
  }

  export type CustomSaleIgnoreListAvgAggregateOutputType = {
    id: number | null
  }

  export type CustomSaleIgnoreListSumAggregateOutputType = {
    id: number | null
  }

  export type CustomSaleIgnoreListMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    title: string | null
  }

  export type CustomSaleIgnoreListMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    title: string | null
  }

  export type CustomSaleIgnoreListCountAggregateOutputType = {
    id: number
    createdAt: number
    title: number
    _all: number
  }


  export type CustomSaleIgnoreListAvgAggregateInputType = {
    id?: true
  }

  export type CustomSaleIgnoreListSumAggregateInputType = {
    id?: true
  }

  export type CustomSaleIgnoreListMinAggregateInputType = {
    id?: true
    createdAt?: true
    title?: true
  }

  export type CustomSaleIgnoreListMaxAggregateInputType = {
    id?: true
    createdAt?: true
    title?: true
  }

  export type CustomSaleIgnoreListCountAggregateInputType = {
    id?: true
    createdAt?: true
    title?: true
    _all?: true
  }

  export type CustomSaleIgnoreListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomSaleIgnoreList to aggregate.
     */
    where?: CustomSaleIgnoreListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomSaleIgnoreLists to fetch.
     */
    orderBy?: CustomSaleIgnoreListOrderByWithRelationInput | CustomSaleIgnoreListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomSaleIgnoreListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomSaleIgnoreLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomSaleIgnoreLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CustomSaleIgnoreLists
    **/
    _count?: true | CustomSaleIgnoreListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomSaleIgnoreListAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomSaleIgnoreListSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomSaleIgnoreListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomSaleIgnoreListMaxAggregateInputType
  }

  export type GetCustomSaleIgnoreListAggregateType<T extends CustomSaleIgnoreListAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomSaleIgnoreList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomSaleIgnoreList[P]>
      : GetScalarType<T[P], AggregateCustomSaleIgnoreList[P]>
  }




  export type CustomSaleIgnoreListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomSaleIgnoreListWhereInput
    orderBy?: CustomSaleIgnoreListOrderByWithAggregationInput | CustomSaleIgnoreListOrderByWithAggregationInput[]
    by: CustomSaleIgnoreListScalarFieldEnum[] | CustomSaleIgnoreListScalarFieldEnum
    having?: CustomSaleIgnoreListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomSaleIgnoreListCountAggregateInputType | true
    _avg?: CustomSaleIgnoreListAvgAggregateInputType
    _sum?: CustomSaleIgnoreListSumAggregateInputType
    _min?: CustomSaleIgnoreListMinAggregateInputType
    _max?: CustomSaleIgnoreListMaxAggregateInputType
  }

  export type CustomSaleIgnoreListGroupByOutputType = {
    id: number
    createdAt: Date
    title: string
    _count: CustomSaleIgnoreListCountAggregateOutputType | null
    _avg: CustomSaleIgnoreListAvgAggregateOutputType | null
    _sum: CustomSaleIgnoreListSumAggregateOutputType | null
    _min: CustomSaleIgnoreListMinAggregateOutputType | null
    _max: CustomSaleIgnoreListMaxAggregateOutputType | null
  }

  type GetCustomSaleIgnoreListGroupByPayload<T extends CustomSaleIgnoreListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomSaleIgnoreListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomSaleIgnoreListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomSaleIgnoreListGroupByOutputType[P]>
            : GetScalarType<T[P], CustomSaleIgnoreListGroupByOutputType[P]>
        }
      >
    >


  export type CustomSaleIgnoreListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    title?: boolean
  }, ExtArgs["result"]["customSaleIgnoreList"]>

  export type CustomSaleIgnoreListSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    title?: boolean
  }, ExtArgs["result"]["customSaleIgnoreList"]>

  export type CustomSaleIgnoreListSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    title?: boolean
  }, ExtArgs["result"]["customSaleIgnoreList"]>

  export type CustomSaleIgnoreListSelectScalar = {
    id?: boolean
    createdAt?: boolean
    title?: boolean
  }

  export type CustomSaleIgnoreListOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "title", ExtArgs["result"]["customSaleIgnoreList"]>

  export type $CustomSaleIgnoreListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CustomSaleIgnoreList"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      title: string
    }, ExtArgs["result"]["customSaleIgnoreList"]>
    composites: {}
  }

  type CustomSaleIgnoreListGetPayload<S extends boolean | null | undefined | CustomSaleIgnoreListDefaultArgs> = $Result.GetResult<Prisma.$CustomSaleIgnoreListPayload, S>

  type CustomSaleIgnoreListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomSaleIgnoreListFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomSaleIgnoreListCountAggregateInputType | true
    }

  export interface CustomSaleIgnoreListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CustomSaleIgnoreList'], meta: { name: 'CustomSaleIgnoreList' } }
    /**
     * Find zero or one CustomSaleIgnoreList that matches the filter.
     * @param {CustomSaleIgnoreListFindUniqueArgs} args - Arguments to find a CustomSaleIgnoreList
     * @example
     * // Get one CustomSaleIgnoreList
     * const customSaleIgnoreList = await prisma.customSaleIgnoreList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomSaleIgnoreListFindUniqueArgs>(args: SelectSubset<T, CustomSaleIgnoreListFindUniqueArgs<ExtArgs>>): Prisma__CustomSaleIgnoreListClient<$Result.GetResult<Prisma.$CustomSaleIgnoreListPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CustomSaleIgnoreList that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomSaleIgnoreListFindUniqueOrThrowArgs} args - Arguments to find a CustomSaleIgnoreList
     * @example
     * // Get one CustomSaleIgnoreList
     * const customSaleIgnoreList = await prisma.customSaleIgnoreList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomSaleIgnoreListFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomSaleIgnoreListFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomSaleIgnoreListClient<$Result.GetResult<Prisma.$CustomSaleIgnoreListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomSaleIgnoreList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomSaleIgnoreListFindFirstArgs} args - Arguments to find a CustomSaleIgnoreList
     * @example
     * // Get one CustomSaleIgnoreList
     * const customSaleIgnoreList = await prisma.customSaleIgnoreList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomSaleIgnoreListFindFirstArgs>(args?: SelectSubset<T, CustomSaleIgnoreListFindFirstArgs<ExtArgs>>): Prisma__CustomSaleIgnoreListClient<$Result.GetResult<Prisma.$CustomSaleIgnoreListPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomSaleIgnoreList that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomSaleIgnoreListFindFirstOrThrowArgs} args - Arguments to find a CustomSaleIgnoreList
     * @example
     * // Get one CustomSaleIgnoreList
     * const customSaleIgnoreList = await prisma.customSaleIgnoreList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomSaleIgnoreListFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomSaleIgnoreListFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomSaleIgnoreListClient<$Result.GetResult<Prisma.$CustomSaleIgnoreListPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CustomSaleIgnoreLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomSaleIgnoreListFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CustomSaleIgnoreLists
     * const customSaleIgnoreLists = await prisma.customSaleIgnoreList.findMany()
     * 
     * // Get first 10 CustomSaleIgnoreLists
     * const customSaleIgnoreLists = await prisma.customSaleIgnoreList.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customSaleIgnoreListWithIdOnly = await prisma.customSaleIgnoreList.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomSaleIgnoreListFindManyArgs>(args?: SelectSubset<T, CustomSaleIgnoreListFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomSaleIgnoreListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CustomSaleIgnoreList.
     * @param {CustomSaleIgnoreListCreateArgs} args - Arguments to create a CustomSaleIgnoreList.
     * @example
     * // Create one CustomSaleIgnoreList
     * const CustomSaleIgnoreList = await prisma.customSaleIgnoreList.create({
     *   data: {
     *     // ... data to create a CustomSaleIgnoreList
     *   }
     * })
     * 
     */
    create<T extends CustomSaleIgnoreListCreateArgs>(args: SelectSubset<T, CustomSaleIgnoreListCreateArgs<ExtArgs>>): Prisma__CustomSaleIgnoreListClient<$Result.GetResult<Prisma.$CustomSaleIgnoreListPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CustomSaleIgnoreLists.
     * @param {CustomSaleIgnoreListCreateManyArgs} args - Arguments to create many CustomSaleIgnoreLists.
     * @example
     * // Create many CustomSaleIgnoreLists
     * const customSaleIgnoreList = await prisma.customSaleIgnoreList.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomSaleIgnoreListCreateManyArgs>(args?: SelectSubset<T, CustomSaleIgnoreListCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CustomSaleIgnoreLists and returns the data saved in the database.
     * @param {CustomSaleIgnoreListCreateManyAndReturnArgs} args - Arguments to create many CustomSaleIgnoreLists.
     * @example
     * // Create many CustomSaleIgnoreLists
     * const customSaleIgnoreList = await prisma.customSaleIgnoreList.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CustomSaleIgnoreLists and only return the `id`
     * const customSaleIgnoreListWithIdOnly = await prisma.customSaleIgnoreList.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomSaleIgnoreListCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomSaleIgnoreListCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomSaleIgnoreListPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CustomSaleIgnoreList.
     * @param {CustomSaleIgnoreListDeleteArgs} args - Arguments to delete one CustomSaleIgnoreList.
     * @example
     * // Delete one CustomSaleIgnoreList
     * const CustomSaleIgnoreList = await prisma.customSaleIgnoreList.delete({
     *   where: {
     *     // ... filter to delete one CustomSaleIgnoreList
     *   }
     * })
     * 
     */
    delete<T extends CustomSaleIgnoreListDeleteArgs>(args: SelectSubset<T, CustomSaleIgnoreListDeleteArgs<ExtArgs>>): Prisma__CustomSaleIgnoreListClient<$Result.GetResult<Prisma.$CustomSaleIgnoreListPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CustomSaleIgnoreList.
     * @param {CustomSaleIgnoreListUpdateArgs} args - Arguments to update one CustomSaleIgnoreList.
     * @example
     * // Update one CustomSaleIgnoreList
     * const customSaleIgnoreList = await prisma.customSaleIgnoreList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomSaleIgnoreListUpdateArgs>(args: SelectSubset<T, CustomSaleIgnoreListUpdateArgs<ExtArgs>>): Prisma__CustomSaleIgnoreListClient<$Result.GetResult<Prisma.$CustomSaleIgnoreListPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CustomSaleIgnoreLists.
     * @param {CustomSaleIgnoreListDeleteManyArgs} args - Arguments to filter CustomSaleIgnoreLists to delete.
     * @example
     * // Delete a few CustomSaleIgnoreLists
     * const { count } = await prisma.customSaleIgnoreList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomSaleIgnoreListDeleteManyArgs>(args?: SelectSubset<T, CustomSaleIgnoreListDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomSaleIgnoreLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomSaleIgnoreListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CustomSaleIgnoreLists
     * const customSaleIgnoreList = await prisma.customSaleIgnoreList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomSaleIgnoreListUpdateManyArgs>(args: SelectSubset<T, CustomSaleIgnoreListUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomSaleIgnoreLists and returns the data updated in the database.
     * @param {CustomSaleIgnoreListUpdateManyAndReturnArgs} args - Arguments to update many CustomSaleIgnoreLists.
     * @example
     * // Update many CustomSaleIgnoreLists
     * const customSaleIgnoreList = await prisma.customSaleIgnoreList.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CustomSaleIgnoreLists and only return the `id`
     * const customSaleIgnoreListWithIdOnly = await prisma.customSaleIgnoreList.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CustomSaleIgnoreListUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomSaleIgnoreListUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomSaleIgnoreListPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CustomSaleIgnoreList.
     * @param {CustomSaleIgnoreListUpsertArgs} args - Arguments to update or create a CustomSaleIgnoreList.
     * @example
     * // Update or create a CustomSaleIgnoreList
     * const customSaleIgnoreList = await prisma.customSaleIgnoreList.upsert({
     *   create: {
     *     // ... data to create a CustomSaleIgnoreList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CustomSaleIgnoreList we want to update
     *   }
     * })
     */
    upsert<T extends CustomSaleIgnoreListUpsertArgs>(args: SelectSubset<T, CustomSaleIgnoreListUpsertArgs<ExtArgs>>): Prisma__CustomSaleIgnoreListClient<$Result.GetResult<Prisma.$CustomSaleIgnoreListPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CustomSaleIgnoreLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomSaleIgnoreListCountArgs} args - Arguments to filter CustomSaleIgnoreLists to count.
     * @example
     * // Count the number of CustomSaleIgnoreLists
     * const count = await prisma.customSaleIgnoreList.count({
     *   where: {
     *     // ... the filter for the CustomSaleIgnoreLists we want to count
     *   }
     * })
    **/
    count<T extends CustomSaleIgnoreListCountArgs>(
      args?: Subset<T, CustomSaleIgnoreListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomSaleIgnoreListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CustomSaleIgnoreList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomSaleIgnoreListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomSaleIgnoreListAggregateArgs>(args: Subset<T, CustomSaleIgnoreListAggregateArgs>): Prisma.PrismaPromise<GetCustomSaleIgnoreListAggregateType<T>>

    /**
     * Group by CustomSaleIgnoreList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomSaleIgnoreListGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomSaleIgnoreListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomSaleIgnoreListGroupByArgs['orderBy'] }
        : { orderBy?: CustomSaleIgnoreListGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomSaleIgnoreListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomSaleIgnoreListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CustomSaleIgnoreList model
   */
  readonly fields: CustomSaleIgnoreListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CustomSaleIgnoreList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomSaleIgnoreListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CustomSaleIgnoreList model
   */
  interface CustomSaleIgnoreListFieldRefs {
    readonly id: FieldRef<"CustomSaleIgnoreList", 'Int'>
    readonly createdAt: FieldRef<"CustomSaleIgnoreList", 'DateTime'>
    readonly title: FieldRef<"CustomSaleIgnoreList", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CustomSaleIgnoreList findUnique
   */
  export type CustomSaleIgnoreListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomSaleIgnoreList
     */
    select?: CustomSaleIgnoreListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomSaleIgnoreList
     */
    omit?: CustomSaleIgnoreListOmit<ExtArgs> | null
    /**
     * Filter, which CustomSaleIgnoreList to fetch.
     */
    where: CustomSaleIgnoreListWhereUniqueInput
  }

  /**
   * CustomSaleIgnoreList findUniqueOrThrow
   */
  export type CustomSaleIgnoreListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomSaleIgnoreList
     */
    select?: CustomSaleIgnoreListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomSaleIgnoreList
     */
    omit?: CustomSaleIgnoreListOmit<ExtArgs> | null
    /**
     * Filter, which CustomSaleIgnoreList to fetch.
     */
    where: CustomSaleIgnoreListWhereUniqueInput
  }

  /**
   * CustomSaleIgnoreList findFirst
   */
  export type CustomSaleIgnoreListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomSaleIgnoreList
     */
    select?: CustomSaleIgnoreListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomSaleIgnoreList
     */
    omit?: CustomSaleIgnoreListOmit<ExtArgs> | null
    /**
     * Filter, which CustomSaleIgnoreList to fetch.
     */
    where?: CustomSaleIgnoreListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomSaleIgnoreLists to fetch.
     */
    orderBy?: CustomSaleIgnoreListOrderByWithRelationInput | CustomSaleIgnoreListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomSaleIgnoreLists.
     */
    cursor?: CustomSaleIgnoreListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomSaleIgnoreLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomSaleIgnoreLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomSaleIgnoreLists.
     */
    distinct?: CustomSaleIgnoreListScalarFieldEnum | CustomSaleIgnoreListScalarFieldEnum[]
  }

  /**
   * CustomSaleIgnoreList findFirstOrThrow
   */
  export type CustomSaleIgnoreListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomSaleIgnoreList
     */
    select?: CustomSaleIgnoreListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomSaleIgnoreList
     */
    omit?: CustomSaleIgnoreListOmit<ExtArgs> | null
    /**
     * Filter, which CustomSaleIgnoreList to fetch.
     */
    where?: CustomSaleIgnoreListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomSaleIgnoreLists to fetch.
     */
    orderBy?: CustomSaleIgnoreListOrderByWithRelationInput | CustomSaleIgnoreListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomSaleIgnoreLists.
     */
    cursor?: CustomSaleIgnoreListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomSaleIgnoreLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomSaleIgnoreLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomSaleIgnoreLists.
     */
    distinct?: CustomSaleIgnoreListScalarFieldEnum | CustomSaleIgnoreListScalarFieldEnum[]
  }

  /**
   * CustomSaleIgnoreList findMany
   */
  export type CustomSaleIgnoreListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomSaleIgnoreList
     */
    select?: CustomSaleIgnoreListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomSaleIgnoreList
     */
    omit?: CustomSaleIgnoreListOmit<ExtArgs> | null
    /**
     * Filter, which CustomSaleIgnoreLists to fetch.
     */
    where?: CustomSaleIgnoreListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomSaleIgnoreLists to fetch.
     */
    orderBy?: CustomSaleIgnoreListOrderByWithRelationInput | CustomSaleIgnoreListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CustomSaleIgnoreLists.
     */
    cursor?: CustomSaleIgnoreListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomSaleIgnoreLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomSaleIgnoreLists.
     */
    skip?: number
    distinct?: CustomSaleIgnoreListScalarFieldEnum | CustomSaleIgnoreListScalarFieldEnum[]
  }

  /**
   * CustomSaleIgnoreList create
   */
  export type CustomSaleIgnoreListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomSaleIgnoreList
     */
    select?: CustomSaleIgnoreListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomSaleIgnoreList
     */
    omit?: CustomSaleIgnoreListOmit<ExtArgs> | null
    /**
     * The data needed to create a CustomSaleIgnoreList.
     */
    data: XOR<CustomSaleIgnoreListCreateInput, CustomSaleIgnoreListUncheckedCreateInput>
  }

  /**
   * CustomSaleIgnoreList createMany
   */
  export type CustomSaleIgnoreListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CustomSaleIgnoreLists.
     */
    data: CustomSaleIgnoreListCreateManyInput | CustomSaleIgnoreListCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CustomSaleIgnoreList createManyAndReturn
   */
  export type CustomSaleIgnoreListCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomSaleIgnoreList
     */
    select?: CustomSaleIgnoreListSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CustomSaleIgnoreList
     */
    omit?: CustomSaleIgnoreListOmit<ExtArgs> | null
    /**
     * The data used to create many CustomSaleIgnoreLists.
     */
    data: CustomSaleIgnoreListCreateManyInput | CustomSaleIgnoreListCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CustomSaleIgnoreList update
   */
  export type CustomSaleIgnoreListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomSaleIgnoreList
     */
    select?: CustomSaleIgnoreListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomSaleIgnoreList
     */
    omit?: CustomSaleIgnoreListOmit<ExtArgs> | null
    /**
     * The data needed to update a CustomSaleIgnoreList.
     */
    data: XOR<CustomSaleIgnoreListUpdateInput, CustomSaleIgnoreListUncheckedUpdateInput>
    /**
     * Choose, which CustomSaleIgnoreList to update.
     */
    where: CustomSaleIgnoreListWhereUniqueInput
  }

  /**
   * CustomSaleIgnoreList updateMany
   */
  export type CustomSaleIgnoreListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CustomSaleIgnoreLists.
     */
    data: XOR<CustomSaleIgnoreListUpdateManyMutationInput, CustomSaleIgnoreListUncheckedUpdateManyInput>
    /**
     * Filter which CustomSaleIgnoreLists to update
     */
    where?: CustomSaleIgnoreListWhereInput
    /**
     * Limit how many CustomSaleIgnoreLists to update.
     */
    limit?: number
  }

  /**
   * CustomSaleIgnoreList updateManyAndReturn
   */
  export type CustomSaleIgnoreListUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomSaleIgnoreList
     */
    select?: CustomSaleIgnoreListSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CustomSaleIgnoreList
     */
    omit?: CustomSaleIgnoreListOmit<ExtArgs> | null
    /**
     * The data used to update CustomSaleIgnoreLists.
     */
    data: XOR<CustomSaleIgnoreListUpdateManyMutationInput, CustomSaleIgnoreListUncheckedUpdateManyInput>
    /**
     * Filter which CustomSaleIgnoreLists to update
     */
    where?: CustomSaleIgnoreListWhereInput
    /**
     * Limit how many CustomSaleIgnoreLists to update.
     */
    limit?: number
  }

  /**
   * CustomSaleIgnoreList upsert
   */
  export type CustomSaleIgnoreListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomSaleIgnoreList
     */
    select?: CustomSaleIgnoreListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomSaleIgnoreList
     */
    omit?: CustomSaleIgnoreListOmit<ExtArgs> | null
    /**
     * The filter to search for the CustomSaleIgnoreList to update in case it exists.
     */
    where: CustomSaleIgnoreListWhereUniqueInput
    /**
     * In case the CustomSaleIgnoreList found by the `where` argument doesn't exist, create a new CustomSaleIgnoreList with this data.
     */
    create: XOR<CustomSaleIgnoreListCreateInput, CustomSaleIgnoreListUncheckedCreateInput>
    /**
     * In case the CustomSaleIgnoreList was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomSaleIgnoreListUpdateInput, CustomSaleIgnoreListUncheckedUpdateInput>
  }

  /**
   * CustomSaleIgnoreList delete
   */
  export type CustomSaleIgnoreListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomSaleIgnoreList
     */
    select?: CustomSaleIgnoreListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomSaleIgnoreList
     */
    omit?: CustomSaleIgnoreListOmit<ExtArgs> | null
    /**
     * Filter which CustomSaleIgnoreList to delete.
     */
    where: CustomSaleIgnoreListWhereUniqueInput
  }

  /**
   * CustomSaleIgnoreList deleteMany
   */
  export type CustomSaleIgnoreListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomSaleIgnoreLists to delete
     */
    where?: CustomSaleIgnoreListWhereInput
    /**
     * Limit how many CustomSaleIgnoreLists to delete.
     */
    limit?: number
  }

  /**
   * CustomSaleIgnoreList without action
   */
  export type CustomSaleIgnoreListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomSaleIgnoreList
     */
    select?: CustomSaleIgnoreListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomSaleIgnoreList
     */
    omit?: CustomSaleIgnoreListOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const NextNumberScalarFieldEnum: {
    id: 'id',
    name: 'name',
    value: 'value'
  };

  export type NextNumberScalarFieldEnum = (typeof NextNumberScalarFieldEnum)[keyof typeof NextNumberScalarFieldEnum]


  export const AuditEventScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    eventType: 'eventType',
    sourceId: 'sourceId',
    targetId: 'targetId',
    data: 'data'
  };

  export type AuditEventScalarFieldEnum = (typeof AuditEventScalarFieldEnum)[keyof typeof AuditEventScalarFieldEnum]


  export const CustomSaleScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    orderURL: 'orderURL',
    title: 'title'
  };

  export type CustomSaleScalarFieldEnum = (typeof CustomSaleScalarFieldEnum)[keyof typeof CustomSaleScalarFieldEnum]


  export const CustomSaleIgnoreListScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    title: 'title'
  };

  export type CustomSaleIgnoreListScalarFieldEnum = (typeof CustomSaleIgnoreListScalarFieldEnum)[keyof typeof CustomSaleIgnoreListScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type NextNumberWhereInput = {
    AND?: NextNumberWhereInput | NextNumberWhereInput[]
    OR?: NextNumberWhereInput[]
    NOT?: NextNumberWhereInput | NextNumberWhereInput[]
    id?: IntFilter<"NextNumber"> | number
    name?: StringFilter<"NextNumber"> | string
    value?: IntFilter<"NextNumber"> | number
  }

  export type NextNumberOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
  }

  export type NextNumberWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: NextNumberWhereInput | NextNumberWhereInput[]
    OR?: NextNumberWhereInput[]
    NOT?: NextNumberWhereInput | NextNumberWhereInput[]
    value?: IntFilter<"NextNumber"> | number
  }, "id" | "name">

  export type NextNumberOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    _count?: NextNumberCountOrderByAggregateInput
    _avg?: NextNumberAvgOrderByAggregateInput
    _max?: NextNumberMaxOrderByAggregateInput
    _min?: NextNumberMinOrderByAggregateInput
    _sum?: NextNumberSumOrderByAggregateInput
  }

  export type NextNumberScalarWhereWithAggregatesInput = {
    AND?: NextNumberScalarWhereWithAggregatesInput | NextNumberScalarWhereWithAggregatesInput[]
    OR?: NextNumberScalarWhereWithAggregatesInput[]
    NOT?: NextNumberScalarWhereWithAggregatesInput | NextNumberScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"NextNumber"> | number
    name?: StringWithAggregatesFilter<"NextNumber"> | string
    value?: IntWithAggregatesFilter<"NextNumber"> | number
  }

  export type AuditEventWhereInput = {
    AND?: AuditEventWhereInput | AuditEventWhereInput[]
    OR?: AuditEventWhereInput[]
    NOT?: AuditEventWhereInput | AuditEventWhereInput[]
    id?: IntFilter<"AuditEvent"> | number
    createdAt?: DateTimeFilter<"AuditEvent"> | Date | string
    eventType?: StringFilter<"AuditEvent"> | string
    sourceId?: StringNullableFilter<"AuditEvent"> | string | null
    targetId?: StringNullableFilter<"AuditEvent"> | string | null
    data?: StringNullableFilter<"AuditEvent"> | string | null
  }

  export type AuditEventOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    eventType?: SortOrder
    sourceId?: SortOrderInput | SortOrder
    targetId?: SortOrderInput | SortOrder
    data?: SortOrderInput | SortOrder
  }

  export type AuditEventWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AuditEventWhereInput | AuditEventWhereInput[]
    OR?: AuditEventWhereInput[]
    NOT?: AuditEventWhereInput | AuditEventWhereInput[]
    createdAt?: DateTimeFilter<"AuditEvent"> | Date | string
    eventType?: StringFilter<"AuditEvent"> | string
    sourceId?: StringNullableFilter<"AuditEvent"> | string | null
    targetId?: StringNullableFilter<"AuditEvent"> | string | null
    data?: StringNullableFilter<"AuditEvent"> | string | null
  }, "id">

  export type AuditEventOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    eventType?: SortOrder
    sourceId?: SortOrderInput | SortOrder
    targetId?: SortOrderInput | SortOrder
    data?: SortOrderInput | SortOrder
    _count?: AuditEventCountOrderByAggregateInput
    _avg?: AuditEventAvgOrderByAggregateInput
    _max?: AuditEventMaxOrderByAggregateInput
    _min?: AuditEventMinOrderByAggregateInput
    _sum?: AuditEventSumOrderByAggregateInput
  }

  export type AuditEventScalarWhereWithAggregatesInput = {
    AND?: AuditEventScalarWhereWithAggregatesInput | AuditEventScalarWhereWithAggregatesInput[]
    OR?: AuditEventScalarWhereWithAggregatesInput[]
    NOT?: AuditEventScalarWhereWithAggregatesInput | AuditEventScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AuditEvent"> | number
    createdAt?: DateTimeWithAggregatesFilter<"AuditEvent"> | Date | string
    eventType?: StringWithAggregatesFilter<"AuditEvent"> | string
    sourceId?: StringNullableWithAggregatesFilter<"AuditEvent"> | string | null
    targetId?: StringNullableWithAggregatesFilter<"AuditEvent"> | string | null
    data?: StringNullableWithAggregatesFilter<"AuditEvent"> | string | null
  }

  export type CustomSaleWhereInput = {
    AND?: CustomSaleWhereInput | CustomSaleWhereInput[]
    OR?: CustomSaleWhereInput[]
    NOT?: CustomSaleWhereInput | CustomSaleWhereInput[]
    id?: IntFilter<"CustomSale"> | number
    createdAt?: DateTimeFilter<"CustomSale"> | Date | string
    orderURL?: StringFilter<"CustomSale"> | string
    title?: StringFilter<"CustomSale"> | string
  }

  export type CustomSaleOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    orderURL?: SortOrder
    title?: SortOrder
  }

  export type CustomSaleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CustomSaleWhereInput | CustomSaleWhereInput[]
    OR?: CustomSaleWhereInput[]
    NOT?: CustomSaleWhereInput | CustomSaleWhereInput[]
    createdAt?: DateTimeFilter<"CustomSale"> | Date | string
    orderURL?: StringFilter<"CustomSale"> | string
    title?: StringFilter<"CustomSale"> | string
  }, "id">

  export type CustomSaleOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    orderURL?: SortOrder
    title?: SortOrder
    _count?: CustomSaleCountOrderByAggregateInput
    _avg?: CustomSaleAvgOrderByAggregateInput
    _max?: CustomSaleMaxOrderByAggregateInput
    _min?: CustomSaleMinOrderByAggregateInput
    _sum?: CustomSaleSumOrderByAggregateInput
  }

  export type CustomSaleScalarWhereWithAggregatesInput = {
    AND?: CustomSaleScalarWhereWithAggregatesInput | CustomSaleScalarWhereWithAggregatesInput[]
    OR?: CustomSaleScalarWhereWithAggregatesInput[]
    NOT?: CustomSaleScalarWhereWithAggregatesInput | CustomSaleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CustomSale"> | number
    createdAt?: DateTimeWithAggregatesFilter<"CustomSale"> | Date | string
    orderURL?: StringWithAggregatesFilter<"CustomSale"> | string
    title?: StringWithAggregatesFilter<"CustomSale"> | string
  }

  export type CustomSaleIgnoreListWhereInput = {
    AND?: CustomSaleIgnoreListWhereInput | CustomSaleIgnoreListWhereInput[]
    OR?: CustomSaleIgnoreListWhereInput[]
    NOT?: CustomSaleIgnoreListWhereInput | CustomSaleIgnoreListWhereInput[]
    id?: IntFilter<"CustomSaleIgnoreList"> | number
    createdAt?: DateTimeFilter<"CustomSaleIgnoreList"> | Date | string
    title?: StringFilter<"CustomSaleIgnoreList"> | string
  }

  export type CustomSaleIgnoreListOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
  }

  export type CustomSaleIgnoreListWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    title?: string
    AND?: CustomSaleIgnoreListWhereInput | CustomSaleIgnoreListWhereInput[]
    OR?: CustomSaleIgnoreListWhereInput[]
    NOT?: CustomSaleIgnoreListWhereInput | CustomSaleIgnoreListWhereInput[]
    createdAt?: DateTimeFilter<"CustomSaleIgnoreList"> | Date | string
  }, "id" | "title">

  export type CustomSaleIgnoreListOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    _count?: CustomSaleIgnoreListCountOrderByAggregateInput
    _avg?: CustomSaleIgnoreListAvgOrderByAggregateInput
    _max?: CustomSaleIgnoreListMaxOrderByAggregateInput
    _min?: CustomSaleIgnoreListMinOrderByAggregateInput
    _sum?: CustomSaleIgnoreListSumOrderByAggregateInput
  }

  export type CustomSaleIgnoreListScalarWhereWithAggregatesInput = {
    AND?: CustomSaleIgnoreListScalarWhereWithAggregatesInput | CustomSaleIgnoreListScalarWhereWithAggregatesInput[]
    OR?: CustomSaleIgnoreListScalarWhereWithAggregatesInput[]
    NOT?: CustomSaleIgnoreListScalarWhereWithAggregatesInput | CustomSaleIgnoreListScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CustomSaleIgnoreList"> | number
    createdAt?: DateTimeWithAggregatesFilter<"CustomSaleIgnoreList"> | Date | string
    title?: StringWithAggregatesFilter<"CustomSaleIgnoreList"> | string
  }

  export type NextNumberCreateInput = {
    name: string
    value: number
  }

  export type NextNumberUncheckedCreateInput = {
    id?: number
    name: string
    value: number
  }

  export type NextNumberUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
  }

  export type NextNumberUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
  }

  export type NextNumberCreateManyInput = {
    id?: number
    name: string
    value: number
  }

  export type NextNumberUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
  }

  export type NextNumberUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
  }

  export type AuditEventCreateInput = {
    createdAt?: Date | string
    eventType: string
    sourceId?: string | null
    targetId?: string | null
    data?: string | null
  }

  export type AuditEventUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    eventType: string
    sourceId?: string | null
    targetId?: string | null
    data?: string | null
  }

  export type AuditEventUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: StringFieldUpdateOperationsInput | string
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    targetId?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuditEventUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: StringFieldUpdateOperationsInput | string
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    targetId?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuditEventCreateManyInput = {
    id?: number
    createdAt?: Date | string
    eventType: string
    sourceId?: string | null
    targetId?: string | null
    data?: string | null
  }

  export type AuditEventUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: StringFieldUpdateOperationsInput | string
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    targetId?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuditEventUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: StringFieldUpdateOperationsInput | string
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    targetId?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CustomSaleCreateInput = {
    createdAt?: Date | string
    orderURL: string
    title: string
  }

  export type CustomSaleUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    orderURL: string
    title: string
  }

  export type CustomSaleUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderURL?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
  }

  export type CustomSaleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderURL?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
  }

  export type CustomSaleCreateManyInput = {
    id?: number
    createdAt?: Date | string
    orderURL: string
    title: string
  }

  export type CustomSaleUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderURL?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
  }

  export type CustomSaleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderURL?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
  }

  export type CustomSaleIgnoreListCreateInput = {
    createdAt?: Date | string
    title: string
  }

  export type CustomSaleIgnoreListUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    title: string
  }

  export type CustomSaleIgnoreListUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
  }

  export type CustomSaleIgnoreListUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
  }

  export type CustomSaleIgnoreListCreateManyInput = {
    id?: number
    createdAt?: Date | string
    title: string
  }

  export type CustomSaleIgnoreListUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
  }

  export type CustomSaleIgnoreListUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NextNumberCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
  }

  export type NextNumberAvgOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
  }

  export type NextNumberMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
  }

  export type NextNumberMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
  }

  export type NextNumberSumOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AuditEventCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    eventType?: SortOrder
    sourceId?: SortOrder
    targetId?: SortOrder
    data?: SortOrder
  }

  export type AuditEventAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AuditEventMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    eventType?: SortOrder
    sourceId?: SortOrder
    targetId?: SortOrder
    data?: SortOrder
  }

  export type AuditEventMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    eventType?: SortOrder
    sourceId?: SortOrder
    targetId?: SortOrder
    data?: SortOrder
  }

  export type AuditEventSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type CustomSaleCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    orderURL?: SortOrder
    title?: SortOrder
  }

  export type CustomSaleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CustomSaleMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    orderURL?: SortOrder
    title?: SortOrder
  }

  export type CustomSaleMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    orderURL?: SortOrder
    title?: SortOrder
  }

  export type CustomSaleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CustomSaleIgnoreListCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
  }

  export type CustomSaleIgnoreListAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CustomSaleIgnoreListMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
  }

  export type CustomSaleIgnoreListMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
  }

  export type CustomSaleIgnoreListSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
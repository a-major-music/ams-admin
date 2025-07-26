
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
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model ProductVariant
 * 
 */
export type ProductVariant = $Result.DefaultSelection<Prisma.$ProductVariantPayload>
/**
 * Model URI
 * 
 */
export type URI = $Result.DefaultSelection<Prisma.$URIPayload>
/**
 * Model Stocktake
 * 
 */
export type Stocktake = $Result.DefaultSelection<Prisma.$StocktakePayload>
/**
 * Model StocktakeLine
 * 
 */
export type StocktakeLine = $Result.DefaultSelection<Prisma.$StocktakeLinePayload>
/**
 * Model StockValue
 * 
 */
export type StockValue = $Result.DefaultSelection<Prisma.$StockValuePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Products
 * const products = await prisma.product.findMany()
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
   * // Fetch zero or more Products
   * const products = await prisma.product.findMany()
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
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productVariant`: Exposes CRUD operations for the **ProductVariant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductVariants
    * const productVariants = await prisma.productVariant.findMany()
    * ```
    */
  get productVariant(): Prisma.ProductVariantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.uRI`: Exposes CRUD operations for the **URI** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more URIS
    * const uRIS = await prisma.uRI.findMany()
    * ```
    */
  get uRI(): Prisma.URIDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stocktake`: Exposes CRUD operations for the **Stocktake** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stocktakes
    * const stocktakes = await prisma.stocktake.findMany()
    * ```
    */
  get stocktake(): Prisma.StocktakeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stocktakeLine`: Exposes CRUD operations for the **StocktakeLine** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StocktakeLines
    * const stocktakeLines = await prisma.stocktakeLine.findMany()
    * ```
    */
  get stocktakeLine(): Prisma.StocktakeLineDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stockValue`: Exposes CRUD operations for the **StockValue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StockValues
    * const stockValues = await prisma.stockValue.findMany()
    * ```
    */
  get stockValue(): Prisma.StockValueDelegate<ExtArgs, ClientOptions>;
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
    Product: 'Product',
    ProductVariant: 'ProductVariant',
    URI: 'URI',
    Stocktake: 'Stocktake',
    StocktakeLine: 'StocktakeLine',
    StockValue: 'StockValue'
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
      modelProps: "product" | "productVariant" | "uRI" | "stocktake" | "stocktakeLine" | "stockValue"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      ProductVariant: {
        payload: Prisma.$ProductVariantPayload<ExtArgs>
        fields: Prisma.ProductVariantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductVariantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductVariantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>
          }
          findFirst: {
            args: Prisma.ProductVariantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductVariantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>
          }
          findMany: {
            args: Prisma.ProductVariantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>[]
          }
          create: {
            args: Prisma.ProductVariantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>
          }
          createMany: {
            args: Prisma.ProductVariantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductVariantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>[]
          }
          delete: {
            args: Prisma.ProductVariantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>
          }
          update: {
            args: Prisma.ProductVariantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>
          }
          deleteMany: {
            args: Prisma.ProductVariantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductVariantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductVariantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>[]
          }
          upsert: {
            args: Prisma.ProductVariantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>
          }
          aggregate: {
            args: Prisma.ProductVariantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductVariant>
          }
          groupBy: {
            args: Prisma.ProductVariantGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductVariantGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductVariantCountArgs<ExtArgs>
            result: $Utils.Optional<ProductVariantCountAggregateOutputType> | number
          }
        }
      }
      URI: {
        payload: Prisma.$URIPayload<ExtArgs>
        fields: Prisma.URIFieldRefs
        operations: {
          findUnique: {
            args: Prisma.URIFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$URIPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.URIFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$URIPayload>
          }
          findFirst: {
            args: Prisma.URIFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$URIPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.URIFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$URIPayload>
          }
          findMany: {
            args: Prisma.URIFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$URIPayload>[]
          }
          create: {
            args: Prisma.URICreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$URIPayload>
          }
          createMany: {
            args: Prisma.URICreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.URICreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$URIPayload>[]
          }
          delete: {
            args: Prisma.URIDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$URIPayload>
          }
          update: {
            args: Prisma.URIUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$URIPayload>
          }
          deleteMany: {
            args: Prisma.URIDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.URIUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.URIUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$URIPayload>[]
          }
          upsert: {
            args: Prisma.URIUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$URIPayload>
          }
          aggregate: {
            args: Prisma.URIAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateURI>
          }
          groupBy: {
            args: Prisma.URIGroupByArgs<ExtArgs>
            result: $Utils.Optional<URIGroupByOutputType>[]
          }
          count: {
            args: Prisma.URICountArgs<ExtArgs>
            result: $Utils.Optional<URICountAggregateOutputType> | number
          }
        }
      }
      Stocktake: {
        payload: Prisma.$StocktakePayload<ExtArgs>
        fields: Prisma.StocktakeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StocktakeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StocktakePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StocktakeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StocktakePayload>
          }
          findFirst: {
            args: Prisma.StocktakeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StocktakePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StocktakeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StocktakePayload>
          }
          findMany: {
            args: Prisma.StocktakeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StocktakePayload>[]
          }
          create: {
            args: Prisma.StocktakeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StocktakePayload>
          }
          createMany: {
            args: Prisma.StocktakeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StocktakeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StocktakePayload>[]
          }
          delete: {
            args: Prisma.StocktakeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StocktakePayload>
          }
          update: {
            args: Prisma.StocktakeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StocktakePayload>
          }
          deleteMany: {
            args: Prisma.StocktakeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StocktakeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StocktakeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StocktakePayload>[]
          }
          upsert: {
            args: Prisma.StocktakeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StocktakePayload>
          }
          aggregate: {
            args: Prisma.StocktakeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStocktake>
          }
          groupBy: {
            args: Prisma.StocktakeGroupByArgs<ExtArgs>
            result: $Utils.Optional<StocktakeGroupByOutputType>[]
          }
          count: {
            args: Prisma.StocktakeCountArgs<ExtArgs>
            result: $Utils.Optional<StocktakeCountAggregateOutputType> | number
          }
        }
      }
      StocktakeLine: {
        payload: Prisma.$StocktakeLinePayload<ExtArgs>
        fields: Prisma.StocktakeLineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StocktakeLineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StocktakeLinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StocktakeLineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StocktakeLinePayload>
          }
          findFirst: {
            args: Prisma.StocktakeLineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StocktakeLinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StocktakeLineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StocktakeLinePayload>
          }
          findMany: {
            args: Prisma.StocktakeLineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StocktakeLinePayload>[]
          }
          create: {
            args: Prisma.StocktakeLineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StocktakeLinePayload>
          }
          createMany: {
            args: Prisma.StocktakeLineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StocktakeLineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StocktakeLinePayload>[]
          }
          delete: {
            args: Prisma.StocktakeLineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StocktakeLinePayload>
          }
          update: {
            args: Prisma.StocktakeLineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StocktakeLinePayload>
          }
          deleteMany: {
            args: Prisma.StocktakeLineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StocktakeLineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StocktakeLineUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StocktakeLinePayload>[]
          }
          upsert: {
            args: Prisma.StocktakeLineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StocktakeLinePayload>
          }
          aggregate: {
            args: Prisma.StocktakeLineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStocktakeLine>
          }
          groupBy: {
            args: Prisma.StocktakeLineGroupByArgs<ExtArgs>
            result: $Utils.Optional<StocktakeLineGroupByOutputType>[]
          }
          count: {
            args: Prisma.StocktakeLineCountArgs<ExtArgs>
            result: $Utils.Optional<StocktakeLineCountAggregateOutputType> | number
          }
        }
      }
      StockValue: {
        payload: Prisma.$StockValuePayload<ExtArgs>
        fields: Prisma.StockValueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StockValueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockValuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StockValueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockValuePayload>
          }
          findFirst: {
            args: Prisma.StockValueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockValuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StockValueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockValuePayload>
          }
          findMany: {
            args: Prisma.StockValueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockValuePayload>[]
          }
          create: {
            args: Prisma.StockValueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockValuePayload>
          }
          createMany: {
            args: Prisma.StockValueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StockValueCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockValuePayload>[]
          }
          delete: {
            args: Prisma.StockValueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockValuePayload>
          }
          update: {
            args: Prisma.StockValueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockValuePayload>
          }
          deleteMany: {
            args: Prisma.StockValueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StockValueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StockValueUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockValuePayload>[]
          }
          upsert: {
            args: Prisma.StockValueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockValuePayload>
          }
          aggregate: {
            args: Prisma.StockValueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStockValue>
          }
          groupBy: {
            args: Prisma.StockValueGroupByArgs<ExtArgs>
            result: $Utils.Optional<StockValueGroupByOutputType>[]
          }
          count: {
            args: Prisma.StockValueCountArgs<ExtArgs>
            result: $Utils.Optional<StockValueCountAggregateOutputType> | number
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
    product?: ProductOmit
    productVariant?: ProductVariantOmit
    uRI?: URIOmit
    stocktake?: StocktakeOmit
    stocktakeLine?: StocktakeLineOmit
    stockValue?: StockValueOmit
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
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    variants: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variants?: boolean | ProductCountOutputTypeCountVariantsArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountVariantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductVariantWhereInput
  }


  /**
   * Count Type ProductVariantCountOutputType
   */

  export type ProductVariantCountOutputType = {
    imageUrls: number
    StocktakeLine: number
  }

  export type ProductVariantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    imageUrls?: boolean | ProductVariantCountOutputTypeCountImageUrlsArgs
    StocktakeLine?: boolean | ProductVariantCountOutputTypeCountStocktakeLineArgs
  }

  // Custom InputTypes
  /**
   * ProductVariantCountOutputType without action
   */
  export type ProductVariantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariantCountOutputType
     */
    select?: ProductVariantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductVariantCountOutputType without action
   */
  export type ProductVariantCountOutputTypeCountImageUrlsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: URIWhereInput
  }

  /**
   * ProductVariantCountOutputType without action
   */
  export type ProductVariantCountOutputTypeCountStocktakeLineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StocktakeLineWhereInput
  }


  /**
   * Count Type StocktakeCountOutputType
   */

  export type StocktakeCountOutputType = {
    lines: number
  }

  export type StocktakeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lines?: boolean | StocktakeCountOutputTypeCountLinesArgs
  }

  // Custom InputTypes
  /**
   * StocktakeCountOutputType without action
   */
  export type StocktakeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StocktakeCountOutputType
     */
    select?: StocktakeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StocktakeCountOutputType without action
   */
  export type StocktakeCountOutputTypeCountLinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StocktakeLineWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    guid: string | null
    publishedToShopify: boolean | null
    shopifyId: string | null
    name: string | null
    supplierGuid: string | null
    taxable: boolean | null
    productType: string | null
    brand: string | null
    description: string | null
    filterFields: string | null
    location: string | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    guid: string | null
    publishedToShopify: boolean | null
    shopifyId: string | null
    name: string | null
    supplierGuid: string | null
    taxable: boolean | null
    productType: string | null
    brand: string | null
    description: string | null
    filterFields: string | null
    location: string | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    guid: number
    publishedToShopify: number
    shopifyId: number
    name: number
    supplierGuid: number
    taxable: number
    productType: number
    brand: number
    description: number
    tags: number
    filterFields: number
    location: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    guid?: true
    publishedToShopify?: true
    shopifyId?: true
    name?: true
    supplierGuid?: true
    taxable?: true
    productType?: true
    brand?: true
    description?: true
    filterFields?: true
    location?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    guid?: true
    publishedToShopify?: true
    shopifyId?: true
    name?: true
    supplierGuid?: true
    taxable?: true
    productType?: true
    brand?: true
    description?: true
    filterFields?: true
    location?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    guid?: true
    publishedToShopify?: true
    shopifyId?: true
    name?: true
    supplierGuid?: true
    taxable?: true
    productType?: true
    brand?: true
    description?: true
    tags?: true
    filterFields?: true
    location?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: number
    guid: string | null
    publishedToShopify: boolean | null
    shopifyId: string | null
    name: string
    supplierGuid: string | null
    taxable: boolean
    productType: string
    brand: string | null
    description: string | null
    tags: string[]
    filterFields: string | null
    location: string
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guid?: boolean
    publishedToShopify?: boolean
    shopifyId?: boolean
    name?: boolean
    supplierGuid?: boolean
    taxable?: boolean
    productType?: boolean
    brand?: boolean
    description?: boolean
    tags?: boolean
    filterFields?: boolean
    location?: boolean
    variants?: boolean | Product$variantsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guid?: boolean
    publishedToShopify?: boolean
    shopifyId?: boolean
    name?: boolean
    supplierGuid?: boolean
    taxable?: boolean
    productType?: boolean
    brand?: boolean
    description?: boolean
    tags?: boolean
    filterFields?: boolean
    location?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guid?: boolean
    publishedToShopify?: boolean
    shopifyId?: boolean
    name?: boolean
    supplierGuid?: boolean
    taxable?: boolean
    productType?: boolean
    brand?: boolean
    description?: boolean
    tags?: boolean
    filterFields?: boolean
    location?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    guid?: boolean
    publishedToShopify?: boolean
    shopifyId?: boolean
    name?: boolean
    supplierGuid?: boolean
    taxable?: boolean
    productType?: boolean
    brand?: boolean
    description?: boolean
    tags?: boolean
    filterFields?: boolean
    location?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "guid" | "publishedToShopify" | "shopifyId" | "name" | "supplierGuid" | "taxable" | "productType" | "brand" | "description" | "tags" | "filterFields" | "location", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variants?: boolean | Product$variantsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      variants: Prisma.$ProductVariantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      guid: string | null
      publishedToShopify: boolean | null
      shopifyId: string | null
      name: string
      supplierGuid: string | null
      taxable: boolean
      productType: string
      brand: string | null
      description: string | null
      tags: string[]
      filterFields: string | null
      location: string
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    variants<T extends Product$variantsArgs<ExtArgs> = {}>(args?: Subset<T, Product$variantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'Int'>
    readonly guid: FieldRef<"Product", 'String'>
    readonly publishedToShopify: FieldRef<"Product", 'Boolean'>
    readonly shopifyId: FieldRef<"Product", 'String'>
    readonly name: FieldRef<"Product", 'String'>
    readonly supplierGuid: FieldRef<"Product", 'String'>
    readonly taxable: FieldRef<"Product", 'Boolean'>
    readonly productType: FieldRef<"Product", 'String'>
    readonly brand: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly tags: FieldRef<"Product", 'String[]'>
    readonly filterFields: FieldRef<"Product", 'String'>
    readonly location: FieldRef<"Product", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.variants
   */
  export type Product$variantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    where?: ProductVariantWhereInput
    orderBy?: ProductVariantOrderByWithRelationInput | ProductVariantOrderByWithRelationInput[]
    cursor?: ProductVariantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductVariantScalarFieldEnum | ProductVariantScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model ProductVariant
   */

  export type AggregateProductVariant = {
    _count: ProductVariantCountAggregateOutputType | null
    _avg: ProductVariantAvgAggregateOutputType | null
    _sum: ProductVariantSumAggregateOutputType | null
    _min: ProductVariantMinAggregateOutputType | null
    _max: ProductVariantMaxAggregateOutputType | null
  }

  export type ProductVariantAvgAggregateOutputType = {
    id: number | null
    weight: number | null
    stockOnHand: number | null
    packSize: number | null
    retailPrice: number | null
    buyPrice: number | null
    previousPrice: number | null
    movingAverageCost: number | null
    productId: number | null
  }

  export type ProductVariantSumAggregateOutputType = {
    id: number | null
    weight: number | null
    stockOnHand: number | null
    packSize: number | null
    retailPrice: number | null
    buyPrice: number | null
    previousPrice: number | null
    movingAverageCost: number | null
    productId: number | null
  }

  export type ProductVariantMinAggregateOutputType = {
    id: number | null
    guid: string | null
    filterValues: string | null
    sku: string | null
    barcode: string | null
    supplierCode: string | null
    weight: number | null
    weightUnit: string | null
    manageStockLevels: boolean | null
    stockOnHand: number | null
    boughtInPacks: boolean | null
    packSize: number | null
    sellable: boolean | null
    buyable: boolean | null
    retailPrice: number | null
    buyPrice: number | null
    previousPrice: number | null
    movingAverageCost: number | null
    notes: string | null
    productId: number | null
  }

  export type ProductVariantMaxAggregateOutputType = {
    id: number | null
    guid: string | null
    filterValues: string | null
    sku: string | null
    barcode: string | null
    supplierCode: string | null
    weight: number | null
    weightUnit: string | null
    manageStockLevels: boolean | null
    stockOnHand: number | null
    boughtInPacks: boolean | null
    packSize: number | null
    sellable: boolean | null
    buyable: boolean | null
    retailPrice: number | null
    buyPrice: number | null
    previousPrice: number | null
    movingAverageCost: number | null
    notes: string | null
    productId: number | null
  }

  export type ProductVariantCountAggregateOutputType = {
    id: number
    guid: number
    filterValues: number
    sku: number
    barcode: number
    supplierCode: number
    weight: number
    weightUnit: number
    manageStockLevels: number
    stockOnHand: number
    boughtInPacks: number
    packSize: number
    sellable: number
    buyable: number
    retailPrice: number
    buyPrice: number
    previousPrice: number
    movingAverageCost: number
    notes: number
    productId: number
    _all: number
  }


  export type ProductVariantAvgAggregateInputType = {
    id?: true
    weight?: true
    stockOnHand?: true
    packSize?: true
    retailPrice?: true
    buyPrice?: true
    previousPrice?: true
    movingAverageCost?: true
    productId?: true
  }

  export type ProductVariantSumAggregateInputType = {
    id?: true
    weight?: true
    stockOnHand?: true
    packSize?: true
    retailPrice?: true
    buyPrice?: true
    previousPrice?: true
    movingAverageCost?: true
    productId?: true
  }

  export type ProductVariantMinAggregateInputType = {
    id?: true
    guid?: true
    filterValues?: true
    sku?: true
    barcode?: true
    supplierCode?: true
    weight?: true
    weightUnit?: true
    manageStockLevels?: true
    stockOnHand?: true
    boughtInPacks?: true
    packSize?: true
    sellable?: true
    buyable?: true
    retailPrice?: true
    buyPrice?: true
    previousPrice?: true
    movingAverageCost?: true
    notes?: true
    productId?: true
  }

  export type ProductVariantMaxAggregateInputType = {
    id?: true
    guid?: true
    filterValues?: true
    sku?: true
    barcode?: true
    supplierCode?: true
    weight?: true
    weightUnit?: true
    manageStockLevels?: true
    stockOnHand?: true
    boughtInPacks?: true
    packSize?: true
    sellable?: true
    buyable?: true
    retailPrice?: true
    buyPrice?: true
    previousPrice?: true
    movingAverageCost?: true
    notes?: true
    productId?: true
  }

  export type ProductVariantCountAggregateInputType = {
    id?: true
    guid?: true
    filterValues?: true
    sku?: true
    barcode?: true
    supplierCode?: true
    weight?: true
    weightUnit?: true
    manageStockLevels?: true
    stockOnHand?: true
    boughtInPacks?: true
    packSize?: true
    sellable?: true
    buyable?: true
    retailPrice?: true
    buyPrice?: true
    previousPrice?: true
    movingAverageCost?: true
    notes?: true
    productId?: true
    _all?: true
  }

  export type ProductVariantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductVariant to aggregate.
     */
    where?: ProductVariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVariants to fetch.
     */
    orderBy?: ProductVariantOrderByWithRelationInput | ProductVariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductVariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVariants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVariants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductVariants
    **/
    _count?: true | ProductVariantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductVariantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductVariantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductVariantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductVariantMaxAggregateInputType
  }

  export type GetProductVariantAggregateType<T extends ProductVariantAggregateArgs> = {
        [P in keyof T & keyof AggregateProductVariant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductVariant[P]>
      : GetScalarType<T[P], AggregateProductVariant[P]>
  }




  export type ProductVariantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductVariantWhereInput
    orderBy?: ProductVariantOrderByWithAggregationInput | ProductVariantOrderByWithAggregationInput[]
    by: ProductVariantScalarFieldEnum[] | ProductVariantScalarFieldEnum
    having?: ProductVariantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductVariantCountAggregateInputType | true
    _avg?: ProductVariantAvgAggregateInputType
    _sum?: ProductVariantSumAggregateInputType
    _min?: ProductVariantMinAggregateInputType
    _max?: ProductVariantMaxAggregateInputType
  }

  export type ProductVariantGroupByOutputType = {
    id: number
    guid: string | null
    filterValues: string | null
    sku: string
    barcode: string | null
    supplierCode: string | null
    weight: number
    weightUnit: string
    manageStockLevels: boolean
    stockOnHand: number
    boughtInPacks: boolean
    packSize: number
    sellable: boolean
    buyable: boolean
    retailPrice: number
    buyPrice: number
    previousPrice: number | null
    movingAverageCost: number
    notes: string | null
    productId: number
    _count: ProductVariantCountAggregateOutputType | null
    _avg: ProductVariantAvgAggregateOutputType | null
    _sum: ProductVariantSumAggregateOutputType | null
    _min: ProductVariantMinAggregateOutputType | null
    _max: ProductVariantMaxAggregateOutputType | null
  }

  type GetProductVariantGroupByPayload<T extends ProductVariantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductVariantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductVariantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductVariantGroupByOutputType[P]>
            : GetScalarType<T[P], ProductVariantGroupByOutputType[P]>
        }
      >
    >


  export type ProductVariantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guid?: boolean
    filterValues?: boolean
    sku?: boolean
    barcode?: boolean
    supplierCode?: boolean
    weight?: boolean
    weightUnit?: boolean
    manageStockLevels?: boolean
    stockOnHand?: boolean
    boughtInPacks?: boolean
    packSize?: boolean
    sellable?: boolean
    buyable?: boolean
    retailPrice?: boolean
    buyPrice?: boolean
    previousPrice?: boolean
    movingAverageCost?: boolean
    notes?: boolean
    productId?: boolean
    imageUrls?: boolean | ProductVariant$imageUrlsArgs<ExtArgs>
    Product?: boolean | ProductDefaultArgs<ExtArgs>
    StocktakeLine?: boolean | ProductVariant$StocktakeLineArgs<ExtArgs>
    _count?: boolean | ProductVariantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productVariant"]>

  export type ProductVariantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guid?: boolean
    filterValues?: boolean
    sku?: boolean
    barcode?: boolean
    supplierCode?: boolean
    weight?: boolean
    weightUnit?: boolean
    manageStockLevels?: boolean
    stockOnHand?: boolean
    boughtInPacks?: boolean
    packSize?: boolean
    sellable?: boolean
    buyable?: boolean
    retailPrice?: boolean
    buyPrice?: boolean
    previousPrice?: boolean
    movingAverageCost?: boolean
    notes?: boolean
    productId?: boolean
    Product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productVariant"]>

  export type ProductVariantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guid?: boolean
    filterValues?: boolean
    sku?: boolean
    barcode?: boolean
    supplierCode?: boolean
    weight?: boolean
    weightUnit?: boolean
    manageStockLevels?: boolean
    stockOnHand?: boolean
    boughtInPacks?: boolean
    packSize?: boolean
    sellable?: boolean
    buyable?: boolean
    retailPrice?: boolean
    buyPrice?: boolean
    previousPrice?: boolean
    movingAverageCost?: boolean
    notes?: boolean
    productId?: boolean
    Product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productVariant"]>

  export type ProductVariantSelectScalar = {
    id?: boolean
    guid?: boolean
    filterValues?: boolean
    sku?: boolean
    barcode?: boolean
    supplierCode?: boolean
    weight?: boolean
    weightUnit?: boolean
    manageStockLevels?: boolean
    stockOnHand?: boolean
    boughtInPacks?: boolean
    packSize?: boolean
    sellable?: boolean
    buyable?: boolean
    retailPrice?: boolean
    buyPrice?: boolean
    previousPrice?: boolean
    movingAverageCost?: boolean
    notes?: boolean
    productId?: boolean
  }

  export type ProductVariantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "guid" | "filterValues" | "sku" | "barcode" | "supplierCode" | "weight" | "weightUnit" | "manageStockLevels" | "stockOnHand" | "boughtInPacks" | "packSize" | "sellable" | "buyable" | "retailPrice" | "buyPrice" | "previousPrice" | "movingAverageCost" | "notes" | "productId", ExtArgs["result"]["productVariant"]>
  export type ProductVariantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    imageUrls?: boolean | ProductVariant$imageUrlsArgs<ExtArgs>
    Product?: boolean | ProductDefaultArgs<ExtArgs>
    StocktakeLine?: boolean | ProductVariant$StocktakeLineArgs<ExtArgs>
    _count?: boolean | ProductVariantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductVariantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ProductVariantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $ProductVariantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductVariant"
    objects: {
      imageUrls: Prisma.$URIPayload<ExtArgs>[]
      Product: Prisma.$ProductPayload<ExtArgs>
      StocktakeLine: Prisma.$StocktakeLinePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      guid: string | null
      filterValues: string | null
      sku: string
      barcode: string | null
      supplierCode: string | null
      weight: number
      weightUnit: string
      manageStockLevels: boolean
      stockOnHand: number
      boughtInPacks: boolean
      packSize: number
      sellable: boolean
      buyable: boolean
      retailPrice: number
      buyPrice: number
      previousPrice: number | null
      movingAverageCost: number
      notes: string | null
      productId: number
    }, ExtArgs["result"]["productVariant"]>
    composites: {}
  }

  type ProductVariantGetPayload<S extends boolean | null | undefined | ProductVariantDefaultArgs> = $Result.GetResult<Prisma.$ProductVariantPayload, S>

  type ProductVariantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductVariantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductVariantCountAggregateInputType | true
    }

  export interface ProductVariantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductVariant'], meta: { name: 'ProductVariant' } }
    /**
     * Find zero or one ProductVariant that matches the filter.
     * @param {ProductVariantFindUniqueArgs} args - Arguments to find a ProductVariant
     * @example
     * // Get one ProductVariant
     * const productVariant = await prisma.productVariant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductVariantFindUniqueArgs>(args: SelectSubset<T, ProductVariantFindUniqueArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductVariant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductVariantFindUniqueOrThrowArgs} args - Arguments to find a ProductVariant
     * @example
     * // Get one ProductVariant
     * const productVariant = await prisma.productVariant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductVariantFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductVariantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductVariant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantFindFirstArgs} args - Arguments to find a ProductVariant
     * @example
     * // Get one ProductVariant
     * const productVariant = await prisma.productVariant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductVariantFindFirstArgs>(args?: SelectSubset<T, ProductVariantFindFirstArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductVariant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantFindFirstOrThrowArgs} args - Arguments to find a ProductVariant
     * @example
     * // Get one ProductVariant
     * const productVariant = await prisma.productVariant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductVariantFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductVariantFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductVariants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductVariants
     * const productVariants = await prisma.productVariant.findMany()
     * 
     * // Get first 10 ProductVariants
     * const productVariants = await prisma.productVariant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productVariantWithIdOnly = await prisma.productVariant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductVariantFindManyArgs>(args?: SelectSubset<T, ProductVariantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductVariant.
     * @param {ProductVariantCreateArgs} args - Arguments to create a ProductVariant.
     * @example
     * // Create one ProductVariant
     * const ProductVariant = await prisma.productVariant.create({
     *   data: {
     *     // ... data to create a ProductVariant
     *   }
     * })
     * 
     */
    create<T extends ProductVariantCreateArgs>(args: SelectSubset<T, ProductVariantCreateArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductVariants.
     * @param {ProductVariantCreateManyArgs} args - Arguments to create many ProductVariants.
     * @example
     * // Create many ProductVariants
     * const productVariant = await prisma.productVariant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductVariantCreateManyArgs>(args?: SelectSubset<T, ProductVariantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductVariants and returns the data saved in the database.
     * @param {ProductVariantCreateManyAndReturnArgs} args - Arguments to create many ProductVariants.
     * @example
     * // Create many ProductVariants
     * const productVariant = await prisma.productVariant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductVariants and only return the `id`
     * const productVariantWithIdOnly = await prisma.productVariant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductVariantCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductVariantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductVariant.
     * @param {ProductVariantDeleteArgs} args - Arguments to delete one ProductVariant.
     * @example
     * // Delete one ProductVariant
     * const ProductVariant = await prisma.productVariant.delete({
     *   where: {
     *     // ... filter to delete one ProductVariant
     *   }
     * })
     * 
     */
    delete<T extends ProductVariantDeleteArgs>(args: SelectSubset<T, ProductVariantDeleteArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductVariant.
     * @param {ProductVariantUpdateArgs} args - Arguments to update one ProductVariant.
     * @example
     * // Update one ProductVariant
     * const productVariant = await prisma.productVariant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductVariantUpdateArgs>(args: SelectSubset<T, ProductVariantUpdateArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductVariants.
     * @param {ProductVariantDeleteManyArgs} args - Arguments to filter ProductVariants to delete.
     * @example
     * // Delete a few ProductVariants
     * const { count } = await prisma.productVariant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductVariantDeleteManyArgs>(args?: SelectSubset<T, ProductVariantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductVariants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductVariants
     * const productVariant = await prisma.productVariant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductVariantUpdateManyArgs>(args: SelectSubset<T, ProductVariantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductVariants and returns the data updated in the database.
     * @param {ProductVariantUpdateManyAndReturnArgs} args - Arguments to update many ProductVariants.
     * @example
     * // Update many ProductVariants
     * const productVariant = await prisma.productVariant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductVariants and only return the `id`
     * const productVariantWithIdOnly = await prisma.productVariant.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductVariantUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductVariantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductVariant.
     * @param {ProductVariantUpsertArgs} args - Arguments to update or create a ProductVariant.
     * @example
     * // Update or create a ProductVariant
     * const productVariant = await prisma.productVariant.upsert({
     *   create: {
     *     // ... data to create a ProductVariant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductVariant we want to update
     *   }
     * })
     */
    upsert<T extends ProductVariantUpsertArgs>(args: SelectSubset<T, ProductVariantUpsertArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductVariants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantCountArgs} args - Arguments to filter ProductVariants to count.
     * @example
     * // Count the number of ProductVariants
     * const count = await prisma.productVariant.count({
     *   where: {
     *     // ... the filter for the ProductVariants we want to count
     *   }
     * })
    **/
    count<T extends ProductVariantCountArgs>(
      args?: Subset<T, ProductVariantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductVariantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductVariant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductVariantAggregateArgs>(args: Subset<T, ProductVariantAggregateArgs>): Prisma.PrismaPromise<GetProductVariantAggregateType<T>>

    /**
     * Group by ProductVariant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantGroupByArgs} args - Group by arguments.
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
      T extends ProductVariantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductVariantGroupByArgs['orderBy'] }
        : { orderBy?: ProductVariantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductVariantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductVariantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductVariant model
   */
  readonly fields: ProductVariantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductVariant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductVariantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    imageUrls<T extends ProductVariant$imageUrlsArgs<ExtArgs> = {}>(args?: Subset<T, ProductVariant$imageUrlsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$URIPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    StocktakeLine<T extends ProductVariant$StocktakeLineArgs<ExtArgs> = {}>(args?: Subset<T, ProductVariant$StocktakeLineArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StocktakeLinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ProductVariant model
   */
  interface ProductVariantFieldRefs {
    readonly id: FieldRef<"ProductVariant", 'Int'>
    readonly guid: FieldRef<"ProductVariant", 'String'>
    readonly filterValues: FieldRef<"ProductVariant", 'String'>
    readonly sku: FieldRef<"ProductVariant", 'String'>
    readonly barcode: FieldRef<"ProductVariant", 'String'>
    readonly supplierCode: FieldRef<"ProductVariant", 'String'>
    readonly weight: FieldRef<"ProductVariant", 'Int'>
    readonly weightUnit: FieldRef<"ProductVariant", 'String'>
    readonly manageStockLevels: FieldRef<"ProductVariant", 'Boolean'>
    readonly stockOnHand: FieldRef<"ProductVariant", 'Int'>
    readonly boughtInPacks: FieldRef<"ProductVariant", 'Boolean'>
    readonly packSize: FieldRef<"ProductVariant", 'Int'>
    readonly sellable: FieldRef<"ProductVariant", 'Boolean'>
    readonly buyable: FieldRef<"ProductVariant", 'Boolean'>
    readonly retailPrice: FieldRef<"ProductVariant", 'Int'>
    readonly buyPrice: FieldRef<"ProductVariant", 'Int'>
    readonly previousPrice: FieldRef<"ProductVariant", 'Int'>
    readonly movingAverageCost: FieldRef<"ProductVariant", 'Int'>
    readonly notes: FieldRef<"ProductVariant", 'String'>
    readonly productId: FieldRef<"ProductVariant", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ProductVariant findUnique
   */
  export type ProductVariantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariant to fetch.
     */
    where: ProductVariantWhereUniqueInput
  }

  /**
   * ProductVariant findUniqueOrThrow
   */
  export type ProductVariantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariant to fetch.
     */
    where: ProductVariantWhereUniqueInput
  }

  /**
   * ProductVariant findFirst
   */
  export type ProductVariantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariant to fetch.
     */
    where?: ProductVariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVariants to fetch.
     */
    orderBy?: ProductVariantOrderByWithRelationInput | ProductVariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductVariants.
     */
    cursor?: ProductVariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVariants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVariants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductVariants.
     */
    distinct?: ProductVariantScalarFieldEnum | ProductVariantScalarFieldEnum[]
  }

  /**
   * ProductVariant findFirstOrThrow
   */
  export type ProductVariantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariant to fetch.
     */
    where?: ProductVariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVariants to fetch.
     */
    orderBy?: ProductVariantOrderByWithRelationInput | ProductVariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductVariants.
     */
    cursor?: ProductVariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVariants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVariants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductVariants.
     */
    distinct?: ProductVariantScalarFieldEnum | ProductVariantScalarFieldEnum[]
  }

  /**
   * ProductVariant findMany
   */
  export type ProductVariantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariants to fetch.
     */
    where?: ProductVariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVariants to fetch.
     */
    orderBy?: ProductVariantOrderByWithRelationInput | ProductVariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductVariants.
     */
    cursor?: ProductVariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVariants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVariants.
     */
    skip?: number
    distinct?: ProductVariantScalarFieldEnum | ProductVariantScalarFieldEnum[]
  }

  /**
   * ProductVariant create
   */
  export type ProductVariantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductVariant.
     */
    data: XOR<ProductVariantCreateInput, ProductVariantUncheckedCreateInput>
  }

  /**
   * ProductVariant createMany
   */
  export type ProductVariantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductVariants.
     */
    data: ProductVariantCreateManyInput | ProductVariantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductVariant createManyAndReturn
   */
  export type ProductVariantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * The data used to create many ProductVariants.
     */
    data: ProductVariantCreateManyInput | ProductVariantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductVariant update
   */
  export type ProductVariantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductVariant.
     */
    data: XOR<ProductVariantUpdateInput, ProductVariantUncheckedUpdateInput>
    /**
     * Choose, which ProductVariant to update.
     */
    where: ProductVariantWhereUniqueInput
  }

  /**
   * ProductVariant updateMany
   */
  export type ProductVariantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductVariants.
     */
    data: XOR<ProductVariantUpdateManyMutationInput, ProductVariantUncheckedUpdateManyInput>
    /**
     * Filter which ProductVariants to update
     */
    where?: ProductVariantWhereInput
    /**
     * Limit how many ProductVariants to update.
     */
    limit?: number
  }

  /**
   * ProductVariant updateManyAndReturn
   */
  export type ProductVariantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * The data used to update ProductVariants.
     */
    data: XOR<ProductVariantUpdateManyMutationInput, ProductVariantUncheckedUpdateManyInput>
    /**
     * Filter which ProductVariants to update
     */
    where?: ProductVariantWhereInput
    /**
     * Limit how many ProductVariants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductVariant upsert
   */
  export type ProductVariantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductVariant to update in case it exists.
     */
    where: ProductVariantWhereUniqueInput
    /**
     * In case the ProductVariant found by the `where` argument doesn't exist, create a new ProductVariant with this data.
     */
    create: XOR<ProductVariantCreateInput, ProductVariantUncheckedCreateInput>
    /**
     * In case the ProductVariant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductVariantUpdateInput, ProductVariantUncheckedUpdateInput>
  }

  /**
   * ProductVariant delete
   */
  export type ProductVariantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * Filter which ProductVariant to delete.
     */
    where: ProductVariantWhereUniqueInput
  }

  /**
   * ProductVariant deleteMany
   */
  export type ProductVariantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductVariants to delete
     */
    where?: ProductVariantWhereInput
    /**
     * Limit how many ProductVariants to delete.
     */
    limit?: number
  }

  /**
   * ProductVariant.imageUrls
   */
  export type ProductVariant$imageUrlsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the URI
     */
    select?: URISelect<ExtArgs> | null
    /**
     * Omit specific fields from the URI
     */
    omit?: URIOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: URIInclude<ExtArgs> | null
    where?: URIWhereInput
    orderBy?: URIOrderByWithRelationInput | URIOrderByWithRelationInput[]
    cursor?: URIWhereUniqueInput
    take?: number
    skip?: number
    distinct?: URIScalarFieldEnum | URIScalarFieldEnum[]
  }

  /**
   * ProductVariant.StocktakeLine
   */
  export type ProductVariant$StocktakeLineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StocktakeLine
     */
    select?: StocktakeLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StocktakeLine
     */
    omit?: StocktakeLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StocktakeLineInclude<ExtArgs> | null
    where?: StocktakeLineWhereInput
    orderBy?: StocktakeLineOrderByWithRelationInput | StocktakeLineOrderByWithRelationInput[]
    cursor?: StocktakeLineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StocktakeLineScalarFieldEnum | StocktakeLineScalarFieldEnum[]
  }

  /**
   * ProductVariant without action
   */
  export type ProductVariantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariant
     */
    omit?: ProductVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
  }


  /**
   * Model URI
   */

  export type AggregateURI = {
    _count: URICountAggregateOutputType | null
    _avg: URIAvgAggregateOutputType | null
    _sum: URISumAggregateOutputType | null
    _min: URIMinAggregateOutputType | null
    _max: URIMaxAggregateOutputType | null
  }

  export type URIAvgAggregateOutputType = {
    id: number | null
    productVariantId: number | null
  }

  export type URISumAggregateOutputType = {
    id: number | null
    productVariantId: number | null
  }

  export type URIMinAggregateOutputType = {
    id: number | null
    guid: string | null
    uri: string | null
    productVariantId: number | null
  }

  export type URIMaxAggregateOutputType = {
    id: number | null
    guid: string | null
    uri: string | null
    productVariantId: number | null
  }

  export type URICountAggregateOutputType = {
    id: number
    guid: number
    uri: number
    productVariantId: number
    _all: number
  }


  export type URIAvgAggregateInputType = {
    id?: true
    productVariantId?: true
  }

  export type URISumAggregateInputType = {
    id?: true
    productVariantId?: true
  }

  export type URIMinAggregateInputType = {
    id?: true
    guid?: true
    uri?: true
    productVariantId?: true
  }

  export type URIMaxAggregateInputType = {
    id?: true
    guid?: true
    uri?: true
    productVariantId?: true
  }

  export type URICountAggregateInputType = {
    id?: true
    guid?: true
    uri?: true
    productVariantId?: true
    _all?: true
  }

  export type URIAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which URI to aggregate.
     */
    where?: URIWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of URIS to fetch.
     */
    orderBy?: URIOrderByWithRelationInput | URIOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: URIWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` URIS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` URIS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned URIS
    **/
    _count?: true | URICountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: URIAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: URISumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: URIMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: URIMaxAggregateInputType
  }

  export type GetURIAggregateType<T extends URIAggregateArgs> = {
        [P in keyof T & keyof AggregateURI]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateURI[P]>
      : GetScalarType<T[P], AggregateURI[P]>
  }




  export type URIGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: URIWhereInput
    orderBy?: URIOrderByWithAggregationInput | URIOrderByWithAggregationInput[]
    by: URIScalarFieldEnum[] | URIScalarFieldEnum
    having?: URIScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: URICountAggregateInputType | true
    _avg?: URIAvgAggregateInputType
    _sum?: URISumAggregateInputType
    _min?: URIMinAggregateInputType
    _max?: URIMaxAggregateInputType
  }

  export type URIGroupByOutputType = {
    id: number
    guid: string | null
    uri: string
    productVariantId: number
    _count: URICountAggregateOutputType | null
    _avg: URIAvgAggregateOutputType | null
    _sum: URISumAggregateOutputType | null
    _min: URIMinAggregateOutputType | null
    _max: URIMaxAggregateOutputType | null
  }

  type GetURIGroupByPayload<T extends URIGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<URIGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof URIGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], URIGroupByOutputType[P]>
            : GetScalarType<T[P], URIGroupByOutputType[P]>
        }
      >
    >


  export type URISelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guid?: boolean
    uri?: boolean
    productVariantId?: boolean
    productVariant?: boolean | ProductVariantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["uRI"]>

  export type URISelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guid?: boolean
    uri?: boolean
    productVariantId?: boolean
    productVariant?: boolean | ProductVariantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["uRI"]>

  export type URISelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guid?: boolean
    uri?: boolean
    productVariantId?: boolean
    productVariant?: boolean | ProductVariantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["uRI"]>

  export type URISelectScalar = {
    id?: boolean
    guid?: boolean
    uri?: boolean
    productVariantId?: boolean
  }

  export type URIOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "guid" | "uri" | "productVariantId", ExtArgs["result"]["uRI"]>
  export type URIInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productVariant?: boolean | ProductVariantDefaultArgs<ExtArgs>
  }
  export type URIIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productVariant?: boolean | ProductVariantDefaultArgs<ExtArgs>
  }
  export type URIIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productVariant?: boolean | ProductVariantDefaultArgs<ExtArgs>
  }

  export type $URIPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "URI"
    objects: {
      productVariant: Prisma.$ProductVariantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      guid: string | null
      uri: string
      productVariantId: number
    }, ExtArgs["result"]["uRI"]>
    composites: {}
  }

  type URIGetPayload<S extends boolean | null | undefined | URIDefaultArgs> = $Result.GetResult<Prisma.$URIPayload, S>

  type URICountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<URIFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: URICountAggregateInputType | true
    }

  export interface URIDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['URI'], meta: { name: 'URI' } }
    /**
     * Find zero or one URI that matches the filter.
     * @param {URIFindUniqueArgs} args - Arguments to find a URI
     * @example
     * // Get one URI
     * const uRI = await prisma.uRI.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends URIFindUniqueArgs>(args: SelectSubset<T, URIFindUniqueArgs<ExtArgs>>): Prisma__URIClient<$Result.GetResult<Prisma.$URIPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one URI that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {URIFindUniqueOrThrowArgs} args - Arguments to find a URI
     * @example
     * // Get one URI
     * const uRI = await prisma.uRI.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends URIFindUniqueOrThrowArgs>(args: SelectSubset<T, URIFindUniqueOrThrowArgs<ExtArgs>>): Prisma__URIClient<$Result.GetResult<Prisma.$URIPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first URI that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {URIFindFirstArgs} args - Arguments to find a URI
     * @example
     * // Get one URI
     * const uRI = await prisma.uRI.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends URIFindFirstArgs>(args?: SelectSubset<T, URIFindFirstArgs<ExtArgs>>): Prisma__URIClient<$Result.GetResult<Prisma.$URIPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first URI that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {URIFindFirstOrThrowArgs} args - Arguments to find a URI
     * @example
     * // Get one URI
     * const uRI = await prisma.uRI.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends URIFindFirstOrThrowArgs>(args?: SelectSubset<T, URIFindFirstOrThrowArgs<ExtArgs>>): Prisma__URIClient<$Result.GetResult<Prisma.$URIPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more URIS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {URIFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all URIS
     * const uRIS = await prisma.uRI.findMany()
     * 
     * // Get first 10 URIS
     * const uRIS = await prisma.uRI.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const uRIWithIdOnly = await prisma.uRI.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends URIFindManyArgs>(args?: SelectSubset<T, URIFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$URIPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a URI.
     * @param {URICreateArgs} args - Arguments to create a URI.
     * @example
     * // Create one URI
     * const URI = await prisma.uRI.create({
     *   data: {
     *     // ... data to create a URI
     *   }
     * })
     * 
     */
    create<T extends URICreateArgs>(args: SelectSubset<T, URICreateArgs<ExtArgs>>): Prisma__URIClient<$Result.GetResult<Prisma.$URIPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many URIS.
     * @param {URICreateManyArgs} args - Arguments to create many URIS.
     * @example
     * // Create many URIS
     * const uRI = await prisma.uRI.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends URICreateManyArgs>(args?: SelectSubset<T, URICreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many URIS and returns the data saved in the database.
     * @param {URICreateManyAndReturnArgs} args - Arguments to create many URIS.
     * @example
     * // Create many URIS
     * const uRI = await prisma.uRI.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many URIS and only return the `id`
     * const uRIWithIdOnly = await prisma.uRI.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends URICreateManyAndReturnArgs>(args?: SelectSubset<T, URICreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$URIPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a URI.
     * @param {URIDeleteArgs} args - Arguments to delete one URI.
     * @example
     * // Delete one URI
     * const URI = await prisma.uRI.delete({
     *   where: {
     *     // ... filter to delete one URI
     *   }
     * })
     * 
     */
    delete<T extends URIDeleteArgs>(args: SelectSubset<T, URIDeleteArgs<ExtArgs>>): Prisma__URIClient<$Result.GetResult<Prisma.$URIPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one URI.
     * @param {URIUpdateArgs} args - Arguments to update one URI.
     * @example
     * // Update one URI
     * const uRI = await prisma.uRI.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends URIUpdateArgs>(args: SelectSubset<T, URIUpdateArgs<ExtArgs>>): Prisma__URIClient<$Result.GetResult<Prisma.$URIPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more URIS.
     * @param {URIDeleteManyArgs} args - Arguments to filter URIS to delete.
     * @example
     * // Delete a few URIS
     * const { count } = await prisma.uRI.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends URIDeleteManyArgs>(args?: SelectSubset<T, URIDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more URIS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {URIUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many URIS
     * const uRI = await prisma.uRI.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends URIUpdateManyArgs>(args: SelectSubset<T, URIUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more URIS and returns the data updated in the database.
     * @param {URIUpdateManyAndReturnArgs} args - Arguments to update many URIS.
     * @example
     * // Update many URIS
     * const uRI = await prisma.uRI.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more URIS and only return the `id`
     * const uRIWithIdOnly = await prisma.uRI.updateManyAndReturn({
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
    updateManyAndReturn<T extends URIUpdateManyAndReturnArgs>(args: SelectSubset<T, URIUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$URIPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one URI.
     * @param {URIUpsertArgs} args - Arguments to update or create a URI.
     * @example
     * // Update or create a URI
     * const uRI = await prisma.uRI.upsert({
     *   create: {
     *     // ... data to create a URI
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the URI we want to update
     *   }
     * })
     */
    upsert<T extends URIUpsertArgs>(args: SelectSubset<T, URIUpsertArgs<ExtArgs>>): Prisma__URIClient<$Result.GetResult<Prisma.$URIPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of URIS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {URICountArgs} args - Arguments to filter URIS to count.
     * @example
     * // Count the number of URIS
     * const count = await prisma.uRI.count({
     *   where: {
     *     // ... the filter for the URIS we want to count
     *   }
     * })
    **/
    count<T extends URICountArgs>(
      args?: Subset<T, URICountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], URICountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a URI.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {URIAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends URIAggregateArgs>(args: Subset<T, URIAggregateArgs>): Prisma.PrismaPromise<GetURIAggregateType<T>>

    /**
     * Group by URI.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {URIGroupByArgs} args - Group by arguments.
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
      T extends URIGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: URIGroupByArgs['orderBy'] }
        : { orderBy?: URIGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, URIGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetURIGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the URI model
   */
  readonly fields: URIFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for URI.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__URIClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    productVariant<T extends ProductVariantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductVariantDefaultArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the URI model
   */
  interface URIFieldRefs {
    readonly id: FieldRef<"URI", 'Int'>
    readonly guid: FieldRef<"URI", 'String'>
    readonly uri: FieldRef<"URI", 'String'>
    readonly productVariantId: FieldRef<"URI", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * URI findUnique
   */
  export type URIFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the URI
     */
    select?: URISelect<ExtArgs> | null
    /**
     * Omit specific fields from the URI
     */
    omit?: URIOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: URIInclude<ExtArgs> | null
    /**
     * Filter, which URI to fetch.
     */
    where: URIWhereUniqueInput
  }

  /**
   * URI findUniqueOrThrow
   */
  export type URIFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the URI
     */
    select?: URISelect<ExtArgs> | null
    /**
     * Omit specific fields from the URI
     */
    omit?: URIOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: URIInclude<ExtArgs> | null
    /**
     * Filter, which URI to fetch.
     */
    where: URIWhereUniqueInput
  }

  /**
   * URI findFirst
   */
  export type URIFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the URI
     */
    select?: URISelect<ExtArgs> | null
    /**
     * Omit specific fields from the URI
     */
    omit?: URIOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: URIInclude<ExtArgs> | null
    /**
     * Filter, which URI to fetch.
     */
    where?: URIWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of URIS to fetch.
     */
    orderBy?: URIOrderByWithRelationInput | URIOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for URIS.
     */
    cursor?: URIWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` URIS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` URIS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of URIS.
     */
    distinct?: URIScalarFieldEnum | URIScalarFieldEnum[]
  }

  /**
   * URI findFirstOrThrow
   */
  export type URIFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the URI
     */
    select?: URISelect<ExtArgs> | null
    /**
     * Omit specific fields from the URI
     */
    omit?: URIOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: URIInclude<ExtArgs> | null
    /**
     * Filter, which URI to fetch.
     */
    where?: URIWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of URIS to fetch.
     */
    orderBy?: URIOrderByWithRelationInput | URIOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for URIS.
     */
    cursor?: URIWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` URIS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` URIS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of URIS.
     */
    distinct?: URIScalarFieldEnum | URIScalarFieldEnum[]
  }

  /**
   * URI findMany
   */
  export type URIFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the URI
     */
    select?: URISelect<ExtArgs> | null
    /**
     * Omit specific fields from the URI
     */
    omit?: URIOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: URIInclude<ExtArgs> | null
    /**
     * Filter, which URIS to fetch.
     */
    where?: URIWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of URIS to fetch.
     */
    orderBy?: URIOrderByWithRelationInput | URIOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing URIS.
     */
    cursor?: URIWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` URIS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` URIS.
     */
    skip?: number
    distinct?: URIScalarFieldEnum | URIScalarFieldEnum[]
  }

  /**
   * URI create
   */
  export type URICreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the URI
     */
    select?: URISelect<ExtArgs> | null
    /**
     * Omit specific fields from the URI
     */
    omit?: URIOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: URIInclude<ExtArgs> | null
    /**
     * The data needed to create a URI.
     */
    data: XOR<URICreateInput, URIUncheckedCreateInput>
  }

  /**
   * URI createMany
   */
  export type URICreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many URIS.
     */
    data: URICreateManyInput | URICreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * URI createManyAndReturn
   */
  export type URICreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the URI
     */
    select?: URISelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the URI
     */
    omit?: URIOmit<ExtArgs> | null
    /**
     * The data used to create many URIS.
     */
    data: URICreateManyInput | URICreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: URIIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * URI update
   */
  export type URIUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the URI
     */
    select?: URISelect<ExtArgs> | null
    /**
     * Omit specific fields from the URI
     */
    omit?: URIOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: URIInclude<ExtArgs> | null
    /**
     * The data needed to update a URI.
     */
    data: XOR<URIUpdateInput, URIUncheckedUpdateInput>
    /**
     * Choose, which URI to update.
     */
    where: URIWhereUniqueInput
  }

  /**
   * URI updateMany
   */
  export type URIUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update URIS.
     */
    data: XOR<URIUpdateManyMutationInput, URIUncheckedUpdateManyInput>
    /**
     * Filter which URIS to update
     */
    where?: URIWhereInput
    /**
     * Limit how many URIS to update.
     */
    limit?: number
  }

  /**
   * URI updateManyAndReturn
   */
  export type URIUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the URI
     */
    select?: URISelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the URI
     */
    omit?: URIOmit<ExtArgs> | null
    /**
     * The data used to update URIS.
     */
    data: XOR<URIUpdateManyMutationInput, URIUncheckedUpdateManyInput>
    /**
     * Filter which URIS to update
     */
    where?: URIWhereInput
    /**
     * Limit how many URIS to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: URIIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * URI upsert
   */
  export type URIUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the URI
     */
    select?: URISelect<ExtArgs> | null
    /**
     * Omit specific fields from the URI
     */
    omit?: URIOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: URIInclude<ExtArgs> | null
    /**
     * The filter to search for the URI to update in case it exists.
     */
    where: URIWhereUniqueInput
    /**
     * In case the URI found by the `where` argument doesn't exist, create a new URI with this data.
     */
    create: XOR<URICreateInput, URIUncheckedCreateInput>
    /**
     * In case the URI was found with the provided `where` argument, update it with this data.
     */
    update: XOR<URIUpdateInput, URIUncheckedUpdateInput>
  }

  /**
   * URI delete
   */
  export type URIDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the URI
     */
    select?: URISelect<ExtArgs> | null
    /**
     * Omit specific fields from the URI
     */
    omit?: URIOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: URIInclude<ExtArgs> | null
    /**
     * Filter which URI to delete.
     */
    where: URIWhereUniqueInput
  }

  /**
   * URI deleteMany
   */
  export type URIDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which URIS to delete
     */
    where?: URIWhereInput
    /**
     * Limit how many URIS to delete.
     */
    limit?: number
  }

  /**
   * URI without action
   */
  export type URIDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the URI
     */
    select?: URISelect<ExtArgs> | null
    /**
     * Omit specific fields from the URI
     */
    omit?: URIOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: URIInclude<ExtArgs> | null
  }


  /**
   * Model Stocktake
   */

  export type AggregateStocktake = {
    _count: StocktakeCountAggregateOutputType | null
    _avg: StocktakeAvgAggregateOutputType | null
    _sum: StocktakeSumAggregateOutputType | null
    _min: StocktakeMinAggregateOutputType | null
    _max: StocktakeMaxAggregateOutputType | null
  }

  export type StocktakeAvgAggregateOutputType = {
    id: number | null
  }

  export type StocktakeSumAggregateOutputType = {
    id: number | null
  }

  export type StocktakeMinAggregateOutputType = {
    id: number | null
    guid: string | null
    location: string | null
    applied: boolean | null
  }

  export type StocktakeMaxAggregateOutputType = {
    id: number | null
    guid: string | null
    location: string | null
    applied: boolean | null
  }

  export type StocktakeCountAggregateOutputType = {
    id: number
    guid: number
    location: number
    applied: number
    _all: number
  }


  export type StocktakeAvgAggregateInputType = {
    id?: true
  }

  export type StocktakeSumAggregateInputType = {
    id?: true
  }

  export type StocktakeMinAggregateInputType = {
    id?: true
    guid?: true
    location?: true
    applied?: true
  }

  export type StocktakeMaxAggregateInputType = {
    id?: true
    guid?: true
    location?: true
    applied?: true
  }

  export type StocktakeCountAggregateInputType = {
    id?: true
    guid?: true
    location?: true
    applied?: true
    _all?: true
  }

  export type StocktakeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stocktake to aggregate.
     */
    where?: StocktakeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stocktakes to fetch.
     */
    orderBy?: StocktakeOrderByWithRelationInput | StocktakeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StocktakeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stocktakes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stocktakes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stocktakes
    **/
    _count?: true | StocktakeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StocktakeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StocktakeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StocktakeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StocktakeMaxAggregateInputType
  }

  export type GetStocktakeAggregateType<T extends StocktakeAggregateArgs> = {
        [P in keyof T & keyof AggregateStocktake]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStocktake[P]>
      : GetScalarType<T[P], AggregateStocktake[P]>
  }




  export type StocktakeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StocktakeWhereInput
    orderBy?: StocktakeOrderByWithAggregationInput | StocktakeOrderByWithAggregationInput[]
    by: StocktakeScalarFieldEnum[] | StocktakeScalarFieldEnum
    having?: StocktakeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StocktakeCountAggregateInputType | true
    _avg?: StocktakeAvgAggregateInputType
    _sum?: StocktakeSumAggregateInputType
    _min?: StocktakeMinAggregateInputType
    _max?: StocktakeMaxAggregateInputType
  }

  export type StocktakeGroupByOutputType = {
    id: number
    guid: string | null
    location: string
    applied: boolean
    _count: StocktakeCountAggregateOutputType | null
    _avg: StocktakeAvgAggregateOutputType | null
    _sum: StocktakeSumAggregateOutputType | null
    _min: StocktakeMinAggregateOutputType | null
    _max: StocktakeMaxAggregateOutputType | null
  }

  type GetStocktakeGroupByPayload<T extends StocktakeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StocktakeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StocktakeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StocktakeGroupByOutputType[P]>
            : GetScalarType<T[P], StocktakeGroupByOutputType[P]>
        }
      >
    >


  export type StocktakeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guid?: boolean
    location?: boolean
    applied?: boolean
    lines?: boolean | Stocktake$linesArgs<ExtArgs>
    _count?: boolean | StocktakeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stocktake"]>

  export type StocktakeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guid?: boolean
    location?: boolean
    applied?: boolean
  }, ExtArgs["result"]["stocktake"]>

  export type StocktakeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guid?: boolean
    location?: boolean
    applied?: boolean
  }, ExtArgs["result"]["stocktake"]>

  export type StocktakeSelectScalar = {
    id?: boolean
    guid?: boolean
    location?: boolean
    applied?: boolean
  }

  export type StocktakeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "guid" | "location" | "applied", ExtArgs["result"]["stocktake"]>
  export type StocktakeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lines?: boolean | Stocktake$linesArgs<ExtArgs>
    _count?: boolean | StocktakeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StocktakeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type StocktakeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StocktakePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Stocktake"
    objects: {
      lines: Prisma.$StocktakeLinePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      guid: string | null
      location: string
      applied: boolean
    }, ExtArgs["result"]["stocktake"]>
    composites: {}
  }

  type StocktakeGetPayload<S extends boolean | null | undefined | StocktakeDefaultArgs> = $Result.GetResult<Prisma.$StocktakePayload, S>

  type StocktakeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StocktakeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StocktakeCountAggregateInputType | true
    }

  export interface StocktakeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Stocktake'], meta: { name: 'Stocktake' } }
    /**
     * Find zero or one Stocktake that matches the filter.
     * @param {StocktakeFindUniqueArgs} args - Arguments to find a Stocktake
     * @example
     * // Get one Stocktake
     * const stocktake = await prisma.stocktake.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StocktakeFindUniqueArgs>(args: SelectSubset<T, StocktakeFindUniqueArgs<ExtArgs>>): Prisma__StocktakeClient<$Result.GetResult<Prisma.$StocktakePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Stocktake that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StocktakeFindUniqueOrThrowArgs} args - Arguments to find a Stocktake
     * @example
     * // Get one Stocktake
     * const stocktake = await prisma.stocktake.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StocktakeFindUniqueOrThrowArgs>(args: SelectSubset<T, StocktakeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StocktakeClient<$Result.GetResult<Prisma.$StocktakePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stocktake that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StocktakeFindFirstArgs} args - Arguments to find a Stocktake
     * @example
     * // Get one Stocktake
     * const stocktake = await prisma.stocktake.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StocktakeFindFirstArgs>(args?: SelectSubset<T, StocktakeFindFirstArgs<ExtArgs>>): Prisma__StocktakeClient<$Result.GetResult<Prisma.$StocktakePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stocktake that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StocktakeFindFirstOrThrowArgs} args - Arguments to find a Stocktake
     * @example
     * // Get one Stocktake
     * const stocktake = await prisma.stocktake.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StocktakeFindFirstOrThrowArgs>(args?: SelectSubset<T, StocktakeFindFirstOrThrowArgs<ExtArgs>>): Prisma__StocktakeClient<$Result.GetResult<Prisma.$StocktakePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stocktakes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StocktakeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stocktakes
     * const stocktakes = await prisma.stocktake.findMany()
     * 
     * // Get first 10 Stocktakes
     * const stocktakes = await prisma.stocktake.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stocktakeWithIdOnly = await prisma.stocktake.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StocktakeFindManyArgs>(args?: SelectSubset<T, StocktakeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StocktakePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Stocktake.
     * @param {StocktakeCreateArgs} args - Arguments to create a Stocktake.
     * @example
     * // Create one Stocktake
     * const Stocktake = await prisma.stocktake.create({
     *   data: {
     *     // ... data to create a Stocktake
     *   }
     * })
     * 
     */
    create<T extends StocktakeCreateArgs>(args: SelectSubset<T, StocktakeCreateArgs<ExtArgs>>): Prisma__StocktakeClient<$Result.GetResult<Prisma.$StocktakePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stocktakes.
     * @param {StocktakeCreateManyArgs} args - Arguments to create many Stocktakes.
     * @example
     * // Create many Stocktakes
     * const stocktake = await prisma.stocktake.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StocktakeCreateManyArgs>(args?: SelectSubset<T, StocktakeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stocktakes and returns the data saved in the database.
     * @param {StocktakeCreateManyAndReturnArgs} args - Arguments to create many Stocktakes.
     * @example
     * // Create many Stocktakes
     * const stocktake = await prisma.stocktake.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stocktakes and only return the `id`
     * const stocktakeWithIdOnly = await prisma.stocktake.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StocktakeCreateManyAndReturnArgs>(args?: SelectSubset<T, StocktakeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StocktakePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Stocktake.
     * @param {StocktakeDeleteArgs} args - Arguments to delete one Stocktake.
     * @example
     * // Delete one Stocktake
     * const Stocktake = await prisma.stocktake.delete({
     *   where: {
     *     // ... filter to delete one Stocktake
     *   }
     * })
     * 
     */
    delete<T extends StocktakeDeleteArgs>(args: SelectSubset<T, StocktakeDeleteArgs<ExtArgs>>): Prisma__StocktakeClient<$Result.GetResult<Prisma.$StocktakePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Stocktake.
     * @param {StocktakeUpdateArgs} args - Arguments to update one Stocktake.
     * @example
     * // Update one Stocktake
     * const stocktake = await prisma.stocktake.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StocktakeUpdateArgs>(args: SelectSubset<T, StocktakeUpdateArgs<ExtArgs>>): Prisma__StocktakeClient<$Result.GetResult<Prisma.$StocktakePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stocktakes.
     * @param {StocktakeDeleteManyArgs} args - Arguments to filter Stocktakes to delete.
     * @example
     * // Delete a few Stocktakes
     * const { count } = await prisma.stocktake.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StocktakeDeleteManyArgs>(args?: SelectSubset<T, StocktakeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stocktakes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StocktakeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stocktakes
     * const stocktake = await prisma.stocktake.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StocktakeUpdateManyArgs>(args: SelectSubset<T, StocktakeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stocktakes and returns the data updated in the database.
     * @param {StocktakeUpdateManyAndReturnArgs} args - Arguments to update many Stocktakes.
     * @example
     * // Update many Stocktakes
     * const stocktake = await prisma.stocktake.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stocktakes and only return the `id`
     * const stocktakeWithIdOnly = await prisma.stocktake.updateManyAndReturn({
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
    updateManyAndReturn<T extends StocktakeUpdateManyAndReturnArgs>(args: SelectSubset<T, StocktakeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StocktakePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Stocktake.
     * @param {StocktakeUpsertArgs} args - Arguments to update or create a Stocktake.
     * @example
     * // Update or create a Stocktake
     * const stocktake = await prisma.stocktake.upsert({
     *   create: {
     *     // ... data to create a Stocktake
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stocktake we want to update
     *   }
     * })
     */
    upsert<T extends StocktakeUpsertArgs>(args: SelectSubset<T, StocktakeUpsertArgs<ExtArgs>>): Prisma__StocktakeClient<$Result.GetResult<Prisma.$StocktakePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stocktakes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StocktakeCountArgs} args - Arguments to filter Stocktakes to count.
     * @example
     * // Count the number of Stocktakes
     * const count = await prisma.stocktake.count({
     *   where: {
     *     // ... the filter for the Stocktakes we want to count
     *   }
     * })
    **/
    count<T extends StocktakeCountArgs>(
      args?: Subset<T, StocktakeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StocktakeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stocktake.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StocktakeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StocktakeAggregateArgs>(args: Subset<T, StocktakeAggregateArgs>): Prisma.PrismaPromise<GetStocktakeAggregateType<T>>

    /**
     * Group by Stocktake.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StocktakeGroupByArgs} args - Group by arguments.
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
      T extends StocktakeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StocktakeGroupByArgs['orderBy'] }
        : { orderBy?: StocktakeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StocktakeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStocktakeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Stocktake model
   */
  readonly fields: StocktakeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Stocktake.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StocktakeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lines<T extends Stocktake$linesArgs<ExtArgs> = {}>(args?: Subset<T, Stocktake$linesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StocktakeLinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Stocktake model
   */
  interface StocktakeFieldRefs {
    readonly id: FieldRef<"Stocktake", 'Int'>
    readonly guid: FieldRef<"Stocktake", 'String'>
    readonly location: FieldRef<"Stocktake", 'String'>
    readonly applied: FieldRef<"Stocktake", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Stocktake findUnique
   */
  export type StocktakeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stocktake
     */
    select?: StocktakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stocktake
     */
    omit?: StocktakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StocktakeInclude<ExtArgs> | null
    /**
     * Filter, which Stocktake to fetch.
     */
    where: StocktakeWhereUniqueInput
  }

  /**
   * Stocktake findUniqueOrThrow
   */
  export type StocktakeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stocktake
     */
    select?: StocktakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stocktake
     */
    omit?: StocktakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StocktakeInclude<ExtArgs> | null
    /**
     * Filter, which Stocktake to fetch.
     */
    where: StocktakeWhereUniqueInput
  }

  /**
   * Stocktake findFirst
   */
  export type StocktakeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stocktake
     */
    select?: StocktakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stocktake
     */
    omit?: StocktakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StocktakeInclude<ExtArgs> | null
    /**
     * Filter, which Stocktake to fetch.
     */
    where?: StocktakeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stocktakes to fetch.
     */
    orderBy?: StocktakeOrderByWithRelationInput | StocktakeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stocktakes.
     */
    cursor?: StocktakeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stocktakes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stocktakes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stocktakes.
     */
    distinct?: StocktakeScalarFieldEnum | StocktakeScalarFieldEnum[]
  }

  /**
   * Stocktake findFirstOrThrow
   */
  export type StocktakeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stocktake
     */
    select?: StocktakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stocktake
     */
    omit?: StocktakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StocktakeInclude<ExtArgs> | null
    /**
     * Filter, which Stocktake to fetch.
     */
    where?: StocktakeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stocktakes to fetch.
     */
    orderBy?: StocktakeOrderByWithRelationInput | StocktakeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stocktakes.
     */
    cursor?: StocktakeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stocktakes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stocktakes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stocktakes.
     */
    distinct?: StocktakeScalarFieldEnum | StocktakeScalarFieldEnum[]
  }

  /**
   * Stocktake findMany
   */
  export type StocktakeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stocktake
     */
    select?: StocktakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stocktake
     */
    omit?: StocktakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StocktakeInclude<ExtArgs> | null
    /**
     * Filter, which Stocktakes to fetch.
     */
    where?: StocktakeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stocktakes to fetch.
     */
    orderBy?: StocktakeOrderByWithRelationInput | StocktakeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stocktakes.
     */
    cursor?: StocktakeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stocktakes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stocktakes.
     */
    skip?: number
    distinct?: StocktakeScalarFieldEnum | StocktakeScalarFieldEnum[]
  }

  /**
   * Stocktake create
   */
  export type StocktakeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stocktake
     */
    select?: StocktakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stocktake
     */
    omit?: StocktakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StocktakeInclude<ExtArgs> | null
    /**
     * The data needed to create a Stocktake.
     */
    data: XOR<StocktakeCreateInput, StocktakeUncheckedCreateInput>
  }

  /**
   * Stocktake createMany
   */
  export type StocktakeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stocktakes.
     */
    data: StocktakeCreateManyInput | StocktakeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Stocktake createManyAndReturn
   */
  export type StocktakeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stocktake
     */
    select?: StocktakeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Stocktake
     */
    omit?: StocktakeOmit<ExtArgs> | null
    /**
     * The data used to create many Stocktakes.
     */
    data: StocktakeCreateManyInput | StocktakeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Stocktake update
   */
  export type StocktakeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stocktake
     */
    select?: StocktakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stocktake
     */
    omit?: StocktakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StocktakeInclude<ExtArgs> | null
    /**
     * The data needed to update a Stocktake.
     */
    data: XOR<StocktakeUpdateInput, StocktakeUncheckedUpdateInput>
    /**
     * Choose, which Stocktake to update.
     */
    where: StocktakeWhereUniqueInput
  }

  /**
   * Stocktake updateMany
   */
  export type StocktakeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stocktakes.
     */
    data: XOR<StocktakeUpdateManyMutationInput, StocktakeUncheckedUpdateManyInput>
    /**
     * Filter which Stocktakes to update
     */
    where?: StocktakeWhereInput
    /**
     * Limit how many Stocktakes to update.
     */
    limit?: number
  }

  /**
   * Stocktake updateManyAndReturn
   */
  export type StocktakeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stocktake
     */
    select?: StocktakeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Stocktake
     */
    omit?: StocktakeOmit<ExtArgs> | null
    /**
     * The data used to update Stocktakes.
     */
    data: XOR<StocktakeUpdateManyMutationInput, StocktakeUncheckedUpdateManyInput>
    /**
     * Filter which Stocktakes to update
     */
    where?: StocktakeWhereInput
    /**
     * Limit how many Stocktakes to update.
     */
    limit?: number
  }

  /**
   * Stocktake upsert
   */
  export type StocktakeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stocktake
     */
    select?: StocktakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stocktake
     */
    omit?: StocktakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StocktakeInclude<ExtArgs> | null
    /**
     * The filter to search for the Stocktake to update in case it exists.
     */
    where: StocktakeWhereUniqueInput
    /**
     * In case the Stocktake found by the `where` argument doesn't exist, create a new Stocktake with this data.
     */
    create: XOR<StocktakeCreateInput, StocktakeUncheckedCreateInput>
    /**
     * In case the Stocktake was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StocktakeUpdateInput, StocktakeUncheckedUpdateInput>
  }

  /**
   * Stocktake delete
   */
  export type StocktakeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stocktake
     */
    select?: StocktakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stocktake
     */
    omit?: StocktakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StocktakeInclude<ExtArgs> | null
    /**
     * Filter which Stocktake to delete.
     */
    where: StocktakeWhereUniqueInput
  }

  /**
   * Stocktake deleteMany
   */
  export type StocktakeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stocktakes to delete
     */
    where?: StocktakeWhereInput
    /**
     * Limit how many Stocktakes to delete.
     */
    limit?: number
  }

  /**
   * Stocktake.lines
   */
  export type Stocktake$linesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StocktakeLine
     */
    select?: StocktakeLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StocktakeLine
     */
    omit?: StocktakeLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StocktakeLineInclude<ExtArgs> | null
    where?: StocktakeLineWhereInput
    orderBy?: StocktakeLineOrderByWithRelationInput | StocktakeLineOrderByWithRelationInput[]
    cursor?: StocktakeLineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StocktakeLineScalarFieldEnum | StocktakeLineScalarFieldEnum[]
  }

  /**
   * Stocktake without action
   */
  export type StocktakeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stocktake
     */
    select?: StocktakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stocktake
     */
    omit?: StocktakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StocktakeInclude<ExtArgs> | null
  }


  /**
   * Model StocktakeLine
   */

  export type AggregateStocktakeLine = {
    _count: StocktakeLineCountAggregateOutputType | null
    _avg: StocktakeLineAvgAggregateOutputType | null
    _sum: StocktakeLineSumAggregateOutputType | null
    _min: StocktakeLineMinAggregateOutputType | null
    _max: StocktakeLineMaxAggregateOutputType | null
  }

  export type StocktakeLineAvgAggregateOutputType = {
    id: number | null
    count: number | null
    stockTakeId: number | null
    productVariantId: number | null
  }

  export type StocktakeLineSumAggregateOutputType = {
    id: number | null
    count: number | null
    stockTakeId: number | null
    productVariantId: number | null
  }

  export type StocktakeLineMinAggregateOutputType = {
    id: number | null
    guid: string | null
    count: number | null
    stockTakeId: number | null
    productVariantId: number | null
  }

  export type StocktakeLineMaxAggregateOutputType = {
    id: number | null
    guid: string | null
    count: number | null
    stockTakeId: number | null
    productVariantId: number | null
  }

  export type StocktakeLineCountAggregateOutputType = {
    id: number
    guid: number
    count: number
    stockTakeId: number
    productVariantId: number
    _all: number
  }


  export type StocktakeLineAvgAggregateInputType = {
    id?: true
    count?: true
    stockTakeId?: true
    productVariantId?: true
  }

  export type StocktakeLineSumAggregateInputType = {
    id?: true
    count?: true
    stockTakeId?: true
    productVariantId?: true
  }

  export type StocktakeLineMinAggregateInputType = {
    id?: true
    guid?: true
    count?: true
    stockTakeId?: true
    productVariantId?: true
  }

  export type StocktakeLineMaxAggregateInputType = {
    id?: true
    guid?: true
    count?: true
    stockTakeId?: true
    productVariantId?: true
  }

  export type StocktakeLineCountAggregateInputType = {
    id?: true
    guid?: true
    count?: true
    stockTakeId?: true
    productVariantId?: true
    _all?: true
  }

  export type StocktakeLineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StocktakeLine to aggregate.
     */
    where?: StocktakeLineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StocktakeLines to fetch.
     */
    orderBy?: StocktakeLineOrderByWithRelationInput | StocktakeLineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StocktakeLineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StocktakeLines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StocktakeLines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StocktakeLines
    **/
    _count?: true | StocktakeLineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StocktakeLineAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StocktakeLineSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StocktakeLineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StocktakeLineMaxAggregateInputType
  }

  export type GetStocktakeLineAggregateType<T extends StocktakeLineAggregateArgs> = {
        [P in keyof T & keyof AggregateStocktakeLine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStocktakeLine[P]>
      : GetScalarType<T[P], AggregateStocktakeLine[P]>
  }




  export type StocktakeLineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StocktakeLineWhereInput
    orderBy?: StocktakeLineOrderByWithAggregationInput | StocktakeLineOrderByWithAggregationInput[]
    by: StocktakeLineScalarFieldEnum[] | StocktakeLineScalarFieldEnum
    having?: StocktakeLineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StocktakeLineCountAggregateInputType | true
    _avg?: StocktakeLineAvgAggregateInputType
    _sum?: StocktakeLineSumAggregateInputType
    _min?: StocktakeLineMinAggregateInputType
    _max?: StocktakeLineMaxAggregateInputType
  }

  export type StocktakeLineGroupByOutputType = {
    id: number
    guid: string | null
    count: number
    stockTakeId: number | null
    productVariantId: number
    _count: StocktakeLineCountAggregateOutputType | null
    _avg: StocktakeLineAvgAggregateOutputType | null
    _sum: StocktakeLineSumAggregateOutputType | null
    _min: StocktakeLineMinAggregateOutputType | null
    _max: StocktakeLineMaxAggregateOutputType | null
  }

  type GetStocktakeLineGroupByPayload<T extends StocktakeLineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StocktakeLineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StocktakeLineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StocktakeLineGroupByOutputType[P]>
            : GetScalarType<T[P], StocktakeLineGroupByOutputType[P]>
        }
      >
    >


  export type StocktakeLineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guid?: boolean
    count?: boolean
    stockTakeId?: boolean
    productVariantId?: boolean
    variant?: boolean | ProductVariantDefaultArgs<ExtArgs>
    StockTake?: boolean | StocktakeLine$StockTakeArgs<ExtArgs>
  }, ExtArgs["result"]["stocktakeLine"]>

  export type StocktakeLineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guid?: boolean
    count?: boolean
    stockTakeId?: boolean
    productVariantId?: boolean
    variant?: boolean | ProductVariantDefaultArgs<ExtArgs>
    StockTake?: boolean | StocktakeLine$StockTakeArgs<ExtArgs>
  }, ExtArgs["result"]["stocktakeLine"]>

  export type StocktakeLineSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guid?: boolean
    count?: boolean
    stockTakeId?: boolean
    productVariantId?: boolean
    variant?: boolean | ProductVariantDefaultArgs<ExtArgs>
    StockTake?: boolean | StocktakeLine$StockTakeArgs<ExtArgs>
  }, ExtArgs["result"]["stocktakeLine"]>

  export type StocktakeLineSelectScalar = {
    id?: boolean
    guid?: boolean
    count?: boolean
    stockTakeId?: boolean
    productVariantId?: boolean
  }

  export type StocktakeLineOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "guid" | "count" | "stockTakeId" | "productVariantId", ExtArgs["result"]["stocktakeLine"]>
  export type StocktakeLineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variant?: boolean | ProductVariantDefaultArgs<ExtArgs>
    StockTake?: boolean | StocktakeLine$StockTakeArgs<ExtArgs>
  }
  export type StocktakeLineIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variant?: boolean | ProductVariantDefaultArgs<ExtArgs>
    StockTake?: boolean | StocktakeLine$StockTakeArgs<ExtArgs>
  }
  export type StocktakeLineIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variant?: boolean | ProductVariantDefaultArgs<ExtArgs>
    StockTake?: boolean | StocktakeLine$StockTakeArgs<ExtArgs>
  }

  export type $StocktakeLinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StocktakeLine"
    objects: {
      variant: Prisma.$ProductVariantPayload<ExtArgs>
      StockTake: Prisma.$StocktakePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      guid: string | null
      count: number
      stockTakeId: number | null
      productVariantId: number
    }, ExtArgs["result"]["stocktakeLine"]>
    composites: {}
  }

  type StocktakeLineGetPayload<S extends boolean | null | undefined | StocktakeLineDefaultArgs> = $Result.GetResult<Prisma.$StocktakeLinePayload, S>

  type StocktakeLineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StocktakeLineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StocktakeLineCountAggregateInputType | true
    }

  export interface StocktakeLineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StocktakeLine'], meta: { name: 'StocktakeLine' } }
    /**
     * Find zero or one StocktakeLine that matches the filter.
     * @param {StocktakeLineFindUniqueArgs} args - Arguments to find a StocktakeLine
     * @example
     * // Get one StocktakeLine
     * const stocktakeLine = await prisma.stocktakeLine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StocktakeLineFindUniqueArgs>(args: SelectSubset<T, StocktakeLineFindUniqueArgs<ExtArgs>>): Prisma__StocktakeLineClient<$Result.GetResult<Prisma.$StocktakeLinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StocktakeLine that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StocktakeLineFindUniqueOrThrowArgs} args - Arguments to find a StocktakeLine
     * @example
     * // Get one StocktakeLine
     * const stocktakeLine = await prisma.stocktakeLine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StocktakeLineFindUniqueOrThrowArgs>(args: SelectSubset<T, StocktakeLineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StocktakeLineClient<$Result.GetResult<Prisma.$StocktakeLinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StocktakeLine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StocktakeLineFindFirstArgs} args - Arguments to find a StocktakeLine
     * @example
     * // Get one StocktakeLine
     * const stocktakeLine = await prisma.stocktakeLine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StocktakeLineFindFirstArgs>(args?: SelectSubset<T, StocktakeLineFindFirstArgs<ExtArgs>>): Prisma__StocktakeLineClient<$Result.GetResult<Prisma.$StocktakeLinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StocktakeLine that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StocktakeLineFindFirstOrThrowArgs} args - Arguments to find a StocktakeLine
     * @example
     * // Get one StocktakeLine
     * const stocktakeLine = await prisma.stocktakeLine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StocktakeLineFindFirstOrThrowArgs>(args?: SelectSubset<T, StocktakeLineFindFirstOrThrowArgs<ExtArgs>>): Prisma__StocktakeLineClient<$Result.GetResult<Prisma.$StocktakeLinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StocktakeLines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StocktakeLineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StocktakeLines
     * const stocktakeLines = await prisma.stocktakeLine.findMany()
     * 
     * // Get first 10 StocktakeLines
     * const stocktakeLines = await prisma.stocktakeLine.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stocktakeLineWithIdOnly = await prisma.stocktakeLine.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StocktakeLineFindManyArgs>(args?: SelectSubset<T, StocktakeLineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StocktakeLinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StocktakeLine.
     * @param {StocktakeLineCreateArgs} args - Arguments to create a StocktakeLine.
     * @example
     * // Create one StocktakeLine
     * const StocktakeLine = await prisma.stocktakeLine.create({
     *   data: {
     *     // ... data to create a StocktakeLine
     *   }
     * })
     * 
     */
    create<T extends StocktakeLineCreateArgs>(args: SelectSubset<T, StocktakeLineCreateArgs<ExtArgs>>): Prisma__StocktakeLineClient<$Result.GetResult<Prisma.$StocktakeLinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StocktakeLines.
     * @param {StocktakeLineCreateManyArgs} args - Arguments to create many StocktakeLines.
     * @example
     * // Create many StocktakeLines
     * const stocktakeLine = await prisma.stocktakeLine.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StocktakeLineCreateManyArgs>(args?: SelectSubset<T, StocktakeLineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StocktakeLines and returns the data saved in the database.
     * @param {StocktakeLineCreateManyAndReturnArgs} args - Arguments to create many StocktakeLines.
     * @example
     * // Create many StocktakeLines
     * const stocktakeLine = await prisma.stocktakeLine.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StocktakeLines and only return the `id`
     * const stocktakeLineWithIdOnly = await prisma.stocktakeLine.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StocktakeLineCreateManyAndReturnArgs>(args?: SelectSubset<T, StocktakeLineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StocktakeLinePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StocktakeLine.
     * @param {StocktakeLineDeleteArgs} args - Arguments to delete one StocktakeLine.
     * @example
     * // Delete one StocktakeLine
     * const StocktakeLine = await prisma.stocktakeLine.delete({
     *   where: {
     *     // ... filter to delete one StocktakeLine
     *   }
     * })
     * 
     */
    delete<T extends StocktakeLineDeleteArgs>(args: SelectSubset<T, StocktakeLineDeleteArgs<ExtArgs>>): Prisma__StocktakeLineClient<$Result.GetResult<Prisma.$StocktakeLinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StocktakeLine.
     * @param {StocktakeLineUpdateArgs} args - Arguments to update one StocktakeLine.
     * @example
     * // Update one StocktakeLine
     * const stocktakeLine = await prisma.stocktakeLine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StocktakeLineUpdateArgs>(args: SelectSubset<T, StocktakeLineUpdateArgs<ExtArgs>>): Prisma__StocktakeLineClient<$Result.GetResult<Prisma.$StocktakeLinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StocktakeLines.
     * @param {StocktakeLineDeleteManyArgs} args - Arguments to filter StocktakeLines to delete.
     * @example
     * // Delete a few StocktakeLines
     * const { count } = await prisma.stocktakeLine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StocktakeLineDeleteManyArgs>(args?: SelectSubset<T, StocktakeLineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StocktakeLines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StocktakeLineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StocktakeLines
     * const stocktakeLine = await prisma.stocktakeLine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StocktakeLineUpdateManyArgs>(args: SelectSubset<T, StocktakeLineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StocktakeLines and returns the data updated in the database.
     * @param {StocktakeLineUpdateManyAndReturnArgs} args - Arguments to update many StocktakeLines.
     * @example
     * // Update many StocktakeLines
     * const stocktakeLine = await prisma.stocktakeLine.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StocktakeLines and only return the `id`
     * const stocktakeLineWithIdOnly = await prisma.stocktakeLine.updateManyAndReturn({
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
    updateManyAndReturn<T extends StocktakeLineUpdateManyAndReturnArgs>(args: SelectSubset<T, StocktakeLineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StocktakeLinePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StocktakeLine.
     * @param {StocktakeLineUpsertArgs} args - Arguments to update or create a StocktakeLine.
     * @example
     * // Update or create a StocktakeLine
     * const stocktakeLine = await prisma.stocktakeLine.upsert({
     *   create: {
     *     // ... data to create a StocktakeLine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StocktakeLine we want to update
     *   }
     * })
     */
    upsert<T extends StocktakeLineUpsertArgs>(args: SelectSubset<T, StocktakeLineUpsertArgs<ExtArgs>>): Prisma__StocktakeLineClient<$Result.GetResult<Prisma.$StocktakeLinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StocktakeLines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StocktakeLineCountArgs} args - Arguments to filter StocktakeLines to count.
     * @example
     * // Count the number of StocktakeLines
     * const count = await prisma.stocktakeLine.count({
     *   where: {
     *     // ... the filter for the StocktakeLines we want to count
     *   }
     * })
    **/
    count<T extends StocktakeLineCountArgs>(
      args?: Subset<T, StocktakeLineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StocktakeLineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StocktakeLine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StocktakeLineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StocktakeLineAggregateArgs>(args: Subset<T, StocktakeLineAggregateArgs>): Prisma.PrismaPromise<GetStocktakeLineAggregateType<T>>

    /**
     * Group by StocktakeLine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StocktakeLineGroupByArgs} args - Group by arguments.
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
      T extends StocktakeLineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StocktakeLineGroupByArgs['orderBy'] }
        : { orderBy?: StocktakeLineGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StocktakeLineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStocktakeLineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StocktakeLine model
   */
  readonly fields: StocktakeLineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StocktakeLine.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StocktakeLineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    variant<T extends ProductVariantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductVariantDefaultArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    StockTake<T extends StocktakeLine$StockTakeArgs<ExtArgs> = {}>(args?: Subset<T, StocktakeLine$StockTakeArgs<ExtArgs>>): Prisma__StocktakeClient<$Result.GetResult<Prisma.$StocktakePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the StocktakeLine model
   */
  interface StocktakeLineFieldRefs {
    readonly id: FieldRef<"StocktakeLine", 'Int'>
    readonly guid: FieldRef<"StocktakeLine", 'String'>
    readonly count: FieldRef<"StocktakeLine", 'Int'>
    readonly stockTakeId: FieldRef<"StocktakeLine", 'Int'>
    readonly productVariantId: FieldRef<"StocktakeLine", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * StocktakeLine findUnique
   */
  export type StocktakeLineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StocktakeLine
     */
    select?: StocktakeLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StocktakeLine
     */
    omit?: StocktakeLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StocktakeLineInclude<ExtArgs> | null
    /**
     * Filter, which StocktakeLine to fetch.
     */
    where: StocktakeLineWhereUniqueInput
  }

  /**
   * StocktakeLine findUniqueOrThrow
   */
  export type StocktakeLineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StocktakeLine
     */
    select?: StocktakeLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StocktakeLine
     */
    omit?: StocktakeLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StocktakeLineInclude<ExtArgs> | null
    /**
     * Filter, which StocktakeLine to fetch.
     */
    where: StocktakeLineWhereUniqueInput
  }

  /**
   * StocktakeLine findFirst
   */
  export type StocktakeLineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StocktakeLine
     */
    select?: StocktakeLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StocktakeLine
     */
    omit?: StocktakeLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StocktakeLineInclude<ExtArgs> | null
    /**
     * Filter, which StocktakeLine to fetch.
     */
    where?: StocktakeLineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StocktakeLines to fetch.
     */
    orderBy?: StocktakeLineOrderByWithRelationInput | StocktakeLineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StocktakeLines.
     */
    cursor?: StocktakeLineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StocktakeLines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StocktakeLines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StocktakeLines.
     */
    distinct?: StocktakeLineScalarFieldEnum | StocktakeLineScalarFieldEnum[]
  }

  /**
   * StocktakeLine findFirstOrThrow
   */
  export type StocktakeLineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StocktakeLine
     */
    select?: StocktakeLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StocktakeLine
     */
    omit?: StocktakeLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StocktakeLineInclude<ExtArgs> | null
    /**
     * Filter, which StocktakeLine to fetch.
     */
    where?: StocktakeLineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StocktakeLines to fetch.
     */
    orderBy?: StocktakeLineOrderByWithRelationInput | StocktakeLineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StocktakeLines.
     */
    cursor?: StocktakeLineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StocktakeLines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StocktakeLines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StocktakeLines.
     */
    distinct?: StocktakeLineScalarFieldEnum | StocktakeLineScalarFieldEnum[]
  }

  /**
   * StocktakeLine findMany
   */
  export type StocktakeLineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StocktakeLine
     */
    select?: StocktakeLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StocktakeLine
     */
    omit?: StocktakeLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StocktakeLineInclude<ExtArgs> | null
    /**
     * Filter, which StocktakeLines to fetch.
     */
    where?: StocktakeLineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StocktakeLines to fetch.
     */
    orderBy?: StocktakeLineOrderByWithRelationInput | StocktakeLineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StocktakeLines.
     */
    cursor?: StocktakeLineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StocktakeLines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StocktakeLines.
     */
    skip?: number
    distinct?: StocktakeLineScalarFieldEnum | StocktakeLineScalarFieldEnum[]
  }

  /**
   * StocktakeLine create
   */
  export type StocktakeLineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StocktakeLine
     */
    select?: StocktakeLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StocktakeLine
     */
    omit?: StocktakeLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StocktakeLineInclude<ExtArgs> | null
    /**
     * The data needed to create a StocktakeLine.
     */
    data: XOR<StocktakeLineCreateInput, StocktakeLineUncheckedCreateInput>
  }

  /**
   * StocktakeLine createMany
   */
  export type StocktakeLineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StocktakeLines.
     */
    data: StocktakeLineCreateManyInput | StocktakeLineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StocktakeLine createManyAndReturn
   */
  export type StocktakeLineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StocktakeLine
     */
    select?: StocktakeLineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StocktakeLine
     */
    omit?: StocktakeLineOmit<ExtArgs> | null
    /**
     * The data used to create many StocktakeLines.
     */
    data: StocktakeLineCreateManyInput | StocktakeLineCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StocktakeLineIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StocktakeLine update
   */
  export type StocktakeLineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StocktakeLine
     */
    select?: StocktakeLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StocktakeLine
     */
    omit?: StocktakeLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StocktakeLineInclude<ExtArgs> | null
    /**
     * The data needed to update a StocktakeLine.
     */
    data: XOR<StocktakeLineUpdateInput, StocktakeLineUncheckedUpdateInput>
    /**
     * Choose, which StocktakeLine to update.
     */
    where: StocktakeLineWhereUniqueInput
  }

  /**
   * StocktakeLine updateMany
   */
  export type StocktakeLineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StocktakeLines.
     */
    data: XOR<StocktakeLineUpdateManyMutationInput, StocktakeLineUncheckedUpdateManyInput>
    /**
     * Filter which StocktakeLines to update
     */
    where?: StocktakeLineWhereInput
    /**
     * Limit how many StocktakeLines to update.
     */
    limit?: number
  }

  /**
   * StocktakeLine updateManyAndReturn
   */
  export type StocktakeLineUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StocktakeLine
     */
    select?: StocktakeLineSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StocktakeLine
     */
    omit?: StocktakeLineOmit<ExtArgs> | null
    /**
     * The data used to update StocktakeLines.
     */
    data: XOR<StocktakeLineUpdateManyMutationInput, StocktakeLineUncheckedUpdateManyInput>
    /**
     * Filter which StocktakeLines to update
     */
    where?: StocktakeLineWhereInput
    /**
     * Limit how many StocktakeLines to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StocktakeLineIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StocktakeLine upsert
   */
  export type StocktakeLineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StocktakeLine
     */
    select?: StocktakeLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StocktakeLine
     */
    omit?: StocktakeLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StocktakeLineInclude<ExtArgs> | null
    /**
     * The filter to search for the StocktakeLine to update in case it exists.
     */
    where: StocktakeLineWhereUniqueInput
    /**
     * In case the StocktakeLine found by the `where` argument doesn't exist, create a new StocktakeLine with this data.
     */
    create: XOR<StocktakeLineCreateInput, StocktakeLineUncheckedCreateInput>
    /**
     * In case the StocktakeLine was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StocktakeLineUpdateInput, StocktakeLineUncheckedUpdateInput>
  }

  /**
   * StocktakeLine delete
   */
  export type StocktakeLineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StocktakeLine
     */
    select?: StocktakeLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StocktakeLine
     */
    omit?: StocktakeLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StocktakeLineInclude<ExtArgs> | null
    /**
     * Filter which StocktakeLine to delete.
     */
    where: StocktakeLineWhereUniqueInput
  }

  /**
   * StocktakeLine deleteMany
   */
  export type StocktakeLineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StocktakeLines to delete
     */
    where?: StocktakeLineWhereInput
    /**
     * Limit how many StocktakeLines to delete.
     */
    limit?: number
  }

  /**
   * StocktakeLine.StockTake
   */
  export type StocktakeLine$StockTakeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stocktake
     */
    select?: StocktakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stocktake
     */
    omit?: StocktakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StocktakeInclude<ExtArgs> | null
    where?: StocktakeWhereInput
  }

  /**
   * StocktakeLine without action
   */
  export type StocktakeLineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StocktakeLine
     */
    select?: StocktakeLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StocktakeLine
     */
    omit?: StocktakeLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StocktakeLineInclude<ExtArgs> | null
  }


  /**
   * Model StockValue
   */

  export type AggregateStockValue = {
    _count: StockValueCountAggregateOutputType | null
    _avg: StockValueAvgAggregateOutputType | null
    _sum: StockValueSumAggregateOutputType | null
    _min: StockValueMinAggregateOutputType | null
    _max: StockValueMaxAggregateOutputType | null
  }

  export type StockValueAvgAggregateOutputType = {
    id: number | null
    netValue: number | null
  }

  export type StockValueSumAggregateOutputType = {
    id: number | null
    netValue: number | null
  }

  export type StockValueMinAggregateOutputType = {
    id: number | null
    guid: string | null
    date: Date | null
    netValue: number | null
  }

  export type StockValueMaxAggregateOutputType = {
    id: number | null
    guid: string | null
    date: Date | null
    netValue: number | null
  }

  export type StockValueCountAggregateOutputType = {
    id: number
    guid: number
    date: number
    netValue: number
    _all: number
  }


  export type StockValueAvgAggregateInputType = {
    id?: true
    netValue?: true
  }

  export type StockValueSumAggregateInputType = {
    id?: true
    netValue?: true
  }

  export type StockValueMinAggregateInputType = {
    id?: true
    guid?: true
    date?: true
    netValue?: true
  }

  export type StockValueMaxAggregateInputType = {
    id?: true
    guid?: true
    date?: true
    netValue?: true
  }

  export type StockValueCountAggregateInputType = {
    id?: true
    guid?: true
    date?: true
    netValue?: true
    _all?: true
  }

  export type StockValueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockValue to aggregate.
     */
    where?: StockValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockValues to fetch.
     */
    orderBy?: StockValueOrderByWithRelationInput | StockValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StockValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockValues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockValues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StockValues
    **/
    _count?: true | StockValueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StockValueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StockValueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StockValueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StockValueMaxAggregateInputType
  }

  export type GetStockValueAggregateType<T extends StockValueAggregateArgs> = {
        [P in keyof T & keyof AggregateStockValue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStockValue[P]>
      : GetScalarType<T[P], AggregateStockValue[P]>
  }




  export type StockValueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockValueWhereInput
    orderBy?: StockValueOrderByWithAggregationInput | StockValueOrderByWithAggregationInput[]
    by: StockValueScalarFieldEnum[] | StockValueScalarFieldEnum
    having?: StockValueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StockValueCountAggregateInputType | true
    _avg?: StockValueAvgAggregateInputType
    _sum?: StockValueSumAggregateInputType
    _min?: StockValueMinAggregateInputType
    _max?: StockValueMaxAggregateInputType
  }

  export type StockValueGroupByOutputType = {
    id: number
    guid: string | null
    date: Date
    netValue: number
    _count: StockValueCountAggregateOutputType | null
    _avg: StockValueAvgAggregateOutputType | null
    _sum: StockValueSumAggregateOutputType | null
    _min: StockValueMinAggregateOutputType | null
    _max: StockValueMaxAggregateOutputType | null
  }

  type GetStockValueGroupByPayload<T extends StockValueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StockValueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StockValueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StockValueGroupByOutputType[P]>
            : GetScalarType<T[P], StockValueGroupByOutputType[P]>
        }
      >
    >


  export type StockValueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guid?: boolean
    date?: boolean
    netValue?: boolean
  }, ExtArgs["result"]["stockValue"]>

  export type StockValueSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guid?: boolean
    date?: boolean
    netValue?: boolean
  }, ExtArgs["result"]["stockValue"]>

  export type StockValueSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guid?: boolean
    date?: boolean
    netValue?: boolean
  }, ExtArgs["result"]["stockValue"]>

  export type StockValueSelectScalar = {
    id?: boolean
    guid?: boolean
    date?: boolean
    netValue?: boolean
  }

  export type StockValueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "guid" | "date" | "netValue", ExtArgs["result"]["stockValue"]>

  export type $StockValuePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StockValue"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      guid: string | null
      date: Date
      netValue: number
    }, ExtArgs["result"]["stockValue"]>
    composites: {}
  }

  type StockValueGetPayload<S extends boolean | null | undefined | StockValueDefaultArgs> = $Result.GetResult<Prisma.$StockValuePayload, S>

  type StockValueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StockValueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StockValueCountAggregateInputType | true
    }

  export interface StockValueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StockValue'], meta: { name: 'StockValue' } }
    /**
     * Find zero or one StockValue that matches the filter.
     * @param {StockValueFindUniqueArgs} args - Arguments to find a StockValue
     * @example
     * // Get one StockValue
     * const stockValue = await prisma.stockValue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StockValueFindUniqueArgs>(args: SelectSubset<T, StockValueFindUniqueArgs<ExtArgs>>): Prisma__StockValueClient<$Result.GetResult<Prisma.$StockValuePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StockValue that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StockValueFindUniqueOrThrowArgs} args - Arguments to find a StockValue
     * @example
     * // Get one StockValue
     * const stockValue = await prisma.stockValue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StockValueFindUniqueOrThrowArgs>(args: SelectSubset<T, StockValueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StockValueClient<$Result.GetResult<Prisma.$StockValuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StockValue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockValueFindFirstArgs} args - Arguments to find a StockValue
     * @example
     * // Get one StockValue
     * const stockValue = await prisma.stockValue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StockValueFindFirstArgs>(args?: SelectSubset<T, StockValueFindFirstArgs<ExtArgs>>): Prisma__StockValueClient<$Result.GetResult<Prisma.$StockValuePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StockValue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockValueFindFirstOrThrowArgs} args - Arguments to find a StockValue
     * @example
     * // Get one StockValue
     * const stockValue = await prisma.stockValue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StockValueFindFirstOrThrowArgs>(args?: SelectSubset<T, StockValueFindFirstOrThrowArgs<ExtArgs>>): Prisma__StockValueClient<$Result.GetResult<Prisma.$StockValuePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StockValues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockValueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StockValues
     * const stockValues = await prisma.stockValue.findMany()
     * 
     * // Get first 10 StockValues
     * const stockValues = await prisma.stockValue.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stockValueWithIdOnly = await prisma.stockValue.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StockValueFindManyArgs>(args?: SelectSubset<T, StockValueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockValuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StockValue.
     * @param {StockValueCreateArgs} args - Arguments to create a StockValue.
     * @example
     * // Create one StockValue
     * const StockValue = await prisma.stockValue.create({
     *   data: {
     *     // ... data to create a StockValue
     *   }
     * })
     * 
     */
    create<T extends StockValueCreateArgs>(args: SelectSubset<T, StockValueCreateArgs<ExtArgs>>): Prisma__StockValueClient<$Result.GetResult<Prisma.$StockValuePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StockValues.
     * @param {StockValueCreateManyArgs} args - Arguments to create many StockValues.
     * @example
     * // Create many StockValues
     * const stockValue = await prisma.stockValue.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StockValueCreateManyArgs>(args?: SelectSubset<T, StockValueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StockValues and returns the data saved in the database.
     * @param {StockValueCreateManyAndReturnArgs} args - Arguments to create many StockValues.
     * @example
     * // Create many StockValues
     * const stockValue = await prisma.stockValue.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StockValues and only return the `id`
     * const stockValueWithIdOnly = await prisma.stockValue.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StockValueCreateManyAndReturnArgs>(args?: SelectSubset<T, StockValueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockValuePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StockValue.
     * @param {StockValueDeleteArgs} args - Arguments to delete one StockValue.
     * @example
     * // Delete one StockValue
     * const StockValue = await prisma.stockValue.delete({
     *   where: {
     *     // ... filter to delete one StockValue
     *   }
     * })
     * 
     */
    delete<T extends StockValueDeleteArgs>(args: SelectSubset<T, StockValueDeleteArgs<ExtArgs>>): Prisma__StockValueClient<$Result.GetResult<Prisma.$StockValuePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StockValue.
     * @param {StockValueUpdateArgs} args - Arguments to update one StockValue.
     * @example
     * // Update one StockValue
     * const stockValue = await prisma.stockValue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StockValueUpdateArgs>(args: SelectSubset<T, StockValueUpdateArgs<ExtArgs>>): Prisma__StockValueClient<$Result.GetResult<Prisma.$StockValuePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StockValues.
     * @param {StockValueDeleteManyArgs} args - Arguments to filter StockValues to delete.
     * @example
     * // Delete a few StockValues
     * const { count } = await prisma.stockValue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StockValueDeleteManyArgs>(args?: SelectSubset<T, StockValueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StockValues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockValueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StockValues
     * const stockValue = await prisma.stockValue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StockValueUpdateManyArgs>(args: SelectSubset<T, StockValueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StockValues and returns the data updated in the database.
     * @param {StockValueUpdateManyAndReturnArgs} args - Arguments to update many StockValues.
     * @example
     * // Update many StockValues
     * const stockValue = await prisma.stockValue.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StockValues and only return the `id`
     * const stockValueWithIdOnly = await prisma.stockValue.updateManyAndReturn({
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
    updateManyAndReturn<T extends StockValueUpdateManyAndReturnArgs>(args: SelectSubset<T, StockValueUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockValuePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StockValue.
     * @param {StockValueUpsertArgs} args - Arguments to update or create a StockValue.
     * @example
     * // Update or create a StockValue
     * const stockValue = await prisma.stockValue.upsert({
     *   create: {
     *     // ... data to create a StockValue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StockValue we want to update
     *   }
     * })
     */
    upsert<T extends StockValueUpsertArgs>(args: SelectSubset<T, StockValueUpsertArgs<ExtArgs>>): Prisma__StockValueClient<$Result.GetResult<Prisma.$StockValuePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StockValues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockValueCountArgs} args - Arguments to filter StockValues to count.
     * @example
     * // Count the number of StockValues
     * const count = await prisma.stockValue.count({
     *   where: {
     *     // ... the filter for the StockValues we want to count
     *   }
     * })
    **/
    count<T extends StockValueCountArgs>(
      args?: Subset<T, StockValueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StockValueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StockValue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockValueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StockValueAggregateArgs>(args: Subset<T, StockValueAggregateArgs>): Prisma.PrismaPromise<GetStockValueAggregateType<T>>

    /**
     * Group by StockValue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockValueGroupByArgs} args - Group by arguments.
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
      T extends StockValueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StockValueGroupByArgs['orderBy'] }
        : { orderBy?: StockValueGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StockValueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStockValueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StockValue model
   */
  readonly fields: StockValueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StockValue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StockValueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the StockValue model
   */
  interface StockValueFieldRefs {
    readonly id: FieldRef<"StockValue", 'Int'>
    readonly guid: FieldRef<"StockValue", 'String'>
    readonly date: FieldRef<"StockValue", 'DateTime'>
    readonly netValue: FieldRef<"StockValue", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * StockValue findUnique
   */
  export type StockValueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockValue
     */
    select?: StockValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockValue
     */
    omit?: StockValueOmit<ExtArgs> | null
    /**
     * Filter, which StockValue to fetch.
     */
    where: StockValueWhereUniqueInput
  }

  /**
   * StockValue findUniqueOrThrow
   */
  export type StockValueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockValue
     */
    select?: StockValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockValue
     */
    omit?: StockValueOmit<ExtArgs> | null
    /**
     * Filter, which StockValue to fetch.
     */
    where: StockValueWhereUniqueInput
  }

  /**
   * StockValue findFirst
   */
  export type StockValueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockValue
     */
    select?: StockValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockValue
     */
    omit?: StockValueOmit<ExtArgs> | null
    /**
     * Filter, which StockValue to fetch.
     */
    where?: StockValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockValues to fetch.
     */
    orderBy?: StockValueOrderByWithRelationInput | StockValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockValues.
     */
    cursor?: StockValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockValues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockValues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockValues.
     */
    distinct?: StockValueScalarFieldEnum | StockValueScalarFieldEnum[]
  }

  /**
   * StockValue findFirstOrThrow
   */
  export type StockValueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockValue
     */
    select?: StockValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockValue
     */
    omit?: StockValueOmit<ExtArgs> | null
    /**
     * Filter, which StockValue to fetch.
     */
    where?: StockValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockValues to fetch.
     */
    orderBy?: StockValueOrderByWithRelationInput | StockValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockValues.
     */
    cursor?: StockValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockValues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockValues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockValues.
     */
    distinct?: StockValueScalarFieldEnum | StockValueScalarFieldEnum[]
  }

  /**
   * StockValue findMany
   */
  export type StockValueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockValue
     */
    select?: StockValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockValue
     */
    omit?: StockValueOmit<ExtArgs> | null
    /**
     * Filter, which StockValues to fetch.
     */
    where?: StockValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockValues to fetch.
     */
    orderBy?: StockValueOrderByWithRelationInput | StockValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StockValues.
     */
    cursor?: StockValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockValues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockValues.
     */
    skip?: number
    distinct?: StockValueScalarFieldEnum | StockValueScalarFieldEnum[]
  }

  /**
   * StockValue create
   */
  export type StockValueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockValue
     */
    select?: StockValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockValue
     */
    omit?: StockValueOmit<ExtArgs> | null
    /**
     * The data needed to create a StockValue.
     */
    data: XOR<StockValueCreateInput, StockValueUncheckedCreateInput>
  }

  /**
   * StockValue createMany
   */
  export type StockValueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StockValues.
     */
    data: StockValueCreateManyInput | StockValueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StockValue createManyAndReturn
   */
  export type StockValueCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockValue
     */
    select?: StockValueSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StockValue
     */
    omit?: StockValueOmit<ExtArgs> | null
    /**
     * The data used to create many StockValues.
     */
    data: StockValueCreateManyInput | StockValueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StockValue update
   */
  export type StockValueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockValue
     */
    select?: StockValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockValue
     */
    omit?: StockValueOmit<ExtArgs> | null
    /**
     * The data needed to update a StockValue.
     */
    data: XOR<StockValueUpdateInput, StockValueUncheckedUpdateInput>
    /**
     * Choose, which StockValue to update.
     */
    where: StockValueWhereUniqueInput
  }

  /**
   * StockValue updateMany
   */
  export type StockValueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StockValues.
     */
    data: XOR<StockValueUpdateManyMutationInput, StockValueUncheckedUpdateManyInput>
    /**
     * Filter which StockValues to update
     */
    where?: StockValueWhereInput
    /**
     * Limit how many StockValues to update.
     */
    limit?: number
  }

  /**
   * StockValue updateManyAndReturn
   */
  export type StockValueUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockValue
     */
    select?: StockValueSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StockValue
     */
    omit?: StockValueOmit<ExtArgs> | null
    /**
     * The data used to update StockValues.
     */
    data: XOR<StockValueUpdateManyMutationInput, StockValueUncheckedUpdateManyInput>
    /**
     * Filter which StockValues to update
     */
    where?: StockValueWhereInput
    /**
     * Limit how many StockValues to update.
     */
    limit?: number
  }

  /**
   * StockValue upsert
   */
  export type StockValueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockValue
     */
    select?: StockValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockValue
     */
    omit?: StockValueOmit<ExtArgs> | null
    /**
     * The filter to search for the StockValue to update in case it exists.
     */
    where: StockValueWhereUniqueInput
    /**
     * In case the StockValue found by the `where` argument doesn't exist, create a new StockValue with this data.
     */
    create: XOR<StockValueCreateInput, StockValueUncheckedCreateInput>
    /**
     * In case the StockValue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StockValueUpdateInput, StockValueUncheckedUpdateInput>
  }

  /**
   * StockValue delete
   */
  export type StockValueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockValue
     */
    select?: StockValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockValue
     */
    omit?: StockValueOmit<ExtArgs> | null
    /**
     * Filter which StockValue to delete.
     */
    where: StockValueWhereUniqueInput
  }

  /**
   * StockValue deleteMany
   */
  export type StockValueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockValues to delete
     */
    where?: StockValueWhereInput
    /**
     * Limit how many StockValues to delete.
     */
    limit?: number
  }

  /**
   * StockValue without action
   */
  export type StockValueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockValue
     */
    select?: StockValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockValue
     */
    omit?: StockValueOmit<ExtArgs> | null
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


  export const ProductScalarFieldEnum: {
    id: 'id',
    guid: 'guid',
    publishedToShopify: 'publishedToShopify',
    shopifyId: 'shopifyId',
    name: 'name',
    supplierGuid: 'supplierGuid',
    taxable: 'taxable',
    productType: 'productType',
    brand: 'brand',
    description: 'description',
    tags: 'tags',
    filterFields: 'filterFields',
    location: 'location'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const ProductVariantScalarFieldEnum: {
    id: 'id',
    guid: 'guid',
    filterValues: 'filterValues',
    sku: 'sku',
    barcode: 'barcode',
    supplierCode: 'supplierCode',
    weight: 'weight',
    weightUnit: 'weightUnit',
    manageStockLevels: 'manageStockLevels',
    stockOnHand: 'stockOnHand',
    boughtInPacks: 'boughtInPacks',
    packSize: 'packSize',
    sellable: 'sellable',
    buyable: 'buyable',
    retailPrice: 'retailPrice',
    buyPrice: 'buyPrice',
    previousPrice: 'previousPrice',
    movingAverageCost: 'movingAverageCost',
    notes: 'notes',
    productId: 'productId'
  };

  export type ProductVariantScalarFieldEnum = (typeof ProductVariantScalarFieldEnum)[keyof typeof ProductVariantScalarFieldEnum]


  export const URIScalarFieldEnum: {
    id: 'id',
    guid: 'guid',
    uri: 'uri',
    productVariantId: 'productVariantId'
  };

  export type URIScalarFieldEnum = (typeof URIScalarFieldEnum)[keyof typeof URIScalarFieldEnum]


  export const StocktakeScalarFieldEnum: {
    id: 'id',
    guid: 'guid',
    location: 'location',
    applied: 'applied'
  };

  export type StocktakeScalarFieldEnum = (typeof StocktakeScalarFieldEnum)[keyof typeof StocktakeScalarFieldEnum]


  export const StocktakeLineScalarFieldEnum: {
    id: 'id',
    guid: 'guid',
    count: 'count',
    stockTakeId: 'stockTakeId',
    productVariantId: 'productVariantId'
  };

  export type StocktakeLineScalarFieldEnum = (typeof StocktakeLineScalarFieldEnum)[keyof typeof StocktakeLineScalarFieldEnum]


  export const StockValueScalarFieldEnum: {
    id: 'id',
    guid: 'guid',
    date: 'date',
    netValue: 'netValue'
  };

  export type StockValueScalarFieldEnum = (typeof StockValueScalarFieldEnum)[keyof typeof StockValueScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: IntFilter<"Product"> | number
    guid?: StringNullableFilter<"Product"> | string | null
    publishedToShopify?: BoolNullableFilter<"Product"> | boolean | null
    shopifyId?: StringNullableFilter<"Product"> | string | null
    name?: StringFilter<"Product"> | string
    supplierGuid?: StringNullableFilter<"Product"> | string | null
    taxable?: BoolFilter<"Product"> | boolean
    productType?: StringFilter<"Product"> | string
    brand?: StringNullableFilter<"Product"> | string | null
    description?: StringNullableFilter<"Product"> | string | null
    tags?: StringNullableListFilter<"Product">
    filterFields?: StringNullableFilter<"Product"> | string | null
    location?: StringFilter<"Product"> | string
    variants?: ProductVariantListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    guid?: SortOrderInput | SortOrder
    publishedToShopify?: SortOrderInput | SortOrder
    shopifyId?: SortOrderInput | SortOrder
    name?: SortOrder
    supplierGuid?: SortOrderInput | SortOrder
    taxable?: SortOrder
    productType?: SortOrder
    brand?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    tags?: SortOrder
    filterFields?: SortOrderInput | SortOrder
    location?: SortOrder
    variants?: ProductVariantOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    guid?: string
    name?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    publishedToShopify?: BoolNullableFilter<"Product"> | boolean | null
    shopifyId?: StringNullableFilter<"Product"> | string | null
    supplierGuid?: StringNullableFilter<"Product"> | string | null
    taxable?: BoolFilter<"Product"> | boolean
    productType?: StringFilter<"Product"> | string
    brand?: StringNullableFilter<"Product"> | string | null
    description?: StringNullableFilter<"Product"> | string | null
    tags?: StringNullableListFilter<"Product">
    filterFields?: StringNullableFilter<"Product"> | string | null
    location?: StringFilter<"Product"> | string
    variants?: ProductVariantListRelationFilter
  }, "id" | "guid" | "name">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    guid?: SortOrderInput | SortOrder
    publishedToShopify?: SortOrderInput | SortOrder
    shopifyId?: SortOrderInput | SortOrder
    name?: SortOrder
    supplierGuid?: SortOrderInput | SortOrder
    taxable?: SortOrder
    productType?: SortOrder
    brand?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    tags?: SortOrder
    filterFields?: SortOrderInput | SortOrder
    location?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Product"> | number
    guid?: StringNullableWithAggregatesFilter<"Product"> | string | null
    publishedToShopify?: BoolNullableWithAggregatesFilter<"Product"> | boolean | null
    shopifyId?: StringNullableWithAggregatesFilter<"Product"> | string | null
    name?: StringWithAggregatesFilter<"Product"> | string
    supplierGuid?: StringNullableWithAggregatesFilter<"Product"> | string | null
    taxable?: BoolWithAggregatesFilter<"Product"> | boolean
    productType?: StringWithAggregatesFilter<"Product"> | string
    brand?: StringNullableWithAggregatesFilter<"Product"> | string | null
    description?: StringNullableWithAggregatesFilter<"Product"> | string | null
    tags?: StringNullableListFilter<"Product">
    filterFields?: StringNullableWithAggregatesFilter<"Product"> | string | null
    location?: StringWithAggregatesFilter<"Product"> | string
  }

  export type ProductVariantWhereInput = {
    AND?: ProductVariantWhereInput | ProductVariantWhereInput[]
    OR?: ProductVariantWhereInput[]
    NOT?: ProductVariantWhereInput | ProductVariantWhereInput[]
    id?: IntFilter<"ProductVariant"> | number
    guid?: StringNullableFilter<"ProductVariant"> | string | null
    filterValues?: StringNullableFilter<"ProductVariant"> | string | null
    sku?: StringFilter<"ProductVariant"> | string
    barcode?: StringNullableFilter<"ProductVariant"> | string | null
    supplierCode?: StringNullableFilter<"ProductVariant"> | string | null
    weight?: IntFilter<"ProductVariant"> | number
    weightUnit?: StringFilter<"ProductVariant"> | string
    manageStockLevels?: BoolFilter<"ProductVariant"> | boolean
    stockOnHand?: IntFilter<"ProductVariant"> | number
    boughtInPacks?: BoolFilter<"ProductVariant"> | boolean
    packSize?: IntFilter<"ProductVariant"> | number
    sellable?: BoolFilter<"ProductVariant"> | boolean
    buyable?: BoolFilter<"ProductVariant"> | boolean
    retailPrice?: IntFilter<"ProductVariant"> | number
    buyPrice?: IntFilter<"ProductVariant"> | number
    previousPrice?: IntNullableFilter<"ProductVariant"> | number | null
    movingAverageCost?: IntFilter<"ProductVariant"> | number
    notes?: StringNullableFilter<"ProductVariant"> | string | null
    productId?: IntFilter<"ProductVariant"> | number
    imageUrls?: URIListRelationFilter
    Product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    StocktakeLine?: StocktakeLineListRelationFilter
  }

  export type ProductVariantOrderByWithRelationInput = {
    id?: SortOrder
    guid?: SortOrderInput | SortOrder
    filterValues?: SortOrderInput | SortOrder
    sku?: SortOrder
    barcode?: SortOrderInput | SortOrder
    supplierCode?: SortOrderInput | SortOrder
    weight?: SortOrder
    weightUnit?: SortOrder
    manageStockLevels?: SortOrder
    stockOnHand?: SortOrder
    boughtInPacks?: SortOrder
    packSize?: SortOrder
    sellable?: SortOrder
    buyable?: SortOrder
    retailPrice?: SortOrder
    buyPrice?: SortOrder
    previousPrice?: SortOrderInput | SortOrder
    movingAverageCost?: SortOrder
    notes?: SortOrderInput | SortOrder
    productId?: SortOrder
    imageUrls?: URIOrderByRelationAggregateInput
    Product?: ProductOrderByWithRelationInput
    StocktakeLine?: StocktakeLineOrderByRelationAggregateInput
  }

  export type ProductVariantWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    guid?: string
    sku?: string
    AND?: ProductVariantWhereInput | ProductVariantWhereInput[]
    OR?: ProductVariantWhereInput[]
    NOT?: ProductVariantWhereInput | ProductVariantWhereInput[]
    filterValues?: StringNullableFilter<"ProductVariant"> | string | null
    barcode?: StringNullableFilter<"ProductVariant"> | string | null
    supplierCode?: StringNullableFilter<"ProductVariant"> | string | null
    weight?: IntFilter<"ProductVariant"> | number
    weightUnit?: StringFilter<"ProductVariant"> | string
    manageStockLevels?: BoolFilter<"ProductVariant"> | boolean
    stockOnHand?: IntFilter<"ProductVariant"> | number
    boughtInPacks?: BoolFilter<"ProductVariant"> | boolean
    packSize?: IntFilter<"ProductVariant"> | number
    sellable?: BoolFilter<"ProductVariant"> | boolean
    buyable?: BoolFilter<"ProductVariant"> | boolean
    retailPrice?: IntFilter<"ProductVariant"> | number
    buyPrice?: IntFilter<"ProductVariant"> | number
    previousPrice?: IntNullableFilter<"ProductVariant"> | number | null
    movingAverageCost?: IntFilter<"ProductVariant"> | number
    notes?: StringNullableFilter<"ProductVariant"> | string | null
    productId?: IntFilter<"ProductVariant"> | number
    imageUrls?: URIListRelationFilter
    Product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    StocktakeLine?: StocktakeLineListRelationFilter
  }, "id" | "guid" | "sku">

  export type ProductVariantOrderByWithAggregationInput = {
    id?: SortOrder
    guid?: SortOrderInput | SortOrder
    filterValues?: SortOrderInput | SortOrder
    sku?: SortOrder
    barcode?: SortOrderInput | SortOrder
    supplierCode?: SortOrderInput | SortOrder
    weight?: SortOrder
    weightUnit?: SortOrder
    manageStockLevels?: SortOrder
    stockOnHand?: SortOrder
    boughtInPacks?: SortOrder
    packSize?: SortOrder
    sellable?: SortOrder
    buyable?: SortOrder
    retailPrice?: SortOrder
    buyPrice?: SortOrder
    previousPrice?: SortOrderInput | SortOrder
    movingAverageCost?: SortOrder
    notes?: SortOrderInput | SortOrder
    productId?: SortOrder
    _count?: ProductVariantCountOrderByAggregateInput
    _avg?: ProductVariantAvgOrderByAggregateInput
    _max?: ProductVariantMaxOrderByAggregateInput
    _min?: ProductVariantMinOrderByAggregateInput
    _sum?: ProductVariantSumOrderByAggregateInput
  }

  export type ProductVariantScalarWhereWithAggregatesInput = {
    AND?: ProductVariantScalarWhereWithAggregatesInput | ProductVariantScalarWhereWithAggregatesInput[]
    OR?: ProductVariantScalarWhereWithAggregatesInput[]
    NOT?: ProductVariantScalarWhereWithAggregatesInput | ProductVariantScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProductVariant"> | number
    guid?: StringNullableWithAggregatesFilter<"ProductVariant"> | string | null
    filterValues?: StringNullableWithAggregatesFilter<"ProductVariant"> | string | null
    sku?: StringWithAggregatesFilter<"ProductVariant"> | string
    barcode?: StringNullableWithAggregatesFilter<"ProductVariant"> | string | null
    supplierCode?: StringNullableWithAggregatesFilter<"ProductVariant"> | string | null
    weight?: IntWithAggregatesFilter<"ProductVariant"> | number
    weightUnit?: StringWithAggregatesFilter<"ProductVariant"> | string
    manageStockLevels?: BoolWithAggregatesFilter<"ProductVariant"> | boolean
    stockOnHand?: IntWithAggregatesFilter<"ProductVariant"> | number
    boughtInPacks?: BoolWithAggregatesFilter<"ProductVariant"> | boolean
    packSize?: IntWithAggregatesFilter<"ProductVariant"> | number
    sellable?: BoolWithAggregatesFilter<"ProductVariant"> | boolean
    buyable?: BoolWithAggregatesFilter<"ProductVariant"> | boolean
    retailPrice?: IntWithAggregatesFilter<"ProductVariant"> | number
    buyPrice?: IntWithAggregatesFilter<"ProductVariant"> | number
    previousPrice?: IntNullableWithAggregatesFilter<"ProductVariant"> | number | null
    movingAverageCost?: IntWithAggregatesFilter<"ProductVariant"> | number
    notes?: StringNullableWithAggregatesFilter<"ProductVariant"> | string | null
    productId?: IntWithAggregatesFilter<"ProductVariant"> | number
  }

  export type URIWhereInput = {
    AND?: URIWhereInput | URIWhereInput[]
    OR?: URIWhereInput[]
    NOT?: URIWhereInput | URIWhereInput[]
    id?: IntFilter<"URI"> | number
    guid?: StringNullableFilter<"URI"> | string | null
    uri?: StringFilter<"URI"> | string
    productVariantId?: IntFilter<"URI"> | number
    productVariant?: XOR<ProductVariantScalarRelationFilter, ProductVariantWhereInput>
  }

  export type URIOrderByWithRelationInput = {
    id?: SortOrder
    guid?: SortOrderInput | SortOrder
    uri?: SortOrder
    productVariantId?: SortOrder
    productVariant?: ProductVariantOrderByWithRelationInput
  }

  export type URIWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    guid?: string
    AND?: URIWhereInput | URIWhereInput[]
    OR?: URIWhereInput[]
    NOT?: URIWhereInput | URIWhereInput[]
    uri?: StringFilter<"URI"> | string
    productVariantId?: IntFilter<"URI"> | number
    productVariant?: XOR<ProductVariantScalarRelationFilter, ProductVariantWhereInput>
  }, "id" | "guid">

  export type URIOrderByWithAggregationInput = {
    id?: SortOrder
    guid?: SortOrderInput | SortOrder
    uri?: SortOrder
    productVariantId?: SortOrder
    _count?: URICountOrderByAggregateInput
    _avg?: URIAvgOrderByAggregateInput
    _max?: URIMaxOrderByAggregateInput
    _min?: URIMinOrderByAggregateInput
    _sum?: URISumOrderByAggregateInput
  }

  export type URIScalarWhereWithAggregatesInput = {
    AND?: URIScalarWhereWithAggregatesInput | URIScalarWhereWithAggregatesInput[]
    OR?: URIScalarWhereWithAggregatesInput[]
    NOT?: URIScalarWhereWithAggregatesInput | URIScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"URI"> | number
    guid?: StringNullableWithAggregatesFilter<"URI"> | string | null
    uri?: StringWithAggregatesFilter<"URI"> | string
    productVariantId?: IntWithAggregatesFilter<"URI"> | number
  }

  export type StocktakeWhereInput = {
    AND?: StocktakeWhereInput | StocktakeWhereInput[]
    OR?: StocktakeWhereInput[]
    NOT?: StocktakeWhereInput | StocktakeWhereInput[]
    id?: IntFilter<"Stocktake"> | number
    guid?: StringNullableFilter<"Stocktake"> | string | null
    location?: StringFilter<"Stocktake"> | string
    applied?: BoolFilter<"Stocktake"> | boolean
    lines?: StocktakeLineListRelationFilter
  }

  export type StocktakeOrderByWithRelationInput = {
    id?: SortOrder
    guid?: SortOrderInput | SortOrder
    location?: SortOrder
    applied?: SortOrder
    lines?: StocktakeLineOrderByRelationAggregateInput
  }

  export type StocktakeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    guid?: string
    location?: string
    AND?: StocktakeWhereInput | StocktakeWhereInput[]
    OR?: StocktakeWhereInput[]
    NOT?: StocktakeWhereInput | StocktakeWhereInput[]
    applied?: BoolFilter<"Stocktake"> | boolean
    lines?: StocktakeLineListRelationFilter
  }, "id" | "guid" | "location">

  export type StocktakeOrderByWithAggregationInput = {
    id?: SortOrder
    guid?: SortOrderInput | SortOrder
    location?: SortOrder
    applied?: SortOrder
    _count?: StocktakeCountOrderByAggregateInput
    _avg?: StocktakeAvgOrderByAggregateInput
    _max?: StocktakeMaxOrderByAggregateInput
    _min?: StocktakeMinOrderByAggregateInput
    _sum?: StocktakeSumOrderByAggregateInput
  }

  export type StocktakeScalarWhereWithAggregatesInput = {
    AND?: StocktakeScalarWhereWithAggregatesInput | StocktakeScalarWhereWithAggregatesInput[]
    OR?: StocktakeScalarWhereWithAggregatesInput[]
    NOT?: StocktakeScalarWhereWithAggregatesInput | StocktakeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Stocktake"> | number
    guid?: StringNullableWithAggregatesFilter<"Stocktake"> | string | null
    location?: StringWithAggregatesFilter<"Stocktake"> | string
    applied?: BoolWithAggregatesFilter<"Stocktake"> | boolean
  }

  export type StocktakeLineWhereInput = {
    AND?: StocktakeLineWhereInput | StocktakeLineWhereInput[]
    OR?: StocktakeLineWhereInput[]
    NOT?: StocktakeLineWhereInput | StocktakeLineWhereInput[]
    id?: IntFilter<"StocktakeLine"> | number
    guid?: StringNullableFilter<"StocktakeLine"> | string | null
    count?: IntFilter<"StocktakeLine"> | number
    stockTakeId?: IntNullableFilter<"StocktakeLine"> | number | null
    productVariantId?: IntFilter<"StocktakeLine"> | number
    variant?: XOR<ProductVariantScalarRelationFilter, ProductVariantWhereInput>
    StockTake?: XOR<StocktakeNullableScalarRelationFilter, StocktakeWhereInput> | null
  }

  export type StocktakeLineOrderByWithRelationInput = {
    id?: SortOrder
    guid?: SortOrderInput | SortOrder
    count?: SortOrder
    stockTakeId?: SortOrderInput | SortOrder
    productVariantId?: SortOrder
    variant?: ProductVariantOrderByWithRelationInput
    StockTake?: StocktakeOrderByWithRelationInput
  }

  export type StocktakeLineWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    guid?: string
    id_productVariantId?: StocktakeLineIdProductVariantIdCompoundUniqueInput
    AND?: StocktakeLineWhereInput | StocktakeLineWhereInput[]
    OR?: StocktakeLineWhereInput[]
    NOT?: StocktakeLineWhereInput | StocktakeLineWhereInput[]
    count?: IntFilter<"StocktakeLine"> | number
    stockTakeId?: IntNullableFilter<"StocktakeLine"> | number | null
    productVariantId?: IntFilter<"StocktakeLine"> | number
    variant?: XOR<ProductVariantScalarRelationFilter, ProductVariantWhereInput>
    StockTake?: XOR<StocktakeNullableScalarRelationFilter, StocktakeWhereInput> | null
  }, "id" | "guid" | "id_productVariantId">

  export type StocktakeLineOrderByWithAggregationInput = {
    id?: SortOrder
    guid?: SortOrderInput | SortOrder
    count?: SortOrder
    stockTakeId?: SortOrderInput | SortOrder
    productVariantId?: SortOrder
    _count?: StocktakeLineCountOrderByAggregateInput
    _avg?: StocktakeLineAvgOrderByAggregateInput
    _max?: StocktakeLineMaxOrderByAggregateInput
    _min?: StocktakeLineMinOrderByAggregateInput
    _sum?: StocktakeLineSumOrderByAggregateInput
  }

  export type StocktakeLineScalarWhereWithAggregatesInput = {
    AND?: StocktakeLineScalarWhereWithAggregatesInput | StocktakeLineScalarWhereWithAggregatesInput[]
    OR?: StocktakeLineScalarWhereWithAggregatesInput[]
    NOT?: StocktakeLineScalarWhereWithAggregatesInput | StocktakeLineScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"StocktakeLine"> | number
    guid?: StringNullableWithAggregatesFilter<"StocktakeLine"> | string | null
    count?: IntWithAggregatesFilter<"StocktakeLine"> | number
    stockTakeId?: IntNullableWithAggregatesFilter<"StocktakeLine"> | number | null
    productVariantId?: IntWithAggregatesFilter<"StocktakeLine"> | number
  }

  export type StockValueWhereInput = {
    AND?: StockValueWhereInput | StockValueWhereInput[]
    OR?: StockValueWhereInput[]
    NOT?: StockValueWhereInput | StockValueWhereInput[]
    id?: IntFilter<"StockValue"> | number
    guid?: StringNullableFilter<"StockValue"> | string | null
    date?: DateTimeFilter<"StockValue"> | Date | string
    netValue?: IntFilter<"StockValue"> | number
  }

  export type StockValueOrderByWithRelationInput = {
    id?: SortOrder
    guid?: SortOrderInput | SortOrder
    date?: SortOrder
    netValue?: SortOrder
  }

  export type StockValueWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    guid?: string
    date?: Date | string
    AND?: StockValueWhereInput | StockValueWhereInput[]
    OR?: StockValueWhereInput[]
    NOT?: StockValueWhereInput | StockValueWhereInput[]
    netValue?: IntFilter<"StockValue"> | number
  }, "id" | "guid" | "date">

  export type StockValueOrderByWithAggregationInput = {
    id?: SortOrder
    guid?: SortOrderInput | SortOrder
    date?: SortOrder
    netValue?: SortOrder
    _count?: StockValueCountOrderByAggregateInput
    _avg?: StockValueAvgOrderByAggregateInput
    _max?: StockValueMaxOrderByAggregateInput
    _min?: StockValueMinOrderByAggregateInput
    _sum?: StockValueSumOrderByAggregateInput
  }

  export type StockValueScalarWhereWithAggregatesInput = {
    AND?: StockValueScalarWhereWithAggregatesInput | StockValueScalarWhereWithAggregatesInput[]
    OR?: StockValueScalarWhereWithAggregatesInput[]
    NOT?: StockValueScalarWhereWithAggregatesInput | StockValueScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"StockValue"> | number
    guid?: StringNullableWithAggregatesFilter<"StockValue"> | string | null
    date?: DateTimeWithAggregatesFilter<"StockValue"> | Date | string
    netValue?: IntWithAggregatesFilter<"StockValue"> | number
  }

  export type ProductCreateInput = {
    guid?: string | null
    publishedToShopify?: boolean | null
    shopifyId?: string | null
    name: string
    supplierGuid?: string | null
    taxable?: boolean
    productType: string
    brand?: string | null
    description?: string | null
    tags?: ProductCreatetagsInput | string[]
    filterFields?: string | null
    location?: string
    variants?: ProductVariantCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: number
    guid?: string | null
    publishedToShopify?: boolean | null
    shopifyId?: string | null
    name: string
    supplierGuid?: string | null
    taxable?: boolean
    productType: string
    brand?: string | null
    description?: string | null
    tags?: ProductCreatetagsInput | string[]
    filterFields?: string | null
    location?: string
    variants?: ProductVariantUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    guid?: NullableStringFieldUpdateOperationsInput | string | null
    publishedToShopify?: NullableBoolFieldUpdateOperationsInput | boolean | null
    shopifyId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    supplierGuid?: NullableStringFieldUpdateOperationsInput | string | null
    taxable?: BoolFieldUpdateOperationsInput | boolean
    productType?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: ProductUpdatetagsInput | string[]
    filterFields?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    variants?: ProductVariantUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    guid?: NullableStringFieldUpdateOperationsInput | string | null
    publishedToShopify?: NullableBoolFieldUpdateOperationsInput | boolean | null
    shopifyId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    supplierGuid?: NullableStringFieldUpdateOperationsInput | string | null
    taxable?: BoolFieldUpdateOperationsInput | boolean
    productType?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: ProductUpdatetagsInput | string[]
    filterFields?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    variants?: ProductVariantUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: number
    guid?: string | null
    publishedToShopify?: boolean | null
    shopifyId?: string | null
    name: string
    supplierGuid?: string | null
    taxable?: boolean
    productType: string
    brand?: string | null
    description?: string | null
    tags?: ProductCreatetagsInput | string[]
    filterFields?: string | null
    location?: string
  }

  export type ProductUpdateManyMutationInput = {
    guid?: NullableStringFieldUpdateOperationsInput | string | null
    publishedToShopify?: NullableBoolFieldUpdateOperationsInput | boolean | null
    shopifyId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    supplierGuid?: NullableStringFieldUpdateOperationsInput | string | null
    taxable?: BoolFieldUpdateOperationsInput | boolean
    productType?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: ProductUpdatetagsInput | string[]
    filterFields?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    guid?: NullableStringFieldUpdateOperationsInput | string | null
    publishedToShopify?: NullableBoolFieldUpdateOperationsInput | boolean | null
    shopifyId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    supplierGuid?: NullableStringFieldUpdateOperationsInput | string | null
    taxable?: BoolFieldUpdateOperationsInput | boolean
    productType?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: ProductUpdatetagsInput | string[]
    filterFields?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
  }

  export type ProductVariantCreateInput = {
    guid?: string | null
    filterValues?: string | null
    sku: string
    barcode?: string | null
    supplierCode?: string | null
    weight: number
    weightUnit: string
    manageStockLevels: boolean
    stockOnHand?: number
    boughtInPacks?: boolean
    packSize?: number
    sellable?: boolean
    buyable?: boolean
    retailPrice: number
    buyPrice: number
    previousPrice?: number | null
    movingAverageCost?: number
    notes?: string | null
    imageUrls?: URICreateNestedManyWithoutProductVariantInput
    Product: ProductCreateNestedOneWithoutVariantsInput
    StocktakeLine?: StocktakeLineCreateNestedManyWithoutVariantInput
  }

  export type ProductVariantUncheckedCreateInput = {
    id?: number
    guid?: string | null
    filterValues?: string | null
    sku: string
    barcode?: string | null
    supplierCode?: string | null
    weight: number
    weightUnit: string
    manageStockLevels: boolean
    stockOnHand?: number
    boughtInPacks?: boolean
    packSize?: number
    sellable?: boolean
    buyable?: boolean
    retailPrice: number
    buyPrice: number
    previousPrice?: number | null
    movingAverageCost?: number
    notes?: string | null
    productId: number
    imageUrls?: URIUncheckedCreateNestedManyWithoutProductVariantInput
    StocktakeLine?: StocktakeLineUncheckedCreateNestedManyWithoutVariantInput
  }

  export type ProductVariantUpdateInput = {
    guid?: NullableStringFieldUpdateOperationsInput | string | null
    filterValues?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: StringFieldUpdateOperationsInput | string
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    supplierCode?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: IntFieldUpdateOperationsInput | number
    weightUnit?: StringFieldUpdateOperationsInput | string
    manageStockLevels?: BoolFieldUpdateOperationsInput | boolean
    stockOnHand?: IntFieldUpdateOperationsInput | number
    boughtInPacks?: BoolFieldUpdateOperationsInput | boolean
    packSize?: IntFieldUpdateOperationsInput | number
    sellable?: BoolFieldUpdateOperationsInput | boolean
    buyable?: BoolFieldUpdateOperationsInput | boolean
    retailPrice?: IntFieldUpdateOperationsInput | number
    buyPrice?: IntFieldUpdateOperationsInput | number
    previousPrice?: NullableIntFieldUpdateOperationsInput | number | null
    movingAverageCost?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrls?: URIUpdateManyWithoutProductVariantNestedInput
    Product?: ProductUpdateOneRequiredWithoutVariantsNestedInput
    StocktakeLine?: StocktakeLineUpdateManyWithoutVariantNestedInput
  }

  export type ProductVariantUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    guid?: NullableStringFieldUpdateOperationsInput | string | null
    filterValues?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: StringFieldUpdateOperationsInput | string
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    supplierCode?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: IntFieldUpdateOperationsInput | number
    weightUnit?: StringFieldUpdateOperationsInput | string
    manageStockLevels?: BoolFieldUpdateOperationsInput | boolean
    stockOnHand?: IntFieldUpdateOperationsInput | number
    boughtInPacks?: BoolFieldUpdateOperationsInput | boolean
    packSize?: IntFieldUpdateOperationsInput | number
    sellable?: BoolFieldUpdateOperationsInput | boolean
    buyable?: BoolFieldUpdateOperationsInput | boolean
    retailPrice?: IntFieldUpdateOperationsInput | number
    buyPrice?: IntFieldUpdateOperationsInput | number
    previousPrice?: NullableIntFieldUpdateOperationsInput | number | null
    movingAverageCost?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: IntFieldUpdateOperationsInput | number
    imageUrls?: URIUncheckedUpdateManyWithoutProductVariantNestedInput
    StocktakeLine?: StocktakeLineUncheckedUpdateManyWithoutVariantNestedInput
  }

  export type ProductVariantCreateManyInput = {
    id?: number
    guid?: string | null
    filterValues?: string | null
    sku: string
    barcode?: string | null
    supplierCode?: string | null
    weight: number
    weightUnit: string
    manageStockLevels: boolean
    stockOnHand?: number
    boughtInPacks?: boolean
    packSize?: number
    sellable?: boolean
    buyable?: boolean
    retailPrice: number
    buyPrice: number
    previousPrice?: number | null
    movingAverageCost?: number
    notes?: string | null
    productId: number
  }

  export type ProductVariantUpdateManyMutationInput = {
    guid?: NullableStringFieldUpdateOperationsInput | string | null
    filterValues?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: StringFieldUpdateOperationsInput | string
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    supplierCode?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: IntFieldUpdateOperationsInput | number
    weightUnit?: StringFieldUpdateOperationsInput | string
    manageStockLevels?: BoolFieldUpdateOperationsInput | boolean
    stockOnHand?: IntFieldUpdateOperationsInput | number
    boughtInPacks?: BoolFieldUpdateOperationsInput | boolean
    packSize?: IntFieldUpdateOperationsInput | number
    sellable?: BoolFieldUpdateOperationsInput | boolean
    buyable?: BoolFieldUpdateOperationsInput | boolean
    retailPrice?: IntFieldUpdateOperationsInput | number
    buyPrice?: IntFieldUpdateOperationsInput | number
    previousPrice?: NullableIntFieldUpdateOperationsInput | number | null
    movingAverageCost?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductVariantUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    guid?: NullableStringFieldUpdateOperationsInput | string | null
    filterValues?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: StringFieldUpdateOperationsInput | string
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    supplierCode?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: IntFieldUpdateOperationsInput | number
    weightUnit?: StringFieldUpdateOperationsInput | string
    manageStockLevels?: BoolFieldUpdateOperationsInput | boolean
    stockOnHand?: IntFieldUpdateOperationsInput | number
    boughtInPacks?: BoolFieldUpdateOperationsInput | boolean
    packSize?: IntFieldUpdateOperationsInput | number
    sellable?: BoolFieldUpdateOperationsInput | boolean
    buyable?: BoolFieldUpdateOperationsInput | boolean
    retailPrice?: IntFieldUpdateOperationsInput | number
    buyPrice?: IntFieldUpdateOperationsInput | number
    previousPrice?: NullableIntFieldUpdateOperationsInput | number | null
    movingAverageCost?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type URICreateInput = {
    guid?: string | null
    uri: string
    productVariant: ProductVariantCreateNestedOneWithoutImageUrlsInput
  }

  export type URIUncheckedCreateInput = {
    id?: number
    guid?: string | null
    uri: string
    productVariantId: number
  }

  export type URIUpdateInput = {
    guid?: NullableStringFieldUpdateOperationsInput | string | null
    uri?: StringFieldUpdateOperationsInput | string
    productVariant?: ProductVariantUpdateOneRequiredWithoutImageUrlsNestedInput
  }

  export type URIUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    guid?: NullableStringFieldUpdateOperationsInput | string | null
    uri?: StringFieldUpdateOperationsInput | string
    productVariantId?: IntFieldUpdateOperationsInput | number
  }

  export type URICreateManyInput = {
    id?: number
    guid?: string | null
    uri: string
    productVariantId: number
  }

  export type URIUpdateManyMutationInput = {
    guid?: NullableStringFieldUpdateOperationsInput | string | null
    uri?: StringFieldUpdateOperationsInput | string
  }

  export type URIUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    guid?: NullableStringFieldUpdateOperationsInput | string | null
    uri?: StringFieldUpdateOperationsInput | string
    productVariantId?: IntFieldUpdateOperationsInput | number
  }

  export type StocktakeCreateInput = {
    guid?: string | null
    location: string
    applied?: boolean
    lines?: StocktakeLineCreateNestedManyWithoutStockTakeInput
  }

  export type StocktakeUncheckedCreateInput = {
    id?: number
    guid?: string | null
    location: string
    applied?: boolean
    lines?: StocktakeLineUncheckedCreateNestedManyWithoutStockTakeInput
  }

  export type StocktakeUpdateInput = {
    guid?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    applied?: BoolFieldUpdateOperationsInput | boolean
    lines?: StocktakeLineUpdateManyWithoutStockTakeNestedInput
  }

  export type StocktakeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    guid?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    applied?: BoolFieldUpdateOperationsInput | boolean
    lines?: StocktakeLineUncheckedUpdateManyWithoutStockTakeNestedInput
  }

  export type StocktakeCreateManyInput = {
    id?: number
    guid?: string | null
    location: string
    applied?: boolean
  }

  export type StocktakeUpdateManyMutationInput = {
    guid?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    applied?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StocktakeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    guid?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    applied?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StocktakeLineCreateInput = {
    guid?: string | null
    count?: number
    variant: ProductVariantCreateNestedOneWithoutStocktakeLineInput
    StockTake?: StocktakeCreateNestedOneWithoutLinesInput
  }

  export type StocktakeLineUncheckedCreateInput = {
    id?: number
    guid?: string | null
    count?: number
    stockTakeId?: number | null
    productVariantId: number
  }

  export type StocktakeLineUpdateInput = {
    guid?: NullableStringFieldUpdateOperationsInput | string | null
    count?: IntFieldUpdateOperationsInput | number
    variant?: ProductVariantUpdateOneRequiredWithoutStocktakeLineNestedInput
    StockTake?: StocktakeUpdateOneWithoutLinesNestedInput
  }

  export type StocktakeLineUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    guid?: NullableStringFieldUpdateOperationsInput | string | null
    count?: IntFieldUpdateOperationsInput | number
    stockTakeId?: NullableIntFieldUpdateOperationsInput | number | null
    productVariantId?: IntFieldUpdateOperationsInput | number
  }

  export type StocktakeLineCreateManyInput = {
    id?: number
    guid?: string | null
    count?: number
    stockTakeId?: number | null
    productVariantId: number
  }

  export type StocktakeLineUpdateManyMutationInput = {
    guid?: NullableStringFieldUpdateOperationsInput | string | null
    count?: IntFieldUpdateOperationsInput | number
  }

  export type StocktakeLineUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    guid?: NullableStringFieldUpdateOperationsInput | string | null
    count?: IntFieldUpdateOperationsInput | number
    stockTakeId?: NullableIntFieldUpdateOperationsInput | number | null
    productVariantId?: IntFieldUpdateOperationsInput | number
  }

  export type StockValueCreateInput = {
    guid?: string | null
    date?: Date | string
    netValue: number
  }

  export type StockValueUncheckedCreateInput = {
    id?: number
    guid?: string | null
    date?: Date | string
    netValue: number
  }

  export type StockValueUpdateInput = {
    guid?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    netValue?: IntFieldUpdateOperationsInput | number
  }

  export type StockValueUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    guid?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    netValue?: IntFieldUpdateOperationsInput | number
  }

  export type StockValueCreateManyInput = {
    id?: number
    guid?: string | null
    date?: Date | string
    netValue: number
  }

  export type StockValueUpdateManyMutationInput = {
    guid?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    netValue?: IntFieldUpdateOperationsInput | number
  }

  export type StockValueUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    guid?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    netValue?: IntFieldUpdateOperationsInput | number
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

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type ProductVariantListRelationFilter = {
    every?: ProductVariantWhereInput
    some?: ProductVariantWhereInput
    none?: ProductVariantWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProductVariantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    guid?: SortOrder
    publishedToShopify?: SortOrder
    shopifyId?: SortOrder
    name?: SortOrder
    supplierGuid?: SortOrder
    taxable?: SortOrder
    productType?: SortOrder
    brand?: SortOrder
    description?: SortOrder
    tags?: SortOrder
    filterFields?: SortOrder
    location?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    guid?: SortOrder
    publishedToShopify?: SortOrder
    shopifyId?: SortOrder
    name?: SortOrder
    supplierGuid?: SortOrder
    taxable?: SortOrder
    productType?: SortOrder
    brand?: SortOrder
    description?: SortOrder
    filterFields?: SortOrder
    location?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    guid?: SortOrder
    publishedToShopify?: SortOrder
    shopifyId?: SortOrder
    name?: SortOrder
    supplierGuid?: SortOrder
    taxable?: SortOrder
    productType?: SortOrder
    brand?: SortOrder
    description?: SortOrder
    filterFields?: SortOrder
    location?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type URIListRelationFilter = {
    every?: URIWhereInput
    some?: URIWhereInput
    none?: URIWhereInput
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type StocktakeLineListRelationFilter = {
    every?: StocktakeLineWhereInput
    some?: StocktakeLineWhereInput
    none?: StocktakeLineWhereInput
  }

  export type URIOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StocktakeLineOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductVariantCountOrderByAggregateInput = {
    id?: SortOrder
    guid?: SortOrder
    filterValues?: SortOrder
    sku?: SortOrder
    barcode?: SortOrder
    supplierCode?: SortOrder
    weight?: SortOrder
    weightUnit?: SortOrder
    manageStockLevels?: SortOrder
    stockOnHand?: SortOrder
    boughtInPacks?: SortOrder
    packSize?: SortOrder
    sellable?: SortOrder
    buyable?: SortOrder
    retailPrice?: SortOrder
    buyPrice?: SortOrder
    previousPrice?: SortOrder
    movingAverageCost?: SortOrder
    notes?: SortOrder
    productId?: SortOrder
  }

  export type ProductVariantAvgOrderByAggregateInput = {
    id?: SortOrder
    weight?: SortOrder
    stockOnHand?: SortOrder
    packSize?: SortOrder
    retailPrice?: SortOrder
    buyPrice?: SortOrder
    previousPrice?: SortOrder
    movingAverageCost?: SortOrder
    productId?: SortOrder
  }

  export type ProductVariantMaxOrderByAggregateInput = {
    id?: SortOrder
    guid?: SortOrder
    filterValues?: SortOrder
    sku?: SortOrder
    barcode?: SortOrder
    supplierCode?: SortOrder
    weight?: SortOrder
    weightUnit?: SortOrder
    manageStockLevels?: SortOrder
    stockOnHand?: SortOrder
    boughtInPacks?: SortOrder
    packSize?: SortOrder
    sellable?: SortOrder
    buyable?: SortOrder
    retailPrice?: SortOrder
    buyPrice?: SortOrder
    previousPrice?: SortOrder
    movingAverageCost?: SortOrder
    notes?: SortOrder
    productId?: SortOrder
  }

  export type ProductVariantMinOrderByAggregateInput = {
    id?: SortOrder
    guid?: SortOrder
    filterValues?: SortOrder
    sku?: SortOrder
    barcode?: SortOrder
    supplierCode?: SortOrder
    weight?: SortOrder
    weightUnit?: SortOrder
    manageStockLevels?: SortOrder
    stockOnHand?: SortOrder
    boughtInPacks?: SortOrder
    packSize?: SortOrder
    sellable?: SortOrder
    buyable?: SortOrder
    retailPrice?: SortOrder
    buyPrice?: SortOrder
    previousPrice?: SortOrder
    movingAverageCost?: SortOrder
    notes?: SortOrder
    productId?: SortOrder
  }

  export type ProductVariantSumOrderByAggregateInput = {
    id?: SortOrder
    weight?: SortOrder
    stockOnHand?: SortOrder
    packSize?: SortOrder
    retailPrice?: SortOrder
    buyPrice?: SortOrder
    previousPrice?: SortOrder
    movingAverageCost?: SortOrder
    productId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ProductVariantScalarRelationFilter = {
    is?: ProductVariantWhereInput
    isNot?: ProductVariantWhereInput
  }

  export type URICountOrderByAggregateInput = {
    id?: SortOrder
    guid?: SortOrder
    uri?: SortOrder
    productVariantId?: SortOrder
  }

  export type URIAvgOrderByAggregateInput = {
    id?: SortOrder
    productVariantId?: SortOrder
  }

  export type URIMaxOrderByAggregateInput = {
    id?: SortOrder
    guid?: SortOrder
    uri?: SortOrder
    productVariantId?: SortOrder
  }

  export type URIMinOrderByAggregateInput = {
    id?: SortOrder
    guid?: SortOrder
    uri?: SortOrder
    productVariantId?: SortOrder
  }

  export type URISumOrderByAggregateInput = {
    id?: SortOrder
    productVariantId?: SortOrder
  }

  export type StocktakeCountOrderByAggregateInput = {
    id?: SortOrder
    guid?: SortOrder
    location?: SortOrder
    applied?: SortOrder
  }

  export type StocktakeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StocktakeMaxOrderByAggregateInput = {
    id?: SortOrder
    guid?: SortOrder
    location?: SortOrder
    applied?: SortOrder
  }

  export type StocktakeMinOrderByAggregateInput = {
    id?: SortOrder
    guid?: SortOrder
    location?: SortOrder
    applied?: SortOrder
  }

  export type StocktakeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StocktakeNullableScalarRelationFilter = {
    is?: StocktakeWhereInput | null
    isNot?: StocktakeWhereInput | null
  }

  export type StocktakeLineIdProductVariantIdCompoundUniqueInput = {
    id: number
    productVariantId: number
  }

  export type StocktakeLineCountOrderByAggregateInput = {
    id?: SortOrder
    guid?: SortOrder
    count?: SortOrder
    stockTakeId?: SortOrder
    productVariantId?: SortOrder
  }

  export type StocktakeLineAvgOrderByAggregateInput = {
    id?: SortOrder
    count?: SortOrder
    stockTakeId?: SortOrder
    productVariantId?: SortOrder
  }

  export type StocktakeLineMaxOrderByAggregateInput = {
    id?: SortOrder
    guid?: SortOrder
    count?: SortOrder
    stockTakeId?: SortOrder
    productVariantId?: SortOrder
  }

  export type StocktakeLineMinOrderByAggregateInput = {
    id?: SortOrder
    guid?: SortOrder
    count?: SortOrder
    stockTakeId?: SortOrder
    productVariantId?: SortOrder
  }

  export type StocktakeLineSumOrderByAggregateInput = {
    id?: SortOrder
    count?: SortOrder
    stockTakeId?: SortOrder
    productVariantId?: SortOrder
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

  export type StockValueCountOrderByAggregateInput = {
    id?: SortOrder
    guid?: SortOrder
    date?: SortOrder
    netValue?: SortOrder
  }

  export type StockValueAvgOrderByAggregateInput = {
    id?: SortOrder
    netValue?: SortOrder
  }

  export type StockValueMaxOrderByAggregateInput = {
    id?: SortOrder
    guid?: SortOrder
    date?: SortOrder
    netValue?: SortOrder
  }

  export type StockValueMinOrderByAggregateInput = {
    id?: SortOrder
    guid?: SortOrder
    date?: SortOrder
    netValue?: SortOrder
  }

  export type StockValueSumOrderByAggregateInput = {
    id?: SortOrder
    netValue?: SortOrder
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

  export type ProductCreatetagsInput = {
    set: string[]
  }

  export type ProductVariantCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductVariantCreateWithoutProductInput, ProductVariantUncheckedCreateWithoutProductInput> | ProductVariantCreateWithoutProductInput[] | ProductVariantUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductVariantCreateOrConnectWithoutProductInput | ProductVariantCreateOrConnectWithoutProductInput[]
    createMany?: ProductVariantCreateManyProductInputEnvelope
    connect?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
  }

  export type ProductVariantUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductVariantCreateWithoutProductInput, ProductVariantUncheckedCreateWithoutProductInput> | ProductVariantCreateWithoutProductInput[] | ProductVariantUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductVariantCreateOrConnectWithoutProductInput | ProductVariantCreateOrConnectWithoutProductInput[]
    createMany?: ProductVariantCreateManyProductInputEnvelope
    connect?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ProductUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ProductVariantUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductVariantCreateWithoutProductInput, ProductVariantUncheckedCreateWithoutProductInput> | ProductVariantCreateWithoutProductInput[] | ProductVariantUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductVariantCreateOrConnectWithoutProductInput | ProductVariantCreateOrConnectWithoutProductInput[]
    upsert?: ProductVariantUpsertWithWhereUniqueWithoutProductInput | ProductVariantUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductVariantCreateManyProductInputEnvelope
    set?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    disconnect?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    delete?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    connect?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    update?: ProductVariantUpdateWithWhereUniqueWithoutProductInput | ProductVariantUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductVariantUpdateManyWithWhereWithoutProductInput | ProductVariantUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductVariantScalarWhereInput | ProductVariantScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductVariantUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductVariantCreateWithoutProductInput, ProductVariantUncheckedCreateWithoutProductInput> | ProductVariantCreateWithoutProductInput[] | ProductVariantUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductVariantCreateOrConnectWithoutProductInput | ProductVariantCreateOrConnectWithoutProductInput[]
    upsert?: ProductVariantUpsertWithWhereUniqueWithoutProductInput | ProductVariantUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductVariantCreateManyProductInputEnvelope
    set?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    disconnect?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    delete?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    connect?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    update?: ProductVariantUpdateWithWhereUniqueWithoutProductInput | ProductVariantUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductVariantUpdateManyWithWhereWithoutProductInput | ProductVariantUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductVariantScalarWhereInput | ProductVariantScalarWhereInput[]
  }

  export type URICreateNestedManyWithoutProductVariantInput = {
    create?: XOR<URICreateWithoutProductVariantInput, URIUncheckedCreateWithoutProductVariantInput> | URICreateWithoutProductVariantInput[] | URIUncheckedCreateWithoutProductVariantInput[]
    connectOrCreate?: URICreateOrConnectWithoutProductVariantInput | URICreateOrConnectWithoutProductVariantInput[]
    createMany?: URICreateManyProductVariantInputEnvelope
    connect?: URIWhereUniqueInput | URIWhereUniqueInput[]
  }

  export type ProductCreateNestedOneWithoutVariantsInput = {
    create?: XOR<ProductCreateWithoutVariantsInput, ProductUncheckedCreateWithoutVariantsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutVariantsInput
    connect?: ProductWhereUniqueInput
  }

  export type StocktakeLineCreateNestedManyWithoutVariantInput = {
    create?: XOR<StocktakeLineCreateWithoutVariantInput, StocktakeLineUncheckedCreateWithoutVariantInput> | StocktakeLineCreateWithoutVariantInput[] | StocktakeLineUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: StocktakeLineCreateOrConnectWithoutVariantInput | StocktakeLineCreateOrConnectWithoutVariantInput[]
    createMany?: StocktakeLineCreateManyVariantInputEnvelope
    connect?: StocktakeLineWhereUniqueInput | StocktakeLineWhereUniqueInput[]
  }

  export type URIUncheckedCreateNestedManyWithoutProductVariantInput = {
    create?: XOR<URICreateWithoutProductVariantInput, URIUncheckedCreateWithoutProductVariantInput> | URICreateWithoutProductVariantInput[] | URIUncheckedCreateWithoutProductVariantInput[]
    connectOrCreate?: URICreateOrConnectWithoutProductVariantInput | URICreateOrConnectWithoutProductVariantInput[]
    createMany?: URICreateManyProductVariantInputEnvelope
    connect?: URIWhereUniqueInput | URIWhereUniqueInput[]
  }

  export type StocktakeLineUncheckedCreateNestedManyWithoutVariantInput = {
    create?: XOR<StocktakeLineCreateWithoutVariantInput, StocktakeLineUncheckedCreateWithoutVariantInput> | StocktakeLineCreateWithoutVariantInput[] | StocktakeLineUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: StocktakeLineCreateOrConnectWithoutVariantInput | StocktakeLineCreateOrConnectWithoutVariantInput[]
    createMany?: StocktakeLineCreateManyVariantInputEnvelope
    connect?: StocktakeLineWhereUniqueInput | StocktakeLineWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type URIUpdateManyWithoutProductVariantNestedInput = {
    create?: XOR<URICreateWithoutProductVariantInput, URIUncheckedCreateWithoutProductVariantInput> | URICreateWithoutProductVariantInput[] | URIUncheckedCreateWithoutProductVariantInput[]
    connectOrCreate?: URICreateOrConnectWithoutProductVariantInput | URICreateOrConnectWithoutProductVariantInput[]
    upsert?: URIUpsertWithWhereUniqueWithoutProductVariantInput | URIUpsertWithWhereUniqueWithoutProductVariantInput[]
    createMany?: URICreateManyProductVariantInputEnvelope
    set?: URIWhereUniqueInput | URIWhereUniqueInput[]
    disconnect?: URIWhereUniqueInput | URIWhereUniqueInput[]
    delete?: URIWhereUniqueInput | URIWhereUniqueInput[]
    connect?: URIWhereUniqueInput | URIWhereUniqueInput[]
    update?: URIUpdateWithWhereUniqueWithoutProductVariantInput | URIUpdateWithWhereUniqueWithoutProductVariantInput[]
    updateMany?: URIUpdateManyWithWhereWithoutProductVariantInput | URIUpdateManyWithWhereWithoutProductVariantInput[]
    deleteMany?: URIScalarWhereInput | URIScalarWhereInput[]
  }

  export type ProductUpdateOneRequiredWithoutVariantsNestedInput = {
    create?: XOR<ProductCreateWithoutVariantsInput, ProductUncheckedCreateWithoutVariantsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutVariantsInput
    upsert?: ProductUpsertWithoutVariantsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutVariantsInput, ProductUpdateWithoutVariantsInput>, ProductUncheckedUpdateWithoutVariantsInput>
  }

  export type StocktakeLineUpdateManyWithoutVariantNestedInput = {
    create?: XOR<StocktakeLineCreateWithoutVariantInput, StocktakeLineUncheckedCreateWithoutVariantInput> | StocktakeLineCreateWithoutVariantInput[] | StocktakeLineUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: StocktakeLineCreateOrConnectWithoutVariantInput | StocktakeLineCreateOrConnectWithoutVariantInput[]
    upsert?: StocktakeLineUpsertWithWhereUniqueWithoutVariantInput | StocktakeLineUpsertWithWhereUniqueWithoutVariantInput[]
    createMany?: StocktakeLineCreateManyVariantInputEnvelope
    set?: StocktakeLineWhereUniqueInput | StocktakeLineWhereUniqueInput[]
    disconnect?: StocktakeLineWhereUniqueInput | StocktakeLineWhereUniqueInput[]
    delete?: StocktakeLineWhereUniqueInput | StocktakeLineWhereUniqueInput[]
    connect?: StocktakeLineWhereUniqueInput | StocktakeLineWhereUniqueInput[]
    update?: StocktakeLineUpdateWithWhereUniqueWithoutVariantInput | StocktakeLineUpdateWithWhereUniqueWithoutVariantInput[]
    updateMany?: StocktakeLineUpdateManyWithWhereWithoutVariantInput | StocktakeLineUpdateManyWithWhereWithoutVariantInput[]
    deleteMany?: StocktakeLineScalarWhereInput | StocktakeLineScalarWhereInput[]
  }

  export type URIUncheckedUpdateManyWithoutProductVariantNestedInput = {
    create?: XOR<URICreateWithoutProductVariantInput, URIUncheckedCreateWithoutProductVariantInput> | URICreateWithoutProductVariantInput[] | URIUncheckedCreateWithoutProductVariantInput[]
    connectOrCreate?: URICreateOrConnectWithoutProductVariantInput | URICreateOrConnectWithoutProductVariantInput[]
    upsert?: URIUpsertWithWhereUniqueWithoutProductVariantInput | URIUpsertWithWhereUniqueWithoutProductVariantInput[]
    createMany?: URICreateManyProductVariantInputEnvelope
    set?: URIWhereUniqueInput | URIWhereUniqueInput[]
    disconnect?: URIWhereUniqueInput | URIWhereUniqueInput[]
    delete?: URIWhereUniqueInput | URIWhereUniqueInput[]
    connect?: URIWhereUniqueInput | URIWhereUniqueInput[]
    update?: URIUpdateWithWhereUniqueWithoutProductVariantInput | URIUpdateWithWhereUniqueWithoutProductVariantInput[]
    updateMany?: URIUpdateManyWithWhereWithoutProductVariantInput | URIUpdateManyWithWhereWithoutProductVariantInput[]
    deleteMany?: URIScalarWhereInput | URIScalarWhereInput[]
  }

  export type StocktakeLineUncheckedUpdateManyWithoutVariantNestedInput = {
    create?: XOR<StocktakeLineCreateWithoutVariantInput, StocktakeLineUncheckedCreateWithoutVariantInput> | StocktakeLineCreateWithoutVariantInput[] | StocktakeLineUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: StocktakeLineCreateOrConnectWithoutVariantInput | StocktakeLineCreateOrConnectWithoutVariantInput[]
    upsert?: StocktakeLineUpsertWithWhereUniqueWithoutVariantInput | StocktakeLineUpsertWithWhereUniqueWithoutVariantInput[]
    createMany?: StocktakeLineCreateManyVariantInputEnvelope
    set?: StocktakeLineWhereUniqueInput | StocktakeLineWhereUniqueInput[]
    disconnect?: StocktakeLineWhereUniqueInput | StocktakeLineWhereUniqueInput[]
    delete?: StocktakeLineWhereUniqueInput | StocktakeLineWhereUniqueInput[]
    connect?: StocktakeLineWhereUniqueInput | StocktakeLineWhereUniqueInput[]
    update?: StocktakeLineUpdateWithWhereUniqueWithoutVariantInput | StocktakeLineUpdateWithWhereUniqueWithoutVariantInput[]
    updateMany?: StocktakeLineUpdateManyWithWhereWithoutVariantInput | StocktakeLineUpdateManyWithWhereWithoutVariantInput[]
    deleteMany?: StocktakeLineScalarWhereInput | StocktakeLineScalarWhereInput[]
  }

  export type ProductVariantCreateNestedOneWithoutImageUrlsInput = {
    create?: XOR<ProductVariantCreateWithoutImageUrlsInput, ProductVariantUncheckedCreateWithoutImageUrlsInput>
    connectOrCreate?: ProductVariantCreateOrConnectWithoutImageUrlsInput
    connect?: ProductVariantWhereUniqueInput
  }

  export type ProductVariantUpdateOneRequiredWithoutImageUrlsNestedInput = {
    create?: XOR<ProductVariantCreateWithoutImageUrlsInput, ProductVariantUncheckedCreateWithoutImageUrlsInput>
    connectOrCreate?: ProductVariantCreateOrConnectWithoutImageUrlsInput
    upsert?: ProductVariantUpsertWithoutImageUrlsInput
    connect?: ProductVariantWhereUniqueInput
    update?: XOR<XOR<ProductVariantUpdateToOneWithWhereWithoutImageUrlsInput, ProductVariantUpdateWithoutImageUrlsInput>, ProductVariantUncheckedUpdateWithoutImageUrlsInput>
  }

  export type StocktakeLineCreateNestedManyWithoutStockTakeInput = {
    create?: XOR<StocktakeLineCreateWithoutStockTakeInput, StocktakeLineUncheckedCreateWithoutStockTakeInput> | StocktakeLineCreateWithoutStockTakeInput[] | StocktakeLineUncheckedCreateWithoutStockTakeInput[]
    connectOrCreate?: StocktakeLineCreateOrConnectWithoutStockTakeInput | StocktakeLineCreateOrConnectWithoutStockTakeInput[]
    createMany?: StocktakeLineCreateManyStockTakeInputEnvelope
    connect?: StocktakeLineWhereUniqueInput | StocktakeLineWhereUniqueInput[]
  }

  export type StocktakeLineUncheckedCreateNestedManyWithoutStockTakeInput = {
    create?: XOR<StocktakeLineCreateWithoutStockTakeInput, StocktakeLineUncheckedCreateWithoutStockTakeInput> | StocktakeLineCreateWithoutStockTakeInput[] | StocktakeLineUncheckedCreateWithoutStockTakeInput[]
    connectOrCreate?: StocktakeLineCreateOrConnectWithoutStockTakeInput | StocktakeLineCreateOrConnectWithoutStockTakeInput[]
    createMany?: StocktakeLineCreateManyStockTakeInputEnvelope
    connect?: StocktakeLineWhereUniqueInput | StocktakeLineWhereUniqueInput[]
  }

  export type StocktakeLineUpdateManyWithoutStockTakeNestedInput = {
    create?: XOR<StocktakeLineCreateWithoutStockTakeInput, StocktakeLineUncheckedCreateWithoutStockTakeInput> | StocktakeLineCreateWithoutStockTakeInput[] | StocktakeLineUncheckedCreateWithoutStockTakeInput[]
    connectOrCreate?: StocktakeLineCreateOrConnectWithoutStockTakeInput | StocktakeLineCreateOrConnectWithoutStockTakeInput[]
    upsert?: StocktakeLineUpsertWithWhereUniqueWithoutStockTakeInput | StocktakeLineUpsertWithWhereUniqueWithoutStockTakeInput[]
    createMany?: StocktakeLineCreateManyStockTakeInputEnvelope
    set?: StocktakeLineWhereUniqueInput | StocktakeLineWhereUniqueInput[]
    disconnect?: StocktakeLineWhereUniqueInput | StocktakeLineWhereUniqueInput[]
    delete?: StocktakeLineWhereUniqueInput | StocktakeLineWhereUniqueInput[]
    connect?: StocktakeLineWhereUniqueInput | StocktakeLineWhereUniqueInput[]
    update?: StocktakeLineUpdateWithWhereUniqueWithoutStockTakeInput | StocktakeLineUpdateWithWhereUniqueWithoutStockTakeInput[]
    updateMany?: StocktakeLineUpdateManyWithWhereWithoutStockTakeInput | StocktakeLineUpdateManyWithWhereWithoutStockTakeInput[]
    deleteMany?: StocktakeLineScalarWhereInput | StocktakeLineScalarWhereInput[]
  }

  export type StocktakeLineUncheckedUpdateManyWithoutStockTakeNestedInput = {
    create?: XOR<StocktakeLineCreateWithoutStockTakeInput, StocktakeLineUncheckedCreateWithoutStockTakeInput> | StocktakeLineCreateWithoutStockTakeInput[] | StocktakeLineUncheckedCreateWithoutStockTakeInput[]
    connectOrCreate?: StocktakeLineCreateOrConnectWithoutStockTakeInput | StocktakeLineCreateOrConnectWithoutStockTakeInput[]
    upsert?: StocktakeLineUpsertWithWhereUniqueWithoutStockTakeInput | StocktakeLineUpsertWithWhereUniqueWithoutStockTakeInput[]
    createMany?: StocktakeLineCreateManyStockTakeInputEnvelope
    set?: StocktakeLineWhereUniqueInput | StocktakeLineWhereUniqueInput[]
    disconnect?: StocktakeLineWhereUniqueInput | StocktakeLineWhereUniqueInput[]
    delete?: StocktakeLineWhereUniqueInput | StocktakeLineWhereUniqueInput[]
    connect?: StocktakeLineWhereUniqueInput | StocktakeLineWhereUniqueInput[]
    update?: StocktakeLineUpdateWithWhereUniqueWithoutStockTakeInput | StocktakeLineUpdateWithWhereUniqueWithoutStockTakeInput[]
    updateMany?: StocktakeLineUpdateManyWithWhereWithoutStockTakeInput | StocktakeLineUpdateManyWithWhereWithoutStockTakeInput[]
    deleteMany?: StocktakeLineScalarWhereInput | StocktakeLineScalarWhereInput[]
  }

  export type ProductVariantCreateNestedOneWithoutStocktakeLineInput = {
    create?: XOR<ProductVariantCreateWithoutStocktakeLineInput, ProductVariantUncheckedCreateWithoutStocktakeLineInput>
    connectOrCreate?: ProductVariantCreateOrConnectWithoutStocktakeLineInput
    connect?: ProductVariantWhereUniqueInput
  }

  export type StocktakeCreateNestedOneWithoutLinesInput = {
    create?: XOR<StocktakeCreateWithoutLinesInput, StocktakeUncheckedCreateWithoutLinesInput>
    connectOrCreate?: StocktakeCreateOrConnectWithoutLinesInput
    connect?: StocktakeWhereUniqueInput
  }

  export type ProductVariantUpdateOneRequiredWithoutStocktakeLineNestedInput = {
    create?: XOR<ProductVariantCreateWithoutStocktakeLineInput, ProductVariantUncheckedCreateWithoutStocktakeLineInput>
    connectOrCreate?: ProductVariantCreateOrConnectWithoutStocktakeLineInput
    upsert?: ProductVariantUpsertWithoutStocktakeLineInput
    connect?: ProductVariantWhereUniqueInput
    update?: XOR<XOR<ProductVariantUpdateToOneWithWhereWithoutStocktakeLineInput, ProductVariantUpdateWithoutStocktakeLineInput>, ProductVariantUncheckedUpdateWithoutStocktakeLineInput>
  }

  export type StocktakeUpdateOneWithoutLinesNestedInput = {
    create?: XOR<StocktakeCreateWithoutLinesInput, StocktakeUncheckedCreateWithoutLinesInput>
    connectOrCreate?: StocktakeCreateOrConnectWithoutLinesInput
    upsert?: StocktakeUpsertWithoutLinesInput
    disconnect?: StocktakeWhereInput | boolean
    delete?: StocktakeWhereInput | boolean
    connect?: StocktakeWhereUniqueInput
    update?: XOR<XOR<StocktakeUpdateToOneWithWhereWithoutLinesInput, StocktakeUpdateWithoutLinesInput>, StocktakeUncheckedUpdateWithoutLinesInput>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type ProductVariantCreateWithoutProductInput = {
    guid?: string | null
    filterValues?: string | null
    sku: string
    barcode?: string | null
    supplierCode?: string | null
    weight: number
    weightUnit: string
    manageStockLevels: boolean
    stockOnHand?: number
    boughtInPacks?: boolean
    packSize?: number
    sellable?: boolean
    buyable?: boolean
    retailPrice: number
    buyPrice: number
    previousPrice?: number | null
    movingAverageCost?: number
    notes?: string | null
    imageUrls?: URICreateNestedManyWithoutProductVariantInput
    StocktakeLine?: StocktakeLineCreateNestedManyWithoutVariantInput
  }

  export type ProductVariantUncheckedCreateWithoutProductInput = {
    id?: number
    guid?: string | null
    filterValues?: string | null
    sku: string
    barcode?: string | null
    supplierCode?: string | null
    weight: number
    weightUnit: string
    manageStockLevels: boolean
    stockOnHand?: number
    boughtInPacks?: boolean
    packSize?: number
    sellable?: boolean
    buyable?: boolean
    retailPrice: number
    buyPrice: number
    previousPrice?: number | null
    movingAverageCost?: number
    notes?: string | null
    imageUrls?: URIUncheckedCreateNestedManyWithoutProductVariantInput
    StocktakeLine?: StocktakeLineUncheckedCreateNestedManyWithoutVariantInput
  }

  export type ProductVariantCreateOrConnectWithoutProductInput = {
    where: ProductVariantWhereUniqueInput
    create: XOR<ProductVariantCreateWithoutProductInput, ProductVariantUncheckedCreateWithoutProductInput>
  }

  export type ProductVariantCreateManyProductInputEnvelope = {
    data: ProductVariantCreateManyProductInput | ProductVariantCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ProductVariantUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductVariantWhereUniqueInput
    update: XOR<ProductVariantUpdateWithoutProductInput, ProductVariantUncheckedUpdateWithoutProductInput>
    create: XOR<ProductVariantCreateWithoutProductInput, ProductVariantUncheckedCreateWithoutProductInput>
  }

  export type ProductVariantUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductVariantWhereUniqueInput
    data: XOR<ProductVariantUpdateWithoutProductInput, ProductVariantUncheckedUpdateWithoutProductInput>
  }

  export type ProductVariantUpdateManyWithWhereWithoutProductInput = {
    where: ProductVariantScalarWhereInput
    data: XOR<ProductVariantUpdateManyMutationInput, ProductVariantUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductVariantScalarWhereInput = {
    AND?: ProductVariantScalarWhereInput | ProductVariantScalarWhereInput[]
    OR?: ProductVariantScalarWhereInput[]
    NOT?: ProductVariantScalarWhereInput | ProductVariantScalarWhereInput[]
    id?: IntFilter<"ProductVariant"> | number
    guid?: StringNullableFilter<"ProductVariant"> | string | null
    filterValues?: StringNullableFilter<"ProductVariant"> | string | null
    sku?: StringFilter<"ProductVariant"> | string
    barcode?: StringNullableFilter<"ProductVariant"> | string | null
    supplierCode?: StringNullableFilter<"ProductVariant"> | string | null
    weight?: IntFilter<"ProductVariant"> | number
    weightUnit?: StringFilter<"ProductVariant"> | string
    manageStockLevels?: BoolFilter<"ProductVariant"> | boolean
    stockOnHand?: IntFilter<"ProductVariant"> | number
    boughtInPacks?: BoolFilter<"ProductVariant"> | boolean
    packSize?: IntFilter<"ProductVariant"> | number
    sellable?: BoolFilter<"ProductVariant"> | boolean
    buyable?: BoolFilter<"ProductVariant"> | boolean
    retailPrice?: IntFilter<"ProductVariant"> | number
    buyPrice?: IntFilter<"ProductVariant"> | number
    previousPrice?: IntNullableFilter<"ProductVariant"> | number | null
    movingAverageCost?: IntFilter<"ProductVariant"> | number
    notes?: StringNullableFilter<"ProductVariant"> | string | null
    productId?: IntFilter<"ProductVariant"> | number
  }

  export type URICreateWithoutProductVariantInput = {
    guid?: string | null
    uri: string
  }

  export type URIUncheckedCreateWithoutProductVariantInput = {
    id?: number
    guid?: string | null
    uri: string
  }

  export type URICreateOrConnectWithoutProductVariantInput = {
    where: URIWhereUniqueInput
    create: XOR<URICreateWithoutProductVariantInput, URIUncheckedCreateWithoutProductVariantInput>
  }

  export type URICreateManyProductVariantInputEnvelope = {
    data: URICreateManyProductVariantInput | URICreateManyProductVariantInput[]
    skipDuplicates?: boolean
  }

  export type ProductCreateWithoutVariantsInput = {
    guid?: string | null
    publishedToShopify?: boolean | null
    shopifyId?: string | null
    name: string
    supplierGuid?: string | null
    taxable?: boolean
    productType: string
    brand?: string | null
    description?: string | null
    tags?: ProductCreatetagsInput | string[]
    filterFields?: string | null
    location?: string
  }

  export type ProductUncheckedCreateWithoutVariantsInput = {
    id?: number
    guid?: string | null
    publishedToShopify?: boolean | null
    shopifyId?: string | null
    name: string
    supplierGuid?: string | null
    taxable?: boolean
    productType: string
    brand?: string | null
    description?: string | null
    tags?: ProductCreatetagsInput | string[]
    filterFields?: string | null
    location?: string
  }

  export type ProductCreateOrConnectWithoutVariantsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutVariantsInput, ProductUncheckedCreateWithoutVariantsInput>
  }

  export type StocktakeLineCreateWithoutVariantInput = {
    guid?: string | null
    count?: number
    StockTake?: StocktakeCreateNestedOneWithoutLinesInput
  }

  export type StocktakeLineUncheckedCreateWithoutVariantInput = {
    id?: number
    guid?: string | null
    count?: number
    stockTakeId?: number | null
  }

  export type StocktakeLineCreateOrConnectWithoutVariantInput = {
    where: StocktakeLineWhereUniqueInput
    create: XOR<StocktakeLineCreateWithoutVariantInput, StocktakeLineUncheckedCreateWithoutVariantInput>
  }

  export type StocktakeLineCreateManyVariantInputEnvelope = {
    data: StocktakeLineCreateManyVariantInput | StocktakeLineCreateManyVariantInput[]
    skipDuplicates?: boolean
  }

  export type URIUpsertWithWhereUniqueWithoutProductVariantInput = {
    where: URIWhereUniqueInput
    update: XOR<URIUpdateWithoutProductVariantInput, URIUncheckedUpdateWithoutProductVariantInput>
    create: XOR<URICreateWithoutProductVariantInput, URIUncheckedCreateWithoutProductVariantInput>
  }

  export type URIUpdateWithWhereUniqueWithoutProductVariantInput = {
    where: URIWhereUniqueInput
    data: XOR<URIUpdateWithoutProductVariantInput, URIUncheckedUpdateWithoutProductVariantInput>
  }

  export type URIUpdateManyWithWhereWithoutProductVariantInput = {
    where: URIScalarWhereInput
    data: XOR<URIUpdateManyMutationInput, URIUncheckedUpdateManyWithoutProductVariantInput>
  }

  export type URIScalarWhereInput = {
    AND?: URIScalarWhereInput | URIScalarWhereInput[]
    OR?: URIScalarWhereInput[]
    NOT?: URIScalarWhereInput | URIScalarWhereInput[]
    id?: IntFilter<"URI"> | number
    guid?: StringNullableFilter<"URI"> | string | null
    uri?: StringFilter<"URI"> | string
    productVariantId?: IntFilter<"URI"> | number
  }

  export type ProductUpsertWithoutVariantsInput = {
    update: XOR<ProductUpdateWithoutVariantsInput, ProductUncheckedUpdateWithoutVariantsInput>
    create: XOR<ProductCreateWithoutVariantsInput, ProductUncheckedCreateWithoutVariantsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutVariantsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutVariantsInput, ProductUncheckedUpdateWithoutVariantsInput>
  }

  export type ProductUpdateWithoutVariantsInput = {
    guid?: NullableStringFieldUpdateOperationsInput | string | null
    publishedToShopify?: NullableBoolFieldUpdateOperationsInput | boolean | null
    shopifyId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    supplierGuid?: NullableStringFieldUpdateOperationsInput | string | null
    taxable?: BoolFieldUpdateOperationsInput | boolean
    productType?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: ProductUpdatetagsInput | string[]
    filterFields?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
  }

  export type ProductUncheckedUpdateWithoutVariantsInput = {
    id?: IntFieldUpdateOperationsInput | number
    guid?: NullableStringFieldUpdateOperationsInput | string | null
    publishedToShopify?: NullableBoolFieldUpdateOperationsInput | boolean | null
    shopifyId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    supplierGuid?: NullableStringFieldUpdateOperationsInput | string | null
    taxable?: BoolFieldUpdateOperationsInput | boolean
    productType?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: ProductUpdatetagsInput | string[]
    filterFields?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
  }

  export type StocktakeLineUpsertWithWhereUniqueWithoutVariantInput = {
    where: StocktakeLineWhereUniqueInput
    update: XOR<StocktakeLineUpdateWithoutVariantInput, StocktakeLineUncheckedUpdateWithoutVariantInput>
    create: XOR<StocktakeLineCreateWithoutVariantInput, StocktakeLineUncheckedCreateWithoutVariantInput>
  }

  export type StocktakeLineUpdateWithWhereUniqueWithoutVariantInput = {
    where: StocktakeLineWhereUniqueInput
    data: XOR<StocktakeLineUpdateWithoutVariantInput, StocktakeLineUncheckedUpdateWithoutVariantInput>
  }

  export type StocktakeLineUpdateManyWithWhereWithoutVariantInput = {
    where: StocktakeLineScalarWhereInput
    data: XOR<StocktakeLineUpdateManyMutationInput, StocktakeLineUncheckedUpdateManyWithoutVariantInput>
  }

  export type StocktakeLineScalarWhereInput = {
    AND?: StocktakeLineScalarWhereInput | StocktakeLineScalarWhereInput[]
    OR?: StocktakeLineScalarWhereInput[]
    NOT?: StocktakeLineScalarWhereInput | StocktakeLineScalarWhereInput[]
    id?: IntFilter<"StocktakeLine"> | number
    guid?: StringNullableFilter<"StocktakeLine"> | string | null
    count?: IntFilter<"StocktakeLine"> | number
    stockTakeId?: IntNullableFilter<"StocktakeLine"> | number | null
    productVariantId?: IntFilter<"StocktakeLine"> | number
  }

  export type ProductVariantCreateWithoutImageUrlsInput = {
    guid?: string | null
    filterValues?: string | null
    sku: string
    barcode?: string | null
    supplierCode?: string | null
    weight: number
    weightUnit: string
    manageStockLevels: boolean
    stockOnHand?: number
    boughtInPacks?: boolean
    packSize?: number
    sellable?: boolean
    buyable?: boolean
    retailPrice: number
    buyPrice: number
    previousPrice?: number | null
    movingAverageCost?: number
    notes?: string | null
    Product: ProductCreateNestedOneWithoutVariantsInput
    StocktakeLine?: StocktakeLineCreateNestedManyWithoutVariantInput
  }

  export type ProductVariantUncheckedCreateWithoutImageUrlsInput = {
    id?: number
    guid?: string | null
    filterValues?: string | null
    sku: string
    barcode?: string | null
    supplierCode?: string | null
    weight: number
    weightUnit: string
    manageStockLevels: boolean
    stockOnHand?: number
    boughtInPacks?: boolean
    packSize?: number
    sellable?: boolean
    buyable?: boolean
    retailPrice: number
    buyPrice: number
    previousPrice?: number | null
    movingAverageCost?: number
    notes?: string | null
    productId: number
    StocktakeLine?: StocktakeLineUncheckedCreateNestedManyWithoutVariantInput
  }

  export type ProductVariantCreateOrConnectWithoutImageUrlsInput = {
    where: ProductVariantWhereUniqueInput
    create: XOR<ProductVariantCreateWithoutImageUrlsInput, ProductVariantUncheckedCreateWithoutImageUrlsInput>
  }

  export type ProductVariantUpsertWithoutImageUrlsInput = {
    update: XOR<ProductVariantUpdateWithoutImageUrlsInput, ProductVariantUncheckedUpdateWithoutImageUrlsInput>
    create: XOR<ProductVariantCreateWithoutImageUrlsInput, ProductVariantUncheckedCreateWithoutImageUrlsInput>
    where?: ProductVariantWhereInput
  }

  export type ProductVariantUpdateToOneWithWhereWithoutImageUrlsInput = {
    where?: ProductVariantWhereInput
    data: XOR<ProductVariantUpdateWithoutImageUrlsInput, ProductVariantUncheckedUpdateWithoutImageUrlsInput>
  }

  export type ProductVariantUpdateWithoutImageUrlsInput = {
    guid?: NullableStringFieldUpdateOperationsInput | string | null
    filterValues?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: StringFieldUpdateOperationsInput | string
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    supplierCode?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: IntFieldUpdateOperationsInput | number
    weightUnit?: StringFieldUpdateOperationsInput | string
    manageStockLevels?: BoolFieldUpdateOperationsInput | boolean
    stockOnHand?: IntFieldUpdateOperationsInput | number
    boughtInPacks?: BoolFieldUpdateOperationsInput | boolean
    packSize?: IntFieldUpdateOperationsInput | number
    sellable?: BoolFieldUpdateOperationsInput | boolean
    buyable?: BoolFieldUpdateOperationsInput | boolean
    retailPrice?: IntFieldUpdateOperationsInput | number
    buyPrice?: IntFieldUpdateOperationsInput | number
    previousPrice?: NullableIntFieldUpdateOperationsInput | number | null
    movingAverageCost?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    Product?: ProductUpdateOneRequiredWithoutVariantsNestedInput
    StocktakeLine?: StocktakeLineUpdateManyWithoutVariantNestedInput
  }

  export type ProductVariantUncheckedUpdateWithoutImageUrlsInput = {
    id?: IntFieldUpdateOperationsInput | number
    guid?: NullableStringFieldUpdateOperationsInput | string | null
    filterValues?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: StringFieldUpdateOperationsInput | string
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    supplierCode?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: IntFieldUpdateOperationsInput | number
    weightUnit?: StringFieldUpdateOperationsInput | string
    manageStockLevels?: BoolFieldUpdateOperationsInput | boolean
    stockOnHand?: IntFieldUpdateOperationsInput | number
    boughtInPacks?: BoolFieldUpdateOperationsInput | boolean
    packSize?: IntFieldUpdateOperationsInput | number
    sellable?: BoolFieldUpdateOperationsInput | boolean
    buyable?: BoolFieldUpdateOperationsInput | boolean
    retailPrice?: IntFieldUpdateOperationsInput | number
    buyPrice?: IntFieldUpdateOperationsInput | number
    previousPrice?: NullableIntFieldUpdateOperationsInput | number | null
    movingAverageCost?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: IntFieldUpdateOperationsInput | number
    StocktakeLine?: StocktakeLineUncheckedUpdateManyWithoutVariantNestedInput
  }

  export type StocktakeLineCreateWithoutStockTakeInput = {
    guid?: string | null
    count?: number
    variant: ProductVariantCreateNestedOneWithoutStocktakeLineInput
  }

  export type StocktakeLineUncheckedCreateWithoutStockTakeInput = {
    id?: number
    guid?: string | null
    count?: number
    productVariantId: number
  }

  export type StocktakeLineCreateOrConnectWithoutStockTakeInput = {
    where: StocktakeLineWhereUniqueInput
    create: XOR<StocktakeLineCreateWithoutStockTakeInput, StocktakeLineUncheckedCreateWithoutStockTakeInput>
  }

  export type StocktakeLineCreateManyStockTakeInputEnvelope = {
    data: StocktakeLineCreateManyStockTakeInput | StocktakeLineCreateManyStockTakeInput[]
    skipDuplicates?: boolean
  }

  export type StocktakeLineUpsertWithWhereUniqueWithoutStockTakeInput = {
    where: StocktakeLineWhereUniqueInput
    update: XOR<StocktakeLineUpdateWithoutStockTakeInput, StocktakeLineUncheckedUpdateWithoutStockTakeInput>
    create: XOR<StocktakeLineCreateWithoutStockTakeInput, StocktakeLineUncheckedCreateWithoutStockTakeInput>
  }

  export type StocktakeLineUpdateWithWhereUniqueWithoutStockTakeInput = {
    where: StocktakeLineWhereUniqueInput
    data: XOR<StocktakeLineUpdateWithoutStockTakeInput, StocktakeLineUncheckedUpdateWithoutStockTakeInput>
  }

  export type StocktakeLineUpdateManyWithWhereWithoutStockTakeInput = {
    where: StocktakeLineScalarWhereInput
    data: XOR<StocktakeLineUpdateManyMutationInput, StocktakeLineUncheckedUpdateManyWithoutStockTakeInput>
  }

  export type ProductVariantCreateWithoutStocktakeLineInput = {
    guid?: string | null
    filterValues?: string | null
    sku: string
    barcode?: string | null
    supplierCode?: string | null
    weight: number
    weightUnit: string
    manageStockLevels: boolean
    stockOnHand?: number
    boughtInPacks?: boolean
    packSize?: number
    sellable?: boolean
    buyable?: boolean
    retailPrice: number
    buyPrice: number
    previousPrice?: number | null
    movingAverageCost?: number
    notes?: string | null
    imageUrls?: URICreateNestedManyWithoutProductVariantInput
    Product: ProductCreateNestedOneWithoutVariantsInput
  }

  export type ProductVariantUncheckedCreateWithoutStocktakeLineInput = {
    id?: number
    guid?: string | null
    filterValues?: string | null
    sku: string
    barcode?: string | null
    supplierCode?: string | null
    weight: number
    weightUnit: string
    manageStockLevels: boolean
    stockOnHand?: number
    boughtInPacks?: boolean
    packSize?: number
    sellable?: boolean
    buyable?: boolean
    retailPrice: number
    buyPrice: number
    previousPrice?: number | null
    movingAverageCost?: number
    notes?: string | null
    productId: number
    imageUrls?: URIUncheckedCreateNestedManyWithoutProductVariantInput
  }

  export type ProductVariantCreateOrConnectWithoutStocktakeLineInput = {
    where: ProductVariantWhereUniqueInput
    create: XOR<ProductVariantCreateWithoutStocktakeLineInput, ProductVariantUncheckedCreateWithoutStocktakeLineInput>
  }

  export type StocktakeCreateWithoutLinesInput = {
    guid?: string | null
    location: string
    applied?: boolean
  }

  export type StocktakeUncheckedCreateWithoutLinesInput = {
    id?: number
    guid?: string | null
    location: string
    applied?: boolean
  }

  export type StocktakeCreateOrConnectWithoutLinesInput = {
    where: StocktakeWhereUniqueInput
    create: XOR<StocktakeCreateWithoutLinesInput, StocktakeUncheckedCreateWithoutLinesInput>
  }

  export type ProductVariantUpsertWithoutStocktakeLineInput = {
    update: XOR<ProductVariantUpdateWithoutStocktakeLineInput, ProductVariantUncheckedUpdateWithoutStocktakeLineInput>
    create: XOR<ProductVariantCreateWithoutStocktakeLineInput, ProductVariantUncheckedCreateWithoutStocktakeLineInput>
    where?: ProductVariantWhereInput
  }

  export type ProductVariantUpdateToOneWithWhereWithoutStocktakeLineInput = {
    where?: ProductVariantWhereInput
    data: XOR<ProductVariantUpdateWithoutStocktakeLineInput, ProductVariantUncheckedUpdateWithoutStocktakeLineInput>
  }

  export type ProductVariantUpdateWithoutStocktakeLineInput = {
    guid?: NullableStringFieldUpdateOperationsInput | string | null
    filterValues?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: StringFieldUpdateOperationsInput | string
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    supplierCode?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: IntFieldUpdateOperationsInput | number
    weightUnit?: StringFieldUpdateOperationsInput | string
    manageStockLevels?: BoolFieldUpdateOperationsInput | boolean
    stockOnHand?: IntFieldUpdateOperationsInput | number
    boughtInPacks?: BoolFieldUpdateOperationsInput | boolean
    packSize?: IntFieldUpdateOperationsInput | number
    sellable?: BoolFieldUpdateOperationsInput | boolean
    buyable?: BoolFieldUpdateOperationsInput | boolean
    retailPrice?: IntFieldUpdateOperationsInput | number
    buyPrice?: IntFieldUpdateOperationsInput | number
    previousPrice?: NullableIntFieldUpdateOperationsInput | number | null
    movingAverageCost?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrls?: URIUpdateManyWithoutProductVariantNestedInput
    Product?: ProductUpdateOneRequiredWithoutVariantsNestedInput
  }

  export type ProductVariantUncheckedUpdateWithoutStocktakeLineInput = {
    id?: IntFieldUpdateOperationsInput | number
    guid?: NullableStringFieldUpdateOperationsInput | string | null
    filterValues?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: StringFieldUpdateOperationsInput | string
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    supplierCode?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: IntFieldUpdateOperationsInput | number
    weightUnit?: StringFieldUpdateOperationsInput | string
    manageStockLevels?: BoolFieldUpdateOperationsInput | boolean
    stockOnHand?: IntFieldUpdateOperationsInput | number
    boughtInPacks?: BoolFieldUpdateOperationsInput | boolean
    packSize?: IntFieldUpdateOperationsInput | number
    sellable?: BoolFieldUpdateOperationsInput | boolean
    buyable?: BoolFieldUpdateOperationsInput | boolean
    retailPrice?: IntFieldUpdateOperationsInput | number
    buyPrice?: IntFieldUpdateOperationsInput | number
    previousPrice?: NullableIntFieldUpdateOperationsInput | number | null
    movingAverageCost?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: IntFieldUpdateOperationsInput | number
    imageUrls?: URIUncheckedUpdateManyWithoutProductVariantNestedInput
  }

  export type StocktakeUpsertWithoutLinesInput = {
    update: XOR<StocktakeUpdateWithoutLinesInput, StocktakeUncheckedUpdateWithoutLinesInput>
    create: XOR<StocktakeCreateWithoutLinesInput, StocktakeUncheckedCreateWithoutLinesInput>
    where?: StocktakeWhereInput
  }

  export type StocktakeUpdateToOneWithWhereWithoutLinesInput = {
    where?: StocktakeWhereInput
    data: XOR<StocktakeUpdateWithoutLinesInput, StocktakeUncheckedUpdateWithoutLinesInput>
  }

  export type StocktakeUpdateWithoutLinesInput = {
    guid?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    applied?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StocktakeUncheckedUpdateWithoutLinesInput = {
    id?: IntFieldUpdateOperationsInput | number
    guid?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    applied?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductVariantCreateManyProductInput = {
    id?: number
    guid?: string | null
    filterValues?: string | null
    sku: string
    barcode?: string | null
    supplierCode?: string | null
    weight: number
    weightUnit: string
    manageStockLevels: boolean
    stockOnHand?: number
    boughtInPacks?: boolean
    packSize?: number
    sellable?: boolean
    buyable?: boolean
    retailPrice: number
    buyPrice: number
    previousPrice?: number | null
    movingAverageCost?: number
    notes?: string | null
  }

  export type ProductVariantUpdateWithoutProductInput = {
    guid?: NullableStringFieldUpdateOperationsInput | string | null
    filterValues?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: StringFieldUpdateOperationsInput | string
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    supplierCode?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: IntFieldUpdateOperationsInput | number
    weightUnit?: StringFieldUpdateOperationsInput | string
    manageStockLevels?: BoolFieldUpdateOperationsInput | boolean
    stockOnHand?: IntFieldUpdateOperationsInput | number
    boughtInPacks?: BoolFieldUpdateOperationsInput | boolean
    packSize?: IntFieldUpdateOperationsInput | number
    sellable?: BoolFieldUpdateOperationsInput | boolean
    buyable?: BoolFieldUpdateOperationsInput | boolean
    retailPrice?: IntFieldUpdateOperationsInput | number
    buyPrice?: IntFieldUpdateOperationsInput | number
    previousPrice?: NullableIntFieldUpdateOperationsInput | number | null
    movingAverageCost?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrls?: URIUpdateManyWithoutProductVariantNestedInput
    StocktakeLine?: StocktakeLineUpdateManyWithoutVariantNestedInput
  }

  export type ProductVariantUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    guid?: NullableStringFieldUpdateOperationsInput | string | null
    filterValues?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: StringFieldUpdateOperationsInput | string
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    supplierCode?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: IntFieldUpdateOperationsInput | number
    weightUnit?: StringFieldUpdateOperationsInput | string
    manageStockLevels?: BoolFieldUpdateOperationsInput | boolean
    stockOnHand?: IntFieldUpdateOperationsInput | number
    boughtInPacks?: BoolFieldUpdateOperationsInput | boolean
    packSize?: IntFieldUpdateOperationsInput | number
    sellable?: BoolFieldUpdateOperationsInput | boolean
    buyable?: BoolFieldUpdateOperationsInput | boolean
    retailPrice?: IntFieldUpdateOperationsInput | number
    buyPrice?: IntFieldUpdateOperationsInput | number
    previousPrice?: NullableIntFieldUpdateOperationsInput | number | null
    movingAverageCost?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrls?: URIUncheckedUpdateManyWithoutProductVariantNestedInput
    StocktakeLine?: StocktakeLineUncheckedUpdateManyWithoutVariantNestedInput
  }

  export type ProductVariantUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    guid?: NullableStringFieldUpdateOperationsInput | string | null
    filterValues?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: StringFieldUpdateOperationsInput | string
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    supplierCode?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: IntFieldUpdateOperationsInput | number
    weightUnit?: StringFieldUpdateOperationsInput | string
    manageStockLevels?: BoolFieldUpdateOperationsInput | boolean
    stockOnHand?: IntFieldUpdateOperationsInput | number
    boughtInPacks?: BoolFieldUpdateOperationsInput | boolean
    packSize?: IntFieldUpdateOperationsInput | number
    sellable?: BoolFieldUpdateOperationsInput | boolean
    buyable?: BoolFieldUpdateOperationsInput | boolean
    retailPrice?: IntFieldUpdateOperationsInput | number
    buyPrice?: IntFieldUpdateOperationsInput | number
    previousPrice?: NullableIntFieldUpdateOperationsInput | number | null
    movingAverageCost?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type URICreateManyProductVariantInput = {
    id?: number
    guid?: string | null
    uri: string
  }

  export type StocktakeLineCreateManyVariantInput = {
    id?: number
    guid?: string | null
    count?: number
    stockTakeId?: number | null
  }

  export type URIUpdateWithoutProductVariantInput = {
    guid?: NullableStringFieldUpdateOperationsInput | string | null
    uri?: StringFieldUpdateOperationsInput | string
  }

  export type URIUncheckedUpdateWithoutProductVariantInput = {
    id?: IntFieldUpdateOperationsInput | number
    guid?: NullableStringFieldUpdateOperationsInput | string | null
    uri?: StringFieldUpdateOperationsInput | string
  }

  export type URIUncheckedUpdateManyWithoutProductVariantInput = {
    id?: IntFieldUpdateOperationsInput | number
    guid?: NullableStringFieldUpdateOperationsInput | string | null
    uri?: StringFieldUpdateOperationsInput | string
  }

  export type StocktakeLineUpdateWithoutVariantInput = {
    guid?: NullableStringFieldUpdateOperationsInput | string | null
    count?: IntFieldUpdateOperationsInput | number
    StockTake?: StocktakeUpdateOneWithoutLinesNestedInput
  }

  export type StocktakeLineUncheckedUpdateWithoutVariantInput = {
    id?: IntFieldUpdateOperationsInput | number
    guid?: NullableStringFieldUpdateOperationsInput | string | null
    count?: IntFieldUpdateOperationsInput | number
    stockTakeId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type StocktakeLineUncheckedUpdateManyWithoutVariantInput = {
    id?: IntFieldUpdateOperationsInput | number
    guid?: NullableStringFieldUpdateOperationsInput | string | null
    count?: IntFieldUpdateOperationsInput | number
    stockTakeId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type StocktakeLineCreateManyStockTakeInput = {
    id?: number
    guid?: string | null
    count?: number
    productVariantId: number
  }

  export type StocktakeLineUpdateWithoutStockTakeInput = {
    guid?: NullableStringFieldUpdateOperationsInput | string | null
    count?: IntFieldUpdateOperationsInput | number
    variant?: ProductVariantUpdateOneRequiredWithoutStocktakeLineNestedInput
  }

  export type StocktakeLineUncheckedUpdateWithoutStockTakeInput = {
    id?: IntFieldUpdateOperationsInput | number
    guid?: NullableStringFieldUpdateOperationsInput | string | null
    count?: IntFieldUpdateOperationsInput | number
    productVariantId?: IntFieldUpdateOperationsInput | number
  }

  export type StocktakeLineUncheckedUpdateManyWithoutStockTakeInput = {
    id?: IntFieldUpdateOperationsInput | number
    guid?: NullableStringFieldUpdateOperationsInput | string | null
    count?: IntFieldUpdateOperationsInput | number
    productVariantId?: IntFieldUpdateOperationsInput | number
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
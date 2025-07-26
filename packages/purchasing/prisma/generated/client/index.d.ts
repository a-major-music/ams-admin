
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
 * Model Address
 * 
 */
export type Address = $Result.DefaultSelection<Prisma.$AddressPayload>
/**
 * Model Contact
 * 
 */
export type Contact = $Result.DefaultSelection<Prisma.$ContactPayload>
/**
 * Model Supplier
 * 
 */
export type Supplier = $Result.DefaultSelection<Prisma.$SupplierPayload>
/**
 * Model PurchaseOrder
 * 
 */
export type PurchaseOrder = $Result.DefaultSelection<Prisma.$PurchaseOrderPayload>
/**
 * Model PurchaseOrderLineItem
 * 
 */
export type PurchaseOrderLineItem = $Result.DefaultSelection<Prisma.$PurchaseOrderLineItemPayload>
/**
 * Model PurchaseOrderLineItemReceipt
 * 
 */
export type PurchaseOrderLineItemReceipt = $Result.DefaultSelection<Prisma.$PurchaseOrderLineItemReceiptPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Addresses
 * const addresses = await prisma.address.findMany()
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
   * // Fetch zero or more Addresses
   * const addresses = await prisma.address.findMany()
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
   * `prisma.address`: Exposes CRUD operations for the **Address** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addresses
    * const addresses = await prisma.address.findMany()
    * ```
    */
  get address(): Prisma.AddressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contact`: Exposes CRUD operations for the **Contact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contacts
    * const contacts = await prisma.contact.findMany()
    * ```
    */
  get contact(): Prisma.ContactDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.supplier`: Exposes CRUD operations for the **Supplier** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Suppliers
    * const suppliers = await prisma.supplier.findMany()
    * ```
    */
  get supplier(): Prisma.SupplierDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.purchaseOrder`: Exposes CRUD operations for the **PurchaseOrder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PurchaseOrders
    * const purchaseOrders = await prisma.purchaseOrder.findMany()
    * ```
    */
  get purchaseOrder(): Prisma.PurchaseOrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.purchaseOrderLineItem`: Exposes CRUD operations for the **PurchaseOrderLineItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PurchaseOrderLineItems
    * const purchaseOrderLineItems = await prisma.purchaseOrderLineItem.findMany()
    * ```
    */
  get purchaseOrderLineItem(): Prisma.PurchaseOrderLineItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.purchaseOrderLineItemReceipt`: Exposes CRUD operations for the **PurchaseOrderLineItemReceipt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PurchaseOrderLineItemReceipts
    * const purchaseOrderLineItemReceipts = await prisma.purchaseOrderLineItemReceipt.findMany()
    * ```
    */
  get purchaseOrderLineItemReceipt(): Prisma.PurchaseOrderLineItemReceiptDelegate<ExtArgs, ClientOptions>;
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
    Address: 'Address',
    Contact: 'Contact',
    Supplier: 'Supplier',
    PurchaseOrder: 'PurchaseOrder',
    PurchaseOrderLineItem: 'PurchaseOrderLineItem',
    PurchaseOrderLineItemReceipt: 'PurchaseOrderLineItemReceipt'
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
      modelProps: "address" | "contact" | "supplier" | "purchaseOrder" | "purchaseOrderLineItem" | "purchaseOrderLineItemReceipt"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Address: {
        payload: Prisma.$AddressPayload<ExtArgs>
        fields: Prisma.AddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AddressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AddressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findFirst: {
            args: Prisma.AddressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AddressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findMany: {
            args: Prisma.AddressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          create: {
            args: Prisma.AddressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          createMany: {
            args: Prisma.AddressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AddressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          delete: {
            args: Prisma.AddressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          update: {
            args: Prisma.AddressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          deleteMany: {
            args: Prisma.AddressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AddressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AddressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          upsert: {
            args: Prisma.AddressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          aggregate: {
            args: Prisma.AddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddress>
          }
          groupBy: {
            args: Prisma.AddressGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.AddressCountArgs<ExtArgs>
            result: $Utils.Optional<AddressCountAggregateOutputType> | number
          }
        }
      }
      Contact: {
        payload: Prisma.$ContactPayload<ExtArgs>
        fields: Prisma.ContactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          findFirst: {
            args: Prisma.ContactFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          findMany: {
            args: Prisma.ContactFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          create: {
            args: Prisma.ContactCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          createMany: {
            args: Prisma.ContactCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          delete: {
            args: Prisma.ContactDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          update: {
            args: Prisma.ContactUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          deleteMany: {
            args: Prisma.ContactDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          upsert: {
            args: Prisma.ContactUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          aggregate: {
            args: Prisma.ContactAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContact>
          }
          groupBy: {
            args: Prisma.ContactGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactCountArgs<ExtArgs>
            result: $Utils.Optional<ContactCountAggregateOutputType> | number
          }
        }
      }
      Supplier: {
        payload: Prisma.$SupplierPayload<ExtArgs>
        fields: Prisma.SupplierFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SupplierFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SupplierFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          findFirst: {
            args: Prisma.SupplierFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SupplierFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          findMany: {
            args: Prisma.SupplierFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>[]
          }
          create: {
            args: Prisma.SupplierCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          createMany: {
            args: Prisma.SupplierCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SupplierCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>[]
          }
          delete: {
            args: Prisma.SupplierDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          update: {
            args: Prisma.SupplierUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          deleteMany: {
            args: Prisma.SupplierDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SupplierUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SupplierUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>[]
          }
          upsert: {
            args: Prisma.SupplierUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          aggregate: {
            args: Prisma.SupplierAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupplier>
          }
          groupBy: {
            args: Prisma.SupplierGroupByArgs<ExtArgs>
            result: $Utils.Optional<SupplierGroupByOutputType>[]
          }
          count: {
            args: Prisma.SupplierCountArgs<ExtArgs>
            result: $Utils.Optional<SupplierCountAggregateOutputType> | number
          }
        }
      }
      PurchaseOrder: {
        payload: Prisma.$PurchaseOrderPayload<ExtArgs>
        fields: Prisma.PurchaseOrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PurchaseOrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PurchaseOrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>
          }
          findFirst: {
            args: Prisma.PurchaseOrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PurchaseOrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>
          }
          findMany: {
            args: Prisma.PurchaseOrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>[]
          }
          create: {
            args: Prisma.PurchaseOrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>
          }
          createMany: {
            args: Prisma.PurchaseOrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PurchaseOrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>[]
          }
          delete: {
            args: Prisma.PurchaseOrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>
          }
          update: {
            args: Prisma.PurchaseOrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>
          }
          deleteMany: {
            args: Prisma.PurchaseOrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PurchaseOrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PurchaseOrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>[]
          }
          upsert: {
            args: Prisma.PurchaseOrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>
          }
          aggregate: {
            args: Prisma.PurchaseOrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePurchaseOrder>
          }
          groupBy: {
            args: Prisma.PurchaseOrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<PurchaseOrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.PurchaseOrderCountArgs<ExtArgs>
            result: $Utils.Optional<PurchaseOrderCountAggregateOutputType> | number
          }
        }
      }
      PurchaseOrderLineItem: {
        payload: Prisma.$PurchaseOrderLineItemPayload<ExtArgs>
        fields: Prisma.PurchaseOrderLineItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PurchaseOrderLineItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderLineItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PurchaseOrderLineItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderLineItemPayload>
          }
          findFirst: {
            args: Prisma.PurchaseOrderLineItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderLineItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PurchaseOrderLineItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderLineItemPayload>
          }
          findMany: {
            args: Prisma.PurchaseOrderLineItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderLineItemPayload>[]
          }
          create: {
            args: Prisma.PurchaseOrderLineItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderLineItemPayload>
          }
          createMany: {
            args: Prisma.PurchaseOrderLineItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PurchaseOrderLineItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderLineItemPayload>[]
          }
          delete: {
            args: Prisma.PurchaseOrderLineItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderLineItemPayload>
          }
          update: {
            args: Prisma.PurchaseOrderLineItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderLineItemPayload>
          }
          deleteMany: {
            args: Prisma.PurchaseOrderLineItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PurchaseOrderLineItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PurchaseOrderLineItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderLineItemPayload>[]
          }
          upsert: {
            args: Prisma.PurchaseOrderLineItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderLineItemPayload>
          }
          aggregate: {
            args: Prisma.PurchaseOrderLineItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePurchaseOrderLineItem>
          }
          groupBy: {
            args: Prisma.PurchaseOrderLineItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<PurchaseOrderLineItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.PurchaseOrderLineItemCountArgs<ExtArgs>
            result: $Utils.Optional<PurchaseOrderLineItemCountAggregateOutputType> | number
          }
        }
      }
      PurchaseOrderLineItemReceipt: {
        payload: Prisma.$PurchaseOrderLineItemReceiptPayload<ExtArgs>
        fields: Prisma.PurchaseOrderLineItemReceiptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PurchaseOrderLineItemReceiptFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderLineItemReceiptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PurchaseOrderLineItemReceiptFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderLineItemReceiptPayload>
          }
          findFirst: {
            args: Prisma.PurchaseOrderLineItemReceiptFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderLineItemReceiptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PurchaseOrderLineItemReceiptFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderLineItemReceiptPayload>
          }
          findMany: {
            args: Prisma.PurchaseOrderLineItemReceiptFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderLineItemReceiptPayload>[]
          }
          create: {
            args: Prisma.PurchaseOrderLineItemReceiptCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderLineItemReceiptPayload>
          }
          createMany: {
            args: Prisma.PurchaseOrderLineItemReceiptCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PurchaseOrderLineItemReceiptCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderLineItemReceiptPayload>[]
          }
          delete: {
            args: Prisma.PurchaseOrderLineItemReceiptDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderLineItemReceiptPayload>
          }
          update: {
            args: Prisma.PurchaseOrderLineItemReceiptUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderLineItemReceiptPayload>
          }
          deleteMany: {
            args: Prisma.PurchaseOrderLineItemReceiptDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PurchaseOrderLineItemReceiptUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PurchaseOrderLineItemReceiptUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderLineItemReceiptPayload>[]
          }
          upsert: {
            args: Prisma.PurchaseOrderLineItemReceiptUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderLineItemReceiptPayload>
          }
          aggregate: {
            args: Prisma.PurchaseOrderLineItemReceiptAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePurchaseOrderLineItemReceipt>
          }
          groupBy: {
            args: Prisma.PurchaseOrderLineItemReceiptGroupByArgs<ExtArgs>
            result: $Utils.Optional<PurchaseOrderLineItemReceiptGroupByOutputType>[]
          }
          count: {
            args: Prisma.PurchaseOrderLineItemReceiptCountArgs<ExtArgs>
            result: $Utils.Optional<PurchaseOrderLineItemReceiptCountAggregateOutputType> | number
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
    address?: AddressOmit
    contact?: ContactOmit
    supplier?: SupplierOmit
    purchaseOrder?: PurchaseOrderOmit
    purchaseOrderLineItem?: PurchaseOrderLineItemOmit
    purchaseOrderLineItemReceipt?: PurchaseOrderLineItemReceiptOmit
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
   * Count Type SupplierCountOutputType
   */

  export type SupplierCountOutputType = {
    contacts: number
    purchaseOrders: number
  }

  export type SupplierCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contacts?: boolean | SupplierCountOutputTypeCountContactsArgs
    purchaseOrders?: boolean | SupplierCountOutputTypeCountPurchaseOrdersArgs
  }

  // Custom InputTypes
  /**
   * SupplierCountOutputType without action
   */
  export type SupplierCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierCountOutputType
     */
    select?: SupplierCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SupplierCountOutputType without action
   */
  export type SupplierCountOutputTypeCountContactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactWhereInput
  }

  /**
   * SupplierCountOutputType without action
   */
  export type SupplierCountOutputTypeCountPurchaseOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseOrderWhereInput
  }


  /**
   * Count Type PurchaseOrderCountOutputType
   */

  export type PurchaseOrderCountOutputType = {
    lineItems: number
  }

  export type PurchaseOrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lineItems?: boolean | PurchaseOrderCountOutputTypeCountLineItemsArgs
  }

  // Custom InputTypes
  /**
   * PurchaseOrderCountOutputType without action
   */
  export type PurchaseOrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrderCountOutputType
     */
    select?: PurchaseOrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PurchaseOrderCountOutputType without action
   */
  export type PurchaseOrderCountOutputTypeCountLineItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseOrderLineItemWhereInput
  }


  /**
   * Count Type PurchaseOrderLineItemCountOutputType
   */

  export type PurchaseOrderLineItemCountOutputType = {
    receipts: number
  }

  export type PurchaseOrderLineItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receipts?: boolean | PurchaseOrderLineItemCountOutputTypeCountReceiptsArgs
  }

  // Custom InputTypes
  /**
   * PurchaseOrderLineItemCountOutputType without action
   */
  export type PurchaseOrderLineItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrderLineItemCountOutputType
     */
    select?: PurchaseOrderLineItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PurchaseOrderLineItemCountOutputType without action
   */
  export type PurchaseOrderLineItemCountOutputTypeCountReceiptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseOrderLineItemReceiptWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Address
   */

  export type AggregateAddress = {
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  export type AddressAvgAggregateOutputType = {
    id: number | null
    supplierId: number | null
  }

  export type AddressSumAggregateOutputType = {
    id: number | null
    supplierId: number | null
  }

  export type AddressMinAggregateOutputType = {
    id: number | null
    guid: string | null
    address1: string | null
    address2: string | null
    address3: string | null
    city: string | null
    postcode: string | null
    supplierId: number | null
  }

  export type AddressMaxAggregateOutputType = {
    id: number | null
    guid: string | null
    address1: string | null
    address2: string | null
    address3: string | null
    city: string | null
    postcode: string | null
    supplierId: number | null
  }

  export type AddressCountAggregateOutputType = {
    id: number
    guid: number
    address1: number
    address2: number
    address3: number
    city: number
    postcode: number
    supplierId: number
    _all: number
  }


  export type AddressAvgAggregateInputType = {
    id?: true
    supplierId?: true
  }

  export type AddressSumAggregateInputType = {
    id?: true
    supplierId?: true
  }

  export type AddressMinAggregateInputType = {
    id?: true
    guid?: true
    address1?: true
    address2?: true
    address3?: true
    city?: true
    postcode?: true
    supplierId?: true
  }

  export type AddressMaxAggregateInputType = {
    id?: true
    guid?: true
    address1?: true
    address2?: true
    address3?: true
    city?: true
    postcode?: true
    supplierId?: true
  }

  export type AddressCountAggregateInputType = {
    id?: true
    guid?: true
    address1?: true
    address2?: true
    address3?: true
    city?: true
    postcode?: true
    supplierId?: true
    _all?: true
  }

  export type AddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Address to aggregate.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Addresses
    **/
    _count?: true | AddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AddressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AddressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressMaxAggregateInputType
  }

  export type GetAddressAggregateType<T extends AddressAggregateArgs> = {
        [P in keyof T & keyof AggregateAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddress[P]>
      : GetScalarType<T[P], AggregateAddress[P]>
  }




  export type AddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput
    orderBy?: AddressOrderByWithAggregationInput | AddressOrderByWithAggregationInput[]
    by: AddressScalarFieldEnum[] | AddressScalarFieldEnum
    having?: AddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressCountAggregateInputType | true
    _avg?: AddressAvgAggregateInputType
    _sum?: AddressSumAggregateInputType
    _min?: AddressMinAggregateInputType
    _max?: AddressMaxAggregateInputType
  }

  export type AddressGroupByOutputType = {
    id: number
    guid: string
    address1: string
    address2: string | null
    address3: string | null
    city: string | null
    postcode: string | null
    supplierId: number
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  type GetAddressGroupByPayload<T extends AddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressGroupByOutputType[P]>
            : GetScalarType<T[P], AddressGroupByOutputType[P]>
        }
      >
    >


  export type AddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guid?: boolean
    address1?: boolean
    address2?: boolean
    address3?: boolean
    city?: boolean
    postcode?: boolean
    supplierId?: boolean
    supplier?: boolean | Address$supplierArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guid?: boolean
    address1?: boolean
    address2?: boolean
    address3?: boolean
    city?: boolean
    postcode?: boolean
    supplierId?: boolean
    supplier?: boolean | Address$supplierArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guid?: boolean
    address1?: boolean
    address2?: boolean
    address3?: boolean
    city?: boolean
    postcode?: boolean
    supplierId?: boolean
    supplier?: boolean | Address$supplierArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectScalar = {
    id?: boolean
    guid?: boolean
    address1?: boolean
    address2?: boolean
    address3?: boolean
    city?: boolean
    postcode?: boolean
    supplierId?: boolean
  }

  export type AddressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "guid" | "address1" | "address2" | "address3" | "city" | "postcode" | "supplierId", ExtArgs["result"]["address"]>
  export type AddressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplier?: boolean | Address$supplierArgs<ExtArgs>
  }
  export type AddressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplier?: boolean | Address$supplierArgs<ExtArgs>
  }
  export type AddressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplier?: boolean | Address$supplierArgs<ExtArgs>
  }

  export type $AddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Address"
    objects: {
      supplier: Prisma.$SupplierPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      guid: string
      address1: string
      address2: string | null
      address3: string | null
      city: string | null
      postcode: string | null
      supplierId: number
    }, ExtArgs["result"]["address"]>
    composites: {}
  }

  type AddressGetPayload<S extends boolean | null | undefined | AddressDefaultArgs> = $Result.GetResult<Prisma.$AddressPayload, S>

  type AddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AddressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AddressCountAggregateInputType | true
    }

  export interface AddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Address'], meta: { name: 'Address' } }
    /**
     * Find zero or one Address that matches the filter.
     * @param {AddressFindUniqueArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AddressFindUniqueArgs>(args: SelectSubset<T, AddressFindUniqueArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Address that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AddressFindUniqueOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AddressFindUniqueOrThrowArgs>(args: SelectSubset<T, AddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AddressFindFirstArgs>(args?: SelectSubset<T, AddressFindFirstArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AddressFindFirstOrThrowArgs>(args?: SelectSubset<T, AddressFindFirstOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.address.findMany()
     * 
     * // Get first 10 Addresses
     * const addresses = await prisma.address.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addressWithIdOnly = await prisma.address.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AddressFindManyArgs>(args?: SelectSubset<T, AddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Address.
     * @param {AddressCreateArgs} args - Arguments to create a Address.
     * @example
     * // Create one Address
     * const Address = await prisma.address.create({
     *   data: {
     *     // ... data to create a Address
     *   }
     * })
     * 
     */
    create<T extends AddressCreateArgs>(args: SelectSubset<T, AddressCreateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Addresses.
     * @param {AddressCreateManyArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AddressCreateManyArgs>(args?: SelectSubset<T, AddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Addresses and returns the data saved in the database.
     * @param {AddressCreateManyAndReturnArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Addresses and only return the `id`
     * const addressWithIdOnly = await prisma.address.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AddressCreateManyAndReturnArgs>(args?: SelectSubset<T, AddressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Address.
     * @param {AddressDeleteArgs} args - Arguments to delete one Address.
     * @example
     * // Delete one Address
     * const Address = await prisma.address.delete({
     *   where: {
     *     // ... filter to delete one Address
     *   }
     * })
     * 
     */
    delete<T extends AddressDeleteArgs>(args: SelectSubset<T, AddressDeleteArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Address.
     * @param {AddressUpdateArgs} args - Arguments to update one Address.
     * @example
     * // Update one Address
     * const address = await prisma.address.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AddressUpdateArgs>(args: SelectSubset<T, AddressUpdateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Addresses.
     * @param {AddressDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.address.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AddressDeleteManyArgs>(args?: SelectSubset<T, AddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AddressUpdateManyArgs>(args: SelectSubset<T, AddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses and returns the data updated in the database.
     * @param {AddressUpdateManyAndReturnArgs} args - Arguments to update many Addresses.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Addresses and only return the `id`
     * const addressWithIdOnly = await prisma.address.updateManyAndReturn({
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
    updateManyAndReturn<T extends AddressUpdateManyAndReturnArgs>(args: SelectSubset<T, AddressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Address.
     * @param {AddressUpsertArgs} args - Arguments to update or create a Address.
     * @example
     * // Update or create a Address
     * const address = await prisma.address.upsert({
     *   create: {
     *     // ... data to create a Address
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Address we want to update
     *   }
     * })
     */
    upsert<T extends AddressUpsertArgs>(args: SelectSubset<T, AddressUpsertArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.address.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
    **/
    count<T extends AddressCountArgs>(
      args?: Subset<T, AddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AddressAggregateArgs>(args: Subset<T, AddressAggregateArgs>): Prisma.PrismaPromise<GetAddressAggregateType<T>>

    /**
     * Group by Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressGroupByArgs} args - Group by arguments.
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
      T extends AddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddressGroupByArgs['orderBy'] }
        : { orderBy?: AddressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Address model
   */
  readonly fields: AddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Address.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    supplier<T extends Address$supplierArgs<ExtArgs> = {}>(args?: Subset<T, Address$supplierArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Address model
   */
  interface AddressFieldRefs {
    readonly id: FieldRef<"Address", 'Int'>
    readonly guid: FieldRef<"Address", 'String'>
    readonly address1: FieldRef<"Address", 'String'>
    readonly address2: FieldRef<"Address", 'String'>
    readonly address3: FieldRef<"Address", 'String'>
    readonly city: FieldRef<"Address", 'String'>
    readonly postcode: FieldRef<"Address", 'String'>
    readonly supplierId: FieldRef<"Address", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Address findUnique
   */
  export type AddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findUniqueOrThrow
   */
  export type AddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findFirst
   */
  export type AddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findFirstOrThrow
   */
  export type AddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findMany
   */
  export type AddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Addresses to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address create
   */
  export type AddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to create a Address.
     */
    data: XOR<AddressCreateInput, AddressUncheckedCreateInput>
  }

  /**
   * Address createMany
   */
  export type AddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Address createManyAndReturn
   */
  export type AddressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Address update
   */
  export type AddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to update a Address.
     */
    data: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
    /**
     * Choose, which Address to update.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address updateMany
   */
  export type AddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
  }

  /**
   * Address updateManyAndReturn
   */
  export type AddressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Address upsert
   */
  export type AddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The filter to search for the Address to update in case it exists.
     */
    where: AddressWhereUniqueInput
    /**
     * In case the Address found by the `where` argument doesn't exist, create a new Address with this data.
     */
    create: XOR<AddressCreateInput, AddressUncheckedCreateInput>
    /**
     * In case the Address was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
  }

  /**
   * Address delete
   */
  export type AddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter which Address to delete.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address deleteMany
   */
  export type AddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Addresses to delete
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to delete.
     */
    limit?: number
  }

  /**
   * Address.supplier
   */
  export type Address$supplierArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    where?: SupplierWhereInput
  }

  /**
   * Address without action
   */
  export type AddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
  }


  /**
   * Model Contact
   */

  export type AggregateContact = {
    _count: ContactCountAggregateOutputType | null
    _avg: ContactAvgAggregateOutputType | null
    _sum: ContactSumAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  export type ContactAvgAggregateOutputType = {
    id: number | null
    supplierId: number | null
  }

  export type ContactSumAggregateOutputType = {
    id: number | null
    supplierId: number | null
  }

  export type ContactMinAggregateOutputType = {
    id: number | null
    guid: string | null
    name: string | null
    email: string | null
    phone: string | null
    supplierId: number | null
  }

  export type ContactMaxAggregateOutputType = {
    id: number | null
    guid: string | null
    name: string | null
    email: string | null
    phone: string | null
    supplierId: number | null
  }

  export type ContactCountAggregateOutputType = {
    id: number
    guid: number
    name: number
    email: number
    phone: number
    supplierId: number
    _all: number
  }


  export type ContactAvgAggregateInputType = {
    id?: true
    supplierId?: true
  }

  export type ContactSumAggregateInputType = {
    id?: true
    supplierId?: true
  }

  export type ContactMinAggregateInputType = {
    id?: true
    guid?: true
    name?: true
    email?: true
    phone?: true
    supplierId?: true
  }

  export type ContactMaxAggregateInputType = {
    id?: true
    guid?: true
    name?: true
    email?: true
    phone?: true
    supplierId?: true
  }

  export type ContactCountAggregateInputType = {
    id?: true
    guid?: true
    name?: true
    email?: true
    phone?: true
    supplierId?: true
    _all?: true
  }

  export type ContactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contact to aggregate.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contacts
    **/
    _count?: true | ContactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContactAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContactSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactMaxAggregateInputType
  }

  export type GetContactAggregateType<T extends ContactAggregateArgs> = {
        [P in keyof T & keyof AggregateContact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContact[P]>
      : GetScalarType<T[P], AggregateContact[P]>
  }




  export type ContactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactWhereInput
    orderBy?: ContactOrderByWithAggregationInput | ContactOrderByWithAggregationInput[]
    by: ContactScalarFieldEnum[] | ContactScalarFieldEnum
    having?: ContactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactCountAggregateInputType | true
    _avg?: ContactAvgAggregateInputType
    _sum?: ContactSumAggregateInputType
    _min?: ContactMinAggregateInputType
    _max?: ContactMaxAggregateInputType
  }

  export type ContactGroupByOutputType = {
    id: number
    guid: string
    name: string
    email: string | null
    phone: string | null
    supplierId: number
    _count: ContactCountAggregateOutputType | null
    _avg: ContactAvgAggregateOutputType | null
    _sum: ContactSumAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  type GetContactGroupByPayload<T extends ContactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactGroupByOutputType[P]>
            : GetScalarType<T[P], ContactGroupByOutputType[P]>
        }
      >
    >


  export type ContactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guid?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    supplierId?: boolean
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guid?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    supplierId?: boolean
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guid?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    supplierId?: boolean
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectScalar = {
    id?: boolean
    guid?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    supplierId?: boolean
  }

  export type ContactOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "guid" | "name" | "email" | "phone" | "supplierId", ExtArgs["result"]["contact"]>
  export type ContactInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }
  export type ContactIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }
  export type ContactIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }

  export type $ContactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contact"
    objects: {
      supplier: Prisma.$SupplierPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      guid: string
      name: string
      email: string | null
      phone: string | null
      supplierId: number
    }, ExtArgs["result"]["contact"]>
    composites: {}
  }

  type ContactGetPayload<S extends boolean | null | undefined | ContactDefaultArgs> = $Result.GetResult<Prisma.$ContactPayload, S>

  type ContactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactCountAggregateInputType | true
    }

  export interface ContactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contact'], meta: { name: 'Contact' } }
    /**
     * Find zero or one Contact that matches the filter.
     * @param {ContactFindUniqueArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactFindUniqueArgs>(args: SelectSubset<T, ContactFindUniqueArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contact that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactFindUniqueOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactFindFirstArgs>(args?: SelectSubset<T, ContactFindFirstArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contacts
     * const contacts = await prisma.contact.findMany()
     * 
     * // Get first 10 Contacts
     * const contacts = await prisma.contact.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactWithIdOnly = await prisma.contact.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactFindManyArgs>(args?: SelectSubset<T, ContactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contact.
     * @param {ContactCreateArgs} args - Arguments to create a Contact.
     * @example
     * // Create one Contact
     * const Contact = await prisma.contact.create({
     *   data: {
     *     // ... data to create a Contact
     *   }
     * })
     * 
     */
    create<T extends ContactCreateArgs>(args: SelectSubset<T, ContactCreateArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contacts.
     * @param {ContactCreateManyArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contact = await prisma.contact.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactCreateManyArgs>(args?: SelectSubset<T, ContactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contacts and returns the data saved in the database.
     * @param {ContactCreateManyAndReturnArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contact = await prisma.contact.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contacts and only return the `id`
     * const contactWithIdOnly = await prisma.contact.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Contact.
     * @param {ContactDeleteArgs} args - Arguments to delete one Contact.
     * @example
     * // Delete one Contact
     * const Contact = await prisma.contact.delete({
     *   where: {
     *     // ... filter to delete one Contact
     *   }
     * })
     * 
     */
    delete<T extends ContactDeleteArgs>(args: SelectSubset<T, ContactDeleteArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contact.
     * @param {ContactUpdateArgs} args - Arguments to update one Contact.
     * @example
     * // Update one Contact
     * const contact = await prisma.contact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactUpdateArgs>(args: SelectSubset<T, ContactUpdateArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contacts.
     * @param {ContactDeleteManyArgs} args - Arguments to filter Contacts to delete.
     * @example
     * // Delete a few Contacts
     * const { count } = await prisma.contact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactDeleteManyArgs>(args?: SelectSubset<T, ContactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contacts
     * const contact = await prisma.contact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactUpdateManyArgs>(args: SelectSubset<T, ContactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts and returns the data updated in the database.
     * @param {ContactUpdateManyAndReturnArgs} args - Arguments to update many Contacts.
     * @example
     * // Update many Contacts
     * const contact = await prisma.contact.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contacts and only return the `id`
     * const contactWithIdOnly = await prisma.contact.updateManyAndReturn({
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
    updateManyAndReturn<T extends ContactUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Contact.
     * @param {ContactUpsertArgs} args - Arguments to update or create a Contact.
     * @example
     * // Update or create a Contact
     * const contact = await prisma.contact.upsert({
     *   create: {
     *     // ... data to create a Contact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contact we want to update
     *   }
     * })
     */
    upsert<T extends ContactUpsertArgs>(args: SelectSubset<T, ContactUpsertArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactCountArgs} args - Arguments to filter Contacts to count.
     * @example
     * // Count the number of Contacts
     * const count = await prisma.contact.count({
     *   where: {
     *     // ... the filter for the Contacts we want to count
     *   }
     * })
    **/
    count<T extends ContactCountArgs>(
      args?: Subset<T, ContactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContactAggregateArgs>(args: Subset<T, ContactAggregateArgs>): Prisma.PrismaPromise<GetContactAggregateType<T>>

    /**
     * Group by Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactGroupByArgs} args - Group by arguments.
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
      T extends ContactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactGroupByArgs['orderBy'] }
        : { orderBy?: ContactGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contact model
   */
  readonly fields: ContactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    supplier<T extends SupplierDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SupplierDefaultArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Contact model
   */
  interface ContactFieldRefs {
    readonly id: FieldRef<"Contact", 'Int'>
    readonly guid: FieldRef<"Contact", 'String'>
    readonly name: FieldRef<"Contact", 'String'>
    readonly email: FieldRef<"Contact", 'String'>
    readonly phone: FieldRef<"Contact", 'String'>
    readonly supplierId: FieldRef<"Contact", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Contact findUnique
   */
  export type ContactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact findUniqueOrThrow
   */
  export type ContactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact findFirst
   */
  export type ContactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact findFirstOrThrow
   */
  export type ContactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact findMany
   */
  export type ContactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contacts to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact create
   */
  export type ContactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * The data needed to create a Contact.
     */
    data: XOR<ContactCreateInput, ContactUncheckedCreateInput>
  }

  /**
   * Contact createMany
   */
  export type ContactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contacts.
     */
    data: ContactCreateManyInput | ContactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contact createManyAndReturn
   */
  export type ContactCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data used to create many Contacts.
     */
    data: ContactCreateManyInput | ContactCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contact update
   */
  export type ContactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * The data needed to update a Contact.
     */
    data: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
    /**
     * Choose, which Contact to update.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact updateMany
   */
  export type ContactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to update.
     */
    limit?: number
  }

  /**
   * Contact updateManyAndReturn
   */
  export type ContactUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contact upsert
   */
  export type ContactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * The filter to search for the Contact to update in case it exists.
     */
    where: ContactWhereUniqueInput
    /**
     * In case the Contact found by the `where` argument doesn't exist, create a new Contact with this data.
     */
    create: XOR<ContactCreateInput, ContactUncheckedCreateInput>
    /**
     * In case the Contact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
  }

  /**
   * Contact delete
   */
  export type ContactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter which Contact to delete.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact deleteMany
   */
  export type ContactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contacts to delete
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to delete.
     */
    limit?: number
  }

  /**
   * Contact without action
   */
  export type ContactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
  }


  /**
   * Model Supplier
   */

  export type AggregateSupplier = {
    _count: SupplierCountAggregateOutputType | null
    _avg: SupplierAvgAggregateOutputType | null
    _sum: SupplierSumAggregateOutputType | null
    _min: SupplierMinAggregateOutputType | null
    _max: SupplierMaxAggregateOutputType | null
  }

  export type SupplierAvgAggregateOutputType = {
    id: number | null
  }

  export type SupplierSumAggregateOutputType = {
    id: number | null
  }

  export type SupplierMinAggregateOutputType = {
    id: number | null
    guid: string | null
    name: string | null
    website: string | null
  }

  export type SupplierMaxAggregateOutputType = {
    id: number | null
    guid: string | null
    name: string | null
    website: string | null
  }

  export type SupplierCountAggregateOutputType = {
    id: number
    guid: number
    name: number
    website: number
    _all: number
  }


  export type SupplierAvgAggregateInputType = {
    id?: true
  }

  export type SupplierSumAggregateInputType = {
    id?: true
  }

  export type SupplierMinAggregateInputType = {
    id?: true
    guid?: true
    name?: true
    website?: true
  }

  export type SupplierMaxAggregateInputType = {
    id?: true
    guid?: true
    name?: true
    website?: true
  }

  export type SupplierCountAggregateInputType = {
    id?: true
    guid?: true
    name?: true
    website?: true
    _all?: true
  }

  export type SupplierAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Supplier to aggregate.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Suppliers
    **/
    _count?: true | SupplierCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SupplierAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SupplierSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupplierMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupplierMaxAggregateInputType
  }

  export type GetSupplierAggregateType<T extends SupplierAggregateArgs> = {
        [P in keyof T & keyof AggregateSupplier]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupplier[P]>
      : GetScalarType<T[P], AggregateSupplier[P]>
  }




  export type SupplierGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupplierWhereInput
    orderBy?: SupplierOrderByWithAggregationInput | SupplierOrderByWithAggregationInput[]
    by: SupplierScalarFieldEnum[] | SupplierScalarFieldEnum
    having?: SupplierScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupplierCountAggregateInputType | true
    _avg?: SupplierAvgAggregateInputType
    _sum?: SupplierSumAggregateInputType
    _min?: SupplierMinAggregateInputType
    _max?: SupplierMaxAggregateInputType
  }

  export type SupplierGroupByOutputType = {
    id: number
    guid: string
    name: string
    website: string | null
    _count: SupplierCountAggregateOutputType | null
    _avg: SupplierAvgAggregateOutputType | null
    _sum: SupplierSumAggregateOutputType | null
    _min: SupplierMinAggregateOutputType | null
    _max: SupplierMaxAggregateOutputType | null
  }

  type GetSupplierGroupByPayload<T extends SupplierGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupplierGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupplierGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupplierGroupByOutputType[P]>
            : GetScalarType<T[P], SupplierGroupByOutputType[P]>
        }
      >
    >


  export type SupplierSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guid?: boolean
    name?: boolean
    website?: boolean
    address?: boolean | Supplier$addressArgs<ExtArgs>
    contacts?: boolean | Supplier$contactsArgs<ExtArgs>
    purchaseOrders?: boolean | Supplier$purchaseOrdersArgs<ExtArgs>
    _count?: boolean | SupplierCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supplier"]>

  export type SupplierSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guid?: boolean
    name?: boolean
    website?: boolean
  }, ExtArgs["result"]["supplier"]>

  export type SupplierSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guid?: boolean
    name?: boolean
    website?: boolean
  }, ExtArgs["result"]["supplier"]>

  export type SupplierSelectScalar = {
    id?: boolean
    guid?: boolean
    name?: boolean
    website?: boolean
  }

  export type SupplierOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "guid" | "name" | "website", ExtArgs["result"]["supplier"]>
  export type SupplierInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    address?: boolean | Supplier$addressArgs<ExtArgs>
    contacts?: boolean | Supplier$contactsArgs<ExtArgs>
    purchaseOrders?: boolean | Supplier$purchaseOrdersArgs<ExtArgs>
    _count?: boolean | SupplierCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SupplierIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SupplierIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SupplierPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Supplier"
    objects: {
      address: Prisma.$AddressPayload<ExtArgs> | null
      contacts: Prisma.$ContactPayload<ExtArgs>[]
      purchaseOrders: Prisma.$PurchaseOrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      guid: string
      name: string
      website: string | null
    }, ExtArgs["result"]["supplier"]>
    composites: {}
  }

  type SupplierGetPayload<S extends boolean | null | undefined | SupplierDefaultArgs> = $Result.GetResult<Prisma.$SupplierPayload, S>

  type SupplierCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SupplierFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SupplierCountAggregateInputType | true
    }

  export interface SupplierDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Supplier'], meta: { name: 'Supplier' } }
    /**
     * Find zero or one Supplier that matches the filter.
     * @param {SupplierFindUniqueArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SupplierFindUniqueArgs>(args: SelectSubset<T, SupplierFindUniqueArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Supplier that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SupplierFindUniqueOrThrowArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SupplierFindUniqueOrThrowArgs>(args: SelectSubset<T, SupplierFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Supplier that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindFirstArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SupplierFindFirstArgs>(args?: SelectSubset<T, SupplierFindFirstArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Supplier that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindFirstOrThrowArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SupplierFindFirstOrThrowArgs>(args?: SelectSubset<T, SupplierFindFirstOrThrowArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Suppliers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Suppliers
     * const suppliers = await prisma.supplier.findMany()
     * 
     * // Get first 10 Suppliers
     * const suppliers = await prisma.supplier.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const supplierWithIdOnly = await prisma.supplier.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SupplierFindManyArgs>(args?: SelectSubset<T, SupplierFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Supplier.
     * @param {SupplierCreateArgs} args - Arguments to create a Supplier.
     * @example
     * // Create one Supplier
     * const Supplier = await prisma.supplier.create({
     *   data: {
     *     // ... data to create a Supplier
     *   }
     * })
     * 
     */
    create<T extends SupplierCreateArgs>(args: SelectSubset<T, SupplierCreateArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Suppliers.
     * @param {SupplierCreateManyArgs} args - Arguments to create many Suppliers.
     * @example
     * // Create many Suppliers
     * const supplier = await prisma.supplier.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SupplierCreateManyArgs>(args?: SelectSubset<T, SupplierCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Suppliers and returns the data saved in the database.
     * @param {SupplierCreateManyAndReturnArgs} args - Arguments to create many Suppliers.
     * @example
     * // Create many Suppliers
     * const supplier = await prisma.supplier.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Suppliers and only return the `id`
     * const supplierWithIdOnly = await prisma.supplier.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SupplierCreateManyAndReturnArgs>(args?: SelectSubset<T, SupplierCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Supplier.
     * @param {SupplierDeleteArgs} args - Arguments to delete one Supplier.
     * @example
     * // Delete one Supplier
     * const Supplier = await prisma.supplier.delete({
     *   where: {
     *     // ... filter to delete one Supplier
     *   }
     * })
     * 
     */
    delete<T extends SupplierDeleteArgs>(args: SelectSubset<T, SupplierDeleteArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Supplier.
     * @param {SupplierUpdateArgs} args - Arguments to update one Supplier.
     * @example
     * // Update one Supplier
     * const supplier = await prisma.supplier.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SupplierUpdateArgs>(args: SelectSubset<T, SupplierUpdateArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Suppliers.
     * @param {SupplierDeleteManyArgs} args - Arguments to filter Suppliers to delete.
     * @example
     * // Delete a few Suppliers
     * const { count } = await prisma.supplier.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SupplierDeleteManyArgs>(args?: SelectSubset<T, SupplierDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Suppliers
     * const supplier = await prisma.supplier.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SupplierUpdateManyArgs>(args: SelectSubset<T, SupplierUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suppliers and returns the data updated in the database.
     * @param {SupplierUpdateManyAndReturnArgs} args - Arguments to update many Suppliers.
     * @example
     * // Update many Suppliers
     * const supplier = await prisma.supplier.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Suppliers and only return the `id`
     * const supplierWithIdOnly = await prisma.supplier.updateManyAndReturn({
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
    updateManyAndReturn<T extends SupplierUpdateManyAndReturnArgs>(args: SelectSubset<T, SupplierUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Supplier.
     * @param {SupplierUpsertArgs} args - Arguments to update or create a Supplier.
     * @example
     * // Update or create a Supplier
     * const supplier = await prisma.supplier.upsert({
     *   create: {
     *     // ... data to create a Supplier
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Supplier we want to update
     *   }
     * })
     */
    upsert<T extends SupplierUpsertArgs>(args: SelectSubset<T, SupplierUpsertArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierCountArgs} args - Arguments to filter Suppliers to count.
     * @example
     * // Count the number of Suppliers
     * const count = await prisma.supplier.count({
     *   where: {
     *     // ... the filter for the Suppliers we want to count
     *   }
     * })
    **/
    count<T extends SupplierCountArgs>(
      args?: Subset<T, SupplierCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupplierCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Supplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SupplierAggregateArgs>(args: Subset<T, SupplierAggregateArgs>): Prisma.PrismaPromise<GetSupplierAggregateType<T>>

    /**
     * Group by Supplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierGroupByArgs} args - Group by arguments.
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
      T extends SupplierGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SupplierGroupByArgs['orderBy'] }
        : { orderBy?: SupplierGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SupplierGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupplierGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Supplier model
   */
  readonly fields: SupplierFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Supplier.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SupplierClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    address<T extends Supplier$addressArgs<ExtArgs> = {}>(args?: Subset<T, Supplier$addressArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    contacts<T extends Supplier$contactsArgs<ExtArgs> = {}>(args?: Subset<T, Supplier$contactsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    purchaseOrders<T extends Supplier$purchaseOrdersArgs<ExtArgs> = {}>(args?: Subset<T, Supplier$purchaseOrdersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Supplier model
   */
  interface SupplierFieldRefs {
    readonly id: FieldRef<"Supplier", 'Int'>
    readonly guid: FieldRef<"Supplier", 'String'>
    readonly name: FieldRef<"Supplier", 'String'>
    readonly website: FieldRef<"Supplier", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Supplier findUnique
   */
  export type SupplierFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier findUniqueOrThrow
   */
  export type SupplierFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier findFirst
   */
  export type SupplierFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suppliers.
     */
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * Supplier findFirstOrThrow
   */
  export type SupplierFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suppliers.
     */
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * Supplier findMany
   */
  export type SupplierFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Suppliers to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * Supplier create
   */
  export type SupplierCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * The data needed to create a Supplier.
     */
    data: XOR<SupplierCreateInput, SupplierUncheckedCreateInput>
  }

  /**
   * Supplier createMany
   */
  export type SupplierCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Suppliers.
     */
    data: SupplierCreateManyInput | SupplierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Supplier createManyAndReturn
   */
  export type SupplierCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * The data used to create many Suppliers.
     */
    data: SupplierCreateManyInput | SupplierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Supplier update
   */
  export type SupplierUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * The data needed to update a Supplier.
     */
    data: XOR<SupplierUpdateInput, SupplierUncheckedUpdateInput>
    /**
     * Choose, which Supplier to update.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier updateMany
   */
  export type SupplierUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Suppliers.
     */
    data: XOR<SupplierUpdateManyMutationInput, SupplierUncheckedUpdateManyInput>
    /**
     * Filter which Suppliers to update
     */
    where?: SupplierWhereInput
    /**
     * Limit how many Suppliers to update.
     */
    limit?: number
  }

  /**
   * Supplier updateManyAndReturn
   */
  export type SupplierUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * The data used to update Suppliers.
     */
    data: XOR<SupplierUpdateManyMutationInput, SupplierUncheckedUpdateManyInput>
    /**
     * Filter which Suppliers to update
     */
    where?: SupplierWhereInput
    /**
     * Limit how many Suppliers to update.
     */
    limit?: number
  }

  /**
   * Supplier upsert
   */
  export type SupplierUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * The filter to search for the Supplier to update in case it exists.
     */
    where: SupplierWhereUniqueInput
    /**
     * In case the Supplier found by the `where` argument doesn't exist, create a new Supplier with this data.
     */
    create: XOR<SupplierCreateInput, SupplierUncheckedCreateInput>
    /**
     * In case the Supplier was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SupplierUpdateInput, SupplierUncheckedUpdateInput>
  }

  /**
   * Supplier delete
   */
  export type SupplierDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter which Supplier to delete.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier deleteMany
   */
  export type SupplierDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Suppliers to delete
     */
    where?: SupplierWhereInput
    /**
     * Limit how many Suppliers to delete.
     */
    limit?: number
  }

  /**
   * Supplier.address
   */
  export type Supplier$addressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    where?: AddressWhereInput
  }

  /**
   * Supplier.contacts
   */
  export type Supplier$contactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    where?: ContactWhereInput
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    cursor?: ContactWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Supplier.purchaseOrders
   */
  export type Supplier$purchaseOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
    where?: PurchaseOrderWhereInput
    orderBy?: PurchaseOrderOrderByWithRelationInput | PurchaseOrderOrderByWithRelationInput[]
    cursor?: PurchaseOrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchaseOrderScalarFieldEnum | PurchaseOrderScalarFieldEnum[]
  }

  /**
   * Supplier without action
   */
  export type SupplierDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
  }


  /**
   * Model PurchaseOrder
   */

  export type AggregatePurchaseOrder = {
    _count: PurchaseOrderCountAggregateOutputType | null
    _avg: PurchaseOrderAvgAggregateOutputType | null
    _sum: PurchaseOrderSumAggregateOutputType | null
    _min: PurchaseOrderMinAggregateOutputType | null
    _max: PurchaseOrderMaxAggregateOutputType | null
  }

  export type PurchaseOrderAvgAggregateOutputType = {
    id: number | null
    subTotal: number | null
    taxAmount: number | null
    total: number | null
    supplierId: number | null
  }

  export type PurchaseOrderSumAggregateOutputType = {
    id: number | null
    subTotal: number | null
    taxAmount: number | null
    total: number | null
    supplierId: number | null
  }

  export type PurchaseOrderMinAggregateOutputType = {
    id: number | null
    guid: string | null
    number: string | null
    state: string | null
    issueDate: Date | null
    pendingXero: boolean | null
    subTotal: number | null
    taxAmount: number | null
    total: number | null
    supplierId: number | null
  }

  export type PurchaseOrderMaxAggregateOutputType = {
    id: number | null
    guid: string | null
    number: string | null
    state: string | null
    issueDate: Date | null
    pendingXero: boolean | null
    subTotal: number | null
    taxAmount: number | null
    total: number | null
    supplierId: number | null
  }

  export type PurchaseOrderCountAggregateOutputType = {
    id: number
    guid: number
    number: number
    state: number
    issueDate: number
    pendingXero: number
    subTotal: number
    taxAmount: number
    total: number
    supplierId: number
    _all: number
  }


  export type PurchaseOrderAvgAggregateInputType = {
    id?: true
    subTotal?: true
    taxAmount?: true
    total?: true
    supplierId?: true
  }

  export type PurchaseOrderSumAggregateInputType = {
    id?: true
    subTotal?: true
    taxAmount?: true
    total?: true
    supplierId?: true
  }

  export type PurchaseOrderMinAggregateInputType = {
    id?: true
    guid?: true
    number?: true
    state?: true
    issueDate?: true
    pendingXero?: true
    subTotal?: true
    taxAmount?: true
    total?: true
    supplierId?: true
  }

  export type PurchaseOrderMaxAggregateInputType = {
    id?: true
    guid?: true
    number?: true
    state?: true
    issueDate?: true
    pendingXero?: true
    subTotal?: true
    taxAmount?: true
    total?: true
    supplierId?: true
  }

  export type PurchaseOrderCountAggregateInputType = {
    id?: true
    guid?: true
    number?: true
    state?: true
    issueDate?: true
    pendingXero?: true
    subTotal?: true
    taxAmount?: true
    total?: true
    supplierId?: true
    _all?: true
  }

  export type PurchaseOrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PurchaseOrder to aggregate.
     */
    where?: PurchaseOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseOrders to fetch.
     */
    orderBy?: PurchaseOrderOrderByWithRelationInput | PurchaseOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PurchaseOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PurchaseOrders
    **/
    _count?: true | PurchaseOrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PurchaseOrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PurchaseOrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PurchaseOrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PurchaseOrderMaxAggregateInputType
  }

  export type GetPurchaseOrderAggregateType<T extends PurchaseOrderAggregateArgs> = {
        [P in keyof T & keyof AggregatePurchaseOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePurchaseOrder[P]>
      : GetScalarType<T[P], AggregatePurchaseOrder[P]>
  }




  export type PurchaseOrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseOrderWhereInput
    orderBy?: PurchaseOrderOrderByWithAggregationInput | PurchaseOrderOrderByWithAggregationInput[]
    by: PurchaseOrderScalarFieldEnum[] | PurchaseOrderScalarFieldEnum
    having?: PurchaseOrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PurchaseOrderCountAggregateInputType | true
    _avg?: PurchaseOrderAvgAggregateInputType
    _sum?: PurchaseOrderSumAggregateInputType
    _min?: PurchaseOrderMinAggregateInputType
    _max?: PurchaseOrderMaxAggregateInputType
  }

  export type PurchaseOrderGroupByOutputType = {
    id: number
    guid: string
    number: string
    state: string
    issueDate: Date | null
    pendingXero: boolean
    subTotal: number
    taxAmount: number
    total: number
    supplierId: number | null
    _count: PurchaseOrderCountAggregateOutputType | null
    _avg: PurchaseOrderAvgAggregateOutputType | null
    _sum: PurchaseOrderSumAggregateOutputType | null
    _min: PurchaseOrderMinAggregateOutputType | null
    _max: PurchaseOrderMaxAggregateOutputType | null
  }

  type GetPurchaseOrderGroupByPayload<T extends PurchaseOrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PurchaseOrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PurchaseOrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PurchaseOrderGroupByOutputType[P]>
            : GetScalarType<T[P], PurchaseOrderGroupByOutputType[P]>
        }
      >
    >


  export type PurchaseOrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guid?: boolean
    number?: boolean
    state?: boolean
    issueDate?: boolean
    pendingXero?: boolean
    subTotal?: boolean
    taxAmount?: boolean
    total?: boolean
    supplierId?: boolean
    lineItems?: boolean | PurchaseOrder$lineItemsArgs<ExtArgs>
    supplier?: boolean | PurchaseOrder$supplierArgs<ExtArgs>
    _count?: boolean | PurchaseOrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchaseOrder"]>

  export type PurchaseOrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guid?: boolean
    number?: boolean
    state?: boolean
    issueDate?: boolean
    pendingXero?: boolean
    subTotal?: boolean
    taxAmount?: boolean
    total?: boolean
    supplierId?: boolean
    supplier?: boolean | PurchaseOrder$supplierArgs<ExtArgs>
  }, ExtArgs["result"]["purchaseOrder"]>

  export type PurchaseOrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guid?: boolean
    number?: boolean
    state?: boolean
    issueDate?: boolean
    pendingXero?: boolean
    subTotal?: boolean
    taxAmount?: boolean
    total?: boolean
    supplierId?: boolean
    supplier?: boolean | PurchaseOrder$supplierArgs<ExtArgs>
  }, ExtArgs["result"]["purchaseOrder"]>

  export type PurchaseOrderSelectScalar = {
    id?: boolean
    guid?: boolean
    number?: boolean
    state?: boolean
    issueDate?: boolean
    pendingXero?: boolean
    subTotal?: boolean
    taxAmount?: boolean
    total?: boolean
    supplierId?: boolean
  }

  export type PurchaseOrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "guid" | "number" | "state" | "issueDate" | "pendingXero" | "subTotal" | "taxAmount" | "total" | "supplierId", ExtArgs["result"]["purchaseOrder"]>
  export type PurchaseOrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lineItems?: boolean | PurchaseOrder$lineItemsArgs<ExtArgs>
    supplier?: boolean | PurchaseOrder$supplierArgs<ExtArgs>
    _count?: boolean | PurchaseOrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PurchaseOrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplier?: boolean | PurchaseOrder$supplierArgs<ExtArgs>
  }
  export type PurchaseOrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplier?: boolean | PurchaseOrder$supplierArgs<ExtArgs>
  }

  export type $PurchaseOrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PurchaseOrder"
    objects: {
      lineItems: Prisma.$PurchaseOrderLineItemPayload<ExtArgs>[]
      supplier: Prisma.$SupplierPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      guid: string
      number: string
      state: string
      issueDate: Date | null
      pendingXero: boolean
      subTotal: number
      taxAmount: number
      total: number
      supplierId: number | null
    }, ExtArgs["result"]["purchaseOrder"]>
    composites: {}
  }

  type PurchaseOrderGetPayload<S extends boolean | null | undefined | PurchaseOrderDefaultArgs> = $Result.GetResult<Prisma.$PurchaseOrderPayload, S>

  type PurchaseOrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PurchaseOrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PurchaseOrderCountAggregateInputType | true
    }

  export interface PurchaseOrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PurchaseOrder'], meta: { name: 'PurchaseOrder' } }
    /**
     * Find zero or one PurchaseOrder that matches the filter.
     * @param {PurchaseOrderFindUniqueArgs} args - Arguments to find a PurchaseOrder
     * @example
     * // Get one PurchaseOrder
     * const purchaseOrder = await prisma.purchaseOrder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PurchaseOrderFindUniqueArgs>(args: SelectSubset<T, PurchaseOrderFindUniqueArgs<ExtArgs>>): Prisma__PurchaseOrderClient<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PurchaseOrder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PurchaseOrderFindUniqueOrThrowArgs} args - Arguments to find a PurchaseOrder
     * @example
     * // Get one PurchaseOrder
     * const purchaseOrder = await prisma.purchaseOrder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PurchaseOrderFindUniqueOrThrowArgs>(args: SelectSubset<T, PurchaseOrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PurchaseOrderClient<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PurchaseOrder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderFindFirstArgs} args - Arguments to find a PurchaseOrder
     * @example
     * // Get one PurchaseOrder
     * const purchaseOrder = await prisma.purchaseOrder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PurchaseOrderFindFirstArgs>(args?: SelectSubset<T, PurchaseOrderFindFirstArgs<ExtArgs>>): Prisma__PurchaseOrderClient<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PurchaseOrder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderFindFirstOrThrowArgs} args - Arguments to find a PurchaseOrder
     * @example
     * // Get one PurchaseOrder
     * const purchaseOrder = await prisma.purchaseOrder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PurchaseOrderFindFirstOrThrowArgs>(args?: SelectSubset<T, PurchaseOrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__PurchaseOrderClient<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PurchaseOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PurchaseOrders
     * const purchaseOrders = await prisma.purchaseOrder.findMany()
     * 
     * // Get first 10 PurchaseOrders
     * const purchaseOrders = await prisma.purchaseOrder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const purchaseOrderWithIdOnly = await prisma.purchaseOrder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PurchaseOrderFindManyArgs>(args?: SelectSubset<T, PurchaseOrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PurchaseOrder.
     * @param {PurchaseOrderCreateArgs} args - Arguments to create a PurchaseOrder.
     * @example
     * // Create one PurchaseOrder
     * const PurchaseOrder = await prisma.purchaseOrder.create({
     *   data: {
     *     // ... data to create a PurchaseOrder
     *   }
     * })
     * 
     */
    create<T extends PurchaseOrderCreateArgs>(args: SelectSubset<T, PurchaseOrderCreateArgs<ExtArgs>>): Prisma__PurchaseOrderClient<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PurchaseOrders.
     * @param {PurchaseOrderCreateManyArgs} args - Arguments to create many PurchaseOrders.
     * @example
     * // Create many PurchaseOrders
     * const purchaseOrder = await prisma.purchaseOrder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PurchaseOrderCreateManyArgs>(args?: SelectSubset<T, PurchaseOrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PurchaseOrders and returns the data saved in the database.
     * @param {PurchaseOrderCreateManyAndReturnArgs} args - Arguments to create many PurchaseOrders.
     * @example
     * // Create many PurchaseOrders
     * const purchaseOrder = await prisma.purchaseOrder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PurchaseOrders and only return the `id`
     * const purchaseOrderWithIdOnly = await prisma.purchaseOrder.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PurchaseOrderCreateManyAndReturnArgs>(args?: SelectSubset<T, PurchaseOrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PurchaseOrder.
     * @param {PurchaseOrderDeleteArgs} args - Arguments to delete one PurchaseOrder.
     * @example
     * // Delete one PurchaseOrder
     * const PurchaseOrder = await prisma.purchaseOrder.delete({
     *   where: {
     *     // ... filter to delete one PurchaseOrder
     *   }
     * })
     * 
     */
    delete<T extends PurchaseOrderDeleteArgs>(args: SelectSubset<T, PurchaseOrderDeleteArgs<ExtArgs>>): Prisma__PurchaseOrderClient<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PurchaseOrder.
     * @param {PurchaseOrderUpdateArgs} args - Arguments to update one PurchaseOrder.
     * @example
     * // Update one PurchaseOrder
     * const purchaseOrder = await prisma.purchaseOrder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PurchaseOrderUpdateArgs>(args: SelectSubset<T, PurchaseOrderUpdateArgs<ExtArgs>>): Prisma__PurchaseOrderClient<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PurchaseOrders.
     * @param {PurchaseOrderDeleteManyArgs} args - Arguments to filter PurchaseOrders to delete.
     * @example
     * // Delete a few PurchaseOrders
     * const { count } = await prisma.purchaseOrder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PurchaseOrderDeleteManyArgs>(args?: SelectSubset<T, PurchaseOrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PurchaseOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PurchaseOrders
     * const purchaseOrder = await prisma.purchaseOrder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PurchaseOrderUpdateManyArgs>(args: SelectSubset<T, PurchaseOrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PurchaseOrders and returns the data updated in the database.
     * @param {PurchaseOrderUpdateManyAndReturnArgs} args - Arguments to update many PurchaseOrders.
     * @example
     * // Update many PurchaseOrders
     * const purchaseOrder = await prisma.purchaseOrder.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PurchaseOrders and only return the `id`
     * const purchaseOrderWithIdOnly = await prisma.purchaseOrder.updateManyAndReturn({
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
    updateManyAndReturn<T extends PurchaseOrderUpdateManyAndReturnArgs>(args: SelectSubset<T, PurchaseOrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PurchaseOrder.
     * @param {PurchaseOrderUpsertArgs} args - Arguments to update or create a PurchaseOrder.
     * @example
     * // Update or create a PurchaseOrder
     * const purchaseOrder = await prisma.purchaseOrder.upsert({
     *   create: {
     *     // ... data to create a PurchaseOrder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PurchaseOrder we want to update
     *   }
     * })
     */
    upsert<T extends PurchaseOrderUpsertArgs>(args: SelectSubset<T, PurchaseOrderUpsertArgs<ExtArgs>>): Prisma__PurchaseOrderClient<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PurchaseOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderCountArgs} args - Arguments to filter PurchaseOrders to count.
     * @example
     * // Count the number of PurchaseOrders
     * const count = await prisma.purchaseOrder.count({
     *   where: {
     *     // ... the filter for the PurchaseOrders we want to count
     *   }
     * })
    **/
    count<T extends PurchaseOrderCountArgs>(
      args?: Subset<T, PurchaseOrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PurchaseOrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PurchaseOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PurchaseOrderAggregateArgs>(args: Subset<T, PurchaseOrderAggregateArgs>): Prisma.PrismaPromise<GetPurchaseOrderAggregateType<T>>

    /**
     * Group by PurchaseOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderGroupByArgs} args - Group by arguments.
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
      T extends PurchaseOrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PurchaseOrderGroupByArgs['orderBy'] }
        : { orderBy?: PurchaseOrderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PurchaseOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchaseOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PurchaseOrder model
   */
  readonly fields: PurchaseOrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PurchaseOrder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PurchaseOrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lineItems<T extends PurchaseOrder$lineItemsArgs<ExtArgs> = {}>(args?: Subset<T, PurchaseOrder$lineItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseOrderLineItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    supplier<T extends PurchaseOrder$supplierArgs<ExtArgs> = {}>(args?: Subset<T, PurchaseOrder$supplierArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PurchaseOrder model
   */
  interface PurchaseOrderFieldRefs {
    readonly id: FieldRef<"PurchaseOrder", 'Int'>
    readonly guid: FieldRef<"PurchaseOrder", 'String'>
    readonly number: FieldRef<"PurchaseOrder", 'String'>
    readonly state: FieldRef<"PurchaseOrder", 'String'>
    readonly issueDate: FieldRef<"PurchaseOrder", 'DateTime'>
    readonly pendingXero: FieldRef<"PurchaseOrder", 'Boolean'>
    readonly subTotal: FieldRef<"PurchaseOrder", 'Int'>
    readonly taxAmount: FieldRef<"PurchaseOrder", 'Int'>
    readonly total: FieldRef<"PurchaseOrder", 'Int'>
    readonly supplierId: FieldRef<"PurchaseOrder", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PurchaseOrder findUnique
   */
  export type PurchaseOrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseOrder to fetch.
     */
    where: PurchaseOrderWhereUniqueInput
  }

  /**
   * PurchaseOrder findUniqueOrThrow
   */
  export type PurchaseOrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseOrder to fetch.
     */
    where: PurchaseOrderWhereUniqueInput
  }

  /**
   * PurchaseOrder findFirst
   */
  export type PurchaseOrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseOrder to fetch.
     */
    where?: PurchaseOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseOrders to fetch.
     */
    orderBy?: PurchaseOrderOrderByWithRelationInput | PurchaseOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PurchaseOrders.
     */
    cursor?: PurchaseOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PurchaseOrders.
     */
    distinct?: PurchaseOrderScalarFieldEnum | PurchaseOrderScalarFieldEnum[]
  }

  /**
   * PurchaseOrder findFirstOrThrow
   */
  export type PurchaseOrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseOrder to fetch.
     */
    where?: PurchaseOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseOrders to fetch.
     */
    orderBy?: PurchaseOrderOrderByWithRelationInput | PurchaseOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PurchaseOrders.
     */
    cursor?: PurchaseOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PurchaseOrders.
     */
    distinct?: PurchaseOrderScalarFieldEnum | PurchaseOrderScalarFieldEnum[]
  }

  /**
   * PurchaseOrder findMany
   */
  export type PurchaseOrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseOrders to fetch.
     */
    where?: PurchaseOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseOrders to fetch.
     */
    orderBy?: PurchaseOrderOrderByWithRelationInput | PurchaseOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PurchaseOrders.
     */
    cursor?: PurchaseOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseOrders.
     */
    skip?: number
    distinct?: PurchaseOrderScalarFieldEnum | PurchaseOrderScalarFieldEnum[]
  }

  /**
   * PurchaseOrder create
   */
  export type PurchaseOrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
    /**
     * The data needed to create a PurchaseOrder.
     */
    data: XOR<PurchaseOrderCreateInput, PurchaseOrderUncheckedCreateInput>
  }

  /**
   * PurchaseOrder createMany
   */
  export type PurchaseOrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PurchaseOrders.
     */
    data: PurchaseOrderCreateManyInput | PurchaseOrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PurchaseOrder createManyAndReturn
   */
  export type PurchaseOrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * The data used to create many PurchaseOrders.
     */
    data: PurchaseOrderCreateManyInput | PurchaseOrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PurchaseOrder update
   */
  export type PurchaseOrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
    /**
     * The data needed to update a PurchaseOrder.
     */
    data: XOR<PurchaseOrderUpdateInput, PurchaseOrderUncheckedUpdateInput>
    /**
     * Choose, which PurchaseOrder to update.
     */
    where: PurchaseOrderWhereUniqueInput
  }

  /**
   * PurchaseOrder updateMany
   */
  export type PurchaseOrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PurchaseOrders.
     */
    data: XOR<PurchaseOrderUpdateManyMutationInput, PurchaseOrderUncheckedUpdateManyInput>
    /**
     * Filter which PurchaseOrders to update
     */
    where?: PurchaseOrderWhereInput
    /**
     * Limit how many PurchaseOrders to update.
     */
    limit?: number
  }

  /**
   * PurchaseOrder updateManyAndReturn
   */
  export type PurchaseOrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * The data used to update PurchaseOrders.
     */
    data: XOR<PurchaseOrderUpdateManyMutationInput, PurchaseOrderUncheckedUpdateManyInput>
    /**
     * Filter which PurchaseOrders to update
     */
    where?: PurchaseOrderWhereInput
    /**
     * Limit how many PurchaseOrders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PurchaseOrder upsert
   */
  export type PurchaseOrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
    /**
     * The filter to search for the PurchaseOrder to update in case it exists.
     */
    where: PurchaseOrderWhereUniqueInput
    /**
     * In case the PurchaseOrder found by the `where` argument doesn't exist, create a new PurchaseOrder with this data.
     */
    create: XOR<PurchaseOrderCreateInput, PurchaseOrderUncheckedCreateInput>
    /**
     * In case the PurchaseOrder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PurchaseOrderUpdateInput, PurchaseOrderUncheckedUpdateInput>
  }

  /**
   * PurchaseOrder delete
   */
  export type PurchaseOrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
    /**
     * Filter which PurchaseOrder to delete.
     */
    where: PurchaseOrderWhereUniqueInput
  }

  /**
   * PurchaseOrder deleteMany
   */
  export type PurchaseOrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PurchaseOrders to delete
     */
    where?: PurchaseOrderWhereInput
    /**
     * Limit how many PurchaseOrders to delete.
     */
    limit?: number
  }

  /**
   * PurchaseOrder.lineItems
   */
  export type PurchaseOrder$lineItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrderLineItem
     */
    select?: PurchaseOrderLineItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrderLineItem
     */
    omit?: PurchaseOrderLineItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderLineItemInclude<ExtArgs> | null
    where?: PurchaseOrderLineItemWhereInput
    orderBy?: PurchaseOrderLineItemOrderByWithRelationInput | PurchaseOrderLineItemOrderByWithRelationInput[]
    cursor?: PurchaseOrderLineItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchaseOrderLineItemScalarFieldEnum | PurchaseOrderLineItemScalarFieldEnum[]
  }

  /**
   * PurchaseOrder.supplier
   */
  export type PurchaseOrder$supplierArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    where?: SupplierWhereInput
  }

  /**
   * PurchaseOrder without action
   */
  export type PurchaseOrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
  }


  /**
   * Model PurchaseOrderLineItem
   */

  export type AggregatePurchaseOrderLineItem = {
    _count: PurchaseOrderLineItemCountAggregateOutputType | null
    _avg: PurchaseOrderLineItemAvgAggregateOutputType | null
    _sum: PurchaseOrderLineItemSumAggregateOutputType | null
    _min: PurchaseOrderLineItemMinAggregateOutputType | null
    _max: PurchaseOrderLineItemMaxAggregateOutputType | null
  }

  export type PurchaseOrderLineItemAvgAggregateOutputType = {
    id: number | null
    variantTaxRate: number | null
    itemCost: number | null
    quantityOrdered: number | null
    packSize: number | null
    purchaseOrderId: number | null
  }

  export type PurchaseOrderLineItemSumAggregateOutputType = {
    id: number | null
    variantTaxRate: number | null
    itemCost: number | null
    quantityOrdered: number | null
    packSize: number | null
    purchaseOrderId: number | null
  }

  export type PurchaseOrderLineItemMinAggregateOutputType = {
    id: number | null
    guid: string | null
    variantSku: string | null
    variantGuid: string | null
    variantUPC: string | null
    variantSupplierCode: string | null
    variantTaxRate: number | null
    description: string | null
    variantMediaURI: string | null
    itemCost: number | null
    quantityOrdered: number | null
    packSize: number | null
    purchaseOrderId: number | null
  }

  export type PurchaseOrderLineItemMaxAggregateOutputType = {
    id: number | null
    guid: string | null
    variantSku: string | null
    variantGuid: string | null
    variantUPC: string | null
    variantSupplierCode: string | null
    variantTaxRate: number | null
    description: string | null
    variantMediaURI: string | null
    itemCost: number | null
    quantityOrdered: number | null
    packSize: number | null
    purchaseOrderId: number | null
  }

  export type PurchaseOrderLineItemCountAggregateOutputType = {
    id: number
    guid: number
    variantSku: number
    variantGuid: number
    variantUPC: number
    variantSupplierCode: number
    variantTaxRate: number
    description: number
    variantMediaURI: number
    itemCost: number
    quantityOrdered: number
    packSize: number
    purchaseOrderId: number
    _all: number
  }


  export type PurchaseOrderLineItemAvgAggregateInputType = {
    id?: true
    variantTaxRate?: true
    itemCost?: true
    quantityOrdered?: true
    packSize?: true
    purchaseOrderId?: true
  }

  export type PurchaseOrderLineItemSumAggregateInputType = {
    id?: true
    variantTaxRate?: true
    itemCost?: true
    quantityOrdered?: true
    packSize?: true
    purchaseOrderId?: true
  }

  export type PurchaseOrderLineItemMinAggregateInputType = {
    id?: true
    guid?: true
    variantSku?: true
    variantGuid?: true
    variantUPC?: true
    variantSupplierCode?: true
    variantTaxRate?: true
    description?: true
    variantMediaURI?: true
    itemCost?: true
    quantityOrdered?: true
    packSize?: true
    purchaseOrderId?: true
  }

  export type PurchaseOrderLineItemMaxAggregateInputType = {
    id?: true
    guid?: true
    variantSku?: true
    variantGuid?: true
    variantUPC?: true
    variantSupplierCode?: true
    variantTaxRate?: true
    description?: true
    variantMediaURI?: true
    itemCost?: true
    quantityOrdered?: true
    packSize?: true
    purchaseOrderId?: true
  }

  export type PurchaseOrderLineItemCountAggregateInputType = {
    id?: true
    guid?: true
    variantSku?: true
    variantGuid?: true
    variantUPC?: true
    variantSupplierCode?: true
    variantTaxRate?: true
    description?: true
    variantMediaURI?: true
    itemCost?: true
    quantityOrdered?: true
    packSize?: true
    purchaseOrderId?: true
    _all?: true
  }

  export type PurchaseOrderLineItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PurchaseOrderLineItem to aggregate.
     */
    where?: PurchaseOrderLineItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseOrderLineItems to fetch.
     */
    orderBy?: PurchaseOrderLineItemOrderByWithRelationInput | PurchaseOrderLineItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PurchaseOrderLineItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseOrderLineItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseOrderLineItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PurchaseOrderLineItems
    **/
    _count?: true | PurchaseOrderLineItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PurchaseOrderLineItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PurchaseOrderLineItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PurchaseOrderLineItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PurchaseOrderLineItemMaxAggregateInputType
  }

  export type GetPurchaseOrderLineItemAggregateType<T extends PurchaseOrderLineItemAggregateArgs> = {
        [P in keyof T & keyof AggregatePurchaseOrderLineItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePurchaseOrderLineItem[P]>
      : GetScalarType<T[P], AggregatePurchaseOrderLineItem[P]>
  }




  export type PurchaseOrderLineItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseOrderLineItemWhereInput
    orderBy?: PurchaseOrderLineItemOrderByWithAggregationInput | PurchaseOrderLineItemOrderByWithAggregationInput[]
    by: PurchaseOrderLineItemScalarFieldEnum[] | PurchaseOrderLineItemScalarFieldEnum
    having?: PurchaseOrderLineItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PurchaseOrderLineItemCountAggregateInputType | true
    _avg?: PurchaseOrderLineItemAvgAggregateInputType
    _sum?: PurchaseOrderLineItemSumAggregateInputType
    _min?: PurchaseOrderLineItemMinAggregateInputType
    _max?: PurchaseOrderLineItemMaxAggregateInputType
  }

  export type PurchaseOrderLineItemGroupByOutputType = {
    id: number
    guid: string
    variantSku: string | null
    variantGuid: string | null
    variantUPC: string | null
    variantSupplierCode: string | null
    variantTaxRate: number
    description: string
    variantMediaURI: string | null
    itemCost: number
    quantityOrdered: number
    packSize: number
    purchaseOrderId: number
    _count: PurchaseOrderLineItemCountAggregateOutputType | null
    _avg: PurchaseOrderLineItemAvgAggregateOutputType | null
    _sum: PurchaseOrderLineItemSumAggregateOutputType | null
    _min: PurchaseOrderLineItemMinAggregateOutputType | null
    _max: PurchaseOrderLineItemMaxAggregateOutputType | null
  }

  type GetPurchaseOrderLineItemGroupByPayload<T extends PurchaseOrderLineItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PurchaseOrderLineItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PurchaseOrderLineItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PurchaseOrderLineItemGroupByOutputType[P]>
            : GetScalarType<T[P], PurchaseOrderLineItemGroupByOutputType[P]>
        }
      >
    >


  export type PurchaseOrderLineItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guid?: boolean
    variantSku?: boolean
    variantGuid?: boolean
    variantUPC?: boolean
    variantSupplierCode?: boolean
    variantTaxRate?: boolean
    description?: boolean
    variantMediaURI?: boolean
    itemCost?: boolean
    quantityOrdered?: boolean
    packSize?: boolean
    purchaseOrderId?: boolean
    receipts?: boolean | PurchaseOrderLineItem$receiptsArgs<ExtArgs>
    purchaseOrder?: boolean | PurchaseOrderDefaultArgs<ExtArgs>
    _count?: boolean | PurchaseOrderLineItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchaseOrderLineItem"]>

  export type PurchaseOrderLineItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guid?: boolean
    variantSku?: boolean
    variantGuid?: boolean
    variantUPC?: boolean
    variantSupplierCode?: boolean
    variantTaxRate?: boolean
    description?: boolean
    variantMediaURI?: boolean
    itemCost?: boolean
    quantityOrdered?: boolean
    packSize?: boolean
    purchaseOrderId?: boolean
    purchaseOrder?: boolean | PurchaseOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchaseOrderLineItem"]>

  export type PurchaseOrderLineItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guid?: boolean
    variantSku?: boolean
    variantGuid?: boolean
    variantUPC?: boolean
    variantSupplierCode?: boolean
    variantTaxRate?: boolean
    description?: boolean
    variantMediaURI?: boolean
    itemCost?: boolean
    quantityOrdered?: boolean
    packSize?: boolean
    purchaseOrderId?: boolean
    purchaseOrder?: boolean | PurchaseOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchaseOrderLineItem"]>

  export type PurchaseOrderLineItemSelectScalar = {
    id?: boolean
    guid?: boolean
    variantSku?: boolean
    variantGuid?: boolean
    variantUPC?: boolean
    variantSupplierCode?: boolean
    variantTaxRate?: boolean
    description?: boolean
    variantMediaURI?: boolean
    itemCost?: boolean
    quantityOrdered?: boolean
    packSize?: boolean
    purchaseOrderId?: boolean
  }

  export type PurchaseOrderLineItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "guid" | "variantSku" | "variantGuid" | "variantUPC" | "variantSupplierCode" | "variantTaxRate" | "description" | "variantMediaURI" | "itemCost" | "quantityOrdered" | "packSize" | "purchaseOrderId", ExtArgs["result"]["purchaseOrderLineItem"]>
  export type PurchaseOrderLineItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receipts?: boolean | PurchaseOrderLineItem$receiptsArgs<ExtArgs>
    purchaseOrder?: boolean | PurchaseOrderDefaultArgs<ExtArgs>
    _count?: boolean | PurchaseOrderLineItemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PurchaseOrderLineItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchaseOrder?: boolean | PurchaseOrderDefaultArgs<ExtArgs>
  }
  export type PurchaseOrderLineItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchaseOrder?: boolean | PurchaseOrderDefaultArgs<ExtArgs>
  }

  export type $PurchaseOrderLineItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PurchaseOrderLineItem"
    objects: {
      receipts: Prisma.$PurchaseOrderLineItemReceiptPayload<ExtArgs>[]
      purchaseOrder: Prisma.$PurchaseOrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      guid: string
      variantSku: string | null
      variantGuid: string | null
      variantUPC: string | null
      variantSupplierCode: string | null
      variantTaxRate: number
      description: string
      variantMediaURI: string | null
      itemCost: number
      quantityOrdered: number
      packSize: number
      purchaseOrderId: number
    }, ExtArgs["result"]["purchaseOrderLineItem"]>
    composites: {}
  }

  type PurchaseOrderLineItemGetPayload<S extends boolean | null | undefined | PurchaseOrderLineItemDefaultArgs> = $Result.GetResult<Prisma.$PurchaseOrderLineItemPayload, S>

  type PurchaseOrderLineItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PurchaseOrderLineItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PurchaseOrderLineItemCountAggregateInputType | true
    }

  export interface PurchaseOrderLineItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PurchaseOrderLineItem'], meta: { name: 'PurchaseOrderLineItem' } }
    /**
     * Find zero or one PurchaseOrderLineItem that matches the filter.
     * @param {PurchaseOrderLineItemFindUniqueArgs} args - Arguments to find a PurchaseOrderLineItem
     * @example
     * // Get one PurchaseOrderLineItem
     * const purchaseOrderLineItem = await prisma.purchaseOrderLineItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PurchaseOrderLineItemFindUniqueArgs>(args: SelectSubset<T, PurchaseOrderLineItemFindUniqueArgs<ExtArgs>>): Prisma__PurchaseOrderLineItemClient<$Result.GetResult<Prisma.$PurchaseOrderLineItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PurchaseOrderLineItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PurchaseOrderLineItemFindUniqueOrThrowArgs} args - Arguments to find a PurchaseOrderLineItem
     * @example
     * // Get one PurchaseOrderLineItem
     * const purchaseOrderLineItem = await prisma.purchaseOrderLineItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PurchaseOrderLineItemFindUniqueOrThrowArgs>(args: SelectSubset<T, PurchaseOrderLineItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PurchaseOrderLineItemClient<$Result.GetResult<Prisma.$PurchaseOrderLineItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PurchaseOrderLineItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderLineItemFindFirstArgs} args - Arguments to find a PurchaseOrderLineItem
     * @example
     * // Get one PurchaseOrderLineItem
     * const purchaseOrderLineItem = await prisma.purchaseOrderLineItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PurchaseOrderLineItemFindFirstArgs>(args?: SelectSubset<T, PurchaseOrderLineItemFindFirstArgs<ExtArgs>>): Prisma__PurchaseOrderLineItemClient<$Result.GetResult<Prisma.$PurchaseOrderLineItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PurchaseOrderLineItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderLineItemFindFirstOrThrowArgs} args - Arguments to find a PurchaseOrderLineItem
     * @example
     * // Get one PurchaseOrderLineItem
     * const purchaseOrderLineItem = await prisma.purchaseOrderLineItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PurchaseOrderLineItemFindFirstOrThrowArgs>(args?: SelectSubset<T, PurchaseOrderLineItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__PurchaseOrderLineItemClient<$Result.GetResult<Prisma.$PurchaseOrderLineItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PurchaseOrderLineItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderLineItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PurchaseOrderLineItems
     * const purchaseOrderLineItems = await prisma.purchaseOrderLineItem.findMany()
     * 
     * // Get first 10 PurchaseOrderLineItems
     * const purchaseOrderLineItems = await prisma.purchaseOrderLineItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const purchaseOrderLineItemWithIdOnly = await prisma.purchaseOrderLineItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PurchaseOrderLineItemFindManyArgs>(args?: SelectSubset<T, PurchaseOrderLineItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseOrderLineItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PurchaseOrderLineItem.
     * @param {PurchaseOrderLineItemCreateArgs} args - Arguments to create a PurchaseOrderLineItem.
     * @example
     * // Create one PurchaseOrderLineItem
     * const PurchaseOrderLineItem = await prisma.purchaseOrderLineItem.create({
     *   data: {
     *     // ... data to create a PurchaseOrderLineItem
     *   }
     * })
     * 
     */
    create<T extends PurchaseOrderLineItemCreateArgs>(args: SelectSubset<T, PurchaseOrderLineItemCreateArgs<ExtArgs>>): Prisma__PurchaseOrderLineItemClient<$Result.GetResult<Prisma.$PurchaseOrderLineItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PurchaseOrderLineItems.
     * @param {PurchaseOrderLineItemCreateManyArgs} args - Arguments to create many PurchaseOrderLineItems.
     * @example
     * // Create many PurchaseOrderLineItems
     * const purchaseOrderLineItem = await prisma.purchaseOrderLineItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PurchaseOrderLineItemCreateManyArgs>(args?: SelectSubset<T, PurchaseOrderLineItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PurchaseOrderLineItems and returns the data saved in the database.
     * @param {PurchaseOrderLineItemCreateManyAndReturnArgs} args - Arguments to create many PurchaseOrderLineItems.
     * @example
     * // Create many PurchaseOrderLineItems
     * const purchaseOrderLineItem = await prisma.purchaseOrderLineItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PurchaseOrderLineItems and only return the `id`
     * const purchaseOrderLineItemWithIdOnly = await prisma.purchaseOrderLineItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PurchaseOrderLineItemCreateManyAndReturnArgs>(args?: SelectSubset<T, PurchaseOrderLineItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseOrderLineItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PurchaseOrderLineItem.
     * @param {PurchaseOrderLineItemDeleteArgs} args - Arguments to delete one PurchaseOrderLineItem.
     * @example
     * // Delete one PurchaseOrderLineItem
     * const PurchaseOrderLineItem = await prisma.purchaseOrderLineItem.delete({
     *   where: {
     *     // ... filter to delete one PurchaseOrderLineItem
     *   }
     * })
     * 
     */
    delete<T extends PurchaseOrderLineItemDeleteArgs>(args: SelectSubset<T, PurchaseOrderLineItemDeleteArgs<ExtArgs>>): Prisma__PurchaseOrderLineItemClient<$Result.GetResult<Prisma.$PurchaseOrderLineItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PurchaseOrderLineItem.
     * @param {PurchaseOrderLineItemUpdateArgs} args - Arguments to update one PurchaseOrderLineItem.
     * @example
     * // Update one PurchaseOrderLineItem
     * const purchaseOrderLineItem = await prisma.purchaseOrderLineItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PurchaseOrderLineItemUpdateArgs>(args: SelectSubset<T, PurchaseOrderLineItemUpdateArgs<ExtArgs>>): Prisma__PurchaseOrderLineItemClient<$Result.GetResult<Prisma.$PurchaseOrderLineItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PurchaseOrderLineItems.
     * @param {PurchaseOrderLineItemDeleteManyArgs} args - Arguments to filter PurchaseOrderLineItems to delete.
     * @example
     * // Delete a few PurchaseOrderLineItems
     * const { count } = await prisma.purchaseOrderLineItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PurchaseOrderLineItemDeleteManyArgs>(args?: SelectSubset<T, PurchaseOrderLineItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PurchaseOrderLineItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderLineItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PurchaseOrderLineItems
     * const purchaseOrderLineItem = await prisma.purchaseOrderLineItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PurchaseOrderLineItemUpdateManyArgs>(args: SelectSubset<T, PurchaseOrderLineItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PurchaseOrderLineItems and returns the data updated in the database.
     * @param {PurchaseOrderLineItemUpdateManyAndReturnArgs} args - Arguments to update many PurchaseOrderLineItems.
     * @example
     * // Update many PurchaseOrderLineItems
     * const purchaseOrderLineItem = await prisma.purchaseOrderLineItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PurchaseOrderLineItems and only return the `id`
     * const purchaseOrderLineItemWithIdOnly = await prisma.purchaseOrderLineItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends PurchaseOrderLineItemUpdateManyAndReturnArgs>(args: SelectSubset<T, PurchaseOrderLineItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseOrderLineItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PurchaseOrderLineItem.
     * @param {PurchaseOrderLineItemUpsertArgs} args - Arguments to update or create a PurchaseOrderLineItem.
     * @example
     * // Update or create a PurchaseOrderLineItem
     * const purchaseOrderLineItem = await prisma.purchaseOrderLineItem.upsert({
     *   create: {
     *     // ... data to create a PurchaseOrderLineItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PurchaseOrderLineItem we want to update
     *   }
     * })
     */
    upsert<T extends PurchaseOrderLineItemUpsertArgs>(args: SelectSubset<T, PurchaseOrderLineItemUpsertArgs<ExtArgs>>): Prisma__PurchaseOrderLineItemClient<$Result.GetResult<Prisma.$PurchaseOrderLineItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PurchaseOrderLineItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderLineItemCountArgs} args - Arguments to filter PurchaseOrderLineItems to count.
     * @example
     * // Count the number of PurchaseOrderLineItems
     * const count = await prisma.purchaseOrderLineItem.count({
     *   where: {
     *     // ... the filter for the PurchaseOrderLineItems we want to count
     *   }
     * })
    **/
    count<T extends PurchaseOrderLineItemCountArgs>(
      args?: Subset<T, PurchaseOrderLineItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PurchaseOrderLineItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PurchaseOrderLineItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderLineItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PurchaseOrderLineItemAggregateArgs>(args: Subset<T, PurchaseOrderLineItemAggregateArgs>): Prisma.PrismaPromise<GetPurchaseOrderLineItemAggregateType<T>>

    /**
     * Group by PurchaseOrderLineItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderLineItemGroupByArgs} args - Group by arguments.
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
      T extends PurchaseOrderLineItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PurchaseOrderLineItemGroupByArgs['orderBy'] }
        : { orderBy?: PurchaseOrderLineItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PurchaseOrderLineItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchaseOrderLineItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PurchaseOrderLineItem model
   */
  readonly fields: PurchaseOrderLineItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PurchaseOrderLineItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PurchaseOrderLineItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    receipts<T extends PurchaseOrderLineItem$receiptsArgs<ExtArgs> = {}>(args?: Subset<T, PurchaseOrderLineItem$receiptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseOrderLineItemReceiptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    purchaseOrder<T extends PurchaseOrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PurchaseOrderDefaultArgs<ExtArgs>>): Prisma__PurchaseOrderClient<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PurchaseOrderLineItem model
   */
  interface PurchaseOrderLineItemFieldRefs {
    readonly id: FieldRef<"PurchaseOrderLineItem", 'Int'>
    readonly guid: FieldRef<"PurchaseOrderLineItem", 'String'>
    readonly variantSku: FieldRef<"PurchaseOrderLineItem", 'String'>
    readonly variantGuid: FieldRef<"PurchaseOrderLineItem", 'String'>
    readonly variantUPC: FieldRef<"PurchaseOrderLineItem", 'String'>
    readonly variantSupplierCode: FieldRef<"PurchaseOrderLineItem", 'String'>
    readonly variantTaxRate: FieldRef<"PurchaseOrderLineItem", 'Int'>
    readonly description: FieldRef<"PurchaseOrderLineItem", 'String'>
    readonly variantMediaURI: FieldRef<"PurchaseOrderLineItem", 'String'>
    readonly itemCost: FieldRef<"PurchaseOrderLineItem", 'Int'>
    readonly quantityOrdered: FieldRef<"PurchaseOrderLineItem", 'Int'>
    readonly packSize: FieldRef<"PurchaseOrderLineItem", 'Int'>
    readonly purchaseOrderId: FieldRef<"PurchaseOrderLineItem", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PurchaseOrderLineItem findUnique
   */
  export type PurchaseOrderLineItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrderLineItem
     */
    select?: PurchaseOrderLineItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrderLineItem
     */
    omit?: PurchaseOrderLineItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderLineItemInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseOrderLineItem to fetch.
     */
    where: PurchaseOrderLineItemWhereUniqueInput
  }

  /**
   * PurchaseOrderLineItem findUniqueOrThrow
   */
  export type PurchaseOrderLineItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrderLineItem
     */
    select?: PurchaseOrderLineItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrderLineItem
     */
    omit?: PurchaseOrderLineItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderLineItemInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseOrderLineItem to fetch.
     */
    where: PurchaseOrderLineItemWhereUniqueInput
  }

  /**
   * PurchaseOrderLineItem findFirst
   */
  export type PurchaseOrderLineItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrderLineItem
     */
    select?: PurchaseOrderLineItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrderLineItem
     */
    omit?: PurchaseOrderLineItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderLineItemInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseOrderLineItem to fetch.
     */
    where?: PurchaseOrderLineItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseOrderLineItems to fetch.
     */
    orderBy?: PurchaseOrderLineItemOrderByWithRelationInput | PurchaseOrderLineItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PurchaseOrderLineItems.
     */
    cursor?: PurchaseOrderLineItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseOrderLineItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseOrderLineItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PurchaseOrderLineItems.
     */
    distinct?: PurchaseOrderLineItemScalarFieldEnum | PurchaseOrderLineItemScalarFieldEnum[]
  }

  /**
   * PurchaseOrderLineItem findFirstOrThrow
   */
  export type PurchaseOrderLineItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrderLineItem
     */
    select?: PurchaseOrderLineItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrderLineItem
     */
    omit?: PurchaseOrderLineItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderLineItemInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseOrderLineItem to fetch.
     */
    where?: PurchaseOrderLineItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseOrderLineItems to fetch.
     */
    orderBy?: PurchaseOrderLineItemOrderByWithRelationInput | PurchaseOrderLineItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PurchaseOrderLineItems.
     */
    cursor?: PurchaseOrderLineItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseOrderLineItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseOrderLineItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PurchaseOrderLineItems.
     */
    distinct?: PurchaseOrderLineItemScalarFieldEnum | PurchaseOrderLineItemScalarFieldEnum[]
  }

  /**
   * PurchaseOrderLineItem findMany
   */
  export type PurchaseOrderLineItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrderLineItem
     */
    select?: PurchaseOrderLineItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrderLineItem
     */
    omit?: PurchaseOrderLineItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderLineItemInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseOrderLineItems to fetch.
     */
    where?: PurchaseOrderLineItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseOrderLineItems to fetch.
     */
    orderBy?: PurchaseOrderLineItemOrderByWithRelationInput | PurchaseOrderLineItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PurchaseOrderLineItems.
     */
    cursor?: PurchaseOrderLineItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseOrderLineItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseOrderLineItems.
     */
    skip?: number
    distinct?: PurchaseOrderLineItemScalarFieldEnum | PurchaseOrderLineItemScalarFieldEnum[]
  }

  /**
   * PurchaseOrderLineItem create
   */
  export type PurchaseOrderLineItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrderLineItem
     */
    select?: PurchaseOrderLineItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrderLineItem
     */
    omit?: PurchaseOrderLineItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderLineItemInclude<ExtArgs> | null
    /**
     * The data needed to create a PurchaseOrderLineItem.
     */
    data: XOR<PurchaseOrderLineItemCreateInput, PurchaseOrderLineItemUncheckedCreateInput>
  }

  /**
   * PurchaseOrderLineItem createMany
   */
  export type PurchaseOrderLineItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PurchaseOrderLineItems.
     */
    data: PurchaseOrderLineItemCreateManyInput | PurchaseOrderLineItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PurchaseOrderLineItem createManyAndReturn
   */
  export type PurchaseOrderLineItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrderLineItem
     */
    select?: PurchaseOrderLineItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrderLineItem
     */
    omit?: PurchaseOrderLineItemOmit<ExtArgs> | null
    /**
     * The data used to create many PurchaseOrderLineItems.
     */
    data: PurchaseOrderLineItemCreateManyInput | PurchaseOrderLineItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderLineItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PurchaseOrderLineItem update
   */
  export type PurchaseOrderLineItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrderLineItem
     */
    select?: PurchaseOrderLineItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrderLineItem
     */
    omit?: PurchaseOrderLineItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderLineItemInclude<ExtArgs> | null
    /**
     * The data needed to update a PurchaseOrderLineItem.
     */
    data: XOR<PurchaseOrderLineItemUpdateInput, PurchaseOrderLineItemUncheckedUpdateInput>
    /**
     * Choose, which PurchaseOrderLineItem to update.
     */
    where: PurchaseOrderLineItemWhereUniqueInput
  }

  /**
   * PurchaseOrderLineItem updateMany
   */
  export type PurchaseOrderLineItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PurchaseOrderLineItems.
     */
    data: XOR<PurchaseOrderLineItemUpdateManyMutationInput, PurchaseOrderLineItemUncheckedUpdateManyInput>
    /**
     * Filter which PurchaseOrderLineItems to update
     */
    where?: PurchaseOrderLineItemWhereInput
    /**
     * Limit how many PurchaseOrderLineItems to update.
     */
    limit?: number
  }

  /**
   * PurchaseOrderLineItem updateManyAndReturn
   */
  export type PurchaseOrderLineItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrderLineItem
     */
    select?: PurchaseOrderLineItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrderLineItem
     */
    omit?: PurchaseOrderLineItemOmit<ExtArgs> | null
    /**
     * The data used to update PurchaseOrderLineItems.
     */
    data: XOR<PurchaseOrderLineItemUpdateManyMutationInput, PurchaseOrderLineItemUncheckedUpdateManyInput>
    /**
     * Filter which PurchaseOrderLineItems to update
     */
    where?: PurchaseOrderLineItemWhereInput
    /**
     * Limit how many PurchaseOrderLineItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderLineItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PurchaseOrderLineItem upsert
   */
  export type PurchaseOrderLineItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrderLineItem
     */
    select?: PurchaseOrderLineItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrderLineItem
     */
    omit?: PurchaseOrderLineItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderLineItemInclude<ExtArgs> | null
    /**
     * The filter to search for the PurchaseOrderLineItem to update in case it exists.
     */
    where: PurchaseOrderLineItemWhereUniqueInput
    /**
     * In case the PurchaseOrderLineItem found by the `where` argument doesn't exist, create a new PurchaseOrderLineItem with this data.
     */
    create: XOR<PurchaseOrderLineItemCreateInput, PurchaseOrderLineItemUncheckedCreateInput>
    /**
     * In case the PurchaseOrderLineItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PurchaseOrderLineItemUpdateInput, PurchaseOrderLineItemUncheckedUpdateInput>
  }

  /**
   * PurchaseOrderLineItem delete
   */
  export type PurchaseOrderLineItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrderLineItem
     */
    select?: PurchaseOrderLineItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrderLineItem
     */
    omit?: PurchaseOrderLineItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderLineItemInclude<ExtArgs> | null
    /**
     * Filter which PurchaseOrderLineItem to delete.
     */
    where: PurchaseOrderLineItemWhereUniqueInput
  }

  /**
   * PurchaseOrderLineItem deleteMany
   */
  export type PurchaseOrderLineItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PurchaseOrderLineItems to delete
     */
    where?: PurchaseOrderLineItemWhereInput
    /**
     * Limit how many PurchaseOrderLineItems to delete.
     */
    limit?: number
  }

  /**
   * PurchaseOrderLineItem.receipts
   */
  export type PurchaseOrderLineItem$receiptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrderLineItemReceipt
     */
    select?: PurchaseOrderLineItemReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrderLineItemReceipt
     */
    omit?: PurchaseOrderLineItemReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderLineItemReceiptInclude<ExtArgs> | null
    where?: PurchaseOrderLineItemReceiptWhereInput
    orderBy?: PurchaseOrderLineItemReceiptOrderByWithRelationInput | PurchaseOrderLineItemReceiptOrderByWithRelationInput[]
    cursor?: PurchaseOrderLineItemReceiptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchaseOrderLineItemReceiptScalarFieldEnum | PurchaseOrderLineItemReceiptScalarFieldEnum[]
  }

  /**
   * PurchaseOrderLineItem without action
   */
  export type PurchaseOrderLineItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrderLineItem
     */
    select?: PurchaseOrderLineItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrderLineItem
     */
    omit?: PurchaseOrderLineItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderLineItemInclude<ExtArgs> | null
  }


  /**
   * Model PurchaseOrderLineItemReceipt
   */

  export type AggregatePurchaseOrderLineItemReceipt = {
    _count: PurchaseOrderLineItemReceiptCountAggregateOutputType | null
    _avg: PurchaseOrderLineItemReceiptAvgAggregateOutputType | null
    _sum: PurchaseOrderLineItemReceiptSumAggregateOutputType | null
    _min: PurchaseOrderLineItemReceiptMinAggregateOutputType | null
    _max: PurchaseOrderLineItemReceiptMaxAggregateOutputType | null
  }

  export type PurchaseOrderLineItemReceiptAvgAggregateOutputType = {
    id: number | null
    received: number | null
    receivedPrice: number | null
    purchaseOrderLineItemId: number | null
  }

  export type PurchaseOrderLineItemReceiptSumAggregateOutputType = {
    id: number | null
    received: number | null
    receivedPrice: number | null
    purchaseOrderLineItemId: number | null
  }

  export type PurchaseOrderLineItemReceiptMinAggregateOutputType = {
    id: number | null
    guid: string | null
    date: Date | null
    received: number | null
    receivedPrice: number | null
    purchaseOrderLineItemId: number | null
  }

  export type PurchaseOrderLineItemReceiptMaxAggregateOutputType = {
    id: number | null
    guid: string | null
    date: Date | null
    received: number | null
    receivedPrice: number | null
    purchaseOrderLineItemId: number | null
  }

  export type PurchaseOrderLineItemReceiptCountAggregateOutputType = {
    id: number
    guid: number
    date: number
    received: number
    receivedPrice: number
    purchaseOrderLineItemId: number
    _all: number
  }


  export type PurchaseOrderLineItemReceiptAvgAggregateInputType = {
    id?: true
    received?: true
    receivedPrice?: true
    purchaseOrderLineItemId?: true
  }

  export type PurchaseOrderLineItemReceiptSumAggregateInputType = {
    id?: true
    received?: true
    receivedPrice?: true
    purchaseOrderLineItemId?: true
  }

  export type PurchaseOrderLineItemReceiptMinAggregateInputType = {
    id?: true
    guid?: true
    date?: true
    received?: true
    receivedPrice?: true
    purchaseOrderLineItemId?: true
  }

  export type PurchaseOrderLineItemReceiptMaxAggregateInputType = {
    id?: true
    guid?: true
    date?: true
    received?: true
    receivedPrice?: true
    purchaseOrderLineItemId?: true
  }

  export type PurchaseOrderLineItemReceiptCountAggregateInputType = {
    id?: true
    guid?: true
    date?: true
    received?: true
    receivedPrice?: true
    purchaseOrderLineItemId?: true
    _all?: true
  }

  export type PurchaseOrderLineItemReceiptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PurchaseOrderLineItemReceipt to aggregate.
     */
    where?: PurchaseOrderLineItemReceiptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseOrderLineItemReceipts to fetch.
     */
    orderBy?: PurchaseOrderLineItemReceiptOrderByWithRelationInput | PurchaseOrderLineItemReceiptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PurchaseOrderLineItemReceiptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseOrderLineItemReceipts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseOrderLineItemReceipts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PurchaseOrderLineItemReceipts
    **/
    _count?: true | PurchaseOrderLineItemReceiptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PurchaseOrderLineItemReceiptAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PurchaseOrderLineItemReceiptSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PurchaseOrderLineItemReceiptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PurchaseOrderLineItemReceiptMaxAggregateInputType
  }

  export type GetPurchaseOrderLineItemReceiptAggregateType<T extends PurchaseOrderLineItemReceiptAggregateArgs> = {
        [P in keyof T & keyof AggregatePurchaseOrderLineItemReceipt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePurchaseOrderLineItemReceipt[P]>
      : GetScalarType<T[P], AggregatePurchaseOrderLineItemReceipt[P]>
  }




  export type PurchaseOrderLineItemReceiptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseOrderLineItemReceiptWhereInput
    orderBy?: PurchaseOrderLineItemReceiptOrderByWithAggregationInput | PurchaseOrderLineItemReceiptOrderByWithAggregationInput[]
    by: PurchaseOrderLineItemReceiptScalarFieldEnum[] | PurchaseOrderLineItemReceiptScalarFieldEnum
    having?: PurchaseOrderLineItemReceiptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PurchaseOrderLineItemReceiptCountAggregateInputType | true
    _avg?: PurchaseOrderLineItemReceiptAvgAggregateInputType
    _sum?: PurchaseOrderLineItemReceiptSumAggregateInputType
    _min?: PurchaseOrderLineItemReceiptMinAggregateInputType
    _max?: PurchaseOrderLineItemReceiptMaxAggregateInputType
  }

  export type PurchaseOrderLineItemReceiptGroupByOutputType = {
    id: number
    guid: string
    date: Date
    received: number
    receivedPrice: number
    purchaseOrderLineItemId: number | null
    _count: PurchaseOrderLineItemReceiptCountAggregateOutputType | null
    _avg: PurchaseOrderLineItemReceiptAvgAggregateOutputType | null
    _sum: PurchaseOrderLineItemReceiptSumAggregateOutputType | null
    _min: PurchaseOrderLineItemReceiptMinAggregateOutputType | null
    _max: PurchaseOrderLineItemReceiptMaxAggregateOutputType | null
  }

  type GetPurchaseOrderLineItemReceiptGroupByPayload<T extends PurchaseOrderLineItemReceiptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PurchaseOrderLineItemReceiptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PurchaseOrderLineItemReceiptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PurchaseOrderLineItemReceiptGroupByOutputType[P]>
            : GetScalarType<T[P], PurchaseOrderLineItemReceiptGroupByOutputType[P]>
        }
      >
    >


  export type PurchaseOrderLineItemReceiptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guid?: boolean
    date?: boolean
    received?: boolean
    receivedPrice?: boolean
    purchaseOrderLineItemId?: boolean
    PurchaseOrderLineItem?: boolean | PurchaseOrderLineItemReceipt$PurchaseOrderLineItemArgs<ExtArgs>
  }, ExtArgs["result"]["purchaseOrderLineItemReceipt"]>

  export type PurchaseOrderLineItemReceiptSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guid?: boolean
    date?: boolean
    received?: boolean
    receivedPrice?: boolean
    purchaseOrderLineItemId?: boolean
    PurchaseOrderLineItem?: boolean | PurchaseOrderLineItemReceipt$PurchaseOrderLineItemArgs<ExtArgs>
  }, ExtArgs["result"]["purchaseOrderLineItemReceipt"]>

  export type PurchaseOrderLineItemReceiptSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guid?: boolean
    date?: boolean
    received?: boolean
    receivedPrice?: boolean
    purchaseOrderLineItemId?: boolean
    PurchaseOrderLineItem?: boolean | PurchaseOrderLineItemReceipt$PurchaseOrderLineItemArgs<ExtArgs>
  }, ExtArgs["result"]["purchaseOrderLineItemReceipt"]>

  export type PurchaseOrderLineItemReceiptSelectScalar = {
    id?: boolean
    guid?: boolean
    date?: boolean
    received?: boolean
    receivedPrice?: boolean
    purchaseOrderLineItemId?: boolean
  }

  export type PurchaseOrderLineItemReceiptOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "guid" | "date" | "received" | "receivedPrice" | "purchaseOrderLineItemId", ExtArgs["result"]["purchaseOrderLineItemReceipt"]>
  export type PurchaseOrderLineItemReceiptInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PurchaseOrderLineItem?: boolean | PurchaseOrderLineItemReceipt$PurchaseOrderLineItemArgs<ExtArgs>
  }
  export type PurchaseOrderLineItemReceiptIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PurchaseOrderLineItem?: boolean | PurchaseOrderLineItemReceipt$PurchaseOrderLineItemArgs<ExtArgs>
  }
  export type PurchaseOrderLineItemReceiptIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PurchaseOrderLineItem?: boolean | PurchaseOrderLineItemReceipt$PurchaseOrderLineItemArgs<ExtArgs>
  }

  export type $PurchaseOrderLineItemReceiptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PurchaseOrderLineItemReceipt"
    objects: {
      PurchaseOrderLineItem: Prisma.$PurchaseOrderLineItemPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      guid: string
      date: Date
      received: number
      receivedPrice: number
      purchaseOrderLineItemId: number | null
    }, ExtArgs["result"]["purchaseOrderLineItemReceipt"]>
    composites: {}
  }

  type PurchaseOrderLineItemReceiptGetPayload<S extends boolean | null | undefined | PurchaseOrderLineItemReceiptDefaultArgs> = $Result.GetResult<Prisma.$PurchaseOrderLineItemReceiptPayload, S>

  type PurchaseOrderLineItemReceiptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PurchaseOrderLineItemReceiptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PurchaseOrderLineItemReceiptCountAggregateInputType | true
    }

  export interface PurchaseOrderLineItemReceiptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PurchaseOrderLineItemReceipt'], meta: { name: 'PurchaseOrderLineItemReceipt' } }
    /**
     * Find zero or one PurchaseOrderLineItemReceipt that matches the filter.
     * @param {PurchaseOrderLineItemReceiptFindUniqueArgs} args - Arguments to find a PurchaseOrderLineItemReceipt
     * @example
     * // Get one PurchaseOrderLineItemReceipt
     * const purchaseOrderLineItemReceipt = await prisma.purchaseOrderLineItemReceipt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PurchaseOrderLineItemReceiptFindUniqueArgs>(args: SelectSubset<T, PurchaseOrderLineItemReceiptFindUniqueArgs<ExtArgs>>): Prisma__PurchaseOrderLineItemReceiptClient<$Result.GetResult<Prisma.$PurchaseOrderLineItemReceiptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PurchaseOrderLineItemReceipt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PurchaseOrderLineItemReceiptFindUniqueOrThrowArgs} args - Arguments to find a PurchaseOrderLineItemReceipt
     * @example
     * // Get one PurchaseOrderLineItemReceipt
     * const purchaseOrderLineItemReceipt = await prisma.purchaseOrderLineItemReceipt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PurchaseOrderLineItemReceiptFindUniqueOrThrowArgs>(args: SelectSubset<T, PurchaseOrderLineItemReceiptFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PurchaseOrderLineItemReceiptClient<$Result.GetResult<Prisma.$PurchaseOrderLineItemReceiptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PurchaseOrderLineItemReceipt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderLineItemReceiptFindFirstArgs} args - Arguments to find a PurchaseOrderLineItemReceipt
     * @example
     * // Get one PurchaseOrderLineItemReceipt
     * const purchaseOrderLineItemReceipt = await prisma.purchaseOrderLineItemReceipt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PurchaseOrderLineItemReceiptFindFirstArgs>(args?: SelectSubset<T, PurchaseOrderLineItemReceiptFindFirstArgs<ExtArgs>>): Prisma__PurchaseOrderLineItemReceiptClient<$Result.GetResult<Prisma.$PurchaseOrderLineItemReceiptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PurchaseOrderLineItemReceipt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderLineItemReceiptFindFirstOrThrowArgs} args - Arguments to find a PurchaseOrderLineItemReceipt
     * @example
     * // Get one PurchaseOrderLineItemReceipt
     * const purchaseOrderLineItemReceipt = await prisma.purchaseOrderLineItemReceipt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PurchaseOrderLineItemReceiptFindFirstOrThrowArgs>(args?: SelectSubset<T, PurchaseOrderLineItemReceiptFindFirstOrThrowArgs<ExtArgs>>): Prisma__PurchaseOrderLineItemReceiptClient<$Result.GetResult<Prisma.$PurchaseOrderLineItemReceiptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PurchaseOrderLineItemReceipts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderLineItemReceiptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PurchaseOrderLineItemReceipts
     * const purchaseOrderLineItemReceipts = await prisma.purchaseOrderLineItemReceipt.findMany()
     * 
     * // Get first 10 PurchaseOrderLineItemReceipts
     * const purchaseOrderLineItemReceipts = await prisma.purchaseOrderLineItemReceipt.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const purchaseOrderLineItemReceiptWithIdOnly = await prisma.purchaseOrderLineItemReceipt.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PurchaseOrderLineItemReceiptFindManyArgs>(args?: SelectSubset<T, PurchaseOrderLineItemReceiptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseOrderLineItemReceiptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PurchaseOrderLineItemReceipt.
     * @param {PurchaseOrderLineItemReceiptCreateArgs} args - Arguments to create a PurchaseOrderLineItemReceipt.
     * @example
     * // Create one PurchaseOrderLineItemReceipt
     * const PurchaseOrderLineItemReceipt = await prisma.purchaseOrderLineItemReceipt.create({
     *   data: {
     *     // ... data to create a PurchaseOrderLineItemReceipt
     *   }
     * })
     * 
     */
    create<T extends PurchaseOrderLineItemReceiptCreateArgs>(args: SelectSubset<T, PurchaseOrderLineItemReceiptCreateArgs<ExtArgs>>): Prisma__PurchaseOrderLineItemReceiptClient<$Result.GetResult<Prisma.$PurchaseOrderLineItemReceiptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PurchaseOrderLineItemReceipts.
     * @param {PurchaseOrderLineItemReceiptCreateManyArgs} args - Arguments to create many PurchaseOrderLineItemReceipts.
     * @example
     * // Create many PurchaseOrderLineItemReceipts
     * const purchaseOrderLineItemReceipt = await prisma.purchaseOrderLineItemReceipt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PurchaseOrderLineItemReceiptCreateManyArgs>(args?: SelectSubset<T, PurchaseOrderLineItemReceiptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PurchaseOrderLineItemReceipts and returns the data saved in the database.
     * @param {PurchaseOrderLineItemReceiptCreateManyAndReturnArgs} args - Arguments to create many PurchaseOrderLineItemReceipts.
     * @example
     * // Create many PurchaseOrderLineItemReceipts
     * const purchaseOrderLineItemReceipt = await prisma.purchaseOrderLineItemReceipt.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PurchaseOrderLineItemReceipts and only return the `id`
     * const purchaseOrderLineItemReceiptWithIdOnly = await prisma.purchaseOrderLineItemReceipt.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PurchaseOrderLineItemReceiptCreateManyAndReturnArgs>(args?: SelectSubset<T, PurchaseOrderLineItemReceiptCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseOrderLineItemReceiptPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PurchaseOrderLineItemReceipt.
     * @param {PurchaseOrderLineItemReceiptDeleteArgs} args - Arguments to delete one PurchaseOrderLineItemReceipt.
     * @example
     * // Delete one PurchaseOrderLineItemReceipt
     * const PurchaseOrderLineItemReceipt = await prisma.purchaseOrderLineItemReceipt.delete({
     *   where: {
     *     // ... filter to delete one PurchaseOrderLineItemReceipt
     *   }
     * })
     * 
     */
    delete<T extends PurchaseOrderLineItemReceiptDeleteArgs>(args: SelectSubset<T, PurchaseOrderLineItemReceiptDeleteArgs<ExtArgs>>): Prisma__PurchaseOrderLineItemReceiptClient<$Result.GetResult<Prisma.$PurchaseOrderLineItemReceiptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PurchaseOrderLineItemReceipt.
     * @param {PurchaseOrderLineItemReceiptUpdateArgs} args - Arguments to update one PurchaseOrderLineItemReceipt.
     * @example
     * // Update one PurchaseOrderLineItemReceipt
     * const purchaseOrderLineItemReceipt = await prisma.purchaseOrderLineItemReceipt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PurchaseOrderLineItemReceiptUpdateArgs>(args: SelectSubset<T, PurchaseOrderLineItemReceiptUpdateArgs<ExtArgs>>): Prisma__PurchaseOrderLineItemReceiptClient<$Result.GetResult<Prisma.$PurchaseOrderLineItemReceiptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PurchaseOrderLineItemReceipts.
     * @param {PurchaseOrderLineItemReceiptDeleteManyArgs} args - Arguments to filter PurchaseOrderLineItemReceipts to delete.
     * @example
     * // Delete a few PurchaseOrderLineItemReceipts
     * const { count } = await prisma.purchaseOrderLineItemReceipt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PurchaseOrderLineItemReceiptDeleteManyArgs>(args?: SelectSubset<T, PurchaseOrderLineItemReceiptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PurchaseOrderLineItemReceipts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderLineItemReceiptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PurchaseOrderLineItemReceipts
     * const purchaseOrderLineItemReceipt = await prisma.purchaseOrderLineItemReceipt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PurchaseOrderLineItemReceiptUpdateManyArgs>(args: SelectSubset<T, PurchaseOrderLineItemReceiptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PurchaseOrderLineItemReceipts and returns the data updated in the database.
     * @param {PurchaseOrderLineItemReceiptUpdateManyAndReturnArgs} args - Arguments to update many PurchaseOrderLineItemReceipts.
     * @example
     * // Update many PurchaseOrderLineItemReceipts
     * const purchaseOrderLineItemReceipt = await prisma.purchaseOrderLineItemReceipt.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PurchaseOrderLineItemReceipts and only return the `id`
     * const purchaseOrderLineItemReceiptWithIdOnly = await prisma.purchaseOrderLineItemReceipt.updateManyAndReturn({
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
    updateManyAndReturn<T extends PurchaseOrderLineItemReceiptUpdateManyAndReturnArgs>(args: SelectSubset<T, PurchaseOrderLineItemReceiptUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseOrderLineItemReceiptPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PurchaseOrderLineItemReceipt.
     * @param {PurchaseOrderLineItemReceiptUpsertArgs} args - Arguments to update or create a PurchaseOrderLineItemReceipt.
     * @example
     * // Update or create a PurchaseOrderLineItemReceipt
     * const purchaseOrderLineItemReceipt = await prisma.purchaseOrderLineItemReceipt.upsert({
     *   create: {
     *     // ... data to create a PurchaseOrderLineItemReceipt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PurchaseOrderLineItemReceipt we want to update
     *   }
     * })
     */
    upsert<T extends PurchaseOrderLineItemReceiptUpsertArgs>(args: SelectSubset<T, PurchaseOrderLineItemReceiptUpsertArgs<ExtArgs>>): Prisma__PurchaseOrderLineItemReceiptClient<$Result.GetResult<Prisma.$PurchaseOrderLineItemReceiptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PurchaseOrderLineItemReceipts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderLineItemReceiptCountArgs} args - Arguments to filter PurchaseOrderLineItemReceipts to count.
     * @example
     * // Count the number of PurchaseOrderLineItemReceipts
     * const count = await prisma.purchaseOrderLineItemReceipt.count({
     *   where: {
     *     // ... the filter for the PurchaseOrderLineItemReceipts we want to count
     *   }
     * })
    **/
    count<T extends PurchaseOrderLineItemReceiptCountArgs>(
      args?: Subset<T, PurchaseOrderLineItemReceiptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PurchaseOrderLineItemReceiptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PurchaseOrderLineItemReceipt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderLineItemReceiptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PurchaseOrderLineItemReceiptAggregateArgs>(args: Subset<T, PurchaseOrderLineItemReceiptAggregateArgs>): Prisma.PrismaPromise<GetPurchaseOrderLineItemReceiptAggregateType<T>>

    /**
     * Group by PurchaseOrderLineItemReceipt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderLineItemReceiptGroupByArgs} args - Group by arguments.
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
      T extends PurchaseOrderLineItemReceiptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PurchaseOrderLineItemReceiptGroupByArgs['orderBy'] }
        : { orderBy?: PurchaseOrderLineItemReceiptGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PurchaseOrderLineItemReceiptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchaseOrderLineItemReceiptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PurchaseOrderLineItemReceipt model
   */
  readonly fields: PurchaseOrderLineItemReceiptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PurchaseOrderLineItemReceipt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PurchaseOrderLineItemReceiptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    PurchaseOrderLineItem<T extends PurchaseOrderLineItemReceipt$PurchaseOrderLineItemArgs<ExtArgs> = {}>(args?: Subset<T, PurchaseOrderLineItemReceipt$PurchaseOrderLineItemArgs<ExtArgs>>): Prisma__PurchaseOrderLineItemClient<$Result.GetResult<Prisma.$PurchaseOrderLineItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PurchaseOrderLineItemReceipt model
   */
  interface PurchaseOrderLineItemReceiptFieldRefs {
    readonly id: FieldRef<"PurchaseOrderLineItemReceipt", 'Int'>
    readonly guid: FieldRef<"PurchaseOrderLineItemReceipt", 'String'>
    readonly date: FieldRef<"PurchaseOrderLineItemReceipt", 'DateTime'>
    readonly received: FieldRef<"PurchaseOrderLineItemReceipt", 'Int'>
    readonly receivedPrice: FieldRef<"PurchaseOrderLineItemReceipt", 'Int'>
    readonly purchaseOrderLineItemId: FieldRef<"PurchaseOrderLineItemReceipt", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PurchaseOrderLineItemReceipt findUnique
   */
  export type PurchaseOrderLineItemReceiptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrderLineItemReceipt
     */
    select?: PurchaseOrderLineItemReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrderLineItemReceipt
     */
    omit?: PurchaseOrderLineItemReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderLineItemReceiptInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseOrderLineItemReceipt to fetch.
     */
    where: PurchaseOrderLineItemReceiptWhereUniqueInput
  }

  /**
   * PurchaseOrderLineItemReceipt findUniqueOrThrow
   */
  export type PurchaseOrderLineItemReceiptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrderLineItemReceipt
     */
    select?: PurchaseOrderLineItemReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrderLineItemReceipt
     */
    omit?: PurchaseOrderLineItemReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderLineItemReceiptInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseOrderLineItemReceipt to fetch.
     */
    where: PurchaseOrderLineItemReceiptWhereUniqueInput
  }

  /**
   * PurchaseOrderLineItemReceipt findFirst
   */
  export type PurchaseOrderLineItemReceiptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrderLineItemReceipt
     */
    select?: PurchaseOrderLineItemReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrderLineItemReceipt
     */
    omit?: PurchaseOrderLineItemReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderLineItemReceiptInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseOrderLineItemReceipt to fetch.
     */
    where?: PurchaseOrderLineItemReceiptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseOrderLineItemReceipts to fetch.
     */
    orderBy?: PurchaseOrderLineItemReceiptOrderByWithRelationInput | PurchaseOrderLineItemReceiptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PurchaseOrderLineItemReceipts.
     */
    cursor?: PurchaseOrderLineItemReceiptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseOrderLineItemReceipts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseOrderLineItemReceipts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PurchaseOrderLineItemReceipts.
     */
    distinct?: PurchaseOrderLineItemReceiptScalarFieldEnum | PurchaseOrderLineItemReceiptScalarFieldEnum[]
  }

  /**
   * PurchaseOrderLineItemReceipt findFirstOrThrow
   */
  export type PurchaseOrderLineItemReceiptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrderLineItemReceipt
     */
    select?: PurchaseOrderLineItemReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrderLineItemReceipt
     */
    omit?: PurchaseOrderLineItemReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderLineItemReceiptInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseOrderLineItemReceipt to fetch.
     */
    where?: PurchaseOrderLineItemReceiptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseOrderLineItemReceipts to fetch.
     */
    orderBy?: PurchaseOrderLineItemReceiptOrderByWithRelationInput | PurchaseOrderLineItemReceiptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PurchaseOrderLineItemReceipts.
     */
    cursor?: PurchaseOrderLineItemReceiptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseOrderLineItemReceipts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseOrderLineItemReceipts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PurchaseOrderLineItemReceipts.
     */
    distinct?: PurchaseOrderLineItemReceiptScalarFieldEnum | PurchaseOrderLineItemReceiptScalarFieldEnum[]
  }

  /**
   * PurchaseOrderLineItemReceipt findMany
   */
  export type PurchaseOrderLineItemReceiptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrderLineItemReceipt
     */
    select?: PurchaseOrderLineItemReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrderLineItemReceipt
     */
    omit?: PurchaseOrderLineItemReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderLineItemReceiptInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseOrderLineItemReceipts to fetch.
     */
    where?: PurchaseOrderLineItemReceiptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseOrderLineItemReceipts to fetch.
     */
    orderBy?: PurchaseOrderLineItemReceiptOrderByWithRelationInput | PurchaseOrderLineItemReceiptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PurchaseOrderLineItemReceipts.
     */
    cursor?: PurchaseOrderLineItemReceiptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseOrderLineItemReceipts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseOrderLineItemReceipts.
     */
    skip?: number
    distinct?: PurchaseOrderLineItemReceiptScalarFieldEnum | PurchaseOrderLineItemReceiptScalarFieldEnum[]
  }

  /**
   * PurchaseOrderLineItemReceipt create
   */
  export type PurchaseOrderLineItemReceiptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrderLineItemReceipt
     */
    select?: PurchaseOrderLineItemReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrderLineItemReceipt
     */
    omit?: PurchaseOrderLineItemReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderLineItemReceiptInclude<ExtArgs> | null
    /**
     * The data needed to create a PurchaseOrderLineItemReceipt.
     */
    data: XOR<PurchaseOrderLineItemReceiptCreateInput, PurchaseOrderLineItemReceiptUncheckedCreateInput>
  }

  /**
   * PurchaseOrderLineItemReceipt createMany
   */
  export type PurchaseOrderLineItemReceiptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PurchaseOrderLineItemReceipts.
     */
    data: PurchaseOrderLineItemReceiptCreateManyInput | PurchaseOrderLineItemReceiptCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PurchaseOrderLineItemReceipt createManyAndReturn
   */
  export type PurchaseOrderLineItemReceiptCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrderLineItemReceipt
     */
    select?: PurchaseOrderLineItemReceiptSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrderLineItemReceipt
     */
    omit?: PurchaseOrderLineItemReceiptOmit<ExtArgs> | null
    /**
     * The data used to create many PurchaseOrderLineItemReceipts.
     */
    data: PurchaseOrderLineItemReceiptCreateManyInput | PurchaseOrderLineItemReceiptCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderLineItemReceiptIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PurchaseOrderLineItemReceipt update
   */
  export type PurchaseOrderLineItemReceiptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrderLineItemReceipt
     */
    select?: PurchaseOrderLineItemReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrderLineItemReceipt
     */
    omit?: PurchaseOrderLineItemReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderLineItemReceiptInclude<ExtArgs> | null
    /**
     * The data needed to update a PurchaseOrderLineItemReceipt.
     */
    data: XOR<PurchaseOrderLineItemReceiptUpdateInput, PurchaseOrderLineItemReceiptUncheckedUpdateInput>
    /**
     * Choose, which PurchaseOrderLineItemReceipt to update.
     */
    where: PurchaseOrderLineItemReceiptWhereUniqueInput
  }

  /**
   * PurchaseOrderLineItemReceipt updateMany
   */
  export type PurchaseOrderLineItemReceiptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PurchaseOrderLineItemReceipts.
     */
    data: XOR<PurchaseOrderLineItemReceiptUpdateManyMutationInput, PurchaseOrderLineItemReceiptUncheckedUpdateManyInput>
    /**
     * Filter which PurchaseOrderLineItemReceipts to update
     */
    where?: PurchaseOrderLineItemReceiptWhereInput
    /**
     * Limit how many PurchaseOrderLineItemReceipts to update.
     */
    limit?: number
  }

  /**
   * PurchaseOrderLineItemReceipt updateManyAndReturn
   */
  export type PurchaseOrderLineItemReceiptUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrderLineItemReceipt
     */
    select?: PurchaseOrderLineItemReceiptSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrderLineItemReceipt
     */
    omit?: PurchaseOrderLineItemReceiptOmit<ExtArgs> | null
    /**
     * The data used to update PurchaseOrderLineItemReceipts.
     */
    data: XOR<PurchaseOrderLineItemReceiptUpdateManyMutationInput, PurchaseOrderLineItemReceiptUncheckedUpdateManyInput>
    /**
     * Filter which PurchaseOrderLineItemReceipts to update
     */
    where?: PurchaseOrderLineItemReceiptWhereInput
    /**
     * Limit how many PurchaseOrderLineItemReceipts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderLineItemReceiptIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PurchaseOrderLineItemReceipt upsert
   */
  export type PurchaseOrderLineItemReceiptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrderLineItemReceipt
     */
    select?: PurchaseOrderLineItemReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrderLineItemReceipt
     */
    omit?: PurchaseOrderLineItemReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderLineItemReceiptInclude<ExtArgs> | null
    /**
     * The filter to search for the PurchaseOrderLineItemReceipt to update in case it exists.
     */
    where: PurchaseOrderLineItemReceiptWhereUniqueInput
    /**
     * In case the PurchaseOrderLineItemReceipt found by the `where` argument doesn't exist, create a new PurchaseOrderLineItemReceipt with this data.
     */
    create: XOR<PurchaseOrderLineItemReceiptCreateInput, PurchaseOrderLineItemReceiptUncheckedCreateInput>
    /**
     * In case the PurchaseOrderLineItemReceipt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PurchaseOrderLineItemReceiptUpdateInput, PurchaseOrderLineItemReceiptUncheckedUpdateInput>
  }

  /**
   * PurchaseOrderLineItemReceipt delete
   */
  export type PurchaseOrderLineItemReceiptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrderLineItemReceipt
     */
    select?: PurchaseOrderLineItemReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrderLineItemReceipt
     */
    omit?: PurchaseOrderLineItemReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderLineItemReceiptInclude<ExtArgs> | null
    /**
     * Filter which PurchaseOrderLineItemReceipt to delete.
     */
    where: PurchaseOrderLineItemReceiptWhereUniqueInput
  }

  /**
   * PurchaseOrderLineItemReceipt deleteMany
   */
  export type PurchaseOrderLineItemReceiptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PurchaseOrderLineItemReceipts to delete
     */
    where?: PurchaseOrderLineItemReceiptWhereInput
    /**
     * Limit how many PurchaseOrderLineItemReceipts to delete.
     */
    limit?: number
  }

  /**
   * PurchaseOrderLineItemReceipt.PurchaseOrderLineItem
   */
  export type PurchaseOrderLineItemReceipt$PurchaseOrderLineItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrderLineItem
     */
    select?: PurchaseOrderLineItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrderLineItem
     */
    omit?: PurchaseOrderLineItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderLineItemInclude<ExtArgs> | null
    where?: PurchaseOrderLineItemWhereInput
  }

  /**
   * PurchaseOrderLineItemReceipt without action
   */
  export type PurchaseOrderLineItemReceiptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrderLineItemReceipt
     */
    select?: PurchaseOrderLineItemReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrderLineItemReceipt
     */
    omit?: PurchaseOrderLineItemReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderLineItemReceiptInclude<ExtArgs> | null
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


  export const AddressScalarFieldEnum: {
    id: 'id',
    guid: 'guid',
    address1: 'address1',
    address2: 'address2',
    address3: 'address3',
    city: 'city',
    postcode: 'postcode',
    supplierId: 'supplierId'
  };

  export type AddressScalarFieldEnum = (typeof AddressScalarFieldEnum)[keyof typeof AddressScalarFieldEnum]


  export const ContactScalarFieldEnum: {
    id: 'id',
    guid: 'guid',
    name: 'name',
    email: 'email',
    phone: 'phone',
    supplierId: 'supplierId'
  };

  export type ContactScalarFieldEnum = (typeof ContactScalarFieldEnum)[keyof typeof ContactScalarFieldEnum]


  export const SupplierScalarFieldEnum: {
    id: 'id',
    guid: 'guid',
    name: 'name',
    website: 'website'
  };

  export type SupplierScalarFieldEnum = (typeof SupplierScalarFieldEnum)[keyof typeof SupplierScalarFieldEnum]


  export const PurchaseOrderScalarFieldEnum: {
    id: 'id',
    guid: 'guid',
    number: 'number',
    state: 'state',
    issueDate: 'issueDate',
    pendingXero: 'pendingXero',
    subTotal: 'subTotal',
    taxAmount: 'taxAmount',
    total: 'total',
    supplierId: 'supplierId'
  };

  export type PurchaseOrderScalarFieldEnum = (typeof PurchaseOrderScalarFieldEnum)[keyof typeof PurchaseOrderScalarFieldEnum]


  export const PurchaseOrderLineItemScalarFieldEnum: {
    id: 'id',
    guid: 'guid',
    variantSku: 'variantSku',
    variantGuid: 'variantGuid',
    variantUPC: 'variantUPC',
    variantSupplierCode: 'variantSupplierCode',
    variantTaxRate: 'variantTaxRate',
    description: 'description',
    variantMediaURI: 'variantMediaURI',
    itemCost: 'itemCost',
    quantityOrdered: 'quantityOrdered',
    packSize: 'packSize',
    purchaseOrderId: 'purchaseOrderId'
  };

  export type PurchaseOrderLineItemScalarFieldEnum = (typeof PurchaseOrderLineItemScalarFieldEnum)[keyof typeof PurchaseOrderLineItemScalarFieldEnum]


  export const PurchaseOrderLineItemReceiptScalarFieldEnum: {
    id: 'id',
    guid: 'guid',
    date: 'date',
    received: 'received',
    receivedPrice: 'receivedPrice',
    purchaseOrderLineItemId: 'purchaseOrderLineItemId'
  };

  export type PurchaseOrderLineItemReceiptScalarFieldEnum = (typeof PurchaseOrderLineItemReceiptScalarFieldEnum)[keyof typeof PurchaseOrderLineItemReceiptScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type AddressWhereInput = {
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    id?: IntFilter<"Address"> | number
    guid?: StringFilter<"Address"> | string
    address1?: StringFilter<"Address"> | string
    address2?: StringNullableFilter<"Address"> | string | null
    address3?: StringNullableFilter<"Address"> | string | null
    city?: StringNullableFilter<"Address"> | string | null
    postcode?: StringNullableFilter<"Address"> | string | null
    supplierId?: IntFilter<"Address"> | number
    supplier?: XOR<SupplierNullableScalarRelationFilter, SupplierWhereInput> | null
  }

  export type AddressOrderByWithRelationInput = {
    id?: SortOrder
    guid?: SortOrder
    address1?: SortOrder
    address2?: SortOrderInput | SortOrder
    address3?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    postcode?: SortOrderInput | SortOrder
    supplierId?: SortOrder
    supplier?: SupplierOrderByWithRelationInput
  }

  export type AddressWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    guid?: string
    supplierId?: number
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    address1?: StringFilter<"Address"> | string
    address2?: StringNullableFilter<"Address"> | string | null
    address3?: StringNullableFilter<"Address"> | string | null
    city?: StringNullableFilter<"Address"> | string | null
    postcode?: StringNullableFilter<"Address"> | string | null
    supplier?: XOR<SupplierNullableScalarRelationFilter, SupplierWhereInput> | null
  }, "id" | "guid" | "supplierId">

  export type AddressOrderByWithAggregationInput = {
    id?: SortOrder
    guid?: SortOrder
    address1?: SortOrder
    address2?: SortOrderInput | SortOrder
    address3?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    postcode?: SortOrderInput | SortOrder
    supplierId?: SortOrder
    _count?: AddressCountOrderByAggregateInput
    _avg?: AddressAvgOrderByAggregateInput
    _max?: AddressMaxOrderByAggregateInput
    _min?: AddressMinOrderByAggregateInput
    _sum?: AddressSumOrderByAggregateInput
  }

  export type AddressScalarWhereWithAggregatesInput = {
    AND?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    OR?: AddressScalarWhereWithAggregatesInput[]
    NOT?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Address"> | number
    guid?: StringWithAggregatesFilter<"Address"> | string
    address1?: StringWithAggregatesFilter<"Address"> | string
    address2?: StringNullableWithAggregatesFilter<"Address"> | string | null
    address3?: StringNullableWithAggregatesFilter<"Address"> | string | null
    city?: StringNullableWithAggregatesFilter<"Address"> | string | null
    postcode?: StringNullableWithAggregatesFilter<"Address"> | string | null
    supplierId?: IntWithAggregatesFilter<"Address"> | number
  }

  export type ContactWhereInput = {
    AND?: ContactWhereInput | ContactWhereInput[]
    OR?: ContactWhereInput[]
    NOT?: ContactWhereInput | ContactWhereInput[]
    id?: IntFilter<"Contact"> | number
    guid?: StringFilter<"Contact"> | string
    name?: StringFilter<"Contact"> | string
    email?: StringNullableFilter<"Contact"> | string | null
    phone?: StringNullableFilter<"Contact"> | string | null
    supplierId?: IntFilter<"Contact"> | number
    supplier?: XOR<SupplierScalarRelationFilter, SupplierWhereInput>
  }

  export type ContactOrderByWithRelationInput = {
    id?: SortOrder
    guid?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    supplierId?: SortOrder
    supplier?: SupplierOrderByWithRelationInput
  }

  export type ContactWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    guid?: string
    supplierId?: number
    AND?: ContactWhereInput | ContactWhereInput[]
    OR?: ContactWhereInput[]
    NOT?: ContactWhereInput | ContactWhereInput[]
    name?: StringFilter<"Contact"> | string
    email?: StringNullableFilter<"Contact"> | string | null
    phone?: StringNullableFilter<"Contact"> | string | null
    supplier?: XOR<SupplierScalarRelationFilter, SupplierWhereInput>
  }, "id" | "guid" | "supplierId">

  export type ContactOrderByWithAggregationInput = {
    id?: SortOrder
    guid?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    supplierId?: SortOrder
    _count?: ContactCountOrderByAggregateInput
    _avg?: ContactAvgOrderByAggregateInput
    _max?: ContactMaxOrderByAggregateInput
    _min?: ContactMinOrderByAggregateInput
    _sum?: ContactSumOrderByAggregateInput
  }

  export type ContactScalarWhereWithAggregatesInput = {
    AND?: ContactScalarWhereWithAggregatesInput | ContactScalarWhereWithAggregatesInput[]
    OR?: ContactScalarWhereWithAggregatesInput[]
    NOT?: ContactScalarWhereWithAggregatesInput | ContactScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Contact"> | number
    guid?: StringWithAggregatesFilter<"Contact"> | string
    name?: StringWithAggregatesFilter<"Contact"> | string
    email?: StringNullableWithAggregatesFilter<"Contact"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Contact"> | string | null
    supplierId?: IntWithAggregatesFilter<"Contact"> | number
  }

  export type SupplierWhereInput = {
    AND?: SupplierWhereInput | SupplierWhereInput[]
    OR?: SupplierWhereInput[]
    NOT?: SupplierWhereInput | SupplierWhereInput[]
    id?: IntFilter<"Supplier"> | number
    guid?: StringFilter<"Supplier"> | string
    name?: StringFilter<"Supplier"> | string
    website?: StringNullableFilter<"Supplier"> | string | null
    address?: XOR<AddressNullableScalarRelationFilter, AddressWhereInput> | null
    contacts?: ContactListRelationFilter
    purchaseOrders?: PurchaseOrderListRelationFilter
  }

  export type SupplierOrderByWithRelationInput = {
    id?: SortOrder
    guid?: SortOrder
    name?: SortOrder
    website?: SortOrderInput | SortOrder
    address?: AddressOrderByWithRelationInput
    contacts?: ContactOrderByRelationAggregateInput
    purchaseOrders?: PurchaseOrderOrderByRelationAggregateInput
  }

  export type SupplierWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    guid?: string
    name?: string
    AND?: SupplierWhereInput | SupplierWhereInput[]
    OR?: SupplierWhereInput[]
    NOT?: SupplierWhereInput | SupplierWhereInput[]
    website?: StringNullableFilter<"Supplier"> | string | null
    address?: XOR<AddressNullableScalarRelationFilter, AddressWhereInput> | null
    contacts?: ContactListRelationFilter
    purchaseOrders?: PurchaseOrderListRelationFilter
  }, "id" | "guid" | "name">

  export type SupplierOrderByWithAggregationInput = {
    id?: SortOrder
    guid?: SortOrder
    name?: SortOrder
    website?: SortOrderInput | SortOrder
    _count?: SupplierCountOrderByAggregateInput
    _avg?: SupplierAvgOrderByAggregateInput
    _max?: SupplierMaxOrderByAggregateInput
    _min?: SupplierMinOrderByAggregateInput
    _sum?: SupplierSumOrderByAggregateInput
  }

  export type SupplierScalarWhereWithAggregatesInput = {
    AND?: SupplierScalarWhereWithAggregatesInput | SupplierScalarWhereWithAggregatesInput[]
    OR?: SupplierScalarWhereWithAggregatesInput[]
    NOT?: SupplierScalarWhereWithAggregatesInput | SupplierScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Supplier"> | number
    guid?: StringWithAggregatesFilter<"Supplier"> | string
    name?: StringWithAggregatesFilter<"Supplier"> | string
    website?: StringNullableWithAggregatesFilter<"Supplier"> | string | null
  }

  export type PurchaseOrderWhereInput = {
    AND?: PurchaseOrderWhereInput | PurchaseOrderWhereInput[]
    OR?: PurchaseOrderWhereInput[]
    NOT?: PurchaseOrderWhereInput | PurchaseOrderWhereInput[]
    id?: IntFilter<"PurchaseOrder"> | number
    guid?: StringFilter<"PurchaseOrder"> | string
    number?: StringFilter<"PurchaseOrder"> | string
    state?: StringFilter<"PurchaseOrder"> | string
    issueDate?: DateTimeNullableFilter<"PurchaseOrder"> | Date | string | null
    pendingXero?: BoolFilter<"PurchaseOrder"> | boolean
    subTotal?: IntFilter<"PurchaseOrder"> | number
    taxAmount?: IntFilter<"PurchaseOrder"> | number
    total?: IntFilter<"PurchaseOrder"> | number
    supplierId?: IntNullableFilter<"PurchaseOrder"> | number | null
    lineItems?: PurchaseOrderLineItemListRelationFilter
    supplier?: XOR<SupplierNullableScalarRelationFilter, SupplierWhereInput> | null
  }

  export type PurchaseOrderOrderByWithRelationInput = {
    id?: SortOrder
    guid?: SortOrder
    number?: SortOrder
    state?: SortOrder
    issueDate?: SortOrderInput | SortOrder
    pendingXero?: SortOrder
    subTotal?: SortOrder
    taxAmount?: SortOrder
    total?: SortOrder
    supplierId?: SortOrderInput | SortOrder
    lineItems?: PurchaseOrderLineItemOrderByRelationAggregateInput
    supplier?: SupplierOrderByWithRelationInput
  }

  export type PurchaseOrderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    guid?: string
    number?: string
    AND?: PurchaseOrderWhereInput | PurchaseOrderWhereInput[]
    OR?: PurchaseOrderWhereInput[]
    NOT?: PurchaseOrderWhereInput | PurchaseOrderWhereInput[]
    state?: StringFilter<"PurchaseOrder"> | string
    issueDate?: DateTimeNullableFilter<"PurchaseOrder"> | Date | string | null
    pendingXero?: BoolFilter<"PurchaseOrder"> | boolean
    subTotal?: IntFilter<"PurchaseOrder"> | number
    taxAmount?: IntFilter<"PurchaseOrder"> | number
    total?: IntFilter<"PurchaseOrder"> | number
    supplierId?: IntNullableFilter<"PurchaseOrder"> | number | null
    lineItems?: PurchaseOrderLineItemListRelationFilter
    supplier?: XOR<SupplierNullableScalarRelationFilter, SupplierWhereInput> | null
  }, "id" | "guid" | "number">

  export type PurchaseOrderOrderByWithAggregationInput = {
    id?: SortOrder
    guid?: SortOrder
    number?: SortOrder
    state?: SortOrder
    issueDate?: SortOrderInput | SortOrder
    pendingXero?: SortOrder
    subTotal?: SortOrder
    taxAmount?: SortOrder
    total?: SortOrder
    supplierId?: SortOrderInput | SortOrder
    _count?: PurchaseOrderCountOrderByAggregateInput
    _avg?: PurchaseOrderAvgOrderByAggregateInput
    _max?: PurchaseOrderMaxOrderByAggregateInput
    _min?: PurchaseOrderMinOrderByAggregateInput
    _sum?: PurchaseOrderSumOrderByAggregateInput
  }

  export type PurchaseOrderScalarWhereWithAggregatesInput = {
    AND?: PurchaseOrderScalarWhereWithAggregatesInput | PurchaseOrderScalarWhereWithAggregatesInput[]
    OR?: PurchaseOrderScalarWhereWithAggregatesInput[]
    NOT?: PurchaseOrderScalarWhereWithAggregatesInput | PurchaseOrderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PurchaseOrder"> | number
    guid?: StringWithAggregatesFilter<"PurchaseOrder"> | string
    number?: StringWithAggregatesFilter<"PurchaseOrder"> | string
    state?: StringWithAggregatesFilter<"PurchaseOrder"> | string
    issueDate?: DateTimeNullableWithAggregatesFilter<"PurchaseOrder"> | Date | string | null
    pendingXero?: BoolWithAggregatesFilter<"PurchaseOrder"> | boolean
    subTotal?: IntWithAggregatesFilter<"PurchaseOrder"> | number
    taxAmount?: IntWithAggregatesFilter<"PurchaseOrder"> | number
    total?: IntWithAggregatesFilter<"PurchaseOrder"> | number
    supplierId?: IntNullableWithAggregatesFilter<"PurchaseOrder"> | number | null
  }

  export type PurchaseOrderLineItemWhereInput = {
    AND?: PurchaseOrderLineItemWhereInput | PurchaseOrderLineItemWhereInput[]
    OR?: PurchaseOrderLineItemWhereInput[]
    NOT?: PurchaseOrderLineItemWhereInput | PurchaseOrderLineItemWhereInput[]
    id?: IntFilter<"PurchaseOrderLineItem"> | number
    guid?: StringFilter<"PurchaseOrderLineItem"> | string
    variantSku?: StringNullableFilter<"PurchaseOrderLineItem"> | string | null
    variantGuid?: StringNullableFilter<"PurchaseOrderLineItem"> | string | null
    variantUPC?: StringNullableFilter<"PurchaseOrderLineItem"> | string | null
    variantSupplierCode?: StringNullableFilter<"PurchaseOrderLineItem"> | string | null
    variantTaxRate?: IntFilter<"PurchaseOrderLineItem"> | number
    description?: StringFilter<"PurchaseOrderLineItem"> | string
    variantMediaURI?: StringNullableFilter<"PurchaseOrderLineItem"> | string | null
    itemCost?: IntFilter<"PurchaseOrderLineItem"> | number
    quantityOrdered?: IntFilter<"PurchaseOrderLineItem"> | number
    packSize?: IntFilter<"PurchaseOrderLineItem"> | number
    purchaseOrderId?: IntFilter<"PurchaseOrderLineItem"> | number
    receipts?: PurchaseOrderLineItemReceiptListRelationFilter
    purchaseOrder?: XOR<PurchaseOrderScalarRelationFilter, PurchaseOrderWhereInput>
  }

  export type PurchaseOrderLineItemOrderByWithRelationInput = {
    id?: SortOrder
    guid?: SortOrder
    variantSku?: SortOrderInput | SortOrder
    variantGuid?: SortOrderInput | SortOrder
    variantUPC?: SortOrderInput | SortOrder
    variantSupplierCode?: SortOrderInput | SortOrder
    variantTaxRate?: SortOrder
    description?: SortOrder
    variantMediaURI?: SortOrderInput | SortOrder
    itemCost?: SortOrder
    quantityOrdered?: SortOrder
    packSize?: SortOrder
    purchaseOrderId?: SortOrder
    receipts?: PurchaseOrderLineItemReceiptOrderByRelationAggregateInput
    purchaseOrder?: PurchaseOrderOrderByWithRelationInput
  }

  export type PurchaseOrderLineItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    guid?: string
    AND?: PurchaseOrderLineItemWhereInput | PurchaseOrderLineItemWhereInput[]
    OR?: PurchaseOrderLineItemWhereInput[]
    NOT?: PurchaseOrderLineItemWhereInput | PurchaseOrderLineItemWhereInput[]
    variantSku?: StringNullableFilter<"PurchaseOrderLineItem"> | string | null
    variantGuid?: StringNullableFilter<"PurchaseOrderLineItem"> | string | null
    variantUPC?: StringNullableFilter<"PurchaseOrderLineItem"> | string | null
    variantSupplierCode?: StringNullableFilter<"PurchaseOrderLineItem"> | string | null
    variantTaxRate?: IntFilter<"PurchaseOrderLineItem"> | number
    description?: StringFilter<"PurchaseOrderLineItem"> | string
    variantMediaURI?: StringNullableFilter<"PurchaseOrderLineItem"> | string | null
    itemCost?: IntFilter<"PurchaseOrderLineItem"> | number
    quantityOrdered?: IntFilter<"PurchaseOrderLineItem"> | number
    packSize?: IntFilter<"PurchaseOrderLineItem"> | number
    purchaseOrderId?: IntFilter<"PurchaseOrderLineItem"> | number
    receipts?: PurchaseOrderLineItemReceiptListRelationFilter
    purchaseOrder?: XOR<PurchaseOrderScalarRelationFilter, PurchaseOrderWhereInput>
  }, "id" | "guid">

  export type PurchaseOrderLineItemOrderByWithAggregationInput = {
    id?: SortOrder
    guid?: SortOrder
    variantSku?: SortOrderInput | SortOrder
    variantGuid?: SortOrderInput | SortOrder
    variantUPC?: SortOrderInput | SortOrder
    variantSupplierCode?: SortOrderInput | SortOrder
    variantTaxRate?: SortOrder
    description?: SortOrder
    variantMediaURI?: SortOrderInput | SortOrder
    itemCost?: SortOrder
    quantityOrdered?: SortOrder
    packSize?: SortOrder
    purchaseOrderId?: SortOrder
    _count?: PurchaseOrderLineItemCountOrderByAggregateInput
    _avg?: PurchaseOrderLineItemAvgOrderByAggregateInput
    _max?: PurchaseOrderLineItemMaxOrderByAggregateInput
    _min?: PurchaseOrderLineItemMinOrderByAggregateInput
    _sum?: PurchaseOrderLineItemSumOrderByAggregateInput
  }

  export type PurchaseOrderLineItemScalarWhereWithAggregatesInput = {
    AND?: PurchaseOrderLineItemScalarWhereWithAggregatesInput | PurchaseOrderLineItemScalarWhereWithAggregatesInput[]
    OR?: PurchaseOrderLineItemScalarWhereWithAggregatesInput[]
    NOT?: PurchaseOrderLineItemScalarWhereWithAggregatesInput | PurchaseOrderLineItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PurchaseOrderLineItem"> | number
    guid?: StringWithAggregatesFilter<"PurchaseOrderLineItem"> | string
    variantSku?: StringNullableWithAggregatesFilter<"PurchaseOrderLineItem"> | string | null
    variantGuid?: StringNullableWithAggregatesFilter<"PurchaseOrderLineItem"> | string | null
    variantUPC?: StringNullableWithAggregatesFilter<"PurchaseOrderLineItem"> | string | null
    variantSupplierCode?: StringNullableWithAggregatesFilter<"PurchaseOrderLineItem"> | string | null
    variantTaxRate?: IntWithAggregatesFilter<"PurchaseOrderLineItem"> | number
    description?: StringWithAggregatesFilter<"PurchaseOrderLineItem"> | string
    variantMediaURI?: StringNullableWithAggregatesFilter<"PurchaseOrderLineItem"> | string | null
    itemCost?: IntWithAggregatesFilter<"PurchaseOrderLineItem"> | number
    quantityOrdered?: IntWithAggregatesFilter<"PurchaseOrderLineItem"> | number
    packSize?: IntWithAggregatesFilter<"PurchaseOrderLineItem"> | number
    purchaseOrderId?: IntWithAggregatesFilter<"PurchaseOrderLineItem"> | number
  }

  export type PurchaseOrderLineItemReceiptWhereInput = {
    AND?: PurchaseOrderLineItemReceiptWhereInput | PurchaseOrderLineItemReceiptWhereInput[]
    OR?: PurchaseOrderLineItemReceiptWhereInput[]
    NOT?: PurchaseOrderLineItemReceiptWhereInput | PurchaseOrderLineItemReceiptWhereInput[]
    id?: IntFilter<"PurchaseOrderLineItemReceipt"> | number
    guid?: StringFilter<"PurchaseOrderLineItemReceipt"> | string
    date?: DateTimeFilter<"PurchaseOrderLineItemReceipt"> | Date | string
    received?: IntFilter<"PurchaseOrderLineItemReceipt"> | number
    receivedPrice?: IntFilter<"PurchaseOrderLineItemReceipt"> | number
    purchaseOrderLineItemId?: IntNullableFilter<"PurchaseOrderLineItemReceipt"> | number | null
    PurchaseOrderLineItem?: XOR<PurchaseOrderLineItemNullableScalarRelationFilter, PurchaseOrderLineItemWhereInput> | null
  }

  export type PurchaseOrderLineItemReceiptOrderByWithRelationInput = {
    id?: SortOrder
    guid?: SortOrder
    date?: SortOrder
    received?: SortOrder
    receivedPrice?: SortOrder
    purchaseOrderLineItemId?: SortOrderInput | SortOrder
    PurchaseOrderLineItem?: PurchaseOrderLineItemOrderByWithRelationInput
  }

  export type PurchaseOrderLineItemReceiptWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    guid?: string
    AND?: PurchaseOrderLineItemReceiptWhereInput | PurchaseOrderLineItemReceiptWhereInput[]
    OR?: PurchaseOrderLineItemReceiptWhereInput[]
    NOT?: PurchaseOrderLineItemReceiptWhereInput | PurchaseOrderLineItemReceiptWhereInput[]
    date?: DateTimeFilter<"PurchaseOrderLineItemReceipt"> | Date | string
    received?: IntFilter<"PurchaseOrderLineItemReceipt"> | number
    receivedPrice?: IntFilter<"PurchaseOrderLineItemReceipt"> | number
    purchaseOrderLineItemId?: IntNullableFilter<"PurchaseOrderLineItemReceipt"> | number | null
    PurchaseOrderLineItem?: XOR<PurchaseOrderLineItemNullableScalarRelationFilter, PurchaseOrderLineItemWhereInput> | null
  }, "id" | "guid">

  export type PurchaseOrderLineItemReceiptOrderByWithAggregationInput = {
    id?: SortOrder
    guid?: SortOrder
    date?: SortOrder
    received?: SortOrder
    receivedPrice?: SortOrder
    purchaseOrderLineItemId?: SortOrderInput | SortOrder
    _count?: PurchaseOrderLineItemReceiptCountOrderByAggregateInput
    _avg?: PurchaseOrderLineItemReceiptAvgOrderByAggregateInput
    _max?: PurchaseOrderLineItemReceiptMaxOrderByAggregateInput
    _min?: PurchaseOrderLineItemReceiptMinOrderByAggregateInput
    _sum?: PurchaseOrderLineItemReceiptSumOrderByAggregateInput
  }

  export type PurchaseOrderLineItemReceiptScalarWhereWithAggregatesInput = {
    AND?: PurchaseOrderLineItemReceiptScalarWhereWithAggregatesInput | PurchaseOrderLineItemReceiptScalarWhereWithAggregatesInput[]
    OR?: PurchaseOrderLineItemReceiptScalarWhereWithAggregatesInput[]
    NOT?: PurchaseOrderLineItemReceiptScalarWhereWithAggregatesInput | PurchaseOrderLineItemReceiptScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PurchaseOrderLineItemReceipt"> | number
    guid?: StringWithAggregatesFilter<"PurchaseOrderLineItemReceipt"> | string
    date?: DateTimeWithAggregatesFilter<"PurchaseOrderLineItemReceipt"> | Date | string
    received?: IntWithAggregatesFilter<"PurchaseOrderLineItemReceipt"> | number
    receivedPrice?: IntWithAggregatesFilter<"PurchaseOrderLineItemReceipt"> | number
    purchaseOrderLineItemId?: IntNullableWithAggregatesFilter<"PurchaseOrderLineItemReceipt"> | number | null
  }

  export type AddressCreateInput = {
    guid?: string
    address1: string
    address2?: string | null
    address3?: string | null
    city?: string | null
    postcode?: string | null
    supplier?: SupplierCreateNestedOneWithoutAddressInput
  }

  export type AddressUncheckedCreateInput = {
    id?: number
    guid?: string
    address1: string
    address2?: string | null
    address3?: string | null
    city?: string | null
    postcode?: string | null
    supplierId: number
  }

  export type AddressUpdateInput = {
    guid?: StringFieldUpdateOperationsInput | string
    address1?: StringFieldUpdateOperationsInput | string
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    address3?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postcode?: NullableStringFieldUpdateOperationsInput | string | null
    supplier?: SupplierUpdateOneWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    guid?: StringFieldUpdateOperationsInput | string
    address1?: StringFieldUpdateOperationsInput | string
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    address3?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postcode?: NullableStringFieldUpdateOperationsInput | string | null
    supplierId?: IntFieldUpdateOperationsInput | number
  }

  export type AddressCreateManyInput = {
    id?: number
    guid?: string
    address1: string
    address2?: string | null
    address3?: string | null
    city?: string | null
    postcode?: string | null
    supplierId: number
  }

  export type AddressUpdateManyMutationInput = {
    guid?: StringFieldUpdateOperationsInput | string
    address1?: StringFieldUpdateOperationsInput | string
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    address3?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postcode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AddressUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    guid?: StringFieldUpdateOperationsInput | string
    address1?: StringFieldUpdateOperationsInput | string
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    address3?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postcode?: NullableStringFieldUpdateOperationsInput | string | null
    supplierId?: IntFieldUpdateOperationsInput | number
  }

  export type ContactCreateInput = {
    guid?: string
    name: string
    email?: string | null
    phone?: string | null
    supplier: SupplierCreateNestedOneWithoutContactsInput
  }

  export type ContactUncheckedCreateInput = {
    id?: number
    guid?: string
    name: string
    email?: string | null
    phone?: string | null
    supplierId: number
  }

  export type ContactUpdateInput = {
    guid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    supplier?: SupplierUpdateOneRequiredWithoutContactsNestedInput
  }

  export type ContactUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    guid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    supplierId?: IntFieldUpdateOperationsInput | number
  }

  export type ContactCreateManyInput = {
    id?: number
    guid?: string
    name: string
    email?: string | null
    phone?: string | null
    supplierId: number
  }

  export type ContactUpdateManyMutationInput = {
    guid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContactUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    guid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    supplierId?: IntFieldUpdateOperationsInput | number
  }

  export type SupplierCreateInput = {
    guid?: string
    name: string
    website?: string | null
    address?: AddressCreateNestedOneWithoutSupplierInput
    contacts?: ContactCreateNestedManyWithoutSupplierInput
    purchaseOrders?: PurchaseOrderCreateNestedManyWithoutSupplierInput
  }

  export type SupplierUncheckedCreateInput = {
    id?: number
    guid?: string
    name: string
    website?: string | null
    address?: AddressUncheckedCreateNestedOneWithoutSupplierInput
    contacts?: ContactUncheckedCreateNestedManyWithoutSupplierInput
    purchaseOrders?: PurchaseOrderUncheckedCreateNestedManyWithoutSupplierInput
  }

  export type SupplierUpdateInput = {
    guid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    address?: AddressUpdateOneWithoutSupplierNestedInput
    contacts?: ContactUpdateManyWithoutSupplierNestedInput
    purchaseOrders?: PurchaseOrderUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    guid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    address?: AddressUncheckedUpdateOneWithoutSupplierNestedInput
    contacts?: ContactUncheckedUpdateManyWithoutSupplierNestedInput
    purchaseOrders?: PurchaseOrderUncheckedUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierCreateManyInput = {
    id?: number
    guid?: string
    name: string
    website?: string | null
  }

  export type SupplierUpdateManyMutationInput = {
    guid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SupplierUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    guid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PurchaseOrderCreateInput = {
    guid?: string
    number: string
    state?: string
    issueDate?: Date | string | null
    pendingXero?: boolean
    subTotal: number
    taxAmount: number
    total: number
    lineItems?: PurchaseOrderLineItemCreateNestedManyWithoutPurchaseOrderInput
    supplier?: SupplierCreateNestedOneWithoutPurchaseOrdersInput
  }

  export type PurchaseOrderUncheckedCreateInput = {
    id?: number
    guid?: string
    number: string
    state?: string
    issueDate?: Date | string | null
    pendingXero?: boolean
    subTotal: number
    taxAmount: number
    total: number
    supplierId?: number | null
    lineItems?: PurchaseOrderLineItemUncheckedCreateNestedManyWithoutPurchaseOrderInput
  }

  export type PurchaseOrderUpdateInput = {
    guid?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    issueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pendingXero?: BoolFieldUpdateOperationsInput | boolean
    subTotal?: IntFieldUpdateOperationsInput | number
    taxAmount?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    lineItems?: PurchaseOrderLineItemUpdateManyWithoutPurchaseOrderNestedInput
    supplier?: SupplierUpdateOneWithoutPurchaseOrdersNestedInput
  }

  export type PurchaseOrderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    guid?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    issueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pendingXero?: BoolFieldUpdateOperationsInput | boolean
    subTotal?: IntFieldUpdateOperationsInput | number
    taxAmount?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    supplierId?: NullableIntFieldUpdateOperationsInput | number | null
    lineItems?: PurchaseOrderLineItemUncheckedUpdateManyWithoutPurchaseOrderNestedInput
  }

  export type PurchaseOrderCreateManyInput = {
    id?: number
    guid?: string
    number: string
    state?: string
    issueDate?: Date | string | null
    pendingXero?: boolean
    subTotal: number
    taxAmount: number
    total: number
    supplierId?: number | null
  }

  export type PurchaseOrderUpdateManyMutationInput = {
    guid?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    issueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pendingXero?: BoolFieldUpdateOperationsInput | boolean
    subTotal?: IntFieldUpdateOperationsInput | number
    taxAmount?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
  }

  export type PurchaseOrderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    guid?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    issueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pendingXero?: BoolFieldUpdateOperationsInput | boolean
    subTotal?: IntFieldUpdateOperationsInput | number
    taxAmount?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    supplierId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PurchaseOrderLineItemCreateInput = {
    guid?: string
    variantSku?: string | null
    variantGuid?: string | null
    variantUPC?: string | null
    variantSupplierCode?: string | null
    variantTaxRate: number
    description: string
    variantMediaURI?: string | null
    itemCost: number
    quantityOrdered: number
    packSize?: number
    receipts?: PurchaseOrderLineItemReceiptCreateNestedManyWithoutPurchaseOrderLineItemInput
    purchaseOrder: PurchaseOrderCreateNestedOneWithoutLineItemsInput
  }

  export type PurchaseOrderLineItemUncheckedCreateInput = {
    id?: number
    guid?: string
    variantSku?: string | null
    variantGuid?: string | null
    variantUPC?: string | null
    variantSupplierCode?: string | null
    variantTaxRate: number
    description: string
    variantMediaURI?: string | null
    itemCost: number
    quantityOrdered: number
    packSize?: number
    purchaseOrderId: number
    receipts?: PurchaseOrderLineItemReceiptUncheckedCreateNestedManyWithoutPurchaseOrderLineItemInput
  }

  export type PurchaseOrderLineItemUpdateInput = {
    guid?: StringFieldUpdateOperationsInput | string
    variantSku?: NullableStringFieldUpdateOperationsInput | string | null
    variantGuid?: NullableStringFieldUpdateOperationsInput | string | null
    variantUPC?: NullableStringFieldUpdateOperationsInput | string | null
    variantSupplierCode?: NullableStringFieldUpdateOperationsInput | string | null
    variantTaxRate?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    variantMediaURI?: NullableStringFieldUpdateOperationsInput | string | null
    itemCost?: IntFieldUpdateOperationsInput | number
    quantityOrdered?: IntFieldUpdateOperationsInput | number
    packSize?: IntFieldUpdateOperationsInput | number
    receipts?: PurchaseOrderLineItemReceiptUpdateManyWithoutPurchaseOrderLineItemNestedInput
    purchaseOrder?: PurchaseOrderUpdateOneRequiredWithoutLineItemsNestedInput
  }

  export type PurchaseOrderLineItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    guid?: StringFieldUpdateOperationsInput | string
    variantSku?: NullableStringFieldUpdateOperationsInput | string | null
    variantGuid?: NullableStringFieldUpdateOperationsInput | string | null
    variantUPC?: NullableStringFieldUpdateOperationsInput | string | null
    variantSupplierCode?: NullableStringFieldUpdateOperationsInput | string | null
    variantTaxRate?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    variantMediaURI?: NullableStringFieldUpdateOperationsInput | string | null
    itemCost?: IntFieldUpdateOperationsInput | number
    quantityOrdered?: IntFieldUpdateOperationsInput | number
    packSize?: IntFieldUpdateOperationsInput | number
    purchaseOrderId?: IntFieldUpdateOperationsInput | number
    receipts?: PurchaseOrderLineItemReceiptUncheckedUpdateManyWithoutPurchaseOrderLineItemNestedInput
  }

  export type PurchaseOrderLineItemCreateManyInput = {
    id?: number
    guid?: string
    variantSku?: string | null
    variantGuid?: string | null
    variantUPC?: string | null
    variantSupplierCode?: string | null
    variantTaxRate: number
    description: string
    variantMediaURI?: string | null
    itemCost: number
    quantityOrdered: number
    packSize?: number
    purchaseOrderId: number
  }

  export type PurchaseOrderLineItemUpdateManyMutationInput = {
    guid?: StringFieldUpdateOperationsInput | string
    variantSku?: NullableStringFieldUpdateOperationsInput | string | null
    variantGuid?: NullableStringFieldUpdateOperationsInput | string | null
    variantUPC?: NullableStringFieldUpdateOperationsInput | string | null
    variantSupplierCode?: NullableStringFieldUpdateOperationsInput | string | null
    variantTaxRate?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    variantMediaURI?: NullableStringFieldUpdateOperationsInput | string | null
    itemCost?: IntFieldUpdateOperationsInput | number
    quantityOrdered?: IntFieldUpdateOperationsInput | number
    packSize?: IntFieldUpdateOperationsInput | number
  }

  export type PurchaseOrderLineItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    guid?: StringFieldUpdateOperationsInput | string
    variantSku?: NullableStringFieldUpdateOperationsInput | string | null
    variantGuid?: NullableStringFieldUpdateOperationsInput | string | null
    variantUPC?: NullableStringFieldUpdateOperationsInput | string | null
    variantSupplierCode?: NullableStringFieldUpdateOperationsInput | string | null
    variantTaxRate?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    variantMediaURI?: NullableStringFieldUpdateOperationsInput | string | null
    itemCost?: IntFieldUpdateOperationsInput | number
    quantityOrdered?: IntFieldUpdateOperationsInput | number
    packSize?: IntFieldUpdateOperationsInput | number
    purchaseOrderId?: IntFieldUpdateOperationsInput | number
  }

  export type PurchaseOrderLineItemReceiptCreateInput = {
    guid?: string
    date?: Date | string
    received: number
    receivedPrice: number
    PurchaseOrderLineItem?: PurchaseOrderLineItemCreateNestedOneWithoutReceiptsInput
  }

  export type PurchaseOrderLineItemReceiptUncheckedCreateInput = {
    id?: number
    guid?: string
    date?: Date | string
    received: number
    receivedPrice: number
    purchaseOrderLineItemId?: number | null
  }

  export type PurchaseOrderLineItemReceiptUpdateInput = {
    guid?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    received?: IntFieldUpdateOperationsInput | number
    receivedPrice?: IntFieldUpdateOperationsInput | number
    PurchaseOrderLineItem?: PurchaseOrderLineItemUpdateOneWithoutReceiptsNestedInput
  }

  export type PurchaseOrderLineItemReceiptUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    guid?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    received?: IntFieldUpdateOperationsInput | number
    receivedPrice?: IntFieldUpdateOperationsInput | number
    purchaseOrderLineItemId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PurchaseOrderLineItemReceiptCreateManyInput = {
    id?: number
    guid?: string
    date?: Date | string
    received: number
    receivedPrice: number
    purchaseOrderLineItemId?: number | null
  }

  export type PurchaseOrderLineItemReceiptUpdateManyMutationInput = {
    guid?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    received?: IntFieldUpdateOperationsInput | number
    receivedPrice?: IntFieldUpdateOperationsInput | number
  }

  export type PurchaseOrderLineItemReceiptUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    guid?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    received?: IntFieldUpdateOperationsInput | number
    receivedPrice?: IntFieldUpdateOperationsInput | number
    purchaseOrderLineItemId?: NullableIntFieldUpdateOperationsInput | number | null
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

  export type SupplierNullableScalarRelationFilter = {
    is?: SupplierWhereInput | null
    isNot?: SupplierWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AddressCountOrderByAggregateInput = {
    id?: SortOrder
    guid?: SortOrder
    address1?: SortOrder
    address2?: SortOrder
    address3?: SortOrder
    city?: SortOrder
    postcode?: SortOrder
    supplierId?: SortOrder
  }

  export type AddressAvgOrderByAggregateInput = {
    id?: SortOrder
    supplierId?: SortOrder
  }

  export type AddressMaxOrderByAggregateInput = {
    id?: SortOrder
    guid?: SortOrder
    address1?: SortOrder
    address2?: SortOrder
    address3?: SortOrder
    city?: SortOrder
    postcode?: SortOrder
    supplierId?: SortOrder
  }

  export type AddressMinOrderByAggregateInput = {
    id?: SortOrder
    guid?: SortOrder
    address1?: SortOrder
    address2?: SortOrder
    address3?: SortOrder
    city?: SortOrder
    postcode?: SortOrder
    supplierId?: SortOrder
  }

  export type AddressSumOrderByAggregateInput = {
    id?: SortOrder
    supplierId?: SortOrder
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

  export type SupplierScalarRelationFilter = {
    is?: SupplierWhereInput
    isNot?: SupplierWhereInput
  }

  export type ContactCountOrderByAggregateInput = {
    id?: SortOrder
    guid?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    supplierId?: SortOrder
  }

  export type ContactAvgOrderByAggregateInput = {
    id?: SortOrder
    supplierId?: SortOrder
  }

  export type ContactMaxOrderByAggregateInput = {
    id?: SortOrder
    guid?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    supplierId?: SortOrder
  }

  export type ContactMinOrderByAggregateInput = {
    id?: SortOrder
    guid?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    supplierId?: SortOrder
  }

  export type ContactSumOrderByAggregateInput = {
    id?: SortOrder
    supplierId?: SortOrder
  }

  export type AddressNullableScalarRelationFilter = {
    is?: AddressWhereInput | null
    isNot?: AddressWhereInput | null
  }

  export type ContactListRelationFilter = {
    every?: ContactWhereInput
    some?: ContactWhereInput
    none?: ContactWhereInput
  }

  export type PurchaseOrderListRelationFilter = {
    every?: PurchaseOrderWhereInput
    some?: PurchaseOrderWhereInput
    none?: PurchaseOrderWhereInput
  }

  export type ContactOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PurchaseOrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SupplierCountOrderByAggregateInput = {
    id?: SortOrder
    guid?: SortOrder
    name?: SortOrder
    website?: SortOrder
  }

  export type SupplierAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SupplierMaxOrderByAggregateInput = {
    id?: SortOrder
    guid?: SortOrder
    name?: SortOrder
    website?: SortOrder
  }

  export type SupplierMinOrderByAggregateInput = {
    id?: SortOrder
    guid?: SortOrder
    name?: SortOrder
    website?: SortOrder
  }

  export type SupplierSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type PurchaseOrderLineItemListRelationFilter = {
    every?: PurchaseOrderLineItemWhereInput
    some?: PurchaseOrderLineItemWhereInput
    none?: PurchaseOrderLineItemWhereInput
  }

  export type PurchaseOrderLineItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PurchaseOrderCountOrderByAggregateInput = {
    id?: SortOrder
    guid?: SortOrder
    number?: SortOrder
    state?: SortOrder
    issueDate?: SortOrder
    pendingXero?: SortOrder
    subTotal?: SortOrder
    taxAmount?: SortOrder
    total?: SortOrder
    supplierId?: SortOrder
  }

  export type PurchaseOrderAvgOrderByAggregateInput = {
    id?: SortOrder
    subTotal?: SortOrder
    taxAmount?: SortOrder
    total?: SortOrder
    supplierId?: SortOrder
  }

  export type PurchaseOrderMaxOrderByAggregateInput = {
    id?: SortOrder
    guid?: SortOrder
    number?: SortOrder
    state?: SortOrder
    issueDate?: SortOrder
    pendingXero?: SortOrder
    subTotal?: SortOrder
    taxAmount?: SortOrder
    total?: SortOrder
    supplierId?: SortOrder
  }

  export type PurchaseOrderMinOrderByAggregateInput = {
    id?: SortOrder
    guid?: SortOrder
    number?: SortOrder
    state?: SortOrder
    issueDate?: SortOrder
    pendingXero?: SortOrder
    subTotal?: SortOrder
    taxAmount?: SortOrder
    total?: SortOrder
    supplierId?: SortOrder
  }

  export type PurchaseOrderSumOrderByAggregateInput = {
    id?: SortOrder
    subTotal?: SortOrder
    taxAmount?: SortOrder
    total?: SortOrder
    supplierId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type PurchaseOrderLineItemReceiptListRelationFilter = {
    every?: PurchaseOrderLineItemReceiptWhereInput
    some?: PurchaseOrderLineItemReceiptWhereInput
    none?: PurchaseOrderLineItemReceiptWhereInput
  }

  export type PurchaseOrderScalarRelationFilter = {
    is?: PurchaseOrderWhereInput
    isNot?: PurchaseOrderWhereInput
  }

  export type PurchaseOrderLineItemReceiptOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PurchaseOrderLineItemCountOrderByAggregateInput = {
    id?: SortOrder
    guid?: SortOrder
    variantSku?: SortOrder
    variantGuid?: SortOrder
    variantUPC?: SortOrder
    variantSupplierCode?: SortOrder
    variantTaxRate?: SortOrder
    description?: SortOrder
    variantMediaURI?: SortOrder
    itemCost?: SortOrder
    quantityOrdered?: SortOrder
    packSize?: SortOrder
    purchaseOrderId?: SortOrder
  }

  export type PurchaseOrderLineItemAvgOrderByAggregateInput = {
    id?: SortOrder
    variantTaxRate?: SortOrder
    itemCost?: SortOrder
    quantityOrdered?: SortOrder
    packSize?: SortOrder
    purchaseOrderId?: SortOrder
  }

  export type PurchaseOrderLineItemMaxOrderByAggregateInput = {
    id?: SortOrder
    guid?: SortOrder
    variantSku?: SortOrder
    variantGuid?: SortOrder
    variantUPC?: SortOrder
    variantSupplierCode?: SortOrder
    variantTaxRate?: SortOrder
    description?: SortOrder
    variantMediaURI?: SortOrder
    itemCost?: SortOrder
    quantityOrdered?: SortOrder
    packSize?: SortOrder
    purchaseOrderId?: SortOrder
  }

  export type PurchaseOrderLineItemMinOrderByAggregateInput = {
    id?: SortOrder
    guid?: SortOrder
    variantSku?: SortOrder
    variantGuid?: SortOrder
    variantUPC?: SortOrder
    variantSupplierCode?: SortOrder
    variantTaxRate?: SortOrder
    description?: SortOrder
    variantMediaURI?: SortOrder
    itemCost?: SortOrder
    quantityOrdered?: SortOrder
    packSize?: SortOrder
    purchaseOrderId?: SortOrder
  }

  export type PurchaseOrderLineItemSumOrderByAggregateInput = {
    id?: SortOrder
    variantTaxRate?: SortOrder
    itemCost?: SortOrder
    quantityOrdered?: SortOrder
    packSize?: SortOrder
    purchaseOrderId?: SortOrder
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

  export type PurchaseOrderLineItemNullableScalarRelationFilter = {
    is?: PurchaseOrderLineItemWhereInput | null
    isNot?: PurchaseOrderLineItemWhereInput | null
  }

  export type PurchaseOrderLineItemReceiptCountOrderByAggregateInput = {
    id?: SortOrder
    guid?: SortOrder
    date?: SortOrder
    received?: SortOrder
    receivedPrice?: SortOrder
    purchaseOrderLineItemId?: SortOrder
  }

  export type PurchaseOrderLineItemReceiptAvgOrderByAggregateInput = {
    id?: SortOrder
    received?: SortOrder
    receivedPrice?: SortOrder
    purchaseOrderLineItemId?: SortOrder
  }

  export type PurchaseOrderLineItemReceiptMaxOrderByAggregateInput = {
    id?: SortOrder
    guid?: SortOrder
    date?: SortOrder
    received?: SortOrder
    receivedPrice?: SortOrder
    purchaseOrderLineItemId?: SortOrder
  }

  export type PurchaseOrderLineItemReceiptMinOrderByAggregateInput = {
    id?: SortOrder
    guid?: SortOrder
    date?: SortOrder
    received?: SortOrder
    receivedPrice?: SortOrder
    purchaseOrderLineItemId?: SortOrder
  }

  export type PurchaseOrderLineItemReceiptSumOrderByAggregateInput = {
    id?: SortOrder
    received?: SortOrder
    receivedPrice?: SortOrder
    purchaseOrderLineItemId?: SortOrder
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

  export type SupplierCreateNestedOneWithoutAddressInput = {
    create?: XOR<SupplierCreateWithoutAddressInput, SupplierUncheckedCreateWithoutAddressInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutAddressInput
    connect?: SupplierWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type SupplierUpdateOneWithoutAddressNestedInput = {
    create?: XOR<SupplierCreateWithoutAddressInput, SupplierUncheckedCreateWithoutAddressInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutAddressInput
    upsert?: SupplierUpsertWithoutAddressInput
    disconnect?: SupplierWhereInput | boolean
    delete?: SupplierWhereInput | boolean
    connect?: SupplierWhereUniqueInput
    update?: XOR<XOR<SupplierUpdateToOneWithWhereWithoutAddressInput, SupplierUpdateWithoutAddressInput>, SupplierUncheckedUpdateWithoutAddressInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SupplierCreateNestedOneWithoutContactsInput = {
    create?: XOR<SupplierCreateWithoutContactsInput, SupplierUncheckedCreateWithoutContactsInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutContactsInput
    connect?: SupplierWhereUniqueInput
  }

  export type SupplierUpdateOneRequiredWithoutContactsNestedInput = {
    create?: XOR<SupplierCreateWithoutContactsInput, SupplierUncheckedCreateWithoutContactsInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutContactsInput
    upsert?: SupplierUpsertWithoutContactsInput
    connect?: SupplierWhereUniqueInput
    update?: XOR<XOR<SupplierUpdateToOneWithWhereWithoutContactsInput, SupplierUpdateWithoutContactsInput>, SupplierUncheckedUpdateWithoutContactsInput>
  }

  export type AddressCreateNestedOneWithoutSupplierInput = {
    create?: XOR<AddressCreateWithoutSupplierInput, AddressUncheckedCreateWithoutSupplierInput>
    connectOrCreate?: AddressCreateOrConnectWithoutSupplierInput
    connect?: AddressWhereUniqueInput
  }

  export type ContactCreateNestedManyWithoutSupplierInput = {
    create?: XOR<ContactCreateWithoutSupplierInput, ContactUncheckedCreateWithoutSupplierInput> | ContactCreateWithoutSupplierInput[] | ContactUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: ContactCreateOrConnectWithoutSupplierInput | ContactCreateOrConnectWithoutSupplierInput[]
    createMany?: ContactCreateManySupplierInputEnvelope
    connect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
  }

  export type PurchaseOrderCreateNestedManyWithoutSupplierInput = {
    create?: XOR<PurchaseOrderCreateWithoutSupplierInput, PurchaseOrderUncheckedCreateWithoutSupplierInput> | PurchaseOrderCreateWithoutSupplierInput[] | PurchaseOrderUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: PurchaseOrderCreateOrConnectWithoutSupplierInput | PurchaseOrderCreateOrConnectWithoutSupplierInput[]
    createMany?: PurchaseOrderCreateManySupplierInputEnvelope
    connect?: PurchaseOrderWhereUniqueInput | PurchaseOrderWhereUniqueInput[]
  }

  export type AddressUncheckedCreateNestedOneWithoutSupplierInput = {
    create?: XOR<AddressCreateWithoutSupplierInput, AddressUncheckedCreateWithoutSupplierInput>
    connectOrCreate?: AddressCreateOrConnectWithoutSupplierInput
    connect?: AddressWhereUniqueInput
  }

  export type ContactUncheckedCreateNestedManyWithoutSupplierInput = {
    create?: XOR<ContactCreateWithoutSupplierInput, ContactUncheckedCreateWithoutSupplierInput> | ContactCreateWithoutSupplierInput[] | ContactUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: ContactCreateOrConnectWithoutSupplierInput | ContactCreateOrConnectWithoutSupplierInput[]
    createMany?: ContactCreateManySupplierInputEnvelope
    connect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
  }

  export type PurchaseOrderUncheckedCreateNestedManyWithoutSupplierInput = {
    create?: XOR<PurchaseOrderCreateWithoutSupplierInput, PurchaseOrderUncheckedCreateWithoutSupplierInput> | PurchaseOrderCreateWithoutSupplierInput[] | PurchaseOrderUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: PurchaseOrderCreateOrConnectWithoutSupplierInput | PurchaseOrderCreateOrConnectWithoutSupplierInput[]
    createMany?: PurchaseOrderCreateManySupplierInputEnvelope
    connect?: PurchaseOrderWhereUniqueInput | PurchaseOrderWhereUniqueInput[]
  }

  export type AddressUpdateOneWithoutSupplierNestedInput = {
    create?: XOR<AddressCreateWithoutSupplierInput, AddressUncheckedCreateWithoutSupplierInput>
    connectOrCreate?: AddressCreateOrConnectWithoutSupplierInput
    upsert?: AddressUpsertWithoutSupplierInput
    disconnect?: AddressWhereInput | boolean
    delete?: AddressWhereInput | boolean
    connect?: AddressWhereUniqueInput
    update?: XOR<XOR<AddressUpdateToOneWithWhereWithoutSupplierInput, AddressUpdateWithoutSupplierInput>, AddressUncheckedUpdateWithoutSupplierInput>
  }

  export type ContactUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<ContactCreateWithoutSupplierInput, ContactUncheckedCreateWithoutSupplierInput> | ContactCreateWithoutSupplierInput[] | ContactUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: ContactCreateOrConnectWithoutSupplierInput | ContactCreateOrConnectWithoutSupplierInput[]
    upsert?: ContactUpsertWithWhereUniqueWithoutSupplierInput | ContactUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: ContactCreateManySupplierInputEnvelope
    set?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    disconnect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    delete?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    connect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    update?: ContactUpdateWithWhereUniqueWithoutSupplierInput | ContactUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: ContactUpdateManyWithWhereWithoutSupplierInput | ContactUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: ContactScalarWhereInput | ContactScalarWhereInput[]
  }

  export type PurchaseOrderUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<PurchaseOrderCreateWithoutSupplierInput, PurchaseOrderUncheckedCreateWithoutSupplierInput> | PurchaseOrderCreateWithoutSupplierInput[] | PurchaseOrderUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: PurchaseOrderCreateOrConnectWithoutSupplierInput | PurchaseOrderCreateOrConnectWithoutSupplierInput[]
    upsert?: PurchaseOrderUpsertWithWhereUniqueWithoutSupplierInput | PurchaseOrderUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: PurchaseOrderCreateManySupplierInputEnvelope
    set?: PurchaseOrderWhereUniqueInput | PurchaseOrderWhereUniqueInput[]
    disconnect?: PurchaseOrderWhereUniqueInput | PurchaseOrderWhereUniqueInput[]
    delete?: PurchaseOrderWhereUniqueInput | PurchaseOrderWhereUniqueInput[]
    connect?: PurchaseOrderWhereUniqueInput | PurchaseOrderWhereUniqueInput[]
    update?: PurchaseOrderUpdateWithWhereUniqueWithoutSupplierInput | PurchaseOrderUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: PurchaseOrderUpdateManyWithWhereWithoutSupplierInput | PurchaseOrderUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: PurchaseOrderScalarWhereInput | PurchaseOrderScalarWhereInput[]
  }

  export type AddressUncheckedUpdateOneWithoutSupplierNestedInput = {
    create?: XOR<AddressCreateWithoutSupplierInput, AddressUncheckedCreateWithoutSupplierInput>
    connectOrCreate?: AddressCreateOrConnectWithoutSupplierInput
    upsert?: AddressUpsertWithoutSupplierInput
    disconnect?: AddressWhereInput | boolean
    delete?: AddressWhereInput | boolean
    connect?: AddressWhereUniqueInput
    update?: XOR<XOR<AddressUpdateToOneWithWhereWithoutSupplierInput, AddressUpdateWithoutSupplierInput>, AddressUncheckedUpdateWithoutSupplierInput>
  }

  export type ContactUncheckedUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<ContactCreateWithoutSupplierInput, ContactUncheckedCreateWithoutSupplierInput> | ContactCreateWithoutSupplierInput[] | ContactUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: ContactCreateOrConnectWithoutSupplierInput | ContactCreateOrConnectWithoutSupplierInput[]
    upsert?: ContactUpsertWithWhereUniqueWithoutSupplierInput | ContactUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: ContactCreateManySupplierInputEnvelope
    set?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    disconnect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    delete?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    connect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    update?: ContactUpdateWithWhereUniqueWithoutSupplierInput | ContactUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: ContactUpdateManyWithWhereWithoutSupplierInput | ContactUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: ContactScalarWhereInput | ContactScalarWhereInput[]
  }

  export type PurchaseOrderUncheckedUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<PurchaseOrderCreateWithoutSupplierInput, PurchaseOrderUncheckedCreateWithoutSupplierInput> | PurchaseOrderCreateWithoutSupplierInput[] | PurchaseOrderUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: PurchaseOrderCreateOrConnectWithoutSupplierInput | PurchaseOrderCreateOrConnectWithoutSupplierInput[]
    upsert?: PurchaseOrderUpsertWithWhereUniqueWithoutSupplierInput | PurchaseOrderUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: PurchaseOrderCreateManySupplierInputEnvelope
    set?: PurchaseOrderWhereUniqueInput | PurchaseOrderWhereUniqueInput[]
    disconnect?: PurchaseOrderWhereUniqueInput | PurchaseOrderWhereUniqueInput[]
    delete?: PurchaseOrderWhereUniqueInput | PurchaseOrderWhereUniqueInput[]
    connect?: PurchaseOrderWhereUniqueInput | PurchaseOrderWhereUniqueInput[]
    update?: PurchaseOrderUpdateWithWhereUniqueWithoutSupplierInput | PurchaseOrderUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: PurchaseOrderUpdateManyWithWhereWithoutSupplierInput | PurchaseOrderUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: PurchaseOrderScalarWhereInput | PurchaseOrderScalarWhereInput[]
  }

  export type PurchaseOrderLineItemCreateNestedManyWithoutPurchaseOrderInput = {
    create?: XOR<PurchaseOrderLineItemCreateWithoutPurchaseOrderInput, PurchaseOrderLineItemUncheckedCreateWithoutPurchaseOrderInput> | PurchaseOrderLineItemCreateWithoutPurchaseOrderInput[] | PurchaseOrderLineItemUncheckedCreateWithoutPurchaseOrderInput[]
    connectOrCreate?: PurchaseOrderLineItemCreateOrConnectWithoutPurchaseOrderInput | PurchaseOrderLineItemCreateOrConnectWithoutPurchaseOrderInput[]
    createMany?: PurchaseOrderLineItemCreateManyPurchaseOrderInputEnvelope
    connect?: PurchaseOrderLineItemWhereUniqueInput | PurchaseOrderLineItemWhereUniqueInput[]
  }

  export type SupplierCreateNestedOneWithoutPurchaseOrdersInput = {
    create?: XOR<SupplierCreateWithoutPurchaseOrdersInput, SupplierUncheckedCreateWithoutPurchaseOrdersInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutPurchaseOrdersInput
    connect?: SupplierWhereUniqueInput
  }

  export type PurchaseOrderLineItemUncheckedCreateNestedManyWithoutPurchaseOrderInput = {
    create?: XOR<PurchaseOrderLineItemCreateWithoutPurchaseOrderInput, PurchaseOrderLineItemUncheckedCreateWithoutPurchaseOrderInput> | PurchaseOrderLineItemCreateWithoutPurchaseOrderInput[] | PurchaseOrderLineItemUncheckedCreateWithoutPurchaseOrderInput[]
    connectOrCreate?: PurchaseOrderLineItemCreateOrConnectWithoutPurchaseOrderInput | PurchaseOrderLineItemCreateOrConnectWithoutPurchaseOrderInput[]
    createMany?: PurchaseOrderLineItemCreateManyPurchaseOrderInputEnvelope
    connect?: PurchaseOrderLineItemWhereUniqueInput | PurchaseOrderLineItemWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type PurchaseOrderLineItemUpdateManyWithoutPurchaseOrderNestedInput = {
    create?: XOR<PurchaseOrderLineItemCreateWithoutPurchaseOrderInput, PurchaseOrderLineItemUncheckedCreateWithoutPurchaseOrderInput> | PurchaseOrderLineItemCreateWithoutPurchaseOrderInput[] | PurchaseOrderLineItemUncheckedCreateWithoutPurchaseOrderInput[]
    connectOrCreate?: PurchaseOrderLineItemCreateOrConnectWithoutPurchaseOrderInput | PurchaseOrderLineItemCreateOrConnectWithoutPurchaseOrderInput[]
    upsert?: PurchaseOrderLineItemUpsertWithWhereUniqueWithoutPurchaseOrderInput | PurchaseOrderLineItemUpsertWithWhereUniqueWithoutPurchaseOrderInput[]
    createMany?: PurchaseOrderLineItemCreateManyPurchaseOrderInputEnvelope
    set?: PurchaseOrderLineItemWhereUniqueInput | PurchaseOrderLineItemWhereUniqueInput[]
    disconnect?: PurchaseOrderLineItemWhereUniqueInput | PurchaseOrderLineItemWhereUniqueInput[]
    delete?: PurchaseOrderLineItemWhereUniqueInput | PurchaseOrderLineItemWhereUniqueInput[]
    connect?: PurchaseOrderLineItemWhereUniqueInput | PurchaseOrderLineItemWhereUniqueInput[]
    update?: PurchaseOrderLineItemUpdateWithWhereUniqueWithoutPurchaseOrderInput | PurchaseOrderLineItemUpdateWithWhereUniqueWithoutPurchaseOrderInput[]
    updateMany?: PurchaseOrderLineItemUpdateManyWithWhereWithoutPurchaseOrderInput | PurchaseOrderLineItemUpdateManyWithWhereWithoutPurchaseOrderInput[]
    deleteMany?: PurchaseOrderLineItemScalarWhereInput | PurchaseOrderLineItemScalarWhereInput[]
  }

  export type SupplierUpdateOneWithoutPurchaseOrdersNestedInput = {
    create?: XOR<SupplierCreateWithoutPurchaseOrdersInput, SupplierUncheckedCreateWithoutPurchaseOrdersInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutPurchaseOrdersInput
    upsert?: SupplierUpsertWithoutPurchaseOrdersInput
    disconnect?: SupplierWhereInput | boolean
    delete?: SupplierWhereInput | boolean
    connect?: SupplierWhereUniqueInput
    update?: XOR<XOR<SupplierUpdateToOneWithWhereWithoutPurchaseOrdersInput, SupplierUpdateWithoutPurchaseOrdersInput>, SupplierUncheckedUpdateWithoutPurchaseOrdersInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PurchaseOrderLineItemUncheckedUpdateManyWithoutPurchaseOrderNestedInput = {
    create?: XOR<PurchaseOrderLineItemCreateWithoutPurchaseOrderInput, PurchaseOrderLineItemUncheckedCreateWithoutPurchaseOrderInput> | PurchaseOrderLineItemCreateWithoutPurchaseOrderInput[] | PurchaseOrderLineItemUncheckedCreateWithoutPurchaseOrderInput[]
    connectOrCreate?: PurchaseOrderLineItemCreateOrConnectWithoutPurchaseOrderInput | PurchaseOrderLineItemCreateOrConnectWithoutPurchaseOrderInput[]
    upsert?: PurchaseOrderLineItemUpsertWithWhereUniqueWithoutPurchaseOrderInput | PurchaseOrderLineItemUpsertWithWhereUniqueWithoutPurchaseOrderInput[]
    createMany?: PurchaseOrderLineItemCreateManyPurchaseOrderInputEnvelope
    set?: PurchaseOrderLineItemWhereUniqueInput | PurchaseOrderLineItemWhereUniqueInput[]
    disconnect?: PurchaseOrderLineItemWhereUniqueInput | PurchaseOrderLineItemWhereUniqueInput[]
    delete?: PurchaseOrderLineItemWhereUniqueInput | PurchaseOrderLineItemWhereUniqueInput[]
    connect?: PurchaseOrderLineItemWhereUniqueInput | PurchaseOrderLineItemWhereUniqueInput[]
    update?: PurchaseOrderLineItemUpdateWithWhereUniqueWithoutPurchaseOrderInput | PurchaseOrderLineItemUpdateWithWhereUniqueWithoutPurchaseOrderInput[]
    updateMany?: PurchaseOrderLineItemUpdateManyWithWhereWithoutPurchaseOrderInput | PurchaseOrderLineItemUpdateManyWithWhereWithoutPurchaseOrderInput[]
    deleteMany?: PurchaseOrderLineItemScalarWhereInput | PurchaseOrderLineItemScalarWhereInput[]
  }

  export type PurchaseOrderLineItemReceiptCreateNestedManyWithoutPurchaseOrderLineItemInput = {
    create?: XOR<PurchaseOrderLineItemReceiptCreateWithoutPurchaseOrderLineItemInput, PurchaseOrderLineItemReceiptUncheckedCreateWithoutPurchaseOrderLineItemInput> | PurchaseOrderLineItemReceiptCreateWithoutPurchaseOrderLineItemInput[] | PurchaseOrderLineItemReceiptUncheckedCreateWithoutPurchaseOrderLineItemInput[]
    connectOrCreate?: PurchaseOrderLineItemReceiptCreateOrConnectWithoutPurchaseOrderLineItemInput | PurchaseOrderLineItemReceiptCreateOrConnectWithoutPurchaseOrderLineItemInput[]
    createMany?: PurchaseOrderLineItemReceiptCreateManyPurchaseOrderLineItemInputEnvelope
    connect?: PurchaseOrderLineItemReceiptWhereUniqueInput | PurchaseOrderLineItemReceiptWhereUniqueInput[]
  }

  export type PurchaseOrderCreateNestedOneWithoutLineItemsInput = {
    create?: XOR<PurchaseOrderCreateWithoutLineItemsInput, PurchaseOrderUncheckedCreateWithoutLineItemsInput>
    connectOrCreate?: PurchaseOrderCreateOrConnectWithoutLineItemsInput
    connect?: PurchaseOrderWhereUniqueInput
  }

  export type PurchaseOrderLineItemReceiptUncheckedCreateNestedManyWithoutPurchaseOrderLineItemInput = {
    create?: XOR<PurchaseOrderLineItemReceiptCreateWithoutPurchaseOrderLineItemInput, PurchaseOrderLineItemReceiptUncheckedCreateWithoutPurchaseOrderLineItemInput> | PurchaseOrderLineItemReceiptCreateWithoutPurchaseOrderLineItemInput[] | PurchaseOrderLineItemReceiptUncheckedCreateWithoutPurchaseOrderLineItemInput[]
    connectOrCreate?: PurchaseOrderLineItemReceiptCreateOrConnectWithoutPurchaseOrderLineItemInput | PurchaseOrderLineItemReceiptCreateOrConnectWithoutPurchaseOrderLineItemInput[]
    createMany?: PurchaseOrderLineItemReceiptCreateManyPurchaseOrderLineItemInputEnvelope
    connect?: PurchaseOrderLineItemReceiptWhereUniqueInput | PurchaseOrderLineItemReceiptWhereUniqueInput[]
  }

  export type PurchaseOrderLineItemReceiptUpdateManyWithoutPurchaseOrderLineItemNestedInput = {
    create?: XOR<PurchaseOrderLineItemReceiptCreateWithoutPurchaseOrderLineItemInput, PurchaseOrderLineItemReceiptUncheckedCreateWithoutPurchaseOrderLineItemInput> | PurchaseOrderLineItemReceiptCreateWithoutPurchaseOrderLineItemInput[] | PurchaseOrderLineItemReceiptUncheckedCreateWithoutPurchaseOrderLineItemInput[]
    connectOrCreate?: PurchaseOrderLineItemReceiptCreateOrConnectWithoutPurchaseOrderLineItemInput | PurchaseOrderLineItemReceiptCreateOrConnectWithoutPurchaseOrderLineItemInput[]
    upsert?: PurchaseOrderLineItemReceiptUpsertWithWhereUniqueWithoutPurchaseOrderLineItemInput | PurchaseOrderLineItemReceiptUpsertWithWhereUniqueWithoutPurchaseOrderLineItemInput[]
    createMany?: PurchaseOrderLineItemReceiptCreateManyPurchaseOrderLineItemInputEnvelope
    set?: PurchaseOrderLineItemReceiptWhereUniqueInput | PurchaseOrderLineItemReceiptWhereUniqueInput[]
    disconnect?: PurchaseOrderLineItemReceiptWhereUniqueInput | PurchaseOrderLineItemReceiptWhereUniqueInput[]
    delete?: PurchaseOrderLineItemReceiptWhereUniqueInput | PurchaseOrderLineItemReceiptWhereUniqueInput[]
    connect?: PurchaseOrderLineItemReceiptWhereUniqueInput | PurchaseOrderLineItemReceiptWhereUniqueInput[]
    update?: PurchaseOrderLineItemReceiptUpdateWithWhereUniqueWithoutPurchaseOrderLineItemInput | PurchaseOrderLineItemReceiptUpdateWithWhereUniqueWithoutPurchaseOrderLineItemInput[]
    updateMany?: PurchaseOrderLineItemReceiptUpdateManyWithWhereWithoutPurchaseOrderLineItemInput | PurchaseOrderLineItemReceiptUpdateManyWithWhereWithoutPurchaseOrderLineItemInput[]
    deleteMany?: PurchaseOrderLineItemReceiptScalarWhereInput | PurchaseOrderLineItemReceiptScalarWhereInput[]
  }

  export type PurchaseOrderUpdateOneRequiredWithoutLineItemsNestedInput = {
    create?: XOR<PurchaseOrderCreateWithoutLineItemsInput, PurchaseOrderUncheckedCreateWithoutLineItemsInput>
    connectOrCreate?: PurchaseOrderCreateOrConnectWithoutLineItemsInput
    upsert?: PurchaseOrderUpsertWithoutLineItemsInput
    connect?: PurchaseOrderWhereUniqueInput
    update?: XOR<XOR<PurchaseOrderUpdateToOneWithWhereWithoutLineItemsInput, PurchaseOrderUpdateWithoutLineItemsInput>, PurchaseOrderUncheckedUpdateWithoutLineItemsInput>
  }

  export type PurchaseOrderLineItemReceiptUncheckedUpdateManyWithoutPurchaseOrderLineItemNestedInput = {
    create?: XOR<PurchaseOrderLineItemReceiptCreateWithoutPurchaseOrderLineItemInput, PurchaseOrderLineItemReceiptUncheckedCreateWithoutPurchaseOrderLineItemInput> | PurchaseOrderLineItemReceiptCreateWithoutPurchaseOrderLineItemInput[] | PurchaseOrderLineItemReceiptUncheckedCreateWithoutPurchaseOrderLineItemInput[]
    connectOrCreate?: PurchaseOrderLineItemReceiptCreateOrConnectWithoutPurchaseOrderLineItemInput | PurchaseOrderLineItemReceiptCreateOrConnectWithoutPurchaseOrderLineItemInput[]
    upsert?: PurchaseOrderLineItemReceiptUpsertWithWhereUniqueWithoutPurchaseOrderLineItemInput | PurchaseOrderLineItemReceiptUpsertWithWhereUniqueWithoutPurchaseOrderLineItemInput[]
    createMany?: PurchaseOrderLineItemReceiptCreateManyPurchaseOrderLineItemInputEnvelope
    set?: PurchaseOrderLineItemReceiptWhereUniqueInput | PurchaseOrderLineItemReceiptWhereUniqueInput[]
    disconnect?: PurchaseOrderLineItemReceiptWhereUniqueInput | PurchaseOrderLineItemReceiptWhereUniqueInput[]
    delete?: PurchaseOrderLineItemReceiptWhereUniqueInput | PurchaseOrderLineItemReceiptWhereUniqueInput[]
    connect?: PurchaseOrderLineItemReceiptWhereUniqueInput | PurchaseOrderLineItemReceiptWhereUniqueInput[]
    update?: PurchaseOrderLineItemReceiptUpdateWithWhereUniqueWithoutPurchaseOrderLineItemInput | PurchaseOrderLineItemReceiptUpdateWithWhereUniqueWithoutPurchaseOrderLineItemInput[]
    updateMany?: PurchaseOrderLineItemReceiptUpdateManyWithWhereWithoutPurchaseOrderLineItemInput | PurchaseOrderLineItemReceiptUpdateManyWithWhereWithoutPurchaseOrderLineItemInput[]
    deleteMany?: PurchaseOrderLineItemReceiptScalarWhereInput | PurchaseOrderLineItemReceiptScalarWhereInput[]
  }

  export type PurchaseOrderLineItemCreateNestedOneWithoutReceiptsInput = {
    create?: XOR<PurchaseOrderLineItemCreateWithoutReceiptsInput, PurchaseOrderLineItemUncheckedCreateWithoutReceiptsInput>
    connectOrCreate?: PurchaseOrderLineItemCreateOrConnectWithoutReceiptsInput
    connect?: PurchaseOrderLineItemWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PurchaseOrderLineItemUpdateOneWithoutReceiptsNestedInput = {
    create?: XOR<PurchaseOrderLineItemCreateWithoutReceiptsInput, PurchaseOrderLineItemUncheckedCreateWithoutReceiptsInput>
    connectOrCreate?: PurchaseOrderLineItemCreateOrConnectWithoutReceiptsInput
    upsert?: PurchaseOrderLineItemUpsertWithoutReceiptsInput
    disconnect?: PurchaseOrderLineItemWhereInput | boolean
    delete?: PurchaseOrderLineItemWhereInput | boolean
    connect?: PurchaseOrderLineItemWhereUniqueInput
    update?: XOR<XOR<PurchaseOrderLineItemUpdateToOneWithWhereWithoutReceiptsInput, PurchaseOrderLineItemUpdateWithoutReceiptsInput>, PurchaseOrderLineItemUncheckedUpdateWithoutReceiptsInput>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type SupplierCreateWithoutAddressInput = {
    guid?: string
    name: string
    website?: string | null
    contacts?: ContactCreateNestedManyWithoutSupplierInput
    purchaseOrders?: PurchaseOrderCreateNestedManyWithoutSupplierInput
  }

  export type SupplierUncheckedCreateWithoutAddressInput = {
    id?: number
    guid?: string
    name: string
    website?: string | null
    contacts?: ContactUncheckedCreateNestedManyWithoutSupplierInput
    purchaseOrders?: PurchaseOrderUncheckedCreateNestedManyWithoutSupplierInput
  }

  export type SupplierCreateOrConnectWithoutAddressInput = {
    where: SupplierWhereUniqueInput
    create: XOR<SupplierCreateWithoutAddressInput, SupplierUncheckedCreateWithoutAddressInput>
  }

  export type SupplierUpsertWithoutAddressInput = {
    update: XOR<SupplierUpdateWithoutAddressInput, SupplierUncheckedUpdateWithoutAddressInput>
    create: XOR<SupplierCreateWithoutAddressInput, SupplierUncheckedCreateWithoutAddressInput>
    where?: SupplierWhereInput
  }

  export type SupplierUpdateToOneWithWhereWithoutAddressInput = {
    where?: SupplierWhereInput
    data: XOR<SupplierUpdateWithoutAddressInput, SupplierUncheckedUpdateWithoutAddressInput>
  }

  export type SupplierUpdateWithoutAddressInput = {
    guid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    contacts?: ContactUpdateManyWithoutSupplierNestedInput
    purchaseOrders?: PurchaseOrderUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierUncheckedUpdateWithoutAddressInput = {
    id?: IntFieldUpdateOperationsInput | number
    guid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    contacts?: ContactUncheckedUpdateManyWithoutSupplierNestedInput
    purchaseOrders?: PurchaseOrderUncheckedUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierCreateWithoutContactsInput = {
    guid?: string
    name: string
    website?: string | null
    address?: AddressCreateNestedOneWithoutSupplierInput
    purchaseOrders?: PurchaseOrderCreateNestedManyWithoutSupplierInput
  }

  export type SupplierUncheckedCreateWithoutContactsInput = {
    id?: number
    guid?: string
    name: string
    website?: string | null
    address?: AddressUncheckedCreateNestedOneWithoutSupplierInput
    purchaseOrders?: PurchaseOrderUncheckedCreateNestedManyWithoutSupplierInput
  }

  export type SupplierCreateOrConnectWithoutContactsInput = {
    where: SupplierWhereUniqueInput
    create: XOR<SupplierCreateWithoutContactsInput, SupplierUncheckedCreateWithoutContactsInput>
  }

  export type SupplierUpsertWithoutContactsInput = {
    update: XOR<SupplierUpdateWithoutContactsInput, SupplierUncheckedUpdateWithoutContactsInput>
    create: XOR<SupplierCreateWithoutContactsInput, SupplierUncheckedCreateWithoutContactsInput>
    where?: SupplierWhereInput
  }

  export type SupplierUpdateToOneWithWhereWithoutContactsInput = {
    where?: SupplierWhereInput
    data: XOR<SupplierUpdateWithoutContactsInput, SupplierUncheckedUpdateWithoutContactsInput>
  }

  export type SupplierUpdateWithoutContactsInput = {
    guid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    address?: AddressUpdateOneWithoutSupplierNestedInput
    purchaseOrders?: PurchaseOrderUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierUncheckedUpdateWithoutContactsInput = {
    id?: IntFieldUpdateOperationsInput | number
    guid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    address?: AddressUncheckedUpdateOneWithoutSupplierNestedInput
    purchaseOrders?: PurchaseOrderUncheckedUpdateManyWithoutSupplierNestedInput
  }

  export type AddressCreateWithoutSupplierInput = {
    guid?: string
    address1: string
    address2?: string | null
    address3?: string | null
    city?: string | null
    postcode?: string | null
  }

  export type AddressUncheckedCreateWithoutSupplierInput = {
    id?: number
    guid?: string
    address1: string
    address2?: string | null
    address3?: string | null
    city?: string | null
    postcode?: string | null
  }

  export type AddressCreateOrConnectWithoutSupplierInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutSupplierInput, AddressUncheckedCreateWithoutSupplierInput>
  }

  export type ContactCreateWithoutSupplierInput = {
    guid?: string
    name: string
    email?: string | null
    phone?: string | null
  }

  export type ContactUncheckedCreateWithoutSupplierInput = {
    id?: number
    guid?: string
    name: string
    email?: string | null
    phone?: string | null
  }

  export type ContactCreateOrConnectWithoutSupplierInput = {
    where: ContactWhereUniqueInput
    create: XOR<ContactCreateWithoutSupplierInput, ContactUncheckedCreateWithoutSupplierInput>
  }

  export type ContactCreateManySupplierInputEnvelope = {
    data: ContactCreateManySupplierInput | ContactCreateManySupplierInput[]
    skipDuplicates?: boolean
  }

  export type PurchaseOrderCreateWithoutSupplierInput = {
    guid?: string
    number: string
    state?: string
    issueDate?: Date | string | null
    pendingXero?: boolean
    subTotal: number
    taxAmount: number
    total: number
    lineItems?: PurchaseOrderLineItemCreateNestedManyWithoutPurchaseOrderInput
  }

  export type PurchaseOrderUncheckedCreateWithoutSupplierInput = {
    id?: number
    guid?: string
    number: string
    state?: string
    issueDate?: Date | string | null
    pendingXero?: boolean
    subTotal: number
    taxAmount: number
    total: number
    lineItems?: PurchaseOrderLineItemUncheckedCreateNestedManyWithoutPurchaseOrderInput
  }

  export type PurchaseOrderCreateOrConnectWithoutSupplierInput = {
    where: PurchaseOrderWhereUniqueInput
    create: XOR<PurchaseOrderCreateWithoutSupplierInput, PurchaseOrderUncheckedCreateWithoutSupplierInput>
  }

  export type PurchaseOrderCreateManySupplierInputEnvelope = {
    data: PurchaseOrderCreateManySupplierInput | PurchaseOrderCreateManySupplierInput[]
    skipDuplicates?: boolean
  }

  export type AddressUpsertWithoutSupplierInput = {
    update: XOR<AddressUpdateWithoutSupplierInput, AddressUncheckedUpdateWithoutSupplierInput>
    create: XOR<AddressCreateWithoutSupplierInput, AddressUncheckedCreateWithoutSupplierInput>
    where?: AddressWhereInput
  }

  export type AddressUpdateToOneWithWhereWithoutSupplierInput = {
    where?: AddressWhereInput
    data: XOR<AddressUpdateWithoutSupplierInput, AddressUncheckedUpdateWithoutSupplierInput>
  }

  export type AddressUpdateWithoutSupplierInput = {
    guid?: StringFieldUpdateOperationsInput | string
    address1?: StringFieldUpdateOperationsInput | string
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    address3?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postcode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AddressUncheckedUpdateWithoutSupplierInput = {
    id?: IntFieldUpdateOperationsInput | number
    guid?: StringFieldUpdateOperationsInput | string
    address1?: StringFieldUpdateOperationsInput | string
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    address3?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postcode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContactUpsertWithWhereUniqueWithoutSupplierInput = {
    where: ContactWhereUniqueInput
    update: XOR<ContactUpdateWithoutSupplierInput, ContactUncheckedUpdateWithoutSupplierInput>
    create: XOR<ContactCreateWithoutSupplierInput, ContactUncheckedCreateWithoutSupplierInput>
  }

  export type ContactUpdateWithWhereUniqueWithoutSupplierInput = {
    where: ContactWhereUniqueInput
    data: XOR<ContactUpdateWithoutSupplierInput, ContactUncheckedUpdateWithoutSupplierInput>
  }

  export type ContactUpdateManyWithWhereWithoutSupplierInput = {
    where: ContactScalarWhereInput
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyWithoutSupplierInput>
  }

  export type ContactScalarWhereInput = {
    AND?: ContactScalarWhereInput | ContactScalarWhereInput[]
    OR?: ContactScalarWhereInput[]
    NOT?: ContactScalarWhereInput | ContactScalarWhereInput[]
    id?: IntFilter<"Contact"> | number
    guid?: StringFilter<"Contact"> | string
    name?: StringFilter<"Contact"> | string
    email?: StringNullableFilter<"Contact"> | string | null
    phone?: StringNullableFilter<"Contact"> | string | null
    supplierId?: IntFilter<"Contact"> | number
  }

  export type PurchaseOrderUpsertWithWhereUniqueWithoutSupplierInput = {
    where: PurchaseOrderWhereUniqueInput
    update: XOR<PurchaseOrderUpdateWithoutSupplierInput, PurchaseOrderUncheckedUpdateWithoutSupplierInput>
    create: XOR<PurchaseOrderCreateWithoutSupplierInput, PurchaseOrderUncheckedCreateWithoutSupplierInput>
  }

  export type PurchaseOrderUpdateWithWhereUniqueWithoutSupplierInput = {
    where: PurchaseOrderWhereUniqueInput
    data: XOR<PurchaseOrderUpdateWithoutSupplierInput, PurchaseOrderUncheckedUpdateWithoutSupplierInput>
  }

  export type PurchaseOrderUpdateManyWithWhereWithoutSupplierInput = {
    where: PurchaseOrderScalarWhereInput
    data: XOR<PurchaseOrderUpdateManyMutationInput, PurchaseOrderUncheckedUpdateManyWithoutSupplierInput>
  }

  export type PurchaseOrderScalarWhereInput = {
    AND?: PurchaseOrderScalarWhereInput | PurchaseOrderScalarWhereInput[]
    OR?: PurchaseOrderScalarWhereInput[]
    NOT?: PurchaseOrderScalarWhereInput | PurchaseOrderScalarWhereInput[]
    id?: IntFilter<"PurchaseOrder"> | number
    guid?: StringFilter<"PurchaseOrder"> | string
    number?: StringFilter<"PurchaseOrder"> | string
    state?: StringFilter<"PurchaseOrder"> | string
    issueDate?: DateTimeNullableFilter<"PurchaseOrder"> | Date | string | null
    pendingXero?: BoolFilter<"PurchaseOrder"> | boolean
    subTotal?: IntFilter<"PurchaseOrder"> | number
    taxAmount?: IntFilter<"PurchaseOrder"> | number
    total?: IntFilter<"PurchaseOrder"> | number
    supplierId?: IntNullableFilter<"PurchaseOrder"> | number | null
  }

  export type PurchaseOrderLineItemCreateWithoutPurchaseOrderInput = {
    guid?: string
    variantSku?: string | null
    variantGuid?: string | null
    variantUPC?: string | null
    variantSupplierCode?: string | null
    variantTaxRate: number
    description: string
    variantMediaURI?: string | null
    itemCost: number
    quantityOrdered: number
    packSize?: number
    receipts?: PurchaseOrderLineItemReceiptCreateNestedManyWithoutPurchaseOrderLineItemInput
  }

  export type PurchaseOrderLineItemUncheckedCreateWithoutPurchaseOrderInput = {
    id?: number
    guid?: string
    variantSku?: string | null
    variantGuid?: string | null
    variantUPC?: string | null
    variantSupplierCode?: string | null
    variantTaxRate: number
    description: string
    variantMediaURI?: string | null
    itemCost: number
    quantityOrdered: number
    packSize?: number
    receipts?: PurchaseOrderLineItemReceiptUncheckedCreateNestedManyWithoutPurchaseOrderLineItemInput
  }

  export type PurchaseOrderLineItemCreateOrConnectWithoutPurchaseOrderInput = {
    where: PurchaseOrderLineItemWhereUniqueInput
    create: XOR<PurchaseOrderLineItemCreateWithoutPurchaseOrderInput, PurchaseOrderLineItemUncheckedCreateWithoutPurchaseOrderInput>
  }

  export type PurchaseOrderLineItemCreateManyPurchaseOrderInputEnvelope = {
    data: PurchaseOrderLineItemCreateManyPurchaseOrderInput | PurchaseOrderLineItemCreateManyPurchaseOrderInput[]
    skipDuplicates?: boolean
  }

  export type SupplierCreateWithoutPurchaseOrdersInput = {
    guid?: string
    name: string
    website?: string | null
    address?: AddressCreateNestedOneWithoutSupplierInput
    contacts?: ContactCreateNestedManyWithoutSupplierInput
  }

  export type SupplierUncheckedCreateWithoutPurchaseOrdersInput = {
    id?: number
    guid?: string
    name: string
    website?: string | null
    address?: AddressUncheckedCreateNestedOneWithoutSupplierInput
    contacts?: ContactUncheckedCreateNestedManyWithoutSupplierInput
  }

  export type SupplierCreateOrConnectWithoutPurchaseOrdersInput = {
    where: SupplierWhereUniqueInput
    create: XOR<SupplierCreateWithoutPurchaseOrdersInput, SupplierUncheckedCreateWithoutPurchaseOrdersInput>
  }

  export type PurchaseOrderLineItemUpsertWithWhereUniqueWithoutPurchaseOrderInput = {
    where: PurchaseOrderLineItemWhereUniqueInput
    update: XOR<PurchaseOrderLineItemUpdateWithoutPurchaseOrderInput, PurchaseOrderLineItemUncheckedUpdateWithoutPurchaseOrderInput>
    create: XOR<PurchaseOrderLineItemCreateWithoutPurchaseOrderInput, PurchaseOrderLineItemUncheckedCreateWithoutPurchaseOrderInput>
  }

  export type PurchaseOrderLineItemUpdateWithWhereUniqueWithoutPurchaseOrderInput = {
    where: PurchaseOrderLineItemWhereUniqueInput
    data: XOR<PurchaseOrderLineItemUpdateWithoutPurchaseOrderInput, PurchaseOrderLineItemUncheckedUpdateWithoutPurchaseOrderInput>
  }

  export type PurchaseOrderLineItemUpdateManyWithWhereWithoutPurchaseOrderInput = {
    where: PurchaseOrderLineItemScalarWhereInput
    data: XOR<PurchaseOrderLineItemUpdateManyMutationInput, PurchaseOrderLineItemUncheckedUpdateManyWithoutPurchaseOrderInput>
  }

  export type PurchaseOrderLineItemScalarWhereInput = {
    AND?: PurchaseOrderLineItemScalarWhereInput | PurchaseOrderLineItemScalarWhereInput[]
    OR?: PurchaseOrderLineItemScalarWhereInput[]
    NOT?: PurchaseOrderLineItemScalarWhereInput | PurchaseOrderLineItemScalarWhereInput[]
    id?: IntFilter<"PurchaseOrderLineItem"> | number
    guid?: StringFilter<"PurchaseOrderLineItem"> | string
    variantSku?: StringNullableFilter<"PurchaseOrderLineItem"> | string | null
    variantGuid?: StringNullableFilter<"PurchaseOrderLineItem"> | string | null
    variantUPC?: StringNullableFilter<"PurchaseOrderLineItem"> | string | null
    variantSupplierCode?: StringNullableFilter<"PurchaseOrderLineItem"> | string | null
    variantTaxRate?: IntFilter<"PurchaseOrderLineItem"> | number
    description?: StringFilter<"PurchaseOrderLineItem"> | string
    variantMediaURI?: StringNullableFilter<"PurchaseOrderLineItem"> | string | null
    itemCost?: IntFilter<"PurchaseOrderLineItem"> | number
    quantityOrdered?: IntFilter<"PurchaseOrderLineItem"> | number
    packSize?: IntFilter<"PurchaseOrderLineItem"> | number
    purchaseOrderId?: IntFilter<"PurchaseOrderLineItem"> | number
  }

  export type SupplierUpsertWithoutPurchaseOrdersInput = {
    update: XOR<SupplierUpdateWithoutPurchaseOrdersInput, SupplierUncheckedUpdateWithoutPurchaseOrdersInput>
    create: XOR<SupplierCreateWithoutPurchaseOrdersInput, SupplierUncheckedCreateWithoutPurchaseOrdersInput>
    where?: SupplierWhereInput
  }

  export type SupplierUpdateToOneWithWhereWithoutPurchaseOrdersInput = {
    where?: SupplierWhereInput
    data: XOR<SupplierUpdateWithoutPurchaseOrdersInput, SupplierUncheckedUpdateWithoutPurchaseOrdersInput>
  }

  export type SupplierUpdateWithoutPurchaseOrdersInput = {
    guid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    address?: AddressUpdateOneWithoutSupplierNestedInput
    contacts?: ContactUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierUncheckedUpdateWithoutPurchaseOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    guid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    address?: AddressUncheckedUpdateOneWithoutSupplierNestedInput
    contacts?: ContactUncheckedUpdateManyWithoutSupplierNestedInput
  }

  export type PurchaseOrderLineItemReceiptCreateWithoutPurchaseOrderLineItemInput = {
    guid?: string
    date?: Date | string
    received: number
    receivedPrice: number
  }

  export type PurchaseOrderLineItemReceiptUncheckedCreateWithoutPurchaseOrderLineItemInput = {
    id?: number
    guid?: string
    date?: Date | string
    received: number
    receivedPrice: number
  }

  export type PurchaseOrderLineItemReceiptCreateOrConnectWithoutPurchaseOrderLineItemInput = {
    where: PurchaseOrderLineItemReceiptWhereUniqueInput
    create: XOR<PurchaseOrderLineItemReceiptCreateWithoutPurchaseOrderLineItemInput, PurchaseOrderLineItemReceiptUncheckedCreateWithoutPurchaseOrderLineItemInput>
  }

  export type PurchaseOrderLineItemReceiptCreateManyPurchaseOrderLineItemInputEnvelope = {
    data: PurchaseOrderLineItemReceiptCreateManyPurchaseOrderLineItemInput | PurchaseOrderLineItemReceiptCreateManyPurchaseOrderLineItemInput[]
    skipDuplicates?: boolean
  }

  export type PurchaseOrderCreateWithoutLineItemsInput = {
    guid?: string
    number: string
    state?: string
    issueDate?: Date | string | null
    pendingXero?: boolean
    subTotal: number
    taxAmount: number
    total: number
    supplier?: SupplierCreateNestedOneWithoutPurchaseOrdersInput
  }

  export type PurchaseOrderUncheckedCreateWithoutLineItemsInput = {
    id?: number
    guid?: string
    number: string
    state?: string
    issueDate?: Date | string | null
    pendingXero?: boolean
    subTotal: number
    taxAmount: number
    total: number
    supplierId?: number | null
  }

  export type PurchaseOrderCreateOrConnectWithoutLineItemsInput = {
    where: PurchaseOrderWhereUniqueInput
    create: XOR<PurchaseOrderCreateWithoutLineItemsInput, PurchaseOrderUncheckedCreateWithoutLineItemsInput>
  }

  export type PurchaseOrderLineItemReceiptUpsertWithWhereUniqueWithoutPurchaseOrderLineItemInput = {
    where: PurchaseOrderLineItemReceiptWhereUniqueInput
    update: XOR<PurchaseOrderLineItemReceiptUpdateWithoutPurchaseOrderLineItemInput, PurchaseOrderLineItemReceiptUncheckedUpdateWithoutPurchaseOrderLineItemInput>
    create: XOR<PurchaseOrderLineItemReceiptCreateWithoutPurchaseOrderLineItemInput, PurchaseOrderLineItemReceiptUncheckedCreateWithoutPurchaseOrderLineItemInput>
  }

  export type PurchaseOrderLineItemReceiptUpdateWithWhereUniqueWithoutPurchaseOrderLineItemInput = {
    where: PurchaseOrderLineItemReceiptWhereUniqueInput
    data: XOR<PurchaseOrderLineItemReceiptUpdateWithoutPurchaseOrderLineItemInput, PurchaseOrderLineItemReceiptUncheckedUpdateWithoutPurchaseOrderLineItemInput>
  }

  export type PurchaseOrderLineItemReceiptUpdateManyWithWhereWithoutPurchaseOrderLineItemInput = {
    where: PurchaseOrderLineItemReceiptScalarWhereInput
    data: XOR<PurchaseOrderLineItemReceiptUpdateManyMutationInput, PurchaseOrderLineItemReceiptUncheckedUpdateManyWithoutPurchaseOrderLineItemInput>
  }

  export type PurchaseOrderLineItemReceiptScalarWhereInput = {
    AND?: PurchaseOrderLineItemReceiptScalarWhereInput | PurchaseOrderLineItemReceiptScalarWhereInput[]
    OR?: PurchaseOrderLineItemReceiptScalarWhereInput[]
    NOT?: PurchaseOrderLineItemReceiptScalarWhereInput | PurchaseOrderLineItemReceiptScalarWhereInput[]
    id?: IntFilter<"PurchaseOrderLineItemReceipt"> | number
    guid?: StringFilter<"PurchaseOrderLineItemReceipt"> | string
    date?: DateTimeFilter<"PurchaseOrderLineItemReceipt"> | Date | string
    received?: IntFilter<"PurchaseOrderLineItemReceipt"> | number
    receivedPrice?: IntFilter<"PurchaseOrderLineItemReceipt"> | number
    purchaseOrderLineItemId?: IntNullableFilter<"PurchaseOrderLineItemReceipt"> | number | null
  }

  export type PurchaseOrderUpsertWithoutLineItemsInput = {
    update: XOR<PurchaseOrderUpdateWithoutLineItemsInput, PurchaseOrderUncheckedUpdateWithoutLineItemsInput>
    create: XOR<PurchaseOrderCreateWithoutLineItemsInput, PurchaseOrderUncheckedCreateWithoutLineItemsInput>
    where?: PurchaseOrderWhereInput
  }

  export type PurchaseOrderUpdateToOneWithWhereWithoutLineItemsInput = {
    where?: PurchaseOrderWhereInput
    data: XOR<PurchaseOrderUpdateWithoutLineItemsInput, PurchaseOrderUncheckedUpdateWithoutLineItemsInput>
  }

  export type PurchaseOrderUpdateWithoutLineItemsInput = {
    guid?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    issueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pendingXero?: BoolFieldUpdateOperationsInput | boolean
    subTotal?: IntFieldUpdateOperationsInput | number
    taxAmount?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    supplier?: SupplierUpdateOneWithoutPurchaseOrdersNestedInput
  }

  export type PurchaseOrderUncheckedUpdateWithoutLineItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    guid?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    issueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pendingXero?: BoolFieldUpdateOperationsInput | boolean
    subTotal?: IntFieldUpdateOperationsInput | number
    taxAmount?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    supplierId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PurchaseOrderLineItemCreateWithoutReceiptsInput = {
    guid?: string
    variantSku?: string | null
    variantGuid?: string | null
    variantUPC?: string | null
    variantSupplierCode?: string | null
    variantTaxRate: number
    description: string
    variantMediaURI?: string | null
    itemCost: number
    quantityOrdered: number
    packSize?: number
    purchaseOrder: PurchaseOrderCreateNestedOneWithoutLineItemsInput
  }

  export type PurchaseOrderLineItemUncheckedCreateWithoutReceiptsInput = {
    id?: number
    guid?: string
    variantSku?: string | null
    variantGuid?: string | null
    variantUPC?: string | null
    variantSupplierCode?: string | null
    variantTaxRate: number
    description: string
    variantMediaURI?: string | null
    itemCost: number
    quantityOrdered: number
    packSize?: number
    purchaseOrderId: number
  }

  export type PurchaseOrderLineItemCreateOrConnectWithoutReceiptsInput = {
    where: PurchaseOrderLineItemWhereUniqueInput
    create: XOR<PurchaseOrderLineItemCreateWithoutReceiptsInput, PurchaseOrderLineItemUncheckedCreateWithoutReceiptsInput>
  }

  export type PurchaseOrderLineItemUpsertWithoutReceiptsInput = {
    update: XOR<PurchaseOrderLineItemUpdateWithoutReceiptsInput, PurchaseOrderLineItemUncheckedUpdateWithoutReceiptsInput>
    create: XOR<PurchaseOrderLineItemCreateWithoutReceiptsInput, PurchaseOrderLineItemUncheckedCreateWithoutReceiptsInput>
    where?: PurchaseOrderLineItemWhereInput
  }

  export type PurchaseOrderLineItemUpdateToOneWithWhereWithoutReceiptsInput = {
    where?: PurchaseOrderLineItemWhereInput
    data: XOR<PurchaseOrderLineItemUpdateWithoutReceiptsInput, PurchaseOrderLineItemUncheckedUpdateWithoutReceiptsInput>
  }

  export type PurchaseOrderLineItemUpdateWithoutReceiptsInput = {
    guid?: StringFieldUpdateOperationsInput | string
    variantSku?: NullableStringFieldUpdateOperationsInput | string | null
    variantGuid?: NullableStringFieldUpdateOperationsInput | string | null
    variantUPC?: NullableStringFieldUpdateOperationsInput | string | null
    variantSupplierCode?: NullableStringFieldUpdateOperationsInput | string | null
    variantTaxRate?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    variantMediaURI?: NullableStringFieldUpdateOperationsInput | string | null
    itemCost?: IntFieldUpdateOperationsInput | number
    quantityOrdered?: IntFieldUpdateOperationsInput | number
    packSize?: IntFieldUpdateOperationsInput | number
    purchaseOrder?: PurchaseOrderUpdateOneRequiredWithoutLineItemsNestedInput
  }

  export type PurchaseOrderLineItemUncheckedUpdateWithoutReceiptsInput = {
    id?: IntFieldUpdateOperationsInput | number
    guid?: StringFieldUpdateOperationsInput | string
    variantSku?: NullableStringFieldUpdateOperationsInput | string | null
    variantGuid?: NullableStringFieldUpdateOperationsInput | string | null
    variantUPC?: NullableStringFieldUpdateOperationsInput | string | null
    variantSupplierCode?: NullableStringFieldUpdateOperationsInput | string | null
    variantTaxRate?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    variantMediaURI?: NullableStringFieldUpdateOperationsInput | string | null
    itemCost?: IntFieldUpdateOperationsInput | number
    quantityOrdered?: IntFieldUpdateOperationsInput | number
    packSize?: IntFieldUpdateOperationsInput | number
    purchaseOrderId?: IntFieldUpdateOperationsInput | number
  }

  export type ContactCreateManySupplierInput = {
    id?: number
    guid?: string
    name: string
    email?: string | null
    phone?: string | null
  }

  export type PurchaseOrderCreateManySupplierInput = {
    id?: number
    guid?: string
    number: string
    state?: string
    issueDate?: Date | string | null
    pendingXero?: boolean
    subTotal: number
    taxAmount: number
    total: number
  }

  export type ContactUpdateWithoutSupplierInput = {
    guid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContactUncheckedUpdateWithoutSupplierInput = {
    id?: IntFieldUpdateOperationsInput | number
    guid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContactUncheckedUpdateManyWithoutSupplierInput = {
    id?: IntFieldUpdateOperationsInput | number
    guid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PurchaseOrderUpdateWithoutSupplierInput = {
    guid?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    issueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pendingXero?: BoolFieldUpdateOperationsInput | boolean
    subTotal?: IntFieldUpdateOperationsInput | number
    taxAmount?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    lineItems?: PurchaseOrderLineItemUpdateManyWithoutPurchaseOrderNestedInput
  }

  export type PurchaseOrderUncheckedUpdateWithoutSupplierInput = {
    id?: IntFieldUpdateOperationsInput | number
    guid?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    issueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pendingXero?: BoolFieldUpdateOperationsInput | boolean
    subTotal?: IntFieldUpdateOperationsInput | number
    taxAmount?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    lineItems?: PurchaseOrderLineItemUncheckedUpdateManyWithoutPurchaseOrderNestedInput
  }

  export type PurchaseOrderUncheckedUpdateManyWithoutSupplierInput = {
    id?: IntFieldUpdateOperationsInput | number
    guid?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    issueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pendingXero?: BoolFieldUpdateOperationsInput | boolean
    subTotal?: IntFieldUpdateOperationsInput | number
    taxAmount?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
  }

  export type PurchaseOrderLineItemCreateManyPurchaseOrderInput = {
    id?: number
    guid?: string
    variantSku?: string | null
    variantGuid?: string | null
    variantUPC?: string | null
    variantSupplierCode?: string | null
    variantTaxRate: number
    description: string
    variantMediaURI?: string | null
    itemCost: number
    quantityOrdered: number
    packSize?: number
  }

  export type PurchaseOrderLineItemUpdateWithoutPurchaseOrderInput = {
    guid?: StringFieldUpdateOperationsInput | string
    variantSku?: NullableStringFieldUpdateOperationsInput | string | null
    variantGuid?: NullableStringFieldUpdateOperationsInput | string | null
    variantUPC?: NullableStringFieldUpdateOperationsInput | string | null
    variantSupplierCode?: NullableStringFieldUpdateOperationsInput | string | null
    variantTaxRate?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    variantMediaURI?: NullableStringFieldUpdateOperationsInput | string | null
    itemCost?: IntFieldUpdateOperationsInput | number
    quantityOrdered?: IntFieldUpdateOperationsInput | number
    packSize?: IntFieldUpdateOperationsInput | number
    receipts?: PurchaseOrderLineItemReceiptUpdateManyWithoutPurchaseOrderLineItemNestedInput
  }

  export type PurchaseOrderLineItemUncheckedUpdateWithoutPurchaseOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    guid?: StringFieldUpdateOperationsInput | string
    variantSku?: NullableStringFieldUpdateOperationsInput | string | null
    variantGuid?: NullableStringFieldUpdateOperationsInput | string | null
    variantUPC?: NullableStringFieldUpdateOperationsInput | string | null
    variantSupplierCode?: NullableStringFieldUpdateOperationsInput | string | null
    variantTaxRate?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    variantMediaURI?: NullableStringFieldUpdateOperationsInput | string | null
    itemCost?: IntFieldUpdateOperationsInput | number
    quantityOrdered?: IntFieldUpdateOperationsInput | number
    packSize?: IntFieldUpdateOperationsInput | number
    receipts?: PurchaseOrderLineItemReceiptUncheckedUpdateManyWithoutPurchaseOrderLineItemNestedInput
  }

  export type PurchaseOrderLineItemUncheckedUpdateManyWithoutPurchaseOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    guid?: StringFieldUpdateOperationsInput | string
    variantSku?: NullableStringFieldUpdateOperationsInput | string | null
    variantGuid?: NullableStringFieldUpdateOperationsInput | string | null
    variantUPC?: NullableStringFieldUpdateOperationsInput | string | null
    variantSupplierCode?: NullableStringFieldUpdateOperationsInput | string | null
    variantTaxRate?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    variantMediaURI?: NullableStringFieldUpdateOperationsInput | string | null
    itemCost?: IntFieldUpdateOperationsInput | number
    quantityOrdered?: IntFieldUpdateOperationsInput | number
    packSize?: IntFieldUpdateOperationsInput | number
  }

  export type PurchaseOrderLineItemReceiptCreateManyPurchaseOrderLineItemInput = {
    id?: number
    guid?: string
    date?: Date | string
    received: number
    receivedPrice: number
  }

  export type PurchaseOrderLineItemReceiptUpdateWithoutPurchaseOrderLineItemInput = {
    guid?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    received?: IntFieldUpdateOperationsInput | number
    receivedPrice?: IntFieldUpdateOperationsInput | number
  }

  export type PurchaseOrderLineItemReceiptUncheckedUpdateWithoutPurchaseOrderLineItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    guid?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    received?: IntFieldUpdateOperationsInput | number
    receivedPrice?: IntFieldUpdateOperationsInput | number
  }

  export type PurchaseOrderLineItemReceiptUncheckedUpdateManyWithoutPurchaseOrderLineItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    guid?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    received?: IntFieldUpdateOperationsInput | number
    receivedPrice?: IntFieldUpdateOperationsInput | number
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
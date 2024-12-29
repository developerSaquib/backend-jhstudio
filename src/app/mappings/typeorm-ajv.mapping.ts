export const typeOrmToAjvTypesMapping: {
  [key: string]: {
    type: string;
    format?: string;
  };
} = {
  // Numeric types
  int: { type: "integer" },
  int2: { type: "integer" },
  int4: { type: "integer" },
  int8: { type: "integer" },
  integer: { type: "integer" },
  tinyint: { type: "integer" },
  smallint: { type: "integer" },
  mediumint: { type: "integer" },
  bigint: { type: "integer" },
  dec: { type: "number" },
  decimal: { type: "number" },
  smalldecimal: { type: "number" },
  fixed: { type: "number" },
  numeric: { type: "number" },
  float: { type: "number" },
  double: { type: "number" },
  real: { type: "number" },
  "double precision": { type: "number" },
  number: { type: "number" },
  smallmoney: { type: "number" },
  money: { type: "number" },

  // Spatial types
  geometry: { type: "object" },
  geography: { type: "object" },
  st_geometry: { type: "object" },
  st_point: { type: "object" },
  point: { type: "object" },
  line: { type: "object" },
  lseg: { type: "object" },
  box: { type: "object" },
  circle: { type: "object" },
  path: { type: "object" },
  polygon: { type: "object" },
  linestring: { type: "object" },
  multipoint: { type: "object" },
  multilinestring: { type: "object" },
  multipolygon: { type: "object" },
  geometrycollection: { type: "object" },

  // String types
  "character varying": { type: "string" },
  "varying character": { type: "string" },
  "char varying": { type: "string" },
  nvarchar: { type: "string" },
  "national varchar": { type: "string" },
  character: { type: "string" },
  "native character": { type: "string" },
  varchar: { type: "string" },
  char: { type: "string" },
  nchar: { type: "string" },
  "national char": { type: "string" },
  varchar2: { type: "string" },
  nvarchar2: { type: "string" },
  alphanum: { type: "string" },
  shorttext: { type: "string" },
  raw: { type: "string" },
  binary: { type: "string" },
  varbinary: { type: "string" },
  string: { type: "string" },
  text: { type: "string" },
  ntext: { type: "string" },
  citext: { type: "string" },
  json: { type: "object" },
  jsonb: { type: "object" },
  xml: { type: "string" },
  uuid: { type: "string", format: "uuid" },
  enum: { type: "string" },
  set: { type: "string" },
  cidr: { type: "string" },
  inet: { type: "string", format: "ipv4" }, // or ipv6 if required
  macaddr: { type: "string", format: "mac" },
  tsvector: { type: "string" },
  tsquery: { type: "string" },

  // Date and time types
  date: { type: "string", format: "date" },
  time: { type: "string", format: "time" },
  datetime: { type: "string", format: "date-time" },
  datetime2: { type: "string", format: "date-time" },
  datetimeoffset: { type: "string", format: "date-time" },
  timestamp: { type: "string", format: "date-time" },
  "timestamp without time zone": { type: "string", format: "date-time" },
  "timestamp with time zone": { type: "string", format: "date-time" },
  "timestamp with local time zone": { type: "string", format: "date-time" },
  smalldatetime: { type: "string", format: "date-time" },
  timetz: { type: "string", format: "time" },
  timestamptz: { type: "string", format: "date-time" },
  "interval year to month": { type: "string" },
  "interval day to second": { type: "string" },
  interval: { type: "string" },
  year: { type: "integer" },
  seconddate: { type: "string", format: "date-time" },

  // Boolean types
  boolean: { type: "boolean" },
  bool: { type: "boolean" },

  // Array and other complex types
  "simple-array": { type: "array" },
  "simple-json": { type: "object" },
  "simple-enum": { type: "string" },
  array: { type: "array" },

  // Binary types
  tinyblob: { type: "string", format: "binary" },
  mediumblob: { type: "string", format: "binary" },
  blob: { type: "string", format: "binary" },
  longblob: { type: "string", format: "binary" },
  bytea: { type: "string", format: "binary" },

  // Other specialized types
  hierarchyid: { type: "string" },
  sql_variant: { type: "string" },
  rowid: { type: "string" },
  urowid: { type: "string" },
  uniqueidentifier: { type: "string", format: "uuid" },
  rowversion: { type: "string" },
  cube: { type: "string" },
  ltree: { type: "string" },
};
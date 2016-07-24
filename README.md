# pg-pool-factory

## What
A lighweight wrapper around node's pg module to make it easier to make pg pool connections.

## Why
Pool connections make it easier to connect to postgres databases, as they manage open connections, which help avoid overloading the database. They also mean there is no need to manually close connections after use.

The problem with Pool connections is that they require a configuration object, and don't natively support use of a connection url, in the form provided by cloud postgres services.

## How
pg-pool-factory fills this gap by providing a lightweight wrapper that extracts arguments from a postgres connection url and combines them with other optional object properties, before creating and returning an instance of pg.Pool.

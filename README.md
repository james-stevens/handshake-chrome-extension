# handshake-chrome-extension
Chrome Extension to give users access to Handshake HTTP sites

NOTE: this sends your HTTP & HTTPS requests via an anonymous proxy - no logging,
but probably best to not leave it switched on when doing serious stuff.

When you switch the proxy off, it will **NOT** return your proxy setting to what you had before.
The `Off` setting is to always return Chrome to `operating system default`.

This does NOT support `DANE`, so does not support decentralised HTTPS sites

The DNS resolution is done by `bind`, not `hsd`, using a merged & signed ROOT zone 
containing both ICANN and Handshake zone data.

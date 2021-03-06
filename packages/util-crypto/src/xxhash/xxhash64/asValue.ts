// Copyright 2017-2020 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import hasher from 'xxhashjs/lib/xxhash64';

import { isBuffer, isString, u8aToBuffer } from '@polkadot/util';

export default function xxhash64AsValue (data: Buffer | Uint8Array | string, seed: number): number {
  if (isBuffer(data) || isString(data)) {
    return hasher(data, seed);
  }

  return hasher(
    u8aToBuffer(data),
    seed
  );
}

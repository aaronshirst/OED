/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

SELECT
  meter_id, reading, start_timestamp, end_timestamp
FROM readings
WHERE meter_id = ${id}
ORDER BY start_timestamp ASC;

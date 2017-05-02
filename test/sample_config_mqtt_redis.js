/*******************************************************************************
 * Copyright (c) 2013-2017 Matteo Collina
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * and Eclipse Distribution License v1.0 which accompany this distribution.
 *
 * The Eclipse Public License is available at
 *    http://www.eclipse.org/legal/epl-v10.html
 * and the Eclipse Distribution License is available at
 *   http://www.eclipse.org/org/documents/edl-v10.php.
 *
 * Contributors:
 *    Matteo Collina
 *    Jovan Kostovski
 *******************************************************************************/

module.exports = {
  persistence: {
    // same as http://mcollina.github.io/mosca/docs/lib/persistence/redis.js.html
    type: 'redis',
    host: 'localhost'
  },
  broker: {
    // same as https://github.com/mcollina/ascoltatori#mqtt
    type: 'mqtt',
    port: '2883',
    host: 'localhost'
  },
  logger: {
    level: 20,
    name: 'Config Test Logger'
  }
}

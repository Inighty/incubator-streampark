/*
 * Copyright (c) 2019 The StreamX Project
 * <p>
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership. The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at
 * <p>
 * http://www.apache.org/licenses/LICENSE-2.0
 * <p>
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import api from './index'
import http from '@/utils/request'


export function list (queryParam) {
  return http.post(api.Token.LIST, queryParam)
}

export function create (queryParam) {
  return http.post(api.Token.CREATE, queryParam)
}

export function deleteToken (queryParam) {
  return http.delete(api.Token.DELETE, queryParam)
}

export function copyCurl (queryParam) {
  return http.post(api.Token.CURL, queryParam)
}

export function updateTokenStatus (queryParam) {
  return http.post(api.Token.UPDATE_STATUS, queryParam)
}
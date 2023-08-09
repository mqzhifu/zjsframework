/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.pb = (function() {

    /**
     * Namespace pb.
     * @exports pb
     * @namespace
     */
    var pb = {};

    pb.Empty = (function() {

        /**
         * Properties of an Empty.
         * @memberof pb
         * @interface IEmpty
         */

        /**
         * Constructs a new Empty.
         * @memberof pb
         * @classdesc Represents an Empty.
         * @implements IEmpty
         * @constructor
         * @param {pb.IEmpty=} [properties] Properties to set
         */
        function Empty(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new Empty instance using the specified properties.
         * @function create
         * @memberof pb.Empty
         * @static
         * @param {pb.IEmpty=} [properties] Properties to set
         * @returns {pb.Empty} Empty instance
         */
        Empty.create = function create(properties) {
            return new Empty(properties);
        };

        /**
         * Encodes the specified Empty message. Does not implicitly {@link pb.Empty.verify|verify} messages.
         * @function encode
         * @memberof pb.Empty
         * @static
         * @param {pb.IEmpty} message Empty message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Empty.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified Empty message, length delimited. Does not implicitly {@link pb.Empty.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.Empty
         * @static
         * @param {pb.IEmpty} message Empty message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Empty.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Empty message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Empty
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Empty} Empty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Empty.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Empty();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Empty message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.Empty
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.Empty} Empty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Empty.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Empty message.
         * @function verify
         * @memberof pb.Empty
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Empty.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates an Empty message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.Empty
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.Empty} Empty
         */
        Empty.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.Empty)
                return object;
            return new $root.pb.Empty();
        };

        /**
         * Creates a plain object from an Empty message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.Empty
         * @static
         * @param {pb.Empty} message Empty
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Empty.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this Empty to JSON.
         * @function toJSON
         * @memberof pb.Empty
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Empty.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Empty
         * @function getTypeUrl
         * @memberof pb.Empty
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Empty.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Empty";
        };

        return Empty;
    })();

    pb.Heartbeat = (function() {

        /**
         * Properties of a Heartbeat.
         * @memberof pb
         * @interface IHeartbeat
         * @property {number|null} [sourceUid] Heartbeat sourceUid
         * @property {number|Long|null} [time] Heartbeat time
         * @property {number|Long|null} [reqTime] Heartbeat reqTime
         * @property {number|Long|null} [clientReqTime] Heartbeat clientReqTime
         * @property {number|Long|null} [clientReceiveTime] Heartbeat clientReceiveTime
         * @property {number|Long|null} [serverReceiveTime] Heartbeat serverReceiveTime
         * @property {number|Long|null} [serverResponseTime] Heartbeat serverResponseTime
         * @property {string|null} [requestId] Heartbeat requestId
         */

        /**
         * Constructs a new Heartbeat.
         * @memberof pb
         * @classdesc Represents a Heartbeat.
         * @implements IHeartbeat
         * @constructor
         * @param {pb.IHeartbeat=} [properties] Properties to set
         */
        function Heartbeat(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Heartbeat sourceUid.
         * @member {number} sourceUid
         * @memberof pb.Heartbeat
         * @instance
         */
        Heartbeat.prototype.sourceUid = 0;

        /**
         * Heartbeat time.
         * @member {number|Long} time
         * @memberof pb.Heartbeat
         * @instance
         */
        Heartbeat.prototype.time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Heartbeat reqTime.
         * @member {number|Long} reqTime
         * @memberof pb.Heartbeat
         * @instance
         */
        Heartbeat.prototype.reqTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Heartbeat clientReqTime.
         * @member {number|Long} clientReqTime
         * @memberof pb.Heartbeat
         * @instance
         */
        Heartbeat.prototype.clientReqTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Heartbeat clientReceiveTime.
         * @member {number|Long} clientReceiveTime
         * @memberof pb.Heartbeat
         * @instance
         */
        Heartbeat.prototype.clientReceiveTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Heartbeat serverReceiveTime.
         * @member {number|Long} serverReceiveTime
         * @memberof pb.Heartbeat
         * @instance
         */
        Heartbeat.prototype.serverReceiveTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Heartbeat serverResponseTime.
         * @member {number|Long} serverResponseTime
         * @memberof pb.Heartbeat
         * @instance
         */
        Heartbeat.prototype.serverResponseTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Heartbeat requestId.
         * @member {string} requestId
         * @memberof pb.Heartbeat
         * @instance
         */
        Heartbeat.prototype.requestId = "";

        /**
         * Creates a new Heartbeat instance using the specified properties.
         * @function create
         * @memberof pb.Heartbeat
         * @static
         * @param {pb.IHeartbeat=} [properties] Properties to set
         * @returns {pb.Heartbeat} Heartbeat instance
         */
        Heartbeat.create = function create(properties) {
            return new Heartbeat(properties);
        };

        /**
         * Encodes the specified Heartbeat message. Does not implicitly {@link pb.Heartbeat.verify|verify} messages.
         * @function encode
         * @memberof pb.Heartbeat
         * @static
         * @param {pb.IHeartbeat} message Heartbeat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Heartbeat.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sourceUid != null && Object.hasOwnProperty.call(message, "sourceUid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.sourceUid);
            if (message.time != null && Object.hasOwnProperty.call(message, "time"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.time);
            if (message.reqTime != null && Object.hasOwnProperty.call(message, "reqTime"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.reqTime);
            if (message.clientReqTime != null && Object.hasOwnProperty.call(message, "clientReqTime"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.clientReqTime);
            if (message.clientReceiveTime != null && Object.hasOwnProperty.call(message, "clientReceiveTime"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.clientReceiveTime);
            if (message.serverReceiveTime != null && Object.hasOwnProperty.call(message, "serverReceiveTime"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.serverReceiveTime);
            if (message.serverResponseTime != null && Object.hasOwnProperty.call(message, "serverResponseTime"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.serverResponseTime);
            if (message.requestId != null && Object.hasOwnProperty.call(message, "requestId"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.requestId);
            return writer;
        };

        /**
         * Encodes the specified Heartbeat message, length delimited. Does not implicitly {@link pb.Heartbeat.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.Heartbeat
         * @static
         * @param {pb.IHeartbeat} message Heartbeat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Heartbeat.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Heartbeat message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Heartbeat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Heartbeat} Heartbeat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Heartbeat.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Heartbeat();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.sourceUid = reader.int32();
                        break;
                    }
                case 2: {
                        message.time = reader.int64();
                        break;
                    }
                case 3: {
                        message.reqTime = reader.int64();
                        break;
                    }
                case 4: {
                        message.clientReqTime = reader.int64();
                        break;
                    }
                case 5: {
                        message.clientReceiveTime = reader.int64();
                        break;
                    }
                case 6: {
                        message.serverReceiveTime = reader.int64();
                        break;
                    }
                case 7: {
                        message.serverResponseTime = reader.int64();
                        break;
                    }
                case 8: {
                        message.requestId = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Heartbeat message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.Heartbeat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.Heartbeat} Heartbeat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Heartbeat.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Heartbeat message.
         * @function verify
         * @memberof pb.Heartbeat
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Heartbeat.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.sourceUid != null && message.hasOwnProperty("sourceUid"))
                if (!$util.isInteger(message.sourceUid))
                    return "sourceUid: integer expected";
            if (message.time != null && message.hasOwnProperty("time"))
                if (!$util.isInteger(message.time) && !(message.time && $util.isInteger(message.time.low) && $util.isInteger(message.time.high)))
                    return "time: integer|Long expected";
            if (message.reqTime != null && message.hasOwnProperty("reqTime"))
                if (!$util.isInteger(message.reqTime) && !(message.reqTime && $util.isInteger(message.reqTime.low) && $util.isInteger(message.reqTime.high)))
                    return "reqTime: integer|Long expected";
            if (message.clientReqTime != null && message.hasOwnProperty("clientReqTime"))
                if (!$util.isInteger(message.clientReqTime) && !(message.clientReqTime && $util.isInteger(message.clientReqTime.low) && $util.isInteger(message.clientReqTime.high)))
                    return "clientReqTime: integer|Long expected";
            if (message.clientReceiveTime != null && message.hasOwnProperty("clientReceiveTime"))
                if (!$util.isInteger(message.clientReceiveTime) && !(message.clientReceiveTime && $util.isInteger(message.clientReceiveTime.low) && $util.isInteger(message.clientReceiveTime.high)))
                    return "clientReceiveTime: integer|Long expected";
            if (message.serverReceiveTime != null && message.hasOwnProperty("serverReceiveTime"))
                if (!$util.isInteger(message.serverReceiveTime) && !(message.serverReceiveTime && $util.isInteger(message.serverReceiveTime.low) && $util.isInteger(message.serverReceiveTime.high)))
                    return "serverReceiveTime: integer|Long expected";
            if (message.serverResponseTime != null && message.hasOwnProperty("serverResponseTime"))
                if (!$util.isInteger(message.serverResponseTime) && !(message.serverResponseTime && $util.isInteger(message.serverResponseTime.low) && $util.isInteger(message.serverResponseTime.high)))
                    return "serverResponseTime: integer|Long expected";
            if (message.requestId != null && message.hasOwnProperty("requestId"))
                if (!$util.isString(message.requestId))
                    return "requestId: string expected";
            return null;
        };

        /**
         * Creates a Heartbeat message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.Heartbeat
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.Heartbeat} Heartbeat
         */
        Heartbeat.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.Heartbeat)
                return object;
            var message = new $root.pb.Heartbeat();
            if (object.sourceUid != null)
                message.sourceUid = object.sourceUid | 0;
            if (object.time != null)
                if ($util.Long)
                    (message.time = $util.Long.fromValue(object.time)).unsigned = false;
                else if (typeof object.time === "string")
                    message.time = parseInt(object.time, 10);
                else if (typeof object.time === "number")
                    message.time = object.time;
                else if (typeof object.time === "object")
                    message.time = new $util.LongBits(object.time.low >>> 0, object.time.high >>> 0).toNumber();
            if (object.reqTime != null)
                if ($util.Long)
                    (message.reqTime = $util.Long.fromValue(object.reqTime)).unsigned = false;
                else if (typeof object.reqTime === "string")
                    message.reqTime = parseInt(object.reqTime, 10);
                else if (typeof object.reqTime === "number")
                    message.reqTime = object.reqTime;
                else if (typeof object.reqTime === "object")
                    message.reqTime = new $util.LongBits(object.reqTime.low >>> 0, object.reqTime.high >>> 0).toNumber();
            if (object.clientReqTime != null)
                if ($util.Long)
                    (message.clientReqTime = $util.Long.fromValue(object.clientReqTime)).unsigned = false;
                else if (typeof object.clientReqTime === "string")
                    message.clientReqTime = parseInt(object.clientReqTime, 10);
                else if (typeof object.clientReqTime === "number")
                    message.clientReqTime = object.clientReqTime;
                else if (typeof object.clientReqTime === "object")
                    message.clientReqTime = new $util.LongBits(object.clientReqTime.low >>> 0, object.clientReqTime.high >>> 0).toNumber();
            if (object.clientReceiveTime != null)
                if ($util.Long)
                    (message.clientReceiveTime = $util.Long.fromValue(object.clientReceiveTime)).unsigned = false;
                else if (typeof object.clientReceiveTime === "string")
                    message.clientReceiveTime = parseInt(object.clientReceiveTime, 10);
                else if (typeof object.clientReceiveTime === "number")
                    message.clientReceiveTime = object.clientReceiveTime;
                else if (typeof object.clientReceiveTime === "object")
                    message.clientReceiveTime = new $util.LongBits(object.clientReceiveTime.low >>> 0, object.clientReceiveTime.high >>> 0).toNumber();
            if (object.serverReceiveTime != null)
                if ($util.Long)
                    (message.serverReceiveTime = $util.Long.fromValue(object.serverReceiveTime)).unsigned = false;
                else if (typeof object.serverReceiveTime === "string")
                    message.serverReceiveTime = parseInt(object.serverReceiveTime, 10);
                else if (typeof object.serverReceiveTime === "number")
                    message.serverReceiveTime = object.serverReceiveTime;
                else if (typeof object.serverReceiveTime === "object")
                    message.serverReceiveTime = new $util.LongBits(object.serverReceiveTime.low >>> 0, object.serverReceiveTime.high >>> 0).toNumber();
            if (object.serverResponseTime != null)
                if ($util.Long)
                    (message.serverResponseTime = $util.Long.fromValue(object.serverResponseTime)).unsigned = false;
                else if (typeof object.serverResponseTime === "string")
                    message.serverResponseTime = parseInt(object.serverResponseTime, 10);
                else if (typeof object.serverResponseTime === "number")
                    message.serverResponseTime = object.serverResponseTime;
                else if (typeof object.serverResponseTime === "object")
                    message.serverResponseTime = new $util.LongBits(object.serverResponseTime.low >>> 0, object.serverResponseTime.high >>> 0).toNumber();
            if (object.requestId != null)
                message.requestId = String(object.requestId);
            return message;
        };

        /**
         * Creates a plain object from a Heartbeat message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.Heartbeat
         * @static
         * @param {pb.Heartbeat} message Heartbeat
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Heartbeat.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.sourceUid = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.time = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.time = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.reqTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.reqTime = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.clientReqTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.clientReqTime = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.clientReceiveTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.clientReceiveTime = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.serverReceiveTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.serverReceiveTime = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.serverResponseTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.serverResponseTime = options.longs === String ? "0" : 0;
                object.requestId = "";
            }
            if (message.sourceUid != null && message.hasOwnProperty("sourceUid"))
                object.sourceUid = message.sourceUid;
            if (message.time != null && message.hasOwnProperty("time"))
                if (typeof message.time === "number")
                    object.time = options.longs === String ? String(message.time) : message.time;
                else
                    object.time = options.longs === String ? $util.Long.prototype.toString.call(message.time) : options.longs === Number ? new $util.LongBits(message.time.low >>> 0, message.time.high >>> 0).toNumber() : message.time;
            if (message.reqTime != null && message.hasOwnProperty("reqTime"))
                if (typeof message.reqTime === "number")
                    object.reqTime = options.longs === String ? String(message.reqTime) : message.reqTime;
                else
                    object.reqTime = options.longs === String ? $util.Long.prototype.toString.call(message.reqTime) : options.longs === Number ? new $util.LongBits(message.reqTime.low >>> 0, message.reqTime.high >>> 0).toNumber() : message.reqTime;
            if (message.clientReqTime != null && message.hasOwnProperty("clientReqTime"))
                if (typeof message.clientReqTime === "number")
                    object.clientReqTime = options.longs === String ? String(message.clientReqTime) : message.clientReqTime;
                else
                    object.clientReqTime = options.longs === String ? $util.Long.prototype.toString.call(message.clientReqTime) : options.longs === Number ? new $util.LongBits(message.clientReqTime.low >>> 0, message.clientReqTime.high >>> 0).toNumber() : message.clientReqTime;
            if (message.clientReceiveTime != null && message.hasOwnProperty("clientReceiveTime"))
                if (typeof message.clientReceiveTime === "number")
                    object.clientReceiveTime = options.longs === String ? String(message.clientReceiveTime) : message.clientReceiveTime;
                else
                    object.clientReceiveTime = options.longs === String ? $util.Long.prototype.toString.call(message.clientReceiveTime) : options.longs === Number ? new $util.LongBits(message.clientReceiveTime.low >>> 0, message.clientReceiveTime.high >>> 0).toNumber() : message.clientReceiveTime;
            if (message.serverReceiveTime != null && message.hasOwnProperty("serverReceiveTime"))
                if (typeof message.serverReceiveTime === "number")
                    object.serverReceiveTime = options.longs === String ? String(message.serverReceiveTime) : message.serverReceiveTime;
                else
                    object.serverReceiveTime = options.longs === String ? $util.Long.prototype.toString.call(message.serverReceiveTime) : options.longs === Number ? new $util.LongBits(message.serverReceiveTime.low >>> 0, message.serverReceiveTime.high >>> 0).toNumber() : message.serverReceiveTime;
            if (message.serverResponseTime != null && message.hasOwnProperty("serverResponseTime"))
                if (typeof message.serverResponseTime === "number")
                    object.serverResponseTime = options.longs === String ? String(message.serverResponseTime) : message.serverResponseTime;
                else
                    object.serverResponseTime = options.longs === String ? $util.Long.prototype.toString.call(message.serverResponseTime) : options.longs === Number ? new $util.LongBits(message.serverResponseTime.low >>> 0, message.serverResponseTime.high >>> 0).toNumber() : message.serverResponseTime;
            if (message.requestId != null && message.hasOwnProperty("requestId"))
                object.requestId = message.requestId;
            return object;
        };

        /**
         * Converts this Heartbeat to JSON.
         * @function toJSON
         * @memberof pb.Heartbeat
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Heartbeat.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Heartbeat
         * @function getTypeUrl
         * @memberof pb.Heartbeat
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Heartbeat.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Heartbeat";
        };

        return Heartbeat;
    })();

    pb.FDCloseEvent = (function() {

        /**
         * Properties of a FDCloseEvent.
         * @memberof pb
         * @interface IFDCloseEvent
         * @property {number|null} [sourceUid] FDCloseEvent sourceUid
         * @property {number|null} [userId] FDCloseEvent userId
         * @property {number|null} [source] FDCloseEvent source
         * @property {number|null} [contentType] FDCloseEvent contentType
         * @property {number|null} [protocolType] FDCloseEvent protocolType
         */

        /**
         * Constructs a new FDCloseEvent.
         * @memberof pb
         * @classdesc Represents a FDCloseEvent.
         * @implements IFDCloseEvent
         * @constructor
         * @param {pb.IFDCloseEvent=} [properties] Properties to set
         */
        function FDCloseEvent(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FDCloseEvent sourceUid.
         * @member {number} sourceUid
         * @memberof pb.FDCloseEvent
         * @instance
         */
        FDCloseEvent.prototype.sourceUid = 0;

        /**
         * FDCloseEvent userId.
         * @member {number} userId
         * @memberof pb.FDCloseEvent
         * @instance
         */
        FDCloseEvent.prototype.userId = 0;

        /**
         * FDCloseEvent source.
         * @member {number} source
         * @memberof pb.FDCloseEvent
         * @instance
         */
        FDCloseEvent.prototype.source = 0;

        /**
         * FDCloseEvent contentType.
         * @member {number} contentType
         * @memberof pb.FDCloseEvent
         * @instance
         */
        FDCloseEvent.prototype.contentType = 0;

        /**
         * FDCloseEvent protocolType.
         * @member {number} protocolType
         * @memberof pb.FDCloseEvent
         * @instance
         */
        FDCloseEvent.prototype.protocolType = 0;

        /**
         * Creates a new FDCloseEvent instance using the specified properties.
         * @function create
         * @memberof pb.FDCloseEvent
         * @static
         * @param {pb.IFDCloseEvent=} [properties] Properties to set
         * @returns {pb.FDCloseEvent} FDCloseEvent instance
         */
        FDCloseEvent.create = function create(properties) {
            return new FDCloseEvent(properties);
        };

        /**
         * Encodes the specified FDCloseEvent message. Does not implicitly {@link pb.FDCloseEvent.verify|verify} messages.
         * @function encode
         * @memberof pb.FDCloseEvent
         * @static
         * @param {pb.IFDCloseEvent} message FDCloseEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FDCloseEvent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sourceUid != null && Object.hasOwnProperty.call(message, "sourceUid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.sourceUid);
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.userId);
            if (message.source != null && Object.hasOwnProperty.call(message, "source"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.source);
            if (message.contentType != null && Object.hasOwnProperty.call(message, "contentType"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.contentType);
            if (message.protocolType != null && Object.hasOwnProperty.call(message, "protocolType"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.protocolType);
            return writer;
        };

        /**
         * Encodes the specified FDCloseEvent message, length delimited. Does not implicitly {@link pb.FDCloseEvent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.FDCloseEvent
         * @static
         * @param {pb.IFDCloseEvent} message FDCloseEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FDCloseEvent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FDCloseEvent message from the specified reader or buffer.
         * @function decode
         * @memberof pb.FDCloseEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.FDCloseEvent} FDCloseEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FDCloseEvent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.FDCloseEvent();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.sourceUid = reader.int32();
                        break;
                    }
                case 2: {
                        message.userId = reader.int32();
                        break;
                    }
                case 3: {
                        message.source = reader.int32();
                        break;
                    }
                case 4: {
                        message.contentType = reader.int32();
                        break;
                    }
                case 5: {
                        message.protocolType = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FDCloseEvent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.FDCloseEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.FDCloseEvent} FDCloseEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FDCloseEvent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FDCloseEvent message.
         * @function verify
         * @memberof pb.FDCloseEvent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FDCloseEvent.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.sourceUid != null && message.hasOwnProperty("sourceUid"))
                if (!$util.isInteger(message.sourceUid))
                    return "sourceUid: integer expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.source != null && message.hasOwnProperty("source"))
                if (!$util.isInteger(message.source))
                    return "source: integer expected";
            if (message.contentType != null && message.hasOwnProperty("contentType"))
                if (!$util.isInteger(message.contentType))
                    return "contentType: integer expected";
            if (message.protocolType != null && message.hasOwnProperty("protocolType"))
                if (!$util.isInteger(message.protocolType))
                    return "protocolType: integer expected";
            return null;
        };

        /**
         * Creates a FDCloseEvent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.FDCloseEvent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.FDCloseEvent} FDCloseEvent
         */
        FDCloseEvent.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.FDCloseEvent)
                return object;
            var message = new $root.pb.FDCloseEvent();
            if (object.sourceUid != null)
                message.sourceUid = object.sourceUid | 0;
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.source != null)
                message.source = object.source | 0;
            if (object.contentType != null)
                message.contentType = object.contentType | 0;
            if (object.protocolType != null)
                message.protocolType = object.protocolType | 0;
            return message;
        };

        /**
         * Creates a plain object from a FDCloseEvent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.FDCloseEvent
         * @static
         * @param {pb.FDCloseEvent} message FDCloseEvent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FDCloseEvent.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.sourceUid = 0;
                object.userId = 0;
                object.source = 0;
                object.contentType = 0;
                object.protocolType = 0;
            }
            if (message.sourceUid != null && message.hasOwnProperty("sourceUid"))
                object.sourceUid = message.sourceUid;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.source != null && message.hasOwnProperty("source"))
                object.source = message.source;
            if (message.contentType != null && message.hasOwnProperty("contentType"))
                object.contentType = message.contentType;
            if (message.protocolType != null && message.hasOwnProperty("protocolType"))
                object.protocolType = message.protocolType;
            return object;
        };

        /**
         * Converts this FDCloseEvent to JSON.
         * @function toJSON
         * @memberof pb.FDCloseEvent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FDCloseEvent.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FDCloseEvent
         * @function getTypeUrl
         * @memberof pb.FDCloseEvent
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FDCloseEvent.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.FDCloseEvent";
        };

        return FDCloseEvent;
    })();

    pb.FDCreateEvent = (function() {

        /**
         * Properties of a FDCreateEvent.
         * @memberof pb
         * @interface IFDCreateEvent
         * @property {number|null} [sourceUid] FDCreateEvent sourceUid
         * @property {number|null} [userId] FDCreateEvent userId
         */

        /**
         * Constructs a new FDCreateEvent.
         * @memberof pb
         * @classdesc Represents a FDCreateEvent.
         * @implements IFDCreateEvent
         * @constructor
         * @param {pb.IFDCreateEvent=} [properties] Properties to set
         */
        function FDCreateEvent(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FDCreateEvent sourceUid.
         * @member {number} sourceUid
         * @memberof pb.FDCreateEvent
         * @instance
         */
        FDCreateEvent.prototype.sourceUid = 0;

        /**
         * FDCreateEvent userId.
         * @member {number} userId
         * @memberof pb.FDCreateEvent
         * @instance
         */
        FDCreateEvent.prototype.userId = 0;

        /**
         * Creates a new FDCreateEvent instance using the specified properties.
         * @function create
         * @memberof pb.FDCreateEvent
         * @static
         * @param {pb.IFDCreateEvent=} [properties] Properties to set
         * @returns {pb.FDCreateEvent} FDCreateEvent instance
         */
        FDCreateEvent.create = function create(properties) {
            return new FDCreateEvent(properties);
        };

        /**
         * Encodes the specified FDCreateEvent message. Does not implicitly {@link pb.FDCreateEvent.verify|verify} messages.
         * @function encode
         * @memberof pb.FDCreateEvent
         * @static
         * @param {pb.IFDCreateEvent} message FDCreateEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FDCreateEvent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sourceUid != null && Object.hasOwnProperty.call(message, "sourceUid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.sourceUid);
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.userId);
            return writer;
        };

        /**
         * Encodes the specified FDCreateEvent message, length delimited. Does not implicitly {@link pb.FDCreateEvent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.FDCreateEvent
         * @static
         * @param {pb.IFDCreateEvent} message FDCreateEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FDCreateEvent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FDCreateEvent message from the specified reader or buffer.
         * @function decode
         * @memberof pb.FDCreateEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.FDCreateEvent} FDCreateEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FDCreateEvent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.FDCreateEvent();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.sourceUid = reader.int32();
                        break;
                    }
                case 2: {
                        message.userId = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FDCreateEvent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.FDCreateEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.FDCreateEvent} FDCreateEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FDCreateEvent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FDCreateEvent message.
         * @function verify
         * @memberof pb.FDCreateEvent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FDCreateEvent.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.sourceUid != null && message.hasOwnProperty("sourceUid"))
                if (!$util.isInteger(message.sourceUid))
                    return "sourceUid: integer expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            return null;
        };

        /**
         * Creates a FDCreateEvent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.FDCreateEvent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.FDCreateEvent} FDCreateEvent
         */
        FDCreateEvent.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.FDCreateEvent)
                return object;
            var message = new $root.pb.FDCreateEvent();
            if (object.sourceUid != null)
                message.sourceUid = object.sourceUid | 0;
            if (object.userId != null)
                message.userId = object.userId | 0;
            return message;
        };

        /**
         * Creates a plain object from a FDCreateEvent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.FDCreateEvent
         * @static
         * @param {pb.FDCreateEvent} message FDCreateEvent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FDCreateEvent.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.sourceUid = 0;
                object.userId = 0;
            }
            if (message.sourceUid != null && message.hasOwnProperty("sourceUid"))
                object.sourceUid = message.sourceUid;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            return object;
        };

        /**
         * Converts this FDCreateEvent to JSON.
         * @function toJSON
         * @memberof pb.FDCreateEvent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FDCreateEvent.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FDCreateEvent
         * @function getTypeUrl
         * @memberof pb.FDCreateEvent
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FDCreateEvent.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.FDCreateEvent";
        };

        return FDCreateEvent;
    })();

    pb.PingReq = (function() {

        /**
         * Properties of a PingReq.
         * @memberof pb
         * @interface IPingReq
         * @property {number|null} [sourceUid] PingReq sourceUid
         * @property {string|null} [requestId] PingReq requestId
         * @property {string|null} [traceId] PingReq traceId
         * @property {number|Long|null} [clientReqTime] PingReq clientReqTime
         * @property {number|Long|null} [clientReceiveTime] PingReq clientReceiveTime
         * @property {number|Long|null} [serverReceiveTime] PingReq serverReceiveTime
         * @property {number|Long|null} [serverResponseTime] PingReq serverResponseTime
         */

        /**
         * Constructs a new PingReq.
         * @memberof pb
         * @classdesc Represents a PingReq.
         * @implements IPingReq
         * @constructor
         * @param {pb.IPingReq=} [properties] Properties to set
         */
        function PingReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PingReq sourceUid.
         * @member {number} sourceUid
         * @memberof pb.PingReq
         * @instance
         */
        PingReq.prototype.sourceUid = 0;

        /**
         * PingReq requestId.
         * @member {string} requestId
         * @memberof pb.PingReq
         * @instance
         */
        PingReq.prototype.requestId = "";

        /**
         * PingReq traceId.
         * @member {string} traceId
         * @memberof pb.PingReq
         * @instance
         */
        PingReq.prototype.traceId = "";

        /**
         * PingReq clientReqTime.
         * @member {number|Long} clientReqTime
         * @memberof pb.PingReq
         * @instance
         */
        PingReq.prototype.clientReqTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PingReq clientReceiveTime.
         * @member {number|Long} clientReceiveTime
         * @memberof pb.PingReq
         * @instance
         */
        PingReq.prototype.clientReceiveTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PingReq serverReceiveTime.
         * @member {number|Long} serverReceiveTime
         * @memberof pb.PingReq
         * @instance
         */
        PingReq.prototype.serverReceiveTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PingReq serverResponseTime.
         * @member {number|Long} serverResponseTime
         * @memberof pb.PingReq
         * @instance
         */
        PingReq.prototype.serverResponseTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new PingReq instance using the specified properties.
         * @function create
         * @memberof pb.PingReq
         * @static
         * @param {pb.IPingReq=} [properties] Properties to set
         * @returns {pb.PingReq} PingReq instance
         */
        PingReq.create = function create(properties) {
            return new PingReq(properties);
        };

        /**
         * Encodes the specified PingReq message. Does not implicitly {@link pb.PingReq.verify|verify} messages.
         * @function encode
         * @memberof pb.PingReq
         * @static
         * @param {pb.IPingReq} message PingReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PingReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sourceUid != null && Object.hasOwnProperty.call(message, "sourceUid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.sourceUid);
            if (message.requestId != null && Object.hasOwnProperty.call(message, "requestId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.requestId);
            if (message.traceId != null && Object.hasOwnProperty.call(message, "traceId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.traceId);
            if (message.clientReqTime != null && Object.hasOwnProperty.call(message, "clientReqTime"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.clientReqTime);
            if (message.clientReceiveTime != null && Object.hasOwnProperty.call(message, "clientReceiveTime"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.clientReceiveTime);
            if (message.serverReceiveTime != null && Object.hasOwnProperty.call(message, "serverReceiveTime"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.serverReceiveTime);
            if (message.serverResponseTime != null && Object.hasOwnProperty.call(message, "serverResponseTime"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.serverResponseTime);
            return writer;
        };

        /**
         * Encodes the specified PingReq message, length delimited. Does not implicitly {@link pb.PingReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.PingReq
         * @static
         * @param {pb.IPingReq} message PingReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PingReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PingReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.PingReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.PingReq} PingReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PingReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.PingReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.sourceUid = reader.int32();
                        break;
                    }
                case 2: {
                        message.requestId = reader.string();
                        break;
                    }
                case 3: {
                        message.traceId = reader.string();
                        break;
                    }
                case 4: {
                        message.clientReqTime = reader.int64();
                        break;
                    }
                case 5: {
                        message.clientReceiveTime = reader.int64();
                        break;
                    }
                case 6: {
                        message.serverReceiveTime = reader.int64();
                        break;
                    }
                case 7: {
                        message.serverResponseTime = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PingReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.PingReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.PingReq} PingReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PingReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PingReq message.
         * @function verify
         * @memberof pb.PingReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PingReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.sourceUid != null && message.hasOwnProperty("sourceUid"))
                if (!$util.isInteger(message.sourceUid))
                    return "sourceUid: integer expected";
            if (message.requestId != null && message.hasOwnProperty("requestId"))
                if (!$util.isString(message.requestId))
                    return "requestId: string expected";
            if (message.traceId != null && message.hasOwnProperty("traceId"))
                if (!$util.isString(message.traceId))
                    return "traceId: string expected";
            if (message.clientReqTime != null && message.hasOwnProperty("clientReqTime"))
                if (!$util.isInteger(message.clientReqTime) && !(message.clientReqTime && $util.isInteger(message.clientReqTime.low) && $util.isInteger(message.clientReqTime.high)))
                    return "clientReqTime: integer|Long expected";
            if (message.clientReceiveTime != null && message.hasOwnProperty("clientReceiveTime"))
                if (!$util.isInteger(message.clientReceiveTime) && !(message.clientReceiveTime && $util.isInteger(message.clientReceiveTime.low) && $util.isInteger(message.clientReceiveTime.high)))
                    return "clientReceiveTime: integer|Long expected";
            if (message.serverReceiveTime != null && message.hasOwnProperty("serverReceiveTime"))
                if (!$util.isInteger(message.serverReceiveTime) && !(message.serverReceiveTime && $util.isInteger(message.serverReceiveTime.low) && $util.isInteger(message.serverReceiveTime.high)))
                    return "serverReceiveTime: integer|Long expected";
            if (message.serverResponseTime != null && message.hasOwnProperty("serverResponseTime"))
                if (!$util.isInteger(message.serverResponseTime) && !(message.serverResponseTime && $util.isInteger(message.serverResponseTime.low) && $util.isInteger(message.serverResponseTime.high)))
                    return "serverResponseTime: integer|Long expected";
            return null;
        };

        /**
         * Creates a PingReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.PingReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.PingReq} PingReq
         */
        PingReq.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.PingReq)
                return object;
            var message = new $root.pb.PingReq();
            if (object.sourceUid != null)
                message.sourceUid = object.sourceUid | 0;
            if (object.requestId != null)
                message.requestId = String(object.requestId);
            if (object.traceId != null)
                message.traceId = String(object.traceId);
            if (object.clientReqTime != null)
                if ($util.Long)
                    (message.clientReqTime = $util.Long.fromValue(object.clientReqTime)).unsigned = false;
                else if (typeof object.clientReqTime === "string")
                    message.clientReqTime = parseInt(object.clientReqTime, 10);
                else if (typeof object.clientReqTime === "number")
                    message.clientReqTime = object.clientReqTime;
                else if (typeof object.clientReqTime === "object")
                    message.clientReqTime = new $util.LongBits(object.clientReqTime.low >>> 0, object.clientReqTime.high >>> 0).toNumber();
            if (object.clientReceiveTime != null)
                if ($util.Long)
                    (message.clientReceiveTime = $util.Long.fromValue(object.clientReceiveTime)).unsigned = false;
                else if (typeof object.clientReceiveTime === "string")
                    message.clientReceiveTime = parseInt(object.clientReceiveTime, 10);
                else if (typeof object.clientReceiveTime === "number")
                    message.clientReceiveTime = object.clientReceiveTime;
                else if (typeof object.clientReceiveTime === "object")
                    message.clientReceiveTime = new $util.LongBits(object.clientReceiveTime.low >>> 0, object.clientReceiveTime.high >>> 0).toNumber();
            if (object.serverReceiveTime != null)
                if ($util.Long)
                    (message.serverReceiveTime = $util.Long.fromValue(object.serverReceiveTime)).unsigned = false;
                else if (typeof object.serverReceiveTime === "string")
                    message.serverReceiveTime = parseInt(object.serverReceiveTime, 10);
                else if (typeof object.serverReceiveTime === "number")
                    message.serverReceiveTime = object.serverReceiveTime;
                else if (typeof object.serverReceiveTime === "object")
                    message.serverReceiveTime = new $util.LongBits(object.serverReceiveTime.low >>> 0, object.serverReceiveTime.high >>> 0).toNumber();
            if (object.serverResponseTime != null)
                if ($util.Long)
                    (message.serverResponseTime = $util.Long.fromValue(object.serverResponseTime)).unsigned = false;
                else if (typeof object.serverResponseTime === "string")
                    message.serverResponseTime = parseInt(object.serverResponseTime, 10);
                else if (typeof object.serverResponseTime === "number")
                    message.serverResponseTime = object.serverResponseTime;
                else if (typeof object.serverResponseTime === "object")
                    message.serverResponseTime = new $util.LongBits(object.serverResponseTime.low >>> 0, object.serverResponseTime.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a PingReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.PingReq
         * @static
         * @param {pb.PingReq} message PingReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PingReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.sourceUid = 0;
                object.requestId = "";
                object.traceId = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.clientReqTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.clientReqTime = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.clientReceiveTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.clientReceiveTime = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.serverReceiveTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.serverReceiveTime = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.serverResponseTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.serverResponseTime = options.longs === String ? "0" : 0;
            }
            if (message.sourceUid != null && message.hasOwnProperty("sourceUid"))
                object.sourceUid = message.sourceUid;
            if (message.requestId != null && message.hasOwnProperty("requestId"))
                object.requestId = message.requestId;
            if (message.traceId != null && message.hasOwnProperty("traceId"))
                object.traceId = message.traceId;
            if (message.clientReqTime != null && message.hasOwnProperty("clientReqTime"))
                if (typeof message.clientReqTime === "number")
                    object.clientReqTime = options.longs === String ? String(message.clientReqTime) : message.clientReqTime;
                else
                    object.clientReqTime = options.longs === String ? $util.Long.prototype.toString.call(message.clientReqTime) : options.longs === Number ? new $util.LongBits(message.clientReqTime.low >>> 0, message.clientReqTime.high >>> 0).toNumber() : message.clientReqTime;
            if (message.clientReceiveTime != null && message.hasOwnProperty("clientReceiveTime"))
                if (typeof message.clientReceiveTime === "number")
                    object.clientReceiveTime = options.longs === String ? String(message.clientReceiveTime) : message.clientReceiveTime;
                else
                    object.clientReceiveTime = options.longs === String ? $util.Long.prototype.toString.call(message.clientReceiveTime) : options.longs === Number ? new $util.LongBits(message.clientReceiveTime.low >>> 0, message.clientReceiveTime.high >>> 0).toNumber() : message.clientReceiveTime;
            if (message.serverReceiveTime != null && message.hasOwnProperty("serverReceiveTime"))
                if (typeof message.serverReceiveTime === "number")
                    object.serverReceiveTime = options.longs === String ? String(message.serverReceiveTime) : message.serverReceiveTime;
                else
                    object.serverReceiveTime = options.longs === String ? $util.Long.prototype.toString.call(message.serverReceiveTime) : options.longs === Number ? new $util.LongBits(message.serverReceiveTime.low >>> 0, message.serverReceiveTime.high >>> 0).toNumber() : message.serverReceiveTime;
            if (message.serverResponseTime != null && message.hasOwnProperty("serverResponseTime"))
                if (typeof message.serverResponseTime === "number")
                    object.serverResponseTime = options.longs === String ? String(message.serverResponseTime) : message.serverResponseTime;
                else
                    object.serverResponseTime = options.longs === String ? $util.Long.prototype.toString.call(message.serverResponseTime) : options.longs === Number ? new $util.LongBits(message.serverResponseTime.low >>> 0, message.serverResponseTime.high >>> 0).toNumber() : message.serverResponseTime;
            return object;
        };

        /**
         * Converts this PingReq to JSON.
         * @function toJSON
         * @memberof pb.PingReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PingReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PingReq
         * @function getTypeUrl
         * @memberof pb.PingReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PingReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.PingReq";
        };

        return PingReq;
    })();

    pb.PongRes = (function() {

        /**
         * Properties of a PongRes.
         * @memberof pb
         * @interface IPongRes
         * @property {number|null} [sourceUid] PongRes sourceUid
         * @property {string|null} [requestId] PongRes requestId
         * @property {string|null} [traceId] PongRes traceId
         * @property {number|Long|null} [clientReqTime] PongRes clientReqTime
         * @property {number|Long|null} [clientReceiveTime] PongRes clientReceiveTime
         * @property {number|Long|null} [serverReceiveTime] PongRes serverReceiveTime
         * @property {number|Long|null} [serverResponseTime] PongRes serverResponseTime
         */

        /**
         * Constructs a new PongRes.
         * @memberof pb
         * @classdesc Represents a PongRes.
         * @implements IPongRes
         * @constructor
         * @param {pb.IPongRes=} [properties] Properties to set
         */
        function PongRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PongRes sourceUid.
         * @member {number} sourceUid
         * @memberof pb.PongRes
         * @instance
         */
        PongRes.prototype.sourceUid = 0;

        /**
         * PongRes requestId.
         * @member {string} requestId
         * @memberof pb.PongRes
         * @instance
         */
        PongRes.prototype.requestId = "";

        /**
         * PongRes traceId.
         * @member {string} traceId
         * @memberof pb.PongRes
         * @instance
         */
        PongRes.prototype.traceId = "";

        /**
         * PongRes clientReqTime.
         * @member {number|Long} clientReqTime
         * @memberof pb.PongRes
         * @instance
         */
        PongRes.prototype.clientReqTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PongRes clientReceiveTime.
         * @member {number|Long} clientReceiveTime
         * @memberof pb.PongRes
         * @instance
         */
        PongRes.prototype.clientReceiveTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PongRes serverReceiveTime.
         * @member {number|Long} serverReceiveTime
         * @memberof pb.PongRes
         * @instance
         */
        PongRes.prototype.serverReceiveTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PongRes serverResponseTime.
         * @member {number|Long} serverResponseTime
         * @memberof pb.PongRes
         * @instance
         */
        PongRes.prototype.serverResponseTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new PongRes instance using the specified properties.
         * @function create
         * @memberof pb.PongRes
         * @static
         * @param {pb.IPongRes=} [properties] Properties to set
         * @returns {pb.PongRes} PongRes instance
         */
        PongRes.create = function create(properties) {
            return new PongRes(properties);
        };

        /**
         * Encodes the specified PongRes message. Does not implicitly {@link pb.PongRes.verify|verify} messages.
         * @function encode
         * @memberof pb.PongRes
         * @static
         * @param {pb.IPongRes} message PongRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PongRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sourceUid != null && Object.hasOwnProperty.call(message, "sourceUid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.sourceUid);
            if (message.requestId != null && Object.hasOwnProperty.call(message, "requestId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.requestId);
            if (message.traceId != null && Object.hasOwnProperty.call(message, "traceId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.traceId);
            if (message.clientReqTime != null && Object.hasOwnProperty.call(message, "clientReqTime"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.clientReqTime);
            if (message.clientReceiveTime != null && Object.hasOwnProperty.call(message, "clientReceiveTime"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.clientReceiveTime);
            if (message.serverReceiveTime != null && Object.hasOwnProperty.call(message, "serverReceiveTime"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.serverReceiveTime);
            if (message.serverResponseTime != null && Object.hasOwnProperty.call(message, "serverResponseTime"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.serverResponseTime);
            return writer;
        };

        /**
         * Encodes the specified PongRes message, length delimited. Does not implicitly {@link pb.PongRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.PongRes
         * @static
         * @param {pb.IPongRes} message PongRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PongRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PongRes message from the specified reader or buffer.
         * @function decode
         * @memberof pb.PongRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.PongRes} PongRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PongRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.PongRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.sourceUid = reader.int32();
                        break;
                    }
                case 2: {
                        message.requestId = reader.string();
                        break;
                    }
                case 3: {
                        message.traceId = reader.string();
                        break;
                    }
                case 4: {
                        message.clientReqTime = reader.int64();
                        break;
                    }
                case 5: {
                        message.clientReceiveTime = reader.int64();
                        break;
                    }
                case 6: {
                        message.serverReceiveTime = reader.int64();
                        break;
                    }
                case 7: {
                        message.serverResponseTime = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PongRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.PongRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.PongRes} PongRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PongRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PongRes message.
         * @function verify
         * @memberof pb.PongRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PongRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.sourceUid != null && message.hasOwnProperty("sourceUid"))
                if (!$util.isInteger(message.sourceUid))
                    return "sourceUid: integer expected";
            if (message.requestId != null && message.hasOwnProperty("requestId"))
                if (!$util.isString(message.requestId))
                    return "requestId: string expected";
            if (message.traceId != null && message.hasOwnProperty("traceId"))
                if (!$util.isString(message.traceId))
                    return "traceId: string expected";
            if (message.clientReqTime != null && message.hasOwnProperty("clientReqTime"))
                if (!$util.isInteger(message.clientReqTime) && !(message.clientReqTime && $util.isInteger(message.clientReqTime.low) && $util.isInteger(message.clientReqTime.high)))
                    return "clientReqTime: integer|Long expected";
            if (message.clientReceiveTime != null && message.hasOwnProperty("clientReceiveTime"))
                if (!$util.isInteger(message.clientReceiveTime) && !(message.clientReceiveTime && $util.isInteger(message.clientReceiveTime.low) && $util.isInteger(message.clientReceiveTime.high)))
                    return "clientReceiveTime: integer|Long expected";
            if (message.serverReceiveTime != null && message.hasOwnProperty("serverReceiveTime"))
                if (!$util.isInteger(message.serverReceiveTime) && !(message.serverReceiveTime && $util.isInteger(message.serverReceiveTime.low) && $util.isInteger(message.serverReceiveTime.high)))
                    return "serverReceiveTime: integer|Long expected";
            if (message.serverResponseTime != null && message.hasOwnProperty("serverResponseTime"))
                if (!$util.isInteger(message.serverResponseTime) && !(message.serverResponseTime && $util.isInteger(message.serverResponseTime.low) && $util.isInteger(message.serverResponseTime.high)))
                    return "serverResponseTime: integer|Long expected";
            return null;
        };

        /**
         * Creates a PongRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.PongRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.PongRes} PongRes
         */
        PongRes.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.PongRes)
                return object;
            var message = new $root.pb.PongRes();
            if (object.sourceUid != null)
                message.sourceUid = object.sourceUid | 0;
            if (object.requestId != null)
                message.requestId = String(object.requestId);
            if (object.traceId != null)
                message.traceId = String(object.traceId);
            if (object.clientReqTime != null)
                if ($util.Long)
                    (message.clientReqTime = $util.Long.fromValue(object.clientReqTime)).unsigned = false;
                else if (typeof object.clientReqTime === "string")
                    message.clientReqTime = parseInt(object.clientReqTime, 10);
                else if (typeof object.clientReqTime === "number")
                    message.clientReqTime = object.clientReqTime;
                else if (typeof object.clientReqTime === "object")
                    message.clientReqTime = new $util.LongBits(object.clientReqTime.low >>> 0, object.clientReqTime.high >>> 0).toNumber();
            if (object.clientReceiveTime != null)
                if ($util.Long)
                    (message.clientReceiveTime = $util.Long.fromValue(object.clientReceiveTime)).unsigned = false;
                else if (typeof object.clientReceiveTime === "string")
                    message.clientReceiveTime = parseInt(object.clientReceiveTime, 10);
                else if (typeof object.clientReceiveTime === "number")
                    message.clientReceiveTime = object.clientReceiveTime;
                else if (typeof object.clientReceiveTime === "object")
                    message.clientReceiveTime = new $util.LongBits(object.clientReceiveTime.low >>> 0, object.clientReceiveTime.high >>> 0).toNumber();
            if (object.serverReceiveTime != null)
                if ($util.Long)
                    (message.serverReceiveTime = $util.Long.fromValue(object.serverReceiveTime)).unsigned = false;
                else if (typeof object.serverReceiveTime === "string")
                    message.serverReceiveTime = parseInt(object.serverReceiveTime, 10);
                else if (typeof object.serverReceiveTime === "number")
                    message.serverReceiveTime = object.serverReceiveTime;
                else if (typeof object.serverReceiveTime === "object")
                    message.serverReceiveTime = new $util.LongBits(object.serverReceiveTime.low >>> 0, object.serverReceiveTime.high >>> 0).toNumber();
            if (object.serverResponseTime != null)
                if ($util.Long)
                    (message.serverResponseTime = $util.Long.fromValue(object.serverResponseTime)).unsigned = false;
                else if (typeof object.serverResponseTime === "string")
                    message.serverResponseTime = parseInt(object.serverResponseTime, 10);
                else if (typeof object.serverResponseTime === "number")
                    message.serverResponseTime = object.serverResponseTime;
                else if (typeof object.serverResponseTime === "object")
                    message.serverResponseTime = new $util.LongBits(object.serverResponseTime.low >>> 0, object.serverResponseTime.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a PongRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.PongRes
         * @static
         * @param {pb.PongRes} message PongRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PongRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.sourceUid = 0;
                object.requestId = "";
                object.traceId = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.clientReqTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.clientReqTime = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.clientReceiveTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.clientReceiveTime = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.serverReceiveTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.serverReceiveTime = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.serverResponseTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.serverResponseTime = options.longs === String ? "0" : 0;
            }
            if (message.sourceUid != null && message.hasOwnProperty("sourceUid"))
                object.sourceUid = message.sourceUid;
            if (message.requestId != null && message.hasOwnProperty("requestId"))
                object.requestId = message.requestId;
            if (message.traceId != null && message.hasOwnProperty("traceId"))
                object.traceId = message.traceId;
            if (message.clientReqTime != null && message.hasOwnProperty("clientReqTime"))
                if (typeof message.clientReqTime === "number")
                    object.clientReqTime = options.longs === String ? String(message.clientReqTime) : message.clientReqTime;
                else
                    object.clientReqTime = options.longs === String ? $util.Long.prototype.toString.call(message.clientReqTime) : options.longs === Number ? new $util.LongBits(message.clientReqTime.low >>> 0, message.clientReqTime.high >>> 0).toNumber() : message.clientReqTime;
            if (message.clientReceiveTime != null && message.hasOwnProperty("clientReceiveTime"))
                if (typeof message.clientReceiveTime === "number")
                    object.clientReceiveTime = options.longs === String ? String(message.clientReceiveTime) : message.clientReceiveTime;
                else
                    object.clientReceiveTime = options.longs === String ? $util.Long.prototype.toString.call(message.clientReceiveTime) : options.longs === Number ? new $util.LongBits(message.clientReceiveTime.low >>> 0, message.clientReceiveTime.high >>> 0).toNumber() : message.clientReceiveTime;
            if (message.serverReceiveTime != null && message.hasOwnProperty("serverReceiveTime"))
                if (typeof message.serverReceiveTime === "number")
                    object.serverReceiveTime = options.longs === String ? String(message.serverReceiveTime) : message.serverReceiveTime;
                else
                    object.serverReceiveTime = options.longs === String ? $util.Long.prototype.toString.call(message.serverReceiveTime) : options.longs === Number ? new $util.LongBits(message.serverReceiveTime.low >>> 0, message.serverReceiveTime.high >>> 0).toNumber() : message.serverReceiveTime;
            if (message.serverResponseTime != null && message.hasOwnProperty("serverResponseTime"))
                if (typeof message.serverResponseTime === "number")
                    object.serverResponseTime = options.longs === String ? String(message.serverResponseTime) : message.serverResponseTime;
                else
                    object.serverResponseTime = options.longs === String ? $util.Long.prototype.toString.call(message.serverResponseTime) : options.longs === Number ? new $util.LongBits(message.serverResponseTime.low >>> 0, message.serverResponseTime.high >>> 0).toNumber() : message.serverResponseTime;
            return object;
        };

        /**
         * Converts this PongRes to JSON.
         * @function toJSON
         * @memberof pb.PongRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PongRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PongRes
         * @function getTypeUrl
         * @memberof pb.PongRes
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PongRes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.PongRes";
        };

        return PongRes;
    })();

    return pb;
})();

module.exports = $root;

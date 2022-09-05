// source: stream.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

var profile_pb = require('./profile_pb.js');
goog.object.extend(proto, profile_pb);
var category_pb = require('./category_pb.js');
goog.object.extend(proto, category_pb);
var page_pb = require('./page_pb.js');
goog.object.extend(proto, page_pb);
goog.exportSymbol('proto.pb.Stream', null, global);
goog.exportSymbol('proto.pb.StreamId', null, global);
goog.exportSymbol('proto.pb.StreamList', null, global);
goog.exportSymbol('proto.pb.StreamQuery', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.Stream = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.Stream, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.Stream.displayName = 'proto.pb.Stream';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.StreamId = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.StreamId, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.StreamId.displayName = 'proto.pb.StreamId';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.StreamList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.StreamList.repeatedFields_, null);
};
goog.inherits(proto.pb.StreamList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.StreamList.displayName = 'proto.pb.StreamList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.StreamQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.StreamQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.StreamQuery.displayName = 'proto.pb.StreamQuery';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.Stream.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.Stream.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.Stream} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.Stream.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    category: (f = msg.getCategory()) && category_pb.Category.toObject(includeInstance, f),
    streamer: (f = msg.getStreamer()) && profile_pb.Profile.toObject(includeInstance, f),
    live: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
    name: jspb.Message.getFieldWithDefault(msg, 6, ""),
    rtmpurl: jspb.Message.getFieldWithDefault(msg, 4, ""),
    hlsurl: jspb.Message.getFieldWithDefault(msg, 5, ""),
    videourl: jspb.Message.getFieldWithDefault(msg, 9, ""),
    screenshoturl: jspb.Message.getFieldWithDefault(msg, 7, ""),
    invisible: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
    createdat: jspb.Message.getFieldWithDefault(msg, 11, 0),
    updatedat: jspb.Message.getFieldWithDefault(msg, 12, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.Stream}
 */
proto.pb.Stream.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.Stream;
  return proto.pb.Stream.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.Stream} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.Stream}
 */
proto.pb.Stream.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new category_pb.Category;
      reader.readMessage(value,category_pb.Category.deserializeBinaryFromReader);
      msg.setCategory(value);
      break;
    case 3:
      var value = new profile_pb.Profile;
      reader.readMessage(value,profile_pb.Profile.deserializeBinaryFromReader);
      msg.setStreamer(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLive(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setRtmpurl(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setHlsurl(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setVideourl(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setScreenshoturl(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setInvisible(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreatedat(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUpdatedat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.Stream.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.Stream.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.Stream} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.Stream.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCategory();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      category_pb.Category.serializeBinaryToWriter
    );
  }
  f = message.getStreamer();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      profile_pb.Profile.serializeBinaryToWriter
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeBool(
      8,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeString(
      9,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getInvisible();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getCreatedat();
  if (f !== 0) {
    writer.writeInt64(
      11,
      f
    );
  }
  f = message.getUpdatedat();
  if (f !== 0) {
    writer.writeInt64(
      12,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.pb.Stream.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.Stream} returns this
 */
proto.pb.Stream.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Category category = 2;
 * @return {?proto.pb.Category}
 */
proto.pb.Stream.prototype.getCategory = function() {
  return /** @type{?proto.pb.Category} */ (
    jspb.Message.getWrapperField(this, category_pb.Category, 2));
};


/**
 * @param {?proto.pb.Category|undefined} value
 * @return {!proto.pb.Stream} returns this
*/
proto.pb.Stream.prototype.setCategory = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.Stream} returns this
 */
proto.pb.Stream.prototype.clearCategory = function() {
  return this.setCategory(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.Stream.prototype.hasCategory = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Profile streamer = 3;
 * @return {?proto.pb.Profile}
 */
proto.pb.Stream.prototype.getStreamer = function() {
  return /** @type{?proto.pb.Profile} */ (
    jspb.Message.getWrapperField(this, profile_pb.Profile, 3));
};


/**
 * @param {?proto.pb.Profile|undefined} value
 * @return {!proto.pb.Stream} returns this
*/
proto.pb.Stream.prototype.setStreamer = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.Stream} returns this
 */
proto.pb.Stream.prototype.clearStreamer = function() {
  return this.setStreamer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.Stream.prototype.hasStreamer = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool live = 8;
 * @return {boolean}
 */
proto.pb.Stream.prototype.getLive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pb.Stream} returns this
 */
proto.pb.Stream.prototype.setLive = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.Stream} returns this
 */
proto.pb.Stream.prototype.clearLive = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.Stream.prototype.hasLive = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string name = 6;
 * @return {string}
 */
proto.pb.Stream.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.Stream} returns this
 */
proto.pb.Stream.prototype.setName = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.Stream} returns this
 */
proto.pb.Stream.prototype.clearName = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.Stream.prototype.hasName = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string rtmpUrl = 4;
 * @return {string}
 */
proto.pb.Stream.prototype.getRtmpurl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.Stream} returns this
 */
proto.pb.Stream.prototype.setRtmpurl = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.Stream} returns this
 */
proto.pb.Stream.prototype.clearRtmpurl = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.Stream.prototype.hasRtmpurl = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string hlsUrl = 5;
 * @return {string}
 */
proto.pb.Stream.prototype.getHlsurl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.Stream} returns this
 */
proto.pb.Stream.prototype.setHlsurl = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.Stream} returns this
 */
proto.pb.Stream.prototype.clearHlsurl = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.Stream.prototype.hasHlsurl = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string videoUrl = 9;
 * @return {string}
 */
proto.pb.Stream.prototype.getVideourl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.Stream} returns this
 */
proto.pb.Stream.prototype.setVideourl = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.Stream} returns this
 */
proto.pb.Stream.prototype.clearVideourl = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.Stream.prototype.hasVideourl = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional string screenshotUrl = 7;
 * @return {string}
 */
proto.pb.Stream.prototype.getScreenshoturl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.Stream} returns this
 */
proto.pb.Stream.prototype.setScreenshoturl = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.Stream} returns this
 */
proto.pb.Stream.prototype.clearScreenshoturl = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.Stream.prototype.hasScreenshoturl = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional bool invisible = 10;
 * @return {boolean}
 */
proto.pb.Stream.prototype.getInvisible = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pb.Stream} returns this
 */
proto.pb.Stream.prototype.setInvisible = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional int64 createdAt = 11;
 * @return {number}
 */
proto.pb.Stream.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.Stream} returns this
 */
proto.pb.Stream.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional int64 updatedAt = 12;
 * @return {number}
 */
proto.pb.Stream.prototype.getUpdatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.Stream} returns this
 */
proto.pb.Stream.prototype.setUpdatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.StreamId.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.StreamId.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.StreamId} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.StreamId.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.StreamId}
 */
proto.pb.StreamId.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.StreamId;
  return proto.pb.StreamId.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.StreamId} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.StreamId}
 */
proto.pb.StreamId.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.StreamId.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.StreamId.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.StreamId} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.StreamId.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string value = 1;
 * @return {string}
 */
proto.pb.StreamId.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.StreamId} returns this
 */
proto.pb.StreamId.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.StreamList.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.StreamList.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.StreamList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.StreamList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.StreamList.toObject = function(includeInstance, msg) {
  var f, obj = {
    valuesList: jspb.Message.toObjectList(msg.getValuesList(),
    proto.pb.Stream.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.StreamList}
 */
proto.pb.StreamList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.StreamList;
  return proto.pb.StreamList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.StreamList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.StreamList}
 */
proto.pb.StreamList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pb.Stream;
      reader.readMessage(value,proto.pb.Stream.deserializeBinaryFromReader);
      msg.addValues(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.StreamList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.StreamList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.StreamList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.StreamList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValuesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.pb.Stream.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Stream values = 1;
 * @return {!Array<!proto.pb.Stream>}
 */
proto.pb.StreamList.prototype.getValuesList = function() {
  return /** @type{!Array<!proto.pb.Stream>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pb.Stream, 1));
};


/**
 * @param {!Array<!proto.pb.Stream>} value
 * @return {!proto.pb.StreamList} returns this
*/
proto.pb.StreamList.prototype.setValuesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.pb.Stream=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pb.Stream}
 */
proto.pb.StreamList.prototype.addValues = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.pb.Stream, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.StreamList} returns this
 */
proto.pb.StreamList.prototype.clearValuesList = function() {
  return this.setValuesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.StreamQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.StreamQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.StreamQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.StreamQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
    categoryid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    profileid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    page: (f = msg.getPage()) && page_pb.Page.toObject(includeInstance, f),
    sorting: jspb.Message.getFieldWithDefault(msg, 4, 0),
    live: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    includinginvisible: jspb.Message.getBooleanFieldWithDefault(msg, 6, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.StreamQuery}
 */
proto.pb.StreamQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.StreamQuery;
  return proto.pb.StreamQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.StreamQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.StreamQuery}
 */
proto.pb.StreamQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategoryid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProfileid(value);
      break;
    case 3:
      var value = new page_pb.Page;
      reader.readMessage(value,page_pb.Page.deserializeBinaryFromReader);
      msg.setPage(value);
      break;
    case 4:
      var value = /** @type {!proto.pb.Sorting} */ (reader.readEnum());
      msg.setSorting(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLive(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludinginvisible(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.StreamQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.StreamQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.StreamQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.StreamQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPage();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      page_pb.Page.serializeBinaryToWriter
    );
  }
  f = /** @type {!proto.pb.Sorting} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeBool(
      5,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional string categoryId = 1;
 * @return {string}
 */
proto.pb.StreamQuery.prototype.getCategoryid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.StreamQuery} returns this
 */
proto.pb.StreamQuery.prototype.setCategoryid = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.StreamQuery} returns this
 */
proto.pb.StreamQuery.prototype.clearCategoryid = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.StreamQuery.prototype.hasCategoryid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string profileId = 2;
 * @return {string}
 */
proto.pb.StreamQuery.prototype.getProfileid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.StreamQuery} returns this
 */
proto.pb.StreamQuery.prototype.setProfileid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.StreamQuery} returns this
 */
proto.pb.StreamQuery.prototype.clearProfileid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.StreamQuery.prototype.hasProfileid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Page page = 3;
 * @return {?proto.pb.Page}
 */
proto.pb.StreamQuery.prototype.getPage = function() {
  return /** @type{?proto.pb.Page} */ (
    jspb.Message.getWrapperField(this, page_pb.Page, 3));
};


/**
 * @param {?proto.pb.Page|undefined} value
 * @return {!proto.pb.StreamQuery} returns this
*/
proto.pb.StreamQuery.prototype.setPage = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.StreamQuery} returns this
 */
proto.pb.StreamQuery.prototype.clearPage = function() {
  return this.setPage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.StreamQuery.prototype.hasPage = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Sorting sorting = 4;
 * @return {!proto.pb.Sorting}
 */
proto.pb.StreamQuery.prototype.getSorting = function() {
  return /** @type {!proto.pb.Sorting} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.pb.Sorting} value
 * @return {!proto.pb.StreamQuery} returns this
 */
proto.pb.StreamQuery.prototype.setSorting = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.StreamQuery} returns this
 */
proto.pb.StreamQuery.prototype.clearSorting = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.StreamQuery.prototype.hasSorting = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool live = 5;
 * @return {boolean}
 */
proto.pb.StreamQuery.prototype.getLive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pb.StreamQuery} returns this
 */
proto.pb.StreamQuery.prototype.setLive = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.StreamQuery} returns this
 */
proto.pb.StreamQuery.prototype.clearLive = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.StreamQuery.prototype.hasLive = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool includingInvisible = 6;
 * @return {boolean}
 */
proto.pb.StreamQuery.prototype.getIncludinginvisible = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pb.StreamQuery} returns this
 */
proto.pb.StreamQuery.prototype.setIncludinginvisible = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.StreamQuery} returns this
 */
proto.pb.StreamQuery.prototype.clearIncludinginvisible = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.StreamQuery.prototype.hasIncludinginvisible = function() {
  return jspb.Message.getField(this, 6) != null;
};


goog.object.extend(exports, proto.pb);
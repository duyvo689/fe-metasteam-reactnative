// source: chat.proto
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
goog.exportSymbol('proto.pb.ChatDonation', null, global);
goog.exportSymbol('proto.pb.ChatFilter', null, global);
goog.exportSymbol('proto.pb.ChatFollowing', null, global);
goog.exportSymbol('proto.pb.ChatMessage', null, global);
goog.exportSymbol('proto.pb.ChatMessage.MessageCase', null, global);
goog.exportSymbol('proto.pb.ChatMessageList', null, global);
goog.exportSymbol('proto.pb.ChatMessageType', null, global);
goog.exportSymbol('proto.pb.ChatResponse', null, global);
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
proto.pb.ChatMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.pb.ChatMessage.oneofGroups_);
};
goog.inherits(proto.pb.ChatMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.ChatMessage.displayName = 'proto.pb.ChatMessage';
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
proto.pb.ChatMessageList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.ChatMessageList.repeatedFields_, null);
};
goog.inherits(proto.pb.ChatMessageList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.ChatMessageList.displayName = 'proto.pb.ChatMessageList';
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
proto.pb.ChatFollowing = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.ChatFollowing, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.ChatFollowing.displayName = 'proto.pb.ChatFollowing';
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
proto.pb.ChatDonation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.ChatDonation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.ChatDonation.displayName = 'proto.pb.ChatDonation';
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
proto.pb.ChatResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.ChatResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.ChatResponse.displayName = 'proto.pb.ChatResponse';
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
proto.pb.ChatFilter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.ChatFilter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.ChatFilter.displayName = 'proto.pb.ChatFilter';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.pb.ChatMessage.oneofGroups_ = [[4,5,6,7]];

/**
 * @enum {number}
 */
proto.pb.ChatMessage.MessageCase = {
  MESSAGE_NOT_SET: 0,
  TEXT: 4,
  IMAGE: 5,
  FOLLOWING: 6,
  DONATION: 7
};

/**
 * @return {proto.pb.ChatMessage.MessageCase}
 */
proto.pb.ChatMessage.prototype.getMessageCase = function() {
  return /** @type {proto.pb.ChatMessage.MessageCase} */(jspb.Message.computeOneofCase(this, proto.pb.ChatMessage.oneofGroups_[0]));
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
proto.pb.ChatMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.ChatMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.ChatMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ChatMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    streamid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    sender: (f = msg.getSender()) && profile_pb.Profile.toObject(includeInstance, f),
    type: jspb.Message.getFieldWithDefault(msg, 3, 0),
    text: jspb.Message.getFieldWithDefault(msg, 4, ""),
    image: jspb.Message.getFieldWithDefault(msg, 5, ""),
    following: (f = msg.getFollowing()) && proto.pb.ChatFollowing.toObject(includeInstance, f),
    donation: (f = msg.getDonation()) && proto.pb.ChatDonation.toObject(includeInstance, f),
    timestamp: jspb.Message.getFieldWithDefault(msg, 8, 0)
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
 * @return {!proto.pb.ChatMessage}
 */
proto.pb.ChatMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.ChatMessage;
  return proto.pb.ChatMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.ChatMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.ChatMessage}
 */
proto.pb.ChatMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStreamid(value);
      break;
    case 2:
      var value = new profile_pb.Profile;
      reader.readMessage(value,profile_pb.Profile.deserializeBinaryFromReader);
      msg.setSender(value);
      break;
    case 3:
      var value = /** @type {!proto.pb.ChatMessageType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setImage(value);
      break;
    case 6:
      var value = new proto.pb.ChatFollowing;
      reader.readMessage(value,proto.pb.ChatFollowing.deserializeBinaryFromReader);
      msg.setFollowing(value);
      break;
    case 7:
      var value = new proto.pb.ChatDonation;
      reader.readMessage(value,proto.pb.ChatDonation.deserializeBinaryFromReader);
      msg.setDonation(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
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
proto.pb.ChatMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.ChatMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.ChatMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ChatMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStreamid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSender();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      profile_pb.Profile.serializeBinaryToWriter
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
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
  f = message.getFollowing();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.pb.ChatFollowing.serializeBinaryToWriter
    );
  }
  f = message.getDonation();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.pb.ChatDonation.serializeBinaryToWriter
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
};


/**
 * optional string streamId = 1;
 * @return {string}
 */
proto.pb.ChatMessage.prototype.getStreamid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.ChatMessage} returns this
 */
proto.pb.ChatMessage.prototype.setStreamid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Profile sender = 2;
 * @return {?proto.pb.Profile}
 */
proto.pb.ChatMessage.prototype.getSender = function() {
  return /** @type{?proto.pb.Profile} */ (
    jspb.Message.getWrapperField(this, profile_pb.Profile, 2));
};


/**
 * @param {?proto.pb.Profile|undefined} value
 * @return {!proto.pb.ChatMessage} returns this
*/
proto.pb.ChatMessage.prototype.setSender = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.ChatMessage} returns this
 */
proto.pb.ChatMessage.prototype.clearSender = function() {
  return this.setSender(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.ChatMessage.prototype.hasSender = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ChatMessageType type = 3;
 * @return {!proto.pb.ChatMessageType}
 */
proto.pb.ChatMessage.prototype.getType = function() {
  return /** @type {!proto.pb.ChatMessageType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.pb.ChatMessageType} value
 * @return {!proto.pb.ChatMessage} returns this
 */
proto.pb.ChatMessage.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string text = 4;
 * @return {string}
 */
proto.pb.ChatMessage.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.ChatMessage} returns this
 */
proto.pb.ChatMessage.prototype.setText = function(value) {
  return jspb.Message.setOneofField(this, 4, proto.pb.ChatMessage.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.ChatMessage} returns this
 */
proto.pb.ChatMessage.prototype.clearText = function() {
  return jspb.Message.setOneofField(this, 4, proto.pb.ChatMessage.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.ChatMessage.prototype.hasText = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string image = 5;
 * @return {string}
 */
proto.pb.ChatMessage.prototype.getImage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.ChatMessage} returns this
 */
proto.pb.ChatMessage.prototype.setImage = function(value) {
  return jspb.Message.setOneofField(this, 5, proto.pb.ChatMessage.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.ChatMessage} returns this
 */
proto.pb.ChatMessage.prototype.clearImage = function() {
  return jspb.Message.setOneofField(this, 5, proto.pb.ChatMessage.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.ChatMessage.prototype.hasImage = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional ChatFollowing following = 6;
 * @return {?proto.pb.ChatFollowing}
 */
proto.pb.ChatMessage.prototype.getFollowing = function() {
  return /** @type{?proto.pb.ChatFollowing} */ (
    jspb.Message.getWrapperField(this, proto.pb.ChatFollowing, 6));
};


/**
 * @param {?proto.pb.ChatFollowing|undefined} value
 * @return {!proto.pb.ChatMessage} returns this
*/
proto.pb.ChatMessage.prototype.setFollowing = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.pb.ChatMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.ChatMessage} returns this
 */
proto.pb.ChatMessage.prototype.clearFollowing = function() {
  return this.setFollowing(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.ChatMessage.prototype.hasFollowing = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional ChatDonation donation = 7;
 * @return {?proto.pb.ChatDonation}
 */
proto.pb.ChatMessage.prototype.getDonation = function() {
  return /** @type{?proto.pb.ChatDonation} */ (
    jspb.Message.getWrapperField(this, proto.pb.ChatDonation, 7));
};


/**
 * @param {?proto.pb.ChatDonation|undefined} value
 * @return {!proto.pb.ChatMessage} returns this
*/
proto.pb.ChatMessage.prototype.setDonation = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.pb.ChatMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.ChatMessage} returns this
 */
proto.pb.ChatMessage.prototype.clearDonation = function() {
  return this.setDonation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.ChatMessage.prototype.hasDonation = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional int64 timestamp = 8;
 * @return {number}
 */
proto.pb.ChatMessage.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.ChatMessage} returns this
 */
proto.pb.ChatMessage.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.ChatMessageList.repeatedFields_ = [1];



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
proto.pb.ChatMessageList.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.ChatMessageList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.ChatMessageList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ChatMessageList.toObject = function(includeInstance, msg) {
  var f, obj = {
    valuesList: jspb.Message.toObjectList(msg.getValuesList(),
    proto.pb.ChatMessage.toObject, includeInstance)
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
 * @return {!proto.pb.ChatMessageList}
 */
proto.pb.ChatMessageList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.ChatMessageList;
  return proto.pb.ChatMessageList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.ChatMessageList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.ChatMessageList}
 */
proto.pb.ChatMessageList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pb.ChatMessage;
      reader.readMessage(value,proto.pb.ChatMessage.deserializeBinaryFromReader);
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
proto.pb.ChatMessageList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.ChatMessageList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.ChatMessageList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ChatMessageList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValuesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.pb.ChatMessage.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ChatMessage values = 1;
 * @return {!Array<!proto.pb.ChatMessage>}
 */
proto.pb.ChatMessageList.prototype.getValuesList = function() {
  return /** @type{!Array<!proto.pb.ChatMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pb.ChatMessage, 1));
};


/**
 * @param {!Array<!proto.pb.ChatMessage>} value
 * @return {!proto.pb.ChatMessageList} returns this
*/
proto.pb.ChatMessageList.prototype.setValuesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.pb.ChatMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pb.ChatMessage}
 */
proto.pb.ChatMessageList.prototype.addValues = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.pb.ChatMessage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.ChatMessageList} returns this
 */
proto.pb.ChatMessageList.prototype.clearValuesList = function() {
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
proto.pb.ChatFollowing.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.ChatFollowing.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.ChatFollowing} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ChatFollowing.toObject = function(includeInstance, msg) {
  var f, obj = {
    following: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
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
 * @return {!proto.pb.ChatFollowing}
 */
proto.pb.ChatFollowing.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.ChatFollowing;
  return proto.pb.ChatFollowing.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.ChatFollowing} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.ChatFollowing}
 */
proto.pb.ChatFollowing.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFollowing(value);
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
proto.pb.ChatFollowing.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.ChatFollowing.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.ChatFollowing} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ChatFollowing.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFollowing();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool following = 1;
 * @return {boolean}
 */
proto.pb.ChatFollowing.prototype.getFollowing = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pb.ChatFollowing} returns this
 */
proto.pb.ChatFollowing.prototype.setFollowing = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
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
proto.pb.ChatDonation.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.ChatDonation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.ChatDonation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ChatDonation.toObject = function(includeInstance, msg) {
  var f, obj = {
    amount: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0)
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
 * @return {!proto.pb.ChatDonation}
 */
proto.pb.ChatDonation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.ChatDonation;
  return proto.pb.ChatDonation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.ChatDonation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.ChatDonation}
 */
proto.pb.ChatDonation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setAmount(value);
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
proto.pb.ChatDonation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.ChatDonation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.ChatDonation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ChatDonation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAmount();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
};


/**
 * optional float amount = 1;
 * @return {number}
 */
proto.pb.ChatDonation.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.pb.ChatDonation} returns this
 */
proto.pb.ChatDonation.prototype.setAmount = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
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
proto.pb.ChatResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.ChatResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.ChatResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ChatResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.pb.ChatResponse}
 */
proto.pb.ChatResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.ChatResponse;
  return proto.pb.ChatResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.ChatResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.ChatResponse}
 */
proto.pb.ChatResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.pb.ChatResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.ChatResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.ChatResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ChatResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
proto.pb.ChatFilter.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.ChatFilter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.ChatFilter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ChatFilter.toObject = function(includeInstance, msg) {
  var f, obj = {
    streamid: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.pb.ChatFilter}
 */
proto.pb.ChatFilter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.ChatFilter;
  return proto.pb.ChatFilter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.ChatFilter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.ChatFilter}
 */
proto.pb.ChatFilter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStreamid(value);
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
proto.pb.ChatFilter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.ChatFilter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.ChatFilter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ChatFilter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStreamid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string streamId = 1;
 * @return {string}
 */
proto.pb.ChatFilter.prototype.getStreamid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.ChatFilter} returns this
 */
proto.pb.ChatFilter.prototype.setStreamid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * @enum {number}
 */
proto.pb.ChatMessageType = {
  CHAT_DEFAULT: 0,
  CHAT_JOIN: 1,
  CHAT_LEAVE: 2,
  CHAT_TEXT: 3,
  CHAT_EMOJI: 4,
  CHAT_PING: 5,
  CHAT_FOLLOW: 6,
  CHAT_DONATE: 7
};

goog.object.extend(exports, proto.pb);

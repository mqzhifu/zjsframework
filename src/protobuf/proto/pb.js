/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/light");

var $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root()))
.addJSON({
  pb: {
    options: {
      go_package: "./;pb"
    },
    nested: {
      Empty: {
        fields: {}
      },
      Heartbeat: {
        fields: {
          sourceUid: {
            type: "int32",
            id: 1
          },
          time: {
            type: "int64",
            id: 2
          },
          reqTime: {
            type: "int64",
            id: 3
          },
          clientReqTime: {
            type: "int64",
            id: 4
          },
          clientReceiveTime: {
            type: "int64",
            id: 5
          },
          serverReceiveTime: {
            type: "int64",
            id: 6
          },
          serverResponseTime: {
            type: "int64",
            id: 7
          },
          requestId: {
            type: "string",
            id: 8
          }
        }
      },
      FDCloseEvent: {
        fields: {
          sourceUid: {
            type: "int32",
            id: 1
          },
          userId: {
            type: "int32",
            id: 2
          },
          source: {
            type: "int32",
            id: 3
          },
          contentType: {
            type: "int32",
            id: 4
          },
          protocolType: {
            type: "int32",
            id: 5
          }
        }
      },
      FDCreateEvent: {
        fields: {
          sourceUid: {
            type: "int32",
            id: 1
          },
          userId: {
            type: "int32",
            id: 2
          }
        }
      },
      PingReq: {
        fields: {
          sourceUid: {
            type: "int32",
            id: 1
          },
          requestId: {
            type: "string",
            id: 2
          },
          traceId: {
            type: "string",
            id: 3
          },
          clientReqTime: {
            type: "int64",
            id: 4
          },
          clientReceiveTime: {
            type: "int64",
            id: 5
          },
          serverReceiveTime: {
            type: "int64",
            id: 6
          },
          serverResponseTime: {
            type: "int64",
            id: 7
          }
        }
      },
      PongRes: {
        fields: {
          sourceUid: {
            type: "int32",
            id: 1
          },
          requestId: {
            type: "string",
            id: 2
          },
          traceId: {
            type: "string",
            id: 3
          },
          clientReqTime: {
            type: "int64",
            id: 4
          },
          clientReceiveTime: {
            type: "int64",
            id: 5
          },
          serverReceiveTime: {
            type: "int64",
            id: 6
          },
          serverResponseTime: {
            type: "int64",
            id: 7
          }
        }
      },
      FrameSync: {
        methods: {
          CS_PlayerReady: {
            requestType: "PlayerReady",
            responseType: "Empty"
          },
          CS_PlayerOperations: {
            requestType: "LogicFrame",
            responseType: "Empty"
          },
          CS_PlayerResumeGame: {
            requestType: "PlayerResumeGame",
            responseType: "Empty"
          },
          CS_PlayerOver: {
            requestType: "PlayerOver",
            responseType: "Empty"
          },
          CS_RoomHistory: {
            requestType: "ReqRoomHistory",
            responseType: "Empty"
          },
          CS_RoomBaseInfo: {
            requestType: "RoomBaseInfo",
            responseType: "Empty"
          },
          CS_PlayerState: {
            requestType: "PlayerBase",
            responseType: "Empty"
          },
          CS_Heartbeat: {
            requestType: "Heartbeat",
            responseType: "Empty"
          },
          SC_ReadyTimeout: {
            requestType: "ReadyTimeout",
            responseType: "Empty"
          },
          SC_EnterBattle: {
            requestType: "EnterBattle",
            responseType: "Empty"
          },
          SC_LogicFrame: {
            requestType: "LogicFrame",
            responseType: "Empty"
          },
          SC_RoomHistory: {
            requestType: "RoomHistorySets",
            responseType: "Empty"
          },
          SC_RoomBaseInfo: {
            requestType: "RoomBaseInfo",
            responseType: "Empty"
          },
          SC_OtherPlayerOffline: {
            requestType: "OtherPlayerOffline",
            responseType: "Empty"
          },
          SC_OtherPlayerOver: {
            requestType: "PlayerOver",
            responseType: "Empty"
          },
          SC_OtherPlayerResumeGame: {
            requestType: "PlayerResumeGame",
            responseType: "Empty"
          },
          SC_StartBattle: {
            requestType: "StartBattle",
            responseType: "Empty"
          },
          SC_RestartGame: {
            requestType: "RestartGame",
            responseType: "Empty"
          },
          SC_GameOver: {
            requestType: "GameOver",
            responseType: "Empty"
          },
          SC_PlayerState: {
            requestType: "PlayerState",
            responseType: "Empty"
          },
          SC_Heartbeat: {
            requestType: "Heartbeat",
            responseType: "Empty"
          },
          FdClose: {
            requestType: "FDCloseEvent",
            responseType: "Empty"
          },
          FdCreate: {
            requestType: "FDCreateEvent",
            responseType: "Empty"
          }
        }
      },
      RoomBaseInfo: {
        fields: {
          sourceUid: {
            type: "int32",
            id: 1
          },
          id: {
            type: "string",
            id: 2
          },
          addTime: {
            type: "int32",
            id: 3
          },
          status: {
            type: "int32",
            id: 4
          },
          timeout: {
            type: "int32",
            id: 5
          },
          sequenceNumber: {
            type: "int32",
            id: 6
          },
          randSeek: {
            type: "int32",
            id: 7
          },
          playerIds: {
            rule: "repeated",
            type: "int32",
            id: 8
          },
          roomId: {
            type: "string",
            id: 9
          },
          startTime: {
            type: "int32",
            id: 10
          },
          endTime: {
            type: "int32",
            id: 11
          }
        }
      },
      PlayerBase: {
        fields: {
          sourceUid: {
            type: "int32",
            id: 1
          },
          playerId: {
            type: "int32",
            id: 2
          }
        }
      },
      PlayerState: {
        fields: {
          playerId: {
            type: "int32",
            id: 1
          },
          addTime: {
            type: "int32",
            id: 2
          },
          status: {
            type: "int32",
            id: 3
          },
          roomId: {
            type: "string",
            id: 4
          }
        }
      },
      PlayerResumeGame: {
        fields: {
          sourceUid: {
            type: "int32",
            id: 1
          },
          playerId: {
            type: "int32",
            id: 2
          },
          roomId: {
            type: "string",
            id: 3
          },
          sequenceNumber: {
            type: "int32",
            id: 4
          }
        }
      },
      PlayerReady: {
        fields: {
          sourceUid: {
            type: "int32",
            id: 1
          },
          playerId: {
            type: "int32",
            id: 2
          },
          roomId: {
            type: "string",
            id: 3
          }
        }
      },
      ReqRoomHistory: {
        fields: {
          sourceUid: {
            type: "int32",
            id: 1
          },
          playerId: {
            type: "int32",
            id: 2
          },
          roomId: {
            type: "string",
            id: 3
          },
          sequenceNumberStart: {
            type: "int32",
            id: 4
          },
          sequenceNumberEnd: {
            type: "int32",
            id: 5
          }
        }
      },
      RoomHistorySets: {
        fields: {
          sourceUid: {
            type: "int32",
            id: 1
          },
          Sets: {
            rule: "repeated",
            type: "RoomHistory",
            id: 2
          }
        }
      },
      RoomHistory: {
        fields: {
          sourceUid: {
            type: "int32",
            id: 1
          },
          id: {
            type: "int32",
            id: 2
          },
          action: {
            type: "string",
            id: 3
          },
          content: {
            type: "string",
            id: 4
          }
        }
      },
      GameOver: {
        fields: {
          sourceUid: {
            type: "int32",
            id: 1
          },
          playerId: {
            type: "int32",
            id: 2
          },
          roomId: {
            type: "string",
            id: 3
          },
          sequenceNumber: {
            type: "int32",
            id: 4
          },
          result: {
            type: "string",
            id: 5
          }
        }
      },
      PlayerOver: {
        fields: {
          sourceUid: {
            type: "int32",
            id: 1
          },
          playerId: {
            type: "int32",
            id: 2
          },
          sequenceNumber: {
            type: "int32",
            id: 3
          },
          roomId: {
            type: "string",
            id: 4
          }
        }
      },
      OtherPlayerOffline: {
        fields: {
          sourceUid: {
            type: "int32",
            id: 1
          },
          playerId: {
            type: "int32",
            id: 2
          }
        }
      },
      StartBattle: {
        fields: {
          sourceUid: {
            type: "int32",
            id: 1
          },
          sequenceNumberStart: {
            type: "int32",
            id: 2
          }
        }
      },
      EnterBattle: {
        fields: {
          sourceUid: {
            type: "int32",
            id: 1
          },
          randSeek: {
            type: "int32",
            id: 2
          },
          roomId: {
            type: "string",
            id: 3
          },
          sequenceNumber: {
            type: "int32",
            id: 4
          },
          status: {
            type: "int32",
            id: 5
          },
          addTime: {
            type: "int32",
            id: 6
          },
          time: {
            type: "int64",
            id: 7
          },
          udpPort: {
            type: "string",
            id: 8
          },
          playerIds: {
            rule: "repeated",
            type: "int32",
            id: 9
          }
        }
      },
      LogicFrame: {
        fields: {
          sourceUid: {
            type: "int32",
            id: 1
          },
          id: {
            type: "int32",
            id: 2
          },
          roomId: {
            type: "string",
            id: 3
          },
          sequenceNumber: {
            type: "int32",
            id: 4
          },
          operations: {
            rule: "repeated",
            type: "Operation",
            id: 5
          }
        }
      },
      Operation: {
        fields: {
          sourceUid: {
            type: "int32",
            id: 1
          },
          id: {
            type: "int32",
            id: 2
          },
          event: {
            type: "string",
            id: 3
          },
          value: {
            type: "string",
            id: 4
          },
          playerId: {
            type: "int32",
            id: 5
          }
        }
      },
      ReadyTimeout: {
        fields: {
          sourceUid: {
            type: "int32",
            id: 1
          },
          roomId: {
            type: "string",
            id: 2
          }
        }
      },
      RestartGame: {
        fields: {
          sourceUid: {
            type: "int32",
            id: 1
          },
          roomId: {
            type: "string",
            id: 2
          },
          playerIds: {
            rule: "repeated",
            type: "int32",
            id: 3
          }
        }
      },
      GameMatch: {
        methods: {
          CS_PlayerMatchSign: {
            requestType: "GameMatchSign",
            responseType: "Empty"
          },
          CS_PlayerMatchSignCancel: {
            requestType: "GameMatchPlayerCancel",
            responseType: "Empty"
          },
          CS_Heartbeat: {
            requestType: "Heartbeat",
            responseType: "Empty"
          },
          SC_GameMatchOptResult: {
            requestType: "GameMatchOptResult",
            responseType: "Empty"
          },
          SC_Heartbeat: {
            requestType: "Heartbeat",
            responseType: "Empty"
          },
          FdClose: {
            requestType: "FDCloseEvent",
            responseType: "Empty"
          },
          FdCreate: {
            requestType: "FDCreateEvent",
            responseType: "Empty"
          }
        }
      },
      GameMatchSign: {
        fields: {
          sourceUid: {
            type: "int32",
            id: 1
          },
          ruleId: {
            type: "int32",
            id: 2
          },
          groupId: {
            type: "int32",
            id: 3
          },
          addition: {
            type: "string",
            id: 4
          },
          playerSets: {
            rule: "repeated",
            type: "GameMatchSignPlayer",
            id: 5
          }
        }
      },
      GameMatchSignPlayer: {
        fields: {
          uid: {
            type: "int32",
            id: 1
          },
          weightAttr: {
            keyType: "string",
            type: "int32",
            id: 2
          }
        }
      },
      GameMatchPlayerCancel: {
        fields: {
          sourceUid: {
            type: "int32",
            id: 1
          },
          ruleId: {
            type: "int32",
            id: 2
          },
          groupId: {
            type: "int32",
            id: 3
          }
        }
      },
      GameMatchOptResult: {
        fields: {
          sourceUid: {
            type: "int32",
            id: 1
          },
          groupId: {
            type: "int32",
            id: 2
          },
          msg: {
            type: "string",
            id: 3
          },
          roomId: {
            type: "string",
            id: 4
          },
          code: {
            type: "int32",
            id: 5
          }
        }
      },
      Gateway: {
        methods: {
          FdClose: {
            requestType: "FDCloseEvent",
            responseType: "Empty"
          },
          FdCreate: {
            requestType: "FDCreateEvent",
            responseType: "Empty"
          },
          CS_Login: {
            requestType: "Login",
            responseType: "LoginRes"
          },
          CS_Ping: {
            requestType: "PingReq",
            responseType: "PongRes"
          },
          CS_Pong: {
            requestType: "PongRes",
            responseType: "PingReq"
          },
          CS_Heartbeat: {
            requestType: "Heartbeat",
            responseType: "Empty"
          },
          SC_Login: {
            requestType: "LoginRes",
            responseType: "Empty"
          },
          SC_Ping: {
            requestType: "PingReq",
            responseType: "PongRes"
          },
          SC_Pong: {
            requestType: "PongRes",
            responseType: "PingReq"
          },
          SC_Heartbeat: {
            requestType: "Heartbeat",
            responseType: "Empty"
          },
          SC_KickOff: {
            requestType: "KickOff",
            responseType: "Empty"
          },
          CS_ProjectPushMsg: {
            requestType: "ProjectPushMsg",
            responseType: "Empty"
          },
          SC_ProjectPushMsg: {
            requestType: "ProjectPushMsg",
            responseType: "Empty"
          },
          SC_SendMsg: {
            requestType: "Msg",
            responseType: "Empty"
          }
        }
      },
      Msg: {
        fields: {
          id: {
            type: "int32",
            id: 1
          },
          sourceUid: {
            type: "int32",
            id: 2
          },
          targetUid: {
            type: "int32",
            id: 3
          },
          sidFid: {
            type: "int32",
            id: 4
          },
          dataLength: {
            type: "int32",
            id: 5
          },
          contentType: {
            type: "int32",
            id: 6
          },
          protocolType: {
            type: "int32",
            id: 7
          },
          serviceId: {
            type: "int32",
            id: 8
          },
          funcId: {
            type: "int32",
            id: 9
          },
          reserved: {
            type: "string",
            id: 10
          },
          content: {
            type: "string",
            id: 11
          },
          endChar: {
            type: "string",
            id: 12
          },
          sourceServiceId: {
            type: "int32",
            id: 13
          },
          sourceFuncId: {
            type: "int32",
            id: 14
          }
        }
      },
      Login: {
        fields: {
          sourceUid: {
            type: "int32",
            id: 1
          },
          token: {
            type: "string",
            id: 2
          }
        }
      },
      LoginRes: {
        fields: {
          code: {
            type: "int32",
            id: 1
          },
          errMsg: {
            type: "string",
            id: 2
          },
          uid: {
            type: "int32",
            id: 3
          }
        }
      },
      ProjectPushMsg: {
        fields: {
          type: {
            type: "int32",
            id: 1
          },
          sourceUid: {
            type: "int32",
            id: 2
          },
          sourceProjectId: {
            type: "int32",
            id: 3
          },
          targetProjectId: {
            type: "int32",
            id: 4
          },
          targetUids: {
            type: "string",
            id: 5
          },
          content: {
            type: "string",
            id: 6
          }
        }
      },
      KickOff: {
        fields: {
          sourceUid: {
            type: "int32",
            id: 1
          },
          time: {
            type: "int64",
            id: 2
          }
        }
      },
      CfgServer: {
        fields: {
          ListenIp: {
            type: "string",
            id: 1
          },
          OutIp: {
            type: "string",
            id: 2
          },
          OutDomain: {
            type: "string",
            id: 3
          },
          WsPort: {
            type: "string",
            id: 4
          },
          TcpPort: {
            type: "string",
            id: 5
          },
          UdpPort: {
            type: "string",
            id: 6
          },
          WsUri: {
            type: "string",
            id: 7
          },
          DefaultProtocolType: {
            type: "int32",
            id: 8
          },
          DefaultContentType: {
            type: "int32",
            id: 9
          },
          LoginAuthType: {
            type: "string",
            id: 10
          },
          LoginAuthSecretKey: {
            type: "string",
            id: 11
          },
          MaxClientConnNum: {
            type: "int32",
            id: 12
          },
          MsgContentMax: {
            type: "int32",
            id: 13
          },
          IOTimeout: {
            type: "int64",
            id: 14
          },
          ConnTimeout: {
            type: "int32",
            id: 15
          },
          ClientHeartbeatTime: {
            type: "int32",
            id: 16
          },
          ServerHeartbeatTime: {
            type: "int32",
            id: 17
          }
        }
      },
      CfgProtoMap: {
        fields: {
          client: {
            keyType: "int32",
            type: "CfgProtoServiceFunc",
            id: 1
          },
          server: {
            keyType: "int32",
            type: "CfgProtoServiceFunc",
            id: 2
          }
        }
      },
      CfgProtoServiceFunc: {
        fields: {
          id: {
            type: "int32",
            id: 1
          },
          serviceId: {
            type: "string",
            id: 2
          },
          funcId: {
            type: "string",
            id: 3
          },
          funcName: {
            type: "string",
            id: 4
          },
          response: {
            type: "string",
            id: 6
          },
          request: {
            type: "string",
            id: 7
          },
          desc: {
            type: "string",
            id: 8
          },
          demo: {
            type: "string",
            id: 9
          }
        }
      },
      TwinAgora: {
        methods: {
          CS_Heartbeat: {
            requestType: "Heartbeat",
            responseType: "Empty"
          },
          CS_CallPeople: {
            requestType: "CallPeopleReq",
            responseType: "Empty"
          },
          CS_CancelCallPeople: {
            requestType: "CancelCallPeopleReq",
            responseType: "Empty"
          },
          CS_PeopleEntry: {
            requestType: "PeopleEntry",
            responseType: "Empty"
          },
          CS_PeopleLeave: {
            requestType: "PeopleLeaveRes",
            responseType: "Empty"
          },
          CS_CallPeopleAccept: {
            requestType: "CallVote",
            responseType: "Empty"
          },
          CS_CallPeopleDeny: {
            requestType: "CallVote",
            responseType: "Empty"
          },
          CS_RoomHeartbeat: {
            requestType: "RoomHeartbeatReq",
            responseType: "Empty"
          },
          SC_CallPeople: {
            requestType: "CallPeopleRes",
            responseType: "Empty"
          },
          SC_CancelCallPeople: {
            requestType: "CancelCallPeopleReq",
            responseType: "Empty"
          },
          SC_PeopleEntry: {
            requestType: "PeopleEntry",
            responseType: "Empty"
          },
          SC_PeopleLeave: {
            requestType: "PeopleLeaveRes",
            responseType: "Empty"
          },
          SC_CallReply: {
            requestType: "CallReply",
            responseType: "Empty"
          },
          SC_CallPeopleAccept: {
            requestType: "CallVote",
            responseType: "Empty"
          },
          SC_CallPeopleDeny: {
            requestType: "CallVote",
            responseType: "Empty"
          },
          FdClose: {
            requestType: "FDCloseEvent",
            responseType: "Empty"
          },
          FdCreate: {
            requestType: "FDCreateEvent",
            responseType: "Empty"
          }
        }
      },
      RoomHeartbeatReq: {
        fields: {
          sourceUid: {
            type: "int32",
            id: 1
          },
          time: {
            type: "int64",
            id: 2
          },
          roomId: {
            type: "string",
            id: 3
          },
          uid: {
            type: "int32",
            id: 4
          }
        }
      },
      CancelCallPeopleReq: {
        fields: {
          sourceUid: {
            type: "int32",
            id: 1
          },
          uid: {
            type: "int32",
            id: 2
          },
          roomId: {
            type: "string",
            id: 3
          }
        }
      },
      CallVote: {
        fields: {
          sourceUid: {
            type: "int32",
            id: 1
          },
          uid: {
            type: "int32",
            id: 2
          },
          roomId: {
            type: "string",
            id: 3
          }
        }
      },
      CallPeopleReq: {
        fields: {
          sourceUid: {
            type: "int32",
            id: 1
          },
          uid: {
            type: "int32",
            id: 2
          },
          targetUid: {
            type: "int32",
            id: 3
          },
          channel: {
            type: "string",
            id: 4
          },
          peopleType: {
            type: "int32",
            id: 5
          },
          peopleRole: {
            type: "int32",
            id: 6
          },
          agoraAppId: {
            type: "string",
            id: 7
          },
          agoraChannel: {
            type: "string",
            id: 8
          }
        }
      },
      CallPeopleRes: {
        fields: {
          sourceUid: {
            type: "int32",
            id: 1
          },
          receiveUid: {
            type: "string",
            id: 2
          },
          channel: {
            type: "string",
            id: 3
          },
          errCode: {
            type: "int32",
            id: 4
          },
          errMsg: {
            type: "string",
            id: 5
          },
          roomId: {
            type: "string",
            id: 6
          },
          agoraAppId: {
            type: "string",
            id: 7
          },
          agoraChannel: {
            type: "string",
            id: 8
          }
        }
      },
      PeopleEntry: {
        fields: {
          sourceUid: {
            type: "int32",
            id: 1
          },
          uid: {
            type: "int32",
            id: 2
          },
          channel: {
            type: "string",
            id: 3
          },
          roomId: {
            type: "string",
            id: 4
          }
        }
      },
      PeopleLeaveRes: {
        fields: {
          sourceUid: {
            type: "int32",
            id: 1
          },
          uid: {
            type: "int32",
            id: 2
          },
          channel: {
            type: "string",
            id: 3
          },
          roomId: {
            type: "string",
            id: 4
          }
        }
      },
      CallReply: {
        fields: {
          sourceUid: {
            type: "int32",
            id: 1
          },
          sendUid: {
            type: "int32",
            id: 2
          },
          targetUid: {
            type: "int32",
            id: 3
          },
          content: {
            type: "string",
            id: 4
          },
          msgType: {
            type: "int32",
            id: 5
          },
          roomId: {
            type: "string",
            id: 6
          },
          agoraAppId: {
            type: "string",
            id: 7
          },
          agoraChannel: {
            type: "string",
            id: 8
          }
        }
      }
    }
  }
});

module.exports = $root;

'use strict';

module.exports.IBpmnDiagram = require('./IBpmnDiagram.json');
module.exports.IProcessDefEntityTypeService = require('./IProcessDefEntityTypeService.json');
module.exports.INodeInstanceEntityTypeService = require('./INodeInstanceEntityTypeService.json');
module.exports.IImportFromXmlOptions = require('./IImportFromXmlOptions.json');
module.exports.IImportFromFileOptions = require('./IImportFromFileOptions.json');
module.exports.IParamStart = require('./IParamStart.json');
module.exports.IParamsContinueFromRemote = require('./IParamsContinueFromRemote.json');
module.exports.ISubprocessExternalEntity = require('./ISubprocessExternalEntity.json');
module.exports.ISubprocessInternalEntity = require('./ISubprocessInternalEntity.json');
module.exports.IBoundaryEventEntity = require('./IBoundaryEventEntity.json');
module.exports.IEndEventEntity = require('./IEndEventEntity.json');
module.exports.IEventEntity = require('./IEventEntity.json');
module.exports.IExclusiveGatewayEntity = require('./IExclusiveGatewayEntity.json');
module.exports.IFlowDefEntity = require('./IFlowDefEntity.json');
module.exports.ILaneEntity = require('./ILaneEntity.json');
module.exports.INodeDefEntity = require('./INodeDefEntity.json');
module.exports.INodeInstanceEntity = require('./INodeInstanceEntity.json');
module.exports.IParallelGatewayEntity = require('./IParallelGatewayEntity.json');
module.exports.IProcessEntity = require('./IProcessEntity.json');
module.exports.IProcessDefEntity = require('./IProcessDefEntity.json');
module.exports.IProcessTokenEntity = require('./IProcessTokenEntity.json');
module.exports.IScriptTaskEntity = require('./IScriptTaskEntity.json');
module.exports.IServiceTaskEntity = require('./IServiceTaskEntity.json');
module.exports.IStartEventEntity = require('./IStartEventEntity.json');
module.exports.IUserTaskEntity = require('./IUserTaskEntity.json');
module.exports.IParamImportFromFile = require('./IParamImportFromFile.json');
module.exports.IParamImportFromXml = require('./IParamImportFromXml.json');
module.exports.IParamUpdateDefs = require('./IParamUpdateDefs.json');
module.exports.IProcessEngineService = require('./IProcessEngineService.json');
module.exports.IProcessEntry = require('./IProcessEntry.json');
module.exports.IProcessRepository = require('./IProcessRepository.json');
module.exports.TimerDefinitionType = require('./TimerDefinitionType.json');
module.exports.IThrowEventEntity = require('./IThrowEventEntity.json');
module.exports.ICatchEventEntity = require('./ICatchEventEntity.json');
module.exports.IUserTaskMessageData = require('./IUserTaskMessageData.json');
module.exports._heritage = {
  "IImportFromXmlOptions": [
    "IImportFromFileOptions"
  ],
  "ISubprocessExternalEntity": [
    "INodeInstanceEntity"
  ],
  "ISubprocessInternalEntity": [
    "INodeInstanceEntity"
  ],
  "IBoundaryEventEntity": [
    "IEventEntity"
  ],
  "IEndEventEntity": [
    "IEventEntity"
  ],
  "IEventEntity": [
    "INodeInstanceEntity"
  ],
  "IExclusiveGatewayEntity": [
    "INodeInstanceEntity"
  ],
  "IFlowDefEntity": [
    "IEntity"
  ],
  "ILaneEntity": [
    "IEntity"
  ],
  "INodeDefEntity": [
    "IEntity"
  ],
  "INodeInstanceEntity": [
    "IEntity"
  ],
  "IParallelGatewayEntity": [
    "INodeInstanceEntity"
  ],
  "IProcessEntity": [
    "IEntity"
  ],
  "IProcessDefEntity": [
    "IEntity"
  ],
  "IProcessTokenEntity": [
    "IEntity"
  ],
  "IScriptTaskEntity": [
    "INodeInstanceEntity"
  ],
  "IServiceTaskEntity": [
    "INodeInstanceEntity"
  ],
  "IStartEventEntity": [
    "IEventEntity"
  ],
  "IUserTaskEntity": [
    "INodeInstanceEntity"
  ],
  "IThrowEventEntity": [
    "IEventEntity"
  ],
  "ICatchEventEntity": [
    "IEventEntity"
  ]
};

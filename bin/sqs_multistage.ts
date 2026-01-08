#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { SqsMultistageStack } from '../lib/sqs_multistage-stack';
import { Stages, EnvironmentProps } from '../lib/environments';

const stage = process.env.STAGE as Stages;
if (!stage) {
  throw new Error('STAGE is not defined');
}

const environment = EnvironmentProps[stage];
if (!environment) {
  throw new Error(`Invalid stage: ${stage}`);
}

const app = new cdk.App();
const st = new cdk.Stage(app, stage, {
  env: {
    account: environment.account,
    region: environment.region,
  }
});
new SqsMultistageStack(st, 'SqsMultiStack1', {
  queueName: `${stage}-MyQueue1`,
  maxMessageSizeKB: 4,
});
new SqsMultistageStack(st, 'SqsMultiStack2', {
  queueName: `${stage}-MyQueue2`,
  maxMessageSizeKB: 8,
});

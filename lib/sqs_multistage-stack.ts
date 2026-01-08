import * as cdk from 'aws-cdk-lib/core';
import { Construct } from 'constructs';
import * as sqs from 'aws-cdk-lib/aws-sqs';

export interface SqsMultiStackProps extends cdk.StackProps {
  queueName: string;
  maxMessageSizeKB: number;
}

export class SqsMultistageStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: SqsMultiStackProps) {
    super(scope, id, props);

    new sqs.Queue(this, 'Queue', {
      queueName: props.queueName,
      maxMessageSizeBytes: props.maxMessageSizeKB * 1024,
    });
  }
}

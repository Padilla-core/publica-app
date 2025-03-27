import { 
  SQSClient, 
  SendMessageCommand, 
  SendMessageCommandOutput,
} from '@aws-sdk/client-sqs';

export class QueueService {
  private sqs: SQSClient;

  constructor() {
    this.sqs = new SQSClient({
      region: 'us-east-1',
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID ?? '',
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY ?? '',
      },
    });
  }

  async sendMessage(queueUrl: string, messageBody: any): Promise<SendMessageCommandOutput> {
    const command = new SendMessageCommand({
      QueueUrl: queueUrl,
      MessageBody: JSON.stringify(messageBody),
    });

    try {
      return await this.sqs.send(command);
    } catch (error) {
      throw new Error(`Failed to send message to SQS: ${JSON.stringify(error)}`);
    }
  }
}

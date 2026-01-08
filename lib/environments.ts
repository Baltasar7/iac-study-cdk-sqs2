export type Stages = 'dev' | 'stg' | 'prd';

export interface EnvironmentProps {
  account: string;
  region: string;
}

export const EnvironmentProps: { [key in Stages]: EnvironmentProps } = {
  ['dev']: {
    account: 'xxxxxxxxxxxx',
    region: 'us-east-1',
  },
  ['stg']: {
    account: 'xxxxxxxxxxxx',
    region: 'ap-northeast-1',
  },
  ['prd']: {
    account: 'xxxxxxxxxxxx',
    region: 'us-east-1',
  },
}
import { ClassNameFormatter, withNaming } from '@bem-react/classname';

export const getBEM = (blockName: string): { bem: ClassNameFormatter } => ({
  bem: withNaming({
    n: 'fluidity-',
    e: '__',
    m: '--',
    v: '_',
  })(blockName),
});

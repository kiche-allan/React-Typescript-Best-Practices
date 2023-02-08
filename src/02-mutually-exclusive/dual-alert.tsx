import type { FC } from 'react';
import { useIntl } from 'react-intl';

type Variant =
  | 'danger'
  | 'dark'
  | 'info'
  | 'light'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning';

type Props = (
  | {
      message: string;
      messageId?: never;
    }
  | {
      message?: never;
      messageId: string;
    }
) & {
  variant?: Variant;
};

export const DualAlert: FC<Props> = ({
  message,
  messageId,
  variant = 'primary',
}) => {
  const { formatMessage } = useIntl();

  const actualMessage = message ?? formatMessage({ id: messageId });

  return (
    <div className={`alert alert-${variant}`} role="alert">
      {actualMessage}
    </div>
  );
};


// mutually exclusive props in React
// two props might be mutually exclusive
// you must pass one of them but not both

// use an or between multiple prop types
//  - with an optional 'never' to prevent illegal combinations

// In React, mutually exclusive component props are properties passed to a component that cannot be used together. They are often used to control the behavior or appearance of a component in a specific manner, where only one of the props can be used at a time. For example, a button component in React might have mutually exclusive props such as "primary" and "secondary" that determine its appearance, and only one can be selected to be applied. The implementation of mutually exclusive component props will vary based on the design and requirements of the component, but it typically involves using conditional logic in the component's render method to determine which prop to use.
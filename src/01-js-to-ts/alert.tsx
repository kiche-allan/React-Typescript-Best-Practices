import { FC } from 'react';
import { useIntl } from 'react-intl';

type Props = {
  messageId: string;
  variant: 'primary' | 'secondary' | 'success' | 'danger';
};

// #\functional component
export const Alert: FC<Props> = ({ messageId, variant }) => {
  const { formatMessage } = useIntl();

  if (!messageId) {
    throw new Error('The messageId prop is required');
  }

  return (
    <div className={`alert alert-${variant}`} role="alert">
      {formatMessage({ id: messageId })}
    </div>
  );
};

// The above code is a functional component that uses the useIntl hook to get the formatMessage function. The formatMessage function is used to format the message with the id passed in the messageId prop. The variant prop is used to set the variant of the alert.


// The Alert component is used in the App component. the component eceives two props named messageId and variant. The messageId is used to get the message from the messages object. The variant is used to set the variant of the alert. The component uses the useIntl hook to get the formatMessage function. The formatMessage function is used to format the message with the id passed in the messageId prop. The variant prop is used to set the variant of the alert.
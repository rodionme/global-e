import { Step } from './Step';
import { SummaryField } from './SummaryField';
import { FormValues } from './Registration';

type SummaryProps = {
  userData: FormValues;
  onGoForward: () => void;
};

export const Summary = ({ userData, onGoForward }: SummaryProps) => {
  return (
    <Step title="Summary" onGoForward={onGoForward}>
      <SummaryField title="First Name" value={userData.firstName} />
      <SummaryField title="Last Name" value={userData.lastName} />
      <SummaryField title="Email" value={userData.email} />
      <SummaryField title="Street" value={userData.street} />
      <SummaryField title="City" value={userData.city} />
      <SummaryField title="State" value={userData.state} />
      <SummaryField title="Zip" value={userData.zip} />
      <SummaryField title="Username" value={userData.username} />
    </Step>
  );
};

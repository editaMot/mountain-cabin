import SettingsUpdateForm from "../../features/settings/SettingsUpdateForm";
import PageHeader from "../../ui/PageHeader";

const Settings = () => {
  return (
    <>
      <PageHeader heading="Update cabins settings" />
      <SettingsUpdateForm />
    </>
  );
};

export default Settings;

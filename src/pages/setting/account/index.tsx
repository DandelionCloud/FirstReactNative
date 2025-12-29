import { View, Text } from 'react-native';

import StyledScreen from '../components/styled-screen';
import { DrawerScreenProp } from '../../../routes/define';

export default function AccountSecurity(
  props: DrawerScreenProp<'AccountSecurity'>,
) {
  const { navigation } = props;
  const handleReturn = () => {
    navigation.goBack();
    navigation.openDrawer();
  };
  return (
    <StyledScreen title="账号安全" onReturn={handleReturn}>
      <View></View>
    </StyledScreen>
  );
}

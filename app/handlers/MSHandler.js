import {Linking, Platform} from 'react-native';
import * as Clipboard from 'expo-clipboard';

export default class MSHandler {

    static openUrl(url) {
        Linking.canOpenURL(url).then((supported) => {
            if (!supported) {
                alert(`Sorry, we couldn't open this link!`);
            }
            return Linking.openURL(url);
        }).catch((error) => console.error(`An error occurred`, error));
    }

    static copyString(string) {
        if (Platform.OS === 'web') {
            navigator.clipboard.writeText(string);
        } else {
            Clipboard.setString(string);
        }
    }
}

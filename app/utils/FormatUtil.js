export default class FormatUtil {

    static formatAddress(address) {
        if (!address) return '';
        return `${address.substring(0, 5)}...${address.substring(address.length - 3)}`;
    }
}

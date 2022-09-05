export default class ImageUtil {

    static images = {
        ic_chain_bsc: require('assets/images/ic_chain_bsc.png'),
        ic_dolar: require('assets/images/ic_dolar.png'),
        ic_gem: require('assets/images/ic_gem.png'),
        ic_logo: require('assets/images/ic_logo.png'),
        ic_star: require('assets/images/ic_star.png'),
        ic_token_bnb: require('assets/images/ic_token_bnb.png'),
        ic_token_msx: require('assets/images/ic_token_msx.png'),
        ic_token_usdt: require('assets/images/ic_token_usdt.png'),
        mock_banner_0: require('assets/mock/images/banner-mock.png')
    };

    static getImage(imageUrl) {
        if (imageUrl && imageUrl.indexOf('http') > -1) {
            const fileName = imageUrl.substring(imageUrl.lastIndexOf('/') + 1, imageUrl.length);
            const fileNameWithoutExtension = fileName.substring(0, fileName.lastIndexOf('.'));
            if (fileNameWithoutExtension && this.images[fileNameWithoutExtension]) {
                return this.images[fileNameWithoutExtension];
            } else {
                return {uri: imageUrl};
            }
        } else if (imageUrl && imageUrl.indexOf('base64') > -1) {
            return {uri: imageUrl};
        } else {
            if (this.images[imageUrl]) {
                return this.images[imageUrl];
            } else {
                return require('assets/images/ic_loading.gif');
            }
        }
    }
}

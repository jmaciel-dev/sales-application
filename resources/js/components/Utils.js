/**
 * Classe com utilidades para uso em toda a  aplicacao.
 *
 */
class Utils {
    constructor() {

    }

    /**
     * Retorna um recurso a partir de um GET uma url;
     * @param  {[string]} url [description]
     * @return {[json/bool]}     [description]
     */
    static getUrl(url) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'get'
            })
            .then(resp => {
                resp.json()
                .then(data => {
                    resolve(data);
                });
            }).catch(err => {
                reject(err);
            });
        });
    }
}
export default Utils;

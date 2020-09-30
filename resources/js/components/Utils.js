class Utils {
    constructor() {

    }

    /**
     * Retorna um recurso a partir de um GET uma url;
     * @param  {[string]} url [description]
     * @return {[json/bool]}     [description]
     */
    static getUrl(url) {
        fetch(url, {
            method: 'get'
        })
        .then(resp => {
            resp.json()
            .then(data => {
                return data;
            });
        }).catch(err => {
            console.error(err);
        });
    }
}
export default Utils;

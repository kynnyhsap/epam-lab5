function request(URL, { method, headers }) {
    return new Promise((resolve, reject) => {
        const r = new XMLHttpRequest()

        r.onreadystatechange = () => {
            try {
                if (r.readyState === XMLHttpRequest.DONE) {
                    if (r.status >= 200 && r.status < 300) {
                        const data = null

                        resolve(r.responseText, r.status)
                    } else {
                        reject('There was a problem with the request.')
                    }
                }
            } catch (e) {
                reject(`Caught Exception: ${e.description}`)
            }
        };

        r.open(method, URL)
        r.send()
    })  
}

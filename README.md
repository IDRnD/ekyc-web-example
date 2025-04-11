### Preparation for Launch
* Download face(`idlive-face-capture-web-*.tar`) and document(`idlive-document-capture-web-*.tar`) web libraries from [Face Plus page](https://dev.idrnd.net/products/FACE_PLUS/sdk), unzip them. Inside, you will find three library versions: prod, [dev](https://docs.idrnd.net/idlivefaceplus/web/versions/development-version/), and [CSP](https://docs.idrnd.net/idlivefaceplus/web/versions/csp-compatible-version/). **FOR PRODUCTION USE, ONLY USE THE PROD VERSION**. 
* Unzip and place the desired version in the root of the project, using the folder names: `idlive-face-capture-web` and `idlive-document-capture-web`. 
* In the `config.js` file, add values to the following variables:
  * `API_KEY`: Add your API key, which can be obtained from [EKYC page](https://dev.idrnd.net/products/EKYC/cloud).
  * `DOCUMENT_LICENSE`: Add your document detector license, which you can find in the `idlive-document-detector-*-license.zip` file downloaded from [Face Plus page](https://dev.idrnd.net/products/FACE_PLUS/sdk).
  * `FACE_LICENSE`: Add your face detector license, which you can find in the `idlive-face-detector-*-license.zip` file downloaded from [Face Plus page](https://dev.idrnd.net/products/FACE_PLUS/sdk).

### Start Frontend

Now you can run the example. If you are using WebStorm or IntelliJ IDEA, simply open the `index.html` file in Google Chrome.

Alternatively, you can start the example using Docker:
1. Run the `start.sh` script.
2. The example will be available at http://localhost:8080.


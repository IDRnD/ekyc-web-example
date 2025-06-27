// You can find your API KEY in https://dev.idrnd.net/products/EKYC/cloud
export const API_KEY = 'YOUR_API_KEY'

// You can find the license on the https://dev.idrnd.net/products/FACE_PLUS/sdk. The license string from the idlive-document-detector-*-license.zip file is required.
export const DOCUMENT_LICENSE = 'YOUR_DOCUMENT_LICENSE'

// You can find the license on the https://dev.idrnd.net/products/FACE_PLUS/sdk. The license string from the idlive-face-detector-*-license.zip file is required.
export const FACE_LICENSE = 'YOUR_FACE_LICENSE'

export const CHECK_MODEL = {
    "operations": ["FACE_CHECK", "DOC_CHECK", "FACE_MATCH_VALIDATION"],
    "face_check_parameters": {
        "domain": "GENERAL",
        "pipelines": [
            {
                "type": "PRESENTATION_ATTACK"
            },
            {
                "type": "DEEPFAKE_ATTACK"
            },
            {
                "type": "INJECTION_ATTACK"
            }
        ]
    },
    "document_check_parameters": {
        "pipelines": [
            {
                "type": "SCREEN_REPLAY_ATTACK"
            },
            {
                "type": "PRINTED_COPY_ATTACK"
            },
            {
                "type": "PORTRAIT_SUBSTITUTION_ATTACK"
            }
        ]
    }
}

export const EKYC_BACKEND_URL = 'https://ekyc-rest-api.idrnd.net'

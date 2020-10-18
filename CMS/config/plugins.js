module.exports = {
    upload: {
        provider: 'google-cloud-storage',
        providerOptions: {
            bucketName: 'divingdjursland-bucket',
            publicFiles: true,
            uniform: false,
            serviceAccount: {
                type: "service_account",
                project_id: "fourth-groove-289807",
                private_key_id: "7897e17076506c9b98a75389b22c20485e98f213",
                private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCzQ3ihNuvfKpyb\nNcD1bYCnfQjmD4ry5OSehY6FQL4gJqBTB78msJFGyy/pt1F7RQupQ50Hw6ANNErd\nDFkEOO06uWgyaOldc6uyEebZ3BMwbac+Y2rIsV4CLyD9jtsL057kMogj959GT1fp\n1naNtOiXKlihTnN+bAmIYHe0nosxFM/vls2MWrc/lmFpVjounW53eIogOp/PlnA/\nL8rafMZPUeCr+bCA2Idd/kAxklc++oaoQJZtce8PsyaTcqZBHSD8U7XmjeoDIaid\nTxTYieABy5cTAKlkREw/g3RCCEUGrpRHkQT/Znjt3AQjrNvOvaVLBts+KGpG6dc6\ns25G+uDFAgMBAAECggEACIJDm81eUUu1vsVEqTGfKXQNI9RpiUF1m5Ol0eviimai\n9gX4XAcGAkj7N3oA11vN46UmsztlIbNReWAQapukIQUzba8eopWuuOdSIJWqYIJX\n7aVs6GVI28wuYfKxsYRENrsyTJjAmecCuoH4Qx4q6x/ysIdngoDwy+UeUXe0DiqF\nFnycQLaPvoxwBysOqlSXVYzcALlRalN5u/4WcGV3pB9PpurEdVBwaEdpFX3nGLTC\n7FPpDckee3DKqaluzi1Y6YTDr7YqrhLTLyaIpGK9P9N2ropSSUiaaQnyaitDrwd4\nQHffUUhsVYtvNMy5No4/gIK9TL4xlQLoO3lE2bdugQKBgQDm0PzC/zyK1jVmDxk6\nqIRn1LezsCADpPL/VU8gsDTZuLLlObL1iWq04pHTj7KWQCAj8J65W/AjPs7eLim7\nC/LzQLzBBTga2VcUmPFWnF8IlIimkdmHfHegb66oVfRFCjJMVtQgeWYDk2svZJLm\nYOhUqf14yMITt1fNkFs48iQbgQKBgQDG0otqAfjLWxswbJqKWDe1YMxayExODnYX\nZkgTB/36kjjfUuMki2zGeDqgXOllT0RplOWU66MQA2YDRX2MnuwUWxA463g3sxm+\n39RozHDSkOX8f6vZC4ERJZL21GIHKbb0ej43fCCLPxi738IBLJ4Ry7+koByN4zQz\nezB0H7b3RQKBgQC6/VHYE3iTrWgDL3Yr7Duf9leAbc3xxd7Kde0tuTKHs7bSN0VA\n37ufoPGsp/xw9rBTDWs5FT9c/lQO8O0DyHFhGfAQm07RiYOffyv9E591zwdJklzd\nAzvSsMeZPlEu4UzQRYOCb3byrKon8d2EX7u4YyKiiFmaKW0rbqhIYPpZgQKBgFnw\n/u5arADaWwdh6dsxoyni+y8KMzKQai2VsH8je2px4VZteaGbjP6Pfv3yagbRgAI/\nQEhI/IAO+YP7WJtXfTaMJ1+Ibd7Mn5XwTXeHHHa048WAv+20vZNTKxOL6jiRT1lz\nP1f8SACV74t14p6DX5JvWGeRorkxEflD/hxaCHv9AoGAF/VvqQ3yQ/T8qKzFQU7w\nUAvkPJo31vMjmqb/5gVo0n+56Xybmk9GNgzPB6nz7fQ9vbRO6AjEPLxLu8I5O2eu\n8NquSpkTuSaLb38IuOGS8P2g0/xAG5ua+9fYGd038XE8qY0Cr+f1+h+DMdgI5ZWo\nznQGASWuxshiQr4GpVgfCac=\n-----END PRIVATE KEY-----\n",
                client_email: "divingdjursland@fourth-groove-289807.iam.gserviceaccount.com",
                client_id: "102775332713499821357",
                auth_uri: "https://accounts.google.com/o/oauth2/auth",
                token_uri: "https://oauth2.googleapis.com/token",
                auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
                client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/divingdjursland%40fourth-groove-289807.iam.gserviceaccount.com"
            },
            baseUrl: 'https://storage.googleapis.com/{bucket-name}',
            basePath: '',
        },
    },
    //...
}
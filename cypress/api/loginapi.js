import { restClient } from "../support/restClient"

export class LoginApi {


    loginToApplication(useremail, userpassword) {

        let payload = 
            {
                "user": {
                    "email": useremail,
                    "password": userpassword
                }
            }
        

            let headers = {
                "Content-Type": "application/json"
            }

          return  restClient.sendPostRequest("/api/users/login", headers, payload)

    }

}
export const loginApi = new LoginApi()
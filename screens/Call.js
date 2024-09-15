import { Linking } from "react-native";

export function Call(phone){
    Linking.openURL(`tel: ${phone}`)
}

export function Email(email){
    Linking.openURL(`mailto: ${email}`)
}

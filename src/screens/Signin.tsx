import { Center, Text, Icon } from "native-base";
import {Fontisto} from '@expo/vector-icons';
import { useAuth } from "../hooks/useAuth";

import Logo from '../assets/logo.svg';
import { Button } from "../components/Button";

export function Signin() {
    const {signIn, isUserLoading } = useAuth();

    // console.log('Dados do usuario =>', user );
    return (
        <Center flex={1} bgColor="gray.900">
        <Logo width={212} height={40} />
        <Button 
            title="Entrar com google"
            leftIcon={ <Icon as={Fontisto} name="google" color="white" size="md"/> }
            mt={12}
            type='SECONDARY'
            onPress={signIn}
            isLoading={isUserLoading}
            _loading={{_spinner: {color: "white"}}}
        />
        <Text color="white" textAlign="center" mt={4}>
            Não utilizamos nenhum informação além {'\n'}
            do seu e-mail para criação da sua conta.
        </Text>
          </Center>
    )
}
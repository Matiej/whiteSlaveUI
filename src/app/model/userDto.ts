export interface UserDto {
    id: string,
    username: string;
    login: string;
    password: string;
    matchingPassword: string;
    email: string;
   
    accountNonExpired: boolean;
    accountNonLocked: boolean;
    credentialsNonExpired: boolean;
    enabled: boolean;

} 
export interface CreateUserDto {
    username: string;
    login: string;
    password: string;
    matchingPassword: string;
    email: string;
    // authRoles: Array<string>;
    accountNonExpired: boolean;
    accountNonLocked: boolean;
    credentialsNonExpired: boolean;
    enabled: boolean;

} 